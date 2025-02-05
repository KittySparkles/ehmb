import {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useReducer,
} from "react";

import { CloverFilled } from "./CloverFilled";
import { LeafFilled } from "./LeafFilled";
import { LeafEmpty } from "./LeafEmpty";
import { CloverEmpty } from "./CloverEmpty";
import useInterval from "../../hooks/useInterval";

import Styles from "./styles.module.css";

type Color = "filled" | "empty";
type Shape = "leaf" | "clover";
type Border = "true" | "false";
type Item = { color: Color; shape: Shape; border: Border; target: boolean };
type State = {
  round: number;
  status: "ONGOING" | "STOPPED" | "FAILED" | "SUCCEEDED";
  symbols: Item[];
  time: number;
};

const SCHEMA = {
  color: ["empty", "filled"] as Color[],
  shape: ["leaf", "clover"] as Shape[],
  border: ["true", "false"] as Border[],
};

type Property = keyof typeof SCHEMA;

const TIME = 10;

function random<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function generate(count = 4) {
  // First, we pick at random a property that will be the determining factor to
  // find the solution.
  const properties = Object.keys(SCHEMA);
  const targetProperty = random(properties) as Property;
  const otherProperties = properties.filter(
    (property) => property !== targetProperty
  ) as Property[];

  // Then, we coin-flip which of the two property values will be the unique one.
  const targetPropertyValue = random(SCHEMA[targetProperty]);
  const otherPropertyValue = SCHEMA[targetProperty].find(
    (value) => value !== targetPropertyValue
  );

  // We can now create our array of items with the relevant property and its
  // value, and mark the first item the target one (we’ll shuffle the array
  // later).
  const items = Array.from({ length: count }).map((_, index) => ({
    [targetProperty]: index === 0 ? targetPropertyValue : otherPropertyValue,
    target: index === 0,
  }));

  // Then, we need to roll the 2 other properties without producing another
  // solution (no uniqueness this time around).
  for (const property of otherProperties) {
    const groups = (() => {
      // If we produce 4 items, there is only one way to split the set without
      // risking having a singled-out item: two groups of 2 items.
      if (count === 4) return [items.slice(0, 2), items.slice(2)];
      // If we produce 5 items, there is only one way to split the set without
      // risking having a singled-out item: a group of 2 and a group of 3.
      if (count === 5) return [items.slice(0, 3), items.slice(3)];
      // If we produce 6 items, there are two ways to split the set without
      // risking having a singled-out item: either a group of 2 and a group of 3
      // or two groups of 3 items. Pick either way at random.
      if (count === 6)
        return random([
          [items.slice(0, 3), items.slice(3)],
          [items.slice(0, 2), items.slice(2)],
        ]);
      return [];
    })();

    // Finally, iterate through both groups, and give the first value for the
    // property to all items of the first group, and the second value for the
    // property to all items of the second group.
    groups.forEach((group, index) => {
      for (const item of group)
        item[property] = SCHEMA[property as Property][index];
    });
  }

  return shuffle(items as Item[]);
}

function reducer(
  state: State,
  action:
    | { type: "START" }
    | { type: "DECREMENT" }
    | { type: "STOP" }
    | { type: "FAIL" }
    | { type: "PICK"; correct: boolean }
): State {
  if (action.type === "START") {
    return {
      round: 1,
      status: "ONGOING",
      symbols: generate(4),
      time: TIME,
    };
  }

  if (action.type === "DECREMENT") return { ...state, time: state.time - 1 };

  if (action.type === "PICK") {
    if (action.correct) {
      if (state.round === 3) {
        return { ...state, status: "SUCCEEDED" };
      }

      return {
        round: state.round + 1,
        status: "ONGOING",
        symbols: generate(state.round + 1 + 3),
        time: TIME,
      };
    }

    return { ...state, status: "FAILED" };
  }

  if (action.type === "FAIL") {
    return { ...state, status: "FAILED" };
  }

  if (action.type === "STOP")
    return {
      round: 1,
      status: "STOPPED",
      symbols: [],
      time: TIME,
    };

  return state;
}

function shuffle<T>(array: T[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const ThornvyrSimulator = () => {
  const [state, dispatch] = useReducer(reducer, {
    round: 1,
    status: "STOPPED",
    symbols: [],
    time: TIME,
  });

  useInterval(
    () => dispatch({ type: "DECREMENT" }),
    state.status === "ONGOING" ? 1000 : null
  );

  useEffect(() => {
    if (state.time === 0) dispatch({ type: "FAIL" });
  }, [state.time]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intended
  useEffect(() => {
    if (state.status === "ONGOING") {
      const el = document.querySelector("#ring");
      if (!el) return;
      const animations = el.getAnimations();
      for (const animation of animations) {
        if (
          animation.effect instanceof KeyframeEffect &&
          el.contains(animation.effect.target)
        ) {
          animation.cancel();
          animation.play();
        }
      }
    }
  }, [state.round, state.status]);

  const start = useCallback(() => dispatch({ type: "START" }), []);

  if (state.status === "STOPPED") {
    return (
      <div id="ring" className={Styles.ring}>
        <div className={Styles.middle}>
          <StartButton onClick={start}>Start</StartButton>
        </div>
      </div>
    );
  }

  if (state.status === "SUCCEEDED") {
    return (
      <div id="ring" className={Styles.ring}>
        <div className={Styles.middle}>
          <span className={Styles.time}>Success!</span>
          <StartButton onClick={start}>Restart</StartButton>
        </div>
      </div>
    );
  }

  if (state.status === "ONGOING" || state.status === "FAILED") {
    return (
      <div
        id="ring"
        className={[Styles.ring, state.status === "ONGOING" && Styles.animate]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={Styles.middle}>
          {state.status === "ONGOING" && (
            <span className={Styles.time}>{state.time}s</span>
          )}
          {state.status === "FAILED" && (
            <>
              <span className={Styles.time}>Failed.</span>
              <StartButton onClick={start}>Retry</StartButton>
            </>
          )}
        </div>
        <Symbols
          status={state.status}
          symbols={state.symbols}
          onClick={(symbol) =>
            dispatch({ type: "PICK", correct: symbol.target })
          }
        />
      </div>
    );
  }
};

const Symbols: FC<{
  status: State["status"];
  symbols: State["symbols"];
  onClick: (symbol: Item) => void;
}> = ({ symbols, status, onClick }) => (
  <ul
    style={
      {
        "--item-count": symbols.length,
        "--duration": 10,
      } as CSSProperties
    }
  >
    {symbols.map((symbol, index) => (
      <li
        // biome-ignore lint/suspicious/noArrayIndexKey: fine
        key={index}
        style={
          {
            "--rot": index * (360 / symbols.length),
          } as CSSProperties
        }
        className={[
          Styles.item,
          symbol.border === "true" ? Styles.border : "",
          status === "FAILED" && symbol.target ? Styles.answer : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          type="button"
          disabled={status === "FAILED"}
          onClick={() => onClick(symbol)}
        >
          {symbol.shape === "clover" && symbol.color === "filled" && (
            <CloverFilled
              title={`Clover, filled, ${
                symbol.border === "true" ? "with border" : "without border"
              }`}
            />
          )}
          {symbol.shape === "clover" && symbol.color === "empty" && (
            <CloverEmpty
              title={`Clover, empty, ${
                symbol.border === "true" ? "with border" : "without border"
              }`}
            />
          )}
          {symbol.shape === "leaf" && symbol.color === "empty" && (
            <LeafEmpty
              title={`Leaf, empty, ${
                symbol.border === "true" ? "with border" : "without border"
              }`}
            />
          )}
          {symbol.shape === "leaf" && symbol.color === "filled" && (
            <LeafFilled
              title={`Leaf, filled, ${
                symbol.border === "true" ? "with border" : "without border"
              }`}
            />
          )}
        </button>
      </li>
    ))}
  </ul>
);

const StartButton: FC<PropsWithChildren<{ onClick: VoidFunction }>> = ({
  children,
  onClick,
}) => (
  <button type="button" onClick={onClick} className={Styles.start}>
    {children}
  </button>
);

import { Link } from "react-router-dom";

import { useMastery } from "../../contexts/Mastery/Provider";
import { Box } from "../Box";
import { Title } from "../Title";
import { Popover } from "../Popover";
import { Button, buttonStyles } from "../Button";

import { RECOMMENDED_BUILDS } from "./data";
import Styles from "./styles.module.css";

export const RecommendedBuilds = () => {
  const mastery = useMastery();
  const builds = RECOMMENDED_BUILDS[mastery.id];

  if (builds.length === 0) return null

  return (
    <>
      <Title Component="h2" size={200}>
        Recommended builds
      </Title>

      <ul className={Styles.list}>
        {builds.map((build) => (
          <li key={build.hash} className={Styles.item}>
            <Box>
              <strong>{build.name}</strong> by {build.author}
              <div className={Styles.actions}>
                <Link
                  to={`/${mastery.slug}/${build.hash}`}
                  className={buttonStyles}
                >
                  Load
                </Link>
                {build.notes && (
                  <Popover
                    control={
                      <Button className={Styles.toggle}>
                        <span className={Styles.help}>ⓘ</span>
                        <Title Component="span">Notes</Title>
                      </Button>
                    }
                  >
                    <blockquote className={Styles.note}>
                      {build.notes.includes("\n") ? (
                        <ul>
                          {build.notes.split("\n").map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      ) : (
                        <q>{build.notes}</q>
                      )}
                    </blockquote>
                  </Popover>
                )}
              </div>
            </Box>
          </li>
        ))}
      </ul>
    </>
  );
};

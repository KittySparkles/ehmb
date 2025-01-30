import { useMemo, useCallback } from "react"

import type { Skill } from "../types"
import { useBuild } from "../contexts/Build/Provider"

type TileType = "void" | "bridge" | "skill"

export const useSkill = (skill?: Skill, position?: Skill["position"]) => {
  const { level, build, setBuild } = useBuild()
  const dependsOn = useMemo(
    () => build.find((other) => other.name === skill?.requires),
    [build, skill?.requires]
  )
  const dependencyOf = useMemo(
    () => build.find((other) => other.requires === skill?.name),
    [build, skill?.name]
  )

  const canIncrement = useMemo(() => {
    if (!skill) return { permission: "DENIED", reason: "UNKNOWN" }

    // Too many points spent
    if (level > 62) return { permission: "DENIED", reason: "MAX_SPENT" }

    // Not enough points spent
    if (level < skill.position[0] * 5)
      return { permission: "DENIED", reason: "NOT_ENOUGH_SPENT" }

    // Requirements unmet
    if (dependsOn && dependsOn.current < dependsOn.max)
      return { permission: "DENIED", reason: "MISSING_REQUIREMENT" }

    // Already maxed out skill
    if (skill.current === skill.max)
      return { permission: "DENIED", reason: "MAXED_OUT" }

    return { permission: "ALLOWED" }
  }, [skill, level, dependsOn])

  const canDecrement = useMemo(() => {
    if (!skill) return { permission: "DENIED", reason: "UNKNOWN" }

    // Skill not learnt
    if (skill.current === 0)
      return { permission: "DENIED", reason: "NOT_LEARNT" }

    // Dependency of another skill
    if (dependencyOf && dependencyOf.current > 0)
      return { permission: "DENIED", reason: "DEPENDENCY" }

    // Not enough points in the tree to still fulfill requirements
    if (
      build
        .filter((other) => other.name !== skill.name && other.current > 0)
        .some((skill) => level - skill.current - 1 < skill.position[0] * 5)
    )
      return { permission: "DENIED", reason: "TOO_MUCH_SPENT" }

    return { permission: "ALLOWED" }
  }, [skill, build, level, dependencyOf])

  const increment = useCallback(() => {
    if (!skill || !canIncrement) return
    const copy = structuredClone(build)
    const entry = copy.find((other) => other.name === skill.name)
    if (entry) entry.current = Math.min(entry.current + 1, entry.max)
    setBuild(copy)
  }, [canIncrement, build, setBuild, skill])

  const decrement = useCallback(() => {
    if (!skill || !canDecrement) return
    const copy = structuredClone(build)
    const entry = copy.find((other) => other.name === skill.name)
    if (entry) entry.current = Math.max(entry.current - 1, 0)
    setBuild(copy)
  }, [canDecrement, build, setBuild, skill])

  const state = useMemo(() => {
    const pos = position ?? skill?.position

    const isSameCol = (t: Skill) => (pos ? t.position[1] === pos[1] : false)
    const isBelow = (t: Skill) => (pos ? t.position[0] > pos[0] : false)

    const below = build.filter(isSameCol).find(isBelow)
    const isBridge = !skill && below ? "requires" in below : false
    const target = skill ?? (isBridge ? below : null)
    const isComplete = target ? target.current === target.max : false
    const isPristine = target ? target.current === 0 : false
    const type: TileType = skill ? "skill" : isBridge ? "bridge" : "void"

    if (type === "void") {
      return { type, status: null }
    }

    return {
      type,
      status: isComplete ? "complete" : isPristine ? "pristine" : "started",
    }
  }, [skill, position, build])

  return useMemo(
    () => ({
      increment,
      decrement,
      canIncrement,
      canDecrement,
      dependencyOf,
      dependsOn,
      state,
    }),
    [
      increment,
      decrement,
      canIncrement,
      canDecrement,
      dependencyOf,
      dependsOn,
      state,
    ]
  )
}

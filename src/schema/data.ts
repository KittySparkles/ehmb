import { BOW_SCHEMA } from "./BOW"
import { DOUBLE_BLADE_SCHEMA } from "./DOUBLE_BLADE"
import { DUAL_PISTOL_SCHEMA } from "./DUAL_PISTOL"
import { MAGIC_STAFF_SCHEMA } from "./MAGIC_STAFF"
import { RIFLE_SCHEMA } from "./RIFLE"
import { STONE_ORB_SCHEMA } from "./STONE_ORB"
import { TWO_HANDED_SCHEMA } from "./TWO_HANDED"

export const MASTERIES = [
  { name: "Bow", id: "bo" as const, schema: BOW_SCHEMA },
  { name: "Double Blade", id: "db" as const, schema: DOUBLE_BLADE_SCHEMA },
  { name: "Dual Pistol", id: "dp" as const, schema: DUAL_PISTOL_SCHEMA },
  { name: "Magic Staff", id: "ms" as const, schema: MAGIC_STAFF_SCHEMA },
  { name: "Rifle", id: "ri" as const, schema: RIFLE_SCHEMA },
  { name: "Stone Orb", id: "so" as const, schema: STONE_ORB_SCHEMA },
  { name: "Two-Handed", id: "th" as const, schema: TWO_HANDED_SCHEMA },
]

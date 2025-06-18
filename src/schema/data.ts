import { BOW_SCHEMA } from "./BOW"
import { DOUBLE_BLADE_SCHEMA } from "./DOUBLE_BLADE"
import { DUAL_PISTOL_SCHEMA } from "./DUAL_PISTOL"
import { MAGIC_STAFF_SCHEMA } from "./MAGIC_STAFF"
import { RIFLE_SCHEMA } from "./RIFLE"
import { SCYTHE_SCHEMA } from "./SCYTHE"
import { SHIELD_SCHEMA } from "./SHIELD"
import { STONE_ORB_SCHEMA } from "./STONE_ORB"
import { TWO_HANDED_SCHEMA } from "./TWO_HANDED"

export const MASTERIES = [
  {
    key: "Bow_Name",
    name: "Bow",
    slug: "bow",
    id: "bo" as const,
    schema: BOW_SCHEMA,
  },
  {
    key: "DoubleBlade_Name",
    name: "Double Blade",
    slug: "double-blade",
    id: "db" as const,
    schema: DOUBLE_BLADE_SCHEMA,
  },
  {
    key: "DualPistol_Name",
    name: "Dual Pistol",
    slug: "dual-pistol",
    id: "dp" as const,
    schema: DUAL_PISTOL_SCHEMA,
  },
  {
    key: "MagicStaff_Name",
    name: "Magic Staff",
    slug: "magic-staff",
    id: "ms" as const,
    schema: MAGIC_STAFF_SCHEMA,
  },
  {
    key: "Rifle_Name",
    name: "Rifle",
    slug: "rifle",
    id: "ri" as const,
    schema: RIFLE_SCHEMA,
  },
  {
    key: "Scythe_Name",
    name: "Scythe",
    slug: "scythe",
    id: "sc" as const,
    schema: SCYTHE_SCHEMA,
  },
  {
    key: "SwordAndShield_Name",
    name: "Shield",
    slug: "shield",
    id: "sh" as const,
    schema: SHIELD_SCHEMA,
  },
  {
    key: "StoneOrb_Name",
    name: "Stone Orb",
    slug: "stone-orb",
    id: "so" as const,
    schema: STONE_ORB_SCHEMA,
  },
  {
    key: "TwoHanded_Name",
    name: "Two-Handed",
    slug: "two-handed",
    id: "th" as const,
    schema: TWO_HANDED_SCHEMA,
  },
]

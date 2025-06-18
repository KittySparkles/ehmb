import type { RawSkill } from "../types"

export const SCYTHE_SCHEMA = [
  {
    id: 207,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 226,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 213,
    variables: {
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 225,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
      statName1: { type: "translation", value: "Stat_Armor" },
      statPower1: { type: "raw", value: "10/20/30/40/50" },
    },
    max: 5,
    position: [1, 0],
    requires: 207,
  },
  {
    id: 227,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [1, 1],
  },
  {
    id: 223,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [1, 2],
    requires: 226,
  },
  {
    id: 228,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "100/200/300/400/500" },
      statName1: { type: "translation", value: "Stat_HpRegen" },
      statPower1: { type: "raw", value: "40%/80%/120%/160%/200%" },
    },
    max: 5,
    position: [2, 0],
  },
  {
    id: 230,
    variables: {
      statName0: { type: "translation", value: "Stat_LifeSteal" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
      statName1: { type: "translation", value: "Stat_MovementSpeed" },
      statPower1: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [2, 1],
  },
  {
    id: 211,
    variables: {
      attackCount0: { type: "raw", value: "6", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectCount0: { type: "raw", value: "8", highlight: false },
    },
    max: 5,
    position: [2, 2],
  },
  {
    id: 220,
    variables: {
      effectCount1: { type: "raw", value: "1/2/3/4/5" },
      statName0: { type: "translation", value: "Stat_Armor" },
      effectPower0: { type: "raw", value: "100/150/200/250/300" },
    },
    max: 5,
    position: [3, 0],
  },
  {
    id: 212,
    variables: {
      effectPower0: { type: "raw", value: "25%/31%/37%/43%/50%" },
    },
    max: 5,
    position: [3, 2],
    requires: 211,
  },
  {
    id: 214,
    variables: {
      effectChance0: { type: "raw", value: "5%/6%/7%/8%/9%" },
      effectDuration0: { type: "raw", value: "6" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 3],
  },
  {
    id: 221,
    variables: {
      effectChance0: { type: "raw", value: "10%/12.5%/15%/17.5%/20%" },
      effectDamage0: { type: "raw", value: "X" },
      effectCooldown0: { type: "raw", value: "8" },
    },
    max: 5,
    position: [4, 0],
    requires: 220,
  },
  {
    id: 208,
    variables: {
      attackCount0: { type: "raw", value: "6", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 1],
  },
  {
    id: 215,
    variables: {
      effectCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 3],
    requires: 214,
  },
  {
    id: 222,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "2" },
    },
    max: 3,
    position: [5, 0],
    requires: 221,
  },
  {
    id: 231,
    variables: {
      statName0: { type: "translation", value: "Stat_PoisonDamage" },
      statPower0: { type: "raw", value: "9%/18%/27%/36%" },
    },
    max: 4,
    position: [5, 2],
  },
  {
    id: 224,
    variables: {
      statName0: { type: "translation", value: "Stat_BleedDamage" },
      statPower0: { type: "raw", value: "10%/20%/30%/40%" },
    },
    max: 4,
    position: [6, 0],
  },
  {
    id: 209,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
    requires: 208,
  },
  {
    id: 219,
    variables: {
      statName0: { type: "translation", value: "Stat_AllyDamage" },
      statPower0: { type: "raw", value: "1.5%/1.8%/2.1%/2.4%/2.7%" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 216,
    description:
      "Summon a permanent abomination to fight by your side, dealing *X* damage to all enemies in range with each attack.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 232,
    variables: {
      statName1: { type: "translation", value: "Stat_Resilience" },
      statPower1: { type: "raw", value: "5%" },
      effectCount0: { type: "raw", value: "40", highlight: false },
      statPower2: { type: "raw", value: "75%" },
    },
    max: 1,
    position: [7, 0],
  },
  {
    id: 210,
    variables: {},
    max: 1,
    position: [7, 1],
    requires: 209,
  },
  {
    id: 218,
    variables: {
      effectCount0: { type: "raw", value: "65", highlight: false },
      statName0: { type: "translation", value: "Stat_AllyDamage" },
      effectPower0: { type: "raw", value: "3%/3.5%/4%" },
    },
    max: 3,
    position: [7, 2],
    requires: 219,
  },
  {
    id: 217,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 3,
    position: [7, 3],
    requires: 216,
  },
] as RawSkill[]

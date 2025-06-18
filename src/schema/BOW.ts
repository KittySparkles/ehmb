import type { RawSkill } from "../types"

export const BOW_SCHEMA = [
  {
    id: 27,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 25,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "6%/12%/18%/24%/30%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 26,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 31,
    variables: {
      attackCount0: { type: "raw", value: "3", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [1, 0],
  },
  {
    id: 28,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 1,
    position: [1, 1],
  },
  {
    id: 29,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "6%/9%/12%/15%/18%" },
    },
    max: 5,
    position: [1, 2],
  },
  {
    id: 30,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "30/60/90/120/150" },
      statName1: { type: "translation", value: "Stat_Dodge" },
      statPower1: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [1, 3],
  },
  {
    id: 32,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.75" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 5,
    position: [2, 1],
  },
  {
    id: 33,
    variables: {
      effectChance0: { type: "raw", value: "10%/17.5%/25%/32.5%/40%" },
      effectDuration0: { type: "raw", value: "0.52/0.65/0.71/0.85/1s" },
    },
    max: 5,
    position: [2, 2],
  },
  {
    id: 34,
    variables: {
      effectChance0: { type: "raw", value: "5%/6%/7%/8%/9%" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [2, 3],
  },
  {
    id: 35,
    variables: {
      attackCount0: { type: "raw", value: "5", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.75" },
      effectDuration0: { type: "raw", value: "2.3" },
    },
    max: 5,
    position: [3, 0],
  },
  {
    id: 38,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [3, 2],
  },
  {
    id: 36,
    variables: {},
    max: 1,
    position: [3, 3],
  },
  {
    id: 37,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 4,
    position: [4, 0],
    requires: 35,
  },
  {
    id: 199,
    variables: {
      statName0: { type: "translation", value: "Stat_PoisonDamage" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [4, 1],
    requires: 32,
  },
  {
    id: 39,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [4, 2],
  },
  {
    id: 40,
    variables: {},
    max: 1,
    position: [4, 3],
    requires: 36,
  },
  {
    id: 41,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "10%/15%/20%/25%/30%" },
      statName1: { type: "translation", value: "Stat_Armor" },
      statPower1: { type: "raw", value: "2/4/6/8/10" },
      statName2: { type: "translation", value: "Stat_MaxHp" },
      statPower2: { type: "raw", value: "30/60/90/120/150" },
    },
    max: 5,
    position: [5, 1],
  },
  {
    id: 42,
    variables: {
      effectChance0: { type: "raw", value: "5%/10%/15%/20%/25%" },
      effectCount0: { type: "raw", value: "3" },
      effectCooldown0: { type: "raw", value: "3.5" },
    },
    max: 5,
    position: [5, 2],
  },
  {
    id: 47,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 2,
    position: [5, 3],
  },
  {
    id: 43,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 0],
  },
  {
    id: 44,
    variables: {
      statName0: { type: "translation", value: "Stat_LifeSteal" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
      statName1: { type: "translation", value: "Stat_HpRegen" },
      statPower1: { type: "raw", value: "40/80/120/160/200" },
    },
    max: 5,
    position: [6, 1],
    requires: 41,
  },
  {
    id: 163,
    variables: {
      attackCount0: { type: "raw", value: "7", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 3],
  },
  {
    id: 45,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 3,
    position: [7, 0],
    requires: 43,
  },
  {
    id: 46,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "1%/2%/3%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "10%/20%/30%" },
      statName2: { type: "translation", value: "Stat_AllDamage" },
      statPower2: { type: "raw", value: "10%/20%/30%" },
    },
    max: 3,
    position: [7, 2],
  },
  {
    id: 165,
    variables: {
      effectPower0: { type: "raw", value: "160%" },
    },
    max: 1,
    position: [7, 3],
    requires: 163,
  },
] as RawSkill[]

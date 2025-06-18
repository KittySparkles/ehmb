import type { RawSkill } from "../types"

export const RIFLE_SCHEMA = [
  {
    id: 48,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 52,
    variables: {
      effectChance0: { type: "raw", value: "10%/15%/20%/25%/30%" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 4,
    position: [0, 1],
  },
  {
    id: 49,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 50,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "40/80/120/160/200" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 51,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [1, 0],
  },
  {
    id: 55,
    variables: {
      effectChance0: { type: "raw", value: "20%/24%/28%/32%/36%" },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.9" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 5,
    position: [1, 1],
    requires: 52,
  },
  {
    id: 53,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [1, 2],
    requires: 49,
  },
  {
    id: 54,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "30/60/90/120/150" },
      statName1: { type: "translation", value: "Stat_AllDamage" },
      statPower1: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [2, 0],
  },
  {
    id: 204,
    variables: {
      statName0: { type: "translation", value: "Stat_FireDotDamage" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [2, 1],
  },
  {
    id: 58,
    variables: {
      attackCount0: { type: "raw", value: "6", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 4,
    position: [2, 2],
  },
  {
    id: 56,
    variables: {
      effectChance0: { type: "raw", value: "10%/12%/14%/16%/18%" },
      effectDuration0: { type: "raw", value: "2/2.2/2.4/2.6/2.8" },
      effectPower0: { type: "raw", value: "1.5%/1.8%/2.1%/2.4%/2.7%" },
    },
    max: 5,
    position: [2, 3],
  },
  {
    id: 57,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "2/4/6/8/10" },
    },
    max: 5,
    position: [3, 0],
    requires: 54,
  },
  {
    id: 62,
    variables: {
      attackCount0: { type: "raw", value: "5", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectCount0: {
        type: "raw",
        value: "140/180/220/260/300",
        highlight: false,
      },
    },
    max: 5,
    position: [3, 1],
  },
  {
    id: 61,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 4,
    position: [3, 2],
    requires: 58,
  },
  {
    id: 59,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%" },
      statName1: { type: "translation", value: "Stat_CriticalChance" },
      statPower1: { type: "raw", value: "1%/2%/3%/4%" },
    },
    max: 4,
    position: [3, 3],
  },
  {
    id: 60,
    variables: {
      statName0: { type: "translation", value: "Stat_Dodge" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [4, 0],
    requires: 57,
  },
  {
    id: 164,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
      statName1: { type: "translation", value: "Stat_MovementSpeed" },
      statPower1: { type: "raw", value: "1%/2%/3%/4%/5%" },
      statName2: { type: "translation", value: "Stat_LifeSteal" },
      statPower2: { type: "raw", value: "1/2/3/4/5" },
    },
    max: 5,
    position: [4, 2],
  },
  {
    id: 64,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "5%/6%/7%/8%/9%" },
    },
    max: 5,
    position: [5, 0],
  },
  {
    id: 66,
    variables: {},
    max: 1,
    position: [5, 1],
    requires: 62,
  },
  {
    id: 65,
    variables: {
      attackCount0: { type: "raw", value: "13", highlight: false },
    },
    max: 1,
    position: [5, 2],
  },
  {
    id: 67,
    variables: {},
    max: 1,
    position: [5, 3],
  },
  {
    id: 68,
    variables: {
      attackCount0: { type: "raw", value: "3", highlight: false },
      effectCount0: { type: "raw", value: "3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 3,
    position: [6, 1],
  },
  {
    id: 63,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 1,
    position: [6, 2],
    requires: 65,
  },
  {
    id: 70,
    variables: {},
    max: 1,
    position: [7, 1],
    requires: 68,
  },
  {
    id: 69,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectCount0: { type: "raw", value: "1/2/3" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 3,
    position: [7, 3],
  },
] as RawSkill[]

import type { RawSkill } from "../types"

export const DUAL_PISTOL_SCHEMA = [
  {
    id: 94,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "6%/12%/18%/24%/30%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 95,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 96,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "60/120/180/240/300" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 97,
    variables: {
      effectChance0: { type: "raw", value: "2.5%/3.1%/3.7%/4.3%/5%" },
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectCooldown0: { type: "raw", value: "2" },
    },
    max: 5,
    position: [1, 1],
    requires: 95,
  },
  {
    id: 98,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%" },
    },
    max: 4,
    position: [1, 2],
  },
  {
    id: 99,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "3/6/9/12" },
    },
    max: 4,
    position: [1, 3],
    requires: 96,
  },
  {
    id: 100,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [2, 0],
    requires: 94,
  },
  {
    id: 101,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      effectPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
      statName1: { type: "translation", value: "Stat_AttackSpeed" },
      effectPower1: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [2, 2],
    requires: 98,
  },
  {
    id: 102,
    variables: {
      statName0: { type: "translation", value: "Stat_Dodge" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [2, 3],
  },
  {
    id: 103,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
      statName1: { type: "translation", value: "Stat_MaxHp" },
      statPower1: { type: "raw", value: "30/60/90/120/150" },
    },
    max: 5,
    position: [3, 0],
    requires: 100,
  },
  {
    id: 104,
    variables: {
      attackCount0: { type: "raw", value: "24", highlight: false },
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 1],
  },
  {
    id: 105,
    variables: {
      attackCount0: { type: "raw", value: "18", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.30" },
      effectDuration0: { type: "raw", value: "1/2/3/4/5" },
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
    },
    max: 5,
    position: [3, 2],
  },
  {
    id: 106,
    variables: {
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 1],
    requires: 104,
  },
  {
    id: 107,
    variables: {
      effectEveryX0: { type: "raw", value: "0.75/0.67/0.6/0.52/0.43" },
      effectDamage0: { type: "raw", value: "X" },
      effectDuration0: { type: "raw", value: "2" },
    },
    max: 5,
    position: [4, 2],
    requires: 105,
  },
  {
    id: 203,
    variables: {
      statName0: { type: "translation", value: "Stat_FireDotDamage" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [4, 3],
  },
  {
    id: 108,
    variables: {},
    max: 1,
    position: [5, 0],
  },
  {
    id: 109,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
      statName1: { type: "translation", value: "Stat_LifeSteal" },
      statPower1: { type: "raw", value: "2/3/4/5/6" },
      statName2: { type: "translation", value: "Stat_MaxHp" },
      statPower2: { type: "raw", value: "30/60/90/120/150" },
    },
    max: 5,
    position: [5, 2],
  },
  {
    id: 110,
    variables: {},
    max: 1,
    position: [6, 0],
    requires: 108,
  },
  {
    id: 111,
    variables: {
      attackCount0: { type: "raw", value: "20", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
  },
  {
    id: 205,
    variables: {
      attackCount0: { type: "raw", value: "17", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 112,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.3" },
      effectDuration0: { type: "raw", value: "4.6/5/5.4/5.8/6.2" },
      effectCooldown0: { type: "raw", value: "12" },
    },
    max: 5,
    position: [6, 3],
  },
  {
    id: 113,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 3,
    position: [7, 1],
    requires: 111,
  },
  {
    id: 206,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectCount0: { type: "raw", value: "30/33/36/39/42", highlight: false },
      effectDuration0: { type: "raw", value: "2" },
    },
    max: 5,
    position: [7, 2],
  },
  {
    id: 114,
    variables: {},
    max: 1,
    position: [7, 3],
    requires: 112,
  },
] as RawSkill[]

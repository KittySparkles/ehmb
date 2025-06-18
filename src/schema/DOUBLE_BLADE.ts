import type { RawSkill } from "../types"

export const DOUBLE_BLADE_SCHEMA = [
  {
    id: 72,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 73,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 74,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 75,
    variables: {
      statName0: { type: "translation", value: "Stat_LifeSteal" },
      statPower0: { type: "raw", value: "1.5/3/4.5/6/7.5" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 76,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "6%/12%/18%/24%/30%" },
    },
    max: 5,
    position: [1, 0],
    requires: 72,
  },
  {
    id: 77,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
      statName1: { type: "translation", value: "Stat_AllDamage" },
      statPower1: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [1, 1],
    requires: 73,
  },
  {
    id: 78,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [1, 2],
  },
  {
    id: 79,
    variables: {
      effectChance0: { type: "raw", value: "10%/15%/20%/25%/30%" },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.63/0.6/0.56/0.53/0.5" },
      effectDuration0: { type: "raw", value: "2/2.3/2.6/2.9/3.2" },
    },
    max: 5,
    position: [1, 3],
  },
  {
    id: 80,
    variables: {
      statName0: { type: "translation", value: "Stat_Dodge" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%" },
    },
    max: 4,
    position: [2, 1],
  },
  {
    id: 81,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "1.6/1.42/1.26/1.1/0.94" },
      effectDuration0: { type: "raw", value: "4" },
    },
    max: 5,
    position: [2, 3],
    requires: 79,
  },
  {
    id: 82,
    variables: {
      attackCount0: { type: "raw", value: "8", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 0],
  },
  {
    id: 88,
    variables: {
      effectCooldown0: { type: "raw", value: "15" },
      statName0: { type: "translation", value: "Stat_AllDamage" },
      effectPower0: { type: "raw", value: "50%" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 1,
    position: [3, 1],
    requires: 80,
  },
  {
    id: 83,
    variables: {
      attackCount0: { type: "raw", value: "10", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 2],
  },
  {
    id: 84,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 0],
    requires: 82,
  },
  {
    id: 85,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 2],
    requires: 83,
  },
  {
    id: 196,
    variables: {
      statName0: { type: "translation", value: "Stat_PoisonDamage" },
      statName1: { type: "translation", value: "Stat_BleedDamage" },
      statPower0: { type: "raw", value: "15%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [4, 3],
    requires: 81,
  },
  {
    id: 86,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      effectPower0: { type: "raw", value: "10%/12.5%/15%/17.5%" },
      statName1: { type: "translation", value: "Stat_AttackSpeed" },
      effectPower1: { type: "raw", value: "5%/10%/15%/20%" },
      effectDuration0: { type: "raw", value: "1" },
    },
    max: 4,
    position: [5, 0],
    requires: 84,
  },
  {
    id: 89,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      effectPower0: { type: "raw", value: "3%/3.75%/4.5%/5.25%/6%" },
      effectDuration0: { type: "raw", value: "1/2/3/4/5" },
      effectCount0: { type: "raw", value: "10" },
    },
    max: 5,
    position: [6, 0],
  },
  {
    id: 90,
    variables: {
      attackCount0: { type: "raw", value: "10", highlight: false },
      effectCount0: { type: "raw", value: "2/4/6/8/10" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
  },
  {
    id: 91,
    variables: {
      attackCount0: { type: "raw", value: "10", highlight: false },
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 87,
    variables: {
      effectCount0: { type: "raw", value: "100", highlight: false },
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      effectPower0: { type: "raw", value: "5%/6%/7%/8%/9%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      effectPower1: { type: "raw", value: "10%/15%/20%/25%/30%" },
    },
    max: 5,
    position: [6, 3],
  },
  {
    id: 92,
    variables: {},
    max: 1,
    position: [7, 1],
    requires: 90,
  },
  {
    id: 93,
    variables: {
      effectChance0: { type: "raw", value: "15%" },
      effectCount0: { type: "raw", value: "75" },
      effectDuration0: { type: "raw", value: "8" },
    },
    max: 1,
    position: [7, 2],
    requires: 91,
  },
  {
    id: 200,
    variables: {
      effectChance0: { type: "raw", value: "1%/1.15%/1.3%/1.45%/1.6%" },
      effectPower0: { type: "raw", value: "2.2%/4.4%/6.6%/8.8%/10.1%" },
    },
    max: 5,
    position: [7, 3],
    requires: 87,
  },
] as RawSkill[]

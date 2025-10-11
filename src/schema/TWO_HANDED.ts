import type { RawSkill } from "../types"

export const TWO_HANDED_SCHEMA = [
  {
    id: 0,
    variables: {
      statPower0: { type: "raw", value: "7%/14%/21%/28%/35%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 1,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 7,
    variables: {
      effectChance0: { type: "raw", value: "20%/30%/40%/50%/60%" },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.49" },
      effectDuration0: { type: "raw", value: "4" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 2,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 4,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "35/70/105/140/175" },
      statName1: { type: "translation", value: "Stat_AllDamage" },
      statPower1: { type: "raw", value: "6%/9%/12%/15%/18%" },
    },
    max: 5,
    position: [1, 0],
    requires: 0,
  },
  {
    id: 5,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "1.5/3/4.5/5/6.5" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "7.5%/11.25%/15%" },
    },
    max: 3,
    position: [1, 1],
    requires: 1,
  },
  {
    id: 6,
    variables: {
      effectChance0: { type: "raw", value: "20%/40%/60%/80%/100%" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [1, 3],
    requires: 2,
  },
  {
    id: 8,
    variables: {
      statName0: { type: "translation", value: "Stat_Dodge" },
      statPower0: { type: "raw", value: "5%/10%" },
    },
    max: 2,
    position: [2, 0],
  },
  {
    id: 10,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5/0.45/0.4/0.35/0.3" },
      effectDuration0: { type: "raw", value: "2.5" },
      effectCount0: { type: "raw", value: "22/45/68/91/114", highlight: false },
    },
    max: 5,
    position: [2, 1],
  },
  {
    id: 197,
    variables: {
      statName0: { type: "translation", value: "Stat_BleedDamage" },
      statPower0: { type: "raw", value: "10%/20%/30%/40%/50%" },
    },
    max: 5,
    position: [2, 2],
    requires: 7,
  },
  {
    id: 9,
    variables: {
      effectCount0: { type: "raw", value: "20/40/60", highlight: false },
      statPower0: { type: "raw", value: "20%/25%/30%" },
    },
    max: 3,
    position: [2, 3],
  },
  {
    id: 13,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "4%/5%/6%/7%/8%" },
    },
    max: 5,
    position: [3, 0],
  },
  {
    id: 11,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 2],
  },
  {
    id: 12,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "75" },
    },
    max: 1,
    requires: 9,
    position: [3, 3],
  },
  {
    id: 19,
    variables: {
      effectChance0: { type: "raw", value: "25%/50%/75%/100%/125%" },
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "10%/15%/20%/25%/30%" },
      effectDuration0: { type: "raw", value: "3/4.5/6/7.5/9" },
    },
    max: 4,
    position: [4, 0],
    requires: 13,
  },
  {
    id: 14,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 1],
    requires: 10,
  },
  {
    id: 15,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 2],
    requires: 11,
  },
  {
    id: 16,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "20%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "50%" },
    },
    max: 1,
    position: [4, 3],
    requires: 12,
  },
  {
    id: 17,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "10%/15%/20%/25%/30%" },
      statName1: { type: "translation", value: "Stat_Armor" },
      statPower1: { type: "raw", value: "5/7.5/10/12.5/15" },
    },
    max: 5,
    position: [5, 1],
    requires: 14,
  },
  {
    id: 18,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [5, 2],
    requires: 15,
  },
  {
    id: 3,
    variables: {
      statName0: { type: "translation", value: "Stat_LifeSteal" },
      statPower0: { type: "raw", value: "4/8/12" },
      statName1: { type: "translation", value: "Stat_AllDamage" },
      statPower1: { type: "raw", value: "3%/4.5%/6%" },
    },
    max: 3,
    position: [6, 0],
  },
  {
    id: 20,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
  },
  {
    id: 21,
    variables: {
      effectChance0: { type: "raw", value: "15%/22.5%/30%/37.5%/45%" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 24,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "75%" },
    },
    max: 1,
    position: [6, 3],
    requires: 16,
  },
  {
    id: 198,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "30%" },
      statName1: { type: "translation", value: "Stat_Resilience" },
      statPower1: { type: "raw", value: "5%" },
      statPower2: { type: "raw", value: "85%" },
    },
    max: 1,
    position: [7, 0],
    requires: 3,
  },
  {
    id: 22,
    variables: {
      effectCount0: { type: "raw", value: "2" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 1,
    position: [7, 1],
    requires: 20,
  },
  {
    id: 23,
    variables: {},
    max: 1,
    position: [7, 2],
    requires: 21,
  },
] as RawSkill[]

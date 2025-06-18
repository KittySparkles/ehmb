import type { RawSkill } from "../types"

export const MAGIC_STAFF_SCHEMA = [
  {
    id: 115,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 116,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 119,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      effectCount0: { type: "raw", value: "15/30/45/60/75" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 117,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "20/40/60/80/100" },
      statName1: { type: "translation", value: "Stat_MovementSpeed" },
      statPower1: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 118,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "6%/12%/18%/24%/30%" },
    },
    max: 5,
    position: [1, 1],
    requires: 116,
  },
  {
    id: 122,
    variables: {
      effectChance0: { type: "raw", value: "10%/20%/30%/40%/50%" },
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      effectCount0: { type: "raw", value: "7%/15%/22.5%/30%/37.5%" },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 5,
    position: [1, 2],
    requires: 119,
  },
  {
    id: 120,
    variables: {
      effectChance0: { type: "raw", value: "2.5%/5%/7.5%/10%/12.5%" },
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [1, 3],
  },
  {
    id: 121,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [2, 0],
    requires: 115,
  },
  {
    id: 131,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
      statName1: { type: "translation", value: "Stat_LifeSteal" },
      statPower1: { type: "raw", value: "2/3/4/8/10" },
      statName2: { type: "translation", value: "Stat_HpRegen" },
      statPower2: { type: "raw", value: "40/80/120/160/200" },
    },
    max: 5,
    position: [2, 2],
  },
  {
    id: 123,
    variables: {
      effectPower0: { type: "raw", value: "50%/80%/110%/140%/170%" },
    },
    max: 5,
    position: [2, 3],
    requires: 120,
  },
  {
    id: 124,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
      statName1: { type: "translation", value: "Stat_MaxHp" },
      statPower1: { type: "raw", value: "30/60/90/120/150" },
    },
    max: 5,
    position: [3, 0],
    requires: 121,
  },
  {
    id: 125,
    variables: {
      attackCount0: { type: "raw", value: "20", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 5,
    position: [3, 1],
  },
  {
    id: 126,
    variables: {
      attackCount0: { type: "raw", value: "12", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectDuration0: { type: "raw", value: "4" },
    },
    max: 5,
    position: [3, 3],
  },
  {
    id: 127,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [4, 1],
    requires: 125,
  },
  {
    id: 128,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.49" },
      effectDuration0: { type: "raw", value: "1.8/2/2.2/2.4/2.6" },
    },
    max: 5,
    position: [4, 2],
  },
  {
    id: 129,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectDuration0: { type: "raw", value: "1.5/1.7/1.8/2/2.1" },
    },
    max: 5,
    position: [4, 3],
    requires: 126,
  },
  {
    id: 130,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 1,
    position: [5, 0],
    requires: 124,
  },
  {
    id: 201,
    variables: {
      statName0: {
        type: "translation",
        value: "Stat_FireDotDamage",
        highlight: false,
      },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [5, 2],
    requires: 128,
  },
  {
    id: 132,
    variables: {
      attackCount0: { type: "raw", value: "12", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 133,
    variables: {
      effectCooldown0: { type: "raw", value: "30/27/24/21/18" },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.5" },
      effectDuration0: { type: "raw", value: "5" },
      effectCount0: { type: "raw", value: "1/2/3/4/5", highlight: false },
    },
    max: 5,
    position: [6, 3],
  },
  {
    id: 134,
    variables: {},
    max: 1,
    position: [7, 0],
    requires: 130,
  },
  {
    id: 136,
    variables: {
      effectCount0: { type: "raw", value: "6", highlight: false },
      effectPower0: { type: "raw", value: "40%" },
    },
    max: 1,
    position: [7, 2],
    requires: 132,
  },
  {
    id: 137,
    variables: {
      effectPower0: { type: "raw", value: "75%" },
    },
    max: 1,
    position: [7, 3],
    requires: 133,
  },
] as RawSkill[]

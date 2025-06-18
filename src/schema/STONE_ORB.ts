import type { RawSkill } from "../types"

export const STONE_ORB_SCHEMA = [
  {
    id: 138,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 139,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "3/6/9/12/15" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 140,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "50/100/150/200/250" },
      statName1: { type: "translation", value: "Stat_LifeSteal" },
      statPower1: { type: "raw", value: "4/8/12/16/20" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 143,
    variables: {
      statName0: { type: "translation", value: "Stat_Dodge" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [0, 3],
  },
  {
    id: 141,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [1, 0],
    requires: 138,
  },
  {
    id: 142,
    variables: {
      effectCount0: { type: "raw", value: "20/40/60/80/100" },
      effectCooldown0: { type: "raw", raw: "9.15/8.25/7.33/6.42/5.5" },
    },
    max: 5,
    position: [1, 1],
    requires: 139,
  },
  {
    id: 144,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
      statName1: { type: "translation", value: "Stat_CriticalDamage" },
      statPower1: { type: "raw", value: "5%/7.5%/10%/12.5%/15%" },
    },
    max: 5,
    position: [2, 0],
    requires: 141,
  },
  {
    id: 145,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [2, 1],
    requires: 142,
  },
  {
    id: 149,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [2, 2],
  },
  {
    id: 147,
    variables: {
      effectCooldown0: { type: "raw", value: "10" },
      effectPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
      effectEveryX0: { type: "raw", value: "0.75" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 5,
    position: [2, 3],
  },
  {
    id: 148,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.4" },
      effectDuration0: { type: "raw", value: "2" },
    },
    max: 5,
    position: [3, 1],
    requires: 145,
  },
  {
    id: 152,
    variables: {
      effectCount0: { type: "raw", value: "1/2/3/4/5" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [3, 2],
    requires: 149,
  },
  {
    id: 146,
    variables: {
      statName0: { type: "translation", value: "Stat_MovementSpeed" },
      statPower0: { type: "raw", value: "2%/4%/6%/8%/10%" },
    },
    max: 5,
    position: [3, 3],
  },
  {
    id: 150,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
      statName1: { type: "translation", value: "Stat_MaxHp" },
      statPower1: { type: "raw", value: "15/30/45/60/75" },
      statName2: { type: "translation", value: "Stat_AllDamage" },
      statPower2: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [4, 0],
    requires: 144,
  },
  {
    id: 151,
    variables: {
      attackCount0: { type: "raw", value: "8", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.75" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 5,
    position: [4, 1],
  },
  {
    id: 153,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 1,
    position: [5, 0],
    requires: 150,
  },
  {
    id: 154,
    variables: {
      effectChance0: { type: "raw", value: "5%/10%/15%/20%/25%" },
    },
    max: 5,
    position: [5, 1],
    requires: 151,
  },
  {
    id: 155,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
      statName1: { type: "translation", value: "Stat_LifeSteal" },
      statPower1: { type: "raw", value: "1/2/3/4/5" },
      statName2: { type: "translation", value: "Stat_HpRegen" },
      statPower2: { type: "raw", value: "75/150/225/300/375" },
    },
    max: 5,
    position: [5, 2],
  },
  {
    id: 202,
    variables: {
      statName0: { type: "translation", value: "Stat_FireDotDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [5, 3],
  },
  {
    id: 156,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
  },
  {
    id: 157,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
      effectChance0: { type: "raw", value: "140%", highlight: false },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 159,
    variables: {
      statName0: { type: "translation", value: "Stat_ExtraAttackTargets" },
      statPower0: { type: "raw", value: "1" },
    },
    max: 1,
    position: [7, 0],
    requires: 153,
  },
  {
    id: 160,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 3,
    position: [7, 1],
    requires: 156,
  },
  {
    id: 161,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 3,
    position: [7, 2],
    requires: 157,
  },
  {
    id: 162,
    variables: {
      attackCount0: { type: "raw", value: "5", highlight: false },
      effectDuration0: { type: "raw", value: "1.5/3/4.5/6/7.5" },
    },
    max: 5,
    position: [7, 3],
  },
] as RawSkill[]

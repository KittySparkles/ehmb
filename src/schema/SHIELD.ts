import type { RawSkill } from "../types"

export const SHIELD_SCHEMA = [
  {
    id: 167,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "10/20/30/40/50" },
    },
    max: 5,
    position: [0, 0],
  },
  {
    id: 168,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [0, 1],
  },
  {
    id: 169,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "150/300/450/600/750" },
    },
    max: 5,
    position: [0, 2],
  },
  {
    id: 170,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
      statName1: { type: "translation", value: "Stat_Armor" },
      statPower1: { type: "raw", value: "4/8/12/16/20" },
    },
    max: 5,
    position: [1, 0],
    requires: 167,
  },
  {
    id: 171,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "4%/8%/12%/16%/20%" },
    },
    max: 5,
    position: [1, 1],
    requires: 168,
  },
  {
    id: 172,
    variables: {
      statName0: { type: "translation", value: "Stat_MaxHp" },
      statPower0: { type: "raw", value: "50/100/150/200/250" },
      statName1: { type: "translation", value: "Stat_Armor" },
      statPower1: { type: "raw", value: "4/8/12/16/20" },
      statName2: { type: "translation", value: "Stat_HpRegen" },
      statPower2: { type: "raw", value: "75/150/225/300/375" },
    },
    max: 5,
    position: [1, 2],
    requires: 169,
  },
  {
    id: 173,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalChance" },
      statPower0: { type: "raw", value: "1%/2%/3%/4%/5%" },
    },
    max: 5,
    position: [1, 3],
  },
  {
    id: 174,
    variables: {
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "250" },
    },
    max: 1,
    position: [2, 0],
    requires: 170,
  },
  {
    id: 175,
    variables: {
      statName0: { type: "translation", value: "Stat_CriticalDamage" },
      statPower0: { type: "raw", value: "40%" },
    },
    max: 1,
    position: [2, 1],
    requires: 171,
  },
  {
    id: 176,
    variables: {
      attackCount0: { type: "raw", value: "8", highlight: false },
      effectDamage0: { type: "raw", value: "X", highlight: false },
    },
    max: 5,
    position: [2, 2],
    requires: 172,
  },
  {
    id: 177,
    variables: {
      attackCount0: { type: "raw", value: "4", highlight: false },
      effectDamage0: { type: "raw", value: "X", highlight: false },
    },
    max: 5,
    position: [2, 3],
  },
  {
    id: 180,
    variables: {
      effectDamage0: { type: "raw", value: "X" },
      effectEveryX0: { type: "raw", value: "0.8" },
      effectDuration0: { type: "raw", value: "3" },
    },
    max: 5,
    position: [3, 2],
    requires: 176,
  },
  {
    id: 181,
    variables: {
      effectDamage0: { type: "raw", value: "X", highlight: false },
    },
    max: 5,
    position: [3, 3],
    requires: 177,
  },
  {
    id: 182,
    variables: {
      effectChance0: { type: "raw", value: "10%" },
      statName0: { type: "translation", value: "Stat_Slayer" },
      statPower0: { type: "raw", value: "10%" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 1,
    position: [4, 0],
    requires: 174,
  },
  {
    id: 183,
    variables: {
      effectChance0: { type: "raw", value: "10%" },
      statName0: { type: "translation", value: "Stat_Overkill" },
      statPower0: { type: "raw", value: "4%" },
      effectDuration0: { type: "raw", value: "5" },
    },
    max: 1,
    position: [4, 1],
    requires: 175,
  },
  {
    id: 184,
    variables: {
      statName0: { type: "translation", value: "Stat_AllDamage" },
      statPower0: { type: "raw", value: "5%/10%/15%/20%/25%" },
      statName1: { type: "translation", value: "Stat_MaxHp" },
      statPower1: { type: "raw", value: "100/200/300/400/500" },
      statName2: { type: "translation", value: "Stat_Armor" },
      statPower2: { type: "raw", value: "5/10/15/20/25" },
    },
    max: 5,
    position: [4, 2],
  },
  {
    id: 185,
    variables: {
      attackCount0: { type: "raw", value: "6", highlight: false },
      effectDamage0: { type: "raw", value: "X", highlight: false },
    },
    max: 5,
    position: [4, 3],
  },
  {
    id: 186,
    variables: {
      statName0: { type: "translation", value: "Stat_AttackSpeed" },
      statPower0: { type: "raw", value: "3%/6%/9%/12%/15%" },
      statName1: { type: "translation", value: "Stat_MovementSpeed" },
      statPower1: { type: "raw", value: "3%/6%/9%/12%/15%" },
    },
    max: 5,
    position: [5, 1],
  },
  {
    id: 187,
    variables: {
      effectCount0: { type: "raw", value: "6" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [5, 3],
    requires: 185,
  },
  {
    id: 188,
    variables: {
      attackCount0: { type: "raw", value: "10", highlight: false },
      effectCount0: { type: "raw", value: "1/2/3/5/6" },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 0],
  },
  {
    id: 189,
    variables: {
      attackCount0: { type: "raw", value: "10", highlight: false },
      effectDamage0: { type: "raw", value: "X" },
    },
    max: 5,
    position: [6, 1],
  },
  {
    id: 190,
    variables: {
      effectChance0: { type: "raw", value: "5" },
      effectDamage0: { type: "raw", value: "X" },
      effectCooldown0: { type: "raw", value: "8" },
    },
    max: 5,
    position: [6, 2],
  },
  {
    id: 191,
    variables: {
      effectCount0: { type: "raw", value: "20/30/40" },
      statName0: { type: "translation", value: "Stat_Armor" },
      statPower0: { type: "raw", value: "200/400/600" },
    },
    max: 3,
    position: [6, 3],
  },
  {
    id: 192,
    variables: {},
    max: 1,
    position: [7, 0],
    requires: 188,
  },
  {
    id: 193,
    variables: {
      effectPower0: { type: "raw", value: "110%" },
    },
    max: 1,
    position: [7, 1],
    requires: 189,
  },
  {
    id: 194,
    variables: {},
    max: 1,
    position: [7, 2],
    requires: 190,
  },
] as RawSkill[]

import type { MasteryType } from "../../types";

type RecommendedBuild = {
  name: string;
  author: string;
  hash: string;
  notes?: string;
};

const BOW: RecommendedBuild[] = [];

const DOUBLE_BLADE: RecommendedBuild[] = [
  {
    name: 'Single DPS',
    author: 'Keylir',
    hash: 'dbe5f5n1t5z5A5F5',
    notes: 'Final 3 points flexbile, negligible gains anywhere you put them. I usually just do Death for All to make the build a one size fits all type. The other two I usually drop into movespeed, but Shadow Colossus is an option if you just like the ability.'
  }
];

const DUAL_PISTOL: RecommendedBuild[] = [];

const MAGIC_STAFF: RecommendedBuild[] = [];

const RIFLE: RecommendedBuild[] = [];

const SCYTHE: RecommendedBuild[] = [];

const SHIELD: RecommendedBuild[] = [
  {
    name: "Single-target core",
    author: "Kitty",
    hash: "shb5c5q1s5t5y5D1E1F1",
    notes:
      "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Critical Edge, Vitality and Swift Protector.",
  },
  {
    name: "Multi-target core",
    author: "Kitty",
    hash: "shc5p5r1s5C1E1",
    notes:
      "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Ironclad, Vitality, Radiant Strike and Swift Protector.",
  },
  {
    name: "Hybrid core",
    author: "Kitty",
    hash: "shc5q1r1s5t5C1D1E1",
    notes:
      "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Vitality and Swift Protector.",
  },
];

const STONE_ORB: RecommendedBuild[] = [];

const TWO_HANDED: RecommendedBuild[] = [];

export const RECOMMENDED_BUILDS: Record<MasteryType, RecommendedBuild[]> = {
  bo: BOW,
  db: DOUBLE_BLADE,
  dp: DUAL_PISTOL,
  ms: MAGIC_STAFF,
  ri: RIFLE,
  sc: SCYTHE,
  sh: SHIELD,
  so: STONE_ORB,
  th: TWO_HANDED,
};

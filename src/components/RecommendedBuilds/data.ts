import type { MasteryType } from "../../types";

type RecommendedBuild = {
  name: string;
  author: string;
  hash: string;
  notes?: string;
};

const BOW = [
  {
    name: "Single-target",
    author: "🐲Specter♆",
    hash: "bob5g5l5q4r1s5v5B5C3E3",
  },
];

const DOUBLE_BLADE = [
  {
    name: "Single target, no pet",
    author: "Keylir",
    hash: "dbe5f4l4n1w4z5E1",
    notes:
      "This build does not expect the Lil’Chains pet. It also works just as well both with the normal and unique Double Blades.",
  },
  {
    name: "Single target, with pet",
    author: "Kitty",
    hash: "dbe5f5n1u2w4D1E1",
    notes:
      "This build includes Fan of Knives which is buffed by the Lil’Chains pet.",
  },
  {
    name: "AoE",
    author: "Keylir",
    hash: "dbe5f4l3n1w4D1E1",
    comments:
      "This build should work well with the normal Double Blades and without the Lil’Chains pet, or with the unique blades with or without the Lil’Chains pet.",
  },
];

const DUAL_PISTOL = [
  {
    name: "Baseline Build",
    author: "niloc",
    hash: "dpf5i5o5r5D3F1",
    notes:
      "Every build should have these points IMO. You have 14 points to spend on whatever other damage, defense, or QoL you want.",
  },
  {
    name: "Single Target",
    author: "niloc",
    hash: "dpf5m4r5s5w5D3F1",
    notes:
      "Maxed Prey on the Weak. Maxed Incendiary Bullets. Steel Bullets as filler.",
  },
  {
    name: "AoE",
    author: "niloc",
    hash: "dpf5m2r5s5w5y1D3F1",
    notes:
      "Remove 2 points from Steel Bullets for Ricochet nodes. IF USING UNIQUE PISTOLS DO NOT SWITCH POINTS.",
  },
  {
    name: "Post ASPD Cap",
    author: "niloc",
    hash: "dpf5m5r5s5w4D3F1",
    notes:
      "Can remove points from Prey on the Weak for other skills as long as you stay at attack speed cap.",
  },
];

const MAGIC_STAFF = [
  {
    name: "Single-target",
    author: "Bunni",
    hash: "msl5m5r5t1w3E1F1",
    notes:
      "I don’t take Quick Cast because I have Eternal Vortex, I’m Attack Speed capped without it. Same reason I’m only 3/5 in Blazing Hands: it’s all I needed for cap. You will need it for more DPS.",
  },
  {
    name: "Multi-targets",
    author: "Bunni",
    hash: "msg5t3w3C1D1E1F1",
    notes:
      "I don’t take Quick Cast because I have Eternal Vortex, I’m Attack Speed capped without it. Same reason I’m only 3/5 in Blazing Hands: it’s all I needed for cap. You will need it for more DPS.\nI take Flame Shield for AoC setup because I have the Armor to get hit quite often and not die. It does 100M damage back to attackers with my Mastery boosts. I’ve found out it’s the best thing to put points into.\nAs always, go do your own tests with what you have for gear. I’m not someone to follow mastery for mastery.",
  },
];

const RIFLE = [
  {
    name: "Farming",
    author: "iFunz",
    hash: "ria5e5g5i5j5l5p4s5v1x1A1D1",
  },
];

const SHIELD: RecommendedBuild[] = [
  {
    name: "Single-target core",
    author: "Kitty",
    hash: "shb5c5q1s5t5y5D1E1F1",
    notes: "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Critical Edge, Vitality and Swift Protector.",
  },
  {
    name: "Multi-target core",
    author: "Kitty",
    hash: "shc5p5r1s5C1E1",
    notes: "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Ironclad, Vitality, Radiant Strike and Swift Protector.",
  },
  {
    name: "Hybrid core",
    author: "Kitty",
    hash: "shc5q1r1s5t5C1D1E1",
    notes: "Whether you have the base Shield or Oathkeeper doesn’t really matter too much.\nIf you have the Braveheart pet at celestial 1 rank, you can skip Bastion’s Resilience.\nYou can spend some points in Sharpened Instincts to be crit-capped.\nYou can decide whether you want Defensive Stance + Last Resort.\nThe remaining points can be spent across Vitality and Swift Protector.",
  },
];

const STONE_ORB = [
  {
    name: "DPS",
    author: "Iurie",
    hash: "soc5f5i5k2t1v5w5z5E3",
    notes:
      "Attack speed is a must-have. I’m not going into multi-targets; I will eventually get attack targets from equipment. I don’t like wall skill either, but I do like the shield skill — it saved me so many times.",
  },
];

const TWO_HANDED = [
  {
    name: "Single-target",
    author: "Lác VKL",
    hash: "the5f3r5w5A5D1F1",
    notes:
      "I am using Canon and Energizer, with 2 Wolf Rings. But at lower stages players shouldn’t use 2 Wolf Rings, and go for 2 Dragon Rings instead. If you feel you die a lot, then replace Energizer with Pocket Heart.",
  },
  {
    name: "Multi-target",
    author: "Lác VKL",
    hash: "the5f3g2i2w5D1E1F1",
    notes:
      "Whirlwind is only really worth it in terms of DPS when reaching over 200% Attack Speed since it scales with that stat. Before that, you’re better off excluding it from the build and picking something else.",
  },
];

export const RECOMMENDED_BUILDS: Record<MasteryType, RecommendedBuild[]> = {
  bo: BOW,
  db: DOUBLE_BLADE,
  dp: DUAL_PISTOL,
  ms: MAGIC_STAFF,
  ri: RIFLE,
  sh: SHIELD,
  so: STONE_ORB,
  th: TWO_HANDED,
};

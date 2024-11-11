import type { MasteryType } from "../../types"

type RecommendedBuild = {
  name: string
  author: string
  hash: string
  notes?: string
}

const BOW = [
  {
    name: "Single-target",
    author: "🐲Specter♆",
    hash: "bob5g5l5q4r1s5v5B5C3E3",
  },
]

const DOUBLE_BLADE = [
  {
    name: "DPS",
    author: "Kitty",
    hash: "dbe5f5g5n1w4D1E1",
    notes:
      "I don’t take Lethal Wounds or Pain and Suffer because neither bleeding nor poison can crit, and a lot of damage comes from critical hits.",
  },
]

const DUAL_PISTOL = [
  {
    name: "DPS",
    author: "niloc",
    hash: "dpf5g4i5r5s5w5y1B2D3",
    notes:
      "Could drop Swift Steps for max Eye in the Sky, but I like the movespeed in rifts. I probably will do that with a higher rank Vortex eventually.",
  },
  {
    name: "Farming",
    author: "niloc",
    hash: "dpf5i5k4r5s5w5y1F1",
    notes:
      "For me, damage is no issue while farming so the same may not work for you. No dragon because while casting it you stop attacking and since the ricochets kill everything it just slows you down.",
  },
]

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
]

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
]

export const RECOMMENDED_BUILDS: Record<MasteryType, RecommendedBuild[]> = {
  bo: BOW,
  db: DOUBLE_BLADE,
  dp: DUAL_PISTOL,
  ms: MAGIC_STAFF,
  ri: [],
  so: [],
  th: TWO_HANDED,
}

import type { RawSkill } from "../types"

export const DUAL_PISTOL_SCHEMA = [
  {
    id: 94,
    description: "Increase *Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 95,
    description: "Increase *Attack Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [0, 1],
  },
  {
    id: 96,
    description: "Increase *Max HP* by *60/120/180/240/300*.",
    max: 5,
    position: [0, 3],
  },
  {
    id: 97,
    description:
      "Your attacks have a *2.5/3.1/3.7/4.3/5%* chance to rapidly fire *1/2/3/4/5* additional bullet(s) that also count as a normal attack. Has a *2s* cooldown.",
    max: 5,
    position: [1, 1],
    requires: 95,
  },
  {
    id: 98,
    description: "Increase *Movement Speed* by *2/4/6/8%*.",
    max: 4,
    position: [1, 2],
  },
  {
    id: 99,
    description: "Increase *Armor* by *3/6/9/12*.",
    max: 4,
    position: [1, 3],
    requires: 96,
  },
  {
    id: 100,
    description:
      "Increase *Crit Chance* by *2/4/6/8/10%* and *Crit Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [2, 0],
    requires: 94,
  },
  {
    id: 101,
    description:
      "Taking damage increases *Movement Speed* by *4/8/12/16/20%* and *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [2, 2],
    requires: 98,
  },
  {
    id: 102,
    description: "Increase *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [2, 3],
  },
  {
    id: 103,
    description:
      "Increase *Damage* by *5/10/15/20/25%* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [3, 0],
    requires: 100,
  },
  {
    id: 104,
    description:
      "Every *24th* attack throws *1/2/3/4/5* sticky bomb at random enemies, exploding after a short delay dealing *X* damage to all nearby enemies.",
    max: 5,
    position: [3, 1],
  },
  {
    id: 105,
    description:
      "Every *18th* attack rains down bullets on the target area, dealing *X* damage every *0.30s* for *3s* within a *1/2/3/4/5m* area.",
    max: 5,
    position: [3, 2],
  },
  {
    id: 106,
    description:
      "When *Sticky Bombs* explode, they emit *1/2/3/4/5* laser(s) dealing *X* damage in random directions.",
    max: 5,
    position: [4, 1],
    requires: 104,
  },
  {
    id: 107,
    description:
      "Infuse *Bullet Hell* with fire, causing enemies to burn for *2s* and take *X* damage every *0.75/0.67/0.6/0.52/0.43s*.",
    max: 5,
    position: [4, 2],
    requires: 105,
  },
  {
    id: 203,
    description: "Increase *Burn Damage* by *3/6/9/12/15%*.",
    max: 5,
    position: [4, 3],
  },
  {
    id: 108,
    description: "Your bullets ricochet once.",
    max: 1,
    position: [5, 0],
  },
  {
    id: 109,
    description:
      "Increase *Attack Speed* by *2/4/6/8/10%*, *Leech* by *2/3/4/5/6* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [5, 2],
  },
  {
    id: 110,
    description: "Your bullets ricochet twice.",
    max: 1,
    position: [6, 0],
    requires: 108,
  },
  {
    id: 111,
    description:
      "Every *20th* attack charges your pistol with primal power, conjuring an ethereal dragon that blasts enemies in its path, dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    id: 205,
    description:
      "Every *17th* attack fires rockets at all active targets, dealing *X* damage. The damage is split evenly among all targets.",
    max: 5,
    position: [6, 2],
  },
  {
    id: 112,
    description:
      "Critical hits call down a beam from the skies to obliterate the target area, dealing *X* damage every *0.3s* for *4.6/5/5.4/5.8/6.2s*. Has a *12s* cooldown.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 113,
    description:
      "*Dragon Blast* leaves the earth scorched, dealing *X* damage every *0.5s* to enemies above for *5s*.",
    max: 3,
    position: [7, 1],
    requires: 111,
  },
  {
    id: 206,
    description:
      "Rockets explode on impact, dealing *X* damage in a small area and burning their primary targets for *30/33/36/39/42%* of the main rocket’s damage over *2s*.",
    max: 5,
    position: [7, 2],
  },
  {
    id: 114,
    description: "*Eye in the Sky* calls down an *extra* beam.",
    max: 1,
    position: [7, 3],
    requires: 112,
  },
] as RawSkill[]

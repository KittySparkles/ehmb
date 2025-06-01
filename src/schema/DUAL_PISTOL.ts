import type { RawSkill } from "../types"

export const DUAL_PISTOL_SCHEMA = [
  {
    name: "Iron Bullets",
    description: "Increase *Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Quick Hands",
    description: "Increase *Attack Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Iron Will",
    description: "Increase *Max HP* by *60/120/180/240/300*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Fan the Hammer",
    description:
      "Your attacks have a *2.5/3.1/3.7/4.3/5%* chance to rapidly fire *1/2/3/4/5* additional bullet(s) that also count as a normal attack. Has a *2s* cooldown.",
    max: 5,
    position: [1, 1],
    requires: "Quick Hands",
  },
  {
    name: "Swift Steps",
    description: "Increase *Movement Speed* by *2/4/6/8%*.",
    max: 4,
    position: [1, 2],
  },
  {
    name: "Tough Skin",
    description: "Increase *Armor* by *3/6/9/12*.",
    max: 4,
    position: [1, 3],
    requires: "Iron Will",
  },
  {
    name: "Critical Aim",
    description:
      "Increase *Crit Chance* by *2/4/6/8/10%* and *Crit Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [2, 0],
    requires: "Iron Bullets",
  },
  {
    name: "Adrenaline Surge",
    description:
      "Taking damage increases *Movement Speed* by *4/8/12/16/20%* and *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [2, 2],
    requires: "Swift Steps",
  },
  {
    name: "Evade",
    description: "Increase *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [2, 3],
  },
  {
    name: "Steel Bullets",
    description:
      "Increase *Damage* by *5/10/15/20/25%* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [3, 0],
    requires: "Critical Aim",
  },
  {
    name: "Sticky Bombs",
    description:
      "Every *24th* attack throws *1/2/3/4/5* sticky bomb at random enemies, exploding after a short delay dealing *X* damage to all nearby enemies.",
    max: 5,
    position: [3, 1],
  },
  {
    name: "Bullet Hell",
    description:
      "Every *18th* attack rains down bullets on the target area, dealing *X* damage every *0.30s* for *3s* within a *1/2/3/4/5m* area.",
    max: 5,
    position: [3, 2],
  },
  {
    name: "Blasting Volley",
    description:
      "When *Sticky Bombs* explode, they emit *1/2/3/4/5* laser(s) dealing *X* damage in random directions.",
    max: 5,
    position: [4, 1],
    requires: "Sticky Bombs",
  },
  {
    name: "Incendiary Bullets",
    description:
      "Infuse *Bullet Hell* with fire, causing enemies to burn for *2s* and take *X* damage every *0.75/0.67/0.6/0.52/0.43s*.",
    max: 5,
    position: [4, 2],
    requires: "Bullet Hell",
  },
  {
    name: "Firetrail",
    description: "Increase *Burn Damage* by *3/6/9/12/15%*.",
    max: 5,
    position: [4, 3],
  },
  {
    name: "Ricochet",
    description: "Your bullets ricochet once.",
    max: 1,
    position: [5, 0],
  },
  {
    name: "Prey on the Weak",
    description:
      "Increase *Attack Speed* by *2/4/6/8/10%*, *Leech* by *2/3/4/5/6* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [5, 2],
  },
  {
    name: "Advanced Ricochet",
    description: "Your bullets ricochet twice.",
    max: 1,
    position: [6, 0],
    requires: "Ricochet",
  },
  {
    name: "Dragon Blast",
    description:
      "Every *20th* attack charges your pistol with primal power, conjuring an ethereal dragon that blasts enemies in its path, dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Guided Rockets",
    description:
      "Every *17th* attack fires rockets at all active targets, dealing *X* damage. The damage is split evenly among all targets.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Eye in the Sky",
    description:
      "Critical hits call down a beam from the skies to obliterate the target area, dealing *X* damage every *0.3s* for *4.6/5/5.4/5.8/6.2s*. Has a *12s* cooldown.",
    max: 5,
    position: [6, 3],
  },
  {
    name: "Scorched Earth",
    description:
      "*Dragon Blast* leaves the earth scorched, dealing *X* damage every *0.5s* to enemies above for *5s*.",
    max: 3,
    position: [7, 1],
    requires: "Dragon Blast",
  },
  {
    name: "Explosive Payload",
    description:
      "Rockets explode on impact, dealing *X* damage in a small area and burning their primary targets for *30/33/36/39/42%* of the main rocket’s damage over *2s*.",
    max: 5,
    position: [7, 2],
  },
  {
    name: "Duo in the Sky",
    description: "*Eye in the Sky* calls down an *extra* beam.",
    max: 1,
    position: [7, 3],
    requires: "Eye in the Sky",
  },
] as RawSkill[]

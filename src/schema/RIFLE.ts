import type { RawSkill } from "../types"

export const RIFLE_SCHEMA = [
  {
    name: "Steady Hands",
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Shattering Rounds",
    description:
      "Bullets have a *10/15/20/25/30%* chance to shatter on impact, dealing *X* damage to nearby enemies.",
    max: 4,
    position: [0, 1],
  },
  {
    name: "Focus",
    description: "Increase *Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Stamina",
    description: "Increase *Max HP* by *40/80/120/160/200*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Hot Reload",
    description: "Increase *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [1, 0],
  },
  {
    name: "Incendiary Rounds",
    description:
      "Bullets have a *20/24/28/32/36%* chance to ignite the enemy upon impact, dealing *X* damage every *0.9s* for *3s*.",
    max: 5,
    position: [1, 1],
    requires: "Shattering Rounds",
  },
  {
    name: "Dedication",
    description: "Increase *Crit Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [1, 2],
    requires: "Focus",
  },
  {
    name: "Combat Medic",
    description:
      "Increase *Max HP* by *30/60/90/120/150* and *Damage* by *3/6/9/12/15%*.",
    max: 5,
    position: [2, 0],
  },
  {
    name: "Scorchmark",
    description: "Increase *Burn Damage* by *43/6/9/12/15%*.",
    max: 5,
    position: [2, 1],
  },
  {
    name: "Nuclear Strike",
    description:
      "Every *6th* attack launches a nuke that blasts the target area with a massive explosion, dealing *X* damage within its radius.",
    max: 4,
    position: [2, 2],
  },
  {
    name: "Fartification",
    description:
      "Taking damage has a *10/12/14/16/18%* chance to envelop you in a restorative shield for *2/2.2/2.4/2.6/2.8s*. While the shield is active, taking damage heals you for *1.5/1.8/2.1/2.4/2.7%* of your *Max HP*.",
    max: 5,
    position: [2, 3],
  },
  {
    name: "Iron Defense",
    description: "Increase *Armor* by *2/4/6/8/10*.",
    max: 5,
    position: [3, 0],
    requires: "Combat Medic",
  },
  {
    name: "Shrapnel Blast",
    description:
      "Every *5th* attack blasts a cone of shrapnels in front of you, dealing *X* damage (+ *140/180/220/260/300%* more damage while fighting a single enemy).",
    max: 5,
    position: [3, 1],
  },
  {
    name: "Radiation Aftermath",
    description:
      "*Nuclear Strike* leaves behind a radioactive field, continuously damaging enemies within the area for *X* damage every *0.5s* for *5s*.",
    max: 4,
    position: [3, 2],
    requires: "Nuclear Strike",
  },
  {
    name: "Veteran",
    description:
      "Increase *Damage* by *4/8/12/16%* and *Crit Chance* by *1/2/3/4%*.",
    max: 4,
    position: [3, 3],
  },
  {
    name: "Evasive Maneuvers",
    description: "Increase *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [4, 0],
    requires: "Iron Defense",
  },
  {
    name: "Hot Rush",
    description:
      "Increase *Attack Speed* by *1/2/3/4/5%*, *Movement Speed* by *1/2/3/4/5%* and *Leech* by *1/2/3/4/5*.",
    max: 5,
    position: [4, 2],
  },
  {
    name: "Swift Stride",
    description: "Increase *Movement Speed* by *5/6/7/8/9%*.",
    max: 5,
    position: [5, 0],
  },
  {
    name: "Shrapnel Surge",
    description:
      "*Shrapnel Blast* unleashes shrapnels sideways and behind, expanding its area of impact.",
    max: 1,
    position: [5, 1],
    requires: "Shrapnel Blast",
  },
  {
    name: "Double Shot",
    description:
      "Every *13th* attack triggers an additional attack after a short delay.",
    max: 1,
    position: [5, 2],
  },
  {
    name: "Ricochet Rounds",
    description: "Your basice attacks ricochet once.",
    max: 1,
    position: [5, 3],
  },
  {
    name: "Frag Blast",
    description:
      "Every *3rd* attack launches a grenade that bounces *3/4/5* time(s), exploding on each bounce for *X* damage.",
    max: 3,
    position: [6, 1],
  },
  {
    name: "Side Arm",
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [6, 2],
    requires: "Double Shot",
  },
  {
    name: "Ultimate Frag",
    description:
      "Frag grenades now duplicate themselves sideways on each bounce.",
    max: 1,
    position: [7, 1],
    requires: "Frag Blast",
  },
  {
    name: "Artillery Strike",
    description:
      "Every *4th* attack marks *1/2/3* nearby enemies for an *artillery strike*. Your next attack orders explosive blasts upon the marked enemy, dealing *X* damage in a small radius.",
    max: 3,
    position: [7, 3],
  },
] as RawSkill[]

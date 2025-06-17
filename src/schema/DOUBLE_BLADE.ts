import type { RawSkill } from "../types"

export const DOUBLE_BLADE_SCHEMA = [
  {
    id: 72,
    description: "Increase *Crit Chance* by *3/6/9/12/15%*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 73,
    description: "Increase *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [0, 1],
  },
  {
    id: 74,
    description: "Increase *Movement Speed* by *1/2/3/4/5%*.",
    max: 5,
    position: [0, 2],
  },
  {
    id: 75,
    description: "Increase *Leech* by *1.5/3/4.5/6/7.5*.",
    max: 5,
    position: [0, 3],
  },
  {
    id: 76,
    description: "Increase *Crit Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [1, 0],
    requires: 72,
  },
  {
    id: 77,
    description:
      "Increase *Armor* by *3/6/9/12/15* and *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [1, 1],
    requires: 73,
  },
  {
    id: 78,
    description: "Increase *Attack Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [1, 2],
  },
  {
    id: 79,
    description:
      "Your attacks have a *10/15/20/25/30%* chance to cause bleeding, dealing *X* damage every *0.63/0.6/0.56/0.53/0.5s* for *2/2.3/2.6/2.9/3.2s*.",
    max: 5,
    position: [1, 3],
  },
  {
    id: 80,
    description: "Increase *Dodge* by *1/2/3/4%*.",
    max: 4,
    position: [2, 1],
  },
  {
    id: 81,
    description:
      "Dip your blades in deadly poison, dealing *X* damage every *1.6/1.42/1.26/1.1/0.94s* for *4s*.",
    max: 5,
    position: [2, 3],
    requires: 79,
  },
  {
    id: 82,
    description:
      "Every *8th* attack bursts out a fan of knives, dealing *X* damage to all enemies around.",
    max: 5,
    position: [3, 0],
  },
  {
    id: 88,
    description:
      "Every *15s*, guarantee dodging the next attack. Also dodging an attack increases *Damage* by *50%* for *3s*.",
    max: 1,
    position: [3, 1],
    requires: 80,
  },
  {
    id: 83,
    description:
      "Every *10th* attack summons shadows that explode into cuts, dealing *X* damage to enemies inside.",
    max: 5,
    position: [3, 2],
  },
  {
    id: 84,
    description:
      "*Fan of Knives* also sends out blinding black powder to enemies, dealing *X* extra damage.",
    max: 5,
    position: [4, 0],
    requires: 82,
  },
  {
    id: 85,
    description:
      "Enemies caught inside *Gathering Shadows* get struck by its echo, dealing an additional *X* damage.",
    max: 5,
    position: [4, 2],
    requires: 83,
  },
  {
    id: 196,
    description:
      "Increase *Poison Damage* and *Bleed Damage* by *15/10/15/20/25%*.",
    max: 5,
    position: [4, 3],
    requires: 81,
  },
  {
    id: 86,
    description:
      "*Fan of Knives* gives a burst of speed, increasing *Movement Speed* by *10/12.5/15/17.5%* and *Attack Speed* by *5/10/15/20%* for *1s*.",
    max: 4,
    position: [5, 0],
    requires: 84,
  },
  {
    id: 89,
    description:
      "Killing an enemy increases *Movement Speed* by *3/3.75/4.5/5.25/6%* for *1/2/3/4/5s*. This can stack up to *10* times.",
    max: 5,
    position: [6, 0],
  },
  {
    id: 90,
    description:
      "Every *16th* attack triggers a surge of daggers descending upon *2/4/6/8/10* random enemies, each dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    id: 91,
    description:
      "Every *12th* attack summons *1/2/3/4/5* shadow clone charging and exploding on enemies for *X* damage.",
    max: 5,
    position: [6, 2],
  },
  {
    id: 87,
    description:
      "While full health, shadows envelop you to increase *Crit Chance* by *5/6/7/8/9%* and *Crit Damage* by *10/15/20/25/30%*.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 92,
    description: "*Death from Above* damages all enemies around the target.",
    max: 1,
    position: [7, 1],
    requires: 90,
  },
  {
    id: 93,
    description:
      "Every *Shadow Clone* has *15%* chance to call forth a shadowy construct mimicking your actions and increasing *Armor* by *75* for *8s*.",
    max: 1,
    position: [7, 2],
    requires: 91,
  },
  {
    id: 200,
    description:
      "While *Master Assassin* us actuve, your attacks have a *1/1.15/1.3/1.45/1.6%* to trigger an additional hit, dealing *2.2/4.4/6.6/8.8/10.1%* of the original damage.",
    max: 5,
    position: [7, 3],
    requires: 87,
  },
] as RawSkill[]

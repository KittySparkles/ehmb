import type { RawSkill } from "../types"

export const DOUBLE_BLADE_SCHEMA = [
  {
    name: "Sharp Blades",
    description: "Increase *Crit Chance* by *3/6/9/12/15%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Lethal Precision",
    description: "Increase *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Agile Steps",
    description: "Increase *Movement Speed* by *1/2/3/4/5%*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Bloodthirst",
    description: "Increase *Leech* by *1.5/3/4.5/6/7.5*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Fatal Spots",
    description: "Increase *Crit Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [1, 0],
    requires: "Sharp Blades",
  },
  {
    name: "Survival Tactics",
    description:
      "Increase *Armor* by *3/6/9/12/15* and *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [1, 1],
    requires: "Lethal Precision",
  },
  {
    name: "Swift Blades",
    description: "Increase *Attack Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [1, 2],
  },
  {
    name: "Lethal Wounds",
    description:
      "Your attacks have a *10/15/20/25/30%* chance to cause bleeding, dealing *X* damage every *0.63/0.6/0.56/0.53/0.5s* for *2/2.3/2.6/2.9/3.2s*.",
    max: 5,
    position: [1, 3],
  },
  {
    name: "Evasion",
    description: "Increase *Dodge* by *1/2/3/4%*.",
    max: 4,
    position: [2, 1],
  },
  {
    name: "Pain and Suffer",
    description:
      "Dip your blades in deadly poison, dealing *X* damage every *1.6/1.42/1.26/1.1/0.94s* for *4s*.",
    max: 5,
    position: [2, 3],
    requires: "Lethal Wounds",
  },
  {
    name: "Fan of Knives",
    description:
      "Every *8th* attack bursts out a fan of knives, dealing *X* damage to all enemies around.",
    max: 5,
    position: [3, 0],
  },
  {
    name: "Art of Dodge",
    description:
      "Every *15s*, guarantee dodging the next attack. Also dodging an attack increases *Damage* by *50%* for *3s*.",
    max: 1,
    position: [3, 1],
    requires: "Evasion",
  },
  {
    name: "Gathering Shadows",
    description:
      "Every *10th* attack summons shadows that explode into cuts, dealing *X* damage to enemies inside.",
    max: 5,
    position: [3, 2],
  },
  {
    name: "Black Powder",
    description:
      "*Fan of Knives* also sends out blinding black powder to enemies, dealing *X* extra damage.",
    max: 5,
    position: [4, 0],
    requires: "Fan of Knives",
  },
  {
    name: "Echo Strike",
    description:
      "Enemies caught inside *Gathering Shadows* get struck by its echo, dealing an additional *X* damage.",
    max: 5,
    position: [4, 2],
    requires: "Gathering Shadows",
  },
  {
    name: "Septic Blades",
    description:
      "Increase *Poison Damage* and *Bleed Damage* by *15/10/15/20/25%*.",
    max: 5,
    position: [4, 3],
    requires: "Pain and Suffer",
  },
  {
    name: "Winds of Fleet",
    description:
      "*Fan of Knives* gives a burst of speed, increasing *Movement Speed* by *10/12.5/15/17.5%* and *Attack Speed* by *5/10/15/20%* for *1s*.",
    max: 4,
    position: [5, 0],
    requires: "Black Powder",
  },
  {
    name: "Alacrity",
    description:
      "Killing an enemy increases *Movement Speed* by *3/3.75/4.5/5.25/6%* for *1/2/3/4/5s*. This can stack up to *10* times.",
    max: 5,
    position: [6, 0],
  },
  {
    name: "Death from Above",
    description:
      "Every *16th* attack triggers a surge of daggers descending upon *2/4/6/8/10* random enemies, each dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Shadow Clones",
    description:
      "Every *12th* attack summons *1/2/3/4/5* shadow clone charging and exploding on enemies for *X* damage.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Master Assassin",
    description:
      "While full health, shadows envelop you to increase *Crit Chance* by *5/6/7/8/9%* and *Crit Damage* by *10/15/20/25/30%*.",
    max: 5,
    position: [6, 3],
  },
  {
    name: "Death for All",
    description: "*Death from Above* damages all enemies around the target.",
    max: 1,
    position: [7, 1],
    requires: "Death from Above",
  },
  {
    name: "Shadow Colossus",
    description:
      "Every *Shadow Clone* has *15%* chance to call forth a shadowy construct mimicking your actions and increasing *Armor* by *75* for *8s*.",
    max: 1,
    position: [7, 2],
    requires: "Shadow Clones",
  },
  {
    name: "Chain Reaction",
    description:
      "While *Master Assassin* us actuve, your attacks have a *1/1.15/1.3/1.45/1.6%* to trigger an additional hit, dealing *2.2/4.4/6.6/8.8/10.1%* of the original damage.",
    max: 5,
    position: [7, 3],
    requires: "Master Assassin",
  },
] as RawSkill[]

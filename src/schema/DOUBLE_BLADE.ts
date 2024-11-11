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
    description: "Increase *Damage* by *6/12/18/24/30%*.",
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
    requires: "Agile Steps",
  },
  {
    name: "Lethal Wounds",
    description:
      "Your attacks have a *10/15/20/25/30%* chance to inflict *bleeding wounds*, dealing *X* damage every *0.4/0.38/0.36/0.34/0.32s* for *2/2.3/2.6/2.9/3.2s*.",
    max: 5,
    position: [1, 3],
    requires: "Bloodthirst",
  },
  {
    name: "Evasion",
    description: "Increase *Dodge* by *3/6/9/12%*.",
    max: 4,
    position: [2, 1],
  },
  {
    name: "Pain and Suffer",
    description:
      "Dip your blades in deadly poison, causing attacks to poison enemies, dealing *X* damage every *1/0.9/0.8/0.7/0.6s* for *4s*.",
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
      "Every *15s*, gain *100%* chance to *dodge* the next attack. Also dodging an attack increases *Damage* by *50%* for *3s*.",
    max: 1,
    position: [3, 1],
    requires: "Evasion",
  },
  {
    name: "Gathering Shadows",
    description:
      "Every *10th* attack summons gathering shadows that explodes into cuts, dealing *X* damage to enemies inside.",
    max: 5,
    position: [3, 2],
  },
  {
    name: "Black Powder",
    description:
      "*Fan of Knives* now also sends out blinding black powder to enemies, dealing *X* extra damage.",
    max: 5,
    position: [4, 0],
    requires: "Fan of Knives",
  },
  {
    name: "Echo Strike",
    description:
      "Enemies caught inside *Gathering Shadows* now get struck by its echo, dealing an additional *X* damage.",
    max: 5,
    position: [4, 2],
    requires: "Gathering Shadows",
  },
  {
    name: "Winds of Fleet",
    description:
      "*Fan of Knives* gives you a burst of speed, increasing *Movement Speed* by *15/18.8/22.6/26.4/30%* and *Attack Speed* by *10/20/30/40%* for *1s*.",
    max: 4,
    position: [5, 0],
    requires: "Black Powder",
  },
  {
    name: "Master Assassin",
    description:
      "While full health, shadows envelop you to increase *Crit Chance* by *5/6/7/8%* and *Crit Damage* by *10/15/20/25%*.",
    max: 4,
    position: [5, 2],
    requires: "Echo Strike",
  },
  {
    name: "Alacrity",
    description:
      "Killing an enemy increases *Movement Speed* by *3/6/9/12/15%* for *1s*. This can stack up to *10* times.",
    max: 5,
    position: [6, 0],
  },
  {
    name: "Death from Above",
    description:
      "Every *16th* attack triggers a deadly combo. A surge of daggers descends upon *2* random enemies, each dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Shadow Clones",
    description:
      "Every *12th* attack summons *1/2/3/4/5* shadow clone that charge and explodes on enemies for *X* damage.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Death for All",
    description:
      "*Death from Above* now damages all enemies around the target.",
    max: 1,
    position: [7, 1],
    requires: "Death from Above",
  },
  {
    name: "Shadow Colossus",
    description:
      "Every *Shadow Clone* has *15%* chance to call forth a shadowy construct that mimics your actions for *8s*. It also increases *Armor* by *75* for its duration.",
    max: 1,
    position: [7, 2],
    requires: "Shadow Clones",
  },
] as RawSkill[]

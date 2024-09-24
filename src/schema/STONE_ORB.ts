import type { RawSkill } from "../types"

export const STONE_ORB_SCHEMA = [
  {
    name: "Stone Fist",
    description: "Increase *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Rock Armor",
    description: "Increase *Armor* by *3/6/9/12/15*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Grounded",
    description:
      "Increase *Max HP* by *50/100/150/200/250* and *Leech* by *4/6/8/10/12*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Evasion",
    description: "Increase *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Earth Mastery",
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [1, 0],
    requires: "Stone Fist",
  },
  {
    name: "Stone Shield",
    description:
      "Gain a permanent stone shield that increases *Armor* by *20/40/60/80/100*. Taking damage for more than *10%* of your *Max HP* in *1s* breaks the shield. Has *3.6s* cooldown.",
    max: 5,
    position: [1, 1],
    requires: "Rock Armor",
  },
  {
    name: "Earthen Might",
    description:
      "Increase *Damage* by *2/4/6/8/10%* and *Crit Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [2, 0],
    requires: "Earth Mastery",
  },
  {
    name: "Shattering Fragments",
    description:
      "When *Stone Shield* breaks, it shatters dealing *X* damage to nearby enemies.",
    max: 5,
    position: [2, 1],
    requires: "Stone Shield",
  },
  {
    name: "Earthen Spikes",
    description:
      "Every *4th* attack summons earth spikes under your main target, dealing *X* damage to enemies in a small area.",
    max: 5,
    position: [2, 2],
  },
  {
    name: "Regenerative Roots",
    description:
      "Every *10s* earth blooms under your feet, *healing* you for *5/6/7/8/9%* HP every *0.75s* for *3s*.",
    max: 5,
    position: [2, 3],
  },
  {
    name: "Piercing Splinters",
    description:
      "*Shattering Fragments* also blast splinters around inflicting bleeding wounds, dealing *X* damage every *0.4s* for *2s*.",
    max: 5,
    position: [3, 1],
    requires: "Shattering Fragments",
  },
  {
    name: "Rupture",
    description:
      "*Earthen Spikes* now travel towards *1* random target, dealing *X* damage to anything in its path.",
    max: 5,
    position: [3, 2],
    requires: "Earthen Spikes",
  },
  {
    name: "Stoneskin",
    description:
      "Increase *Armor* by *1/2/3/4/5*, *Max HP* by *15/30/45/60/75* and *Damage* by *1/2/3/4/5%*.",
    max: 5,
    position: [4, 0],
    requires: "Earthen Might",
  },
  {
    name: "Earthquake",
    description:
      "Every *8th* attack causes the earth to tremble, dealing *X* damage every *0.75s* for *3s*.",
    max: 5,
    position: [4, 1],
  },
  {
    name: "Maneuvers",
    description: "Increase *Movement Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [4, 3],
  },
  {
    name: "Earthen Strength",
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [5, 0],
    requires: "Stoneskin",
  },
  {
    name: "Aftershock",
    description:
      "*Earthquake* has a *10/20/30/40/50%* chance to cause a second quake once it ends. This can trigger itself again.",
    max: 5,
    position: [5, 1],
    requires: "Earthquake",
  },
  {
    name: "Stone Will",
    description:
      "Increase *Attack Speed* by *3/6/9/12/15%*, *Leech* by *1/2/3/4/5* and *HP Regen* by *75/80/85/90/95*.",
    max: 5,
    position: [5, 2],
  },
  {
    name: "Boulder",
    description:
      "Every *4th* attack summons a boulder that crushes enemies in its path, dealing *X* damage.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Tombstone",
    description:
      "Every *8th* attack raises the earth around enemies, crushing them towards the center and dealing *X* damage. Deals *triple* damage while fighting a *single* enemy.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Earthen Fury",
    description: "Additionally increase *Attack Target* by *1*.",
    max: 1,
    position: [7, 0],
    requires: "Earthen Strength",
  },
  {
    name: "Falling Sky",
    description:
      "*Boulder* now causes the sky to fall on its path, dealing an extra *X* damage every time it crashes into the ground.",
    max: 3,
    position: [7, 1],
    requires: "Boulder",
  },
  {
    name: "Upheaval",
    description:
      "Once *Tombstone* pulls enemies towards its center, an upheaval occurs, knocking enemies up and dealing an additional *X* damage.",
    max: 3,
    position: [7, 2],
    requires: "Tombstone",
  },
  {
    name: "Seismic Barrier",
    description:
      "Every *5th* attack raises a force field in front of you, blocking basic enemy projectiles. The shield lasts for *1.5/2/2.5/3/3.5s*.",
    max: 5,
    position: [7, 3],
  },
] as RawSkill[]

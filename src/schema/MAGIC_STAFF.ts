import type { RawSkill } from "../types"

export const MAGIC_STAFF_SCHEMA = [
  {
    id: 115,
    description: "Increase *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 116,
    description: "Increase *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 1],
  },
  {
    id: 119,
    description:
      "Grant a permanent flame shield increasing *Armor* by *15/30/45/60/75* and deals *X* damage back to attackers.",
    max: 5,
    position: [0, 2],
  },
  {
    id: 117,
    description:
      "Increase *Max HP* by *20/40/60/80/100* and *Movement Speed* by *1/2/3/4/5%*.",
    max: 5,
    position: [0, 3],
  },
  {
    id: 118,
    description: "Increase *Movement Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [1, 1],
    requires: 116,
  },
  {
    id: 122,
    description:
      "Taking damage has a *10/20/30/40/50%* chance to increase *Movement Speed* by *7/15/22.5/30/37.5%* and dealing *X* damage to nearby enemies every *0.5s* for *5s*.",
    max: 5,
    position: [1, 2],
    requires: 119,
  },
  {
    id: 120,
    description:
      "Your attacks have a *2.5/5/7.5/10/12.5%* chance to conjure *1/2/3/4/5* ice lance(s) dealing *X* damage to a random active target.",
    max: 5,
    position: [1, 3],
  },
  {
    id: 121,
    description:
      "Increase *Crit Chance* by *2/4/6/8/10%* and *Crit Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [2, 0],
    requires: 115,
  },
  {
    id: 131,
    description:
      "Increase *Attack Speed* by *3/6/9/12/15%*, *Leech* by *2/3/4/8/10* and *HP Regen* by *40/80/120/160/200*.",
    max: 5,
    position: [2, 2],
  },
  {
    id: 123,
    description:
      "*Ice Lances* now shatter on hit, dealing *50/80/110/140/170%* of original damage in a small radius.",
    max: 5,
    position: [2, 3],
    requires: 120,
  },
  {
    id: 124,
    description:
      "Increase *Damage* by *5/10/15/20/25%* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [3, 0],
    requires: 121,
  },
  {
    id: 125,
    description:
      "Every *20th* attack calls down a lightning storm, dealing *X* damage every *0.5s* for *3s*.",
    max: 5,
    position: [3, 1],
  },
  {
    id: 126,
    description:
      "Every *12th* attack launches a frozen orb dealing *X* damage and slowing enemies by *20%* for *4s*.",
    max: 5,
    position: [3, 3],
  },
  {
    id: 127,
    description:
      "When *Thunderstorm* expires, it releases a static energy blast, dealing *X* extra damage to all enemies within range.",
    max: 5,
    position: [4, 1],
    requires: 125,
  },
  {
    id: 128,
    description:
      "Your attacks ignite enemies, dealing *X* damage every *0.49s* for *1.8/2/2.2/2.4/2.6s*.",
    max: 5,
    position: [4, 2],
  },
  {
    id: 129,
    description:
      "When *Frozen Orbs* expire, they explode dealing *X* damage to nearby enemies and freezing them for *1.5/1.7/1.8/2/2.1s*.",
    max: 5,
    position: [4, 3],
    requires: 126,
  },
  {
    id: 130,
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [5, 0],
    requires: 124,
  },
  {
    id: 201,
    description: "Increase *Burn Damage (DoT)* by *5/10/15/20/25%*.",
    max: 5,
    position: [5, 2],
    requires: 128,
  },
  {
    id: 132,
    description:
      "Every *12th* attack calls down a meteor, dealing *X* damage at its impact center with reduced damage falloff.",
    max: 5,
    position: [6, 2],
  },
  {
    id: 133,
    description:
      "Every *30/27/24/21/18s*, summon a blizzard that travels towards nearby enemies, dealing *X* damage every *0.5s* for *5s* in a *1/2/3/4/5m* area.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 134,
    description: "Your basic attacks now *ricochet* once.",
    max: 1,
    position: [7, 0],
    requires: 130,
  },
  {
    id: 136,
    description:
      "*Meteor* now splits into *6* fragments, covering a larger area, with each fragment dealing *40%* of the original meteor’s damage.",
    max: 1,
    position: [7, 2],
    requires: 132,
  },
  {
    id: 137,
    description:
      "*Blizzard* is now permanent and follows you, but deals *75%* of its original damage.",
    max: 1,
    position: [7, 3],
    requires: 133,
  },
] as RawSkill[]

import type { RawSkill } from "../types"

export const MAGIC_STAFF_SCHEMA = [
  {
    name: "Arcane Precision",
    description: "Increase *Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Quick Cast",
    description: "Increase *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Frozen Skin",
    description:
      "Increase *Max HP* by *20/40/60/80/100* and *Movement Speed* by *1/2/3/4/5%*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Fleetfoot",
    description: "Increase *Movement Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [1, 1],
    requires: "Quick Cast",
  },
  {
    name: "Flame Shield",
    description:
      "Grant a permanent flame shield that increases *Armor* by *10/20/30/40/50* and deals *X* damage back to attackers.",
    max: 5,
    position: [1, 2],
  },
  {
    name: "Ice Lance",
    description:
      "Your attacks have a *2.5/5/7.5/10/12.5%* chance to conjure *1/2/3/4/5* ice lance(s) dealing *X* damage to a random active target.",
    max: 5,
    position: [1, 3],
  },
  {
    name: "Arcane Power",
    description:
      "Increase *Crit Chance* by *2/4/6/8/10%* and *Crit Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [2, 0],
    requires: "Arcane Precision",
  },
  {
    name: "Flamestorm",
    description:
      "Taking damage has a *10/20/30/40/50%* chance to activate *Flamestorm*, increasing *Movement Speed* by *5/10/15/20/25%* and dealing *X* damage to nearby enemies every *0.5s* for *3/3.5/3.9/4.4/4.8s*.",
    max: 5,
    position: [2, 2],
    requires: "Flame Shield",
  },
  {
    name: "Shattering Ice",
    description:
      "*Ice Lances* now shatter on hit, dealing *20/40/60/80/100%* of original damage in a small radius.",
    max: 5,
    position: [2, 3],
    requires: "Ice Lance",
  },
  {
    name: "Empowered Spells",
    description:
      "Increase *Damage* by *5/10/15/20/25%* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [3, 0],
    requires: "Arcane Power",
  },
  {
    name: "Thunderstorm",
    description:
      "Every *20th* attack calls down a lightning storm, dealing *X* damage every *0.5s* for *3s*.",
    max: 5,
    position: [3, 1],
  },
  {
    name: "Frozen Orb",
    description:
      "Every *12th* attack launches a frozen orb dealing *X* damage and slowing enemies by *20%* for *4s*.",
    max: 5,
    position: [3, 3],
  },
  {
    name: "Static Discharge",
    description:
      "When *Thunderstorm* expires, it releases a static energy blast, dealing *X* damage to all enemies within range.",
    max: 5,
    position: [4, 1],
    requires: "Thunderstorm",
  },
  {
    name: "Burning Projectiles",
    description:
      "Your normal attacks now ignite enemies, dealing *X* damage every *0.5/0.45/0.4/0.35/0.3s* for *2/2.3/2.6/2.9/3.2s*.",
    max: 5,
    position: [4, 2],
  },
  {
    name: "Shattering Orbs",
    description:
      "When *Frozen Orbs* expire, they explode dealing *X* damage to nearby enemies and freezing them for *2/2.4/2.8/3.2/3.6s*.",
    max: 5,
    position: [4, 3],
    requires: "Frozen Orb",
  },
  {
    name: "Arcane Brilliance",
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [5, 0],
    requires: "Empowered Spells",
  },
  {
    name: "Blazing Hands",
    description:
      "Increase *Attack Speed* by *3/6/9/12/15%*, *Leech* by *2/4/6/8/10* and *HP Regen* by *40/80/120/160/200*.",
    max: 5,
    position: [5, 2],
    requires: "Burning Projectiles",
  },
  {
    name: "Meteor",
    description:
      "Every *12th* attack calls down a meteor, dealing *X* damage at its impact center with reduced damage falloff.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Blizzard",
    description:
      "Every *30s*, summon a blizzard that travels towards nearby enemies, dealing *X* damage every *0.5/1/1.5/2/2.5s* for *5s* in a *1m* area.",
    max: 5,
    position: [6, 3],
  },
  {
    name: "Arcane Mastery",
    description: "Your basic attacks now *ricochet* once.",
    max: 1,
    position: [7, 0],
    requires: "Arcane Brilliance",
  },
  {
    name: "Static Recharge",
    description:
      "Fatal blows that would kill you trigger a shield, preventing your death. While active, you are immune and can’t move. Shield deals *X* damage nearby and heals you every *1s* for *4s*. Has *120s* cooldown.",
    max: 1,
    position: [7, 1],
    requires: "Static Discharge",
  },
  {
    name: "Meteor Shower",
    description:
      "*Meteor* now splits into 6 fragments, covering a larger area, with each fragment dealing *35%* of the original meteor’s damage.",
    max: 1,
    position: [7, 2],
    requires: "Meteor",
  },
  {
    name: "Glacial Tempest",
    description:
      "*Blizzard* is now permanent and follows you, but deals *75%* of its original damage.",
    max: 1,
    position: [7, 3],
    requires: "Blizzard",
  },
] as RawSkill[]

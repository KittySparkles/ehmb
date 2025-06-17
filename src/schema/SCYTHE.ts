import type { RawSkill } from "../types"

export const SCYTHE_SCHEMA = [
  {
    id: 207,
    description: "Increase *Damagr* by *5/10/15/20/25*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 226,
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 2],
  },
  {
    id: 213,
    description:
      "Summon *1/2/3/4/5* permanent skeleton(s) with basic attacks that deal *X* damage to aid you in battle.",
    max: 5,
    position: [0, 3],
  },
  {
    id: 225,
    description:
      "Increase *Damage* by *3/6/9/12/15%* and *Armor* by *10/20/30/40/50* .",
    max: 5,
    position: [1, 0],
    requires: 207,
  },
  {
    id: 227,
    description: "Increase *Attack Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [1, 1],
  },
  {
    id: 223,
    description: "Increase *Crit Damage* by *5/10/15/20/25%*.",
    max: 5,
    position: [1, 2],
    requires: 226,
  },
  {
    id: 228,
    description:
      "Increase *Max HP* by *100/200/300/400/500* and *HP Regen* by *40/80/120/160/200%*.",
    max: 5,
    position: [2, 0],
  },
  {
    id: 230,
    description:
      "Increase *Leech* by *3/6/9/12/15* and *Movement Speed* by *1/2/3/4/5%*.",
    max: 5,
    position: [2, 1],
  },
  {
    id: 211,
    description:
      "Every *6th* attack unleashes a blood nova dealing *X* damage to nearby enemies and consuming *8%* of your current health.",
    max: 5,
    position: [2, 2],
  },
  {
    id: 220,
    description:
      "Attach *1/2/3/4/5* bone(s) to your body, increasing your *Armor* by *100/150/200/250/300*.",
    max: 5,
    position: [3, 0],
  },
  {
    id: 212,
    description:
      "*Blood Nova* becomes infectious, dealing *25/31/37/43/50%* increased damage to both you and enemies, additionally inflicting poison when fighting a single enemy.",
    max: 5,
    position: [3, 2],
    requires: 211,
  },
  {
    id: 214,
    description:
      "Your attacks have a *5/6/7/8/9%* chance to spawn a skeleton mage for *6s*, whose attacks deal *X* damage.",
    max: 5,
    position: [3, 3],
  },
  {
    id: 221,
    description:
      "Taking damage has a *10/12.5/15/17.5/20%* chance to launch bone splinters, dealing *X* damage. Each ally you control adds one additional projectile. Has *8s* cooldown.",
    max: 1,
    position: [4, 0],
    requires: 220,
  },
  {
    id: 208,
    description:
      "Every *6th* attack summons a spectral scythe that slashes through enemies in front, dealing *X* damage.",
    max: 5,
    position: [4, 1],
  },
  {
    id: 232,
    description:
      "Increase *Resilience* by *5%*, but you can no longer heal yourself above *75%* HP.",
    max: 1,
    position: [4, 2],
    requires: 212,
  },
  {
    id: 215,
    description:
      "Every *4th* skeleton mage transforms into a skeleton wizard, unleashing a devastating area attack dealing *X* damage.",
    max: 5,
    position: [4, 3],
    requires: 214,
  },
  {
    id: 222,
    description:
      "*Bone Splinters* inflicts bleeding on hit, dealing *X* damage every *0.5s* for *2s*.",
    max: 3,
    position: [5, 0],
    requires: 221,
  },
  {
    id: 231,
    description: "Increase *Poison Damage* by *9/18/27/36%*.",
    max: 4,
    position: [5, 2],
  },
  {
    id: 224,
    description: "Increase *Bleed Damage* by *10/20/30/40%*.",
    max: 4,
    position: [6, 0],
  },
  {
    id: 209,
    description:
      "Summon two spectral scythes instead, each dealing *X* damage and striking with increased size.",
    max: 5,
    position: [6, 1],
    requires: 208,
  },
  {
    id: 219,
    description: "Increase *Ally damage* by *1.5/1.8/2.1/2.4/2.7%*.",
    max: 5,
    position: [6, 2],
  },
  {
    id: 216,
    description:
      "Summon a permanent abomination to fight by your side, dealing *X* damage to all enemies in range with each attack.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 210,
    description:
      "Spectral Scythes deal increased damage based on missing health.",
    max: 1,
    position: [7, 1],
    requires: 209,
  },
  {
    id: 218,
    description:
      "While below *65%* health, enter a dark pact that increases *Ally Damage* by *3/3.5/4%*.",
    max: 3,
    position: [7, 2],
    requires: 219,
  },
  {
    id: 217,
    description:
      "Your abomination’s strikes poison enemies, dealing *X* damage every *0.5s* for *3s*.",
    max: 3,
    position: [7, 3],
    requires: 216,
  },
] as RawSkill[]

import type { RawSkill } from "../types"

export const BOW_SCHEMA = [
  {
    id: 27,
    description: "Increase *Armor* by *3/6/9/12/15*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 25,
    description: "Increase *Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [0, 1],
  },
  {
    id: 26,
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 2],
  },
  {
    id: 31,
    description:
      "Every *3rd* attack enhances your arrows with fire, inflicting *X* damage in a small radius.",
    max: 5,
    position: [1, 0],
  },
  {
    id: 28,
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [1, 1],
  },
  {
    id: 29,
    description: "Increase *Crit Damage* by *6/9/12/15/18%*.",
    max: 5,
    position: [1, 2],
  },
  {
    id: 30,
    description:
      "Increase *Max HP* by *30/60/90/120/150* and *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [1, 3],
  },
  {
    id: 32,
    description:
      "Dip your arrows in poison, inflicting *X* damage per *0.75s* for *5s*.",
    max: 5,
    position: [2, 1],
  },
  {
    id: 33,
    description:
      "Enhance your arrows with ice, causing attacks to have *10/17.5/25/32.5/40%* chance to freeze the enemy for *0.52/0.65/0.71/0.85/1s*.",
    max: 5,
    position: [2, 2],
  },
  {
    id: 34,
    description:
      "Enhance your arrows with thunder, causing attacks to have a *5/6/7/8/9%* chance to blast the enemy with lighting for *X* damage. Each lighting has an extra *5/6/7/8/9%* chance to jump to another nearby enemy for the same damage.",
    max: 5,
    position: [2, 3],
  },
  {
    id: 35,
    description:
      "Every *5th* attack launches a volley of arrows above enemies, dealing *X* damage every *0.75s* for *2.3s*.",
    max: 5,
    position: [3, 0],
  },
  {
    id: 38,
    description: "Increase *Movement Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [3, 2],
  },
  {
    id: 36,
    description: "Your attacks ricochet once.",
    max: 1,
    position: [3, 3],
  },
  {
    id: 37,
    description:
      "*Rain of Arrows* calls down an extra blast on its last wave for *X* damage.",
    max: 4,
    position: [4, 0],
    requires: 35,
  },
  {
    id: 199,
    description: "Increase *Poison Damage* by *3/6/9/12/15%*.",
    max: 5,
    position: [4, 1],
    requires: 32,
  },
  {
    id: 39,
    description: "Increase *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [4, 2],
  },
  {
    id: 40,
    description: "Your attacks ricochet twice.",
    max: 1,
    position: [4, 3],
    requires: 36,
  },
  {
    id: 41,
    description:
      "Increase *Damage* by *10/15/20/25/30%*, *Armor* by *2/4/6/8/10* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [5, 1],
  },
  {
    id: 42,
    description:
      "Your attacks have *5/10/15/20/25%* chance to burst out *3* more projectiles quickly. Has a *3.5s* cooldown.",
    max: 5,
    position: [5, 2],
  },
  {
    id: 47,
    description: "Increase *Attack Target* by *1*.",
    max: 2,
    position: [5, 3],
  },
  {
    id: 43,
    description:
      "Summon a permanent feral bear to fight alongside you, unleashing powerful swipe attacks dealing *X* damage in a small area.",
    max: 5,
    position: [6, 0],
  },
  {
    id: 44,
    description:
      "Increase *Leech* by *3/6/9/12/15* and *HP Regen* by *40/80/120/160/200*.",
    max: 5,
    position: [6, 1],
    requires: 41,
  },
  {
    id: 163,
    description:
      "Every *7th* attack launches a great arrow forward, dealing *X* damage to all enemies in its path.",
    max: 5,
    position: [6, 3],
  },
  {
    id: 45,
    description:
      "Dire Frenzy also summons a wolf and a boar to stand with your bear, creating a powerful trio of the wild and both dealing *X* damage in a small area.",
    max: 3,
    position: [7, 0],
    requires: 43,
  },
  {
    id: 46,
    description:
      "Increase *Crit Chance* by *1/2/3%* and *Crit Damage* by *10/20/30%* and *Damage* by *10/20/30%*.",
    max: 3,
    position: [7, 2],
  },
  {
    id: 165,
    description:
      "While fighting a single enemy, *Lethal Shot* deals *160%* increased damage and inflicts poison for the same amount.",
    max: 1,
    position: [7, 3],
    requires: 163,
  },
] as RawSkill[]

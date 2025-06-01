import type { RawSkill } from "../types"

export const BOW_SCHEMA = [
  {
    name: "Tough Skin",
    description: "Increase *Armor* by *3/6/9/12/15*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Archery Tactics",
    description: "Increase *Damage* by *6/12/18/24/30%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Careful Aim",
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Flame Arrows",
    description:
      "Every *3rd* attack enhances your arrows with fire, inflicting *X* damage in a small radius.",
    max: 5,
    position: [1, 0],
  },
  {
    name: "Improved Tactics",
    description: "Increase *Attack Target* by *1*.",
    max: 1,
    position: [1, 1],
  },
  {
    name: "Critical Aim",
    description: "Increase *Crit Damage* by *6/9/12/15/18%*.",
    max: 5,
    position: [1, 2],
  },
  {
    name: "Survivor",
    description:
      "Increase *Max HP* by *30/60/90/120/150* and *Dodge* by *1/2/3/4/5%*.",
    max: 5,
    position: [1, 3],
  },
  {
    name: "Poisoned Arrows",
    description:
      "Dip your arrows in poison, inflicting *X* damage per *0.75s* for *5s*.",
    max: 5,
    position: [2, 1],
  },
  {
    name: "Ice Arrows",
    description:
      "Enhance your arrows with ice, causing attacks to have *10/17.5/25/32.5/40%* chance to freeze the enemy for *0.52/0.65/0.71/0.85/1s*.",
    max: 5,
    position: [2, 2],
  },
  {
    name: "Lightning Arrows",
    description:
      "Enhance your arrows with thunder, causing attacks to have a *5/6/7/8/9%* chance to blast the enemy with lighting for *X* damage. Each lighting has an extra *5/6/7/8/9%* chance to jump to another nearby enemy for the same damage.",
    max: 5,
    position: [2, 3],
  },
  {
    name: "Rain of Arrows",
    description:
      "Every *5th* attack launches a volley of arrows above enemies, dealing *X* damage every *0.75s* for *2.3s*.",
    max: 5,
    position: [3, 0],
  },
  {
    name: "Winds of Fleet",
    description: "Increase *Movement Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [3, 2],
  },
  {
    name: "Trick Shots",
    description: "Your attacks ricochet once.",
    max: 1,
    position: [3, 3],
  },
  {
    name: "Rain of Chaos",
    description:
      "*Rain of Arrows* calls down an extra blast on its last wave for *X* damage.",
    max: 4,
    position: [4, 0],
    requires: "Rain of Arrows",
  },
  {
    name: "Toxic Draw",
    description: "Increase *Poison Damage* by *3/6/9/12/15%*.",
    max: 5,
    position: [4, 1],
    requires: "Poisoned Arrows",
  },
  {
    name: "Winds of Fury",
    description: "Increase *Attack Speed* by *2/4/6/8/10%*.",
    max: 5,
    position: [4, 2],
  },
  {
    name: "Improved Trick Shots",
    description: "Your attacks ricochet twice.",
    max: 1,
    position: [4, 3],
    requires: "Trick Shots",
  },
  {
    name: "Trueshot Aura",
    description:
      "Increase *Damage* by *10/15/20/25/30%*, *Armor* by *2/4/6/8/10* and *Max HP* by *30/60/90/120/150*.",
    max: 5,
    position: [5, 1],
  },
  {
    name: "Barrage",
    description:
      "Your attacks have *5/10/15/20/25%* chance to burst out *3* more projectiles quickly. Has a *3.5s* cooldown.",
    max: 5,
    position: [5, 2],
  },
  {
    name: "Advanced Tactics",
    description: "Increase *Attack Target* by *1*.",
    max: 2,
    position: [5, 3],
  },
  {
    name: "Dire Frenzy",
    description:
      "Summon a permanent feral bear to fight alongside you, unleashing powerful swipe attacks dealing *X* damage in a small area.",
    max: 5,
    position: [6, 0],
  },
  {
    name: "Survival Instincts",
    description:
      "Increase *Leech* by *3/6/9/12/15* and *HP Regen* by *40/80/120/160/200*.",
    max: 5,
    position: [6, 1],
    requires: "Trueshot Aura",
  },
  {
    name: "Lethal Shot",
    description:
      "Every *7th* attack launches a great arrow forward, dealing *X* damage to all enemies in its path.",
    max: 5,
    position: [6, 3],
  },
  {
    name: "Dire Pack",
    description:
      "Dire Frenzy also summons a wolf and a boar to stand with your bear, creating a powerful trio of the wild and both dealing *X* damage in a small area.",
    max: 3,
    position: [7, 0],
    requires: "Dire Frenzy",
  },
  {
    name: "Ultimate Tactics",
    description:
      "Increase *Crit Chance* by *1/2/3%* and *Crit Damage* by *10/20/30%* and *Damage* by *10/20/30%*.",
    max: 3,
    position: [7, 2],
  },
  {
    name: "Lone Wolf",
    description:
      "While fighting a single enemy, *Lethal Shot* deals *160%* increased damage and inflicts poison for the same amount.",
    max: 1,
    position: [7, 3],
    requires: "Lethal Shot",
  },
] as RawSkill[]

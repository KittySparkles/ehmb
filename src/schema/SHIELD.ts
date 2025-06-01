import type { RawSkill } from "../types"

export const SHIELD_SCHEMA = [
  {
    name: "Ironclad",
    description: "Increase *Armor* by *10/20/30/40/50*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Warrior’s Fury",
    description: "Increase *Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Fortification",
    description: "Increase *Max HP* by *150/300/450/600/750*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Resilient Strikes",
    description:
      "Increase *Damage* by *4/8/12/16/20%* and *Armor* by *4/8/12/16/20*.",
    max: 5,
    position: [1, 0],
    requires: "Ironclad",
  },
  {
    name: "Critical Edge",
    description: "Increase *Crit Damage* by *4/8/12/16/20%*.",
    max: 5,
    position: [1, 1],
    requires: "Warrior’s Fury",
  },
  {
    name: "Vitality",
    description:
      "Increase *Max HP* by *50/100/150/200/250*, *Armor* by *4/8/12/16/20* and *HP Regen* by *75/150/225/300/375*.",
    max: 5,
    position: [1, 2],
    requires: "Fortification",
  },
  {
    name: "Sharpened Instincts",
    description: "Increase *Crit Chance* by *1/2/3/4/5%*.",
    max: 5,
    position: [1, 3],
  },
  {
    name: "Valor Aura",
    description:
      "While fighting a single enemy, gain Valor Aura. This increases *Armor* by *250* as well as enhancing other abilities.",
    max: 1,
    position: [2, 0],
    requires: "Resilient Strikes",
  },
  {
    name: "Fury Aura",
    description:
      "While fighting at least *3* enemies, gain Fury Aura. This increases *Crit Damage* by *40%* as well as enhancing other abilities.",
    max: 1,
    position: [2, 1],
    requires: "Critical Edge",
  },
  {
    name: "Radiant Strike",
    description:
      "Every *8th* attack releases a radiant blast, dealing *X* damage to nearby enemies. Damage further increases with *Max HP*.",
    max: 5,
    position: [2, 2],
    requires: "Vitality",
  },
  {
    name: "Shield Slam",
    description:
      "Every *4th* attack, slam your shield to deal *X* damage to enemies in front. If Fury Aura is active, damage further increases with *Armor*. Cannot slam if the shield is away.",
    max: 5,
    position: [2, 3],
  },
  {
    name: "Burning Radiance",
    description:
      "*Radiant Blast* also burns enemies for *X* damage every *0.8s* for *3s*. Damage further increases with *Max HP*.",
    max: 5,
    position: [3, 2],
    requires: "Radiant Strike",
  },
  {
    name: "Radiant Slam",
    description:
      "*Shield Slam* also releases a beam of radiant energy dealing *X* damage to enemies in front. If Fury Aura is active, damage further increases with *Armor*.",
    max: 5,
    position: [3, 3],
    requires: "Shield Slam",
  },
  {
    name: "Valor’s Strength",
    description:
      "Every time an ability using Valor Aura activates, there is a *10%* chance to grant *10% Slayer* for *5s*.",
    max: 1,
    position: [4, 0],
    requires: "Valor Aura",
  },
  {
    name: "Fury’s Might",
    description:
      "Every time an ability using Fury Aura activates, there is a *10%* chance to grant *4% Overkill* for *5s*.",
    max: 1,
    position: [4, 1],
    requires: "Fury Aura",
  },
  {
    name: "Fortified Growth",
    description:
      "Increase *Damage* by *5/10/15/20/25%*, *Max HP* by *100/200/300/400/500* and *Armor* by *5/10/15/20/25*.",
    max: 5,
    position: [4, 2],
  },
  {
    name: "Shield Throw",
    description:
      "Every *6th* attack, throw your shield dealing *X* damage to enemies in its path. Valor Aura further increases damage by *Max HP*, Fury Aura further increases damage by *Armor*.",
    max: 5,
    position: [4, 3],
  },
  {
    name: "Swift Protector",
    description:
      "Increase *Attack Speed* by *3/6/9/12/15%* and *Movement Speed* by *3/6/9/12/15%*.",
    max: 5,
    position: [5, 1],
  },
  {
    name: "Explosive Throw",
    description:
      "*Shield Throw* explodes if it hits at least *6* times, dealing *X* damage to nearby enemies.",
    max: 5,
    position: [5, 3],
    requires: "Shield Throw",
  },
  {
    name: "Justice Rains",
    description:
      "Every *10th* attack calls down *1/2/3/5/6* sword(s) upon random enemies, smashing the ground beneath them and dealing *X* damage to nearby enemies.",
    max: 5,
    position: [6, 0],
  },
  {
    name: "Piercing Strike",
    description:
      "Every *5th* attack strikes forward with a deadly piercing strike, dealing *X* damage to enemies in front. Damage further increases with *Armor*.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Bastion",
    description:
      "Receiving damage has a *5%* chance to release a shockwave, dealing *X* damage to neaby enemies. Has a *8s* cooldown.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Defensive Stance",
    description:
      "Whenever you fall below *20/30/40% Max HP*, enter a defensive stance that grants *250/500/750 Armor*.",
    max: 3,
    position: [6, 3],
  },
  {
    name: "Justice Enhanced",
    description:
      "If Fury Aura is active, *Justice Rains*’ damage further increases with *Armor*.",
    max: 1,
    position: [7, 0],
    requires: "Justice Rains",
  },
  {
    name: "Piercing Valor",
    description:
      "If Valor Aura is active, *Piercing Strike* deals *110%* increased damage.",
    max: 1,
    position: [7, 1],
    requires: "Piercing Strike",
  },
  {
    name: "Bastion’s Resilience",
    description:
      "If Valor Aura is active, the chance to trigger *Bastion* is significantly increased and its cooldown is halved.",
    max: 1,
    position: [7, 2],
    requires: "Bastion",
  },
] as RawSkill[]

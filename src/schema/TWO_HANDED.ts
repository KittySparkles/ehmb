import type { RawSkill } from "../types"

export const TWO_HANDED_SCHEMA = [
  {
    name: "Heavy Arms",
    description: "Increase *Damage* by *7/14/21/28/35%*.",
    max: 5,
    position: [0, 0],
  },
  {
    name: "Critical Precision",
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 1],
  },
  {
    name: "Sharp Edges",
    description:
      "Attacks have a *20/30/40/50/60%* chance to cause bleeding, dealing *X* damage every *0.49s* for *4s*.",
    max: 5,
    position: [0, 2],
  },
  {
    name: "Battle Guard",
    description: "Increase *Armor* by *3/6/9/12/15*.",
    max: 5,
    position: [0, 3],
  },
  {
    name: "Warrior’s Vigor",
    description:
      "Increase *Max HP* by *35/70/105/140/175* and *Damage* by *6/9/12/15/18%*.",
    max: 5,
    requires: "Heavy Arms",
    position: [1, 0],
  },
  {
    name: "Bone Breaker",
    description:
      "Increase *Crit Chance* by *1.5/3/4.5/5/6.5%* and *Crit Damage* by *7.5/11.25/15%*.",
    max: 3,
    requires: "Critical Precision",
    position: [1, 1],
  },
  {
    name: "Thorns Aura",
    description:
      "Grant *20/40/60/80/100%* chance to reflect *X* damage to attackers.",
    max: 5,
    requires: "Battle Guard",
    position: [1, 3],
  },
  {
    name: "Dodge Master",
    description: "Increase *Dodge* by *5/10%*.",
    max: 2,
    position: [2, 0],
  },
  {
    name: "Whirlwind",
    description:
      "Every *4th* attack unleashes a steel storm, dealing *X* damage to nerby enemies every *0.5/0.45/0.4/0.35/0.3s* for *2.5s* (+ *22/45/68/91/114%* more damage while fighting a *single* enemy). *Attack Speed* increases *Whirlwind* speed.",
    max: 5,
    position: [2, 1],
  },
  {
    name: "Deep Wounds",
    description: "Increase *Bleed Damage* by *10/20/30/40/50%*.",
    max: 5,
    requires: "Sharp Edges",
    position: [2, 2],
  },
  {
    name: "Enrage",
    description:
      "While below *20/40/60%* *Max HP*, gain *Enrage*, increasing *Damage* by *20/25/30%*.",
    max: 3,
    position: [2, 3],
  },
  {
    name: "Swift Steps",
    description: "Increase *Movement Speed* by *4/5/6/7/8%*.",
    max: 5,
    position: [3, 0],
  },
  {
    name: "Ground Slam",
    description:
      "Every *3rd* attack slams the ground beneath you, dealing *X* damage to nearby enemies.",
    max: 5,
    position: [3, 2],
  },
  {
    name: "Enraged Guard",
    description: "*Enrage* increases *Armor* by *75*.",
    max: 1,
    requires: "Enrage",
    position: [3, 3],
  },
  {
    name: "Speed Surge",
    description:
      "Receiving damage has a *25/50/75/100/125%* chance to increase *Movement Speed* by *10/15/20/25/30%* for *3/4.5/6/7.5/9s*.",
    max: 4,
    requires: "Swift Steps",
    position: [4, 0],
  },
  {
    name: "Thunder Infused Whirlwind",
    description:
      "*Whirlwind* also electrocutes enemies, dealing an extra *X* damage.",
    max: 5,
    requires: "Whirlwind",
    position: [4, 1],
  },
  {
    name: "Earthshaping Slam",
    description:
      "*Ground Slam* echoes after a short delay, raising the earth beneath damaged enemies and dealing an additional *X* damage.",
    max: 5,
    requires: "Ground Slam",
    position: [4, 2],
  },
  {
    name: "Critical Rage",
    description:
      "*Enrage* increases *Crit Chance* by *20%* and *Crit Damage* by *50%*.",
    max: 1,
    requires: "Enraged Guard",
    position: [4, 3],
  },
  {
    name: "Agile Winds",
    description:
      "*Whirlwind* increases *Movement Speed* by *10/15/20/25/30%* and *Armor* by *5/7.5/10/12.5/15*.",
    max: 5,
    requires: "Thunder Infused Whirlwind",
    position: [5, 1],
  },
  {
    name: "Shockwave",
    description:
      "*Ground Slam* also creates a shockwave dealing *X damage* to enemies in front of you in a cone shape.",
    max: 5,
    requires: "Earthshaping Slam",
    position: [5, 2],
  },
  {
    name: "Life Tap",
    description: "Increase *Leech* by *4/8/12* and *Damage* by *3/4.5/6%*.",
    max: 3,
    position: [6, 0],
  },
  {
    name: "Divide Judgement",
    description:
      "Every *5th* attack calls down a heavenly sword to blast the enemies in front and around you, dealing *X* damage in a wide area.",
    max: 5,
    position: [6, 1],
  },
  {
    name: "Celestial Callings",
    description:
      "Your attacks have a *15/22.5/30/37.5/45%* chance to call down an ancient soul from the heavens, dealing *X* damage to a random nearby enemy.",
    max: 5,
    position: [6, 2],
  },
  {
    name: "Ultimate Rage",
    description: "*Enrage* increases *Damage* by *50%*.",
    max: 1,
    requires: "Critical Rage",
    position: [6, 3],
  },
  {
    name: "Edge of Death",
    description: "Increase *Crit Damage* by *30%*, *Resilience* by *5%*, but you can no longer heal yourself above *85%* HP.",
    max: 1,
    position: [7, 0],
    requires: "Life Tap"
  },
  {
    name: "Ultimate Judgement",
    description:
      "*Divine Judgement* echoes, calling down *2* additional divine swords from the heavens, each dealing *X* damage with a slight delay.",
    max: 1,
    requires: "Divide Judgement",
    position: [7, 1],
  },
  {
    name: "Ancient Favor",
    description:
      "*Celestial Callings* hits all active targets instead of a random target.",
    max: 1,
    requires: "Celestial Callings",
    position: [7, 2],
  },
  {
    name: "Undying Rage",
    description:
      "Prevent the next lethal hit that would kill you and deal *X* damage to nearby enemies. For the next *5s*, your HP cannot drop below *1*. Has *60s* cooldown.",
    max: 1,
    requires: "Ultimate Rage",
    position: [7, 3],
  },
] as RawSkill[]

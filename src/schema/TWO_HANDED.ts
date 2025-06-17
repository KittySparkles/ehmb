import type { RawSkill } from "../types"

export const TWO_HANDED_SCHEMA = [
  {
    id: 0,
    description: "Increase *Damage* by *7/14/21/28/35%*.",
    max: 5,
    position: [0, 0],
  },
  {
    id: 1,
    description: "Increase *Crit Chance* by *2/4/6/8/10%*.",
    max: 5,
    position: [0, 1],
  },
  {
    id: 7,
    description:
      "Attacks have a *20/30/40/50/60%* chance to cause bleeding, dealing *X* damage every *0.49s* for *4s*.",
    max: 5,
    position: [0, 2],
  },
  {
    id: 2,
    description: "Increase *Armor* by *3/6/9/12/15*.",
    max: 5,
    position: [0, 3],
  },
  {
    id: 4,
    description:
      "Increase *Max HP* by *35/70/105/140/175* and *Damage* by *6/9/12/15/18%*.",
    max: 5,
    position: [1, 0],
    requires: 0,
  },
  {
    id: 5,
    description:
      "Increase *Crit Chance* by *1.5/3/4.5/5/6.5%* and *Crit Damage* by *7.5/11.25/15%*.",
    max: 3,
    position: [1, 1],
    requires: 1,
  },
  {
    id: 6,
    description:
      "Grant *20/40/60/80/100%* chance to reflect *X* damage to attackers.",
    max: 5,
    position: [1, 3],
    requires: 2,
  },
  {
    id: 8,
    description: "Increase *Dodge* by *5/10%*.",
    max: 2,
    position: [2, 0],
  },
  {
    id: 10,
    description:
      "Every *4th* attack unleashes a steel storm, dealing *X* damage to nerby enemies every *0.5/0.45/0.4/0.35/0.3s* for *2.5s* (+ *22/45/68/91/114%* more damage while fighting a *single* enemy). *Attack Speed* increases *Whirlwind* speed.",
    max: 5,
    position: [2, 1],
  },
  {
    id: 197,
    description: "Increase *Bleed Damage* by *10/20/30/40/50%*.",
    max: 5,
    position: [2, 2],
    requires: 7,
  },
  {
    id: 9,
    description:
      "While below *20/40/60%* *Max HP*, gain *Enrage*, increasing *Damage* by *20/25/30%*.",
    max: 3,
    position: [2, 3],
  },
  {
    id: 13,
    description: "Increase *Movement Speed* by *4/5/6/7/8%*.",
    max: 5,
    position: [3, 0],
  },
  {
    id: 11,
    description:
      "Every *3rd* attack slams the ground beneath you, dealing *X* damage to nearby enemies.",
    max: 5,
    position: [3, 2],
  },
  {
    id: 12,
    description: "*Enrage* increases *Armor* by *75*.",
    max: 1,
    requires: 9,
    position: [3, 3],
  },
  {
    id: 19,
    description:
      "Receiving damage has a *25/50/75/100/125%* chance to increase *Movement Speed* by *10/15/20/25/30%* for *3/4.5/6/7.5/9s*.",
    max: 4,
    position: [4, 0],
    requires: 13,
  },
  {
    id: 14,
    description:
      "*Whirlwind* also electrocutes enemies, dealing an extra *X* damage.",
    max: 5,
    position: [4, 1],
    requires: 10,
  },
  {
    id: 15,
    description:
      "*Ground Slam* echoes after a short delay, raising the earth beneath damaged enemies and dealing an additional *X* damage.",
    max: 5,
    position: [4, 2],
    requires: 11,
  },
  {
    id: 16,
    description:
      "*Enrage* increases *Crit Chance* by *20%* and *Crit Damage* by *50%*.",
    max: 1,
    position: [4, 3],
    requires: 12,
  },
  {
    id: 17,
    description:
      "*Whirlwind* increases *Movement Speed* by *10/15/20/25/30%* and *Armor* by *5/7.5/10/12.5/15*.",
    max: 5,
    position: [5, 1],
    requires: 14,
  },
  {
    id: 18,
    description:
      "*Ground Slam* also creates a shockwave dealing *X damage* to enemies in front of you in a cone shape.",
    max: 5,
    position: [5, 2],
    requires: 15,
  },
  {
    id: 3,
    description: "Increase *Leech* by *4/8/12* and *Damage* by *3/4.5/6%*.",
    max: 3,
    position: [6, 0],
  },
  {
    id: 20,
    description:
      "Every *5th* attack calls down a heavenly sword to blast the enemies in front and around you, dealing *X* damage in a wide area.",
    max: 5,
    position: [6, 1],
  },
  {
    id: 21,
    description:
      "Your attacks have a *15/22.5/30/37.5/45%* chance to call down an ancient soul from the heavens, dealing *X* damage to a random nearby enemy.",
    max: 5,
    position: [6, 2],
  },
  {
    id: 24,
    description: "*Enrage* increases *Damage* by *50%*.",
    max: 1,
    position: [6, 3],
    requires: 16,
  },
  {
    id: 198,
    description:
      "Increase *Crit Damage* by *30%*, *Resilience* by *5%*, but you can no longer heal yourself above *85%* HP.",
    max: 1,
    position: [7, 0],
    requires: 3,
  },
  {
    id: 22,
    description:
      "*Divine Judgement* echoes, calling down *2* additional divine swords from the heavens, each dealing *X* damage with a slight delay.",
    max: 1,
    position: [7, 1],
    requires: 20,
  },
  {
    id: 23,
    description:
      "*Celestial Callings* hits all active targets instead of a random target.",
    max: 1,
    position: [7, 2],
    requires: 21,
  },
] as RawSkill[]

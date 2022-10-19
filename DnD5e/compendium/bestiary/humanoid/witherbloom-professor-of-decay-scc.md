---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/druid
aliases: ["Witherbloom Professor of Decay"]
statblock: true
"name": "Witherbloom Professor of Decay"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "11"
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "7"
  "Nature": !!int "6"
  "Arcana": !!int "6"
  "Survival": !!int "7"
"damage_resistances": "necrotic"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1/day each: [antilife shell](/compendium/spells/antilife-shell.md), [bane](/compendium/spells/bane.md),\
    \ [feign death](/compendium/spells/feign-death.md), [speak with dead](/compendium/spells/speak-with-dead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor can cast the [animate dead](/compendium/spells/animate-dead.md)\
    \ spell, using Wisdom as the spellcasting ability."
  "name": "Essence Transfer (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Mortality Spear attacks. It can replace one of\
    \ the attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 17 (3d8 + 4) necrotic damage, and the target can't regain hit\
    \ points until the start of the professor's next turn."
  "name": "Mortality Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor creates a life-draining vortex in a 30-foot-radius sphere\
    \ centered on itself. Each creature of the professor's choice that it can see\
    \ within that area must make a DC 15 Constitution saving throw, taking 23 (5d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\
    \ The professor then regains 10 hit points. An affected creature's hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken. This reduction lasts\
    \ until the creature finishes a long rest. The creature dies if its hit point\
    \ maximum is reduced to 0."
  "name": "Essence Pulse (Recharge 5-6)"
"source":
- "SCC"
name: Witherbloom Professor of Decay
image: "[[Witherbloom Professor of Decay.png]]"
---

# Witherbloom Professor of Decay

```statblock
"name": "Witherbloom Professor of Decay"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "11"
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "7"
  "Nature": !!int "6"
  "Arcana": !!int "6"
  "Survival": !!int "7"
"damage_resistances": "necrotic"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1/day each: [antilife shell](/compendium/spells/antilife-shell.md), [bane](/compendium/spells/bane.md),\
    \ [feign death](/compendium/spells/feign-death.md), [speak with dead](/compendium/spells/speak-with-dead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor can cast the [animate dead](/compendium/spells/animate-dead.md)\
    \ spell, using Wisdom as the spellcasting ability."
  "name": "Essence Transfer (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Mortality Spear attacks. It can replace one of\
    \ the attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 17 (3d8 + 4) necrotic damage, and the target can't regain hit\
    \ points until the start of the professor's next turn."
  "name": "Mortality Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor creates a life-draining vortex in a 30-foot-radius sphere\
    \ centered on itself. Each creature of the professor's choice that it can see\
    \ within that area must make a DC 15 Constitution saving throw, taking 23 (5d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\
    \ The professor then regains 10 hit points. An affected creature's hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken. This reduction lasts\
    \ until the creature finishes a long rest. The creature dies if its hit point\
    \ maximum is reduced to 0."
  "name": "Essence Pulse (Recharge 5-6)"
"source":
- "SCC"
"image": "[[Witherbloom Professor of Decay.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 223*

## Description

Professors of decay wield magic that drains and twists the essence of the professors' subjects. The professors use the gathered essence to feed their magic, snuffing the life and decaying the bodies of the living, entreating and commanding the dead and Undead, and twisting curses around their foes. In battle, they steal the essence of their enemies to heal their own wounds and create spears of sickly green life-draining energy.

Witherbloom teachers who espouse the decaying side of the natural cycle instruct their students to exploit the essence of life for their own needs. Professors of decay unravel the mysteries of death and the transition of decay, and they teach that any life's end is an asset waiting to be tapped.

**Witherbloom Scholars.** Witherbloom College studies the magic inherent in the natural cycle of life and death. Witherbloom professors approach the philosophy from different directions, with one methodology focusing on decay and the other dealing with growth.
---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/humanoid/druid
- monster/type/humanoid/gith
aliases: ["Githyanki Xenomancer"]
statblock: true
"name": "Githyanki Xenomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "druid, gith"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"stats":
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Nature": !!int "6"
  "Animal Handling": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Gith plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [druidcraft](/compendium/spells/druidcraft.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\n1/day\
    \ each: [dominate monster](/compendium/spells/dominate-monster.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n2/day each: [invisibility](/compendium/spells/invisibility.md) (self only),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md) (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Staff attacks, three Telekinetic Bolt attacks,\
    \ or a combination thereof."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands, plus 14 (4d6) psychic damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 60 ft., one target. Hit: 20 (3d10\
    \ + 4) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "BAM"
- "LoX"
name: Githyanki Xenomancer
image: "[[Githyanki Xenomancer.png]]"
---

# Githyanki Xenomancer

```statblock
"name": "Githyanki Xenomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "druid, gith"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"stats":
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Nature": !!int "6"
  "Animal Handling": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Gith plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [druidcraft](/compendium/spells/druidcraft.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\n1/day\
    \ each: [dominate monster](/compendium/spells/dominate-monster.md), [forcecage](/compendium/spells/forcecage.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n2/day each: [invisibility](/compendium/spells/invisibility.md) (self only),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md) (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes three Staff attacks, three Telekinetic Bolt attacks,\
    \ or a combination thereof."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands, plus 14 (4d6) psychic damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 60 ft., one target. Hit: 20 (3d10\
    \ + 4) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "BAM"
- "LoX"
"image": "[[Githyanki Xenomancer.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 27, Light of Xaryxis*

## Description

A githyanki xenomancer travels to the farthest reaches of Wildspace and the Astral Sea, even visiting worlds of the Material Plane from time to time, to study and catalog creatures it has never encountered before. Friendly contact with sapient creatures can bring the xenomancer's diplomatic skills to the forefront, while hostile contact becomes a test of the xenomancer's survival skills.

Sometimes a xenomancer's research requires that a specimen be captured and imprisoned (to study its behavior) or killed and dissected (to study or harvest its insides). Many xenomancers prefer to do this work in their laboratories on the Astral Plane.
---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/humanoid
aliases: ["Akroan Hoplite"]
statblock: true
"name": "Akroan Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "5"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hoplite is holding a spear, other creatures provoke an opportunity\
    \ attack from the hoplite when they move within 5 feet of it. When the hoplite\
    \ hits a creature with an opportunity attack using its spear, the creature takes\
    \ an extra 4 (1d8) piercing damage, and the creature's speed becomes 0 for the\
    \ rest of the turn."
  "name": "Hold the Line"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
"source":
- "MOT"
name: Akroan Hoplite
image: "[[Akroan Hoplite.png]]"
---

# Akroan Hoplite

```statblock
"name": "Akroan Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "5"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hoplite is holding a spear, other creatures provoke an opportunity\
    \ attack from the hoplite when they move within 5 feet of it. When the hoplite\
    \ hits a creature with an opportunity attack using its spear, the creature takes\
    \ an extra 4 (1d8) piercing damage, and the creature's speed becomes 0 for the\
    \ rest of the turn."
  "name": "Hold the Line"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
"source":
- "MOT"
"image": "[[Akroan Hoplite.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 228*

## Description

Akroan hoplites, also called stratians, number among the fiercest soldiers on Theros. They train relentlessly and possess unflinching resolve. In the annals of Akros, tales abound of squads of stratians that defended a key location against a much larger force or crept behind enemy lines and wreaked havoc in the opposing army.

Hoplites are highly trained warriors, versed not only in strategy and tactics but in the glorification of the warrior's spirit, the basis of an ethos that forges an unbreakable bond between members of a military unit. In combat, hoplites typically work in groups and use coordinated tactics to win victories.

The three Hoplite Unit Names tables present the sorts of titles used by hoplite contingents hailing from Theros's great poleis. Consider using these names for military forces characters encounter during their adventures or that they were once a part of.

**Akroan Hoplite Unit Names**

| D8 | Name |
|----|------|
| 1 | Spears of Iroas |
| 2 | Iron Fangs |
| 3 | Arrows of Anax |
| 4 | The Unbroken |
| 5 | Anvil of Purphoros |
| 6 | Skewering Squad |
| 7 | Shield of Akros |
| 8 | Cymede's Heart |
^akroan-hoplite-unit-names
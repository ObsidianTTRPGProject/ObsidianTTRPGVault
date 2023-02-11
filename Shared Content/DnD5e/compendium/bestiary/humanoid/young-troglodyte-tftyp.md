---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/small
- monster/type/humanoid/troglodyte
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/coastal
- monster/environment/arctic
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Young Troglodyte"]
statblock: true
"name": "Young Troglodyte"
"size": "Small"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the troglodyte has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte has advantage on an attack roll against a creature if at\
    \ least one of the troglodyte's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "TftYP"
name: Young Troglodyte
image: "[[Young Troglodyte.png]]"
---

# Young Troglodyte

```statblock
"name": "Young Troglodyte"
"size": "Small"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the troglodyte has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely\
    \ on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troglodyte has advantage on an attack roll against a creature if at\
    \ least one of the troglodyte's allies is within 5 feet of the creature and the\
    \ ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "TftYP"
"image": "[[Young Troglodyte.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 176*

## Environment

forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark
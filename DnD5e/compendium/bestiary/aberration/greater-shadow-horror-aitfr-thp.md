---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-thp
- monster/size/huge
- monster/type/aberration
aliases: ["Greater Shadow Horror"]
statblock: true
"name": "Greater Shadow Horror"
"size": "Huge"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "170"
"hit_dice": "20d12 + 40"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "2"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "7"
"damage_vulnerabilities": "radiant"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the horror fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the horror can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the horror can step into a shadow within 5 feet of it\
    \ and magically appear in an unoccupied space within 5 feet of a second shadow\
    \ that is up to 60 feet away. Both shadows must be cast by a Medium or larger\
    \ creature or object."
  "name": "Shadow Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the horror has disadvantage on attack rolls and on Wisdom\
    \ (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (4d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) slashing damage, and the target must succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) of the horror until the\
    \ end of the target's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of the horror, except other horrors, must\
    \ succeed on a DC 16 Dexterity saving throw or take 36 (8d8) necrotic damage."
  "name": "Lashing Shadows (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes a weapon attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror moves up to 20 feet without provoking opportunity attacks."
  "name": "Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror targets one enemy it can see within 30 feet of it. If the target\
    \ can see and hear it, the target must succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) until the end of horror's\
    \ next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "AitFR-THP"
name: Greater Shadow Horror
image: "[[Greater Shadow Horror.png]]"
---

# Greater Shadow Horror

```statblock
"name": "Greater Shadow Horror"
"size": "Huge"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "170"
"hit_dice": "20d12 + 40"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "2"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "7"
"damage_vulnerabilities": "radiant"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the horror fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the horror can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the horror can step into a shadow within 5 feet of it\
    \ and magically appear in an unoccupied space within 5 feet of a second shadow\
    \ that is up to 60 feet away. Both shadows must be cast by a Medium or larger\
    \ creature or object."
  "name": "Shadow Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the horror has disadvantage on attack rolls and on Wisdom\
    \ (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (4d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) slashing damage, and the target must succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) of the horror until the\
    \ end of the target's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of the horror, except other horrors, must\
    \ succeed on a DC 16 Dexterity saving throw or take 36 (8d8) necrotic damage."
  "name": "Lashing Shadows (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes a weapon attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror moves up to 20 feet without provoking opportunity attacks."
  "name": "Glide"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror targets one enemy it can see within 30 feet of it. If the target\
    \ can see and hear it, the target must succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) until the end of horror's\
    \ next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "AitFR-THP"
"image": "[[Greater Shadow Horror.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: The Hidden Page p. 12*

## Description

This shadowy horror was conjured by Tyreus. It is a powerful example of the terrifying evils that stalk the dark corners of Ravnica. This one is an amorphous creature of living shadow with dim reason and preternatural cunning, left here to keep trespassers from plundering the refuge without Tyreus's permission.
---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/medium
- monster/type/fiend/demon
aliases: ["Tlacatecolo"]
statblock: true
"name": "Tlacatecolo"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "cold, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Abyssal, Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo makes two Talon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 3) piercing damage plus 14 (3d8) poison damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo magically transforms into a Medium owl, while retaining\
    \ its game statistics (other than its size). This transformation ends if the tlacatecolo\
    \ is reduced to 0 hit points or if it uses its action to end it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo emits a chilling, disease-ridden wind in a 60-foot line\
    \ that is 10 feet wide. Each creature in that area must succeed on a DC 13 Constitution\
    \ saving throw or take 26 (4d12) cold damage and become [poisoned](/rules/conditions.md#poisoned).\n\
    \nWhile [poisoned](/rules/conditions.md#poisoned) in this way, the creature can't\
    \ regain hit points. At the end of every hour, the creature must succeed on a\
    \ DC 13 Constitution saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion).\
    \ If the creature is in direct sunlight when it makes this saving throw, it automatically\
    \ succeeds on the save.\n\nIf the creature is targeted by magic that ends a poison\
    \ or disease, such as lesser restoration, while the creature isn't in direct sunlight,\
    \ the effect does not end."
  "name": "Plague Winds (Fiend Form Only; Recharge 5-6)"
"source":
- "JttRC"
name: Tlacatecolo
image: "[[Tlacatecolo.png]]"
---

# Tlacatecolo

```statblock
"name": "Tlacatecolo"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "cold, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Abyssal, Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo makes two Talon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 3) piercing damage plus 14 (3d8) poison damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo magically transforms into a Medium owl, while retaining\
    \ its game statistics (other than its size). This transformation ends if the tlacatecolo\
    \ is reduced to 0 hit points or if it uses its action to end it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlacatecolo emits a chilling, disease-ridden wind in a 60-foot line\
    \ that is 10 feet wide. Each creature in that area must succeed on a DC 13 Constitution\
    \ saving throw or take 26 (4d12) cold damage and become [poisoned](/rules/conditions.md#poisoned).\n\
    \nWhile [poisoned](/rules/conditions.md#poisoned) in this way, the creature can't\
    \ regain hit points. At the end of every hour, the creature must succeed on a\
    \ DC 13 Constitution saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion).\
    \ If the creature is in direct sunlight when it makes this saving throw, it automatically\
    \ succeeds on the save.\n\nIf the creature is targeted by magic that ends a poison\
    \ or disease, such as lesser restoration, while the creature isn't in direct sunlight,\
    \ the effect does not end."
  "name": "Plague Winds (Fiend Form Only; Recharge 5-6)"
"source":
- "JttRC"
"image": "[[Tlacatecolo.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 65*

## Description

Appearing as plague-stricken, bipedal owls, tlacatecolo sow sickness and feed on the suffering of mortals. These fiends spread an affliction that leaches heat and life from the living, dispersing it upon winds that rattle like a gasp from a frozen body. Sunlight staves off the disease, but those affected rarely survive the dark of night.
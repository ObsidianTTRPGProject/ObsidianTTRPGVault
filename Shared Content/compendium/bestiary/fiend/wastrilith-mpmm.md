---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fiend/demon
- monster/environment/coastal
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/underwater
aliases: ["Wastrilith"]
statblock: true
"name": "Wastrilith"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "19"
- !!int "18"
- !!int "21"
- !!int "19"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft., swim 80 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "10"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the wastrilith's turns, exposed water within 30\
    \ feet of it is befouled. Underwater, this effect lightly obscures the area until\
    \ a current clears it away. Water in containers remains corrupted until it evaporates.\n\
    \nA creature that consumes this foul water or swims in it must make a DC 18 Constitution\
    \ saving throw. On a successful save, the creature is immune to the foul water\
    \ for 24 hours. On a failed save, the creature takes 14 (4d6) poison damage and\
    \ is [poisoned](/rules/conditions.md#poisoned) for 1 minute. At the end of this\
    \ time, the [poisoned](/rules/conditions.md#poisoned) creature must repeat the\
    \ saving throw. On a failure, the creature takes 18 (4d8) poison damage and is\
    \ [poisoned](/rules/conditions.md#poisoned) until it finishes a long rest.\n\n\
    If another demon drinks the foul water as an action, it gains 11 (2d10) temporary\
    \ hit points."
  "name": "Corrupt Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith makes one Bite attack and two Claw attacks, and it uses\
    \ Grasping Spout."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 30 (4d12\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith magically launches a spout of water at one creature it can\
    \ see within 60 feet of it. The target must make a DC 17 Strength saving throw,\
    \ and it has disadvantage if it's underwater. On a failed save, it takes 22 (4d8\
    \ + 4) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful\
    \ save, it takes half as much damage and isn't pulled."
  "name": "Grasping Spout"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the wastrilith is underwater, it causes all water within 60 feet of\
    \ it to be difficult terrain for other creatures until the start of its next turn."
  "name": "Undertow"
"source":
- "MPMM"
- "MTF"
name: Wastrilith
image: "[[Wastrilith.png]]"
---

# Wastrilith

```statblock
"name": "Wastrilith"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "19"
- !!int "18"
- !!int "21"
- !!int "19"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft., swim 80 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "10"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the wastrilith's turns, exposed water within 30\
    \ feet of it is befouled. Underwater, this effect lightly obscures the area until\
    \ a current clears it away. Water in containers remains corrupted until it evaporates.\n\
    \nA creature that consumes this foul water or swims in it must make a DC 18 Constitution\
    \ saving throw. On a successful save, the creature is immune to the foul water\
    \ for 24 hours. On a failed save, the creature takes 14 (4d6) poison damage and\
    \ is [poisoned](/rules/conditions.md#poisoned) for 1 minute. At the end of this\
    \ time, the [poisoned](/rules/conditions.md#poisoned) creature must repeat the\
    \ saving throw. On a failure, the creature takes 18 (4d8) poison damage and is\
    \ [poisoned](/rules/conditions.md#poisoned) until it finishes a long rest.\n\n\
    If another demon drinks the foul water as an action, it gains 11 (2d10) temporary\
    \ hit points."
  "name": "Corrupt Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith makes one Bite attack and two Claw attacks, and it uses\
    \ Grasping Spout."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 30 (4d12\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 18 (4d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wastrilith magically launches a spout of water at one creature it can\
    \ see within 60 feet of it. The target must make a DC 17 Strength saving throw,\
    \ and it has disadvantage if it's underwater. On a failed save, it takes 22 (4d8\
    \ + 4) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful\
    \ save, it takes half as much damage and isn't pulled."
  "name": "Grasping Spout"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the wastrilith is underwater, it causes all water within 60 feet of\
    \ it to be difficult terrain for other creatures until the start of its next turn."
  "name": "Undertow"
"source":
- "MPMM"
- "MTF"
"image": "[[Wastrilith.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 258, Mordenkainen's Tome of Foes p. 139*

## Description

Found in the waters of the Abyss and other bodies of water contaminated by that plane's fell influence, wastriliths establish themselves as lords of the deep and rule their dominions with cruelty.

A wastrilith pollutes the waters around it. Its noxious presence even affects nearby sources of water when the demon travels on land. The corrupted water, which contains a measure of the demon's essence, responds to the wastrilith's commands—perhaps hardening to prevent foes from escaping or erupting in a surge that drags victims into its reach.

Creatures that ingest water corrupted by a wastrilith risk their very souls. Those who drink the poisonous liquid might wither away until they finally die, or they remain alive only to become thralls of chaos and evil. To represent this defilementchapter 2 of the Dungeon Master's Guide, you can use the Optional Rule: Abyssal Corruption; Abyssal Corruption in "chapter 2 of the Dungeon Master's Guide", causing the poisoned creature to be corrupted.

## Environment

coastal, swamp, underdark, underwater
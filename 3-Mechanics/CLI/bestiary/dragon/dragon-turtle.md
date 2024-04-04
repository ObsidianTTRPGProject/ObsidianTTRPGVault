---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Dragon Turtle"]
---
# [Dragon Turtle](3-Mechanics\CLI\bestiary\dragon/dragon-turtle.md)
*Source: Monster Manual p. 119. Available in the SRD.*  

```statblock
"name": "Dragon Turtle"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Draconic"
"cr": "17"
"traits":
- "desc": "The dragon turtle can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The dragon turtle makes three attacks: one with its bite and two with its\
    \ claws. It can make one tail attack in place of its two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 15 ft., one\
    \ target. Hit: dice:3d12 + 7|text(26) (3d12 + 7) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d8 + 7|text(16) (2d8 + 7) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+13 (+13) to hit, reach 15 ft., one\
    \ target. Hit: dice:3d12 + 7|text(26) (3d12 + 7) bludgeoning damage. If\
    \ the target is a creature, it must succeed on a DC 20 Strength saving throw or\
    \ be pushed up to 10 feet away from the dragon turtle and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
- "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking dice:15d6|text(52)\
    \ (15d6) fire damage on a failed save, or half as much damage on a successful\
    \ one. Being underwater doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "ToA"
- "GoS"
- "EGW"
- "MOT"
- "CM"
- "JttRC"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/dragon-turtle.webp"
```
^statblock

## Environment

underwater, coastal
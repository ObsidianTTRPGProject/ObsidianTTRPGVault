---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Bronzefume"]
statblock: true
"name": "Bronzefume"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "220"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes three attacks: one with its bite and two with its\
    \ claws. It can make one tail attack in place of its two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire\
    \ damage on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "PotA"
name: Bronzefume
image: "[[Bronzefume.png]]"
---

# Bronzefume

```statblock
"name": "Bronzefume"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "220"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes three attacks: one with its bite and two with its\
    \ claws. It can make one tail attack in place of its two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire\
    \ damage on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "PotA"
"image": "[[Bronzefume.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 92*

## Environment

underwater, coastal
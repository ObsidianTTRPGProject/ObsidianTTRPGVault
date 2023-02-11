---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Dragon Tortoise"]
statblock: true
"name": "Dragon Tortoise"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Draconic, Terran"
"cr": "17"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon tortoise makes three attacks: one with its bite and two with\
    \ its claws. It can make one tail attack in place of its two claw attacks."
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
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon tortoise\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon tortoise exhales abrasive sand in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) slashing\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "CM"
name: Dragon Tortoise
image: "[[Dragon Tortoise.png]]"
---

# Dragon Tortoise

```statblock
"name": "Dragon Tortoise"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Draconic, Terran"
"cr": "17"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon tortoise makes three attacks: one with its bite and two with\
    \ its claws. It can make one tail attack in place of its two claw attacks."
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
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon tortoise\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon tortoise exhales abrasive sand in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) slashing\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "CM"
"image": "[[Dragon Tortoise.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 205*

## Description

Ogruhl has been trapped here for millennia, restrained by magic chains. Ogruhl was the prisoner of a cruel Netherese wizard. When the city around the tortoise was abandoned, Ogruhl was left to die. A band of chwingas found the tortoise and brought it food and water little by little to keep it alive. Over time, the chwingas and Ogruhl developed a symbiotic relationship—it defended them and provided a home for them, and they helped it to survive.
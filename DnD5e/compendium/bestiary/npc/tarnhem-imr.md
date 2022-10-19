---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Tarnhem"]
statblock: true
"name": "Tarnhem"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "262"
"hit_dice": "21d12 + 126"
"stats":
- !!int "26"
- !!int "15"
- !!int "22"
- !!int "20"
- !!int "16"
- !!int "22"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "12"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tarnhem dies, it explodes, and each creature within 30 feet of it\
    \ must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a\
    \ failed save, or half as much damage on a successful one. The explosion ignites\
    \ flammable objects in that area that aren't being worn or carried, and it destroys\
    \ Tarnhem's weapons."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of Tarnhem's turns, each creature within 5 feet of\
    \ it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't\
    \ being worn or carried ignite. A creature that touches Tarnhem or hits it with\
    \ a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Fire Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 13 (2d4\
    \ + 8) bludgeoning damage plus 7 (2d6) fire damage."
  "name": "Fist of Retribution"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem makes two attacks: one with its longsword and one with its whip."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) slashing damage plus 13 (3d8) lightning damage. If Tarnhem scores a critical\
    \ hit, it rolls damage dice three times, instead of twice."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed\
    \ on a DC 20 Strength saving throw or be pulled up to 25 feet toward Tarnhem."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "IMR"
name: Tarnhem
image: "[[Tarnhem.png]]"
---

# Tarnhem

```statblock
"name": "Tarnhem"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "262"
"hit_dice": "21d12 + 126"
"stats":
- !!int "26"
- !!int "15"
- !!int "22"
- !!int "20"
- !!int "16"
- !!int "22"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "12"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tarnhem dies, it explodes, and each creature within 30 feet of it\
    \ must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a\
    \ failed save, or half as much damage on a successful one. The explosion ignites\
    \ flammable objects in that area that aren't being worn or carried, and it destroys\
    \ Tarnhem's weapons."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of Tarnhem's turns, each creature within 5 feet of\
    \ it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't\
    \ being worn or carried ignite. A creature that touches Tarnhem or hits it with\
    \ a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
  "name": "Fire Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 13 (2d4\
    \ + 8) bludgeoning damage plus 7 (2d6) fire damage."
  "name": "Fist of Retribution"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem makes two attacks: one with its longsword and one with its whip."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) slashing damage plus 13 (3d8) lightning damage. If Tarnhem scores a critical\
    \ hit, it rolls damage dice three times, instead of twice."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed\
    \ on a DC 20 Strength saving throw or be pulled up to 25 feet toward Tarnhem."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tarnhem magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "IMR"
"image": "[[Tarnhem.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 19*
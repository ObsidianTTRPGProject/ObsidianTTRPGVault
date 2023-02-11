---
cssclass: json5e-monster
tags:
- compendium/src/lmop
- monster/size/large
- monster/type/dragon
- monster/environment/forest
aliases: ["Venomfang"]
statblock: true
"name": "Venomfang"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Perception": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang exhales poisonous gas in a 30-foot cone. Each creature in that\
    \ area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "LMoP"
name: Venomfang
image: "[[Venomfang.png]]"
---

# Venomfang

```statblock
"name": "Venomfang"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Perception": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 17"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Venomfang exhales poisonous gas in a 30-foot cone. Each creature in that\
    \ area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"source":
- "LMoP"
"image": "[[Venomfang.png]]"
```
^statblock

*Source: Lost Mine of Phandelver p. 63*

## Environment

forest
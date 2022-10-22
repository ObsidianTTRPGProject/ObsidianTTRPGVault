---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/dragon
- monster/environment/mountain
- monster/environment/hill
aliases: ["Zendikar Dragon"]
statblock: true
"name": "Zendikar Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "8"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "10"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales fire in a 30-foot cone. Each creature in that area must\
    \ make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "PSZ"
name: Zendikar Dragon
image: "[[Zendikar Dragon.png]]"
---

# Zendikar Dragon

```statblock
"name": "Zendikar Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "8"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
"damage_immunities": "fire"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "10"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales fire in a 30-foot cone. Each creature in that area must\
    \ make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "PSZ"
"image": "[[Zendikar Dragon.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 29*

## Environment

mountain, hill
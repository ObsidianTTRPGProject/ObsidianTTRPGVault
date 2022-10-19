---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/large
- monster/type/dragon
- monster/environment/mountain
- monster/environment/hill
aliases: ["Young Amonkhet Dragon"]
statblock: true
"name": "Young Amonkhet Dragon"
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
- !!int "6"
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
- "PSA"
name: Young Amonkhet Dragon
image: "[[Young Amonkhet Dragon.png]]"
---

# Young Amonkhet Dragon

```statblock
"name": "Young Amonkhet Dragon"
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
- !!int "6"
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
- "PSA"
"image": "[[Young Amonkhet Dragon.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 33*

## Description

**Dragons.** Dragons are fierce monsters with heavy reptilian bodies, crocodilian heads, and leathery wings, and are dis-tinguished by their ability to breathe fire. Though Nicol Bolas is also a dragon, he feels no kinship for these savage, dim-witted beasts. They live mostly in the remote reaches of the desert, soaring in lazy circles through the sky as they search for prey. Sometimes they are captured and brought inside the Hekma, where they are put to use within the trials of the five gods—especially in the climactic battles of the final Trial of Zeal.

## Environment

mountain, hill
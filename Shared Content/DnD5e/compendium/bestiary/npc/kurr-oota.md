---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/fiend/gnoll
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/desert
aliases: ["Kurr"]
statblock: true
"name": "Kurr"
"size": "Medium"
"type": "fiend"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "17"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Gnoll"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Kurr reduces a creature to 0 hit points with a melee attack on its\
    \ turn, Kurr can take a bonus action to move up to half its speed and make a bite\
    \ attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kurr makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or take 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "OotA"
name: Kurr
image: "[[Kurr.png]]"
---

# Kurr

```statblock
"name": "Kurr"
"size": "Medium"
"type": "fiend"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "17"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Gnoll"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Kurr reduces a creature to 0 hit points with a melee attack on its\
    \ turn, Kurr can take a bonus action to move up to half its speed and make a bite\
    \ attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kurr makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or take 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "OotA"
"image": "[[Kurr.png]]"
```
^statblock

*Source: Out of the Abyss p. 179*

## Environment

grassland, forest, hill, desert
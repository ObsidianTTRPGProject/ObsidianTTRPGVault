---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/gnoll
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/desert
aliases: ["Gash"]
statblock: true
"name": "Gash"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 25 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gash reduces a creature to 0 hit points with a melee attack on its\
    \ turn, Gash can take a bonus action to move up to half its speed and make a bite\
    \ attack."
  "name": "Rampage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gash has disadvantage on Wisdom checks and Wisdom saving throws because\
    \ of the physical and mental abuse he has suffered. A [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell rids him of these effects."
  "name": "Wretched"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "OotA"
name: Gash
image: "[[Gash.png]]"
---

# Gash

```statblock
"name": "Gash"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "11"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 25 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gash reduces a creature to 0 hit points with a melee attack on its\
    \ turn, Gash can take a bonus action to move up to half its speed and make a bite\
    \ attack."
  "name": "Rampage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gash has disadvantage on Wisdom checks and Wisdom saving throws because\
    \ of the physical and mental abuse he has suffered. A [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell rids him of these effects."
  "name": "Wretched"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "OotA"
"image": "[[Gash.png]]"
```
^statblock

*Source: Out of the Abyss p. 181*

## Environment

grassland, forest, hill, desert
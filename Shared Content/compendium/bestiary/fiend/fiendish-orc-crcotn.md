---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/fiend/orc
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/arctic
aliases: ["Fiendish Orc"]
statblock: true
"name": "Fiendish Orc"
"size": "Medium"
"type": "fiend"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "7"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"damage_immunities": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Common, Orc"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "CRCotN"
name: Fiendish Orc
image: "[[Fiendish Orc.png]]"
---

# Fiendish Orc

```statblock
"name": "Fiendish Orc"
"size": "Medium"
"type": "fiend"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "7"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"damage_immunities": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Common, Orc"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "CRCotN"
"image": "[[Fiendish Orc.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 71*

## Environment

underdark, mountain, grassland, forest, swamp, hill, arctic
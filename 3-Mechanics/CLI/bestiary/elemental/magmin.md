---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Magmin"]
---
# [Magmin](3-Mechanics\CLI\bestiary\elemental/magmin.md)
*Source: Monster Manual p. 212. Available in the SRD.*  

```statblock
"name": "Magmin"
"size": "Small"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan"
"cr": "1/2"
"traits":
- "desc": "When the magmin dies, it explodes in a burst of fire and magma. Each creature\
    \ within 10 feet of it must make a DC 11 Dexterity saving throw, taking dice:2d6|text(7)\
    \ (2d6) fire damage on a failed save, or half as much damage on a successful\
    \ one. Flammable objects that aren't being worn or carried in that area are ignited."
  "name": "Death Burst"
- "desc": "As a bonus action, the magmin can set itself ablaze or extinguish its flames.\
    \ While ablaze, the magmin sheds bright light in a 10-foot radius and dim light\
    \ for an additional 10 feet."
  "name": "Ignited Illumination"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6|text(7) (2d6) fire damage. If the target is a creature or\
    \ a flammable object, it ignites. Until a creature takes an action to douse the\
    \ fire, the target takes dice:1d6|text(3) (1d6) fire damage at the end of\
    \ each of its turns."
  "name": "Touch"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "BGDIA"
- "WBtW"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/magmin.webp"
```
^statblock
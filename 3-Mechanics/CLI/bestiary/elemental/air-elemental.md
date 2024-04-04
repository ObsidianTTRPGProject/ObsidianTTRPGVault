---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Air Elemental"]
---
# [Air Elemental](3-Mechanics\CLI\bestiary\elemental/air-elemental.md)
*Source: Monster Manual p. 124. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Air Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "fly 90 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran"
"cr": "5"
"traits":
- "desc": "The elemental can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
"actions":
- "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 5|text(14) (2d8 + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "Each creature in the elemental's space must make a DC 13 Strength saving\
    \ throw. On a failure, a target takes dice:3d8 + 2|text(15) (3d8 + 2) bludgeoning\
    \ damage and is flung up 20 feet away from the elemental in a random direction\
    \ and knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). If a thrown\
    \ target strikes an object, such as a wall or floor, the target takes dice:1d6|text(3)\
    \ (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is\
    \ thrown at another creature, that creature must succeed on a DC 13 Dexterity\
    \ saving throw or take the same damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\n\
    \nIf the saving throw is successful, the target takes half the bludgeoning damage\
    \ and isn't flung away or knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Whirlwind (Recharge 4-6)"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "ERLW"
- "IMR"
- "MOT"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
- "DSotDQ"
- "KftGV"
- "GotSF"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/air-elemental.webp"
```
^statblock

## Environment

mountain, desert
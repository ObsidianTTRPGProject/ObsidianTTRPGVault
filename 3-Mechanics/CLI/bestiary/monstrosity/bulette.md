---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Bulette"]
---
# [Bulette](3-Mechanics\CLI\bestiary\monstrosity/bulette.md)
*Source: Monster Manual p. 34. Available in the SRD.*  

```statblock
"name": "Bulette"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "94"
"hit_dice": "9d10 + 45"
"stats":
- !!int "19"
- !!int "11"
- !!int "21"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft., burrow 40 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- "desc": "The bulette's long jump is up to 30 feet and its high jump is up to 15\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:4d12 + 4|text(30) (4d12 + 4) piercing damage."
  "name": "Bite"
- "desc": "If the bulette jumps at least 15 feet as part of its movement, it can then\
    \ use this action to land on its feet in a space that contains one or more other\
    \ creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity\
    \ saving throw (target's choice) or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ and take dice:3d6 + 4|text(14) (3d6 + 4) bludgeoning damage plus dice:3d6\
    \ + 4|text(14) (3d6 + 4) slashing damage. On a successful save, the creature\
    \ takes only half the damage, isn't knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
    \ and is pushed 5 feet out of the bulette's space into an unoccupied space of\
    \ the creature's choice. If no unoccupied space is within range, the creature\
    \ instead falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in the bulette's\
    \ space."
  "name": "Deadly Leap"
"source":
- "MM"
- "PotA"
- "SKT"
- "IDRotF"
- "JttRC"
- "LoX"
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/bulette.webp"
```
^statblock

## Environment

mountain, grassland, hill
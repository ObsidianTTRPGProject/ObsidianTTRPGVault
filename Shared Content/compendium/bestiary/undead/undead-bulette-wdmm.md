---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/undead
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Undead Bulette"]
statblock: true
"name": "Undead Bulette"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "125"
"hit_dice": "9d10 + 45"
"stats":
- !!int "19"
- !!int "11"
- !!int "21"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft., burrow 40 ft."
"skillsaves":
  "Perception": !!int "6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bulette's long jump is up to 30 feet and its high jump is up to 15\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the bulette jumps at least 15 feet as part of its movement, it can then\
    \ use this action to land on its feet in a space that contains one or more other\
    \ creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity\
    \ saving throw (target's choice) or be knocked [prone](/rules/conditions.md#prone)\
    \ and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage.\
    \ On a successful save, the creature takes only half the damage, isn't knocked\
    \ [prone](/rules/conditions.md#prone), and is pushed 5 feet out of the bulette's\
    \ space into an unoccupied space of the creature's choice. If no unoccupied space\
    \ is within range, the creature instead falls [prone](/rules/conditions.md#prone)\
    \ in the bulette's space."
  "name": "Deadly Leap"
"source":
- "WDMM"
name: Undead Bulette
image: "[[Undead Bulette.png]]"
---

# Undead Bulette

```statblock
"name": "Undead Bulette"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "125"
"hit_dice": "9d10 + 45"
"stats":
- !!int "19"
- !!int "11"
- !!int "21"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft., burrow 40 ft."
"skillsaves":
  "Perception": !!int "6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bulette's long jump is up to 30 feet and its high jump is up to 15\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the bulette jumps at least 15 feet as part of its movement, it can then\
    \ use this action to land on its feet in a space that contains one or more other\
    \ creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity\
    \ saving throw (target's choice) or be knocked [prone](/rules/conditions.md#prone)\
    \ and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage.\
    \ On a successful save, the creature takes only half the damage, isn't knocked\
    \ [prone](/rules/conditions.md#prone), and is pushed 5 feet out of the bulette's\
    \ space into an unoccupied space of the creature's choice. If no unoccupied space\
    \ is within range, the creature instead falls [prone](/rules/conditions.md#prone)\
    \ in the bulette's space."
  "name": "Deadly Leap"
"source":
- "WDMM"
"image": "[[Undead Bulette.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 90*

## Environment

mountain, grassland, hill
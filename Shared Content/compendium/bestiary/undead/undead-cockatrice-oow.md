---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/small
- monster/type/undead
- monster/environment/grassland
aliases: ["Undead Cockatrice"]
statblock: true
"name": "Undead Cockatrice"
"size": "Small"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "6"
- !!int "12"
- !!int "12"
- !!int "2"
- !!int "13"
- !!int "5"
"speed": "walk 20 ft., fly 40 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw against being magically [petrified](/rules/conditions.md#petrified). On\
    \ a failed save, the creature begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ for 24 hours."
  "name": "Bite"
"source":
- "OoW"
name: Undead Cockatrice
image: "[[Undead Cockatrice.png]]"
---

# Undead Cockatrice

```statblock
"name": "Undead Cockatrice"
"size": "Small"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "6"
- !!int "12"
- !!int "12"
- !!int "2"
- !!int "13"
- !!int "5"
"speed": "walk 20 ft., fly 40 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw against being magically [petrified](/rules/conditions.md#petrified). On\
    \ a failed save, the creature begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ for 24 hours."
  "name": "Bite"
"source":
- "OoW"
"image": "[[Undead Cockatrice.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 114*

## Environment

grassland
---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/sahuagin
aliases: ["Sahuagin Wave Shaper"]
statblock: true
"name": "Sahuagin Wave Shaper"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Intelligence": !!int "6"
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "5"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper's spellcasting ability is Intelligence (spell save DC 14,\
    \ +6 to hit with spell attacks). It can cast the following spells, requiring only\
    \ verbal components:\n\nAt will: [message](/compendium/spells/message.md)\n\
    \n1/day: [comprehend languages](/compendium/spells/comprehend-languages.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper can breathe air and water, but it needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper can magically command any shark within 120 feet of it,\
    \ using a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8\
    \ + 1) piercing damage plus 13 (3d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8\
    \ + 1) slashing damage plus 13 (3d8) cold damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper targets a body of water at least 50 feet square and 25\
    \ feet deep, causing a whirlpool to form in the center of the area. The whirlpool\
    \ forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top,\
    \ 25 feet tall, and lasts for 1 minute or until the wave shaper is [incapacitated](/rules/conditions.md#incapacitated).\
    \ Any creature or object in the water and within 25 feet of the vortex is pulled\
    \ 10 feet toward it. A creature can swim away from the vortex by succeeding on\
    \ a DC 14 Strength (Athletics) check.\n\nWhen a creature enters the vortex for\
    \ the first time on a turn or starts its turn there, it must make a DC 14 Strength\
    \ saving throw. On a failed save, the creature takes 9 (2d8) bludgeoning damage\
    \ and is caught in the vortex until it ends. On a success, the creature takes\
    \ half damage and isn't caught in the vortex. A creature caught in the vortex\
    \ can use its action to try to swim away from the vortex as described above, but\
    \ it has disadvantage on the Strength (Athletics) check to do so.\n\nThe first\
    \ time each turn that an object enters the vortex, the object takes 9 (2d8) bludgeoning\
    \ damage. This damage occurs each round it remains in the vortex."
  "name": "Whirlpool (1/Day)"
"source":
- "GoS"
name: Sahuagin Wave Shaper
image: "[[Sahuagin Wave Shaper.png]]"
---

# Sahuagin Wave Shaper

```statblock
"name": "Sahuagin Wave Shaper"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Intelligence": !!int "6"
"skillsaves":
  "Intimidation": !!int "4"
  "Perception": !!int "5"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper's spellcasting ability is Intelligence (spell save DC 14,\
    \ +6 to hit with spell attacks). It can cast the following spells, requiring only\
    \ verbal components:\n\nAt will: [message](/compendium/spells/message.md)\n\
    \n1/day: [comprehend languages](/compendium/spells/comprehend-languages.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper can breathe air and water, but it needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper can magically command any shark within 120 feet of it,\
    \ using a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8\
    \ + 1) piercing damage plus 13 (3d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8\
    \ + 1) slashing damage plus 13 (3d8) cold damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wave shaper targets a body of water at least 50 feet square and 25\
    \ feet deep, causing a whirlpool to form in the center of the area. The whirlpool\
    \ forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top,\
    \ 25 feet tall, and lasts for 1 minute or until the wave shaper is [incapacitated](/rules/conditions.md#incapacitated).\
    \ Any creature or object in the water and within 25 feet of the vortex is pulled\
    \ 10 feet toward it. A creature can swim away from the vortex by succeeding on\
    \ a DC 14 Strength (Athletics) check.\n\nWhen a creature enters the vortex for\
    \ the first time on a turn or starts its turn there, it must make a DC 14 Strength\
    \ saving throw. On a failed save, the creature takes 9 (2d8) bludgeoning damage\
    \ and is caught in the vortex until it ends. On a success, the creature takes\
    \ half damage and isn't caught in the vortex. A creature caught in the vortex\
    \ can use its action to try to swim away from the vortex as described above, but\
    \ it has disadvantage on the Strength (Athletics) check to do so.\n\nThe first\
    \ time each turn that an object enters the vortex, the object takes 9 (2d8) bludgeoning\
    \ damage. This damage occurs each round it remains in the vortex."
  "name": "Whirlpool (1/Day)"
"source":
- "GoS"
"image": "[[Sahuagin Wave Shaper.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 251*

## Description

These hunched and twisted sahuagin sacrifice their bodies to the mutating magic of Sekolah. Wave shapers add elemental magic to sahuagin armed forces (as seen in The Final Enemy) and delight in creating destructive whirlpools.
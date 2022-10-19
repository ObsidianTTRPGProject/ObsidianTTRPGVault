---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/dragon
aliases: ["Ambush Drake"]
statblock: true
"name": "Ambush Drake"
"size": "Medium"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Draconic but can't speak it"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake has advantage on an attack roll against a creature if at least\
    \ one of the drake's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the drake surprises a creature and hits it with an attack during the\
    \ first round of combat, the target takes an extra 7 (2d6) damage from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Bite"
"source":
- "HotDQ"
- "ToD"
name: Ambush Drake
image: "[[Ambush Drake.png]]"
---

# Ambush Drake

```statblock
"name": "Ambush Drake"
"size": "Medium"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Draconic but can't speak it"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drake has advantage on an attack roll against a creature if at least\
    \ one of the drake's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the drake surprises a creature and hits it with an attack during the\
    \ first round of combat, the target takes an extra 7 (2d6) damage from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Bite"
"source":
- "HotDQ"
- "ToD"
"image": "[[Ambush Drake.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 88, Tyranny of Dragons p. 180*
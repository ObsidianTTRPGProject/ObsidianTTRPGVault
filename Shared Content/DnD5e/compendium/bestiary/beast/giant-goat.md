---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Giant Goat"]
statblock: true
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "SKT"
- "SLW"
- "IDRotF"
- "CoS"
- "WBtW"
name: Giant Goat
image: "[[Giant Goat.png]]"
---

# Giant Goat

```statblock
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "SKT"
- "SLW"
- "IDRotF"
- "CoS"
- "WBtW"
"image": "[[Giant Goat.png]]"
```
^statblock

*Source: Monster Manual p. 326, Storm King's Thunder, Storm Lord's Wrath, Icewind Dale: Rime of the Frostmaiden, Curse of Strahd, The Wild Beyond the Witchlight*

## Environment

mountain, grassland, hill
---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/large
- monster/type/beast
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Sangzor"]
statblock: true
"name": "Sangzor"
"size": "Large"
"type": "beast"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "33"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Sangzor moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sangzor has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "CoS"
name: Sangzor
image: "[[Sangzor.png]]"
---

# Sangzor

```statblock
"name": "Sangzor"
"size": "Large"
"type": "beast"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "33"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Sangzor moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sangzor has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "CoS"
"image": "[[Sangzor.png]]"
```
^statblock

*Source: Curse of Strahd p. 160*

## Environment

mountain, grassland, hill
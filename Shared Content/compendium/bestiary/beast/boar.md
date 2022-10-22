---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/beast
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Boar"]
statblock: true
"name": "Boar"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing\
    \ damage. If the target is a creature, it must succeed on a DC 11 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the boar takes 7 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDMM"
- "DIP"
- "MOT"
- "CM"
- "WBtW"
name: Boar
image: "[[Boar.png]]"
---

# Boar

```statblock
"name": "Boar"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing\
    \ damage. If the target is a creature, it must succeed on a DC 11 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the boar takes 7 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDMM"
- "DIP"
- "MOT"
- "CM"
- "WBtW"
"image": "[[Boar.png]]"
```
^statblock

*Source: Monster Manual p. 319, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Mythic Odysseys of Theros, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Environment

grassland, forest, hill
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/beast
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Elk"]
statblock: true
"name": "Elk"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "2"
- !!int "10"
- !!int "6"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
    \ If the target is a creature, it must succeed on a DC 13 Strength saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Ram"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 8 (2d4 + 3) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "EGW"
- "IDRotF"
name: Elk
image: "[[Elk.png]]"
---

# Elk

```statblock
"name": "Elk"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "2"
- !!int "10"
- !!int "6"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
    \ If the target is a creature, it must succeed on a DC 13 Strength saving throw\
    \ or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Ram"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 8 (2d4 + 3) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "EGW"
- "IDRotF"
"image": "[[Elk.png]]"
```
^statblock

*Source: Monster Manual p. 322, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*

## Environment

grassland, forest, hill
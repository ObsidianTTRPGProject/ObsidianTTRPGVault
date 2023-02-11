---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/beast
- monster/environment/grassland
aliases: ["Hippopotamus"]
statblock: true
"name": "Hippopotamus"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft., swim 30 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hippopotamus moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 12 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the hippopotamus can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hippopotamus can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSA"
name: Hippopotamus
image: "[[Hippopotamus.png]]"
---

# Hippopotamus

```statblock
"name": "Hippopotamus"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft., swim 30 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hippopotamus moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 12 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the hippopotamus can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hippopotamus can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSA"
"image": "[[Hippopotamus.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 38*

## Environment

grassland
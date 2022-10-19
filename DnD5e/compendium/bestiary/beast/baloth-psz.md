---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/beast
- monster/environment/grassland
aliases: ["Baloth"]
statblock: true
"name": "Baloth"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the baloth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the baloth can make one\
    \ stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage"
  "name": "Stomp"
"source":
- "PSZ"
name: Baloth
image: "[[Baloth.png]]"
---

# Baloth

```statblock
"name": "Baloth"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the baloth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the baloth can make one\
    \ stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage"
  "name": "Stomp"
"source":
- "PSZ"
"image": "[[Baloth.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 33*

## Environment

grassland
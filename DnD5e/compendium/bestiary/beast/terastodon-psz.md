---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/beast
- monster/environment/arctic
aliases: ["Terastodon"]
statblock: true
"name": "Terastodon"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the terastodon moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the terastodon can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 29 (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSZ"
name: Terastodon
image: "[[Terastodon.png]]"
---

# Terastodon

```statblock
"name": "Terastodon"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the terastodon moves at least 20 feet straight toward a creature and\
    \ then hits it with a gore attack on the same turn, that target must succeed on\
    \ a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the terastodon can make\
    \ one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 29 (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSZ"
"image": "[[Terastodon.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 34*

## Environment

arctic
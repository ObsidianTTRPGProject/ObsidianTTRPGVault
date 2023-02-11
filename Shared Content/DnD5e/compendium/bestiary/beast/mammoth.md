---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/beast
- monster/environment/arctic
aliases: ["Mammoth"]
statblock: true
"name": "Mammoth"
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
  "desc": "If the mammoth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the mammoth can make one\
    \ stomp attack against it as a bonus action."
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
- "MM"
- "EGW"
- "IDRotF"
- "CRCotN"
name: Mammoth
image: "[[Mammoth.png]]"
---

# Mammoth

```statblock
"name": "Mammoth"
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
  "desc": "If the mammoth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the mammoth can make one\
    \ stomp attack against it as a bonus action."
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
- "MM"
- "EGW"
- "IDRotF"
- "CRCotN"
"image": "[[Mammoth.png]]"
```
^statblock

*Source: Monster Manual p. 332, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*

## Description

A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.

## Environment

arctic
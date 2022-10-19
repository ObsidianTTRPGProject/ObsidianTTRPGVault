---
cssclass: json5e-monster
tags:
- compendium/src/psd
- monster/size/large
- monster/type/beast
aliases: ["Steel Leaf Kavu"]
statblock: true
"name": "Steel Leaf Kavu"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "6"
- !!int "14"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Elvish"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the kavu moves at least 20 feet straight toward a creature and then\
    \ hits it with a bite attack on the same turn, that target must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the kavu can make one\
    \ rend attack against it as a bonus action."
  "name": "Raking Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 23 (4d8 + 5) slashing damage."
  "name": "Rend"
"source":
- "PSD"
name: Steel Leaf Kavu
image: "[[Steel Leaf Kavu.png]]"
---

# Steel Leaf Kavu

```statblock
"name": "Steel Leaf Kavu"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "6"
- !!int "14"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Elvish"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the kavu moves at least 20 feet straight toward a creature and then\
    \ hits it with a bite attack on the same turn, that target must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the kavu can make one\
    \ rend attack against it as a bonus action."
  "name": "Raking Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 23 (4d8 + 5) slashing damage."
  "name": "Rend"
"source":
- "PSD"
"image": "[[Steel Leaf Kavu.png]]"
```
^statblock

*Source: Plane Shift: Dominaria p. 24*
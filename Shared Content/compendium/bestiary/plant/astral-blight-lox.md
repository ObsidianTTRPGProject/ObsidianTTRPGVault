---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/medium
- monster/type/plant
aliases: ["Astral Blight"]
statblock: true
"name": "Astral Blight"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft."
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it has at least 1 hit point, the astral blight sheds dim light in\
    \ a 10-foot radius."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight makes two Heat-Draining Vine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) radiant damage, and if the target is a Large or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 13). Until this grapple\
    \ ends, the target takes 3 (1d6) cold damage at the start of each of its turns.\
    \ The blight has two vines, each of which can grapple one creature."
  "name": "Heat-Draining Vine"
"source":
- "LoX"
name: Astral Blight
image: "[[Astral Blight.png]]"
---

# Astral Blight

```statblock
"name": "Astral Blight"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft."
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it has at least 1 hit point, the astral blight sheds dim light in\
    \ a 10-foot radius."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight makes two Heat-Draining Vine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) radiant damage, and if the target is a Large or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 13). Until this grapple\
    \ ends, the target takes 3 (1d6) cold damage at the start of each of its turns.\
    \ The blight has two vines, each of which can grapple one creature."
  "name": "Heat-Draining Vine"
"source":
- "LoX"
"image": "[[Astral Blight.png]]"
```
^statblock

*Source: Light of Xaryxis p. 10*
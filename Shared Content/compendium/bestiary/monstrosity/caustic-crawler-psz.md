---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/monstrosity
- monster/environment/grassland
- monster/environment/forest
aliases: ["Caustic Crawler"]
statblock: true
"name": "Caustic Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft., burrow 10 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller\
    \ creature, it is [grappled](/rules/conditions.md#grappled) (escape DC 13). Until\
    \ this grapple ends, the crawler can bite only the [grappled](/rules/conditions.md#grappled)\
    \ creature and has advantage on attack rolls to do so."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler spits acid in a line that is 30 feet long and 5 feet wide,\
    \ provided that it has no creature [grappled](/rules/conditions.md#grappled).\
    \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
    \ 10 (3d6) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "PSZ"
name: Caustic Crawler
image: "[[Caustic Crawler.png]]"
---

# Caustic Crawler

```statblock
"name": "Caustic Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft., burrow 10 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller\
    \ creature, it is [grappled](/rules/conditions.md#grappled) (escape DC 13). Until\
    \ this grapple ends, the crawler can bite only the [grappled](/rules/conditions.md#grappled)\
    \ creature and has advantage on attack rolls to do so."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler spits acid in a line that is 30 feet long and 5 feet wide,\
    \ provided that it has no creature [grappled](/rules/conditions.md#grappled).\
    \ Each creature in that line must make a DC 13 Dexterity saving throw, taking\
    \ 10 (3d6) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Spray (Recharge 6)"
"source":
- "PSZ"
"image": "[[Caustic Crawler.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 27*

## Environment

grassland, forest
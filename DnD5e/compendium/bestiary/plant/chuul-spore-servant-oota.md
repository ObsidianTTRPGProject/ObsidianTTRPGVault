---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/large
- monster/type/plant
aliases: ["Chuul Spore Servant"]
statblock: true
"name": "Chuul Spore Servant"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 30 ft., swim 30 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spore servant makes two pincer attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (Escape DC 14) if it is a Large or smaller creature and the spore servant doesn't\
    \ have two other creatures [grappled](/rules/conditions.md#grappled)."
  "name": "Pincer"
"source":
- "OotA"
name: Chuul Spore Servant
image: "[[Chuul Spore Servant.png]]"
---

# Chuul Spore Servant

```statblock
"name": "Chuul Spore Servant"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 30 ft., swim 30 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spore servant makes two pincer attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (Escape DC 14) if it is a Large or smaller creature and the spore servant doesn't\
    \ have two other creatures [grappled](/rules/conditions.md#grappled)."
  "name": "Pincer"
"source":
- "OotA"
"image": "[[Chuul Spore Servant.png]]"
```
^statblock

*Source: Out of the Abyss p. 228*
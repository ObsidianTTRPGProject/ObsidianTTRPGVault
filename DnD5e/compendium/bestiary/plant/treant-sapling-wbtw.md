---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/large
- monster/type/plant
aliases: ["Treant Sapling"]
statblock: true
"name": "Treant Sapling"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "17"
- !!int "8"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 11"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the treant is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the treant move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the treant is animate."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 14\
    \ (2d10 + 3) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as an awakened tree (see the Monster\
    \ Manual), except they can't speak. An animated tree acts as an ally of the treant.\
    \ The tree remains animate for 1 day or until it dies, until the treant dies or\
    \ is more than 120 feet from the tree, or until the treant takes a bonus action\
    \ to turn it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "WBtW"
name: Treant Sapling
image: "[[Treant Sapling.png]]"
---

# Treant Sapling

```statblock
"name": "Treant Sapling"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "17"
- !!int "8"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 11"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the treant is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the treant move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the treant is animate."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 14\
    \ (2d10 + 3) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as an awakened tree (see the Monster\
    \ Manual), except they can't speak. An animated tree acts as an ally of the treant.\
    \ The tree remains animate for 1 day or until it dies, until the treant dies or\
    \ is more than 120 feet from the tree, or until the treant takes a bonus action\
    \ to turn it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "WBtW"
"image": "[[Treant Sapling.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 36*
---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/huge
- monster/type/undead
- monster/environment/forest
aliases: ["Undead Tree"]
statblock: true
"name": "Undead Tree"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "necrotic"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a tree, except they have Intelligence\
    \ and Charisma scores of 1, they can't speak, and they have only the Slam action\
    \ option. An animated tree acts as an ally of the tree. The tree remains animate\
    \ for 1 day or until it dies; until the tree dies or is more than 120 feet from\
    \ the tree; or until the tree takes a bonus action to turn it back into an inanimate\
    \ tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "BGDIA"
name: Undead Tree
image: "[[Undead Tree.png]]"
---

# Undead Tree

```statblock
"name": "Undead Tree"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "necrotic"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tree magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a tree, except they have Intelligence\
    \ and Charisma scores of 1, they can't speak, and they have only the Slam action\
    \ option. An animated tree acts as an ally of the tree. The tree remains animate\
    \ for 1 day or until it dies; until the tree dies or is more than 120 feet from\
    \ the tree; or until the tree takes a bonus action to turn it back into an inanimate\
    \ tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "BGDIA"
"image": "[[Undead Tree.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 109*

## Environment

forest
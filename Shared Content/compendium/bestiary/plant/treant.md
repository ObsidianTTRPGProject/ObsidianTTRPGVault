---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/plant
- monster/environment/forest
aliases: ["Treant"]
statblock: true
"name": "Treant"
"size": "Huge"
"type": "plant"
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
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the treant remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two slam attacks."
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
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of the\
    \ treant. The tree remains animate for 1 day or until it dies; until the treant\
    \ dies or is more than 120 feet from the tree; or until the treant takes a bonus\
    \ action to turn it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "MM"
- "RoT"
- "SKT"
- "WDH"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
- "LoX"
name: Treant
image: "[[Treant.png]]"
---

# Treant

```statblock
"name": "Treant"
"size": "Huge"
"type": "plant"
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
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the treant remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two slam attacks."
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
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of the\
    \ treant. The tree remains animate for 1 day or until it dies; until the treant\
    \ dies or is more than 120 feet from the tree; or until the treant takes a bonus\
    \ action to turn it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "MM"
- "RoT"
- "SKT"
- "WDH"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
- "LoX"
"image": "[[Treant.png]]"
```
^statblock

*Source: Monster Manual p. 289, The Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel, Light of Xaryxis*

## Description

Treants are awakened trees that dwell in ancient forests. Although treants prefer to while away the days, months, and years in quiet contemplation, they fiercely protect their woodland demesnes from outside threats.

**The Sleeping Tree Awakens.** A tree destined to become a treant meditates through a long cycle of seasons, living normally for decades or centuries before realizing its potential. Trees that awaken do so only under special circumstances and in places steeped with nature's magic. Treants and powerful druids can sense when a tree has the spark of potential, and they protect such trees in secret groves as they draw near the moment of their awakening. During the long process of awakening, a tree acquires face-like features in its bark, a division of the lower trunk into legs, and long branches bending downward to serve as its arms. When it is ready, the tree pulls its legs free from the clutching earth and joins its fellows in protecting its woodland home.

**Legendary Guardians.** After a treant awakens, it continues to grow exactly as it did when it was a tree. Treants created from the mightiest trees can reach great sizes while developing an innate magical power over plants and animals. Such treants can animate plants, using them to ensnare and trap intruders. They can call wild creatures to aid them or carry messages across great distances.

**Protectors of the Wild.** Even after awakening, a treant spends much of its time living as a tree. While rooted in place, a treant remains aware of its surroundings, and can perceive the effects of events taking place miles away based on subtle changes nearby.

Woodcutters who avoid culling healthy living trees and hunters who take only what they need of the forest's bounty are unlikely to arouse a treant's ire. Creatures careless with fire, those who poison the forest, and those who destroy great trees, especially a tree close to awakening, face the treant's wrath.

## Environment

forest
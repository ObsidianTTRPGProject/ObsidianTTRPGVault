---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/large
- monster/type/construct
aliases: ["Cogwork Archivist"]
statblock: true
"name": "Cogwork Archivist"
"size": "Large"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "17"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Nature": !!int "5"
  "Religion": !!int "5"
  "Perception": !!int "2"
  "History": !!int "5"
  "Arcana": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "all"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n2/day: [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist makes two Grasping Limb attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). The archivist can have no more than two targets [grappled](/rules/conditions.md#grappled)\
    \ at a time."
  "name": "Grasping Limb"
"source":
- "SCC"
name: Cogwork Archivist
image: "[[Cogwork Archivist.png]]"
---

# Cogwork Archivist

```statblock
"name": "Cogwork Archivist"
"size": "Large"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "17"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Nature": !!int "5"
  "Religion": !!int "5"
  "Perception": !!int "2"
  "History": !!int "5"
  "Arcana": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "all"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability:\n\nAt will:\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n2/day: [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archivist makes two Grasping Limb attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). The archivist can have no more than two targets [grappled](/rules/conditions.md#grappled)\
    \ at a time."
  "name": "Grasping Limb"
"source":
- "SCC"
"image": "[[Cogwork Archivist.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 188*

## Description

Programmed with knowledge of Strixhaven's extensive lore catalog, cogwork archivists serve as keepers of the university's various libraries. The archivists' towering metal frames are equipped with long, articulated limbs and retractable conservator tools, which they use to organize and preserve documents from throughout Strixhaven's winding history. Many cogwork archivists can be found among the towering shelves of the Biblioplex, simultaneously retrieving scrolls for curious students while keeping a stern eye on any rowdy groups that might disrupt the quiet atmosphere.
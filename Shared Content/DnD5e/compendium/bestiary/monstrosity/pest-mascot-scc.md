---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Pest Mascot"]
statblock: true
"name": "Pest Mascot"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d4 + 12"
"stats":
- !!int "11"
- !!int "14"
- !!int "17"
- !!int "5"
- !!int "13"
- !!int "4"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pest regains 5 hit points at the start of its turn if it has at least\
    \ 1 hit point. If it takes fire damage, this trait doesn't function at the start\
    \ of the pest's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of its turns, the pest deals 2 (1d4) piercing damage\
    \ to any creature grappling it or that it is grappling."
  "name": "Spiny Hide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "SCC"
name: Pest Mascot
image: "[[Pest Mascot.png]]"
---

# Pest Mascot

```statblock
"name": "Pest Mascot"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d4 + 12"
"stats":
- !!int "11"
- !!int "14"
- !!int "17"
- !!int "5"
- !!int "13"
- !!int "4"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pest regains 5 hit points at the start of its turn if it has at least\
    \ 1 hit point. If it takes fire damage, this trait doesn't function at the start\
    \ of the pest's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of its turns, the pest deals 2 (1d4) piercing damage\
    \ to any creature grappling it or that it is grappling."
  "name": "Spiny Hide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "SCC"
"image": "[[Pest Mascot.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 203*

## Description

Grumpy, spiky, and generally irritating, pest mascots inhabit the muggy bayou of Sedgemoor. However, these ferret-sized swamp creatures hold deep wells of life essence, making them convenient fuel sources for the magic of Witherbloom mages. As such, many Witherbloom students have adopted pests from the bayou as pets, and pests, in all their spiny glory, have become the mascots of the college.
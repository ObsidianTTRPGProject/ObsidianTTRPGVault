---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/huge
- monster/type/aberration
aliases: ["Corrupted Giant Shark"]
statblock: true
"name": "Corrupted Giant Shark"
"size": "Huge"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "11"
- !!int "21"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "walk 0 ft., swim 50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "blindsight 60 ft., passive Perception 14"
"languages": ""
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 15 feet of the shark must succeed\
    \ on a DC 17 Wisdom saving throw or take 11 (2d10) psychic damage."
  "name": "Psychic Maelstrom"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shark regains 10 hit points at the start of its turn. If the shark\
    \ takes radiant damage or suffers a critical hit, this trait doesn't function\
    \ at the start of its next turn. The shark dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit (with advantage if the target is a creature\
    \ missing any hit points), reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing\
    \ damage, and if the target is a creature, it must succeed on a DC 17 Charisma\
    \ saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Bite"
"source":
- "CRCotN"
name: Corrupted Giant Shark
image: "[[Corrupted Giant Shark.png]]"
---

# Corrupted Giant Shark

```statblock
"name": "Corrupted Giant Shark"
"size": "Huge"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "11"
- !!int "21"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "walk 0 ft., swim 50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "blindsight 60 ft., passive Perception 14"
"languages": ""
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 15 feet of the shark must succeed\
    \ on a DC 17 Wisdom saving throw or take 11 (2d10) psychic damage."
  "name": "Psychic Maelstrom"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shark regains 10 hit points at the start of its turn. If the shark\
    \ takes radiant damage or suffers a critical hit, this trait doesn't function\
    \ at the start of its next turn. The shark dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit (with advantage if the target is a creature\
    \ missing any hit points), reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing\
    \ damage, and if the target is a creature, it must succeed on a DC 17 Charisma\
    \ saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Bite"
"source":
- "CRCotN"
"image": "[[Corrupted Giant Shark.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 196*

## Description

In addition to its vicious bite, this giant shark projects a psychic aura that causes painful mental distress in other creatures nearby. The crystals that corrupt the shark's body enable it to regenerate, and only radiant energy or particularly devastating attacks can overcome this unnatural defense.
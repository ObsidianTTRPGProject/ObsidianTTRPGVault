---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Space Hamster"]
statblock: true
"name": "Space Hamster"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "walk 20 ft., burrow 5 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "telepathy 5 ft."
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must succeed on a DC 15 Dexterity saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the start of the hamster's\
    \ next turn."
  "name": "Go for the Eyes (Recharge 6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hamster takes the Dash or Disengage action."
  "name": "Escape"
"source":
- "BAM"
name: Space Hamster
image: "[[Space Hamster.png]]"
---

# Space Hamster

```statblock
"name": "Space Hamster"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "walk 20 ft., burrow 5 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "telepathy 5 ft."
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must succeed on a DC 15 Dexterity saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the start of the hamster's\
    \ next turn."
  "name": "Go for the Eyes (Recharge 6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hamster takes the Dash or Disengage action."
  "name": "Escape"
"source":
- "BAM"
"image": "[[Space Hamster.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 56*

## Description

The first space hamsters were created by wizards who used magic to shrink giant space hamsters to wee size, leading their creators to refer to them as miniature giant space hamsters. The magic also made the space hamsters smarter and telepathic.

These benign rodents are native to Wildspace, though countless numbers of them have found their way to worlds throughout the Material Plane, where they are known simply as hamsters. They keep their telepathic ability hidden from most other creatures they come near.
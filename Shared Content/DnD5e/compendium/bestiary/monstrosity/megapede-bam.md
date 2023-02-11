---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Megapede"]
statblock: true
"name": "Megapede"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "175"
"hit_dice": "13d20 + 39"
"stats":
- !!int "22"
- !!int "10"
- !!int "17"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": ""
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede makes one Bite attack and uses either Life Drain or Psychic\
    \ Bomb."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage plus 22 (5d8) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede magically drains life energy from other creatures nearby.\
    \ Each creature within 15 feet of the megapede must make a DC 15 Constitution\
    \ saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede targets one creature it can see within 60 feet of itself.\
    \ The target must make a DC 15 Wisdom saving throw. On a failed save, the target\
    \ takes 22 (5d8) psychic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a successful save, the target takes half\
    \ as much damage and isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Psychic Bomb"
"source":
- "BAM"
- "LoX"
name: Megapede
image: "[[Megapede.png]]"
---

# Megapede

```statblock
"name": "Megapede"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "175"
"hit_dice": "13d20 + 39"
"stats":
- !!int "22"
- !!int "10"
- !!int "17"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": ""
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede makes one Bite attack and uses either Life Drain or Psychic\
    \ Bomb."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage plus 22 (5d8) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede magically drains life energy from other creatures nearby.\
    \ Each creature within 15 feet of the megapede must make a DC 15 Constitution\
    \ saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The megapede targets one creature it can see within 60 feet of itself.\
    \ The target must make a DC 15 Wisdom saving throw. On a failed save, the target\
    \ takes 22 (5d8) psychic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a successful save, the target takes half\
    \ as much damage and isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Psychic Bomb"
"source":
- "BAM"
- "LoX"
"image": "[[Megapede.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 36, Light of Xaryxis*

## Description

Megapedes are enormous centipedes that can be as much as 150 feet long, though most specimens top out at between 100 and 120 feet. Their dozens of legs are each 5 feet long and tipped with flexible claws, and they have fur-covered carapaces. A megapede that lives in a sandy environment often buries itself in the sand and waits for prey to wander nearby, but megapedes also nest in cavernous underground chambers.

A megapede's bite is poisonous. In addition, the creature has magical abilities that make it a superior predator. It can exude an invisible aura of life-draining energy, or it can fix its gaze on one creature and implant a psychic bomb in that creature's mind.

After a megapede lays eggs, it attaches the eggs to its body using sticky saliva and carries them on its back until the eggs hatch. Newly hatched megapedes grow to full size within weeks by consuming as much as they can, possibly including one another if food is scarce.
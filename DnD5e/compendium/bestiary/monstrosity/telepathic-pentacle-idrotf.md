---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/huge
- monster/type/monstrosity
aliases: ["Telepathic Pentacle"]
statblock: true
"name": "Telepathic Pentacle"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle has five heads. While it has more than one head,\
    \ the Telepathic Pentacle has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ Telepathic Pentacle takes 25 or more damage in a single turn, one of its heads\
    \ dies. If all its heads die, the Telepathic Pentacle dies.\n\nAt the end of its\
    \ turn, it grows two heads for each of its heads that died since its last turn,\
    \ unless it has taken fire damage since its last turn. The Telepathic Pentacle\
    \ regains 10 hit points for each head regrown in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the Telepathic Pentacle has beyond one, it gets an extra\
    \ reaction that can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the Telepathic Pentacle sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Bite"
"source":
- "IDRotF"
name: Telepathic Pentacle
image: "[[Telepathic Pentacle.png]]"
---

# Telepathic Pentacle

```statblock
"name": "Telepathic Pentacle"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle has five heads. While it has more than one head,\
    \ the Telepathic Pentacle has advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ Telepathic Pentacle takes 25 or more damage in a single turn, one of its heads\
    \ dies. If all its heads die, the Telepathic Pentacle dies.\n\nAt the end of its\
    \ turn, it grows two heads for each of its heads that died since its last turn,\
    \ unless it has taken fire damage since its last turn. The Telepathic Pentacle\
    \ regains 10 hit points for each head regrown in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the Telepathic Pentacle has beyond one, it gets an extra\
    \ reaction that can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the Telepathic Pentacle sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Telepathic Pentacle makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Bite"
"source":
- "IDRotF"
"image": "[[Telepathic Pentacle.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 244*

## Description

Months before Ythryn's fall, a circle of mages known as the Telepathic Pentacle tried to fuse their minds together to become a conjoined telepathic force. The procedure went terribly wrong, and their bodies and minds melded into a single monstrosity. Iriolarthas imprisoned the thing in this empty well so that its latent telepathic powers could be tapped by the city's elite. A short obituary is engraved around the lip of the well in Draconic: "Herein lie the immortal remains of the Telepathic Pentacle. Sit, meditate, and learn."
---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Ironscale Hydra"]
statblock: true
"name": "Ironscale Hydra"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "181"
"hit_dice": "11d20 + 66"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 40 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "8"
"damage_immunities": "acid"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hydra takes piercing or slashing damage, each creature within\
    \ 5 feet of the hydra takes 9 (2d8) acid damage."
  "name": "Acidic Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra has five heads. While it has more than one head, the hydra has\
    \ advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious). Whenever the hydra\
    \ takes 35 or more damage in a single turn, one of its heads dies. If all its\
    \ heads die, the hydra dies. At the end of its turn, it grows two heads for each\
    \ of its heads that died since its last turn, unless it has taken fire damage\
    \ since its last turn. The hydra regains 10 hit points for each head regrown in\
    \ this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
    \ can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
  "name": "Bite"
"source":
- "MOT"
name: Ironscale Hydra
image: "[[Ironscale Hydra.png]]"
---

# Ironscale Hydra

```statblock
"name": "Ironscale Hydra"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "181"
"hit_dice": "11d20 + 66"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 40 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "8"
"damage_immunities": "acid"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hydra takes piercing or slashing damage, each creature within\
    \ 5 feet of the hydra takes 9 (2d8) acid damage."
  "name": "Acidic Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra has five heads. While it has more than one head, the hydra has\
    \ advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious). Whenever the hydra\
    \ takes 35 or more damage in a single turn, one of its heads dies. If all its\
    \ heads die, the hydra dies. At the end of its turn, it grows two heads for each\
    \ of its heads that died since its last turn, unless it has taken fire damage\
    \ since its last turn. The hydra regains 10 hit points for each head regrown in\
    \ this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
    \ can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
  "name": "Bite"
"source":
- "MOT"
"image": "[[Ironscale Hydra.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 231*

## Description

Five-headed ironscale hydras lurk in the wild places of the world, being common foes for heroes seeking to test their mettle against terrors worthy of the gods' notice. Most ironscale hydras inhabit lakes and boggy caverns, from which they hunt unwary creatures that come for a drink or swim.

What krakens are to the sea and dragons are to the sky, hydras are to the lands of Theros. Various hydras dwell at the fringes of civilization, from the bog-dwelling hydras known across the multiverse to massive ironscale hydras that lurk in deep wildernesses. Beyond even these exist serpentine horrors born of the whims of foul gods, like the legendary hydra Polukranos.
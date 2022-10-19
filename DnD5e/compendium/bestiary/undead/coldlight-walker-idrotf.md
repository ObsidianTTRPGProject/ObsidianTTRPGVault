---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/undead
aliases: ["Coldlight Walker"]
statblock: true
"name": "Coldlight Walker"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "15"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "2"
"damage_immunities": "cold"
"condition_immunities": "blinded, charmed, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker sheds bright light in a 20-foot radius and dim light for an\
    \ additional 20 feet. As a bonus action, the walker can target one creature in\
    \ its bright light that it can see and force it to succeed on a DC 14 Constitution\
    \ saving throw or be [blinded](/rules/conditions.md#blinded) until the start of\
    \ the walker's next turn."
  "name": "Blinding Light"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature killed by the walker freezes for 9 days, during which time\
    \ it can't be thawed, harmed by fire, animated, or raised from the dead."
  "name": "Icy Doom"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) bludgeoning damage plus 14 (4d6) cold damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +3 to hit, range 60 ft., one target. Hit: 25 (4d10\
    \ + 3) cold damage."
  "name": "Cold Ray"
"source":
- "IDRotF"
name: Coldlight Walker
image: "[[Coldlight Walker.png]]"
---

# Coldlight Walker

```statblock
"name": "Coldlight Walker"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "15"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "2"
"damage_immunities": "cold"
"condition_immunities": "blinded, charmed, exhaustion, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker sheds bright light in a 20-foot radius and dim light for an\
    \ additional 20 feet. As a bonus action, the walker can target one creature in\
    \ its bright light that it can see and force it to succeed on a DC 14 Constitution\
    \ saving throw or be [blinded](/rules/conditions.md#blinded) until the start of\
    \ the walker's next turn."
  "name": "Blinding Light"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature killed by the walker freezes for 9 days, during which time\
    \ it can't be thawed, harmed by fire, animated, or raised from the dead."
  "name": "Icy Doom"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The walker makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) bludgeoning damage plus 14 (4d6) cold damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +3 to hit, range 60 ft., one target. Hit: 25 (4d10\
    \ + 3) cold damage."
  "name": "Cold Ray"
"source":
- "IDRotF"
"image": "[[Coldlight Walker.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 284*

## Description

Some humanoids who died from extreme cold but whose spirits languish in the mortal world become coldlight walkers, burning with frigid fury at the meaninglessness of life. Their frostbitten corpses emit a spectral light so intense that mortal eyes can barely stand to look at them. They typically wear the clothing in which they died.

**God-Spawned Horrors.** Gods that personify winter create coldlight walkers as embodiments of winter's wrath. These hateful spirits that were denied passage to the afterlife are preserved in their current forms to remind the living how fragile life can be.

When a coldlight walker dies, its light goes out, leaving behind a frozen, inanimate corpse that can never be raised from the dead.
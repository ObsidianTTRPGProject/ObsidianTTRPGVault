---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/monstrosity
aliases: ["Thri-kreen Hunter"]
statblock: true
"name": "Thri-kreen Hunter"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "15"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen makes two Gythka or Chatkcha attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Gythka"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) slashing damage."
  "name": "Chatkcha"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen changes the color of its carapace to match the color and\
    \ texture of its surroundings, gaining advantage on Dexterity (Stealth) checks\
    \ it makes to hide in those surroundings."
  "name": "Chameleon Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
    \ isn't 0."
  "name": "Leap"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen adds 2 to its AC against one melee attack that would hit\
    \ it. To do so, the thri-kreen must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "BAM"
- "LoX"
name: Thri-kreen Hunter
image: "[[Thri-kreen Hunter.png]]"
---

# Thri-kreen Hunter

```statblock
"name": "Thri-kreen Hunter"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "15"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "telepathy 60 ft., Thri-kreen"
"cr": "2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen makes two Gythka or Chatkcha attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Gythka"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) slashing damage."
  "name": "Chatkcha"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen changes the color of its carapace to match the color and\
    \ texture of its surroundings, gaining advantage on Dexterity (Stealth) checks\
    \ it makes to hide in those surroundings."
  "name": "Chameleon Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen leaps up to 20 feet in any direction, provided its speed\
    \ isn't 0."
  "name": "Leap"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thri-kreen adds 2 to its AC against one melee attack that would hit\
    \ it. To do so, the thri-kreen must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "BAM"
- "LoX"
"image": "[[Thri-kreen Hunter.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 61, Light of Xaryxis*

## Description

Thri-kreen hunters are skilled foragers and stalkers. A thri-kreen hunter encountered in Wildspace might be on the trail of a fugitive or leading a gang of pirates.
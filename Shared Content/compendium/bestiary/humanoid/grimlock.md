---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/grimlock
- monster/environment/underdark
aliases: ["Grimlock"]
statblock: true
"name": "Grimlock"
"size": "Medium"
"type": "humanoid"
"subtype": "grimlock"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "9"
- !!int "8"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "3"
"condition_immunities": "blinded"
"senses": "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius),\
  \ passive Perception 13"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock can't use its blindsight while [deafened](/rules/conditions.md#deafened)\
    \ and unable to smell."
  "name": "Blind Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock has advantage on Dexterity (Stealth) checks made to hide in\
    \ rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage plus 2 (1d4) piercing damage."
  "name": "Spiked Bone Club"
"source":
- "MM"
- "WDMM"
name: Grimlock
image: "[[Grimlock.png]]"
---

# Grimlock

```statblock
"name": "Grimlock"
"size": "Medium"
"type": "humanoid"
"subtype": "grimlock"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "9"
- !!int "8"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "3"
"condition_immunities": "blinded"
"senses": "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius),\
  \ passive Perception 13"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock can't use its blindsight while [deafened](/rules/conditions.md#deafened)\
    \ and unable to smell."
  "name": "Blind Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grimlock has advantage on Dexterity (Stealth) checks made to hide in\
    \ rocky terrain."
  "name": "Stone Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage plus 2 (1d4) piercing damage."
  "name": "Spiked Bone Club"
"source":
- "MM"
- "WDMM"
"image": "[[Grimlock.png]]"
```
^statblock

*Source: Monster Manual p. 175, Waterdeep: Dungeon of the Mad Mage*

## Description

The degenerate subterranean grimlocks were once human, but their worship of the mind flayers over generations of prowling the Underdark transformed them into blind, monstrous cannibals long ago.

**Debased Cultists.** The empire of the mind flayers once spread across many worlds, enslaving countless races. Among those were human cultures whose high priests the mind flayers subverted using their insidious powers of thought control. Those leaders gradually turned the faiths of their followers toward the illithids, which they worshiped as blasphemous deities.

Over time, the rituals of these enslaved humans created fervent cannibal cults that regarded the brain eating of the mind flayers as a holy sacrament. The illithids commanded their worshipers to abduct other sentient creatures to be sacrificed. After the victims' brains had been consumed, the mind flayers gave the lifeless bodies to the cultists.

**Blind Hunters.** When the rule of the mind flayers crumbled, their cults faced constant warfare from their enemies, the same creatures that had once been their victims. The cults fled into the Underdark domains of their illithid gods. Over generations in that lightless realm, the cultists learned to rely on their other senses for survival. In time, their eyes withered away and eyelids sealed, leaving only covered eye sockets behind.

A grimlock's ears prick up at the faintest footfall or whisper echoing down stone passageways. It can speak in tones too low for most other humanoids to hear. The odors of sweat, flesh, and blood awaken its hunger, and it can track by such scents like a bloodhound. To enhance their senses, grimlocks leave trails of blood, piles of dung, or the viscera of slain prey in places far from their lairs. When intruders pass through those areas, they carry the foul scents with them, warning the grimlocks of their approach.

For most creatures, blindness is an enormous hindrance. For a grimlock with its other heightened senses, sightlessness is a boon. A grimlock isn't fooled by visual illusions or misperceptions. It is fearless as it stalks prey.

**Endless War.** Grimlocks still venerate the mind flayers, serving them whenever possible. Grimlocks also recall the war in which they were driven underground. To them, it has never ended. They continue to return to the surface world to abduct captives for their illithid masters.

## Environment

underdark
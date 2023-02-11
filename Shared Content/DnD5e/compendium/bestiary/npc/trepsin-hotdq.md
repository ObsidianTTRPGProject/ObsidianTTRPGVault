---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/large
- monster/type/giant
aliases: ["Trepsin"]
statblock: true
"name": "Trepsin"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Giant"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The troll dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll attacks five times, once with its bite and four times with its\
    \ claws. If two or more claws hit the same target, the troll rends the target,\
    \ dealing an extra 2d6 slashing damage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "HotDQ"
name: Trepsin
image: "[[Trepsin.png]]"
---

# Trepsin

```statblock
"name": "Trepsin"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Giant"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The troll dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll attacks five times, once with its bite and four times with its\
    \ claws. If two or more claws hit the same target, the troll rends the target,\
    \ dealing an extra 2d6 slashing damage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "HotDQ"
"image": "[[Trepsin.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 63*

## Description

Sometimes when a troll loses a limb, it regenerates two limbs to replace the one it lost. This can result in trolls with multiple arms. A four-armed troll uses the troll stat block, except that it is a Challenge Rating 6 monster (2,300 XP) and has alternate action options to suit.
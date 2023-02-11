---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Reduced-Threat Aboleth"]
statblock: true
"name": "Reduced-Threat Aboleth"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "67"
"hit_dice": "18d10 + 36"
"stats":
- !!int "21"
- !!int "9"
- !!int "15"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Perception": !!int "8"
  "History": !!int "10"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the aboleth is surrounded by transformative mucus. A\
    \ creature that touches the aboleth or that hits it with a melee attack while\
    \ within 5 feet of it must make a DC 12 Constitution saving throw. On a failure,\
    \ the creature is diseased for 1d4 hours. The diseased creature can breathe only\
    \ underwater."
  "name": "Mucous Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature communicates telepathically with the aboleth, the aboleth\
    \ learns the creature's greatest desires if the aboleth can see the creature."
  "name": "Probing Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes three tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 12 Constitution saving throw or become diseased. The disease has no effect for\
    \ 1 minute and can be removed by any magic that cures disease. After 1 minute,\
    \ the diseased creature's skin becomes translucent and slimy, the creature can't\
    \ regain hit points unless it is underwater, and the disease can be removed only\
    \ by [heal](/compendium/spells/heal.md) or another disease-curing spell of 6th\
    \ level or higher. When the creature is outside a body of water, it takes 6 (1d12)\
    \ acid damage every 10 minutes unless moisture is applied to the skin before 10\
    \ minutes have passed."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (3d6\
    \ + 5) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 12 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the aboleth until the aboleth dies or until it is on a different plane of\
    \ existence from the target. The [charmed](/rules/conditions.md#charmed) target\
    \ is under the aboleth's control and can't take reactions, and the aboleth and\
    \ the target can communicate telepathically with each other over any distance.\n\
    \nWhenever the [charmed](/rules/conditions.md#charmed) target takes damage, the\
    \ target can repeat the saving throw. On a success, the effect ends. No more than\
    \ once every 24 hours, the target can also repeat the saving throw when it is\
    \ at least 1 mile away from the aboleth."
  "name": "Enslave (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes one tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by the aboleth takes\
    \ 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage\
    \ the creature takes."
  "name": "Psychic Drain (Costs 2 Actions)"
"source":
- "TftYP"
name: Reduced-Threat Aboleth
image: "[[Reduced-Threat Aboleth.png]]"
---

# Reduced-Threat Aboleth

```statblock
"name": "Reduced-Threat Aboleth"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "67"
"hit_dice": "18d10 + 36"
"stats":
- !!int "21"
- !!int "9"
- !!int "15"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Perception": !!int "8"
  "History": !!int "10"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the aboleth is surrounded by transformative mucus. A\
    \ creature that touches the aboleth or that hits it with a melee attack while\
    \ within 5 feet of it must make a DC 12 Constitution saving throw. On a failure,\
    \ the creature is diseased for 1d4 hours. The diseased creature can breathe only\
    \ underwater."
  "name": "Mucous Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature communicates telepathically with the aboleth, the aboleth\
    \ learns the creature's greatest desires if the aboleth can see the creature."
  "name": "Probing Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes three tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 12 Constitution saving throw or become diseased. The disease has no effect for\
    \ 1 minute and can be removed by any magic that cures disease. After 1 minute,\
    \ the diseased creature's skin becomes translucent and slimy, the creature can't\
    \ regain hit points unless it is underwater, and the disease can be removed only\
    \ by [heal](/compendium/spells/heal.md) or another disease-curing spell of 6th\
    \ level or higher. When the creature is outside a body of water, it takes 6 (1d12)\
    \ acid damage every 10 minutes unless moisture is applied to the skin before 10\
    \ minutes have passed."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (3d6\
    \ + 5) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 12 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the aboleth until the aboleth dies or until it is on a different plane of\
    \ existence from the target. The [charmed](/rules/conditions.md#charmed) target\
    \ is under the aboleth's control and can't take reactions, and the aboleth and\
    \ the target can communicate telepathically with each other over any distance.\n\
    \nWhenever the [charmed](/rules/conditions.md#charmed) target takes damage, the\
    \ target can repeat the saving throw. On a success, the effect ends. No more than\
    \ once every 24 hours, the target can also repeat the saving throw when it is\
    \ at least 1 mile away from the aboleth."
  "name": "Enslave (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes one tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by the aboleth takes\
    \ 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage\
    \ the creature takes."
  "name": "Psychic Drain (Costs 2 Actions)"
"source":
- "TftYP"
"image": "[[Reduced-Threat Aboleth.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark
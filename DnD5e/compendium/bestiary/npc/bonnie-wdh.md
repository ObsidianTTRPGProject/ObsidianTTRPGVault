---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/monstrosity/shapechanger
- monster/environment/underdark
- monster/environment/urban
aliases: ["Bonnie"]
statblock: true
"name": "Bonnie"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "3"
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie can use its action to polymorph into a Small or Medium humanoid\
    \ it has seen, or back into its true form. Its statistics, other than its size,\
    \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, Bonnie has advantage on attack rolls against\
    \ any creature it surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Bonnie surprises a creature and hits it with an attack during the first\
    \ round of combat, the target takes an extra 10 (3d6) damage from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie magically reads the surface thoughts of one creature within 60 feet\
    \ of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet\
    \ of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target\
    \ is in range, Bonnie can continue reading its thoughts, as long as Bonnie's concentration\
    \ isn't broken (as if concentrating on a spell). While reading the target's mind,\
    \ Bonnie has advantage on Wisdom ([Insight](/rules/skills.md#Insight)) and Charisma\
    \ ([Deception](/rules/skills.md#Deception), [Intimidation](/rules/skills.md#Intimidation),\
    \ and [Persuasion](/rules/skills.md#Persuasion)) checks against the target."
  "name": "Read Thoughts"
"source":
- "WDH"
name: Bonnie
image: "[[Bonnie.png]]"
---

# Bonnie

```statblock
"name": "Bonnie"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "3"
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie can use its action to polymorph into a Small or Medium humanoid\
    \ it has seen, or back into its true form. Its statistics, other than its size,\
    \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In the first round of a combat, Bonnie has advantage on attack rolls against\
    \ any creature it surprised."
  "name": "Ambusher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Bonnie surprises a creature and hits it with an attack during the first\
    \ round of combat, the target takes an extra 10 (3d6) damage from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bonnie magically reads the surface thoughts of one creature within 60 feet\
    \ of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet\
    \ of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target\
    \ is in range, Bonnie can continue reading its thoughts, as long as Bonnie's concentration\
    \ isn't broken (as if concentrating on a spell). While reading the target's mind,\
    \ Bonnie has advantage on Wisdom ([Insight](/rules/skills.md#Insight)) and Charisma\
    \ ([Deception](/rules/skills.md#Deception), [Intimidation](/rules/skills.md#Intimidation),\
    \ and [Persuasion](/rules/skills.md#Persuasion)) checks against the target."
  "name": "Read Thoughts"
"source":
- "WDH"
"image": "[[Bonnie.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 20*

## Environment

underdark, urban
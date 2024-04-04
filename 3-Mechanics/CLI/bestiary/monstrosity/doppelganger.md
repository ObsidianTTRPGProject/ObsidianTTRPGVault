---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/shapechanger
statblock: inline
aliases: ["Doppelganger"]
---
# [Doppelganger](3-Mechanics\CLI\bestiary\monstrosity/doppelganger.md)
*Source: Monster Manual p. 82. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Doppelganger"
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
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "3"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "The doppelganger can use its action to polymorph into a Small or Medium\
    \ humanoid it has seen, or back into its true form. Its statistics, other than\
    \ its size, are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "In the first round of a combat, the doppelganger has advantage on attack\
    \ rolls against any creature it surprised."
  "name": "Ambusher"
- "desc": "If the doppelganger surprises a creature and hits it with an attack during\
    \ the first round of combat, the target takes an extra dice:3d6|text(10) (3d6)\
    \ damage from the attack."
  "name": "Surprise Attack"
"actions":
- "desc": "The doppelganger makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 4|text(7) (1d6 + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "The doppelganger magically reads the surface thoughts of one creature within\
    \ 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt,\
    \ 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While\
    \ the target is in range, the doppelganger can continue reading its thoughts,\
    \ as long as the doppelganger's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ isn't broken (as if concentrating on a spell). While reading the target's mind,\
    \ the doppelganger has advantage on Wisdom ([Insight](/3-Mechanics/CLI/rules/skills.md#Insight))\
    \ and Charisma ([Deception](/3-Mechanics/CLI/rules/skills.md#Deception), [Intimidation](/3-Mechanics/CLI/rules/skills.md#Intimidation),\
    \ and [Persuasion](/3-Mechanics/CLI/rules/skills.md#Persuasion)) checks against\
    \ the target."
  "name": "Read Thoughts"
"source":
- "MM"
- "HotDQ"
- "LMoP"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "BGDIA"
- "IMR"
- "EGW"
- "IDRotF"
- "JttRC"
- "KftGV"
- "HftT"
- "PaBTSO"
- "SatO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/doppelganger.webp"
```
^statblock

## Environment

underdark, urban
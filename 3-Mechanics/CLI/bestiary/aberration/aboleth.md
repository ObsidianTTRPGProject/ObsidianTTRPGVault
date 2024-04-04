---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Aboleth"]
---
# [Aboleth](3-Mechanics\CLI\bestiary\aberration/aboleth.md)
*Source: Monster Manual p. 13. Available in the SRD.*  

```statblock
"name": "Aboleth"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d10 + 36"
"stats":
- !!int "21"
- !!int "9"
- !!int "15"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "10 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Perception": !!int "10"
  "History": !!int "12"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": "The aboleth can breathe air and water."
  "name": "Amphibious"
- "desc": "While underwater, the aboleth is surrounded by transformative mucus. A\
    \ creature that touches the aboleth or that hits it with a melee attack while\
    \ within 5 feet of it must make a DC 14 Constitution saving throw. On a failure,\
    \ the creature is diseased for dice: 1d4|avg|noform (1d4) hours. The diseased\
    \ creature can breathe only underwater."
  "name": "Mucous Cloud"
- "desc": "If a creature communicates telepathically with the aboleth, the aboleth\
    \ learns the creature's greatest desires if the aboleth can see the creature."
  "name": "Probing Telepathy"
"actions":
- "desc": "The aboleth makes three tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 5|text(12) (2d6 + 5) bludgeoning damage. If the target\
    \ is a creature, it must succeed on a DC 14 Constitution saving throw or become\
    \ diseased. The disease has no effect for 1 minute and can be removed by any magic\
    \ that cures disease. After 1 minute, the diseased creature's skin becomes translucent\
    \ and slimy, the creature can't regain hit points unless it is underwater, and\
    \ the disease can be removed only by [heal](/3-Mechanics/CLI/spells/heal.md) or\
    \ another disease-curing spell of 6th level or higher. When the creature is outside\
    \ a body of water, it takes dice:1d12|text(6) (1d12) acid damage every 10\
    \ minutes unless moisture is applied to the skin before 10 minutes have passed."
  "name": "Tentacle"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one target.\
    \ Hit: dice:3d6 + 5|text(15) (3d6 + 5) bludgeoning damage."
  "name": "Tail"
- "desc": "The aboleth targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by the aboleth until the aboleth dies or until it is on a different plane of\
    \ existence from the target. The [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ target is under the aboleth's control and can't take reactions, and the aboleth\
    \ and the target can communicate telepathically with each other over any distance.\n\
    \nWhenever the [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) target\
    \ takes damage, the target can repeat the saving throw. On a success, the effect\
    \ ends. No more than once every 24 hours, the target can also repeat the saving\
    \ throw when it is at least 1 mile away from the aboleth."
  "name": "Enslave (3/Day)"
"legendary_actions":
- "desc": "The aboleth makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The aboleth makes one tail attack."
  "name": "Tail Swipe"
- "desc": "One creature [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) by\
    \ the aboleth takes dice:3d6|text(10) (3d6) psychic damage, and the aboleth\
    \ regains hit points equal to the damage the creature takes."
  "name": "Psychic Drain (Costs 2 Actions)"
"source":
- "MM"
- "PotA"
- "ToA"
- "WDH"
- "WDMM"
- "JttRC"
- "PaBTSO"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/aboleth.webp"
```
^statblock

## Environment

underdark
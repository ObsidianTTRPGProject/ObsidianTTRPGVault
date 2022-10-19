---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/monstrosity
aliases: ["Kalka-Kylla"]
statblock: true
"name": "Kalka-Kylla"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "3"
  "Insight": !!int "5"
"senses": "blindsight 30 ft., passive Perception 13"
"languages": "Olman"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Kalka-Kylla remains motionless and hidden in its shell, it is indistinguishable\
    \ from a polished boulder."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla can use a bonus action to retract into or emerge from its shell.\
    \ While retracted, Kalka-Kylla gains a +4 bonus to AC, and it has a speed of 0\
    \ and can't benefit from bonuses to speed."
  "name": "Shell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and if the target is a Medium or smaller creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 13). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained). Kalka-Kylla\
    \ has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "TftYP"
name: Kalka-Kylla
image: "[[Kalka-Kylla.png]]"
---

# Kalka-Kylla

```statblock
"name": "Kalka-Kylla"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "3"
  "Insight": !!int "5"
"senses": "blindsight 30 ft., passive Perception 13"
"languages": "Olman"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Kalka-Kylla remains motionless and hidden in its shell, it is indistinguishable\
    \ from a polished boulder."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla can use a bonus action to retract into or emerge from its shell.\
    \ While retracted, Kalka-Kylla gains a +4 bonus to AC, and it has a speed of 0\
    \ and can't benefit from bonuses to speed."
  "name": "Shell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kalka-Kylla makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and if the target is a Medium or smaller creature,\
    \ it is [grappled](/rules/conditions.md#grappled) (escape DC 13). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained). Kalka-Kylla\
    \ has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "TftYP"
"image": "[[Kalka-Kylla.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 238*
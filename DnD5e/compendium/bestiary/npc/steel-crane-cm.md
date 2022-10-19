---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Steel Crane"]
statblock: true
"name": "Steel Crane"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "76"
"hit_dice": "9d8 + 36"
"stats":
- !!int "13"
- !!int "18"
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "7"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"damage_resistances": "poison, psychic"
"senses": "passive Perception 16"
"languages": "Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Steel Crane is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Steel Crane makes three attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage, and if the target is a creature, it must succeed on a DC\
    \ 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned) until\
    \ the start of Steel Crane's next turn."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage or, if the target is a creature, Steel Crane can grapple\
    \ the target instead (escape DC 15). Steel Crane can't make attacks with the whip\
    \ while using it to grapple a creature. Anytime on his turn, he can release a\
    \ creature [grappled](/rules/conditions.md#grappled) by the whip (no action required)."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Steel Crane regains 2d8 + 4 hit points, and all levels of [exhaustion](/rules/conditions.md#exhaustion)\
    \ end on him."
  "name": "Heal Self (Recharges after a Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Steel Crane deflects\
    \ the missile. The damage he takes from the attack is reduced by 1d10 + 10. If\
    \ the damage is reduced to 0, Steel Crane catches the missile if it's small enough\
    \ to hold in one hand and Steel Crane has a hand free."
  "name": "Deflect Missile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Steel Crane falls, he can slow his descent, taking no damage from\
    \ the fall."
  "name": "Slow Descent (3/Day)"
"source":
- "CM"
name: Steel Crane
image: "[[Steel Crane.png]]"
---

# Steel Crane

```statblock
"name": "Steel Crane"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "76"
"hit_dice": "9d8 + 36"
"stats":
- !!int "13"
- !!int "18"
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "7"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"damage_resistances": "poison, psychic"
"senses": "passive Perception 16"
"languages": "Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Steel Crane is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Steel Crane makes three attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) force damage, and if the target is a creature, it must succeed on a DC\
    \ 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned) until\
    \ the start of Steel Crane's next turn."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) slashing damage or, if the target is a creature, Steel Crane can grapple\
    \ the target instead (escape DC 15). Steel Crane can't make attacks with the whip\
    \ while using it to grapple a creature. Anytime on his turn, he can release a\
    \ creature [grappled](/rules/conditions.md#grappled) by the whip (no action required)."
  "name": "Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Steel Crane regains 2d8 + 4 hit points, and all levels of [exhaustion](/rules/conditions.md#exhaustion)\
    \ end on him."
  "name": "Heal Self (Recharges after a Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Steel Crane deflects\
    \ the missile. The damage he takes from the attack is reduced by 1d10 + 10. If\
    \ the damage is reduced to 0, Steel Crane catches the missile if it's small enough\
    \ to hold in one hand and Steel Crane has a hand free."
  "name": "Deflect Missile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Steel Crane falls, he can slow his descent, taking no damage from\
    \ the fall."
  "name": "Slow Descent (3/Day)"
"source":
- "CM"
"image": "[[Steel Crane.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 164*

## Description

Steel Crane is tall and slender. He is exceptionally handsome, with neat silver hair and deep green eyes, and carries himself with the grace of a dancer.

A strip of cloth was torn from the left sleeve of Steel Crane's white robe during the raid on Candlekeep, and Steel Crane hasn't yet bothered to mend the garment. The robe's damage is clearly visible—evidence of Steel Crane's role in the theft.
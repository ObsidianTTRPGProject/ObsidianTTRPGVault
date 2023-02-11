---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/construct
aliases: ["Clay Gladiator"]
statblock: true
"name": "Clay Gladiator"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 11"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Climbing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator can't be disarmed, and cannot make ranged attacks."
  "name": "Steadfast"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4\
    \ + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
name: Clay Gladiator
image: "[[Clay Gladiator.png]]"
---

# Clay Gladiator

```statblock
"name": "Clay Gladiator"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 11"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Climbing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator can't be disarmed, and cannot make ranged attacks."
  "name": "Steadfast"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator makes three melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4\
    \ + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
"image": "[[Clay Gladiator.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 100*

## Description

A clay gladiator fights if attacked or when called to the gladiatorial pit. If reduced to 0 hit points outside of the gladiatorial pit, the gladiator disappears along with its possessions, reappears in its cell at full health with spear and shield in hand, and returns to the gladiatorial pit if it can. If defeated in the gladiatorial pit, the gladiator leaves its spear behind before reforming in its cell
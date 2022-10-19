---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/huge
- monster/type/ooze
- monster/environment/underdark
aliases: ["Huge Gray Ooze"]
statblock: true
"name": "Huge Gray Ooze"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "152"
"hit_dice": "16d12 + 48"
"stats":
- !!int "18"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "2"
"speed": "walk 10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage\
    \ rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze\
    \ can eat through 2-inch-thick, nonmagical metal in 1 round."
  "name": "Corrode Metal"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the ooze remains motionless, it is indistinguishable from an oily\
    \ pool or wet rock."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, it can make two attacks with its pseudopods."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (6d6)\
    \ acid damage, or 42 (12d6) acid damage while the ooze is enlarged. If the target\
    \ is wearing nonmagical metal armor, its armor is partly corroded and takes a\
    \ permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed\
    \ if the penalty reduces its AC to 10."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the ooze magically increases in size. While enlarged, the\
    \ ooze is Gargantuan, doubles its damage dice with its pseudopod attack, and makes\
    \ Strength checks and Strength saving throws with advantage."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze magically turns [invisible](/rules/conditions.md#invisible) for\
    \ up to 1 hour until it attacks, it uses its Enlarge, or its concentration is\
    \ broken (as if concentrating on a spell)."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "WDMM"
name: Huge Gray Ooze
image: "[[Huge Gray Ooze.png]]"
---

# Huge Gray Ooze

```statblock
"name": "Huge Gray Ooze"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "152"
"hit_dice": "16d12 + 48"
"stats":
- !!int "18"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "2"
"speed": "walk 10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After\
    \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage\
    \ rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition\
    \ made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze\
    \ can eat through 2-inch-thick, nonmagical metal in 1 round."
  "name": "Corrode Metal"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the ooze remains motionless, it is indistinguishable from an oily\
    \ pool or wet rock."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, it can make two attacks with its pseudopods."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (6d6)\
    \ acid damage, or 42 (12d6) acid damage while the ooze is enlarged. If the target\
    \ is wearing nonmagical metal armor, its armor is partly corroded and takes a\
    \ permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed\
    \ if the penalty reduces its AC to 10."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the ooze magically increases in size. While enlarged, the\
    \ ooze is Gargantuan, doubles its damage dice with its pseudopod attack, and makes\
    \ Strength checks and Strength saving throws with advantage."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze magically turns [invisible](/rules/conditions.md#invisible) for\
    \ up to 1 hour until it attacks, it uses its Enlarge, or its concentration is\
    \ broken (as if concentrating on a spell)."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "WDMM"
"image": "[[Huge Gray Ooze.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 243*

## Environment

underdark
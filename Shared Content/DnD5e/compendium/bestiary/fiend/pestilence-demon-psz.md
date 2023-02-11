---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/fiend/demon
aliases: ["Pestilence Demon"]
statblock: true
"name": "Pestilence Demon"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "17"
- !!int "15"
- !!int "18"
- !!int "8"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the demon. The\
    \ spores spread around corners. Each creature in that area must succeed on a DC\
    \ 14 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 5 (1d10) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. Emptying a vial of holy water on the target also ends the effect\
    \ on it."
  "name": "Spores (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon emits a horrific screech. Each creature within 20 feet of it\
    \ that can hear it and that isn't a demon must succeed on a DC 14 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the demon's next turn."
  "name": "Stunning Screech (1/Day)"
"source":
- "PSZ"
name: Pestilence Demon
image: "[[Pestilence Demon.png]]"
---

# Pestilence Demon

```statblock
"name": "Pestilence Demon"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "17"
- !!int "15"
- !!int "18"
- !!int "8"
- !!int "13"
- !!int "8"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the demon. The\
    \ spores spread around corners. Each creature in that area must succeed on a DC\
    \ 14 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 5 (1d10) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. Emptying a vial of holy water on the target also ends the effect\
    \ on it."
  "name": "Spores (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demon emits a horrific screech. Each creature within 20 feet of it\
    \ that can hear it and that isn't a demon must succeed on a DC 14 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the demon's next turn."
  "name": "Stunning Screech (1/Day)"
"source":
- "PSZ"
"image": "[[Pestilence Demon.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 27*
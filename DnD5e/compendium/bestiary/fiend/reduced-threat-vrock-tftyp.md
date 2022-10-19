---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/fiend/demon
aliases: ["Reduced-Threat Vrock"]
statblock: true
"name": "Reduced-Threat Vrock"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "52"
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
  "Charisma": !!int "0"
  "Dexterity": !!int "3"
  "Wisdom": !!int "2"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The\
    \ spores spread around corners. Each creature in that area must succeed on a DC\
    \ 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 5 (1d10) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. Emptying a vial of holy water on the target also ends the effect\
    \ on it."
  "name": "Spores (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock emits a horrific screech. Each creature within 20 feet of it\
    \ that can hear it and that isn't a demon must succeed on a DC 12 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the vrock's next turn."
  "name": "Stunning Screech (1/Day)"
"source":
- "TftYP"
name: Reduced-Threat Vrock
image: "[[Reduced-Threat Vrock.png]]"
---

# Reduced-Threat Vrock

```statblock
"name": "Reduced-Threat Vrock"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "52"
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
  "Charisma": !!int "0"
  "Dexterity": !!int "3"
  "Wisdom": !!int "2"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 14 (2d10\
    \ + 3) slashing damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The\
    \ spores spread around corners. Each creature in that area must succeed on a DC\
    \ 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 5 (1d10) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. Emptying a vial of holy water on the target also ends the effect\
    \ on it."
  "name": "Spores (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vrock emits a horrific screech. Each creature within 20 feet of it\
    \ that can hear it and that isn't a demon must succeed on a DC 12 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the vrock's next turn."
  "name": "Stunning Screech (1/Day)"
"source":
- "TftYP"
"image": "[[Reduced-Threat Vrock.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*
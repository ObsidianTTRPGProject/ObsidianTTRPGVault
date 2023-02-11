---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/urban
aliases: ["West Wind"]
statblock: true
"name": "West Wind"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "11"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "16"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Acrobatics": !!int "5"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "West Wind is armed with a longsword that is a blade of the medusa."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While West Wind is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "West Wind makes three unarmed strikes or three dart attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage. If the target is a creature, West Wind can choose one\
    \ of the following additional effects:\n\n- The target must succeed on a DC 13\
    \ Strength saving throw or drop one item it is holding (adept's choice).\n- The\
    \ target must succeed on a DC 13 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone).\n\
    - The target must succeed on a DC 13 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of West Wind's next turn."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage."
  "name": "Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., one creature.\
    \ Hit: 7 (1d8 + 3) piercing damage. If West Wind rolls a 20 on the attack roll,\
    \ the target must succeed on a DC 15 Constitution saving throw or suffer the effects\
    \ of a [flesh to stone](/compendium/spells/flesh-to-stone.md) spell."
  "name": "Blade of the Medusa"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, West Wind deflects\
    \ the missile. The damage it takes from the attack is reduced by 1d10 + 3. If\
    \ the damage is reduced to 0, West Wind catches the missile if it's small enough\
    \ to hold in one hand and West Wind has a hand free."
  "name": "Deflect Missile"
"source":
- "LLK"
name: West Wind
image: "[[West Wind.png]]"
---

# West Wind

```statblock
"name": "West Wind"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "11"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "16"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Acrobatics": !!int "5"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "West Wind is armed with a longsword that is a blade of the medusa."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While West Wind is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "West Wind makes three unarmed strikes or three dart attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage. If the target is a creature, West Wind can choose one\
    \ of the following additional effects:\n\n- The target must succeed on a DC 13\
    \ Strength saving throw or drop one item it is holding (adept's choice).\n- The\
    \ target must succeed on a DC 13 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone).\n\
    - The target must succeed on a DC 13 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of West Wind's next turn."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage."
  "name": "Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., one creature.\
    \ Hit: 7 (1d8 + 3) piercing damage. If West Wind rolls a 20 on the attack roll,\
    \ the target must succeed on a DC 15 Constitution saving throw or suffer the effects\
    \ of a [flesh to stone](/compendium/spells/flesh-to-stone.md) spell."
  "name": "Blade of the Medusa"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, West Wind deflects\
    \ the missile. The damage it takes from the attack is reduced by 1d10 + 3. If\
    \ the damage is reduced to 0, West Wind catches the missile if it's small enough\
    \ to hold in one hand and West Wind has a hand free."
  "name": "Deflect Missile"
"source":
- "LLK"
"image": "[[West Wind.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 14*

## Environment

urban
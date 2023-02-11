---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/yugoloth
- monster/environment/desert
- monster/environment/underdark
aliases: ["Oinoloth"]
statblock: true
"name": "Oinoloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "19"
- !!int "17"
- !!int "18"
- !!int "17"
- !!int "16"
- !!int "19"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) slashing damage plus 22 (4d10) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth touches one willing creature within 5 feet of it. The target\
    \ regains all its hit points. In addition, the oinoloth can end one disease on\
    \ the target or remove one of the following conditions from it: [blinded](/rules/conditions.md#blinded),\
    \ [deafened](/rules/conditions.md#deafened), [paralyzed](/rules/conditions.md#paralyzed),\
    \ or [poisoned](/rules/conditions.md#poisoned). The target then gains 1 level\
    \ of [exhaustion](/rules/conditions.md#exhaustion), and its hit point maximum\
    \ is reduced by 7 (2d6). This reduction can be removed only by a [wish](/compendium/spells/wish.md)\
    \ spell or by casting [greater restoration](/compendium/spells/greater-restoration.md)\
    \ on the target three times within the same hour. The target dies if its hit point\
    \ maximum is reduced to 0."
  "name": "Corrupted Healing (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth blights the area in a 30-foot-radius sphere centered on itself.\
    \ The blight lasts for 24 hours. While the area is blighted, all normal plants\
    \ there wither and die.\n\nFurthermore, when a creature moves into the blighted\
    \ area or starts its turn there, that creature must make a DC 16 Constitution\
    \ saving throw. On a failed save, the creature takes 14 (4d6) poison damage and\
    \ is [poisoned](/rules/conditions.md#poisoned). On a successful save, the creature\
    \ is immune to the oinoloth's Bringer of Plagues for the next 24 hours.\n\nThe\
    \ [poisoned](/rules/conditions.md#poisoned) creature can't regain hit points.\
    \ After every 24 hours that elapse, the [poisoned](/rules/conditions.md#poisoned)\
    \ creature can repeat the saving throw. On a failed save, the creature's hit point\
    \ maximum is reduced by 5 (1d10). This reduction lasts until the poison ends,\
    \ and the target dies if its hit point maximum is reduced to 0. The poison ends\
    \ after the creature successfully saves against it three times."
  "name": "Bringer of Plagues (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
name: Oinoloth
image: "[[Oinoloth.png]]"
---

# Oinoloth

```statblock
"name": "Oinoloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "19"
- !!int "17"
- !!int "18"
- !!int "17"
- !!int "16"
- !!int "19"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only)\n\n1/day each:\
    \ [feeblemind](/compendium/spells/feeblemind.md), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) slashing damage plus 22 (4d10) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth touches one willing creature within 5 feet of it. The target\
    \ regains all its hit points. In addition, the oinoloth can end one disease on\
    \ the target or remove one of the following conditions from it: [blinded](/rules/conditions.md#blinded),\
    \ [deafened](/rules/conditions.md#deafened), [paralyzed](/rules/conditions.md#paralyzed),\
    \ or [poisoned](/rules/conditions.md#poisoned). The target then gains 1 level\
    \ of [exhaustion](/rules/conditions.md#exhaustion), and its hit point maximum\
    \ is reduced by 7 (2d6). This reduction can be removed only by a [wish](/compendium/spells/wish.md)\
    \ spell or by casting [greater restoration](/compendium/spells/greater-restoration.md)\
    \ on the target three times within the same hour. The target dies if its hit point\
    \ maximum is reduced to 0."
  "name": "Corrupted Healing (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The oinoloth blights the area in a 30-foot-radius sphere centered on itself.\
    \ The blight lasts for 24 hours. While the area is blighted, all normal plants\
    \ there wither and die.\n\nFurthermore, when a creature moves into the blighted\
    \ area or starts its turn there, that creature must make a DC 16 Constitution\
    \ saving throw. On a failed save, the creature takes 14 (4d6) poison damage and\
    \ is [poisoned](/rules/conditions.md#poisoned). On a successful save, the creature\
    \ is immune to the oinoloth's Bringer of Plagues for the next 24 hours.\n\nThe\
    \ [poisoned](/rules/conditions.md#poisoned) creature can't regain hit points.\
    \ After every 24 hours that elapse, the [poisoned](/rules/conditions.md#poisoned)\
    \ creature can repeat the saving throw. On a failed save, the creature's hit point\
    \ maximum is reduced by 5 (1d10). This reduction lasts until the poison ends,\
    \ and the target dies if its hit point maximum is reduced to 0. The poison ends\
    \ after the creature successfully saves against it three times."
  "name": "Bringer of Plagues (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Oinoloth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 202, Mordenkainen's Tome of Foes p. 251*

## Description

Grim specters of death, oinoloths bring pestilence wherever they go. When armies recognize their awful forms, their mere appearance causes soldiers to break ranks and flee, lest they succumb to one of the awful plagues that oinoloths let loose.

Oinoloths solve thorny problems by killing everyone involved. They are typically hired as a last resort when a siege has gone on too long or an army has proven too strong to overcome. Once summoned, oinoloths stalk the killing field, poisoning the ground and sickening creatures they encounter. Sometimes they might be hired to lift the very plagues they spread, but the price for such work is high, and the effort turns the creatures they save into debilitated wrecks.

## Environment

desert, underdark
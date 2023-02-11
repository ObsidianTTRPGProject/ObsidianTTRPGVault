---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/paladin
- monster/environment/underdark
- monster/environment/urban
aliases: ["Blackguard"]
statblock: true
"name": "Blackguard"
"size": "Medium"
"type": "humanoid"
"subtype": "paladin"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "18"
- !!int "11"
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "7"
  "Deception": !!int "5"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blackguard casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 13):\n\n2/day each: [command](/compendium/spells/command.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [find steed](/compendium/spells/find-steed.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blackguard makes three attacks, using Glaive, Shortbow, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) slashing damage plus 9 (2d8) necrotic damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom\
    \ saving throw or be [frightened](/rules/conditions.md#frightened) of the blackguard\
    \ for 1 minute. If a [frightened](/rules/conditions.md#frightened) target ends\
    \ its turn more than 30 feet away from the blackguard, the target can repeat the\
    \ saving throw, ending the effect on itself on a success."
  "name": "Dreadful Aspect (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the blackguard hits a target with an attack roll, the\
    \ blackguard can force that target to make a DC 13 Constitution saving throw.\
    \ On a failed save, the target suffers one of the following effects of the blackguard's\
    \ choice:"
  "name": "Smite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [blinded](/rules/conditions.md#blinded) for 1 minute. The\
    \ [blinded](/rules/conditions.md#blinded) target can repeat the save at the end\
    \ of each of its turns, ending the effect on itself on a success."
  "name": "Blind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Shove"
"source":
- "MPMM"
- "VGM"
name: Blackguard
image: "[[Blackguard.png]]"
---

# Blackguard

```statblock
"name": "Blackguard"
"size": "Medium"
"type": "humanoid"
"subtype": "paladin"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "18"
- !!int "11"
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "7"
  "Deception": !!int "5"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blackguard casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 13):\n\n2/day each: [command](/compendium/spells/command.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [find steed](/compendium/spells/find-steed.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blackguard makes three attacks, using Glaive, Shortbow, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) slashing damage plus 9 (2d8) necrotic damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom\
    \ saving throw or be [frightened](/rules/conditions.md#frightened) of the blackguard\
    \ for 1 minute. If a [frightened](/rules/conditions.md#frightened) target ends\
    \ its turn more than 30 feet away from the blackguard, the target can repeat the\
    \ saving throw, ending the effect on itself on a success."
  "name": "Dreadful Aspect (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after the blackguard hits a target with an attack roll, the\
    \ blackguard can force that target to make a DC 13 Constitution saving throw.\
    \ On a failed save, the target suffers one of the following effects of the blackguard's\
    \ choice:"
  "name": "Smite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [blinded](/rules/conditions.md#blinded) for 1 minute. The\
    \ [blinded](/rules/conditions.md#blinded) target can repeat the save at the end\
    \ of each of its turns, ending the effect on itself on a success."
  "name": "Blind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Shove"
"source":
- "MPMM"
- "VGM"
"image": "[[Blackguard.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 63, Volo's Guide to Monsters p. 211*

## Description

Blackguards are paladins who broke their sacred oaths and now indulge their own villainous ambitions. They consort with Fiends and Undead, and they reject many of the goodly things from their former lives.

Blackguards often adorn their armor and weapons with dread accoutrements or are marked by eerie phenomena. You may choose a blackguard's accoutrement or roll on the Blackguard Accoutrements table to determine it.

**Blackguard Accoutrements**

| dice: d8 | Accoutrement |
|----------|--------------|
| 1 | Armor etched with stylized depictions of gruesome battles |
| 2 | Helm wrought in the shape of a demonic boar |
| 3 | Helm wrought to resemble a death mask |
| 4 | Cloak decorated with bloody handprints |
| 5 | Curls of inky smoke seeping from armor at the joints |
| 6 | Dozens of flies buzzing about the blackguard |
| 7 | Severed hand hanging from a chain around the blackguard's neck |
| 8 | Glaive adorned with a length of cloth bearing the words "I choose violence" |
^blackguard-accoutrements

## Environment

underdark, urban
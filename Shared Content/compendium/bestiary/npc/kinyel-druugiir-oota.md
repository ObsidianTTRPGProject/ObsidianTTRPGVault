---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/urban
aliases: ["Kinyel Druu'giir"]
statblock: true
"name": "Kinyel Druu'giir"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Thieves' cant plus any two languages, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kinyel druu'giir's innate spellcasting ability is Charisma (spell save\
    \ DC 11). The kinyel druu'giir can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Kinyel has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Kinyel scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Kinyel is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, Kinyel instead takes no damage if it\
    \ succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kinyel deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Kinyel that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Kinyel doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kinyel druu'giir has advantage on saving throws against being charmed,\
    \ and magic can't put the kinyel druu'giir to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kinyel druu'giir has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kinyel makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
"source":
- "OotA"
name: Kinyel Druu'giir
image: "[[Kinyel Druu'giir.png]]"
---

# Kinyel Druu'giir

```statblock
"name": "Kinyel Druu'giir"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Thieves' cant plus any two languages, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kinyel druu'giir's innate spellcasting ability is Charisma (spell save\
    \ DC 11). The kinyel druu'giir can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Kinyel has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Kinyel scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Kinyel is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, Kinyel instead takes no damage if it\
    \ succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kinyel deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Kinyel that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Kinyel doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kinyel druu'giir has advantage on saving throws against being charmed,\
    \ and magic can't put the kinyel druu'giir to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kinyel druu'giir has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kinyel makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
"source":
- "OotA"
"image": "[[Kinyel Druu'giir.png]]"
```
^statblock

*Source: Out of the Abyss p. 134*

## Environment

urban
---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/monk
- monster/type/humanoid/wizard
aliases: ["Jamil A'alithiya"]
statblock: true
"name": "Jamil A'alithiya"
"size": "Medium"
"type": "humanoid"
"subtype": "human, monk, wizard"
"alignment": "Chaotic Good"
"ac": !!int "19"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "22"
- !!int "17"
"speed": "walk 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
"skillsaves":
  "Investigation": !!int "8"
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "charmed"
"senses": "blindsight 30 ft., passive Perception 20"
"languages": "Common plus four other languages"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md)\n\n2/day each: [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [identify](/compendium/spells/identify.md)\
    \ (as an action), [scrying](/compendium/spells/scrying.md) (as an action)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Jamil is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil makes three Force Strike attacks and uses Brain Burn (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +10 to hit, reach 5 ft. or range 10 ft.,\
    \ one target. Hit: 17 (2d10 + 6) force damage."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil targets up to two creatures it can see within 30 feet of itself.\
    \ Each target must make a DC 18 Constitution saving throw. On a failed saving\
    \ throw, the target takes 28 (8d6) psychic damage and can't take reactions until\
    \ the start of its next turn. On a successful save, the target takes half as much\
    \ damage and suffers no other effect."
  "name": "Brain Burn (Recharge 4-6)"
"source":
- "CRCotN"
name: Jamil A'alithiya
image: "[[Jamil A'alithiya.png]]"
---

# Jamil A'alithiya

```statblock
"name": "Jamil A'alithiya"
"size": "Medium"
"type": "humanoid"
"subtype": "human, monk, wizard"
"alignment": "Chaotic Good"
"ac": !!int "19"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "22"
- !!int "17"
"speed": "walk 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
"skillsaves":
  "Investigation": !!int "8"
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "charmed"
"senses": "blindsight 30 ft., passive Perception 20"
"languages": "Common plus four other languages"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md)\n\n2/day each: [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [identify](/compendium/spells/identify.md)\
    \ (as an action), [scrying](/compendium/spells/scrying.md) (as an action)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Jamil is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil makes three Force Strike attacks and uses Brain Burn (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +10 to hit, reach 5 ft. or range 10 ft.,\
    \ one target. Hit: 17 (2d10 + 6) force damage."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jamil targets up to two creatures it can see within 30 feet of itself.\
    \ Each target must make a DC 18 Constitution saving throw. On a failed saving\
    \ throw, the target takes 28 (8d6) psychic damage and can't take reactions until\
    \ the start of its next turn. On a successful save, the target takes half as much\
    \ damage and suffers no other effect."
  "name": "Brain Burn (Recharge 4-6)"
"source":
- "CRCotN"
"image": "[[Jamil A'alithiya.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 201*
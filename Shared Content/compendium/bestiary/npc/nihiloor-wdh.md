---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/aberration
- monster/environment/underdark
aliases: ["Nihiloor"]
statblock: true
"name": "Nihiloor"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor's innate spellcasting ability is Intelligence (spell save DC 15).\
    \ It can innately cast the following spells, requiring no components:\n\nAt\
    \ will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by Nihiloor. Hit: The target\
    \ takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit\
    \ points, Nihiloor kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor magically emits psychic energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8\
    \ + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "WDH"
name: Nihiloor
image: "[[Nihiloor.png]]"
---

# Nihiloor

```statblock
"name": "Nihiloor"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor's innate spellcasting ability is Intelligence (spell save DC 15).\
    \ It can innately cast the following spells, requiring no components:\n\nAt\
    \ will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by Nihiloor. Hit: The target\
    \ takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit\
    \ points, Nihiloor kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nihiloor magically emits psychic energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8\
    \ + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for 1 minute.\
    \ A creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "WDH"
"image": "[[Nihiloor.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 212*

## Environment

underdark
---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["First-Year Student"]
statblock: true
"name": "First-Year Student"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "8"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "Common plus any two languages"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The student casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 11):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day: [detect\
    \ magic](/compendium/spells/detect-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The student has advantage on initiative rolls."
  "name": "Excited to Be Here"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +3 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 7 (1d12 + 1) force damage."
  "name": "Magic Flare"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the student fails a saving throw, it can reroll the d20. It must use\
    \ the new roll."
  "name": "Beginner's Luck (2/Day)"
"source":
- "SCC"
name: First-Year Student
image: "[[First-Year Student.png]]"
---

# First-Year Student

```statblock
"name": "First-Year Student"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "8"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "Common plus any two languages"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The student casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 11):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day: [detect\
    \ magic](/compendium/spells/detect-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The student has advantage on initiative rolls."
  "name": "Excited to Be Here"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +3 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 7 (1d12 + 1) force damage."
  "name": "Magic Flare"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the student fails a saving throw, it can reroll the d20. It must use\
    \ the new roll."
  "name": "Beginner's Luck (2/Day)"
"source":
- "SCC"
"image": "[[First-Year Student.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 191*

## Description

A student who has not yet chosen one of Strixhaven's five mystic colleges is referred to as a first-year student, after the one year of basic curriculum that most students must complete before selecting their school. These beginner students are taught by faculty from all of Strixhaven's colleges, learning rudimentary magic as they acclimate to the university's environment. Once a student has selected a college, they trade their plain gray first-year uniforms for the trappings of their chosen school and begin honing—or even replacing—the magic they learned in their initial year with other skills.
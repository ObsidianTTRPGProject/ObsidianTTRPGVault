---
cssclass: json5e-monster
tags:
- compendium/src/hol
- monster/size/medium
- monster/type/humanoid
aliases: ["Disciple"]
statblock: true
"name": "Disciple"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "12"
- !!int "9"
- !!int "10"
- !!int "11"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Religion": !!int "2"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You cast one the following cleric spells (spell save DC 11), using Wisdom\
    \ as the spellcasting ability:\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ \n\n2/day: [cure wounds](/compendium/spells/cure-wounds.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You target one creature you can see within 60 feet of you. The target must\
    \ succeed on a DC 11 Dexterity saving throw or take 4 (1d8) radiant damage. The\
    \ target gains no benefit from cover for this saving throw."
  "name": "Sacred Flame (Cantrip)"
"source":
- "HoL"
name: Disciple
image: "[[Disciple.png]]"
---

# Disciple

```statblock
"name": "Disciple"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "12"
- !!int "9"
- !!int "10"
- !!int "11"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Religion": !!int "2"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You cast one the following cleric spells (spell save DC 11), using Wisdom\
    \ as the spellcasting ability:\n\nAt will: [guidance](/compendium/spells/guidance.md),\
    \ \n\n2/day: [cure wounds](/compendium/spells/cure-wounds.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You target one creature you can see within 60 feet of you. The target must\
    \ succeed on a DC 11 Dexterity saving throw or take 4 (1d8) radiant damage. The\
    \ target gains no benefit from cover for this saving throw."
  "name": "Sacred Flame (Cantrip)"
"source":
- "HoL"
"image": "[[Disciple.png]]"
```
^statblock

*Source: The House of Lament p. 201*
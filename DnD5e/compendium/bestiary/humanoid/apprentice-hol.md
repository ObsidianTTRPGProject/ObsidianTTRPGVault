---
cssclass: json5e-monster
tags:
- compendium/src/hol
- monster/size/medium
- monster/type/humanoid
aliases: ["Apprentice"]
statblock: true
"name": "Apprentice"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "7"
"hit_dice": "2d8 - 2"
"stats":
- !!int "8"
- !!int "10"
- !!int "9"
- !!int "13"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "3"
"skillsaves":
  "History": !!int "3"
  "Arcana": !!int "3"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You cast one of the following wizard spells (spell save DC 11), using Intelligence\
    \ as the spellcasting ability:\n\nAt will: [minor illusion](/compendium/spells/minor-illusion.md),\
    \ \n\n2/day: [grease](/compendium/spells/grease.md)\n\n2/day each: "
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You shoot forth a 15-foot cone of fire. Each creature in that area must\
    \ make a DC 11 Dexterity saving throw. A creature takes 10 (3d6) fire damage on\
    \ a failed save, or half as much damage on a successful one The fire ignites any\
    \ flammable objects in the area that aren't being worn or carried."
  "name": "Burning Hands (1st-Level Spell; 2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: Ranged Spell Attack: +3 to hit, range 120 ft., one\
    \ target. Hit: 5 (1d10) fire damage. A flammable object hit by this spell ignites\
    \ if it isn't being worn or carried."
  "name": "Fire Bolt (Cantrip)"
"source":
- "HoL"
name: Apprentice
image: "[[Apprentice.png]]"
---

# Apprentice

```statblock
"name": "Apprentice"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "7"
"hit_dice": "2d8 - 2"
"stats":
- !!int "8"
- !!int "10"
- !!int "9"
- !!int "13"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Intelligence": !!int "3"
"skillsaves":
  "History": !!int "3"
  "Arcana": !!int "3"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You cast one of the following wizard spells (spell save DC 11), using Intelligence\
    \ as the spellcasting ability:\n\nAt will: [minor illusion](/compendium/spells/minor-illusion.md),\
    \ \n\n2/day: [grease](/compendium/spells/grease.md)\n\n2/day each: "
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "You shoot forth a 15-foot cone of fire. Each creature in that area must\
    \ make a DC 11 Dexterity saving throw. A creature takes 10 (3d6) fire damage on\
    \ a failed save, or half as much damage on a successful one The fire ignites any\
    \ flammable objects in the area that aren't being worn or carried."
  "name": "Burning Hands (1st-Level Spell; 2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: Ranged Spell Attack: +3 to hit, range 120 ft., one\
    \ target. Hit: 5 (1d10) fire damage. A flammable object hit by this spell ignites\
    \ if it isn't being worn or carried."
  "name": "Fire Bolt (Cantrip)"
"source":
- "HoL"
"image": "[[Apprentice.png]]"
```
^statblock

*Source: The House of Lament p. 201*
---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/human
aliases: ["Mercion"]
statblock: true
"name": "Mercion"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, human"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "31"
"hit_dice": "9d8 - 9"
"stats":
- !!int "15"
- !!int "10"
- !!int "9"
- !!int "12"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Medicine": !!int "5"
  "Insight": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day: [death\
    \ ward](/compendium/spells/death-ward.md)\n\n2/day each: [command](/compendium/spells/command.md),\
    \ [create food and water](/compendium/spells/create-food-and-water.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [hold person](/compendium/spells/hold-person.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion wields a +1 quarterstaff."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion makes one Divine Radiance attack and one +1 Quarterstaff attack.\
    \ She can replace one of these attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (3d8) radiant damage."
  "name": "Divine Radiance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage when used with two\
    \ hands."
  "name": "+1 Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion creates a magical explosion of fiery radiance centered on a point\
    \ she can see within 120 feet of her. Each creature in a 20-foot-radius sphere\
    \ centered on that point must make a DC 13 Dexterity saving throw, taking 28 (8d6)\
    \ radiant damage on a failed save, or half as much damage on a successful one."
  "name": "Radiant Fire (Recharge 5-6)"
"source":
- "WBtW"
name: Mercion
image: "[[Mercion.png]]"
---

# Mercion

```statblock
"name": "Mercion"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, human"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "31"
"hit_dice": "9d8 - 9"
"stats":
- !!int "15"
- !!int "10"
- !!int "9"
- !!int "12"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Medicine": !!int "5"
  "Insight": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day: [death\
    \ ward](/compendium/spells/death-ward.md)\n\n2/day each: [command](/compendium/spells/command.md),\
    \ [create food and water](/compendium/spells/create-food-and-water.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [hold person](/compendium/spells/hold-person.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion wields a +1 quarterstaff."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion makes one Divine Radiance attack and one +1 Quarterstaff attack.\
    \ She can replace one of these attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (3d8) radiant damage."
  "name": "Divine Radiance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage when used with two\
    \ hands."
  "name": "+1 Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mercion creates a magical explosion of fiery radiance centered on a point\
    \ she can see within 120 feet of her. Each creature in a 20-foot-radius sphere\
    \ centered on that point must make a DC 13 Dexterity saving throw, taking 28 (8d6)\
    \ radiant damage on a failed save, or half as much damage on a successful one."
  "name": "Radiant Fire (Recharge 5-6)"
"source":
- "WBtW"
"image": "[[Mercion.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 224*

## Description

Mercion strikes the balance of a natural leader and a protective caregiver. She has a direct manner that reassures and inspires those around her.

Mercion does not worship a deity, but rather an ideal: that truth gives life to artistry and beauty, and that those who embrace deceit should be censured and punished. Light is her domain.
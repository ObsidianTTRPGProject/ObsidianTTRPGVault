---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/wizard
aliases: ["Ringlerun"]
statblock: true
"name": "Ringlerun"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "12d8 - 12"
"stats":
- !!int "9"
- !!int "10"
- !!int "9"
- !!int "17"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Strength": !!int "2"
  "Constitution": !!int "2"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [knock](/compendium/spells/knock.md)\n\n3/day\
    \ each: [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun wields a [staff of power](/compendium/items/staff-of-power.md).\
    \ It has 20 charges when fully charged and regains 2d8 + 4 expended charges daily\
    \ at dawn. If its last charge is expended, roll a d20. On a 1, the staff retains\
    \ its +2 bonus to attack and damage rolls but loses its other properties; on a\
    \ 20, it regains 1d8 + 2 charges."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun makes three [staff of power](/compendium/items/staff-of-power.md)\
    \ or Freezing Ray attacks. He can replace one of those attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage when used with two\
    \ hands, and Ringlerun can expend 1 of the staff's charges to deal an extra 3\
    \ (1d6) force damage."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 120 ft., one creature. Hit: 27\
    \ (6d8) cold damage."
  "name": "Freezing Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding his [staff of power](/compendium/items/staff-of-power.md),\
    \ Ringlerun can expend 1 or more of its charges to cast one of the following spells\
    \ from it (spell save DC 14, +8 to hit with spell attacks): cone of cold (8d8\
    \ cold damage; 5 charges), fireball (10d6 fire damage; 5 charges), globe of invulnerability\
    \ (6 charges), hold monster (5 charges), levitate (2 charges), lightning bolt\
    \ (10d6 lightning damage; 5 charges), magic missile (1 charge), ray of enfeeblement\
    \ (1 charge), or wall of force (5 charges)."
  "name": "Staff Spell"
"source":
- "WBtW"
name: Ringlerun
image: "[[Ringlerun.png]]"
---

# Ringlerun

```statblock
"name": "Ringlerun"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "12d8 - 12"
"stats":
- !!int "9"
- !!int "10"
- !!int "9"
- !!int "17"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Strength": !!int "2"
  "Constitution": !!int "2"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [knock](/compendium/spells/knock.md)\n\n3/day\
    \ each: [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun wields a [staff of power](/compendium/items/staff-of-power.md).\
    \ It has 20 charges when fully charged and regains 2d8 + 4 expended charges daily\
    \ at dawn. If its last charge is expended, roll a d20. On a 1, the staff retains\
    \ its +2 bonus to attack and damage rolls but loses its other properties; on a\
    \ 20, it regains 1d8 + 2 charges."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ringlerun makes three [staff of power](/compendium/items/staff-of-power.md)\
    \ or Freezing Ray attacks. He can replace one of those attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage when used with two\
    \ hands, and Ringlerun can expend 1 of the staff's charges to deal an extra 3\
    \ (1d6) force damage."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 120 ft., one creature. Hit: 27\
    \ (6d8) cold damage."
  "name": "Freezing Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding his [staff of power](/compendium/items/staff-of-power.md),\
    \ Ringlerun can expend 1 or more of its charges to cast one of the following spells\
    \ from it (spell save DC 14, +8 to hit with spell attacks): cone of cold (8d8\
    \ cold damage; 5 charges), fireball (10d6 fire damage; 5 charges), globe of invulnerability\
    \ (6 charges), hold monster (5 charges), levitate (2 charges), lightning bolt\
    \ (10d6 lightning damage; 5 charges), magic missile (1 charge), ray of enfeeblement\
    \ (1 charge), or wall of force (5 charges)."
  "name": "Staff Spell"
"source":
- "WBtW"
"image": "[[Ringlerun.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 227*

## Description

Ringlerun became an adventurer to better satisfy his craving for arcane knowledge. One of his adventures took him into an underwater tomb, where he tricked a marid into surrendering a staff of power. This staff greatly increased Ringlerun's capabilities and made him the envy of many rival spellcasters.

Ringlerun has a good heart, but he's easily distracted by intellectual pursuits. He would rather spend time in quiet contemplation or reading than in frivolous conversation.
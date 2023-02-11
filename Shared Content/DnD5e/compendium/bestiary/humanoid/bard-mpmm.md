---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/urban
aliases: ["Bard"]
statblock: true
"name": "Bard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard makes two Shortsword or Shortbow attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 15-foot cube originating from the bard must make a DC\
    \ 12 Constitution saving throw. On a failed save, a creature takes 9 (2d8) thunder\
    \ damage and is pushed up to 10 feet away from the bard. On a successful save,\
    \ a creature takes half as much damage and isn't pushed."
  "name": "Cacophony (Recharge 4-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard targets one creature within 30 feet of it. If the target can hear\
    \ the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage\
    \ on ability checks, attack rolls, and saving throws until the start of the bard's\
    \ next turn."
  "name": "Taunt (2/Day)"
"source":
- "MPMM"
- "VGM"
name: Bard
image: "[[Bard.png]]"
---

# Bard

```statblock
"name": "Bard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard makes two Shortsword or Shortbow attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature in a 15-foot cube originating from the bard must make a DC\
    \ 12 Constitution saving throw. On a failed save, a creature takes 9 (2d8) thunder\
    \ damage and is pushed up to 10 feet away from the bard. On a successful save,\
    \ a creature takes half as much damage and isn't pushed."
  "name": "Cacophony (Recharge 4-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bard targets one creature within 30 feet of it. If the target can hear\
    \ the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage\
    \ on ability checks, attack rolls, and saving throws until the start of the bard's\
    \ next turn."
  "name": "Taunt (2/Day)"
"source":
- "MPMM"
- "VGM"
"image": "[[Bard.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 59, Volo's Guide to Monsters p. 211*

## Description

Bards are gifted poets, storytellers, and entertainers who travel far and wide. They're commonly found in taverns or in the company of jolly bands of adventurers, rough-and-tumble mercenaries, and wealthy patrons.

Each bard is a master of at least one type of performance. You may choose a bard's main type, or you may roll on the Bard [Performance](/rules/skills.md#Performance) Types table to determine it.

**Bard Performance Types**

| dice: d10 | Performance Type |
|-----------|------------------|
| 1 | Poetry |
| 2 | Singing |
| 3 | Bagpipe |
| 4 | Flute |
| 5 | Dancing |
| 6 | Drum |
| 7 | Lute |
| 8 | Puppetry |
| 9 | Mime |
| 10 | Acting |
^bard-performance-types

## Environment

urban
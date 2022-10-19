---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/wizard
aliases: ["Oracle of Strixhaven"]
statblock: true
"name": "Oracle of Strixhaven"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "12"
- !!int "15"
- !!int "16"
- !!int "21"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft., fly 15 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Intelligence": !!int "10"
  "Constitution": !!int "8"
"skillsaves":
  "Nature": !!int "10"
  "Investigation": !!int "15"
  "Insight": !!int "15"
  "Perception": !!int "10"
  "Arcana": !!int "15"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 20"
"languages": "all"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md)\n\n1/day each:\
    \ [power word stun](/compendium/spells/power-word-stun.md), [scrying](/compendium/spells/scrying.md)\
    \ (as an action), [wall of force](/compendium/spells/wall-of-force.md)\n\n2/day\
    \ each: [dispel magic](/compendium/spells/dispel-magic.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the Oracle fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle makes two Magic Flare attacks. She can also use Paradoxy, if\
    \ available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +10 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 24 (3d12 + 5) force damage."
  "name": "Magic Flare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Momentary warps in reality appear at three different points the Oracle\
    \ can see within 120 feet of her. Each creature in a 20-foot-radius sphere centered\
    \ on each point must make a DC 18 Strength saving throw. On a failed save, a creature\
    \ takes 33 (6d10) force damage and is pulled up to 15 feet in a straight line\
    \ toward the center of the sphere. On a successful save, the creature takes half\
    \ as much damage and isn't pulled. A creature caught in the area of multiple warps\
    \ is affected by only one, which the Oracle chooses."
  "name": "Paradoxy (Recharge 4-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle teleports, along with any equipment she is wearing or carrying,\
    \ to an unoccupied space she can see within 60 feet of herself."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle teleports one creature she can see within 60 feet of herself,\
    \ along with any equipment it is wearing or carrying, to an unoccupied space within\
    \ 30 feet of herself. An unwilling target must succeed on a DC 18 Charisma saving\
    \ throw to avoid the effect."
  "name": "Vector Shift"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle uses Spellcasting."
  "name": "Spellcasting (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle uses Teleport, and immediately after she disappears, each creature\
    \ within 30 feet of the space she left must succeed on a DC 18 Constitution saving\
    \ throw or take 16 (3d10) force damage."
  "name": "Vortex Jaunt (Costs 2 Actions)"
"source":
- "SCC"
name: Oracle of Strixhaven
image: "[[Oracle of Strixhaven.png]]"
---

# Oracle of Strixhaven

```statblock
"name": "Oracle of Strixhaven"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "12"
- !!int "15"
- !!int "16"
- !!int "21"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft., fly 15 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Intelligence": !!int "10"
  "Constitution": !!int "8"
"skillsaves":
  "Nature": !!int "10"
  "Investigation": !!int "15"
  "Insight": !!int "15"
  "Perception": !!int "10"
  "Arcana": !!int "15"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 20"
"languages": "all"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md)\n\n1/day each:\
    \ [power word stun](/compendium/spells/power-word-stun.md), [scrying](/compendium/spells/scrying.md)\
    \ (as an action), [wall of force](/compendium/spells/wall-of-force.md)\n\n2/day\
    \ each: [dispel magic](/compendium/spells/dispel-magic.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the Oracle fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle makes two Magic Flare attacks. She can also use Paradoxy, if\
    \ available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +10 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 24 (3d12 + 5) force damage."
  "name": "Magic Flare"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Momentary warps in reality appear at three different points the Oracle\
    \ can see within 120 feet of her. Each creature in a 20-foot-radius sphere centered\
    \ on each point must make a DC 18 Strength saving throw. On a failed save, a creature\
    \ takes 33 (6d10) force damage and is pulled up to 15 feet in a straight line\
    \ toward the center of the sphere. On a successful save, the creature takes half\
    \ as much damage and isn't pulled. A creature caught in the area of multiple warps\
    \ is affected by only one, which the Oracle chooses."
  "name": "Paradoxy (Recharge 4-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle teleports, along with any equipment she is wearing or carrying,\
    \ to an unoccupied space she can see within 60 feet of herself."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle teleports one creature she can see within 60 feet of herself,\
    \ along with any equipment it is wearing or carrying, to an unoccupied space within\
    \ 30 feet of herself. An unwilling target must succeed on a DC 18 Charisma saving\
    \ throw to avoid the effect."
  "name": "Vector Shift"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle uses Spellcasting."
  "name": "Spellcasting (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Oracle uses Teleport, and immediately after she disappears, each creature\
    \ within 30 feet of the space she left must succeed on a DC 18 Constitution saving\
    \ throw or take 16 (3d10) force damage."
  "name": "Vortex Jaunt (Costs 2 Actions)"
"source":
- "SCC"
"image": "[[Oracle of Strixhaven.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 200*

## Description

Somewhere in the lands beyond Strixhaven's borders lives the Oracle: a wise and accomplished mage, tasked by the Founder Dragons to ensure that the magic of Strixhaven is used to help others and not twisted to evil ends. The one who holds the mantle of the Oracle must not only understand the fundamental truths of magic, but also possess impeccable wisdom and unshakable virtue.

The current Oracle is an elderly human named Jadzi. A graduate of Quandrix College, Jadzi has since expanded her studies to encompass all disciplines of spellcasting, tempering the mathematical abstractions she wielded at Strixhaven with benevolent divination and a return to the basics of magic itself.
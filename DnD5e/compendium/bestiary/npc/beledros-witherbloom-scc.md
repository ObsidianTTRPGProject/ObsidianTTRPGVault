---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/gargantuan
- monster/type/dragon/druid
aliases: ["Beledros Witherbloom"]
statblock: true
"name": "Beledros Witherbloom"
"size": "Gargantuan"
"type": "dragon"
"subtype": "druid"
"alignment": "Neutral Good"
"ac": !!int "22"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"stats":
- !!int "28"
- !!int "14"
- !!int "27"
- !!int "18"
- !!int "28"
- !!int "17"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "9"
  "Wisdom": !!int "16"
  "Constitution": !!int "15"
"skillsaves":
  "Medicine": !!int "16"
  "Nature": !!int "18"
  "Perception": !!int "16"
  "Arcana": !!int "18"
"damage_immunities": "necrotic, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 120 ft., passive Perception 26"
"languages": "Common, Draconic, Druidic, Sylvan"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability:\n\n1/day each: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [plant growth](/compendium/spells/plant-growth.md),\
    \ [revivify](/compendium/spells/revivify.md), [speak with dead](/compendium/spells/speak-with-dead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Beledros fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros doesn't require air, food, or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 14 (1d10\
    \ + 9) piercing damage plus 6 (1d12) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 12 (1d6\
    \ + 9) slashing damage. If the target is a Huge or smaller creature, it is knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros exhales decaying energy in a 90-foot cone. Each creature in that\
    \ area must make a DC 23 Constitution saving throw, taking 39 (6d12) necrotic\
    \ damage and 39 (6d12) poison damage on a failed save, or half as much damage\
    \ on a successful one. A creature that takes damage from the breath can't regain\
    \ hit points until the start of Beledros's next turn."
  "name": "Decaying Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros becomes a swirling cloud of green mist and can move up to half\
    \ her flying speed without provoking opportunity attacks, then resumes her true\
    \ form. During this movement, she can move through creatures and objects as if\
    \ they were difficult terrain. If she moves through a creature, it must succeed\
    \ on a DC 23 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn. If Beledros ends this move inside an object,\
    \ she takes 5 (1d10) force damage and is shunted to the nearest unoccupied space."
  "name": "Miasmal Flow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros uses Miasmal Flow."
  "name": "Miasmal Flow (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros magically summons 1d4 [pest mascots](/compendium/bestiary/monstrosity/pest-mascot-scc.md)\
    \ in unoccupied spaces she can see within 60 feet of herself. The pests obey her\
    \ commands and take their turns immediately after hers. Any creature, other than\
    \ a pest, takes 9 (2d8) poison damage if it starts its turn within 5 feet of one\
    \ or more of these pests. When one of these pests drops to 0 hit points, Beledros\
    \ regains 9 hit points. These pests disappear after 10 minutes, when Beledros\
    \ dies, or when she uses this action again."
  "name": "Teeming with Life (Costs 3 Actions)"
"source":
- "SCC"
name: Beledros Witherbloom
image: "[[Beledros Witherbloom.png]]"
---

# Beledros Witherbloom

```statblock
"name": "Beledros Witherbloom"
"size": "Gargantuan"
"type": "dragon"
"subtype": "druid"
"alignment": "Neutral Good"
"ac": !!int "22"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"stats":
- !!int "28"
- !!int "14"
- !!int "27"
- !!int "18"
- !!int "28"
- !!int "17"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "9"
  "Wisdom": !!int "16"
  "Constitution": !!int "15"
"skillsaves":
  "Medicine": !!int "16"
  "Nature": !!int "18"
  "Perception": !!int "16"
  "Arcana": !!int "18"
"damage_immunities": "necrotic, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 120 ft., passive Perception 26"
"languages": "Common, Draconic, Druidic, Sylvan"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability:\n\n1/day each: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [plant growth](/compendium/spells/plant-growth.md),\
    \ [revivify](/compendium/spells/revivify.md), [speak with dead](/compendium/spells/speak-with-dead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Beledros fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros doesn't require air, food, or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 14 (1d10\
    \ + 9) piercing damage plus 6 (1d12) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 12 (1d6\
    \ + 9) slashing damage. If the target is a Huge or smaller creature, it is knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros exhales decaying energy in a 90-foot cone. Each creature in that\
    \ area must make a DC 23 Constitution saving throw, taking 39 (6d12) necrotic\
    \ damage and 39 (6d12) poison damage on a failed save, or half as much damage\
    \ on a successful one. A creature that takes damage from the breath can't regain\
    \ hit points until the start of Beledros's next turn."
  "name": "Decaying Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros becomes a swirling cloud of green mist and can move up to half\
    \ her flying speed without provoking opportunity attacks, then resumes her true\
    \ form. During this movement, she can move through creatures and objects as if\
    \ they were difficult terrain. If she moves through a creature, it must succeed\
    \ on a DC 23 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn. If Beledros ends this move inside an object,\
    \ she takes 5 (1d10) force damage and is shunted to the nearest unoccupied space."
  "name": "Miasmal Flow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros uses Miasmal Flow."
  "name": "Miasmal Flow (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Beledros magically summons 1d4 [pest mascots](/compendium/bestiary/monstrosity/pest-mascot-scc.md)\
    \ in unoccupied spaces she can see within 60 feet of herself. The pests obey her\
    \ commands and take their turns immediately after hers. Any creature, other than\
    \ a pest, takes 9 (2d8) poison damage if it starts its turn within 5 feet of one\
    \ or more of these pests. When one of these pests drops to 0 hit points, Beledros\
    \ regains 9 hit points. These pests disappear after 10 minutes, when Beledros\
    \ dies, or when she uses this action again."
  "name": "Teeming with Life (Costs 3 Actions)"
"source":
- "SCC"
"image": "[[Beledros Witherbloom.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 186*

## Description

The dragon Beledros masters the intertwined magic of life and death. Her power taps into the life force flowing through living things and the natural world. She manipulates that energy to give healing and life or to bring death and decay. Her mastery of this magic sustains her own life force even without the sustenance of food, drink, or even air.

She founded Witherbloom College to pass on her understanding of the natural cycle. She hoped to create generations of stewards who would use her teachings to defend nature and help others. In keeping with the dichotomous nature of her philosophy and magic, she views the more dangerous aspects of nature, including the inevitability of death and decay, as natural and integral parts of existence.
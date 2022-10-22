---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/celestial/titan
aliases: ["Ulamog"]
statblock: true
"name": "Ulamog"
"size": "Huge"
"type": "celestial"
"subtype": "titan"
"alignment": "Chaotic Good or Neutral Evil"
"ac": !!int "22"
"hp": !!int "313"
"hit_dice": "19d12 + 190"
"stats":
- !!int "30"
- !!int "21"
- !!int "30"
- !!int "21"
- !!int "22"
- !!int "27"
"speed": "walk 50 ft., fly 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "13"
  "Intelligence": !!int "12"
  "Strength": !!int "17"
"skillsaves":
  "Insight": !!int "13"
  "Persuasion": !!int "15"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks; psychic"
"condition_immunities": "charmed"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog's innate spellcasting ability is Charisma (spell save DC 23, +15\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n1/day each: [commune](/compendium/spells/commune.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [earthquake](/compendium/spells/earthquake.md),\
    \ [fire storm](/compendium/spells/fire-storm.md), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ulamog fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of Ulamog's next turn."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6)\
    \ damage of one of the following types (empyrean's choice): acid, cold, fire,\
    \ force, lightning, radiant, or thunder."
  "name": "Bolt"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog bolsters all nonhostile creatures within 120 feet of it until the\
    \ end of its next turn. Bolstered creatures can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and they gain advantage on\
    \ ability checks and saving throws until the end of Ulamog's next turn."
  "name": "Bolster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog strikes the ground with its maul, triggering an earth tremor. All\
    \ other creatures on the ground within 60 feet of Ulamog must succeed on a DC\
    \ 25 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Trembling Strike (Costs 2 Actions)"
"source":
- "PSZ"
name: Ulamog
image: "[[Ulamog.png]]"
---

# Ulamog

```statblock
"name": "Ulamog"
"size": "Huge"
"type": "celestial"
"subtype": "titan"
"alignment": "Chaotic Good or Neutral Evil"
"ac": !!int "22"
"hp": !!int "313"
"hit_dice": "19d12 + 190"
"stats":
- !!int "30"
- !!int "21"
- !!int "30"
- !!int "21"
- !!int "22"
- !!int "27"
"speed": "walk 50 ft., fly 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "13"
  "Intelligence": !!int "12"
  "Strength": !!int "17"
"skillsaves":
  "Insight": !!int "13"
  "Persuasion": !!int "15"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks; psychic"
"condition_immunities": "charmed"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog's innate spellcasting ability is Charisma (spell save DC 23, +15\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n1/day each: [commune](/compendium/spells/commune.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [earthquake](/compendium/spells/earthquake.md),\
    \ [fire storm](/compendium/spells/fire-storm.md), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ulamog fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of Ulamog's next turn."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6)\
    \ damage of one of the following types (empyrean's choice): acid, cold, fire,\
    \ force, lightning, radiant, or thunder."
  "name": "Bolt"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog bolsters all nonhostile creatures within 120 feet of it until the\
    \ end of its next turn. Bolstered creatures can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and they gain advantage on\
    \ ability checks and saving throws until the end of Ulamog's next turn."
  "name": "Bolster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ulamog strikes the ground with its maul, triggering an earth tremor. All\
    \ other creatures on the ground within 60 feet of Ulamog must succeed on a DC\
    \ 25 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Trembling Strike (Costs 2 Actions)"
"source":
- "PSZ"
"image": "[[Ulamog.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 38*
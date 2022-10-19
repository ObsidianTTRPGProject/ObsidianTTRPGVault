---
cssclass: json5e-monster
tags:
- compendium/src/lr
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/coastal
- monster/environment/underwater
aliases: ["Fhenimore"]
statblock: true
"name": "Fhenimore"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "Common, Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore's spellcasting ability is Wisdom (spell save DC 13, +5 to hit\
    \ with spell attacks). It can innately cast the following spells, requiring no\
    \ material components:\n\nAt will: [command](/compendium/spells/command.md),\
    \ [create or destroy water](/compendium/spells/create-or-destroy-water.md)\n\n\
    1/day each: [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n3/day each: [control\
    \ water](/compendium/spells/control-water.md), [darkness](/compendium/spells/darkness.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10)\
    \ thunder damage."
  "name": "Thunderous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore can attack once with her bite attack and once with Thunderous\
    \ Touch."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "LR"
name: Fhenimore
image: "[[Fhenimore.png]]"
---

# Fhenimore

```statblock
"name": "Fhenimore"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "Common, Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore's spellcasting ability is Wisdom (spell save DC 13, +5 to hit\
    \ with spell attacks). It can innately cast the following spells, requiring no\
    \ material components:\n\nAt will: [command](/compendium/spells/command.md),\
    \ [create or destroy water](/compendium/spells/create-or-destroy-water.md)\n\n\
    1/day each: [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n3/day each: [control\
    \ water](/compendium/spells/control-water.md), [darkness](/compendium/spells/darkness.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10)\
    \ thunder damage."
  "name": "Thunderous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fhenimore can attack once with her bite attack and once with Thunderous\
    \ Touch."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "LR"
"image": "[[Fhenimore.png]]"
```
^statblock

*Source: Locathah Rising p. 20*

## Environment

coastal, underwater
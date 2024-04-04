---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Djinni"]
---
# [Djinni](3-Mechanics\CLI\bestiary\elemental/djinni.md)
*Source: Monster Manual p. 144. Available in the SRD.*  

```statblock
"name": "Djinni"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "14d10 + 84"
"stats":
- !!int "21"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Auran"
"cr": "11"
"traits":
- "desc": "The djinni's innate spellcasting ability is Charisma (spell save DC 17,\
    \ dice: d20+9 (+9) to hit with spell attacks). It can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\
    \n1/day each: [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental.md)\
    \ ([air elemental](/3-Mechanics/CLI/bestiary/elemental/air-elemental.md) only),\
    \ [creation](/3-Mechanics/CLI/spells/creation.md), [gaseous form](/3-Mechanics/CLI/spells/gaseous-form.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [major image](/3-Mechanics/CLI/spells/major-image.md),\
    \ [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\n\n3/day each: [create\
    \ food and water](/3-Mechanics/CLI/spells/create-food-and-water.md) (can create\
    \ wine instead of water), [tongues](/3-Mechanics/CLI/spells/tongues.md), [wind\
    \ walk](/3-Mechanics/CLI/spells/wind-walk.md)"
  "name": "innate"
- "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving\
    \ behind only equipment the djinni was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- "desc": "The djinni makes three scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 5|text(12) (2d6 + 5) slashing damage plus dice:1d6|text(3)\
    \ (1d6) lightning or thunder damage (djinni's choice)."
  "name": "Scimitar"
- "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms\
    \ on a point the djinni can see within 120 feet of it. The whirlwind lasts as\
    \ long as the djinni maintains [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ (as if concentrating on a spell). Any creature but the djinni that enters the\
    \ whirlwind must succeed on a DC 18 Strength saving throw or be [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures\
    \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by the whirlwind\
    \ move with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature\
    \ can use its action to free a creature [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by the whirlwind, including itself, by succeeding on a DC 18 Strength check.\
    \ If the check succeeds, the creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ and moves to the nearest space outside the whirlwind."
  "name": "Create Whirlwind"
"source":
- "MM"
- "PotA"
- "GoS"
- "TCE"
- "CM"
- "JttRC"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/djinni.webp"
```
^statblock

## Environment

coastal
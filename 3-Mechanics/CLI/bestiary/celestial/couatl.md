---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Couatl"]
---
# [Couatl](3-Mechanics\CLI\bestiary\celestial/couatl.md)
*Source: Monster Manual p. 43. Available in the SRD.*  

```statblock
"name": "Couatl"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "5"
"damage_resistances": "radiant"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "4"
"traits":
- "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring only verbal components:\n\nAt\
    \ will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md)\n\
    \n1/day each: [dream](/3-Mechanics/CLI/spells/dream.md), [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md),\
    \ [scrying](/3-Mechanics/CLI/spells/scrying.md)\n\n3/day each: [bless](/3-Mechanics/CLI/spells/bless.md),\
    \ [create food and water](/3-Mechanics/CLI/spells/create-food-and-water.md), [cure\
    \ wounds](/3-Mechanics/CLI/spells/cure-wounds.md), [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [protection from poison](/3-Mechanics/CLI/spells/protection-from-poison.md),\
    \ [sanctuary](/3-Mechanics/CLI/spells/sanctuary.md), [shield](/3-Mechanics/CLI/spells/shield.md)"
  "name": "innate"
- "desc": "The couatl's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The couatl is immune to scrying and to any effect that would sense its\
    \ emotions, read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+8 (+8) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d6 + 5|text(8) (1d6 + 5) piercing damage, and the target must\
    \ succeed on a DC 13 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 24 hours. Until this poison ends, the target is [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious).\
    \ Another creature can use an action to shake the target awake."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one Medium\
    \ or smaller creature. Hit: dice:2d6 + 3|text(10) (2d6 + 3) bludgeoning\
    \ damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the couatl can't constrict another target."
  "name": "Constrict"
- "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl\
    \ retains its game statistics and ability to speak, but its AC, movement modes,\
    \ Strength, Dexterity, and other actions are replaced by those of the new form,\
    \ and it gains any statistics and capabilities (except class features, legendary\
    \ actions, and lair actions) that the new form has but that it lacks. If the new\
    \ form has a bite attack, the couatl can use its bite in that form."
  "name": "Change Shape"
"source":
- "MM"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "EGW"
- "IDRotF"
- "PSX"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/couatl.webp"
```
^statblock

## Environment

grassland, forest, urban, desert
---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/celestial
- monster/environment/grassland
- monster/environment/forest
- monster/environment/urban
- monster/environment/desert
aliases: ["Eku"]
statblock: true
"name": "Eku"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft., fly 90 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku's spellcasting ability is Charisma (spell save DC 14). It can innately\
    \ cast the following spells, requiring only verbal components:\n\nAt will:\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md)\n\
    \n1/day each: [dream](/compendium/spells/dream.md), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n3/day each: [bless](/compendium/spells/bless.md),\
    \ [create food and water](/compendium/spells/create-food-and-water.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield](/compendium/spells/shield.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku is immune to scrying and to any effect that would sense its emotions,\
    \ read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 24 hours. Until this\
    \ poison ends, the target is [unconscious](/rules/conditions.md#unconscious).\
    \ Another creature can use an action to shake the target awake."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature.\
    \ Hit: 10 (2d6 + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Eku can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (Eku's choice).\n\nIn a new form, Eku retains its game\
    \ statistics and ability to speak, but its AC, movement modes, Strength, Dexterity,\
    \ and other actions are replaced by those of the new form, and it gains any statistics\
    \ and capabilities (except class features, legendary actions, and lair actions)\
    \ that the new form has but that it lacks. If the new form has a bite attack,\
    \ Eku can use its bite in that form."
  "name": "Change Shape"
"source":
- "ToA"
name: Eku
image: "[[Eku.png]]"
---

# Eku

```statblock
"name": "Eku"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft., fly 90 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku's spellcasting ability is Charisma (spell save DC 14). It can innately\
    \ cast the following spells, requiring only verbal components:\n\nAt will:\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md)\n\
    \n1/day each: [dream](/compendium/spells/dream.md), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n3/day each: [bless](/compendium/spells/bless.md),\
    \ [create food and water](/compendium/spells/create-food-and-water.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield](/compendium/spells/shield.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku is immune to scrying and to any effect that would sense its emotions,\
    \ read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 24 hours. Until this\
    \ poison ends, the target is [unconscious](/rules/conditions.md#unconscious).\
    \ Another creature can use an action to shake the target awake."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature.\
    \ Hit: 10 (2d6 + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Eku can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eku magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (Eku's choice).\n\nIn a new form, Eku retains its game\
    \ statistics and ability to speak, but its AC, movement modes, Strength, Dexterity,\
    \ and other actions are replaced by those of the new form, and it gains any statistics\
    \ and capabilities (except class features, legendary actions, and lair actions)\
    \ that the new form has but that it lacks. If the new form has a bite attack,\
    \ Eku can use its bite in that form."
  "name": "Change Shape"
"source":
- "ToA"
"image": "[[Eku.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 34*

## Environment

grassland, forest, urban, desert
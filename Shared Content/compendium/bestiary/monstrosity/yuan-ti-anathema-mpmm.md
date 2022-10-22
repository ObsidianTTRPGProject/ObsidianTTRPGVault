---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/monstrosity
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
aliases: ["Yuan-ti Anathema"]
statblock: true
"name": "Yuan-ti Anathema"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "23"
- !!int "13"
- !!int "19"
- !!int "19"
- !!int "17"
- !!int "20"
"speed": "walk 40 ft., climb 40 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_resistances": "acid, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 21"
"languages": "Abyssal, Common, Draconic"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only)\n\
    \n3/day each: [darkness](/compendium/spells/darkness.md), [entangle](/compendium/spells/entangle.md),\
    \ [fear](/compendium/spells/fear.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature of the anathema's choice, other than a snake or a yuan-ti,\
    \ that starts its turn within 30 feet of the anathema must succeed on a DC 17\
    \ Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of snakes and yuan-ti. A [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to this anathama's aura for the next 24 hours."
  "name": "Ophidiophobia Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema has advantage on saves against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Six Heads"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema makes two Claw attacks and one Flurry of Bites attack."
  "name": "Multiattack (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one creature. Hit: 27\
    \ (6d6 + 6) piercing damage plus 14 (4d6) poison damage."
  "name": "Flurry of Bites (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature.\
    \ Hit: 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage, and the target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 16). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and it takes\
    \ 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage at the start of each\
    \ of its turns. The anathema can constrict only one creature at a time."
  "name": "Constrict (Snake Form Only)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema transforms into a Huge constrictor snake or back into its\
    \ true form. Its statistics are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
name: Yuan-ti Anathema
image: "[[Yuan-ti Anathema.png]]"
---

# Yuan-ti Anathema

```statblock
"name": "Yuan-ti Anathema"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "23"
- !!int "13"
- !!int "19"
- !!int "19"
- !!int "17"
- !!int "20"
"speed": "walk 40 ft., climb 40 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_resistances": "acid, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 21"
"languages": "Abyssal, Common, Draconic"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only)\n\
    \n3/day each: [darkness](/compendium/spells/darkness.md), [entangle](/compendium/spells/entangle.md),\
    \ [fear](/compendium/spells/fear.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature of the anathema's choice, other than a snake or a yuan-ti,\
    \ that starts its turn within 30 feet of the anathema must succeed on a DC 17\
    \ Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of snakes and yuan-ti. A [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to this anathama's aura for the next 24 hours."
  "name": "Ophidiophobia Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema has advantage on saves against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Six Heads"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema makes two Claw attacks and one Flurry of Bites attack."
  "name": "Multiattack (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one creature. Hit: 27\
    \ (6d6 + 6) piercing damage plus 14 (4d6) poison damage."
  "name": "Flurry of Bites (Anathema Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature.\
    \ Hit: 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage, and the target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 16). Until this grapple\
    \ ends, the target is [restrained](/rules/conditions.md#restrained), and it takes\
    \ 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage at the start of each\
    \ of its turns. The anathema can constrict only one creature at a time."
  "name": "Constrict (Snake Form Only)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anathema transforms into a Huge constrictor snake or back into its\
    \ true form. Its statistics are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "[[Yuan-ti Anathema.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 272, Volo's Guide to Monsters p. 202*

## Description

As part of their quest for godhood, a yuan-ti abomination might perform a ritual that, if successful, transforms them into an even greater form: a yuan-ti anathema. This ritual demands the sacrifice of hundreds of snakes and requires the abomination to bathe in the blood of their enemies. The transformation is quick but painful.

Anathemas consider themselves demigods on the path to greater divinity. They demand obeisance from weaker creatures and use every resource at their disposal to war against neighbors, seeking the captives, sacrifices, glory, and riches the anathemas believe they need to achieve true divinity.

Anathemas don't age, allowing them to pursue their goals until the end of days. Truly powerful ones might rule multiple yuan-ti cities and bring entire regions under their control.

## Environment

desert, forest, underdark
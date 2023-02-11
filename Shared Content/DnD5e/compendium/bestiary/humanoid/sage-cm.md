---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Sage"]
statblock: true
"name": "Sage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "18"
- !!int "15"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "6"
  "Nature": !!int "8"
  "Investigation": !!int "8"
  "Religion": !!int "8"
  "Insight": !!int "4"
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (save DC 14, +6 to hit with spell attacks):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ \n\n1/day each: [dispel magic](/compendium/spells/dispel-magic.md), [levitate](/compendium/spells/levitate.md),\
    \ [locate object](/compendium/spells/locate-object.md), [see invisibility](/compendium/spells/see-invisibility.md),\
    \ [sending](/compendium/spells/sending.md), [tongues](/compendium/spells/tongues.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n3/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [identify](/compendium/spells/identify.md), "
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit (with advantage if the target is wearing\
    \ armor made of metal), reach 5 ft., one creature. Hit: 9 (2d8) lightning damage,\
    \ and the target can't take reactions until the start of its next turn."
  "name": "Shocking Grasp (Cantrip)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the sage is hit by an attack or targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, it calls forth an [invisible](/rules/conditions.md#invisible) barrier\
    \ of magical force that protects it. Until the start of its next turn, the sage\
    \ has a +5 bonus to AC, including against the triggering attack, and it takes\
    \ no damage from magic missile."
  "name": "Shield (1st-Level Spell; 3/Day)"
"source":
- "CM"
name: Sage
image: "[[Sage.png]]"
---

# Sage

```statblock
"name": "Sage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "18"
- !!int "15"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "6"
  "Nature": !!int "8"
  "Investigation": !!int "8"
  "Religion": !!int "8"
  "Insight": !!int "4"
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (save DC 14, +6 to hit with spell attacks):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ \n\n1/day each: [dispel magic](/compendium/spells/dispel-magic.md), [levitate](/compendium/spells/levitate.md),\
    \ [locate object](/compendium/spells/locate-object.md), [see invisibility](/compendium/spells/see-invisibility.md),\
    \ [sending](/compendium/spells/sending.md), [tongues](/compendium/spells/tongues.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n3/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [identify](/compendium/spells/identify.md), "
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit (with advantage if the target is wearing\
    \ armor made of metal), reach 5 ft., one creature. Hit: 9 (2d8) lightning damage,\
    \ and the target can't take reactions until the start of its next turn."
  "name": "Shocking Grasp (Cantrip)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the sage is hit by an attack or targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, it calls forth an [invisible](/rules/conditions.md#invisible) barrier\
    \ of magical force that protects it. Until the start of its next turn, the sage\
    \ has a +5 bonus to AC, including against the triggering attack, and it takes\
    \ no damage from magic missile."
  "name": "Shield (1st-Level Spell; 3/Day)"
"source":
- "CM"
"image": "[[Sage.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 9*

## Description

Candlekeep's resident lore experts are master sages and sages who dedicate themselves to scholarship above all.
---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Master Sage"]
statblock: true
"name": "Master Sage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "20"
- !!int "18"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "11"
  "Investigation": !!int "11"
  "Religion": !!int "11"
  "Insight": !!int "7"
  "History": !!int "11"
  "Arcana": !!int "11"
"senses": "passive Perception 14"
"languages": "Common plus any five languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (save DC 14, +6 to hit with spell attacks):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), \n\n1/day each:\
    \ [banishment](/compendium/spells/banishment.md), [contact other plane](/compendium/spells/contact-other-plane.md),\
    \ [Drawmij's instant summons](/compendium/spells/drawmijs-instant-summons.md),\
    \ [legend lore](/compendium/spells/legend-lore.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [planar binding](/compendium/spells/planar-binding.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [scrying](/compendium/spells/scrying.md), [sending](/compendium/spells/sending.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n3/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), , [identify](/compendium/spells/identify.md),\
    \ [levitate](/compendium/spells/levitate.md), [locate object](/compendium/spells/locate-object.md),\
    \ , [Tenser's Floating Disk](/compendium/spells/tensers-floating-disk.md), [unseen\
    \ servant](/compendium/spells/unseen-servant.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit (with advantage if the target is wearing\
    \ armor made of metal), reach 5 ft., one creature. Hit: 13 (3d8) lightning damage,\
    \ and the target can't take reactions until the start of its next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage creates a fiery explosion centered on a point it can see within\
    \ 150 feet of it. Each creature in a 20-foot-radius sphere centered on that point\
    \ must make a DC 14 Dexterity saving throw, taking 28 (8d6) fire damage on a failed\
    \ save, or half as much damage on a successful one. The fire spreads around corners\
    \ and ignites flammable objects in the area that aren't being worn or carried."
  "name": "Fireball (3rd-Level Spell; 3/Day)"
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
name: Master Sage
image: "[[Master Sage.png]]"
---

# Master Sage

```statblock
"name": "Master Sage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "8"
- !!int "10"
- !!int "10"
- !!int "20"
- !!int "18"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "10"
  "Nature": !!int "11"
  "Investigation": !!int "11"
  "Religion": !!int "11"
  "Insight": !!int "7"
  "History": !!int "11"
  "Arcana": !!int "11"
"senses": "passive Perception 14"
"languages": "Common plus any five languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (save DC 14, +6 to hit with spell attacks):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), \n\n1/day each:\
    \ [banishment](/compendium/spells/banishment.md), [contact other plane](/compendium/spells/contact-other-plane.md),\
    \ [Drawmij's instant summons](/compendium/spells/drawmijs-instant-summons.md),\
    \ [legend lore](/compendium/spells/legend-lore.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [planar binding](/compendium/spells/planar-binding.md), [polymorph](/compendium/spells/polymorph.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [scrying](/compendium/spells/scrying.md), [sending](/compendium/spells/sending.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n3/day each: [comprehend\
    \ languages](/compendium/spells/comprehend-languages.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), , [identify](/compendium/spells/identify.md),\
    \ [levitate](/compendium/spells/levitate.md), [locate object](/compendium/spells/locate-object.md),\
    \ , [Tenser's Floating Disk](/compendium/spells/tensers-floating-disk.md), [unseen\
    \ servant](/compendium/spells/unseen-servant.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit (with advantage if the target is wearing\
    \ armor made of metal), reach 5 ft., one creature. Hit: 13 (3d8) lightning damage,\
    \ and the target can't take reactions until the start of its next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sage creates a fiery explosion centered on a point it can see within\
    \ 150 feet of it. Each creature in a 20-foot-radius sphere centered on that point\
    \ must make a DC 14 Dexterity saving throw, taking 28 (8d6) fire damage on a failed\
    \ save, or half as much damage on a successful one. The fire spreads around corners\
    \ and ignites flammable objects in the area that aren't being worn or carried."
  "name": "Fireball (3rd-Level Spell; 3/Day)"
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
"image": "[[Master Sage.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 9*

## Description

Candlekeep's resident lore experts are master sages and sages who dedicate themselves to scholarship above all.
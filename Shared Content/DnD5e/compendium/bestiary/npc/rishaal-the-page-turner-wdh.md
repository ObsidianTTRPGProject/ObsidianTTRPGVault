---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/dragonborn
aliases: ["Rishaal the Page-Turner"]
statblock: true
"name": "Rishaal the Page-Turner"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_resistances": "fire"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rishaal is a 9th-level spellcaster. His spellcasting ability is Intelligence.\
    \ Rishaal has the following wizard spells prepared:\n\nCantrips (at will):\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rishaal can use his action to exhale a 15-foot cone of fire (but can't\
    \ do this again until he finishes a short or long rest); each creature in the\
    \ cone must make a DC 10 Dexterity saving throw, taking 2d6 fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Breath Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. Or Ranged Weapon Attack: +5 to hit, range 20/60 ft., one\
    \ target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDH"
name: Rishaal the Page-Turner
image: "[[Rishaal the Page-Turner.png]]"
---

# Rishaal the Page-Turner

```statblock
"name": "Rishaal the Page-Turner"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_resistances": "fire"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rishaal is a 9th-level spellcaster. His spellcasting ability is Intelligence.\
    \ Rishaal has the following wizard spells prepared:\n\nCantrips (at will):\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rishaal can use his action to exhale a 15-foot cone of fire (but can't\
    \ do this again until he finishes a short or long rest); each creature in the\
    \ cone must make a DC 10 Dexterity saving throw, taking 2d6 fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Breath Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. Or Ranged Weapon Attack: +5 to hit, range 20/60 ft., one\
    \ target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDH"
"image": "[[Rishaal the Page-Turner.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 33*

## Description

Rishaal, known as Rishaal the Page Turner is proprietor of the Book Wyrm's Treasure in Trollskull Alley
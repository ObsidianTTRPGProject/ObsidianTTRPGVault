---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Remallia Haventree"]
statblock: true
"name": "Remallia Haventree"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "7"
  "History": !!int "8"
  "Arcana": !!int "8"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Dwarvish, Elvish, Halfling"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia is a 13th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). She has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [message](/compendium/spells/message.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [alarm](/compendium/spells/alarm.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [arcane lock](/compendium/spells/arcane-lock.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [flesh to stone](/compendium/spells/flesh-to-stone.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [symbol](/compendium/spells/symbol.md), [teleport](/compendium/spells/teleport.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has a [figurine of wondrous power (silver raven)](/compendium/items/figurine-of-wondrous-power-silver-raven.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has a magical ward that has 30 hit points. Whenever she takes\
    \ damage, the ward takes the damage instead. If the ward is reduced to 0 hit points,\
    \ Remallia takes any remaining damage. When Remallia casts an abjuration spell\
    \ of 1st level or higher, the ward regains a number of hit points equal to twice\
    \ the level of the spell. This applies to any of the following spells she casts:\
    \ [alarm](/compendium/spells/alarm.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [shield](/compendium/spells/shield.md), [arcane lock](/compendium/spells/arcane-lock.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [banishment](/compendium/spells/banishment.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md) and\
    \ [symbol](/compendium/spells/symbol.md)."
  "name": "Arcane Ward"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target.\
    \ Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDH"
name: Remallia Haventree
image: "[[Remallia Haventree.png]]"
---

# Remallia Haventree

```statblock
"name": "Remallia Haventree"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "7"
  "History": !!int "8"
  "Arcana": !!int "8"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Dwarvish, Elvish, Halfling"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia is a 13th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). She has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [mending](/compendium/spells/mending.md),\
    \ [message](/compendium/spells/message.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [alarm](/compendium/spells/alarm.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [arcane lock](/compendium/spells/arcane-lock.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [flesh to stone](/compendium/spells/flesh-to-stone.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [symbol](/compendium/spells/symbol.md), [teleport](/compendium/spells/teleport.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has a [figurine of wondrous power (silver raven)](/compendium/items/figurine-of-wondrous-power-silver-raven.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Remallia has a magical ward that has 30 hit points. Whenever she takes\
    \ damage, the ward takes the damage instead. If the ward is reduced to 0 hit points,\
    \ Remallia takes any remaining damage. When Remallia casts an abjuration spell\
    \ of 1st level or higher, the ward regains a number of hit points equal to twice\
    \ the level of the spell. This applies to any of the following spells she casts:\
    \ [alarm](/compendium/spells/alarm.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [shield](/compendium/spells/shield.md), [arcane lock](/compendium/spells/arcane-lock.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [banishment](/compendium/spells/banishment.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md) and\
    \ [symbol](/compendium/spells/symbol.md)."
  "name": "Arcane Ward"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target.\
    \ Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDH"
"image": "[[Remallia Haventree.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 214*

## Description

Remallia (Remi to her friends) is the lady of House Ulbrinter and a guiding light for the Harpers in Waterdeep

She became an active force for good in the city after assassins killed her husband, Arthagast Ulbrinter, and destroyed his remains. A sun elf, she has two adult children (a half-elf son named Arthius, who is studying music in Silverymoon, and a half-elf daughter named Serenore, who lives on the Moonshae island of Alaron with her husband and daughter). Lady Haventree retains a handful of loyal servants and spies.

Remi holds secret Harper meetings in her villa, which is warded by all manner of spells. She uses a silver raven figurine of wondrous power to deliver messages to Harper spies scattered throughout the city.
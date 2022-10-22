---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/fey
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
aliases: ["Hag of the Fetid Gaze"]
statblock: true
"name": "Hag of the Fetid Gaze"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [vicious mockery](/compendium/spells/vicious-mockery.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While all three members of a hag coven are within 30 feet of one another,\
    \ they can each cast the following spells from the wizard's spell list but must\
    \ share the spell slots among themselves:\n\n1st level (4 1st-level slots):\
    \ [charm person](/compendium/spells/charm-person.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [glyph of warding](/compendium/spells/glyph-of-warding.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [dominate person](/compendium/spells/dominate-person.md), [seeming](/compendium/spells/seeming.md)\n\
    \n6th level (1 6th-level slots): [Otto's irresistible dance](/compendium/spells/ottos-irresistible-dance.md)\n\
    For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence\
    \ as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence\
    \ modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight)\
    \ check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her rough flesh. Otherwise, a creature must take an action to\
    \ visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation)\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically turns [invisible](/rules/conditions.md#invisible) until\
    \ she attacks or casts a spell, or until her concentration ends (as if concentrating\
    \ on a spell). While [invisible](/rules/conditions.md#invisible), she leaves no\
    \ physical evidence of her passage, so she can be tracked only by magic. Any equipment\
    \ she wears or carries is [invisible](/rules/conditions.md#invisible) with her."
  "name": "Invisible Passage"
"source":
- "CM"
name: Hag of the Fetid Gaze
image: "[[Hag of the Fetid Gaze.png]]"
---

# Hag of the Fetid Gaze

```statblock
"name": "Hag of the Fetid Gaze"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [vicious mockery](/compendium/spells/vicious-mockery.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While all three members of a hag coven are within 30 feet of one another,\
    \ they can each cast the following spells from the wizard's spell list but must\
    \ share the spell slots among themselves:\n\n1st level (4 1st-level slots):\
    \ [charm person](/compendium/spells/charm-person.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [glyph of warding](/compendium/spells/glyph-of-warding.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [dominate person](/compendium/spells/dominate-person.md), [seeming](/compendium/spells/seeming.md)\n\
    \n6th level (1 6th-level slots): [Otto's irresistible dance](/compendium/spells/ottos-irresistible-dance.md)\n\
    For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence\
    \ as her spellcasting ability. The spell save DC is 12 + the hag's Intelligence\
    \ modifier, and the spell attack bonus is 4 + the hag's Intelligence modifier."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight)\
    \ check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her rough flesh. Otherwise, a creature must take an action to\
    \ visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation)\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag magically turns [invisible](/rules/conditions.md#invisible) until\
    \ she attacks or casts a spell, or until her concentration ends (as if concentrating\
    \ on a spell). While [invisible](/rules/conditions.md#invisible), she leaves no\
    \ physical evidence of her passage, so she can be tracked only by magic. Any equipment\
    \ she wears or carries is [invisible](/rules/conditions.md#invisible) with her."
  "name": "Invisible Passage"
"source":
- "CM"
"image": "[[Hag of the Fetid Gaze.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 76*

## Description

Three green hags named Dread Morgan, Vile Sazha, and Auntie Greenbones were once rivals who dwelled in an area of the Feywild coterminous with the High Forest. A decade ago, during a time when the boundaries between the planes thinned, the hags became aware of the magic spring controlled by Sylvarie—and decided to control and corrupt it for their own purposes. The covetous hags each knew part of a ritual for crafting magic paintings that could bind mortal creatures with a terrible curse. After agreeing to share their knowledge and work together, they formed a coven dedicated to claiming Sylvarie's temple and making it a base for their nefarious plans.

The hags use their powers of illusion to pose as three elf sisters named Morganna, Azirssa, and Greensong. They are typically found in the bathhouse by day and in their tower lair at night. Each hag carries a master key that opens all the doors in the bathhouse and the tower.

## Environment

forest, swamp, hill
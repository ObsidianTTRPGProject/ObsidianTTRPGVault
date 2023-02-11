---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/urban
aliases: ["Asha Vandree"]
statblock: true
"name": "Asha Vandree"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Perception": !!int "5"
  "Persuasion": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any two languages, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Asha has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha's innate spellcasting ability is Charisma (spell save DC 11). Asha\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Asha can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Asha expends a spell slot\
    \ of 2nd level or higher, the extra damage increases by 1d6 for each level above\
    \ 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha has advantage on saving throws against being charmed, and magic can't\
    \ put Asha to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Asha has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "OotA"
name: Asha Vandree
image: "[[Asha Vandree.png]]"
---

# Asha Vandree

```statblock
"name": "Asha Vandree"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Perception": !!int "5"
  "Persuasion": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any two languages, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Asha has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha's innate spellcasting ability is Charisma (spell save DC 11). Asha\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Asha can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Asha expends a spell slot\
    \ of 2nd level or higher, the extra damage increases by 1d6 for each level above\
    \ 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asha has advantage on saving throws against being charmed, and magic can't\
    \ put Asha to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Asha has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "OotA"
"image": "[[Asha Vandree.png]]"
```
^statblock

*Source: Out of the Abyss p. 9*

## Environment

urban
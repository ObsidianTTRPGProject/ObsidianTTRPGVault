---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/humanoid/gnome
- monster/environment/urban
aliases: ["Mev Flintknapper"]
statblock: true
"name": "Mev Flintknapper"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
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
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any two languages, Gnomish, Terran, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The priest has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mev's innate spellcasting ability is Intelligence (spell save DC 11). Mev\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [nondetection](/compendium/spells/nondetection.md) (self only)\n\n\
    1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the priest can expend a spell slot to cause its melee\
    \ weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target\
    \ on a hit. This benefit lasts until the end of the turn. If the priest expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each\
    \ level above 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mev has advantage on all Intelligence, Wisdom, and Charisma saving throws\
    \ against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "OotA"
name: Mev Flintknapper
image: "[[Mev Flintknapper.png]]"
---

# Mev Flintknapper

```statblock
"name": "Mev Flintknapper"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
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
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any two languages, Gnomish, Terran, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The priest has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md), [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mev's innate spellcasting ability is Intelligence (spell save DC 11). Mev\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [nondetection](/compendium/spells/nondetection.md) (self only)\n\n\
    1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the priest can expend a spell slot to cause its melee\
    \ weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target\
    \ on a hit. This benefit lasts until the end of the turn. If the priest expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each\
    \ level above 1st."
  "name": "Divine Eminence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mev has advantage on all Intelligence, Wisdom, and Charisma saving throws\
    \ against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "OotA"
"image": "[[Mev Flintknapper.png]]"
```
^statblock

*Source: Out of the Abyss p. 103*

## Environment

urban
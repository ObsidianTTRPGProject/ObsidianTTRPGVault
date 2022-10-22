---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/medium
- monster/type/humanoid/tiefling
- monster/environment/urban
aliases: ["Ollin"]
statblock: true
"name": "Ollin"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Chaotic Good"
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
  "Performance": !!int "3"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Ignan, Tletlahtolli, Infernal"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ollin is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Ollin has the following cleric spells\
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
  "desc": "Ollin's innate spellcasting ability is Charisma (spell save DC 11). Ollin\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Ollin can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Ollin expends a spell\
    \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
    \ above 1st."
  "name": "Divine Eminence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "JttRC"
name: Ollin
image: "[[Ollin.png]]"
---

# Ollin

```statblock
"name": "Ollin"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Chaotic Good"
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
  "Performance": !!int "3"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Ignan, Tletlahtolli, Infernal"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ollin is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 13, +5 to hit with spell attacks). Ollin has the following cleric spells\
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
  "desc": "Ollin's innate spellcasting ability is Charisma (spell save DC 11). Ollin\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [hellish rebuke](/compendium/spells/hellish-rebuke.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Ollin can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on a\
    \ hit. This benefit lasts until the end of the turn. If Ollin expends a spell\
    \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
    \ above 1st."
  "name": "Divine Eminence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "JttRC"
"image": "[[Ollin.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 348*

## Environment

urban
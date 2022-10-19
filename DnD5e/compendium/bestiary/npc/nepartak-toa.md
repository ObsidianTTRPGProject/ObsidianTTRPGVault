---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/tiny
- monster/type/undead
- monster/environment/underdark
aliases: ["Nepartak"]
statblock: true
"name": "Nepartak"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"stats":
- !!int "1"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "5"
"damage_resistances": "lightning, necrotic, piercing"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, telepathy 30 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak is a 5th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or\
    \ material components to cast its spells. Nepartak has the following wizard spells\
    \ prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1st level (3 1st-level slots): [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (2 2nd-level slots):\
    \ [blur](/compendium/spells/blur.md), [flaming sphere](/compendium/spells/flaming-sphere.md)\n\
    \n3rd level (1 3rd-level slots): [fireball](/compendium/spells/fireball.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak sheds either dim light in a 15-foot radius, or bright light in\
    \ a 15-foot radius and dim light for an additional 15 feet. It can switch between\
    \ the options as an action."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nepartak is destroyed, it regains all its hit points in 1 hour unless\
    \ holy water is sprinkled on its remains or a [dispel magic](/compendium/spells/dispel-magic.md)\
    \ or [remove curse](/compendium/spells/remove-curse.md) spell is cast on them."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak uses Fire Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6)\
    \ fire damage."
  "name": "Fire Ray"
"source":
- "ToA"
name: Nepartak
image: "[[Nepartak.png]]"
---

# Nepartak

```statblock
"name": "Nepartak"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"stats":
- !!int "1"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "11"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "5"
"damage_resistances": "lightning, necrotic, piercing"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, telepathy 30 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak is a 5th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or\
    \ material components to cast its spells. Nepartak has the following wizard spells\
    \ prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1st level (3 1st-level slots): [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (2 2nd-level slots):\
    \ [blur](/compendium/spells/blur.md), [flaming sphere](/compendium/spells/flaming-sphere.md)\n\
    \n3rd level (1 3rd-level slots): [fireball](/compendium/spells/fireball.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak sheds either dim light in a 15-foot radius, or bright light in\
    \ a 15-foot radius and dim light for an additional 15 feet. It can switch between\
    \ the options as an action."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nepartak is destroyed, it regains all its hit points in 1 hour unless\
    \ holy water is sprinkled on its remains or a [dispel magic](/compendium/spells/dispel-magic.md)\
    \ or [remove curse](/compendium/spells/remove-curse.md) spell is cast on them."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nepartak uses Fire Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6)\
    \ fire damage."
  "name": "Fire Ray"
"source":
- "ToA"
"image": "[[Nepartak.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 137*

## Environment

underdark
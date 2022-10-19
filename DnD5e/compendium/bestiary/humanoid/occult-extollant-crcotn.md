---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/small-or-medium
- monster/type/humanoid/sorcerer
aliases: ["Occult Extollant"]
statblock: true
"name": "Occult Extollant"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "5"
  "History": !!int "9"
  "Arcana": !!int "6"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The extollant casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [mage armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The extollant makes two Crimson Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 20 (3d10 + 4) psychic damage."
  "name": "Crimson Bolt"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the extollant is damaged by a creature within 60 feet of it, the creature\
    \ must make a DC 15 Wisdom saving throw, taking 16 (3d10) psychic damage on a\
    \ failed saving throw, or half as much damage on a successful one."
  "name": "Reflect Agony"
"source":
- "CRCotN"
name: Occult Extollant
image: "[[Occult Extollant.png]]"
---

# Occult Extollant

```statblock
"name": "Occult Extollant"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "sorcerer"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "5"
  "History": !!int "9"
  "Arcana": !!int "6"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The extollant casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [mage armor](/compendium/spells/mage-armor.md), [major image](/compendium/spells/major-image.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The extollant makes two Crimson Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft.,\
    \ one creature. Hit: 20 (3d10 + 4) psychic damage."
  "name": "Crimson Bolt"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the extollant is damaged by a creature within 60 feet of it, the creature\
    \ must make a DC 15 Wisdom saving throw, taking 16 (3d10) psychic damage on a\
    \ failed saving throw, or half as much damage on a successful one."
  "name": "Reflect Agony"
"source":
- "CRCotN"
"image": "[[Occult Extollant.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 204*

## Description

Occult extollants delve deep into ancient legends and seek to solve mysteries that have led other investigators to their doom, driven by an unquenchable yearning to know the unknown.

**Occultists of the Vermilion Dream.** The Consortium of the Vermilion Dream is viewed as an esoteric, profit-driven, but ultimately harmless cabal of ghost hunters and perpetuators of urban legends. This perception isn't inaccurate, but the consortium's leadership is obsessed with one set of legends in particular: those involving the Moon of Ill Omen, Ruidus, and the ancient figures cursed by exposure to its alien influence.

The cruelest desires and predilections of the consortium's most obsessive agents have been enhanced by contact with ruidium-tainted items.
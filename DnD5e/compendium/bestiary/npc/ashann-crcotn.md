---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/small
- monster/type/humanoid/gnome
- monster/type/humanoid/sorcerer
aliases: ["Ashann"]
statblock: true
"name": "Ashann"
"size": "Small"
"type": "humanoid"
"subtype": "gnome, sorcerer"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "2"
  "History": !!int "4"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus one other language"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ashann casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [detect magic](/compendium/spells/detect-magic.md), [levitate](/compendium/spells/levitate.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 7 (2d6) psychic damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ashann creates an explosion of magical force in a 20-foot-radius sphere\
    \ centered on a point it can see within 120 feet of itself. Each creature in that\
    \ area must make a DC 13 Dexterity saving throw. On a failed saving throw, the\
    \ creature takes 10 (3d6) force damage and is pushed 10 feet away from the center\
    \ of the area. On a successful save, it takes half as much damage and isn't pushed."
  "name": "Arcane Blast (Recharge 5-6)"
"source":
- "CRCotN"
name: Ashann
image: "[[Ashann.png]]"
---

# Ashann

```statblock
"name": "Ashann"
"size": "Small"
"type": "humanoid"
"subtype": "gnome, sorcerer"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "2"
  "History": !!int "4"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus one other language"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ashann casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [detect magic](/compendium/spells/detect-magic.md), [levitate](/compendium/spells/levitate.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 7 (2d6) psychic damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ashann creates an explosion of magical force in a 20-foot-radius sphere\
    \ centered on a point it can see within 120 feet of itself. Each creature in that\
    \ area must make a DC 13 Dexterity saving throw. On a failed saving throw, the\
    \ creature takes 10 (3d6) force damage and is pushed 10 feet away from the center\
    \ of the area. On a successful save, it takes half as much damage and isn't pushed."
  "name": "Arcane Blast (Recharge 5-6)"
"source":
- "CRCotN"
"image": "[[Ashann.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 205*
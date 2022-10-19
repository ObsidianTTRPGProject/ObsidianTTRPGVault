---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/yuan-ti
- monster/environment/forest
- monster/environment/swamp
- monster/environment/urban
- monster/environment/desert
aliases: ["Salida"]
statblock: true
"name": "Salida"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Draconic"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida's spellcasting ability is Charisma (spell save DC 12). Salida can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only)\n\n3/day each: [poison spray](/compendium/spells/poison-spray.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4\
    \ (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
  "name": "Shortbow"
"source":
- "ToA"
name: Salida
image: "[[Salida.png]]"
---

# Salida

```statblock
"name": "Salida"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Draconic"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida's spellcasting ability is Charisma (spell save DC 12). Salida can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only)\n\n3/day each: [poison spray](/compendium/spells/poison-spray.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Salida makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4\
    \ (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
  "name": "Shortbow"
"source":
- "ToA"
"image": "[[Salida.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 35*

## Environment

forest, swamp, urban, desert
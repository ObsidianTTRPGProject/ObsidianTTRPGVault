---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/yuan-ti
- monster/environment/desert
- monster/environment/urban
aliases: ["Sekelok"]
statblock: true
"name": "Sekelok"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any one language (usually Common), Abyssal, Draconic"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok's innate spellcasting ability is Charisma (spell save DC 13). Sekelok\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only), [poison spray](/compendium/spells/poison-spray.md)\n\n3/day each:\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Sekelok can regain 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok makes three attacks with its greatsword or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if Sekelok has more than\
    \ half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sekelok has more\
    \ than half of its total hit points remaining."
  "name": "Shortbow"
"source":
- "ToA"
name: Sekelok
image: "[[Sekelok.png]]"
---

# Sekelok

```statblock
"name": "Sekelok"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any one language (usually Common), Abyssal, Draconic"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok's innate spellcasting ability is Charisma (spell save DC 13). Sekelok\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only), [poison spray](/compendium/spells/poison-spray.md)\n\n3/day each:\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Sekelok can regain 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Sekelok makes three attacks with its greatsword or its shortbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, plus 7 (2d6) slashing damage if Sekelok has more than\
    \ half of its total hit points remaining."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sekelok has more\
    \ than half of its total hit points remaining."
  "name": "Shortbow"
"source":
- "ToA"
"image": "[[Sekelok.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 120*

## Environment

desert, urban
---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/fey
aliases: ["Naiad"]
statblock: true
"name": "Naiad"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "18"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each:\
    \ [fly](/compendium/spells/fly.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad makes two psychic touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) psychic damage."
  "name": "Psychic Touch"
"source":
- "CM"
name: Naiad
image: "[[Naiad.png]]"
---

# Naiad

```statblock
"name": "Naiad"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "18"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each:\
    \ [fly](/compendium/spells/fly.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad makes two psychic touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) psychic damage."
  "name": "Psychic Touch"
"source":
- "CM"
"image": "[[Naiad.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 84*
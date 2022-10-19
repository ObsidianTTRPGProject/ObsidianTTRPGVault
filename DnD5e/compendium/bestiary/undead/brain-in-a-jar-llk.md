---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/medium
- monster/type/undead
aliases: ["Brain in a Jar"]
statblock: true
"name": "Brain in a Jar"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "1"
- !!int "1"
- !!int "15"
- !!int "19"
- !!int "10"
- !!int "15"
"speed": "walk 0 ft."
"saves":
  "Charisma": !!int "5"
  "Intelligence": !!int "7"
"damage_immunities": "necrotic, poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar's innate spellcasting ability is Intelligence (spell\
    \ save DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [mage\
    \ hand](/compendium/spells/mage-hand.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n1/day each: [compulsion](/compendium/spells/compulsion.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [sleep](/compendium/spells/sleep.md) (cast at 3rd level), [Tasha's hideous laughter](/compendium/spells/tashas-hideous-laughter.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [command](/compendium/spells/command.md),\
    \ [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar can sense the presence and location of any creature\
    \ within 300 feet of it that has an Intelligence of 3 or higher, regardless of\
    \ interposing barriers, unless the creature is protected by a [mind blank](/compendium/spells/mind-blank.md)\
    \ spell."
  "name": "Detect Sentience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ 13 (2d8 + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "LLK"
- "IMR"
name: Brain in a Jar
image: "[[Brain in a Jar.png]]"
---

# Brain in a Jar

```statblock
"name": "Brain in a Jar"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "1"
- !!int "1"
- !!int "15"
- !!int "19"
- !!int "10"
- !!int "15"
"speed": "walk 0 ft."
"saves":
  "Charisma": !!int "5"
  "Intelligence": !!int "7"
"damage_immunities": "necrotic, poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar's innate spellcasting ability is Intelligence (spell\
    \ save DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [mage\
    \ hand](/compendium/spells/mage-hand.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n1/day each: [compulsion](/compendium/spells/compulsion.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [sleep](/compendium/spells/sleep.md) (cast at 3rd level), [Tasha's hideous laughter](/compendium/spells/tashas-hideous-laughter.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [command](/compendium/spells/command.md),\
    \ [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar can sense the presence and location of any creature\
    \ within 300 feet of it that has an Intelligence of 3 or higher, regardless of\
    \ interposing barriers, unless the creature is protected by a [mind blank](/compendium/spells/mind-blank.md)\
    \ spell."
  "name": "Detect Sentience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brain in a jar magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ 13 (2d8 + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "LLK"
- "IMR"
"image": "[[Brain in a Jar.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 38, Infernal Machine Rebuild*
---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Horncaller"]
statblock: true
"name": "Horncaller"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "13"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Animal Handling": !!int "4"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller's innate spellcasting ability is Wisdom (spell save DC 14).\
    \ The horncaller can innately cast the following spells, requiring no material\
    \ components:\n\n1/day each: [bless](/compendium/spells/bless.md), [conjure\
    \ animals](/compendium/spells/conjure-animals.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller can communicate with beasts as if they shared a language."
  "name": "Speak with Beasts"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller makes two melee attacks with its staff and uses One with\
    \ the Worldsoul."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage, or 5 (1d8 + 1) bludgeoning damage if used with two hands."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller chooses one beast it can see within 30 feet of it. If the\
    \ beast can hear the horncaller, the beast uses its reaction to make one melee\
    \ attack against a target that the horncaller can see."
  "name": "One with the Worldsoul"
"source":
- "GGR"
name: Horncaller
image: "[[Horncaller.png]]"
---

# Horncaller

```statblock
"name": "Horncaller"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "13"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Animal Handling": !!int "4"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller's innate spellcasting ability is Wisdom (spell save DC 14).\
    \ The horncaller can innately cast the following spells, requiring no material\
    \ components:\n\n1/day each: [bless](/compendium/spells/bless.md), [conjure\
    \ animals](/compendium/spells/conjure-animals.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller can communicate with beasts as if they shared a language."
  "name": "Speak with Beasts"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller makes two melee attacks with its staff and uses One with\
    \ the Worldsoul."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage, or 5 (1d8 + 1) bludgeoning damage if used with two hands."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horncaller chooses one beast it can see within 30 feet of it. If the\
    \ beast can hear the horncaller, the beast uses its reaction to make one melee\
    \ attack against a target that the horncaller can see."
  "name": "One with the Worldsoul"
"source":
- "GGR"
"image": "[[Horncaller.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 253*

## Description

Specialized shamans called horncallers use their magic to call wild beasts to fight alongside Selesnya troops. In quieter times, they tend the animals associated with Selesnya enclaves and parks.
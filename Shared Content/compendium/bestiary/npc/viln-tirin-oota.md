---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/coastal
- monster/environment/hill
- monster/environment/arctic
- monster/environment/urban
- monster/environment/forest
- monster/environment/desert
aliases: ["Viln Tirin"]
statblock: true
"name": "Viln Tirin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "any two languages, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln's innate spellcasting ability is Charisma (spell save DC 13). Viln\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln has advantage on saving throws against being charmed, and magic can't\
    \ put Viln to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Viln has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln carries a [scimitar of speed](/compendium/items/scimitar-of-speed.md)\
    \ and can make one attack with it as a bonus action on her turn. Viln also carries\
    \ four daggers coated with [purple worm poison](/compendium/items/purple-worm-poison.md).\
    \ The poison on a dagger's blade is good for one hit only, whether the poison\
    \ takes effect or not."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Viln makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln adds 2 to its AC against one melee attack that would hit it. To do\
    \ so, Viln must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
name: Viln Tirin
image: "[[Viln Tirin.png]]"
---

# Viln Tirin

```statblock
"name": "Viln Tirin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "any two languages, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln's innate spellcasting ability is Charisma (spell save DC 13). Viln\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln has advantage on saving throws against being charmed, and magic can't\
    \ put Viln to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Viln has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln carries a [scimitar of speed](/compendium/items/scimitar-of-speed.md)\
    \ and can make one attack with it as a bonus action on her turn. Viln also carries\
    \ four daggers coated with [purple worm poison](/compendium/items/purple-worm-poison.md).\
    \ The poison on a dagger's blade is good for one hit only, whether the poison\
    \ takes effect or not."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln makes three melee attacks: two with its scimitar and one with its\
    \ dagger. Or Viln makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Viln adds 2 to its AC against one melee attack that would hit it. To do\
    \ so, Viln must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
"image": "[[Viln Tirin.png]]"
```
^statblock

*Source: Out of the Abyss p. 202*

## Environment

coastal, hill, arctic, urban, forest, desert
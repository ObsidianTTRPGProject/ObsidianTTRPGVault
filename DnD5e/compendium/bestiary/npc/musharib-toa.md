---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Musharib"]
statblock: true
"name": "Musharib"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "13"
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "11"
"speed": "walk 25 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Dwarvish"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Musharib's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [hunter's\
    \ mark](/compendium/spells/hunters-mark.md), [jump](/compendium/spells/jump.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [speak with\
    \ animals](/compendium/spells/speak-with-animals.md), [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Musharib has advantage on saving throws against poison."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) slashing damage."
  "name": "Handaxe"
"source":
- "ToA"
name: Musharib
image: "[[Musharib.png]]"
---

# Musharib

```statblock
"name": "Musharib"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "13"
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "11"
"speed": "walk 25 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Dwarvish"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Musharib's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material components:\n\n1/day each: [hunter's\
    \ mark](/compendium/spells/hunters-mark.md), [jump](/compendium/spells/jump.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [speak with\
    \ animals](/compendium/spells/speak-with-animals.md), [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Musharib has advantage on saving throws against poison."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) slashing damage."
  "name": "Handaxe"
"source":
- "ToA"
"image": "[[Musharib.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 34*
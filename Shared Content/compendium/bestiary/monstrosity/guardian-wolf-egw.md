---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/huge
- monster/type/monstrosity
aliases: ["Guardian Wolf"]
statblock: true
"name": "Guardian Wolf"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "22"
- !!int "14"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "8"
"speed": "walk 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Elvish"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on attack rolls against a creature if at least one\
    \ of the wolf's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d10\
    \ + 6) piercing damage. If the target is a creature, it must succeed on a DC 16\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage."
  "name": "Claws"
"source":
- "EGW"
name: Guardian Wolf
image: "[[Guardian Wolf.png]]"
---

# Guardian Wolf

```statblock
"name": "Guardian Wolf"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "22"
- !!int "14"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "8"
"speed": "walk 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Elvish"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing\
    \ or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf has advantage on attack rolls against a creature if at least one\
    \ of the wolf's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wolf makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d10\
    \ + 6) piercing damage. If the target is a creature, it must succeed on a DC 16\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage."
  "name": "Claws"
"source":
- "EGW"
"image": "[[Guardian Wolf.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 272*
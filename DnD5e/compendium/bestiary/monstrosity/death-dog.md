---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Death Dog"]
statblock: true
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dog has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two-Headed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage. If the target is a creature, it must succeed on a DC 12\
    \ Constitution saving throw against disease or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the creature must repeat\
    \ the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This\
    \ reduction lasts until the disease is cured. The creature dies if the disease\
    \ reduces its hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "WDH"
- "WDMM"
- "MOT"
- "LoX"
name: Death Dog
image: "[[Death Dog.png]]"
---

# Death Dog

```statblock
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dog has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two-Headed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage. If the target is a creature, it must succeed on a DC 12\
    \ Constitution saving throw against disease or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the creature must repeat\
    \ the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This\
    \ reduction lasts until the disease is cured. The creature dies if the disease\
    \ reduces its hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "WDH"
- "WDMM"
- "MOT"
- "LoX"
"image": "[[Death Dog.png]]"
```
^statblock

*Source: Monster Manual p. 321, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros, Light of Xaryxis*

## Description

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

## Environment

desert
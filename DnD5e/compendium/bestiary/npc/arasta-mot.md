---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/huge
- monster/type/monstrosity
aliases: ["Arasta"]
statblock: true
"name": "Arasta"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "24"
- !!int "16"
- !!int "23"
- !!int "15"
- !!int "22"
- !!int "17"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Nature": !!int "9"
  "Intimidation": !!int "10"
  "Deception": !!int "10"
  "Stealth": !!int "10"
  "Perception": !!int "13"
  "Arcana": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Celestial, Common, Sylvan"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Arasta is reduced to 0 hit points, she doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, she regains 200 hit points. In addition, Arasta's children immediately\
    \ swarm over her body to protect her, granting her 100 temporary hit points."
  "name": "Armor of Spiders (Mythic Trait; Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Arasta fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta makes three attacks: one with her bite and two with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one creature. Hit: 20 (3d8\
    \ + 7) piercing damage, and the target must make a DC 21 Constitution saving throw,\
    \ taking 32 (5d12) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the damage reduces the target to 0 hit points, the target\
    \ is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta unleashes her hair in the form of webbing that fills a 30-foot cube\
    \ next to her. The web is difficult terrain, its area is lightly obscured, and\
    \ it lasts for 1 minute. Any creature that moves into the web or that starts its\
    \ turn there must make a DC 21 Dexterity saving throw. On a failed save, the creature\
    \ is [restrained](/rules/conditions.md#restrained) while in the web. A creature\
    \ can use an action to make a DC 21 Strength check. On a success, it can free\
    \ itself or a creature within 5 feet of it that is [restrained](/rules/conditions.md#restrained)\
    \ by the web. This webbing is immune to all damage except magical fire. A 5-foot\
    \ cube of the web is destroyed if it takes at least 20 fire damage from a spell\
    \ or other magical source on a single turn."
  "name": "Web of Hair (Recharge 4-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta makes one attack with her claws."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta causes two [swarms of spiders](/compendium/bestiary/beast/swarm-of-spiders.md)\
    \ to appear in unoccupied spaces within 5 feet of her."
  "name": "Swarm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature [restrained](/rules/conditions.md#restrained) by Arasta's\
    \ Web of Hair takes 18 (4d8) poison damage."
  "name": "Toxic Web (Costs 3 Actions)"
"source":
- "MOT"
name: Arasta
image: "[[Arasta.png]]"
---

# Arasta

```statblock
"name": "Arasta"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "24"
- !!int "16"
- !!int "23"
- !!int "15"
- !!int "22"
- !!int "17"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Nature": !!int "9"
  "Intimidation": !!int "10"
  "Deception": !!int "10"
  "Stealth": !!int "10"
  "Perception": !!int "13"
  "Arcana": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Celestial, Common, Sylvan"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Arasta is reduced to 0 hit points, she doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, she regains 200 hit points. In addition, Arasta's children immediately\
    \ swarm over her body to protect her, granting her 100 temporary hit points."
  "name": "Armor of Spiders (Mythic Trait; Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Arasta fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta makes three attacks: one with her bite and two with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one creature. Hit: 20 (3d8\
    \ + 7) piercing damage, and the target must make a DC 21 Constitution saving throw,\
    \ taking 32 (5d12) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the damage reduces the target to 0 hit points, the target\
    \ is stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta unleashes her hair in the form of webbing that fills a 30-foot cube\
    \ next to her. The web is difficult terrain, its area is lightly obscured, and\
    \ it lasts for 1 minute. Any creature that moves into the web or that starts its\
    \ turn there must make a DC 21 Dexterity saving throw. On a failed save, the creature\
    \ is [restrained](/rules/conditions.md#restrained) while in the web. A creature\
    \ can use an action to make a DC 21 Strength check. On a success, it can free\
    \ itself or a creature within 5 feet of it that is [restrained](/rules/conditions.md#restrained)\
    \ by the web. This webbing is immune to all damage except magical fire. A 5-foot\
    \ cube of the web is destroyed if it takes at least 20 fire damage from a spell\
    \ or other magical source on a single turn."
  "name": "Web of Hair (Recharge 4-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta makes one attack with her claws."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Arasta causes two [swarms of spiders](/compendium/bestiary/beast/swarm-of-spiders.md)\
    \ to appear in unoccupied spaces within 5 feet of her."
  "name": "Swarm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature [restrained](/rules/conditions.md#restrained) by Arasta's\
    \ Web of Hair takes 18 (4d8) poison damage."
  "name": "Toxic Web (Costs 3 Actions)"
"source":
- "MOT"
"image": "[[Arasta.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 248*

## Description

A victim of the gods' petty rivalries, Arasta was once one of Nylea's most beloved dryad companions. Phenax's bitterness saw her transformed into an arachnid monstrosity and driven into the darkest depths of the Nessian Wood. Now she broods on her unjust fate and the fickleness of the gods who left her cursed with monstrous immortality.

Arasta appears as a gigantic spiderlike creature, her few humanoid features made monstrous by cruel magic and ages of hatred. Webs fill her lair deep in the Nessian Wood, sticky strands made not of silk but of her own endless hair. In her darkened realm, Arasta broods on her hatred of the gods and their servants. She doesn't do so alone, though, as innumerable arachnids fawn over her, serving as her eyes throughout the wilderness, disposing of victims trapped within her hair, and sacrificing themselves in her defense if they must.

See "Myths of Nylea" in chapter 2 for more details on the tragedy of Arasta.
---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Severin"]
statblock: true
"name": "Severin"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "10"
- !!int "13"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Religion": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "acid, cold, lightning, poison, "
"damage_immunities": "fire"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "While wearing the Mask of the Dragon Queen: darkvision 60 ft., passive\
  \ Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin has the [Mask of the Dragon Queen](/compendium/items/mask-of-the-dragon-queen-rot.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin adds his Charisma bonus to his AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Severin deals fire damage to a creature while wearing the Mask of the\
    \ Dragon Queen, the target catches fire. At the start of each of its turns, the\
    \ burning target takes 5 (1d10) fire damage. A creature within reach of the fire\
    \ can use an action to extinguish it."
  "name": "Ignite Enemy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing the Mask of the Dragon Queen, if Severin fails a saving throw,\
    \ he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (4d8)\
    \ fire damage."
  "name": "Burning Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 90 ft., one target. Hit: 40 (9d8)\
    \ fire damage."
  "name": "Flaming Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin chooses a point he can see within 60 feet of him. Each creature\
    \ within 5 feet of that point must make a DC 17 Dexterity saving throw, taking\
    \ 18 (4d8) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Scorching Burst"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Severin is wearing the Mask of the Dragon Queen, he can take 3 legendary\
    \ actions, choosing from the options listed. Only one legendary action option\
    \ can be used at a time and only at the end of another creature's turn. Severin\
    \ regains spent legendary actions at the start of his turn."
  "name": !!null "null"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin, along with any objects he is wearing or carrying, teleports up\
    \ to 60 feet to an unoccupied space he can see. Each creature within 5 feet of\
    \ Severin before he teleports takes 5 (1d10) fire damage."
  "name": "Fiery Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin targets one creature he can see within 30 feet of him. The target\
    \ is wrapped in magical chains of fire and [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) target takes 21 (6d6) fire\
    \ damage at the start of each of its turns. At the end of its turns, the target\
    \ can make a DC 17 Strength saving throw, ending the effect on itself on a success."
  "name": "Hellish Chains (Costs 3 Actions)"
"source":
- "RoT"
- "ToD"
name: Severin
image: "[[Severin.png]]"
---

# Severin

```statblock
"name": "Severin"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "10"
- !!int "13"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "5"
"skillsaves":
  "Religion": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "acid, cold, lightning, poison, "
"damage_immunities": "fire"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "While wearing the Mask of the Dragon Queen: darkvision 60 ft., passive\
  \ Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin has the [Mask of the Dragon Queen](/compendium/items/mask-of-the-dragon-queen-rot.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin adds his Charisma bonus to his AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Severin deals fire damage to a creature while wearing the Mask of the\
    \ Dragon Queen, the target catches fire. At the start of each of its turns, the\
    \ burning target takes 5 (1d10) fire damage. A creature within reach of the fire\
    \ can use an action to extinguish it."
  "name": "Ignite Enemy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing the Mask of the Dragon Queen, if Severin fails a saving throw,\
    \ he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (4d8)\
    \ fire damage."
  "name": "Burning Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 90 ft., one target. Hit: 40 (9d8)\
    \ fire damage."
  "name": "Flaming Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin chooses a point he can see within 60 feet of him. Each creature\
    \ within 5 feet of that point must make a DC 17 Dexterity saving throw, taking\
    \ 18 (4d8) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Scorching Burst"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Severin is wearing the Mask of the Dragon Queen, he can take 3 legendary\
    \ actions, choosing from the options listed. Only one legendary action option\
    \ can be used at a time and only at the end of another creature's turn. Severin\
    \ regains spent legendary actions at the start of his turn."
  "name": !!null "null"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin, along with any objects he is wearing or carrying, teleports up\
    \ to 60 feet to an unoccupied space he can see. Each creature within 5 feet of\
    \ Severin before he teleports takes 5 (1d10) fire damage."
  "name": "Fiery Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Severin targets one creature he can see within 30 feet of him. The target\
    \ is wrapped in magical chains of fire and [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) target takes 21 (6d6) fire\
    \ damage at the start of each of its turns. At the end of its turns, the target\
    \ can make a DC 17 Strength saving throw, ending the effect on itself on a success."
  "name": "Hellish Chains (Costs 3 Actions)"
"source":
- "RoT"
- "ToD"
"image": "[[Severin.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 92, Tyranny of Dragons p. 189*
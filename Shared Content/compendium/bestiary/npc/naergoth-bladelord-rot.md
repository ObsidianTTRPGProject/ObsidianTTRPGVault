---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/undead
aliases: ["Naergoth Bladelord"]
statblock: true
"name": "Naergoth Bladelord"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Naergoth has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Naergoth makes three attacks, either with his longsword or longbow. He\
    \ can use Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20 (5d6\
    \ + 3) necrotic damage. The target must succeed on a DC 15 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) if used with two hands, plus 10 (3d6)\
    \ necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage plus 10 (3d6) necrotic damage."
  "name": "Longbow"
"source":
- "RoT"
- "ToD"
name: Naergoth Bladelord
image: "[[Naergoth Bladelord.png]]"
---

# Naergoth Bladelord

```statblock
"name": "Naergoth Bladelord"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Naergoth has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Naergoth makes three attacks, either with his longsword or longbow. He\
    \ can use Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20 (5d6\
    \ + 3) necrotic damage. The target must succeed on a DC 15 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) if used with two hands, plus 10 (3d6)\
    \ necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage plus 10 (3d6) necrotic damage."
  "name": "Longbow"
"source":
- "RoT"
- "ToD"
"image": "[[Naergoth Bladelord.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 90, Tyranny of Dragons p. 186*
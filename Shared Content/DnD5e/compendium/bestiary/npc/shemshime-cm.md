---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/undead
aliases: ["Shemshime"]
statblock: true
"name": "Shemshime"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "6"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "acid, bludgeoning, fire, lightning, piercing, slashing, thunder"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces Shemshime to 0 hit points, Shemshime instead drops to\
    \ 1 hit point unless the damage is the result of Shemshime being crushed by an\
    \ object weighing at least 1,000 pounds."
  "name": "Crushing End"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) psychic damage."
  "name": "Maddening Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime chooses up to two creatures it can see within 60 feet of it.\
    \ Each target must succeed on a DC 13 Wisdom saving throw, or that target takes\
    \ 7 (1d8 + 3) psychic damage and must use its reaction to make a melee weapon\
    \ attack against one creature it can reach (Shemshime's choice) that Shemshime\
    \ can see."
  "name": "Whispers of Violence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime targets one creature it can see within 30 feet of it. The creature\
    \ must make a DC 13 Wisdom saving throw. On a failed save, it takes 21 (4d8 +\
    \ 3) psychic damage and is [stunned](/rules/conditions.md#stunned) until the end\
    \ of its next turn. On a successful save, it takes half as much damage and isn't\
    \ [stunned](/rules/conditions.md#stunned)."
  "name": "Howling Babble (Recharge 6)"
"source":
- "CM"
name: Shemshime
image: "[[Shemshime.png]]"
---

# Shemshime

```statblock
"name": "Shemshime"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "6"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "acid, bludgeoning, fire, lightning, piercing, slashing, thunder"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces Shemshime to 0 hit points, Shemshime instead drops to\
    \ 1 hit point unless the damage is the result of Shemshime being crushed by an\
    \ object weighing at least 1,000 pounds."
  "name": "Crushing End"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) psychic damage."
  "name": "Maddening Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime chooses up to two creatures it can see within 60 feet of it.\
    \ Each target must succeed on a DC 13 Wisdom saving throw, or that target takes\
    \ 7 (1d8 + 3) psychic damage and must use its reaction to make a melee weapon\
    \ attack against one creature it can reach (Shemshime's choice) that Shemshime\
    \ can see."
  "name": "Whispers of Violence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shemshime targets one creature it can see within 30 feet of it. The creature\
    \ must make a DC 13 Wisdom saving throw. On a failed save, it takes 21 (4d8 +\
    \ 3) psychic damage and is [stunned](/rules/conditions.md#stunned) until the end\
    \ of its next turn. On a successful save, it takes half as much damage and isn't\
    \ [stunned](/rules/conditions.md#stunned)."
  "name": "Howling Babble (Recharge 6)"
"source":
- "CM"
"image": "[[Shemshime.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 69*
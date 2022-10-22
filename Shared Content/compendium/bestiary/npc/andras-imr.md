---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/urban
aliases: ["Andras"]
statblock: true
"name": "Andras"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common, Giant Owl"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Andras has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Andras scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Andras is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, Andras instead takes no damage if it\
    \ succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Andras that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Andras doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be cursed with wererat lycanthropy."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must succeed on a DC 11 Constitution\
    \ saving throw or be cursed with wererat lycanthropy."
  "name": "Light Crossbow"
"source":
- "IMR"
name: Andras
image: "[[Andras.png]]"
---

# Andras

```statblock
"name": "Andras"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common, Giant Owl"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Andras has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Andras scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Andras is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, Andras instead takes no damage if it\
    \ succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Andras that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Andras doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Andras makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be cursed with wererat lycanthropy."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must succeed on a DC 11 Constitution\
    \ saving throw or be cursed with wererat lycanthropy."
  "name": "Light Crossbow"
"source":
- "IMR"
"image": "[[Andras.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 31*

## Environment

urban
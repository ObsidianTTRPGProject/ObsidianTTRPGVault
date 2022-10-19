---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/monstrosity
aliases: ["Draconian Infiltrator"]
statblock: true
"name": "Draconian Infiltrator"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "11"
- !!int "17"
- !!int "14"
- !!int "9"
- !!int "13"
- !!int "11"
"speed": "walk 40 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian is reduced to 0 hit points, it turns into a puddle of\
    \ acid and splashes acid on those around it. Each creature within 5 feet of the\
    \ draconian must succeed on a DC 12 Dexterity saving throw or be covered in acid\
    \ for 1 minute. A creature can use its action to scrape or wash the acid off itself\
    \ or another creature. A creature covered in the acid takes 7 (2d6) acid damage\
    \ at the start of each of its turns."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian falls and isn't [incapacitated](/rules/conditions.md#incapacitated),\
    \ it subtracts up to 100 feet from the fall when calculating the fall's damage,\
    \ and it can move up to 2 feet horizontally for every 1 foot it descends."
  "name": "Glide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The draconian makes two Dagger attacks. If both attacks hit the same creature,\
    \ the target must succeed on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of the target's next turn. While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target is also [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Dagger"
"source":
- "FTD"
name: Draconian Infiltrator
image: "[[Draconian Infiltrator.png]]"
---

# Draconian Infiltrator

```statblock
"name": "Draconian Infiltrator"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "11"
- !!int "17"
- !!int "14"
- !!int "9"
- !!int "13"
- !!int "11"
"speed": "walk 40 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian is reduced to 0 hit points, it turns into a puddle of\
    \ acid and splashes acid on those around it. Each creature within 5 feet of the\
    \ draconian must succeed on a DC 12 Dexterity saving throw or be covered in acid\
    \ for 1 minute. A creature can use its action to scrape or wash the acid off itself\
    \ or another creature. A creature covered in the acid takes 7 (2d6) acid damage\
    \ at the start of each of its turns."
  "name": "Death Throes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian falls and isn't [incapacitated](/rules/conditions.md#incapacitated),\
    \ it subtracts up to 100 feet from the fall when calculating the fall's damage,\
    \ and it can move up to 2 feet horizontally for every 1 foot it descends."
  "name": "Glide"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The draconian makes two Dagger attacks. If both attacks hit the same creature,\
    \ the target must succeed on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of the target's next turn. While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target is also [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Dagger"
"source":
- "FTD"
"image": "[[Draconian Infiltrator.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 178*

## Description

Copper, black, and topaz dragon eggs yield these sly and stealthy draconians, who often serve their creators as scouts and spies. They use the paralytic venom of their saliva to coat their weapons, making them formidable assassins as well. Their wings allow them to turn a fall into a rough glide. When draconian infiltrators die, their bodies dissolve into pools of acid.

On the world of Krynn, draconian infiltrators formed from copper dragon eggs are called kapak draconians.

**Draconians.** Draconians are bipedal monsters born from dragon eggs that have been corrupted or warped by powerful magic. Most often, this corruption is a deliberate act, the work of an aspiring tyrant seeking to transform stolen eggs into a draconian army. A single corrupted egg yields several draconians of the same kind. A draconian might be taken for a dragonborn at first glance, though most kinds of draconians have wings.

When draconians die, they do not go quietly. Instead, their lifeless bodies unleash a last act of magical violence.
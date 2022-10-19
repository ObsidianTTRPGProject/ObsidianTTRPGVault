---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/large
- monster/type/undead
aliases: ["Phylaskia"]
statblock: true
"name": "Phylaskia"
"size": "Large"
"type": "undead"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "necrotic, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "all"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the phylaskia must\
    \ make a DC 15 Wisdom saving throw. On a successful save, the creature is immune\
    \ to this aura for the next 24 hours. On a failed save, the creature has disadvantage\
    \ on saving throws and its speed is halved until the start of its next turn."
  "name": "Gatekeeper's Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the phylaskia to 0 hit points, it must make a Constitution\
    \ saving throw with a DC equal to 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the phylaskia drops to 1 hit point instead."
  "name": "Undead Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phylaskia can't be surprised."
  "name": "Vigilant"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phylaskia makes two longsword attacks and uses its Strength Drain once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage, or 16 (2d10 + 5) slashing damage if used with two hands,\
    \ plus 11 (2d10) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 12 (2d6\
    \ + 5) necrotic damage. Unless the target is immune to necrotic damage, its Strength\
    \ score is reduced by 1d4. The target dies if this reduces its Strength to 0.\
    \ Otherwise, the reduction lasts until the target finishes a short or long rest."
  "name": "Strength Drain"
"source":
- "MOT"
name: Phylaskia
image: "[[Phylaskia.png]]"
---

# Phylaskia

```statblock
"name": "Phylaskia"
"size": "Large"
"type": "undead"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "necrotic, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "all"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the phylaskia must\
    \ make a DC 15 Wisdom saving throw. On a successful save, the creature is immune\
    \ to this aura for the next 24 hours. On a failed save, the creature has disadvantage\
    \ on saving throws and its speed is halved until the start of its next turn."
  "name": "Gatekeeper's Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the phylaskia to 0 hit points, it must make a Constitution\
    \ saving throw with a DC equal to 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the phylaskia drops to 1 hit point instead."
  "name": "Undead Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phylaskia can't be surprised."
  "name": "Vigilant"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phylaskia makes two longsword attacks and uses its Strength Drain once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage, or 16 (2d10 + 5) slashing damage if used with two hands,\
    \ plus 11 (2d10) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 12 (2d6\
    \ + 5) necrotic damage. Unless the target is immune to necrotic damage, its Strength\
    \ score is reduced by 1d4. The target dies if this reduces its Strength to 0.\
    \ Otherwise, the reduction lasts until the target finishes a short or long rest."
  "name": "Strength Drain"
"source":
- "MOT"
"image": "[[Phylaskia.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 239*

## Description

These armored skeletal spirits guard the borders of the Underworld and its various wards. Sleepless and merciless, they scrutinize all who would pass, and they slay those who defy them.
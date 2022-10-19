---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead
- monster/environment/swamp
- monster/environment/urban
aliases: ["Allip"]
statblock: true
"name": "Allip"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "6"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "15"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) psychic damage."
  "name": "Maddening Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of the allip that can hear it must make a\
    \ DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8 + 3) psychic\
    \ damage, and it is [stunned](/rules/conditions.md#stunned) until the end of its\
    \ next turn. On a successful save, it takes half as much damage and isn't [stunned](/rules/conditions.md#stunned).\
    \ Constructs and Undead are immune to this effect."
  "name": "Howling Babble (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip chooses up to three creatures it can see within 60 feet of it.\
    \ Each target must succeed on a DC 14 Wisdom saving throw, or it takes 12 (2d8\
    \ + 3) psychic damage and must use its reaction to make a melee weapon attack\
    \ against one creature of the allip's choice that the allip can see. Constructs\
    \ and Undead are immune to this effect."
  "name": "Whispers of Compulsion"
"source":
- "MPMM"
- "MTF"
name: Allip
image: "[[Allip.png]]"
---

# Allip

```statblock
"name": "Allip"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "6"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "15"
- !!int "16"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) psychic damage."
  "name": "Maddening Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of the allip that can hear it must make a\
    \ DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8 + 3) psychic\
    \ damage, and it is [stunned](/rules/conditions.md#stunned) until the end of its\
    \ next turn. On a successful save, it takes half as much damage and isn't [stunned](/rules/conditions.md#stunned).\
    \ Constructs and Undead are immune to this effect."
  "name": "Howling Babble (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The allip chooses up to three creatures it can see within 60 feet of it.\
    \ Each target must succeed on a DC 14 Wisdom saving throw, or it takes 12 (2d8\
    \ + 3) psychic damage and must use its reaction to make a melee weapon attack\
    \ against one creature of the allip's choice that the allip can see. Constructs\
    \ and Undead are immune to this effect."
  "name": "Whispers of Compulsion"
"source":
- "MPMM"
- "MTF"
"image": "[[Allip.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 45, Mordenkainen's Tome of Foes p. 116*

## Description

When a creature uncovers a secret that a powerful being has protected with a mighty curse, the result is often the creation of an allip. Secrets protected in this manner range in scope from a demon lord's true name to the hidden truths of the cosmic order. The creature acquires the secret, but the curse annihilates its body and leaves behind a spectral being composed of fragments from the victim's psyche and overwhelming psychic agony.

Every allip is wracked with a horrifying insight that torments what remains of its mind. In the presence of other creatures, an allip seeks to relieve this burden by sharing its secret. The creature can impart only a shard of the knowledge that doomed it, but that piece is enough to wrack the recipient with temporary mental anguish and violent compulsions. The survivors of an allip's attack are sometimes left with a compulsion to learn more about what spawned this monstrosity. Strange phrases echo through their minds, and weird visions occupy their dreams. The sense that some colossal truth sits just outside their recall plagues them for days, months, and sometimes years after their fateful encounter.

**Insidious Lore.** An allip might attempt to share its lore to escape its curse and enter the afterlife. It can transfer knowledge from its mind by guiding another creature to write down what it knows. This process takes days or possibly weeks. An allip can accomplish this task by lurking in the study or workplace of a scholar. If the allip remains hidden, its victim is gradually overcome by frantic energy. A scholar, driven by sudden insights to work night and day, produces reams of text with little memory of exactly what the documents contain. If the allip succeeds, it passes from the world—and its terrible secret hides somewhere in the scholar's text, waiting to be discovered by its next victim.

## Environment

swamp, urban
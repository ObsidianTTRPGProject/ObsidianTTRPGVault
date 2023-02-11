---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/plant
- monster/environment/underdark
aliases: ["Quaggoth Spore Servant"]
statblock: true
"name": "Quaggoth Spore Servant"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spore servant makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "WDMM"
- "IDRotF"
name: Quaggoth Spore Servant
image: "[[Quaggoth Spore Servant.png]]"
---

# Quaggoth Spore Servant

```statblock
"name": "Quaggoth Spore Servant"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spore servant makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "WDMM"
- "IDRotF"
"image": "[[Quaggoth Spore Servant.png]]"
```
^statblock

*Source: Monster Manual p. 230, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden*

## Description

A spore servant is any Large or smaller creature brought back to life by the animating spores of a myconid sovereign. A creature that was never flesh and blood to begin with (such as a construct, elemental, ooze, plant, or undead) can't be turned into a spore servant.

**Retained Characteristics.** The servant retains its Armor Class, hit points, Hit Dice, Strength, Dexterity, Constitution, vulnerabilities, resistances, and immunities.

**Lost Characteristics.** The servant loses its original saving throw and skill bonuses, special senses, and special traits. It loses any action that isn't Multiattack or a melee weapon attack that deals bludgeoning, piercing, or slashing damage. If it has an action or a melee weapon attack that deals some other type of damage, it loses the ability to deal damage of that type, unless the damage comes from a piece of equipment, such as a magic item.

**Type.** The servant's type is plant, and it loses any tags.

**Alignment.** The servant is unaligned.

**Speed.** Reduce all the servant's speeds by 10 feet, to a minimum of 5 feet.

**Ability Scores.** The servant's ability scores change as follows: Int 2 (-4), Wis 6 (-2), Cha 1 (-5).

**Senses.** The servant has [blindsight](/rules/senses.md#blindsight) with a radius of 30 feet, and it is blind beyond this radius.

**Condition Immunities.** The servant can't be [blinded](/rules/conditions.md#blinded), [charmed](/rules/conditions.md#charmed), [frightened](/rules/conditions.md#frightened), or [paralyzed](/rules/conditions.md#paralyzed).

**Languages.** The servant loses all known languages, but it responds to orders given to it by myconids using rapport spores. The servant gives highest priority to orders received from the most powerful myconid.

**Attacks.** If the servant has no other means of dealing damage, it can use its fists or limbs to make unarmed strikes. On a hit, an unarmed strike deals bludgeoning damage equal to 1d4 + the servant's Strength modifier, or, if the servant is Large, 2d4 + its Strength modifier.

## Environment

underdark
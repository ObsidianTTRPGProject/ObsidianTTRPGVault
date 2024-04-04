---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- compendium/src/5e/phb
- ttrpg-cli/spell/class/sorcerer
- ttrpg-cli/spell/class/wizard
- ttrpg-cli/spell/level/7
- ttrpg-cli/spell/school/evocation
classes:
- Sorcerer
- Wizard
aliases: ["Prismatic Spray"]
---
# Prismatic Spray
%%-- Embedded content starts on the next line. --%%
*7th-level, Evocation*  
![](/3-Mechanics/CLI/spells/img/prismatic-spray.webp#right)  

- **Casting time:** 1 action
- **Range:** Self (60-feet cone)
- **Components:** V, S
- **Duration:** Instantaneous

Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a `dice: d8|avg|noform` (`d8`) to determine which color ray affects it.

## 1-Red

The target takes `dice: 10d6|avg|noform` (`10d6`) fire damage on a failed save, or half as much damage on a successful one.

## 2-Orange

The target takes `dice: 10d6|avg|noform` (`10d6`) acid damage on a failed save, or half as much damage on a successful one.

## 3-Yellow

The target takes `dice: 10d6|avg|noform` (`10d6`) lightning damage on a failed save, or half as much damage on a successful one.

## 4-Green

The target takes `dice: 10d6|avg|noform` (`10d6`) poison damage on a failed save, or half as much damage on a successful one.

## 5-Blue

The target takes `dice: 10d6|avg|noform` (`10d6`) cold damage on a failed save, or half as much damage on a successful one.

## 6-Indigo

On a failed save, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained). It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified) condition. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind.

## 7-Violet

On a failed save, the target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded). It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded). (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)

## 8-Special

The target is struck by two rays. Roll twice more, rerolling any 8.

## Summary

**Classes**: [Sorcerer](/3-Mechanics/CLI/classes/sorcerer.md), [Wizard](/3-Mechanics/CLI/classes/wizard.md)

*Source: Player's Handbook p. 267. Available in the SRD.*
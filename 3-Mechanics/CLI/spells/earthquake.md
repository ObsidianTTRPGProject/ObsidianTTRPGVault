---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- compendium/src/5e/phb
- ttrpg-cli/spell/class/cleric
- ttrpg-cli/spell/class/druid
- ttrpg-cli/spell/class/sorcerer
- ttrpg-cli/spell/level/8
- ttrpg-cli/spell/school/evocation
classes:
- Cleric
- Druid
- Sorcerer
aliases: ["Earthquake"]
---
# Earthquake
%%-- Embedded content starts on the next line. --%%
*8th-level, Evocation*  

- **Casting time:** 1 action
- **Range:** 500 feet
- **Components:** V, S, a pinch of dirt, a piece of rock, and a lump of clay
- **Duration:** Concentration, up to 1 minute

You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.

The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration) is broken.

When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).

This spell can have additional effects depending on the terrain in the area, as determined by the DM.

## Fissures

Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of `dice: 1d6|avg|noform` (`1d6`) such fissures open in locations chosen by the DM. Each is `1d10 × 10` feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.

A fissure that opens beneath a structure causes it to automatically collapse (see below).

## Structures

The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes `dice: 5d6|avg|noform` (`5d6`) bludgeoning damage, is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone), and is buried in the rubble, requiring a DC 20 Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics)) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone) or become buried.

## Summary

**Classes**: [Cleric](/3-Mechanics/CLI/classes/cleric.md), [Druid](/3-Mechanics/CLI/classes/druid.md), [Sorcerer](/3-Mechanics/CLI/classes/sorcerer.md)

*Source: Player's Handbook p. 236. Available in the SRD and the Basic Rules.*
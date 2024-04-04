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
aliases: ["Delayed Blast Fireball"]
---
# Delayed Blast Fireball
%%-- Embedded content starts on the next line. --%%
*7th-level, Evocation*  

- **Casting time:** 1 action
- **Range:** 150 feet
- **Components:** V, S, a tiny ball of bat guano and sulfur
- **Duration:** Concentration, up to 1 minute

A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration) is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.

The spell's base damage is `dice: 12d6|avg|noform` (`12d6`). If at the end of your turn the bead has not yet detonated, the damage increases by `dice: 1d6|avg|noform` (`1d6`).

If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.

The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.

**At Higher Levels.** When you cast this spell using a spell slot of 8th level or higher, the base damage increases by `1d6` for each slot level above 7th.

**Classes**: [Sorcerer](/3-Mechanics/CLI/classes/sorcerer.md), [Wizard](/3-Mechanics/CLI/classes/wizard.md)

*Source: Player's Handbook p. 230. Available in the SRD and the Basic Rules.*
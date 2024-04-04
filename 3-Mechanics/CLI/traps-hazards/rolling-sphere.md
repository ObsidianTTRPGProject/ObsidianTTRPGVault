---
obsidianUIMode: preview
cssclasses: json5e-hazard
tags:
- compendium/src/5e/dmg
- ttrpg-cli/hazard/mech
aliases: ["Rolling Sphere"]
---
# Rolling Sphere
*Mechanical Trap*  

When 20 or more pounds of pressure are placed on this trap's pressure plate, a hidden trapdoor in the ceiling opens, releasing a 10-foot-diameter rolling sphere of solid stone.

With a successful DC 15 Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) check, a character can spot the trapdoor and pressure plate.

A search of the floor accompanied by a successful DC 15 Intelligence ([Investigation](/3-Mechanics/CLI/rules/skills.md#Investigation)) check reveals variations in the mortar and stone that betray the pressure plate's presence. The same check made while inspecting the ceiling notes variations in the stonework that reveal the trapdoor. Wedging an iron spike or other object under the pressure plate prevents the trap from activating.

Activation of the sphere requires all creatures present to roll initiative. The sphere rolls initiative with a `dice: d20+8` (`+8`) bonus. On its turn, it moves 60 feet in a straight line.

The sphere can move through creatures' spaces, and creatures can move through its space, treating it as difficult terrain. Whenever the sphere enters a creature's space or a creature enters its space while it's rolling, that creature must succeed on a DC 15 Dexterity saving throw or take `dice:10d10|text(55)` (`10d10`) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).

The sphere stops when it hits a wall or similar barrier. It can't go around corners, but smart dungeon builders incorporate gentle, curving turns into nearby passages that allow the sphere to keep moving.

As an action, a creature within 5 feet of the sphere can attempt to slow it down with a DC 20 Strength check. On a successful check, the sphere's speed is reduced by 15 feet. If the sphere's speed drops to 0, it stops moving and is no longer a threat.

*Source: Dungeon Master's Guide p. 123. Available in the SRD.*
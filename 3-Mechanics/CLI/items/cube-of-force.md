---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
- compendium/src/5e/dmg
- ttrpg-cli/item/attunement/required
- ttrpg-cli/item/rarity/rare
- ttrpg-cli/item/tier/major
- ttrpg-cli/item/wondrous
aliases: 
- "Cube of Force"
---
# Cube of Force
*Wondrous Item, major, rare (requires attunement)*  


This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains `dice: 1d20|avg|noform` (`1d20`) expended charges daily at dawn.

You can use an action to press one of the cube's faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of charges. You can change the barrier's effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration. If your movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains.

**Cube of Force Faces**

| Face | Charges | Effect |
|------|---------|--------|
| 1 | 1 | Gases, wind, and fog can't pass through the barrier. |
| 2 | 2 | Nonliving matter can't pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. |
| 3 | 3 | Living matter can't pass through the barrier. |
| 4 | 4 | Spell effects can't pass through the barrier. |
| 5 | 5 | Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. |
| 6 | 0 | The barrier deactivates. |
^cube-of-force-faces

The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.

| Spell or item | Charges Lost |
|---------------|--------------|
| [Disintegrate](/3-Mechanics/CLI/spells/disintegrate.md) | `dice: 1d12\|avg|noform` (`1d12`) |
| [Horn of blasting](/3-Mechanics/CLI/items/horn-of-blasting.md) | `dice: 1d10\|avg|noform` (`1d10`) |
| [Passwall](/3-Mechanics/CLI/spells/passwall.md) | `dice: 1d6\|avg|noform` (`1d6`) |
| [Prismatic spray](/3-Mechanics/CLI/spells/prismatic-spray.md) | `dice: 1d20\|avg|noform` (`1d20`) |
| [Wall of fire](/3-Mechanics/CLI/spells/wall-of-fire.md) | `dice: 1d4\|avg|noform` (`1d4`) |
^spell-or-item-charges-lost

*Source: Dungeon Master's Guide p. 159. Available in the SRD.*
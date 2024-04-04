---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
- compendium/src/5e/dmg
- ttrpg-cli/item/attunement/required
- ttrpg-cli/item/property/versatile
- ttrpg-cli/item/rarity/very-rare
- ttrpg-cli/item/tier/major
- ttrpg-cli/item/wondrous/staff
aliases: 
- "Staff of Power"
---
# Staff of Power
*Staff, major, very rare (requires attunement by a sorcerer, warlock, or wizard)*  

- **Damage**:
  - One-handed: 1d6 B
  - Two-handed: 1d8 B
- **Properties**: [Versatile](/3-Mechanics/CLI/rules/item-properties.md#Versatile)
- **Weight**: 4.0 lbs.

This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.

The staff has 20 charges for the following properties. The staff regains `dice: 2d8 + 4|avg|noform` (`2d8 + 4`) expended charges daily at dawn. If you expend the last charge, roll a `dice: d20|avg|noform` (`d20`). On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain `dice: 1d8 + 2|avg|noform` (`1d8 + 2`) charges.

## Power Strike

When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra `dice: 1d6|avg|noform` (`1d6`) force damage to the target.

## Spells

While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: [cone of cold](/3-Mechanics/CLI/spells/cone-of-cold.md) (5 charges), [fireball](/3-Mechanics/CLI/spells/fireball.md) (5th-level version, 5 charges), [globe of invulnerability](/3-Mechanics/CLI/spells/globe-of-invulnerability.md) (6 charges), [hold monster](/3-Mechanics/CLI/spells/hold-monster.md) (5 charges), [levitate](/3-Mechanics/CLI/spells/levitate.md) (2 charges), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md) (5th-level version, 5 charges), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md) (1 charge), [ray of enfeeblement](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md) (1 charge), or [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md) (5 charges).

## Retributive Strike

You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.

You have a 50% chance chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.

| Distance from Origin | Effect |
|----------------------|--------|
| 10 ft. away or closer | 8 × the number of charges in the staff |
| 11 to 20 ft. away | 6 × the number of charges in the staff |
| 21 to 30 ft. away | 4 × the number of charges in the staff |
^distance-from-origin-effect

*Source: Dungeon Master's Guide p. 202. Available in the SRD.*
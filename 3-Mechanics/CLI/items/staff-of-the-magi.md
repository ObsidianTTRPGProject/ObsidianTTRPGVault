---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
- compendium/src/5e/dmg
- ttrpg-cli/item/attunement/required
- ttrpg-cli/item/property/versatile
- ttrpg-cli/item/rarity/legendary
- ttrpg-cli/item/tier/major
- ttrpg-cli/item/wondrous/staff
aliases: 
- "Staff of the Magi"
---
# Staff of the Magi
*Staff, major, legendary (requires attunement by a sorcerer, warlock, or wizard)*  

- **Damage**:
  - One-handed: 1d6 B
  - Two-handed: 1d8 B
- **Properties**: [Versatile](/3-Mechanics/CLI/rules/item-properties.md#Versatile)
- **Weight**: 4.0 lbs.

This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.

The staff has 50 charges for the following properties. It regains `dice: 4d6 + 2|avg|noform` (`4d6 + 2`) expended charges daily at dawn. If you expend the last charge, roll a `dice: d20|avg|noform` (`d20`). On a 20, the staff regains `dice: 1d12 + 1|avg|noform` (`1d12 + 1`) charges.

## Spell Absorption

While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).

## Spells

While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: [conjure elemental](/3-Mechanics/CLI/spells/conjure-elemental.md) (7 charges), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md) (3 charges), [fireball](/3-Mechanics/CLI/spells/fireball.md) (7th-level version, 7 charges), [flaming sphere](/3-Mechanics/CLI/spells/flaming-sphere.md) (2 charges), [ice storm](/3-Mechanics/CLI/spells/ice-storm.md) (4 charges), [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (2 charges), [knock](/3-Mechanics/CLI/spells/knock.md) (2 charges), [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md) (7th-level version, 7 charges), [passwall](/3-Mechanics/CLI/spells/passwall.md) (5 charges), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md) (7 charges), [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md) (5 charges), [wall of fire](/3-Mechanics/CLI/spells/wall-of-fire.md) (4 charges), or [web](/3-Mechanics/CLI/spells/web.md) (2 charges).

You can also use an action to cast one of the following spells from the staff without using any charges: [arcane lock](/3-Mechanics/CLI/spells/arcane-lock.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [enlarge/reduce](/3-Mechanics/CLI/spells/enlarge-reduce.md), [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), or [protection from evil and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good.md).

## Retributive Strike

You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.

You have a 50% chance chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.

| Distance from Origin | Damage |
|----------------------|--------|
| 10 ft. away or closer | 8 × the number of charges in the staff |
| 11 to 20 ft. away | 6 × the number of charges in the staff |
| 21 to 30 ft. away | 4 × the number of charges in the staff |
^distance-from-origin-damage

*Source: Dungeon Master's Guide p. 203. Available in the SRD.*
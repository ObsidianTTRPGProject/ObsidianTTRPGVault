---
Name: Earthquake
Level: 8
CastingTime: 1 Action
Ritual: false
Range: 500 Feet
Area: Point
Components: Verbal, Somatic, Material (a pinch of dirt, a piece of rock, and a lump of clay)
Duration: Timed 1 minute
School: Evocation
AttackSave: constitution,dexterity
DamageEffect: bludgeoning
Classes: Cleric, Druid, Sorcerer
SpellSource: PHB
Page: 236
---

> [!infobox|right]
> # Earthquake
> ![[Evocation.png|cover hsmall]]
> ###### Stats
> Type |  Stat |
> ---|---|
> Level | `=this.Level` |
> Casting Time | `=this.CastingTime` |
> Range | `=this.Range` |
> Area | `=this.Area` |
> Components | `=this.Components` |
> Duration | `=this.Duration` |
> School | `=this.School` |
> Attack/Save | `=this.AttackSave` |
> Damage/Effect | `=this.DamageEffect` |
> Classes | `=this.Classes` |

# Earthquake
You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.

The ground in the area becomes {@quickref difficult terrain||3}. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.

When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked [[prone]].

This spell can have additional effects depending on the terrain in the area, as determined by the DM.

## Fissures
Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 × 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.


## Structures
The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes `dice: 5d6|avg` (5d6) bludgeoning damage, is knocked [[prone]], and is buried in the rubble, requiring a DC 20 Strength ([[Athletics]]) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall [[prone]] or become buried.




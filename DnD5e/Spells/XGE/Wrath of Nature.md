---
Name: Wrath of Nature
Level: 5
CastingTime: 1 Action
Ritual: false
Range: 120 Feet
Area: Point
Components: Verbal, Somatic 
Duration: Timed 1 minute
School: Evocation
AttackSave: dexterity,strength
DamageEffect: bludgeoning,slashing
Classes: Druid, Ranger
SpellSource: XGE
Page: 171
---

> [!infobox|right]
> # Wrath of Nature
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

# Wrath of Nature
You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.

## Grasses and Undergrowth
Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.


## Trees
At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take `dice: 4d6|avg` (4d6) slashing damage from whipping branches.


## Roots and Vines
At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become [[restrained]] until the spell ends. A [[restrained]] creature can use an action to make a Strength ([[Athletics]]) check against your spell save DC, ending the effect on itself on a success.


## Rocks
As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes `dice: 3d8|avg` (3d8) nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall [[prone]].




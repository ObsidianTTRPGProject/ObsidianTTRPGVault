---
Name: Bigby's Hand
Level: 5
CastingTime: 1 Action
Ritual: false
Range: 120 Feet
Area: Point
Components: Verbal, Somatic, Material (an eggshell and a snakeskin glove)
Duration: Timed 1 minute
School: Evocation
AttackSave: 
DamageEffect: bludgeoning,force
Classes: Wizard, Artificer (Revisited), Artificer
SpellSource: PHB
Page: 218
---

> [!infobox|right]
> # Bigby's Hand
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

# Bigby's Hand
You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.

The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 ({@d20 8}) and a Dexterity of 10 ({@d20 0}). The hand doesn't fill its space.

When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.

## Clenched Fist
The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes `dice: 4d8|avg` (4d8) force damage.


## Forceful Hand
The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength ([[Athletics]]) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.


## Grasping Hand
The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to `dice: 2d6|avg` (2d6) + your spellcasting ability modifier.


## Interposing Hand
The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is {@quickref difficult terrain||3} for the target.



When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th. 

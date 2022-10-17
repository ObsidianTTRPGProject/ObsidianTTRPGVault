---
Name: Storm of Vengeance
Level: 9
CastingTime: 1 Action
Ritual: false
Range:  Sight
Area: Point
Components: Verbal, Somatic 
Duration: Timed 1 minute
School: Conjuration
AttackSave: constitution,dexterity
DamageEffect: acid,bludgeoning,cold,lightning,thunder
Classes: Druid
SpellSource: PHB
Page: 279
---

> [!infobox|right]
> # Storm of Vengeance
> ![[Conjuration.png|cover hsmall]]
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

# Storm of Vengeance
A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes `dice: 2d6|avg` (2d6) thunder damage and becomes [[deafened]] for 5 minutes.

Each round you maintain concentration on this spell, the storm produces different effects on your turn.

## Round 2
Acidic rain falls from the cloud. Each creature and object under the cloud takes `dice: 1d6|avg` (1d6) acid damage.


## Round 3
You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes `dice: 10d6|avg` (10d6) lightning damage on a failed save, or half as much damage on a successful one.


## Round 4
Hailstones rain down from the cloud. Each creature under the cloud takes `dice: 2d6|avg` (2d6) bludgeoning damage.


## Round 5–10
Gusts and freezing rain assail the area under the cloud. The area becomes {@quickref difficult terrain||3} and is heavily obscured. Each creature there takes `dice: 1d6|avg` (1d6) cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.




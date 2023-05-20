---
MinutesPerMile: 15
HoursPerDay: 8
TravelMethod: Riding Horse 
ExhaustionLevel: 0
HorseshoesofSpeed: No
Encumbered: No
---
# Travel Speed 
**Travel Method:** `=this.TravelMethod` ![[Pasted image 20220922203642.png|right]]
**Current Minutes Per Mile:** `=this.MinutesPerMile` 
**Travel Hours Per Day:** `=this.HoursPerDay`
**Current Speed Bonuses:** `=choice(contains([[Party Configuration]].HorseshoesofSpeed, "Yes"), 30, 0) + choice([[Party Configuration]].Encumbered = "Encumbered", -10, 0) + choice([[Party Configuration]].Encumbered = "Heavily Encumbered", -20, 0)`

### Speed Bonuses (`=choice(contains([[Party Configuration]].HorseshoesofSpeed, "Yes"), 30, 0) + choice([[Party Configuration]].Encumbered = "Encumbered", -10, 0) + choice([[Party Configuration]].Encumbered = "Heavily Encumbered", -20, 0)`)
Add the Current Speed Bonus to the table below and then Evaluate the Formula using Advanced Tables.
**Using [[Horseshoes of Speed]]:** `=this.HorseshoesofSpeed`
**Encumbered?** `=this.Encumbered`
**[[Exhaustion]] Level:** `=this.ExhaustionLevel` 



## Minutes Per Mile Table
Update the MinutesPerMile variable in the front matter per the applicable speed below. 

### Creatures
| Method               | Base Speed | Bonus Speed | Total Speed | Diff Terrain | Normal | Dash |
| -------------------- | ---------- | ----------- | ----------- | ------------ | ------ | ---- |
| Walking              | 30         |             | 30          | 30           | 20     | 15   |
| Camel                | 50         |             | 50          | 18           | 12     | 9    |
| Donkey               | 40         |             | 40          | 22           | 15     | 11   |
| Mule                 | 40         |             | 40          | 22           | 15     | 11   |
| Draft Horse          | 40         |             | 40          | 22           | 15     | 11   |
| Elephant             | 40         |             | 40          | 22           | 15     | 11   |
| Mastiff              | 40         |             | 40          | 22           | 15     | 11   |
| Moorbounder          | 40         |             | 40          | 22           | 15     | 11   |
| Pony                 | 40         |             | 40          | 22           | 15     | 11   |
| Rhinoceros           | 40         |             | 40          | 22           | 15     | 11   |
| Riding Horse         | 60         |             | 60          | 15           | 10     | 8    |
| Saber-Toothed Tiger  | 40         |             | 40          | 22           | 15     | 11   |
| Warhorse             | 60         |             | 60          | 15           | 10     | 8    |
| Griffon (walking)    | 20         |             | 20          | 45           | 30     | 23   |
| Griffon (flying)     | 80         |             | 80          | 11           | 8      | 6    |
| Hippogriff (walking) | 40         |             | 40          | 22           | 15     | 11   |
| Hippogriff (flying)  | 60         |             | 60          | 15           | 10     | 8    |
| Pegasus (walking)    | 60         |             | 60          | 15           | 10     | 8    |
| Pegasus (flying)     | 90         |             | 90          | 10           | 7      | 5    |
| Peryton (walking)    | 20         |             | 20          | 45           | 30     | 23   |
| Peryton (flying)     | 60         |             | 60          | 15           | 10     | 8    |
| Unicorn              | 50         |             | 50          | 18           | 12     | 9    |
<!-- TBLFM: $4=($2+$3);%.0f -->
<!-- TBLFM: $6=(60/($4/10));%.0f -->
<!-- TBLFM: $5=(60/(($4/10)*0.666667));%.0f -->
<!-- TBLFM: $7=(60/(($4/10)*1.333333));%.0f -->

### Magical Travel
| Method                         | Base Speed | Bonus Speed | Total Speed | Diff Terrain | Normal | Dash |
| ------------------------------ | ---------- | ----------- | ----------- | ------------ | ------ | ---- |
| Broom of Flying                | 50         |             | 50          | 18           | 12     | 9    |
| Broom of Flying (over 200 lbs) | 30         |             | 30          | 30           | 20     | 15   |
| Carpet of Flying (3ft. x 5ft.) | 80         |             | 80          | 11           | 8      | 6    |
| Carpet of Flying (4ft. x 6ft.) | 60         |             | 60          | 15           | 10     | 8    |
| Carpet of Flying (5ft. x 7ft.) | 40         |             | 40          | 22           | 15     | 11   |
| Carpet of Flying (6ft. x 9ft.) | 30         |             | 30          | 30           | 20     | 15   |
| Wind Walk                      | 300        |             | 300         | 3            | 2      | 2    |
| Cauldron of Flying             | 50         |             | 50          | 18           | 12     | 9    |
<!-- TBLFM: $4=($2+$3);%.0f -->
<!-- TBLFM: $6=(60/($4/10));%.0f -->
<!-- TBLFM: $5=(60/(($4/10)*0.666667));%.0f -->
<!-- TBLFM: $7=(60/(($4/10)*1.333333));%.0f -->

### Vehicles
| Method                             | Base Speed | Bonus Speed | Total Speed | Diff Terrain | Normal | Dash |
| ---------------------------------- | ---------- | ----------- | ----------- | ------------ | ------ | ---- |
| Cart pulled by Horses              | 30         |             | 30          | 30           | 20     | 15   |
| Cart pulled by PCs                 | 30         |             | 30          | 30           | 20     | 15   |
| PHB: Galley                        | 20         |             | 20          | 45           | 30     | 23   |
| PHB: Keelboat                      | 5          |             | 5           | 180          | 120    | 90   |
| PHB: Longship                      | 15         |             | 15          | 60           | 40     | 30   |
| PHB: Rowboat                       | 10         |             | 10          | 90           | 60     | 45   |
| PHB: Sailing Ship                  | 10         |             | 10          | 90           | 60     | 45   |
| PHB: Warship                       | 15         |             | 15          | 60           | 40     | 30   |
| Aquisions Inc: Battle Balloon      | 45         |             | 45          | 20           | 13     | 10   |
| Aquisions Inc: Mechanical Beholder | 15         |             | 15          | 60           | 40     | 30   |
| Ebberon: Lyrandar Airship          | 200        |             | 200         | 4            | 3      | 2    |
| Ebberon: Lyrandar Galleon          | 100        |             | 100         | 9            | 6      | 5    |
| Ebberon: Orien Lightning Rail      | 300        |             | 300         | 3            | 2      | 2    |
<!-- TBLFM: $4=($2+$3);%.0f -->
<!-- TBLFM: $6=(60/($4/10));%.0f -->
<!-- TBLFM: $5=(60/(($4/10)*0.666667));%.0f -->
<!-- TBLFM: $7=(60/(($4/10)*1.333333));%.0f -->

### Travelling More Than 8 Hours A Day
Requires hourly [[Constitution]]  Saves after 8 hours:

DC 11 at hour 9
DC 12 at hour 10
Each failure adds a level of [[Exhaustion]] .




---
transportation: "rhinoceros" 
speed: "normal"
exhaustionLevel: 0
hoursPerDay: 8
---

[[Example]]

The party is traveling by `= this.transportation`.

The party is traveling by `= [[Transportation]].movement[this.transportation].name`. 

It has a base speed of `= [[Transportation]].movement[this.transportation].base` and takes `= [[Transportation]].movement[this.transportation].normal` minutes to go one mile.


## Original Code
🕓`= round(127 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |

## Calculate Speed

🕓 `= round(160 * ([[Transportation]].movement[[[Current Party]].transportation][[[Current Party]].speed] * choice([[Current Party]].exhaustionLevel > 1, 2, 1)) / 60 / [[Current Party]].hoursPerDay, 0)`

🕓 `= [[Transportation]].movement[[[Current Party]].transportation][[[Current Party]].speed]`

`= [[Current Party]].exhaustionLevel`

`= [[Current Party]].hoursPerDay`

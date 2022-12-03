---
transportation: "horse"
speed: "slow"
---

[[Example]]

The party is traveling by `= this.transportation`.

The party is traveling by `= [[Transportation]].movement[this.transportation].name`. 

It has a base speed of `= [[Transportation]].movement[this.transportation].base` and takes `= [[Transportation]].movement[this.transportation].normal` minutes to go one mile.


## Calculate Speed

`= round(325 * ([[Transportation]].movement[[[Current Party]].transportation][[[Current Party]].speed] * choice([[Current Party]].exhaustionLevel > 1, 2, 1)) / 60 / [[Current Party]].hoursPerDay, 1)`


---
transportation: "horse"
speed: "fast"
---

[[Example]]

The local note is using object "`= this.transportation`".

The party is using object "`= [[Current Party]].transportation`".

Lookup, the fast rate hard coded to "fast" is "`= [[Transportation]].movement[this.transportation].fast`".

Lookup, the local rate, doing a rate lookup is "`= [[Transportation]].movement[this.transportation][this.speed]`".

Using local variables, the party is 
* Traveling by ==`= [[Transportation]].movement[this.transportation].name` (`= this.speed`)==
* With a base rate of ==`= [[Transportation]].movement[this.transportation].base`==
* And takes ==`= [[Transportation]].movement[this.transportation][this.speed]`== minutes to go a mile.

With a local rate of "`= this.speed`"

With a party rate of "`= [[Current Party]].speed`"

Therefore, the party is 
* Traveling by ==`= [[Transportation]].movement[[[Current Party]].transportation].name` (`= [[Current Party]].speed`)==
* With a base rate of ==`= [[Transportation]].movement[[[Current Party]].transportation].base`==
* And takes ==`= [[Transportation]].movement[[[Current Party]].transportation][[[Current Party]].speed]`== minutes to go a mile.

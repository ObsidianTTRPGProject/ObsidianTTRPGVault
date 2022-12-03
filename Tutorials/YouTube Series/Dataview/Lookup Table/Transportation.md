---
title: "Movement"
transportation: "horse"
movement:
    horse: {name: "Riding horse", base: 60, slow: 25, normal: 10, fast: 7}
    elephant: {name: "Elephant", base: 40, slow: 22, normal: 15, fast: 11}
    walking: {name: "Walking", base: 30, slow: 30, normal: 20, fast: 15}
tags: "Reference/Movement"
---

[[Example]]

```dataviewjs
let pg = dv.current();  // Only look at the current page
let table = "| Name         | Base Speed | Slow | Normal | Fast |\n" +
            "| ------------ | ---------: | ---: | -----: | ---: |\n";  // Table headers
dv.header(3, pg.title);  // Markdown header; can be here or written outside of dataview like normal
for (let move of Object.entries(pg.movement)) {  // Loop through all the objects
    // dv.paragraph(Object.keys(move));  // There is only keys of 0 and 1; 1 holds the actual names
    // dv.paragraph(Object.keys(move[1]));  // Shows the keys that are recognized
    table += "| " + move[1].name +
            " | " + move[1].base +
            " | " + move[1].slow +
            " | " + move[1].normal +
            " | " + move[1].fast +
            " |\n"

}
dv.paragraph(table);
```

The horse has a base speed of `= this.movement.horse.base` and takes `= this.movement.horse.normal` minutes to go 1 mile.

The horse has a base speed of `= this.movement["horse"].base` and takes `= this.movement["horse"].normal` minutes to go 1 mile.

The horse has a base speed of `= this.movement[this.transportation].base` and takes `= this.movement[this.transportation].normal` minutes to go 1 mile.

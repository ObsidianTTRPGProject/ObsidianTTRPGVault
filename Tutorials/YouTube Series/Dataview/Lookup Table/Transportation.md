---
title: "Movement"
transportation: "rhinoceros"
movement:
    walking: {name: "Walking", base: 30, slow: 30, normal: 20, fast: 15}
    camel: {name: "Camel", base: 50, slow: 18, normal: 12, fast: 9}
    donkey: {name: "Donkey", base: 40, slow: 22, normal: 15, fast: 11}
    unicorn: {name:  "Unicorn", base: 50, slow:18, normal: 12, fast: 9}
    mule: {name: "Mule", base: 40, slow: 22, normal: 15, fast: 11}
    draft horse: {name: "Draft Horse", base: 40, slow: 22, normal: 15, fast: 11}
    elephant: {name: "Elephant", base: 40, slow: 22, normal: 15, fast: 11}
    mastiff: {name: "Mastiff", base: 40, slow: 22, normal: 15, fast: 11}
    moorbounder: {name: "Moorbounder", base: 40, slow: 22, normal: 15, fast: 11}
    pony: {name: "Pony", base: 40, slow: 22, normal: 15, fast: 11}
    rhinoceros: {name: "Rhinoceros", base: 40, slow: 22, normal: 15, fast: 11}
    riding horse: {name: "Riding Horse", base: 60, slow: 15, normal: 10, fast: 8}
    saber-toothed tiger: {name: "Saber-Toothed Tiger", base: 40, slow: 22, normal: 15, fast: 11}
    warhorse: {name: "Warhorse", base: 60, slow: 15, normal: 10, fast: 8}
    griffon (walking): {name: "Griffon (walking)", base: 20, slow: 45, normal: 30, fast: 23}
    griffon (flying): {name: "Griffon (flying)", base: 80, slow: 11, normal: 8, fast: 6}
    hippogriff (walking): {name: "Hippogriff (walking)", base: 40, slow: 22, normal: 15, fast: 11}
    hippogriff (flying): {name: "Hippogriff (flying)", base: 60, slow: 15, normal: 10, fast: 8}
    pegasus (walking): {name: "Pegasus (walking)", base: 60, slow: 15, normal: 10, fast: 8}
    pegasus (flying): {name: "Pegasus (flying)", base: 90, slow: 10, normal: 7, fast: 5}
    peryton (walking): {name: "Peryton (walking)", base: 20, slow: 45, normal: 30, fast: 23}
    peryton (flying): {name: "Peryton (flying)", base: 60, slow: 15, normal: 10, fast: 8}
    unicorn: {name: "Unicorn", base: 50, slow: 18, normal: 12, fast: 9}
    broom of flying: {name: "Broom of Flying", base: 50, slow: 18, normal: 12, fast: 9}
    broom of flying (over 200 lbs): {name: "Broom of Flying (over 200 lbs)", base: 30, slow: 30, normal: 20, fast: 15}
    carpet of flying (3ft. x 5ft.): {name: "Carpet of Flying (3ft. x 5ft.)", base: 80, slow: 11, normal: 8, fast: 6}
    carpet of flying (4ft. x 6ft.): {name: "Carpet of Flying (4ft. x 6ft.)", base: 60, slow: 15, normal: 10, fast: 8}
    carpet of flying (5ft. x 7ft.): {name: "Carpet of Flying (5ft. x 7ft.)", base: 40, slow: 22, normal: 15, fast: 11}
    carpet of flying (6ft. x 9ft.): {name: "Carpet of Flying (6ft. x 9ft.)", base: 30, slow: 30, normal: 20, fast: 15}
    wind walk: {name: "Wind Walk", base: 300, slow: 3, normal: 2, fast: 2}
    cauldron of flying: {name: "Cauldron of Flying", base: 50, slow: 18, normal: 12, fast: 9}
    cart pulled by horses: {name: "Cart pulled by Horses", base: 30, slow: 30, normal: 20, fast: 15}
    cart pulled by pcs: {name: "Cart pulled by PCs", base: 30, slow: 30, normal: 20, fast: 15}
    galley: {name: "Galley", base: 20, slow: 45, normal: 30, fast: 23}
    keelboat: {name: "Keelboat", base: 5, slow: 180, normal: 120, fast: 90}
    longship: {name: "Longship", base: 15, slow: 60, normal: 40, fast: 30}
    rowboat: {name: "Rowboat", base: 10, slow: 90, normal: 60, fast: 45}
    sailing ship: {name: "Sailing Ship", base: 10, slow: 90, normal: 60, fast: 45}
    warship: {name: "Warship", base: 15, slow: 60, normal: 40, fast: 30}
    battle balloon: {name: "Battle Balloon", base: 45, slow: 20, normal: 13, fast: 10}
    mechanical beholder: {name: "Mechanical Beholder", base: 15, slow: 60, normal: 40, fast: 30}
    lyrandar airship: {name: "Lyrandar Airship", base: 200, slow: 4, normal: 3, fast: 2}
    lyrandar galleon: {name: "Lyrandar Galleon", base: 100, slow: 9, normal: 6, fast: 5}
    orien lightning rail: {name: "Orien Lightning Rail", base: 300, slow: 3, normal: 2, fast: 2}
tags: "Reference/Movement"
---

[[Example]]

```dataviewjs
let pg = dv.current();  // Only look at the current page
let table = "| Name         | base | slow | normal | fast |\n" +
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


## Examples of calling the data

The Unicorn has a base speed of `= this.movement.unicorn.base` and takes `= this.movement.unicorn.normal` minutes to go 1 mile.

The Battle Baloon has a base speed of `= this.movement["battle balloon"].base` and takes `= this.movement["battle balloon"].normal` minutes to go 1 mile.

The Rhino has a base speed of `= this.movement[this.transportation].base` and takes `= this.movement[this.transportation].normal` minutes to go 1 mile.
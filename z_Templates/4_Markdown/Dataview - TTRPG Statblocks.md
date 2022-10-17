---
---
This requires the installation of the TTRPG Statblocks plugin, the Dataview plugin and you need to enable the javescript option within the Dataview settings. 
# List All Monsters
This query will return a list of all monsters loaded into the plugin. It takes a while to load so have commented it out. 

````

```dataviewjs
dv.table(["Name", "HP", "AC", "CR", "Source"], [...window.bestiary.values()]
.sort((a,b) => b.name - a.name)
.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr, monster.source]))
```

````

Another method. 

````
```dataviewjs 
dv.table(["Name", "HP", "AC", "CR", "Source"], [...window.bestiary.values()]
.slice(1,2000).sort((a,b) => b.name - a.name)
.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr, monster.source])) 
```
````

Sort Alphabetical

````
```dataviewjs
const allMonsters = dv.array(Array.from(window.bestiary.values()))
.sort(m => m.name)
dv.table(["Name", "HP", "AC", "CR", "Source"],allMonsters.map(m => [dv.fileLink(m.name), m.hp, m.ac, m.cr, m.source??"SRD"])
)
```
````

# LIst Monsters With Filter
This query returns monsters but have the ability to filter the list on the monster name using a LIKE rule. Monster name must be in lower case. 

```dataviewjs
const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('frog'))
dv.table(["Name", "HP", "AC", "CR", "Source"], monstersAsDvArray.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr, monster.source]))
```

# Output Data Structure to Console (Ctrl+Shift+I)
````

```dataviewjs 
console.log(window.bestiary.values())
```

````


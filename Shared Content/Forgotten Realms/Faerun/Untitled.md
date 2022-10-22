---
---
This requires the installation of the TTRPG Statblocks plugin, the Dataview plugin and you need to enable the javescript option within the Dataview settings. 


```dataviewjs
const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('shadow'))
dv.table(["Name", "HP", "AC", "CR", "Source"], monstersAsDvArray.map((monster) => [monster.name, monster.hp, monster.ac, monster.cr, monster.source]))
```





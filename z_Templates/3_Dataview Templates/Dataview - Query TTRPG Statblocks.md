```dataviewjs 
const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('kobold'))
dv.table(["Name", "HP", "AC", "CR"], monstersAsDvArray.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr]))
```

```dataviewjs 
const monstersAsDvArray = dv.array(Array.from(FantasyStatblocks.getBestiary().values())).filter(m => m.cr).where(m => m.cr = '1')
dv.table(["Name", "HP", "AC", "CR", "Source"], monstersAsDvArray.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr, monster.source]))
```

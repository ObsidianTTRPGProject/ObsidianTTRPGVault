```dataviewjs 
// change this to your desired substring (case-insensitive)
const nameFilter = "Goblin";

const monstersAsDvArray = dv
  .array(Array.from(FantasyStatblocks.getBestiary().values()))
  // only those with a CR
  .filter(m => m.cr)
  // only CR = '1'
  .where(m => m.cr == '1')
  // only names containing our filter term
  .filter(m => 
    m.name && 
    m.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

// cap at 20 entries
const limitedMonsters = monstersAsDvArray.slice(0, 20);

dv.table(
  ["Name", "HP", "AC", "CR", "Source"],
  limitedMonsters.map(monster => [
    dv.fileLink(monster.name),
    monster.hp,
    monster.ac,
    monster.cr,
    monster.source
  ])
);
```

---
NoteType: Junk
key: value
key2: value2
key3: [one, two, three]
key4:
- four
- five
- six
alias: NoteName1, NoteName2, Fred, Bob, Goblin, Goblins
tags: Tag4, Tag5
description: 
---

#Tag1

#Tag2

Front Matter is a vital and important element of Obsidian. 

#Tag3

#LeetVideo

## Dataview Usage
 `=this.key2`


```dataview
list from #Tag1
where NoteType = "Junk"
```


```dataview
table key, key2, key3, key4
from #Tag3
```
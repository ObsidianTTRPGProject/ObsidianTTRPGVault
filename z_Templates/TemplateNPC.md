---
AssociatedGroup: 
Gender: Male
Race: 
Age: "1"
Class: 
Alignment: 
Character-Role: 
Location: home
NoteIcon: npc
Vitality: Deceased
exampleProperty: z_Assets/Decks/Business Card Dungeon/Dungeon16.png
---
<%*
const hasTitle = !tp.file.title.startsWith("NewNPC");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter NPC Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!infobox]
> # `=this.file.name`
> ![[ImagePlaceholder.png|cover hsmall]]
> [[ImagePlaceholder.png|Show To Players]]
> ###### Basic Information
> Type |  Stat |
> ---|---|
> Home | `VIEW[{Location}][text]`  |
> Group | `VIEW[{AssociatedGroup}][text]` |
> Sex | `VIEW[{Gender}][text]` |
> Race | `VIEW[{Race}][text]` |
> Age | `VIEW[{Age}][text]`|
> Condition | `VIEW[{Vitality}][text]` |
> ###### Rules Info
> Type |  Stat |
> ---|---|
> Alignment | `VIEW[{Alignment}][text]` |
> Class | `VIEW[{Class}][text]`  |
> Character Role | `VIEW[{Character-Role}][text]` |

# `=this.file.name`![[download 1.gif]]
## Profile

**<Add description here, extend it with AI Text Generator using Ctrl J>**

> [!info] Statblock
> ```statblock
> name: Individual
> monster: Commoner
> columns: 1
> ```

```encounter-table
name: Individual
creatures:
 - 1: Commoner
```


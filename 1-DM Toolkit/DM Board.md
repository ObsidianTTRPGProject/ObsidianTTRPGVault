---
obsidianUIMode: preview
---

```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, AC, pasperc As "Pass Perc (WIS)"
from "1-Party"
where contains(Role, "Player") 
where contains(Status, "Active")
```

```meta-bind-button
label: New Journal Entry
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateJournal.md"
    fileName: NewJournal
```

```meta-bind-button
label: New NPC
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateNPC.md"
    fileName: NewNPC
```

```meta-bind-button
label: New Location
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateSettlement.md"
    fileName: NewLocation
```

```meta-bind-button
label: New Guild or Group
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateGroup.md"
    fileName: NewGroup
```

```meta-bind-button
label: New Magic Item
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateMagicItem.md"
    fileName: NewMagicItem
```

```meta-bind-button
label: New Player
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplatePlayer.md"
    fileName: NewPlayer
```

## Known Languages

%% This will scan the player notes for any known languages and list the unique languages that the party know here. This is handy to determine quickly if the party can understand someone. %%

```dataviewjs
dv.list(dv.pages()
		.where(p => p.Status && p.Status.includes("Active") && p.Role && p.Role.includes("Player"))
		.PlayerKnownLanguages.distinct())
```



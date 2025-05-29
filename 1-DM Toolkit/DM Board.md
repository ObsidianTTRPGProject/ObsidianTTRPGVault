---
obsidianUIMode: preview
assa:
---

```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, ac, pasperc As "Pass Perc (WIS)"
from "1-Party"
where contains(Role, "Player") 
where contains(Status, "Active")
```

`BUTTON[newJournal]` `BUTTON[button_player]`
%% These are Inline Buttons. Inline allows the buttons to be placed on the same line next to each other. Button's are defined within the Meta Bind Plugin. See Button Templates. %%
`BUTTON[button_region]`  `BUTTON[button_hub]` `BUTTON[button_place]`

`BUTTON[button_person]` `BUTTON[button_pointofinterest]` 

`BUTTON[button_group]` `BUTTON[button_quest]` 


## Known Languages

%% This will scan the player notes for any known languages and list the unique languages that the party know here. This is handy to determine quickly if the party can understand someone. %%

```dataviewjs
dv.list(dv.pages()
		.where(p => p.Status && p.Status.includes("Active") && p.Role && p.Role.includes("Player"))
		.PlayerKnownLanguages.distinct())
```

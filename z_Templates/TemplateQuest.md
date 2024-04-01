---
questObtained: 
questStatus: Not Started
questGiver: 
questLocationObtained: 
questSessionObtained: 
questNotes: 
questLootAvail: 
questLookEarned: 
NoteIcon: quest
obsidianUIMode: preview
tags:
  - quest
---
<% await tp.file.move("/2-Campaign/Quests/" + tp.file.title) %>
<%*
const hasTitle = !tp.file.title.startsWith("NewQuest");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Quest Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>
# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ## Quest Details
> Type |  Stat |
> ---|---|
> Date Obtained | `INPUT[datePicker:questObtained]` |
> Status | `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` |
> Quest Giver | `INPUT[suggester(optionQuery(#npc)):questGiver]` |
> Quest Location | `INPUT[suggester(optionQuery(#Category/Settlement)):questLocationObtained]` |
> Session Obtained | `INPUT[suggester(optionQuery(#journal)):questSessionObtained]` |
> Available Loot | `INPUT[suggester(optionQuery(#item)):questLootAvail]` |
> Acquired Loot | `INPUT[suggester(optionQuery(#item)):questLookEarned]` |

Describe the quest here. 

### Quest Objective

- List the objectives here.

### Rewards

- List the rewards here.

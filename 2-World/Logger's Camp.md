---
questObtained: 
questName: Warn the Dwarves
questStatus: Not Started
questGiver: "[[3-Mechanics/NPCs/Wilma.md|Wilma]]"
questLocationObtained: "[[2-World/Lampoteuo/Lampoteuo.md|Lampoteuo]]"
questSessionObtained: "[[1-Session Journals/2000-01-01.md|2000-01-01]]"
questNotes: 
questLootAvail: "[[3-Mechanics/Items/Broken Stick.md|Broken Stick]]"
questLookEarned: 
NoteIcon: quest
obsidianUIMode: preview
tags:
  - quest
---

> [!infobox]+
> # `INPUT[text:questName]`
> ###### Quest Details
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

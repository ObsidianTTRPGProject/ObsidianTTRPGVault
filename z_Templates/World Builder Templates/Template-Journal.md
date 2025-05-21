---
NoteIcon: journal
aat-render-enabled: true
fc-category:
  - Event Category 1
fc-display-name: 
sessionstatus:
  - Occured
type: Session Journal
sessionDate: 2000-01-01
players: 2
Status:
  - ⏳
OneLiner: 1 Line Summary
timelines:
  - journal
tags:
  - journal
  - "#Category/Journal"
---

<%*
const hasTitle = !tp.file.title.startsWith("NewJournal");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Date (yyyy-mm-dd)");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

# Roster 

%% Keep track of who turned up. %%

`INPUT[inlineListSuggester(optionQuery(#Category/Player)):sessionRoster]`

## Absent

%% Keep track of who didn't turn up. %%

`INPUT[inlineListSuggester(optionQuery(#Category/Player)):sessionAbsent]`

# Session Overview

%% I like to keep a quick summary of sessions here. %%

This is what happened! 
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
---

<% await tp.file.move("/1-Session Journals/" + tp.file.title) %>

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

- [[Bob]] 
- [[Fred]] 

## Absent

%% Keep track of who didn't turn up. %%

- [[Bob]] 
- [[Fred]] 

# Session Overview

%% I like to keep a quick summary of sessions here. %%

This is what happened! 
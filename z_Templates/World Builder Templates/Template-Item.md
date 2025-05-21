---
MyContainer: []
MyCategory: 
tags:
  - Category/Item
obsidianUIMode: preview
aliases:
  - ItemOtherName
Connected_Quests:
  - "[[z_Templates/World Builder Templates/Template-Quest.md|Template-Quest]]"
Connected_Groups:
  - "[[z_Templates/World Builder Templates/Template-Group.md|Template-Group]]"
---

<%_
/* 1) Prompt for item name */
const poiName = await tp.system.prompt("Enter Item Name", tp.file.title);
if (!poiName) return; // cancel if blank
await tp.file.rename(poiName); // rename the file

/* 2) Gather and pick a container from multiple directories */
const containerPaths = [
  "2-World/Quests/",
  "2-World/People/",
  "2-World/Groups/",
  "2-World/Points of Interest/",
  "2-World/Points of Places/"
];
const containerFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => containerPaths.some(path => f.path.startsWith(path)));

const containerChoices = containerFiles.map(f => f.basename);
const containerValues = containerFiles.map(f => f.path);

const chosenPath = await tp.system.suggester(containerChoices, containerValues, true);
if (!chosenPath) return; // cancel if none chosen

/* 3) Build full wiki-link for MyContainer */
const containerAlias = chosenPath.split("/").pop().replace(/\.md$/, '');
const regionLink = `[[${chosenPath}|${containerAlias}]]`;

/* 4) Write MyContainer into front-matter */
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = regionLink;
  });
}, 100);
%>



> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Quest),optionQuery(#Category/People),optionQuery(#Category/Group),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Pasted image 20250514201228.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️Description),
>> option(2, ⚔️Features),
>> option(3, 🔗Connections),
>> option(4, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Features|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Connections|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

# Description

This is the items description. 

---

*Source:*

# Features

Cost: `INPUT[number:cost]`

Weight: `INPUT[number:weight]`

Category: `INPUT[inlineListSuggester(option(Alchemical), option(Artifact), option(Consumable), option(Cursed), option(Intelligent), option(Invested), option(Magical), option(Relic), option(Rune), option(Snare), option(Stance), option(Talisman), option(Worn)):char_gender]`

---

**Activate:** How to active?
**Frequency:** How often can it be activated?
**Trigger:** Does something trigger the activation?
**Effect:** What happens when activated?

# GM Notes

Make notes of what you need to track in the town here.  Secrets perhaps?

# Connections
Is the item linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`

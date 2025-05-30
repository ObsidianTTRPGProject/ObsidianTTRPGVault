---
tags:
  - Category/Group
MyContainer:
  - "[[Jungle of Screams|Jungle of Screams]]"
MyCategory: Knightly Order
obsidianUIMode: preview
leader: Bob
officers:
  - Officer 1
  - Officer 2
members:
  - Member 1
  - Member 2
  - Member 3
initiates:
  - Initiative 1
  - Initiative 2
  - Initiative 3
faction: Faction Name 1
primary_contact: John Doe
benefits:
  - standing: 1
    reward: What do they get at level 1?
  - standing: 2
    reward: What do they get at level 2?
  - standing: 3
    reward: What do they get at level 3?
---

<%*
/* 1) “NewHub” title logic */
const hasTitle = !tp.file.title.startsWith("NewGroup");
let title;
if (!hasTitle) {
  title = await tp.system.prompt("Enter Group Name");
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

/* 2) Gather all region files under 2-World/Regions */
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("2-World/Regions/"));

/* 3) Suggester for picking the container note */
const regionChoices = regionFiles.map(f => f.basename);
const regionValues  = regionFiles.map(f => f.path);
const chosenPath   = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenPath) return;  // cancelled

/* 4) Build the wiki-link syntax */
const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
const wikiLink    = `[[${chosenPath}|${chosenAlias}]]`;

/* 5) Delay slightly, then write both properties into frontmatter */
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) return;
  app.fileManager.processFrontMatter(newFile, fm => {
    fm["MyContainer"] = wikiLink;
  });
}, 50);
%>




%% DO NOT MAKE CHANGES TO THIS PART OF THE TEMPLATE %%

> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Place)):MyContainer]`

> [!column|no-i no-t]
>> [!note|no-title]
>> ![[Pasted image 20250427093629.png]]
>
>> [!note|div-m] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, ⁉️Goals),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!note|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Goals|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

%% DO NOT MAKE CHANGES TO THIS PART OF THE TEMPLATE %%

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🔗Hierarchy),
> option(2, ⚡Enemies/Allies),
> option(3, 🛠️Services),
> option(4,➕Membership),
> option(5, 🛡️Ranks),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Hierarchy|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Enemies/Allies|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Services|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Membership|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Ranks|no-h clean]]

%% MAKE CHANGES BELOW THIS LINE %%

---

# General

**Select Parent:** `INPUT[suggester(optionQuery(#Category/Hub),optionQuery(#Category/Region)):MyContainer]`

**Select Category:** `INPUT[inlineSelect(option(Knightly Order), option(Religious Order), option(Magic Academy), option(Artisan Guild), option(Merchant Consortium), option(Criminal Syndicate), option(Mercenary Company), option(Noble House), option(Secret Society or Cult), option(Adventurers’ Guild)):MyCategory]`

**Values:** The syndicate values skill and ambition, but also discretion and loyalty.

Allies / Enemies:

Membership Requirements:

Benefits This crime syndicate can protect its members from the consequences of all but the most heinous crimes.
Rank 1: borrow resources (100 gp), case (+15), diversion (+15), gather information, lookout (4 ways, +15)
Rank 2: borrow resources (1,000 gp), put in a good word, remove evidence, rob, search black market
Rank 3: borrow resources (5,000 gp), command team (1d4 NPCs of 3rd level, or 3d4 NPCs of 1st level), destroy evidence, market manipulation, reciprocal benefits Rank 4: black market mastery, borrow resources (15,000 gp), command team (1d4 NPCs of 6th level, or 5d4 NPCs of 3rd level)

# Goals

> [!NOTE]+ Public Goals
> - [ ] Achieve This
> - [ ] Achieve That

> [!NOTE]- Private Goals
> - [ ] Achieve This
> - [ ] Achieve That

# Membership
To join the group, a PC must spend X week 'doing' something, or 'something else'.

# GM Notes

Make notes of what you need to track in the town here. 

# Hierarchy

`BUTTON[button_person]` List important relationships here. 

```dataviewjs
// 1) Grab your frontmatter arrays
const leader    = dv.current().leader    ?? null;
const officers  = dv.current().officers  ?? [];
const members   = dv.current().members   ?? [];
const initiates = dv.current().initiates ?? [];

// 2) Render the Mermaid diagram
dv.paragraph(
  "```mermaid\nflowchart LR\n" +

  // Leader node
  (leader
    ? `L[${leader}]:::internal-link\n`
    : "") +

  // Officers group
  (officers.length > 0
    ? `OG[Officers]\nL --> OG\n` +
      officers.map((o,i) =>
        `O${i+1}[${o}]:::internal-link\nOG --> O${i+1}\n`
      ).join("")
    : "") +

  // Members group
  (members.length > 0
    ? `MG[Members]\n${officers.length ? "OG" : "L"} --> MG\n` +
      members.map((m,i) =>
        `M${i+1}[${m}]:::internal-link\nMG --> M${i+1}\n`
      ).join("")
    : "") +

  // Initiates group
  (initiates.length > 0
    ? `IG[Initiates]\n${members.length ? "MG" : (officers.length ? "OG" : "L")} --> IG\n` +
      initiates.map((n,i) =>
        `I${i+1}[${n}]:::internal-link\nIG --> I${i+1}\n`
      ).join("")
    : "") +

  "```"
)
```

> [!NOTE]- Relationship Config - Enter name of People Notes
> | Leader    | Officers    | 
> | --- | --- | 
> | `INPUT[list:leader]`    | `INPUT[list:officers]`    | 
> 
> | Members    | Initiates    | 
> | --- | --- | 
> | `INPUT[list:members]`    | `INPUT[list:initiates]`    |

# Enemies/Allies
**Enemies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyEnemies]`

**Allies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyAllies]`

# People

The following people are members of this group.  

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", char_race AS "Race", char_gender AS "Gender"
FROM "2-Campaign/Quests"
WHERE contains(Connected_Groups, this.file.link)
SORT file.name ASC
```
```base

```


# Services

Services offered. 


> [!NOTE]+ Public Services
> | Item   | Cost | Weight |
> | ------ | ---- | ------ |
> | Service 1 | 1gp  | L      |
> | Service 2 | 1cp  | -      |

> [!NOTE]- Member Services
> | Item   | Cost | Weight |
> | ------ | ---- | ------ |
> | Service 1 | 1gp  | L      |
> | Service 2 | 1cp  | -      |

# Ranks

Ranks listed here

- Rank 1: Benefit
- Rank 2: Benefit
- Rank 3: Benefit

---
NoteIcon: player
aliases:
  - Bob
tags:
  - player
  - Category/Player
Player: Bob
Role: Player
Class:
  - Barbarian
Race:
  - Human
level: 2
hp: 55
max_hp: 71
ac: 16
modifier: 3
pasperc: 13
Status: Active
PlayerKnownLanguages:
  - Celestial
  - Common
  - Dwarvish
faction_standing:
  Faction Name 1: 1
  Faction Name 3: 3
char_race: Human
char_gender: Male
char_status: Alive
char_age: Young Adult
char_items: []
parents:
  - Mother
  - Father
partner:
  - Partner
children:
  - Son
allies:
  - Friend
enemies:
  - Enemy
siblings:
  - Sister
obsidianUIMode: preview
MyContainer:
---

<%*
const hasTitle = !tp.file.title.startsWith("NewPlayer");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Player Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!NOTE|div-m] Player Name:  `Placeholder`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Pasted image 20250502075737.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, 🧙Description),
>> option(2, ⚙️Configure),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh480|10]
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Configure|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🧙‍♂️Char Sheet),
> option(2, ⚔️Inventory),
> option(3, 🔗Connections),
> option(4, 🧑‍🤝‍🧑Relationships),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Character Sheet|no-h clean]]
> >
> > > ![[#Inventory|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h clean]]

---

```dataviewjs
const player = dv.current();
const factions = dv.pages('"3-Mechanics/Guilds and Groups"');
let tableData = [];
for (let faction of factions) {
    let factionName = faction.faction;
    let playerStanding = player.faction_standing?.[factionName] || 0;

    // Ensure benefits is treated as an array
    let benefitsList = Array.isArray(faction.benefits) ? faction.benefits : [];

    // Filter benefits the player qualifies for
    let qualifiedBenefits = benefitsList
        .filter(b => playerStanding >= b.standing)
        .map(b => b.reward)
        .join(", "); 

    let primaryContact = faction.primary_contact || "No contact set";

    tableData.push([factionName, playerStanding, qualifiedBenefits || "No benefits yet", primaryContact]);
}
dv.table(["Faction", "Your Standing", "Benefits", "Primary Contact"], tableData);
```

# Description

This is the persons description. 

# Configure

| Initiative Tracker Stat     | Value                        |
| -------- | ---------------------------- |
| Level    | `INPUT[number:level]`        |
| HP       | `INPUT[number:hp]`           |
| AC       | `INPUT[number:ac]`           |
| Modifier | `INPUT[number:modifier]`     |



# GM Notes

Make notes of what you need to track in the town here. 

# Character Sheet


```custom-frames
frame: Demiplane
style: height: 800px;
```

# Inventory

The following items belong to `= this.file.name`.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`

# Connections
Is the person linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`

# Relationships

List important relationships here. 

```dataviewjs
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```

> [!NOTE]- Relationship Config - Enter name of People Notes
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |



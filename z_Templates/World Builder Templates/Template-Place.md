---
tags:
  - Category/Place
MyContainer: "[[z_Templates/World Builder Templates/Template-Hub.md|Template-Hub]]"
MyCategory: Commerce
obsidianUIMode: preview
---

<%*
// 1) Prompt for Hub name (always)
const title = await tp.system.prompt("Enter Place Name", tp.file.title);
// if they cancel or leave blank, stop
if (!title) return;
// rename the file to that title
await tp.file.rename(title);

// 2) Gather all region notes under 2-World/Regions
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("2-World/Hubs/"));

// 3) Pick a region: show basenames, return full paths
const regionChoices = regionFiles.map(f => f.basename);
const regionValues  = regionFiles.map(f => f.path);
const chosenRegionPath = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenRegionPath) return;

// 4) Build the wiki-link for MyContainer
const regionAlias = chosenRegionPath.split("/").pop().replace(/\.md$/, "");
const regionLink  = `[[${chosenRegionPath}|${regionAlias}]]`;

// 5) Pick a category from your list
const categoryOptions = [
  "Commerce",
  "Agriculture",
  "Military",
  "Philosophy",
  "Industrial",
  "Nesting",
  "Government"
];
const chosenCat = await tp.system.suggester(categoryOptions, categoryOptions, true);
if (!chosenCat) return;

// 6) Write both properties into front-matter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = regionLink;
    fm["MyCategory"]  = chosenCat;
  });
}, 100);
%>






> [!NOTE] Parent Hub: `INPUT[suggester(optionQuery(#Category/Hub)):MyContainer]`

> [!column|no-title]
>> [!note|no-title]
>> ![[#Image|no-h clean]]
>
>> [!note|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🏃‍♂️‍➡️NPCs),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#NPCs|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🛒Selling),
> option(2, 🪙Buying),
> option(3, 🛠️Services),
> option(4, 🤐Rumours),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Selling|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Buying|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Services|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Rumours|no-h clean]]

---

# General

Select Settlement: `INPUT[suggester(optionQuery(#Category/Hub)):MyContainer]`

Select Category: `INPUT[inlineSelect(option(Commerce), option(Agriculture), option(Military), option(Philosophy), option(Industrial), option(Nesting), option(Government)):MyCategory]`

This is the places description. 

# NPCs

`BUTTON[button_person]` The following people are associated with this place.

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", char_race AS "Race", char_gender AS "Gender"
FROM "2-World/People"
WHERE contains(char_status, "Alive")
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

```base
display:
  property.char_status: Status
  property.char_race: Race
  property.char_gender: Gender
  property.char_age: Age Range
  file.name: Name
views:
  - type: table
    name: People
    filters:
      and:
        - contains(file.folder, "2-World/People")
        - contains(property.MyContainer, concat("[[", this.file.path, "|", this.file.name, "]]"))
        - property.char_status != "Deceased"
    order:
      - file.name
      - MyCategory
      - MyContainer
      - char_status
      - char_race
      - char_gender
      - char_age
    sort:
      - column: file.name
        direction: ASC
    columnSize:
      file.name: 147
      property.MyCategory: 156
      property.MyContainer: 161
      property.char_status: 128
      property.char_race: 121
      property.char_gender: 134
      property.char_age: 125
      property.char_items: 159
  - type: table
    name: People (Deceased)
    filters:
      and:
        - contains(file.folder, "2-World/People")
        - contains(property.MyContainer, concat("[[", this.file.path, "|", this.file.name, "]]"))
        - property.char_status == "Deceased"
    order:
      - file.name
      - MyCategory
      - MyContainer
      - char_status
      - char_race
      - char_gender
      - char_age
    sort:
      - column: file.name
        direction: ASC
    columnSize:
      file.name: 147
      property.MyCategory: 156
      property.MyContainer: 161
      property.char_status: 128
      property.char_race: 121
      property.char_gender: 134
      property.char_age: 125
      property.char_items: 159

```

# GM Notes

Make notes of what you need to track in the town here. 


# Selling

The following items are available for purchase. 

```dataviewjs
// 1. grab all pages in the folder
let pages = dv.pages('"3-Mechanics/Items"').values;

// 2. shuffle (Fisher–Yates)
for (let i = pages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [pages[i], pages[j]] = [pages[j], pages[i]];
}

// 3. take the first two
let pick = pages.slice(0, 1);

// 4. render table of clickable links + Gender
dv.table(
  ["Random Item", "cost", "weight"],
  pick.map(p => [
    dv.fileLink(p.file.path),        // clickable note link
    p.cost ?? "—",                  // frontmatter field (falls back to “—” if missing)
    p.weight ?? "—"                  // frontmatter field (falls back to “—” if missing)
  ])
);
```

# Buying

List of things this merchant will purchase. 

| Item   | Cost | Weight |
| ------ | ---- | ------ |
| Item 1 | 1gp  | L      |
| Item 2 | 1cp  | -      |

# Services

Services offered. 

| Item   | Cost | Weight |
| ------ | ---- | ------ |
| Service 1 | 1gp  | L      |
| Service 2 | 1cp  | -      |

# Rumours

Anything the party might over hear?

# Image
![[Pasted image 20250425220102.png|500]]


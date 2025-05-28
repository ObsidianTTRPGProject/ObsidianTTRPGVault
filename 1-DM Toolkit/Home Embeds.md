# Party

```base
formulas:
  Untitled: ""
display:
  property.char_race: Race
  property.char_gender: Gender
  property.char_status: Status
  property.char_class: Class
  property.char_age: Age
  property.char_items: Inventory
  file.name: Character Name
  property.Player: Player Name
  property.level: Level
views:
  - type: table
    name: Party Members
    filters:
      and:
        - property.tags == "Category/Player"
        - file.folder != "z_Templates/World Builder Templates"
    order:
      - file.name
      - Player
      - char_race
      - char_gender
      - level
      - char_status
      - char_class
      - char_age
      - char_items

```

# Create New

#### Player Elements

`BUTTON[button_player]`

`BUTTON[newJournal]` 

---
#### World Elements

 `BUTTON[button_region]` 
 
 `BUTTON[button_hub]`  - Places where people live - Cities, Towns, Villages, Hamlets, Encampment, Keeps, Fortresses, Strongholds.
 
 `BUTTON[button_place]`  - 
 
 `BUTTON[button_pointofinterest]` - Places that can be explored (dungeons, ruins, etc).

`BUTTON[button_person]`  

`BUTTON[button_group]` - Groups of people and power - religious, cults, guilds, military

`BUTTON[button_quest]`  

---

#### Mechanical Elements

`BUTTON[button_item]`

# Recently Modified

```base
formulas:
  Untitled: ""
  Untitled 2: ""
views:
  - type: table
    name: Recently Modified - All
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
      - obsidianUIMode
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: file.folder
        direction: DESC
      - column: formula.Untitled 2
        direction: DESC
      - column: property.MyCategory
        direction: ASC
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Regions
    filters:
      and:
        - file.folder == "2-World/Regions"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Hubs
    filters:
      and:
        - file.folder == "2-World/Hubs"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: file.name
        direction: DESC
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Places
    filters:
      and:
        - file.folder == "2-World/Places"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: file.name
        direction: ASC
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Places of Interest
    filters:
      and:
        - file.folder == "2-World/Points of Interest"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: People
    filters:
      and:
        - file.folder == "2-World/People"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Groups
    filters:
      and:
        - file.folder == "2-World/Groups"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: file.ctime
        direction: ASC
      - column: file.name
        direction: ASC
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Quests
    filters:
      and:
        - file.folder == "2-World/Quests"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: property.Status
        direction: DESC
    limit: 10
  - type: table
    name: Session Journals
    filters:
      and:
        - file.folder == "1-Session Journals"
    order:
      - file.name
      - MyContainer
      - MyCategory
      - file.folder
      - file.ctime
      - file.mtime
    columnSize:
      file.name: 177
      property.MyContainer: 244
      property.MyCategory: 175
      file.folder: 273
      file.ctime: 208
    sort:
      - column: file.name
        direction: ASC
      - column: property.Status
        direction: DESC
    limit: 10

```




# Session Journals

```base
views:
  - type: table
    name: Session Journals
    filters:
      and:
        - file.folder == "1-Session Journals"
    order:
      - file.name
      - Status
      - players
    limit: 15

```

# Vault Graph

![[Vault Report]]
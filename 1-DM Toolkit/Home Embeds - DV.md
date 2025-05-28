# Party

```dataview  
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Race, level, Role  
from "1-Party"  
where (Role = "Player")  
where (Status = "Active")  
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

#### Recently Modified People and Groups 

```dataview  
TABLE WITHOUT ID
  link(file.name) AS "Location Name", MyContainer, MyCategory
FROM "2-World"
WHERE
  contains(tags, "Category/People")
  OR contains(tags, "Category/Groups")
SORT file.mtime DESC
LIMIT 10
```

#### Recently Modified Locations

```dataview  
TABLE WITHOUT ID
  link(file.name) AS "Location Name", MyContainer, MyCategory
FROM "2-World"
WHERE
  contains(tags, "Category/Place")
  OR contains(tags, "Category/Hub")
  OR contains(tags, "Category/Region")
SORT file.mtime DESC
LIMIT 10
```

#### Recently Modified Notes

```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```


# Session Journals

```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players
from "1-Session Journals"
where (type = "Session Journal")
SORT file.name DESC
```

# Vault Graph

![[Vault Report]]
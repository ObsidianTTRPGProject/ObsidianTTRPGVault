```dataview
TABLE WITHOUT ID link(file.name) AS Monster
WHERE contains(file.inlinks, this.file.link) AND SourceType = "Bestiary"
```

```dataview
TABLE WITHOUT ID link(file.name) AS "Magic Items"
WHERE contains(file.inlinks, this.file.link) AND Type = "Magic Item"
```

[[Island of Skulls]]
[[City of Screams]]

## Bases - Outgoing Links

```base
display:
  file.name: Tag
views:
  - type: table
    name: Table
    filters:
      and:
        - linksTo(this.file.file, file.path)
        - contains(property.tags, "Category/Region")
    columnSize:
      file.name: 286

```


## Bases - Incoming Links

```base
display:
  file.name: Tag
views:
  - type: table
    name: Table
    filters:
      and:
        - linksTo(file.file, this.file.path)
    columnSize:
      file.name: 286

```
---
tags:
  - Category/Region
obsidianUIMode: preview
---
<%*
const hasTitle = !tp.file.title.startsWith("NewRegion");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Region Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>


> [!NOTE] Parent Planet: `INPUT[suggester(optionQuery(#Category/World)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: ZalkorsFerry ### Must be unique with no spaces  
>> image: [[The Island of Screams.jpg]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [5888, 5882]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 2944 ### To center the map, make this half of the map height.  
>> long: 2941 ### To center the map, make this half of the map width.  
>> minZoom: -5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -3.5 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
>> zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
>> unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
>> scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
>> recenter: false  
>> darkmode: false ### marker
>> ```
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Region Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#Region Details|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🏡Hubs),
> option(2, 🍎Points of Interest),
> option(3, ⚔️Groups),
> option(4, 💭Quests),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Hubs|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Points of Interest|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Groups|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Quests|no-h clean]]

---
# General Info

This is the region description. 

# Region Details

**Dominant Races:**  
**Climate:** 
**Seasons:**

# GM Notes

Make notes of what you need to track in the region here. 

# Hubs

`BUTTON[button_hub]` **Hubs** Places where people live - Cities, Towns, Villages, Hamlets, Encampment, Keeps, Fortresses, Strongholds.

```dataview
TABLE WITHOUT ID link(file.name) AS "Hubs(s)", MyCategory as "Type"
FROM "2-World/Hubs"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

# Points of Interest

`BUTTON[button_pointofinterest]`  Places that can be explored. 

```dataview
TABLE WITHOUT ID link(file.name) AS "Points of Interest(s)", MyCategory as "Type"
FROM "2-World/Points of Interest"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

# Groups

`BUTTON[button_group]` Groups of people and power - religious, cults, guilds, military

```dataview
TABLE WITHOUT ID link(file.name) AS "Group(s)", MyCategory as "Type"
FROM "2-World/Groups"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```


# Quests

`BUTTON[button_quest]` **P - Philosophy** (Religion and Education) - Houses of Worship, Schools, Universities, Laboratories, Arboretums

```dataview
TABLE WITHOUT ID link(file.name) AS "Quest(s)", questGiver AS "Quest Giver", questStatus AS "Status"
FROM "2-World/Quests"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```


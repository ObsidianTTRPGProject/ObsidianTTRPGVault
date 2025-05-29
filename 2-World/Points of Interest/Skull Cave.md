---
tags:
  - Category/PointofInterest
MyContainer: "[[2-World/Regions/Island of Skulls.md|Island of Skulls]]"
MyCategory: Encounter
obsidianUIMode: preview
---





> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Region)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: ZalkorsFerry ### Must be unique with no spaces  
>> image: [[A Cave.png]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [6491, 6479]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 3200 ### To center the map, make this half of the map height.  
>> long: 3200 ### To center the map, make this half of the map width.  
>> minZoom: -5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -4 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
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
>> option(1, ℹ️General),
>> option(3, 📝GM Notes),
>> option(4, 📝Travel),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh|no-title]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#Travel|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🎬Scene Summary),
> option(2, ❗Quests),
> option(3, 🧑People),
> option(4, ⚔️Encounters),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh|no-title]
> > >[!div-m|no-title]
> > > ![[#Scene Summary|no-h1 clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Quests|no-h2 clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#People|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Encounter|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Loot|no-h clean]]

---
# General

Select Category: `INPUT[template-PoIType][:MyCategory]`

%% The options in the drop-down above are controlled via the Meta Bind Input Field Templates in the Settings %%


This is the description for the location.

# GM Notes

Make notes of what you need to track in the Point of Interest here. 

# Travel

`VIEW[{Travel Calculator#HoursPerDay}][math]` hrs per day
[[Travel Calculator]]  / [[Exhaustion]] Level: `VIEW[{Travel Calculator#ExhaustionLevel}][math]`

| Destination |  Travel Days  |
| ---|---|
| [[Next Town A]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`      |
| [[Next Town B ]] | 🕓: `VIEW[round((99* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`

# Scene Summary 

This is a cave

```statblock
monster: Troll
```

### Forest Approach

This is the approach

### Cave Interior

This is inside


# Quests

`BUTTON[button_quest]` 

- [ ]  Locate the human remains. 
- [ ] Recover the journal. 

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", questStatus AS "Status", questGiver AS "Quest Giver"
FROM "2-World/Quests"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

# People

`BUTTON[button_person]`  The following people are associated with this location.

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", char_race AS "Race", char_gender AS "Gender", Connected_Groups AS "Associated Group"
FROM "2-World/People"
WHERE contains(char_status, "Alive")
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```


# Encounter

Lists any mentioned monsters in this note.
```dataview
TABLE WITHOUT ID link(file.name) AS Monster
WHERE contains(file.inlinks, this.file.link) AND SourceType = "Bestiary"
```

```encounter
name: Example
creatures:
 - 3: Goblin, 5, 15, 2, 25 # 1 goblin with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
```











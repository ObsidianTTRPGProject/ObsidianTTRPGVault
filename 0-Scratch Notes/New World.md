---
map_height_y: 5888
map_width_x: 5882
scale_pixels: 1872
scale_pixels_range: 100
mapCalc1: 0.05341880341880342
---

[[The Island of Screams.jpg]]



```leaflet
id: TheIslandofScreams ### Must be unique with no spaces
image: [[The Island of Screams.jpg]] ### Link to the map image file
bounds: [[0,0], [5882, 5888]] ### Size of the map in px Width_x, Height_y
height: 850px ### Size of the leaflet embed in px on your screen
width: 90% ### Size of the leaflet embed in your note
lat: 2944 ### To center the map, make this half of the map width. 
long: 2941 ### To center the map, make this half of the map height. 
minZoom: -3 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level. 
maxZoom: -0.5 ### Controls how far towards the map you can zoom in.  Hover over the target icon to see the current level. 
defaultZoom: -2.5 ### Sets the default zoom level when the map loads.  Hover over the target icon to see the current level. 
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out. 
unit: miles ### The value displayed when measuring so you know what type of unit is being measure.
scale: 0.05341880341880342 ### Real units/px (resolution) of your map
noScrollZoom: false
```



> [!NOTE]- Quick Calculator
> Map Height in Pixels: `INPUT[number:map_height_y]`
Map Width in Pixels: `INPUT[number:map_width_x]`
lat: `VIEW[{map_height_y} / 2][math]` 
long: `VIEW[{map_width_x} / 2][math]` 
How Many Pixels In Scale: `INPUT[number:scale_pixels]`
How Many Units in Scale: `INPUT[number:scale_pixels_range]`
Scale: `VIEW[1/({scale_pixels}/{scale_pixels_range})][math:mapCalc1]`



---
map_height_y: 2048
map_width_x: 1642
scale_pixels: 268
scale_pixels_range: 25
mapCalc1: 10.72
---
`Stick this note in source mode to review the Leaflet syntax that will display the map`

```leaflet
id: MapCalcExample ### Must be unique with no spaces
image: [[Map - Regional map of Lampoteuo.png]] ### Link to the map image file
bounds: [[0,0], [1642, 2048]] ### Size of the map in px Width_x, Height_y
height: 850px ### Size of the leaflet embed in px on your screen
width: 95% ### Size of the leaflet embed in your note
lat: 1024 ### To center the map, make this half of the map width. 
long: 821 ### To center the map, make this half of the map height. 
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level. 
maxZoom: 1 ### Controls how far towards the map you can zoom in.  Hover over the target icon to see the current level. 
defaultZoom: -1 ### Sets the default zoom level when the map loads.  Hover over the target icon to see the current level. 
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out. 
unit: km ### The value displayed when measuring so you know what type of unit is being measure.
scale: 0.09328358208955223 ### Real units/px (resolution) of your map
recenter: false
darkmode: false ### marker
```

> [!NOTE]- Quick Calculator
> Map Height in Pixels: `INPUT[number:map_height_y]`
Map Width in Pixels: `INPUT[number:map_width_x]`
lat: `VIEW[{map_height_y} / 2][math]` 
long: `VIEW[{map_width_x} / 2][math]` 
How Many Pixels In Scale: `INPUT[number:scale_pixels]`
How Many Units in Scale: `INPUT[number:scale_pixels_range]`
scale: `VIEW[1/{mapCalc1}][math]`

#### Step 1: Add the map and set the id

| Field Name | Field Purpose                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | Set a unique id for this specific map. Do not use spaces, something like mymap1 or my_map2.<br>If you use the same id as another map, both maps will share the same pins. |
| image      | This is the link to the map image. Use markdown format such as \[\[imagename.png\]\]                                                                                      |
#### Step 2: Set the map size
Open the map in a program that will let you see the pixel size of the map. I use [GIMP](https://www.gimp.org/) as its a powerful and free image manipulation tool. It supports everything we need. 

Open the map in Gimp. You can drag it in and it should open. 
Image > Canvas Size > Enter the Width and Height (as Pixels) into the fields below. 
Copy the values into the bounds section of the leaflet template. 
`bounds: [[0,0], [Width_Value, Height_Value]]`

Map Height in Pixels: `INPUT[number:map_height_y]`
Map Width in Pixels: `INPUT[number:map_width_x]`

#### Step 3: Set the default map position
You now need to tell the map where it should display by default. Most people will want the whole map shown, to do this you want to set the lat and long values to the middle of the map. By default this will be the map height in pixels  divided in half and the map width in pixels divided in half. 
Copy the value's into the lat and long sections of the leaflet template. 

lat: `VIEW[{map_height_y} / 2][math]` 
long: `VIEW[{map_width_x} / 2][math]` 

#### Step 4: Adjust the displayed map size
You can control how much of your note the map takes up. 

| Field Name | Field Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height     | Set the pixel size or percentage of the screen that the map height should take up. <br>I like to adjust this so that the map's default height perfectly matches the displayed height in the note (ie: so that I cannot see any black bars on the top/bottom of the map)                                                                                                                                                                                                                                                                                                                      |
| width      | Set the pixel size or percentage of the note that the map width should take up. <br>I like to adjust this to 85-95% of the note. This is for a specific reason. If you use your mouse scroll to quickly scroll up/down a note, and you scroll through a Leaflet map, the map will take over the mouse scroll action, and instead of scrolling past the map, it will change so that you are now zooming in/out of the map. Therefore I leave some space on either size of maps so that when I'm scrolling, I scroll with my mouse in those edges so that I can continue to scroll past a map. |
#### Step 5: Adjust the Zoom fields
You should now be able to see the map if you switch to reading view. But it might not look right. You will likely need to adjust the various Zoom fields to get your map perfect. 

| Field Name  | Field Purpose                                                                                                                                                                                                                                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| minZoom     | Controls how far away from the map you can zoom out. Hover over the target icon to see the current level. <br>Best way to determine this value is to look at your map and zoom out as far as you think you should be able to zoom and then check the current zoom level (see pic below) and copy the current value into this field. |
| maxZoom     | Controls how far towards the map you can zoom in.  Hover over the target icon to see the current level.<br>Best way to determine this value is to look at your map and zoom in as far as you think you should be able to zoom and then check the current zoom level (see pic below) and copy the current value into this field.     |
| defaultZoom | Sets the default zoom level when the map loads.  Best way to determine this value is to look at your map and zoom into the optimal zoom level that you want to always start with oom and then check the current zoom level (see pic below) and copy the current value into this field.                                              |
| zoomDelta   | Adjust how much the zoom changes when you zoom in or out. I always leave this as 0.5                                                                                                                                                                                                                                                |
To see the current zoom level of the map you can hover your mouse over the Reset Zoom icon in the top left of the leaflet map screen. 

![[Pasted image 20240627201658.png]]


#### Optional Step 6: Configure the measurement tool

This step is only required if you wish to measure distance in the map (hold alt + click then click to measure). 
This step assumes your map has a scale. If your map doesn't have a scale, you will need to make one up. 
This step requires the use of a pixel measurement tool. I use [GIMP](https://www.gimp.org/) as its a free powerful image manipulation tool that supports everything we need for this process. 

Open the image in GIMP and then focus (Ctrl + mouse scroll to zoom in/out; hold middle mouse button and move mouse to pane around) on the scale on the map. 
Enable the measure tool (right click > Tools > Measure).
Left click on one end of the scale and then left click on the other end of the scale. 
The distance in pixels will be shown at the bottom of the screen. 
Enter the pixels in the input field below. 
Then enter how many measure units exist in the area of the scale that you measure. My scale is 0-25 so I enter 25, 

How Many Pixels In Scale: `INPUT[number:scale_pixels]`
How Many Units in Scale: `INPUT[number:scale_pixels_range]`
Calculation Step 1: `VIEW[{scale_pixels} / {scale_pixels_range}][math:mapCalc1]`
Scale: `VIEW[1/{mapCalc1}][math]`

Copy the Scale value into your leaflet map syntax. 
You should now be able to measure in your map. The best way to test this is to measure along the scale in your map and make sure the measurement units match 
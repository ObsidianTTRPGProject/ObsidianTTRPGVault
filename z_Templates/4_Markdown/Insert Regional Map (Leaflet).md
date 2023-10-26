
```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Faerun_Map
### Lock pins so they can't be moved
lock: true
### If true, view of map will recenter as you zoom out. 
recenter: true
### If true, disables mouse scroll for zomming in and out of a map. Button controls still work. 
noScrollZoom: true
image: [[HighRes (with Saltmarsh) (Orig).jpg]]
### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)
### Map Pixel Width x 1 / (Pixels between Bar Scale / 100) 
### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit. 
bounds: [[0,0], [1815.07, 2805.48]]
height: 900px
width: 95%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 907.53
long: 1402.74
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: -1.5
### Max zoom is 18. 
maxZoom: 1.5
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: -1
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: miles
scale: 1
darkMode: false
```

### Use this to calculate the bounds and then delete

<iframe
    height = 700
    width = 100%
    padding = 0 0
    margins = 0 0
    src="https://docs.google.com/spreadsheets/d/1yun2Dsm2jufREOeFxeurcoiMybYUi-SVFD9DqoSyQw0/edit?usp=sharing"></iframe>
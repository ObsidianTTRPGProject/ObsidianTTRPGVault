---
width: 2048
height: 1642
scale: 25
distance: 268
NoteIcon: Settlement
Tags: Category/Settlement
Community-Size: Outpost
Alignment: Chaotic Evil
Government: Autocracy
type: Settlement
politics: Lordship
leader: 
guildsgroups:
 - Thieves Guild 1
 - Cult 1
 - Guiled 1
region: 
 - This area
 - Of this area
size: Small city
population: 0
commonraces:
 - Humans
 - Elves
 - Dwarves
religion:
 - Lathander
exports: 
 - Something
imports: 
 - Something Else
---

Calculated Leaflet values:
- Bounds width: `= round(this.width / (this.distance / this.scale), 2)`
- Bounds height: `= round(this.height / (this.distance / this.scale), 2)`
- Center width: `= round(this.width / (this.distance / this.scale) / 2, 2)`
- Center height: `= round(this.height / (this.distance / this.scale) / 2, 2)`



```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Regional_Lampoteuo
### Lock pins so they can't be moved
lock: true
### If true, view of map will recenter as you zoom out. 
recenter: true
### If true, disables mouse scroll for zomming in and out of a map. Button controls still work. 
noScrollZoom: true
image: [[Map - Regional map of Lampoteuo.png]]
### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)
### Map Pixel Width x 1 / (Pixels between Bar Scale / 100) 
### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit. 
bounds: [[0,0], [153.17, 191.04]]
height: 900px
width: 95%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 76.59
long: 95.52
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: -1.5
### Max zoom is 18. 
maxZoom: 18
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: 2.5
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: miles
scale: 1
darkMode: false
```

<br>

> [!warning] Distance Measurement
> This map is setup using the [[Insert Regional Map (Leaflet)]] (Press ALT+T and type 'Regional) template and includes bounds. 
> Bounds are required to enable measurement. If you hold ALT and click, you will create a ruler. 
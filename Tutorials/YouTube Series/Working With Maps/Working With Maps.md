# Plugins 
Obsidian Leaflet

# Templates
[[Insert Regional Map (Leaflet)]]
[[Insert Dungeon Map (Leaflet)]]

# Example



```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: UniqueMap1
image:
    - [[HighRes (with Saltmarsh) (Orig).jpg]]
    - [[HighRes (with Saltmarsh) (Smaller).jpg]]
height: 95%
width: 85%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 50
long: 50
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: 10
### Max zoom is 18. 
maxZoom: 14
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: 10
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: feet
scale: 1
darkMode: false
```

---
ContentType: YouTube
ChallengeLevel: Medium
PubishDate: 24/11/2022
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/d7JPRXm84f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Benefit 
TTRPG Statblocks allows monster statblocks to be rendered in your Obsidian notes with a few lines of syntax. Out of the box the plugin comes with layouts for DnD5e and Fate but you can also create custom layouts which allow it to be used for any TTRPG System. 

## Required Plugins or Config
The following plugins are required in this video. 
- TTRP Statblock
- Initiative Tracker (optional - but cool)

### The Monster Stats - Example 

````
```statblock
name: Apparition
layout: GURPs
image: [[Apparition.png]]
level: 20
size: Medium
BMRType: Biped
BMR: 12/NA
Initiative: 22
DB: 100
Hits: 135
Encountered: 1
Outlook: Hostile
Treasure: NN3N2
Stamina: 68
Will: 103
Magic: 99
actions:
  - name: "Ectoplasm Attack"
    desc: "134"
  - name: "Melee Weapon"
    desc: "124"
  - name: "Missile Weapon"
    desc: "114"
```
````

### The Monster Stats - Rendered
```statblock
name: Apparition
layout: GURPs
image: [[Apparition.png]]
level: 20
size: Medium
BMRType: Biped
BMR: 12/NA
Initiative: 22
DB: 100
Hits: 135
Encountered: 1
Outlook: Hostile
Treasure: NN3N2
Stamina: 68
Will: 103
Magic: 99
actions:
  - name: "Ectoplasm Attack"
    desc: "134"
  - name: "Melee Weapon"
    desc: "124"
  - name: "Universal Sphere"
    desc: "[4] (4) 40"
  - name: "Dispel Magic"
    desc: "[4] (4) 40"
  - name: "Minor Healing"
    desc: "[3] (5) 45"
```
## Example Statblock 
This section shows how to call the statblock into our notes once you have saved the monster using the 'Save To Beastiary' option. 

![[Pasted image 20221124212847.png]]

```statblock
monster: Apparition
```
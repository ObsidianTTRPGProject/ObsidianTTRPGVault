---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/aberration
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Derro"]
statblock: true
"name": "Derro"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ piercing damage. If the target is Medium or smaller, the derro can choose to\
    \ deal no damage and knock it [prone](/rules/conditions.md#prone)."
  "name": "Hooked Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "MPMM"
- "MTF"
name: Derro
image: "[[Derro.png]]"
---

# Derro

```statblock
"name": "Derro"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ piercing damage. If the target is Medium or smaller, the derro can choose to\
    \ deal no damage and knock it [prone](/rules/conditions.md#prone)."
  "name": "Hooked Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "MPMM"
- "MTF"
"image": "[[Derro.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 91, Mordenkainen's Tome of Foes p. 158*

## Description

> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers must be stopped. They have visited horrors on countless worlds, and entire groups of people have been mutated by illithid experiments. Such are the derro.
> 
> Whenever I've met them, I refuse to fight, no matter how violent they might be. I think of the dwarves they once were. and I must confess that even I have shed tears.

Derro slink through the subterranean realms, seeking places that are safe from the perils of the Underdark. Equal parts fearful and vicious, bands of these dwarf-kin prey on those weaker than themselves, while giving simpering obeisance to any creatures they deem more powerful. A lone derro may seem pitiable, but a cackling, spitting, growling, howling horde of them is horrifying to behold.

Fractious in groups and individually weak, derro would have died out long ago but for two elements of their character. They are cautious and distrustful, which serves them well as they navigate the dangers of the Underdark and its societies. They also have a stronger-than-normal tendency to develop sorcerous power. Individuals who do so usually serve as leaders and are known as savants.

Grandiose fantasies and rampant fanaticism have obscured derro's true origin, even among themselves. Most dwarves don't recognize derro as kin, but the legends that derro tell about their people and the story that duergar believe share a grain of truth. According to the histories of some duergar, derro are descended from a dwarven community that was left behind when the others escaped the rule of mind flayers. These remnants were so distorted by the mind flayers' psionic power that the dwarves became Aberrations.

Derro tell their own stories of flight and survival in the Underdark, in which mind flayers aren't always the enemy. They tell of two brothers, the gods Diirinka and Diinkarazan, and of how Diirinka cleverly betrayed his sibling so that he could steal magical power from the evil they escaped. The danger the brothers are said to face in this legend varies, depending on whatever foe the savants want to lead their people against, yet the essence of the story remains the same: a lesson of survival at any price and an example of how deceitfulness and cruelty can be virtues.

## Environment

mountain, underdark
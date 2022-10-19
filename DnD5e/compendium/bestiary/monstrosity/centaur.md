---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/grassland
- monster/environment/forest
aliases: ["Centaur"]
statblock: true
"name": "Centaur"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "13"
- !!int "11"
"speed": "walk 50 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the centaur moves at least 30 feet straight toward a target and then\
    \ hits it with a pike attack on the same turn, the target takes an extra 10 (3d6)\
    \ piercing damage."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The centaur makes two attacks: one with its pike and one with its hooves\
    \ or two with its longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage."
  "name": "Pike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "MM"
- "SKT"
- "TftYP"
- "GoS"
- "DIP"
- "MOT"
- "WBtW"
name: Centaur
image: "[[Centaur.png]]"
---

# Centaur

```statblock
"name": "Centaur"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "13"
- !!int "11"
"speed": "walk 50 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the centaur moves at least 30 feet straight toward a target and then\
    \ hits it with a pike attack on the same turn, the target takes an extra 10 (3d6)\
    \ piercing damage."
  "name": "Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The centaur makes two attacks: one with its pike and one with its hooves\
    \ or two with its longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage."
  "name": "Pike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "MM"
- "SKT"
- "TftYP"
- "GoS"
- "DIP"
- "MOT"
- "WBtW"
"image": "[[Centaur.png]]"
```
^statblock

*Source: Monster Manual p. 38, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Dragon of Icespire Peak, Mythic Odysseys of Theros, The Wild Beyond the Witchlight*

## Description

> [!quote]- A quote from Batley Summerfoot, a halfling adventurer who never read HOOVES OF FURY, by Iryil Grayborn of Sundown  
> 
> I hear centaurs make excellent mounts!

Reclusive wanderers and omen-readers of the wild, centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.

**Wilderness Nomads.** Centaur tribes range across lands with mild to hot climates, where a centaur requires only light furs or oiled skins to deal with inclement weather. They are hunter-gatherers and rarely build shelters or even use tents.

Centaur migrations span continents and take decades to repeat, so that a centaur tribe might not retread the same path for generations. These long-ranging patterns can lead to conflict when centaurs encounter settlements of other creatures built along their traditional routes.

**Reluctant Settlers.** A centaur that can't keep pace with the rest of its tribe is left behind. Some such centaurs vanish into the wilderness and are never seen again. Those that can bear the loss of their tribe might take up residence among other races. Frontier settlements value the nature knowledge of their centaur residents. Many such communities owe their survival to the insight and acumen of a centaur.

Despite their reclusive nature, centaurs trade with elves and with the caravans of other benevolent humanoids they meet during their wanderings. A trader might save the life of a wounded or an elderly centaur unfit for long travel, escorting it to a settlement where it can peacefully live out the rest of its days.

## Environment

grassland, forest
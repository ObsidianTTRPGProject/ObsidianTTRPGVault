---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/arctic
- monster/environment/desert
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
aliases: ["Lost Sorrowsworn"]
statblock: true
"name": "Lost Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "6"
- !!int "7"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes two Arm Spike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage."
  "name": "Arm Spike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 25 (4d10\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [frightened](/rules/conditions.md#frightened), and it takes 27\
    \ (6d8) psychic damage at the end of each of its turns. The sorrowsworn can grapple\
    \ only one creature at a time."
  "name": "Embrace (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sorrowsworn takes damage, the creature [grappled](/rules/conditions.md#grappled)\
    \ by Embrace takes 18 (4d8) psychic damage."
  "name": "Tightening Embrace"
"source":
- "MPMM"
- "MTF"
name: Lost Sorrowsworn
image: "[[Lost Sorrowsworn.png]]"
---

# Lost Sorrowsworn

```statblock
"name": "Lost Sorrowsworn"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "6"
- !!int "7"
- !!int "5"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common"
"cr": "7"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sorrowsworn makes two Arm Spike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage."
  "name": "Arm Spike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 25 (4d10\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [frightened](/rules/conditions.md#frightened), and it takes 27\
    \ (6d8) psychic damage at the end of each of its turns. The sorrowsworn can grapple\
    \ only one creature at a time."
  "name": "Embrace (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the sorrowsworn takes damage, the creature [grappled](/rules/conditions.md#grappled)\
    \ by Embrace takes 18 (4d8) psychic damage."
  "name": "Tightening Embrace"
"source":
- "MPMM"
- "MTF"
"image": "[[Lost Sorrowsworn.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 224, Mordenkainen's Tome of Foes p. 233*

## Description

The Shadowfell turns visitors around until they become marooned in its twisted landscape. Lost sorrowsworn—often referred to as the Lost—are representations of the anxiety and fear people experience when they can't find their way. These sorrowsworn appear desperate and panicked.

Lost sorrowsworn grasp at any creatures they can reach. A victim experiences a flood of fear and panic as its mind buckles under the fury of this assault. The harder a victim's allies fight to break the grasp, the more the victim suffers.

**Sorrowsworn.** The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

## Environment

arctic, desert, forest, mountain, swamp, underdark, urban
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/beast
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Stirge"]
statblock: true
"name": "Stirge"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "8"
- !!int "6"
"speed": "walk 10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the stirge attaches to the target. While attached,\
    \ the stirge doesn't attack. Instead, at the start of each of the stirge's turns,\
    \ the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe stirge can\
    \ detach itself by spending 5 feet of its movement. It does so after it drains\
    \ 10 hit points of blood from the target or the target dies. A creature, including\
    \ the target, can use its action to detach the stirge."
  "name": "Blood Drain"
"source":
- "MM"
- "HotDQ"
- "LMoP"
- "PotA"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "RMBRE"
- "IMR"
- "EGW"
- "DoSI"
name: Stirge
image: "[[Stirge.png]]"
---

# Stirge

```statblock
"name": "Stirge"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "8"
- !!int "6"
"speed": "walk 10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the stirge attaches to the target. While attached,\
    \ the stirge doesn't attack. Instead, at the start of each of the stirge's turns,\
    \ the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe stirge can\
    \ detach itself by spending 5 feet of its movement. It does so after it drains\
    \ 10 hit points of blood from the target or the target dies. A creature, including\
    \ the target, can use its action to detach the stirge."
  "name": "Blood Drain"
"source":
- "MM"
- "HotDQ"
- "LMoP"
- "PotA"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "RMBRE"
- "IMR"
- "EGW"
- "DoSI"
"image": "[[Stirge.png]]"
```
^statblock

*Source: Monster Manual p. 284, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Dragons of Stormwreck Isle*

## Description

This horrid flying creature looks like a cross between a large bat and an oversized mosquito. Its legs end in sharp pincers, and its long, needle-like proboscis slashes the air as it seeks its next meal.

Stirges feed on the blood of living creatures, attaching and draining them slowly. Although they pose little danger in small numbers, packs of stirges can be a formidable threat, reattaching as quickly as their weakening prey can pluck them off.

**Blood Drain.** A stirge attacks by landing on a victim, finding a vulnerable spot, and plunging its proboscis into the flesh while using its pincer legs to latch on to the victim. Once the stirge has sated itself, it detaches and flies off to digest its meal.

## Environment

grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark
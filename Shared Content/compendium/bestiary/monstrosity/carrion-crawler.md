---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Carrion Crawler"]
statblock: true
"name": "Carrion Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler makes two attacks: one with its tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "DIP"
- "BGDIA"
- "IDRotF"
name: Carrion Crawler
image: "[[Carrion Crawler.png]]"
---

# Carrion Crawler

```statblock
"name": "Carrion Crawler"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler can climb difficult surfaces, including upside down\
    \ on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion crawler makes two attacks: one with its tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4\
    \ + 2) poison damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ poison on itself on a success."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "DIP"
- "BGDIA"
- "IDRotF"
"image": "[[Carrion Crawler.png]]"
```
^statblock

*Source: Monster Manual p. 37, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden*

## Description

Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.

**Carrion Eaters.** A carrion crawler follows the scent of death to its food, but it prefers not to compete with other scavengers. These foul creatures thus hunker down in territories where death is plentiful and other carrion eaters have limited mobility. Caves, sewers, dungeons, and forested marshes are their favored lairs, but carrion crawlers are also drawn to battlefields and cemeteries. A carrion crawler roams on the hunt, its tentacles probing the air for the scent of blood or decay. In tunnels or ruins, carrion crawlers scurry across the ceiling as they move toward food. In this way, they avoid contact with oozes, otyughs, and other dangerous inhabitants of the darkness, even as they surprise potential meals that don't think to look up.

**Patient Predators.** Whether in subterranean darkness or while hunting at night, light signals a potential meal. A carrion crawler might follow a light source from a distance for hours, hoping to pick up the scent of blood. Despite their great size, carrion crawlers can also easily set up ambushes by waiting around blind corners for prey to come to them. When facing potential prey or intruders, a carrion crawler lets its poison do the work. Once a victim goes rigid with paralysis, the carrion crawler wraps it with its tentacles and drags it away to a high ledge or isolated passageway, where it can be killed safely. The monster then resumes patrolling its territory while waiting for its meal to ripen.

## Environment

underdark
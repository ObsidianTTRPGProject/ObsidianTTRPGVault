---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/forest
aliases: ["Ettercap"]
statblock: true
"name": "Ettercap"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the ettercap knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on\
    \ a DC 11 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The creature is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. As an action, the [restrained](/rules/conditions.md#restrained)\
    \ creature can make a DC 11 Strength check, escaping from the webbing on a success.\
    \ The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points,\
    \ is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
  "name": "Web (Recharge 5-6)"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "SKT"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "CM"
- "WBtW"
name: Ettercap
image: "[[Ettercap.png]]"
---

# Ettercap

```statblock
"name": "Ettercap"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the ettercap knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettercap makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on\
    \ a DC 11 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The creature can repeat the saving throw at the end of each of\
    \ its turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller\
    \ creature. Hit: The creature is [restrained](/rules/conditions.md#restrained)\
    \ by webbing. As an action, the [restrained](/rules/conditions.md#restrained)\
    \ creature can make a DC 11 Strength check, escaping from the webbing on a success.\
    \ The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points,\
    \ is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
  "name": "Web (Recharge 5-6)"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "SKT"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "CM"
- "WBtW"
"image": "[[Ettercap.png]]"
```
^statblock

*Source: Monster Manual p. 131, Hoard of the Dragon Queen, The Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

Ettercaps are humanoid spiders that tend, feed, and watch over spiders the way a shepherd oversees a flock of sheep. They lair deep in remote forests.

Fine strands of silk stream from glands in an ettercap's abdomen, letting it shoot sticky strands of webbing to bind, entrap, or strangle its victims. It can also use its webbing to fashion elaborate snares and nets, which often festoon its lair.

**Quiet Killers.** When travelers and explorers venture into an ettercap's territory, the ettercap stalks them. Some meet their end wandering blindly into traps or sections of forest enclosed by webs. Others, the ettercap garrotes with strands of web or envenoms with its poisonous bite.

**Sylvan Despoilers.** Though they dwell in the wilds, ettercaps have no desire to live in harmony with nature. A forest infested with ettercaps transforms into a gloomy place, choked with webs and infested with giant spiders, giant insects, and other sinister predators. Creatures that wander too far into such a wood are soon lost in a maze of webs that dangle with the bones and lost treasures of the ettercaps' victims.

**Enemies of the Fey.** Ettercaps are natural enemies of fey creatures. The foul creatures set web snares to catch sprites and pixies, which they hungrily devour, and will encase a dryad's tree in webbing in a vain attempt to trap the dryad. Otherwise timid fey will sometimes approach outsiders for help in dealing with an ettercap infestation, being ill-equipped to deal with the malevolent creatures themselves.

## Environment

forest
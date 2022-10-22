---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/urban
aliases: ["Spy"]
statblock: true
"name": "Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of the spy that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
name: Spy
image: "[[Spy.png]]"
---

# Spy

```statblock
"name": "Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of the spy that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
"image": "[[Spy.png]]"
```
^statblock

*Source: Monster Manual p. 349, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*

## Description

Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics. A spy is trained to secretly gather information. Loyal spies would rather die than divulge information that could compromise them or their employers.

## Environment

urban
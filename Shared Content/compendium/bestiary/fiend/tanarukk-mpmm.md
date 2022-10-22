---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/demon
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Tanarukk"]
statblock: true
"name": "Tanarukk"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "9"
- !!int "9"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "2"
"damage_resistances": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common, plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk makes one Bite attack and one Greatsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk moves up to its speed toward an enemy that it can see."
  "name": "Aggressive"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a melee attack, the tanarukk can make one Bite\
    \ or Greatsword attack with advantage against the attacker."
  "name": "Unbridled Fury"
"source":
- "MPMM"
- "VGM"
name: Tanarukk
image: "[[Tanarukk.png]]"
---

# Tanarukk

```statblock
"name": "Tanarukk"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "9"
- !!int "9"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "2"
"damage_resistances": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common, plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk makes one Bite attack and one Greatsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tanarukk moves up to its speed toward an enemy that it can see."
  "name": "Aggressive"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a melee attack, the tanarukk can make one Bite\
    \ or Greatsword attack with advantage against the attacker."
  "name": "Unbridled Fury"
"source":
- "MPMM"
- "VGM"
"image": "[[Tanarukk.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 240, Volo's Guide to Monsters p. 186*

## Description

> [!quote]- A quote from Tasha  
> 
> I believe spite can be an excellent motivator. But unchecked fury? That rarely leads to anything more than a big mess.

When demonic influence corrupts the leadership of a people or an organization, the leaders might embrace abyssal magic to make tanarukks, using these ferocious warriors to bolster their followers' strength.

The demon lord [Baphomet](/compendium/bestiary/npc/baphomet-mpmm.md) gladly shares the secret of creating tanarukks with those who entreat him for power; the cult of Gruumsh has also mastered a ritual for this purpose, and bestows it on those deemed worthy. Whatever process is used corrupts the subject, transforming them into a vicious Fiend.

Although tanarukks are valued as fearsome fighters, they are a threat to their allies off the battlefield. When not in combat, a tanarukk is destructive and volatile and is usually kept imprisoned by its allies. If unrestrained, a free tanarukk embarks on a rampage, attempting to take over by force. Most such coups fail but are costly nonetheless. If a tanarukk does seize the leadership of a group, reckless raiding or even war is the course they inevitably choose.

## Environment

hill, mountain, underdark
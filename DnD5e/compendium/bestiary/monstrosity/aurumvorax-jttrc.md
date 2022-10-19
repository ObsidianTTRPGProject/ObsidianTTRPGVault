---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/small
- monster/type/monstrosity
aliases: ["Aurumvorax"]
statblock: true
"name": "Aurumvorax"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft., burrow 20 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"condition_immunities": "petrified"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aurumvorax can burrow through solid rock and metal at half its burrowing\
    \ speed and leaves a 5-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aurumvorax makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage. If the target is a creature wearing armor of any type,\
    \ the aurumvorax regains 4 (1d6 + 1) hit points."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the aurumvorax can't use its Claw attack\
    \ on another target, and when it moves, it can drag the [grappled](/rules/conditions.md#grappled)\
    \ creature with it, without the aurumvorax's speed being halved."
  "name": "Claw"
"source":
- "JttRC"
name: Aurumvorax
image: "[[Aurumvorax.png]]"
---

# Aurumvorax

```statblock
"name": "Aurumvorax"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft., burrow 20 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"condition_immunities": "petrified"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aurumvorax can burrow through solid rock and metal at half its burrowing\
    \ speed and leaves a 5-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aurumvorax makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage. If the target is a creature wearing armor of any type,\
    \ the aurumvorax regains 4 (1d6 + 1) hit points."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the aurumvorax can't use its Claw attack\
    \ on another target, and when it moves, it can drag the [grappled](/rules/conditions.md#grappled)\
    \ creature with it, without the aurumvorax's speed being halved."
  "name": "Claw"
"source":
- "JttRC"
"image": "[[Aurumvorax.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 105*

## Description

Early in life, aurumvoraxes cooperate with siblings and their den leader parents, digging tunnels in search of metal and other burrowing prey. As they grow to adulthood, aurumvoraxes hunt on their own, carving out territories they viciously defend.
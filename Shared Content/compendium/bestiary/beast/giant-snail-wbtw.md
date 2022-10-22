---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/large
- monster/type/beast
aliases: ["Giant Snail"]
statblock: true
"name": "Giant Snail"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "3"
- !!int "11"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., climb 10 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the snail starts its turn in contact with a pound or more of salt,\
    \ it takes 1d4 necrotic damage. Using an action to sprinkle a pound of salt on\
    \ the snail deals 1d4 necrotic damage to it immediately and another 1d4 necrotic\
    \ damage to it at the start of its next turn (after which the salt rubs off),\
    \ provided the snail has not withdrawn into its shell."
  "name": "Salt Osmosis"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snail withdraws into its shell, gaining a +4 bonus to its AC until\
    \ it emerges. It can emerge from its shell as a bonus action on its turn."
  "name": "Shell Defense"
"source":
- "WBtW"
name: Giant Snail
image: "[[Giant Snail.png]]"
---

# Giant Snail

```statblock
"name": "Giant Snail"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "3"
- !!int "11"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., climb 10 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the snail starts its turn in contact with a pound or more of salt,\
    \ it takes 1d4 necrotic damage. Using an action to sprinkle a pound of salt on\
    \ the snail deals 1d4 necrotic damage to it immediately and another 1d4 necrotic\
    \ damage to it at the start of its next turn (after which the salt rubs off),\
    \ provided the snail has not withdrawn into its shell."
  "name": "Salt Osmosis"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The snail withdraws into its shell, gaining a +4 bonus to its AC until\
    \ it emerges. It can emerge from its shell as a bonus action on its turn."
  "name": "Shell Defense"
"source":
- "WBtW"
"image": "[[Giant Snail.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 234*

## Description

These large mollusks retreat into their hardy shells when threatened, and they're particularly susceptible to being injured by contact with salt.
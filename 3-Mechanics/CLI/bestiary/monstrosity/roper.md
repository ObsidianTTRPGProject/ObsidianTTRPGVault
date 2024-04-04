---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Roper"]
---
# [Roper](3-Mechanics\CLI\bestiary\monstrosity/roper.md)
*Source: Monster Manual p. 261. Available in the SRD.*  

```statblock
"name": "Roper"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "8"
- !!int "17"
- !!int "7"
- !!int "16"
- !!int "6"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
- "desc": "While the roper remains motionless, it is indistinguishable from a normal\
    \ cave formation, such as a stalagmite."
  "name": "False Appearance"
- "desc": "The roper can have up to six tendrils at a time. Each tendril can be attacked\
    \ (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a\
    \ tendril deals no damage to the roper, which can extrude a replacement tendril\
    \ on its next turn. A tendril can also be broken if a creature takes an action\
    \ and succeeds on a DC 15 Strength check against it."
  "name": "Grasping Tendrils"
- "desc": "The roper can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The roper makes four attacks with its tendrils, uses Reel, and makes one\
    \ attack with its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:4d8 + 4|text(22) (4d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 50 ft., one creature.\
    \ Hit: The target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). Until the grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ and has disadvantage on Strength checks and Strength saving throws, and the\
    \ roper can't use the same tendril on another target."
  "name": "Tendril"
- "desc": "The roper pulls each creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it up to 25 feet straight toward it."
  "name": "Reel"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "CRCotN"
- "JttRC"
- "PaBTSO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/roper.webp"
```
^statblock

## Environment

underdark
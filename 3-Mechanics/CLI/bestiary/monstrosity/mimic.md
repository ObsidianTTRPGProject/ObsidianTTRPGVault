---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/shapechanger
statblock: inline
aliases: ["Mimic"]
---
# [Mimic](3-Mechanics\CLI\bestiary\monstrosity/mimic.md)
*Source: Monster Manual p. 220. Available in the SRD.*  

```statblock
"name": "Mimic"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "5"
- !!int "13"
- !!int "8"
"speed": "15 ft."
"skillsaves":
  "Stealth": !!int "5"
"damage_immunities": "acid"
"condition_immunities": "[prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
- "desc": "The mimic can use its action to polymorph into an object or back into its\
    \ true, amorphous form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
    \ adhered to the mimic is also [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
  "name": "Adhesive (Object Form Only)"
- "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
    \ object."
  "name": "False Appearance (Object Form Only)"
- "desc": "The mimic has advantage on attack rolls against any creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by it."
  "name": "Grappler"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) bludgeoning damage. If the mimic is\
    \ in object form, the target is subjected to its Adhesive trait."
  "name": "Pseudopod"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) piercing damage plus dice:1d8|text(4)\
    \ (1d8) acid damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDH"
- "WDMM"
- "DIP"
- "BGDIA"
- "RMBRE"
- "IMR"
- "EGW"
- "IDRotF"
- "CM"
- "WBtW"
- "KftGV"
- "SatO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/mimic.webp"
```
^statblock

## Environment

underdark, urban
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Gibbering Mouther"]
---
# [Gibbering Mouther](3-Mechanics\CLI\bestiary\aberration/gibbering-mouther.md)
*Source: Monster Manual p. 157. Available in the SRD.*  

```statblock
"name": "Gibbering Mouther"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "10"
- !!int "6"
"speed": "10 ft., swim 10 ft."
"condition_immunities": "[prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The ground in a 10-foot radius around the mouther is doughlike difficult\
    \ terrain. Each creature that starts its turn in that area must succeed on a DC\
    \ 10 Strength saving throw or have its speed reduced to 0 until the start of its\
    \ next turn."
  "name": "Aberrant Ground"
- "desc": "The mouther babbles incoherently while it can see any creature and isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated). Each creature\
    \ that starts its turn within 20 feet of the mouther and can hear the gibbering\
    \ must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't\
    \ take reactions until the start of its next turn and rolls a dice: d8|avg|noform\
    \ (d8) to determine what it does during its turn. On a 1 to 4, the creature\
    \ does nothing. On a 5 or 6, the creature takes no action or bonus action and\
    \ uses all its movement to move in a randomly determined direction. On a 7 or\
    \ 8, the creature makes a melee attack against a randomly determined creature\
    \ within its reach or does nothing if it can't make such an attack."
  "name": "Gibbering"
"actions":
- "desc": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding\
    \ Spittle."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one creature.\
    \ Hit: dice:5d6|text(17) (5d6) piercing damage. If the target is Medium\
    \ or smaller, it must succeed on a DC 10 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ If the target is killed by this damage, it is absorbed into the mouther."
  "name": "Bites"
- "desc": "The mouther spits a chemical glob at a point it can see within 15 feet\
    \ of it. The glob explodes in a blinding flash of light on impact. Each creature\
    \ within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or\
    \ be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) until the end of\
    \ the mouther's next turn."
  "name": "Blinding Spittle (Recharge 5-6)"
"source":
- "MM"
- "TftYP"
- "WDH"
- "WDMM"
- "ERLW"
- "IDRotF"
- "TCE"
- "CRCotN"
- "JttRC"
- "KftGV"
- "PaBTSO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/gibbering-mouther.webp"
```
^statblock

## Environment

underdark
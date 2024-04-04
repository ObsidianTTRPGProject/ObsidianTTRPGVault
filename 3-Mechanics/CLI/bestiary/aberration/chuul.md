---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Chuul"]
---
# [Chuul](3-Mechanics\CLI\bestiary\aberration/chuul.md)
*Source: Monster Manual p. 40. Available in the SRD.*  

```statblock
"name": "Chuul"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "11"
- !!int "5"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "4"
"traits":
- "desc": "The chuul can breathe air and water."
  "name": "Amphibious"
- "desc": "The chuul senses magic within 120 feet of it at will. This trait otherwise\
    \ works like the [detect magic](/3-Mechanics/CLI/spells/detect-magic.md) spell\
    \ but isn't itself magical."
  "name": "Sense Magic"
"actions":
- "desc": "The chuul makes two pincer attacks. If the chuul is grappling a creature,\
    \ the chuul can also use its tentacles once."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage. The target is\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) (escape DC 14) if\
    \ it is a Large or smaller creature and the chuul doesn't have two other creatures\
    \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)."
  "name": "Pincer"
- "desc": "One creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the chuul must succeed on a DC 13 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 1 minute. Until this poison ends, the target is [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Tentacles"
"source":
- "MM"
- "PotA"
- "RoT"
- "WDMM"
- "GoS"
- "CRCotN"
- "PaBTSO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/chuul.webp"
```
^statblock

## Environment

underdark
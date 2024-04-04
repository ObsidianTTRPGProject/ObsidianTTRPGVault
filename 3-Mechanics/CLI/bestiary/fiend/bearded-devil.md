---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
aliases: ["Bearded Devil"]
---
# [Bearded Devil](3-Mechanics\CLI\bestiary\fiend/bearded-devil.md)
*Source: Monster Manual p. 70. Available in the SRD.*  

```statblock
"name": "Bearded Devil"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "9"
- !!int "11"
- !!int "11"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Strength": !!int "5"
  "Constitution": !!int "4"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Infernal, telepathy 120 ft."
"cr": "3"
"traits":
- "desc": "Magical darkness doesn't impede the devil's darkvision."
  "name": "Devil's Sight"
- "desc": "The devil has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The devil can't be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ while it can see an allied creature within 30 feet of it."
  "name": "Steadfast"
"actions":
- "desc": "The devil makes two attacks: one with its beard and one with its glaive."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d8 + 2|text(6) (1d8 + 2) piercing damage, and the target must\
    \ succeed on a DC 12 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 1 minute. While [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ in this way, the target can't regain hit points. The target can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Beard"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 10 ft., one target.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) slashing damage. If the target is\
    \ a creature other than an undead or a construct, it must succeed on a DC 12 Constitution\
    \ saving throw or lose dice:1d10|text(5) (1d10) hit points at the start of\
    \ each of its turns due to an infernal wound. Each time the devil hits the wounded\
    \ target with this attack, the damage dealt by the wound increases by dice:1d10|text(5)\
    \ (1d10). Any creature can take an action to stanch the wound with a successful\
    \ DC 12 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)) check.\
    \ The wound also closes if the target receives magical healing."
  "name": "Glaive"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDH"
- "BGDIA"
- "EGW"
- "IDRotF"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/bearded-devil.webp"
```
^statblock
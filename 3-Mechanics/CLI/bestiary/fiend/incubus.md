---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
aliases: ["Incubus"]
---
# [Incubus](3-Mechanics\CLI\bestiary\fiend/incubus.md)
*Source: Monster Manual p. 285. Available in the SRD.*  

```statblock
"name": "Incubus"
"size": "Medium"
"type": "fiend"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "20"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  "Deception": !!int "9"
  "Stealth": !!int "7"
  "Insight": !!int "5"
  "Perception": !!int "5"
  "Persuasion": !!int "9"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Infernal, telepathy 60 ft."
"cr": "4"
"traits":
- "desc": "The fiend ignores the range restriction on its telepathy when communicating\
    \ with a creature it has [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed).\
    \ The two don't even need to be on the same plane of existence."
  "name": "Telepathic Bond"
- "desc": "The fiend can use its action to polymorph into a Small or Medium humanoid,\
    \ or back into its true form. Without wings, the fiend loses its flying speed.\
    \ Other than its size and speed, its statistics are the same in each form. Any\
    \ equipment it is wearing or carrying isn't transformed. It reverts to its true\
    \ form if it dies."
  "name": "Shapechanger"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 3|text(6) (1d6 + 3) slashing damage."
  "name": "Claw (Fiend Form Only)"
- "desc": "One humanoid the fiend can see within 30 feet of it must succeed on a DC\
    \ 15 Wisdom saving throw or be magically [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ for 1 day. The [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) target\
    \ obeys the fiend's verbal or telepathic commands. If the target suffers any harm\
    \ or receives a suicidal command, it can repeat the saving throw, ending the effect\
    \ on a success. If the target successfully saves against the effect, or if the\
    \ effect on it ends, the target is immune to this fiend's Charm for the next 24\
    \ hours.\n\nThe fiend can have only one target [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ at a time. If it charms another, the effect on the previous target ends."
  "name": "Charm"
- "desc": "The fiend kisses a creature [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by it or a willing creature. The target must make a DC 15 Constitution saving\
    \ throw against this magic, taking dice:5d10 + 5|text(32) (5d10 + 5) psychic\
    \ damage on a failed save, or half as much damage on a successful one. The target's\
    \ hit point maximum is reduced by an amount equal to the damage taken. This reduction\
    \ lasts until the target finishes a long rest. The target dies if this effect\
    \ reduces its hit point maximum to 0."
  "name": "Draining Kiss"
- "desc": "The fiend magically enters the Ethereal Plane from the Material Plane,\
    \ or vice versa."
  "name": "Etherealness"
"source":
- "MM"
- "ToA"
- "WDMM"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "TCE"
- "WBtW"
- "CRCotN"
- "KftGV"
- "ToFW"
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/incubus.webp"
```
^statblock

## Environment

urban
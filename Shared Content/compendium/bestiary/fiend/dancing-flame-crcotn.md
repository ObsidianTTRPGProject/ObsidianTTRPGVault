---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/fiend
aliases: ["Dancing Flame"]
statblock: true
"name": "Dancing Flame"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "20"
"speed": "walk 30 ft., fly 60 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame ignores the range restriction on its telepathy when communicating\
    \ with a creature it has [charmed](/rules/conditions.md#charmed). The two don't\
    \ even need to be on the same plane of existence."
  "name": "Telepathic Bond"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame sheds bright light in a 20-foot radius and dim light for an additional\
    \ 20 feet. If it leaves the hall or is reduced to 0 hit points, it is destroyed\
    \ and can't re-form for 24 hours."
  "name": "Flame"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) fire damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid the flame can see within 30 feet of it must succeed on a DC\
    \ 15 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ for 1 day. The [charmed](/rules/conditions.md#charmed) target obeys the flame's\
    \ verbal or telepathic commands. If the target suffers any harm or receives a\
    \ suicidal command, it can repeat the saving throw, ending the effect on a success.\
    \ If the target successfully saves against the effect, or if the effect on it\
    \ ends, the target is immune to this flame's Charm for the next 24 hours.\n\n\
    The flame can have only one target [charmed](/rules/conditions.md#charmed) at\
    \ a time. If it charms another, the effect on the previous target ends."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame kisses a creature [charmed](/rules/conditions.md#charmed) by\
    \ it or a willing creature. The target must make a DC 15 Constitution saving throw\
    \ against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or\
    \ half as much damage on a successful one. The target's hit point maximum is reduced\
    \ by an amount equal to the damage taken. This reduction lasts until the target\
    \ finishes a long rest. The target dies if this effect reduces its hit point maximum\
    \ to 0."
  "name": "Draining Kiss"
"source":
- "CRCotN"
name: Dancing Flame
image: "[[Dancing Flame.png]]"
---

# Dancing Flame

```statblock
"name": "Dancing Flame"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "20"
"speed": "walk 30 ft., fly 60 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame ignores the range restriction on its telepathy when communicating\
    \ with a creature it has [charmed](/rules/conditions.md#charmed). The two don't\
    \ even need to be on the same plane of existence."
  "name": "Telepathic Bond"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame sheds bright light in a 20-foot radius and dim light for an additional\
    \ 20 feet. If it leaves the hall or is reduced to 0 hit points, it is destroyed\
    \ and can't re-form for 24 hours."
  "name": "Flame"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) fire damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid the flame can see within 30 feet of it must succeed on a DC\
    \ 15 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ for 1 day. The [charmed](/rules/conditions.md#charmed) target obeys the flame's\
    \ verbal or telepathic commands. If the target suffers any harm or receives a\
    \ suicidal command, it can repeat the saving throw, ending the effect on a success.\
    \ If the target successfully saves against the effect, or if the effect on it\
    \ ends, the target is immune to this flame's Charm for the next 24 hours.\n\n\
    The flame can have only one target [charmed](/rules/conditions.md#charmed) at\
    \ a time. If it charms another, the effect on the previous target ends."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The flame kisses a creature [charmed](/rules/conditions.md#charmed) by\
    \ it or a willing creature. The target must make a DC 15 Constitution saving throw\
    \ against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or\
    \ half as much damage on a successful one. The target's hit point maximum is reduced\
    \ by an amount equal to the damage taken. This reduction lasts until the target\
    \ finishes a long rest. The target dies if this effect reduces its hit point maximum\
    \ to 0."
  "name": "Draining Kiss"
"source":
- "CRCotN"
"image": "[[Dancing Flame.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 68*
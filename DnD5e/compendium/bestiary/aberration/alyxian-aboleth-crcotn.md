---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/large
- monster/type/aberration
aliases: ["Alyxian Aboleth"]
statblock: true
"name": "Alyxian Aboleth"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d10 + 36"
"stats":
- !!int "21"
- !!int "9"
- !!int "15"
- !!int "18"
- !!int "18"
- !!int "18"
"speed": "walk 10 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Perception": !!int "12"
  "History": !!int "12"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the aboleth is surrounded by a cloud of sticky mucus.\
    \ A creature that touches the aboleth or hits it with a melee attack while within\
    \ 5 feet of it must succeed on a DC 14 Strength saving throw or be [restrained](/rules/conditions.md#restrained)\
    \ until the end of the aboleth's next turn."
  "name": "Mucous Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature the aboleth can see communicates telepathically with the\
    \ aboleth, the aboleth learns the creature's greatest desires."
  "name": "Probing Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage plus 3 (1d6) psychic damage."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Tail"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth targets one creature it can see within 30 feet of itself. The\
    \ target must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the aboleth until the aboleth dies or until it is on a different plane of\
    \ existence from the target. The [charmed](/rules/conditions.md#charmed) target\
    \ is under the aboleth's control and can't take reactions, and the aboleth and\
    \ the target can communicate telepathically with each other over any distance.\n\
    \nThe [charmed](/rules/conditions.md#charmed) target can repeat the saving throw\
    \ whenever it takes damage, ending the effect on itself on a success. No more\
    \ than once every 24 hours, the target can repeat the saving throw when it is\
    \ at least 1 mile away from the aboleth."
  "name": "Enslave (Recharge 4-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes one Tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by the aboleth takes\
    \ 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage\
    \ dealt."
  "name": "Psychic Drain (Costs 2 Actions)"
"source":
- "CRCotN"
name: Alyxian Aboleth
image: "[[Alyxian Aboleth.png]]"
---

# Alyxian Aboleth

```statblock
"name": "Alyxian Aboleth"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d10 + 36"
"stats":
- !!int "21"
- !!int "9"
- !!int "15"
- !!int "18"
- !!int "18"
- !!int "18"
"speed": "walk 10 ft., swim 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Perception": !!int "12"
  "History": !!int "12"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the aboleth is surrounded by a cloud of sticky mucus.\
    \ A creature that touches the aboleth or hits it with a melee attack while within\
    \ 5 feet of it must succeed on a DC 14 Strength saving throw or be [restrained](/rules/conditions.md#restrained)\
    \ until the end of the aboleth's next turn."
  "name": "Mucous Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature the aboleth can see communicates telepathically with the\
    \ aboleth, the aboleth learns the creature's greatest desires."
  "name": "Probing Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage plus 3 (1d6) psychic damage."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Tail"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth targets one creature it can see within 30 feet of itself. The\
    \ target must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the aboleth until the aboleth dies or until it is on a different plane of\
    \ existence from the target. The [charmed](/rules/conditions.md#charmed) target\
    \ is under the aboleth's control and can't take reactions, and the aboleth and\
    \ the target can communicate telepathically with each other over any distance.\n\
    \nThe [charmed](/rules/conditions.md#charmed) target can repeat the saving throw\
    \ whenever it takes damage, ending the effect on itself on a success. No more\
    \ than once every 24 hours, the target can repeat the saving throw when it is\
    \ at least 1 mile away from the aboleth."
  "name": "Enslave (Recharge 4-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aboleth makes one Tail attack."
  "name": "Tail Swipe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by the aboleth takes\
    \ 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage\
    \ dealt."
  "name": "Psychic Drain (Costs 2 Actions)"
"source":
- "CRCotN"
"image": "[[Alyxian Aboleth.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 195*

## Description

The Alyxian Aboleth is a unique creature that believes it carries the soul of the Apotheon within its body, trapped in this aberrant form as divine punishment for his failure to save the world during the Calamity. Veins of ruidium crisscross the aboleth's body, and a secondary face has emerged from its pale green hide. The second face is a mutation that has no effect on the creature's game statistics.
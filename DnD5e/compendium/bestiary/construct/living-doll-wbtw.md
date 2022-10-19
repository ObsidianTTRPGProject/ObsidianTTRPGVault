---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/tiny
- monster/type/construct
aliases: ["Living Doll"]
statblock: true
"name": "Living Doll"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"stats":
- !!int "3"
- !!int "11"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "2"
  "Intelligence": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the doll is motionless at the start of combat, it has advantage on its\
    \ initiative roll. Moreover, if a creature hasn't observed the doll move or act,\
    \ that creature must succeed on a DC 18 Intelligence (Investigation) check to\
    \ discern that the doll is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll regains 5 hit points at the start of its turn. If the doll takes\
    \ fire or psychic damage, this trait doesn't function at the start of the doll's\
    \ next turn. The doll is destroyed only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: The target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 6) and takes 11 (2d10)\
    \ psychic damage at the start of each of its turns until this grapple ends. The\
    \ doll can grapple only one creature at a time."
  "name": "Grabby Hands"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll cackles as it targets one or two creatures it can see within 30\
    \ feet of it. Each target that can hear the doll's cackling must make a DC 11\
    \ Wisdom saving throw, succeeding automatically if it has an Intelligence of 4\
    \ or lower. On a failed saving throw, the creature takes 5 (2d4) psychic damage\
    \ and is [incapacitated](/rules/conditions.md#incapacitated) for 1 minute as it\
    \ is overcome by a fit of laughter. At the end of each of its turns, the creature\
    \ can repeat the saving throw, ending the effect on itself on a success. A creature\
    \ that succeeds on this saving throw is immune to this doll's Cackle for 24 hours."
  "name": "Cackle (Recharge 4-6)"
"source":
- "WBtW"
name: Living Doll
image: "[[Living Doll.png]]"
---

# Living Doll

```statblock
"name": "Living Doll"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"stats":
- !!int "3"
- !!int "11"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "2"
  "Intelligence": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the doll is motionless at the start of combat, it has advantage on its\
    \ initiative roll. Moreover, if a creature hasn't observed the doll move or act,\
    \ that creature must succeed on a DC 18 Intelligence (Investigation) check to\
    \ discern that the doll is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll regains 5 hit points at the start of its turn. If the doll takes\
    \ fire or psychic damage, this trait doesn't function at the start of the doll's\
    \ next turn. The doll is destroyed only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: The target\
    \ is [grappled](/rules/conditions.md#grappled) (escape DC 6) and takes 11 (2d10)\
    \ psychic damage at the start of each of its turns until this grapple ends. The\
    \ doll can grapple only one creature at a time."
  "name": "Grabby Hands"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The doll cackles as it targets one or two creatures it can see within 30\
    \ feet of it. Each target that can hear the doll's cackling must make a DC 11\
    \ Wisdom saving throw, succeeding automatically if it has an Intelligence of 4\
    \ or lower. On a failed saving throw, the creature takes 5 (2d4) psychic damage\
    \ and is [incapacitated](/rules/conditions.md#incapacitated) for 1 minute as it\
    \ is overcome by a fit of laughter. At the end of each of its turns, the creature\
    \ can repeat the saving throw, ending the effect on itself on a success. A creature\
    \ that succeeds on this saving throw is immune to this doll's Cackle for 24 hours."
  "name": "Cackle (Recharge 4-6)"
"source":
- "WBtW"
"image": "[[Living Doll.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 238*

## Description

A living doll is easily mistaken for an inanimate doll or a stuffed animal until it moves. Trapped within each living doll is a mean spirit that encourages those around it to behave badly toward others. The doll takes pleasure in tormenting the guilt-ridden and despondent, hastening their descent into depression or paranoia. Because it fears its own destruction, the doll rarely causes direct harm to others. When forced to defend itself, it debilitates opponents with its maniacal cackle and assaults the minds of its enemies by turning their worst fears against them.
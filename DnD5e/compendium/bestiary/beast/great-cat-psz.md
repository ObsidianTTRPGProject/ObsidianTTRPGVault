---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/beast
- monster/environment/mountain
- monster/environment/arctic
aliases: ["Great Cat"]
statblock: true
"name": "Great Cat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cat moves at least 20 feet straight toward a creature and then hits\
    \ it with a claw attack on the same turn, that target must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone). If\
    \ the target is [prone](/rules/conditions.md#prone), the cat can make one bite\
    \ attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "PSZ"
name: Great Cat
image: "[[Great Cat.png]]"
---

# Great Cat

```statblock
"name": "Great Cat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cat moves at least 20 feet straight toward a creature and then hits\
    \ it with a claw attack on the same turn, that target must succeed on a DC 14\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone). If\
    \ the target is [prone](/rules/conditions.md#prone), the cat can make one bite\
    \ attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "PSZ"
"image": "[[Great Cat.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 34*

## Environment

mountain, arctic
---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/monstrosity
- monster/environment/mountain
aliases: ["Young Basilisk"]
statblock: true
"name": "Young Basilisk"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "13"
- !!int "8"
- !!int "15"
- !!int "2"
- !!int "8"
- !!int "7"
"speed": "walk 15 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature starts its turn within 15 feet of the basilisk and the two\
    \ of them can see each other, the basilisk can force the creature to make a DC\
    \ 12 Constitution saving throw if the basilisk isn't [incapacitated](/rules/conditions.md#incapacitated).\
    \ On a failed save, the creature magically begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n\nA creature that isn't surprised can avert its eyes\
    \ to avoid the saving throw at the start of its turn. If it does so, it can't\
    \ see the basilisk until the start of its next turn, when it can avert its eyes\
    \ again. If it looks at the basilisk in the meantime, it must immediately make\
    \ the save.\n\nIf the basilisk sees its reflection within 30 feet of it in bright\
    \ light, it mistakes itself for a rival and targets itself with its gaze."
  "name": "Petrifying Gaze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage plus 2 (1d4) poison damage."
  "name": "Bite"
"source":
- "OotA"
name: Young Basilisk
image: "[[Young Basilisk.png]]"
---

# Young Basilisk

```statblock
"name": "Young Basilisk"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "13"
- !!int "8"
- !!int "15"
- !!int "2"
- !!int "8"
- !!int "7"
"speed": "walk 15 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature starts its turn within 15 feet of the basilisk and the two\
    \ of them can see each other, the basilisk can force the creature to make a DC\
    \ 12 Constitution saving throw if the basilisk isn't [incapacitated](/rules/conditions.md#incapacitated).\
    \ On a failed save, the creature magically begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n\nA creature that isn't surprised can avert its eyes\
    \ to avoid the saving throw at the start of its turn. If it does so, it can't\
    \ see the basilisk until the start of its next turn, when it can avert its eyes\
    \ again. If it looks at the basilisk in the meantime, it must immediately make\
    \ the save.\n\nIf the basilisk sees its reflection within 30 feet of it in bright\
    \ light, it mistakes itself for a rival and targets itself with its gaze."
  "name": "Petrifying Gaze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage plus 2 (1d4) poison damage."
  "name": "Bite"
"source":
- "OotA"
"image": "[[Young Basilisk.png]]"
```
^statblock

*Source: Out of the Abyss p. 100*

## Environment

mountain
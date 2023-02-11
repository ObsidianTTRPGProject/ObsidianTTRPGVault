---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/monstrosity
- monster/environment/mountain
aliases: ["Reduced-Threat Basilisk"]
statblock: true
"name": "Reduced-Threat Basilisk"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "26"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "8"
- !!int "15"
- !!int "2"
- !!int "8"
- !!int "7"
"speed": "walk 20 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature starts its turn within 30 feet of the basilisk and the two\
    \ of them can see each other, the basilisk can force the creature to make a DC\
    \ 10 Constitution saving throw if the basilisk isn't [incapacitated](/rules/conditions.md#incapacitated).\
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
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
"source":
- "TftYP"
name: Reduced-Threat Basilisk
image: "[[Reduced-Threat Basilisk.png]]"
---

# Reduced-Threat Basilisk

```statblock
"name": "Reduced-Threat Basilisk"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "26"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "8"
- !!int "15"
- !!int "2"
- !!int "8"
- !!int "7"
"speed": "walk 20 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature starts its turn within 30 feet of the basilisk and the two\
    \ of them can see each other, the basilisk can force the creature to make a DC\
    \ 10 Constitution saving throw if the basilisk isn't [incapacitated](/rules/conditions.md#incapacitated).\
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
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
"source":
- "TftYP"
"image": "[[Reduced-Threat Basilisk.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

mountain
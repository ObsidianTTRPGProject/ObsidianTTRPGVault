---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/small
- monster/type/beast
aliases: ["Space Eel"]
statblock: true
"name": "Space Eel"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 10 ft., fly 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it isn't attached to a creature, the eel makes one Bite attack and one\
    \ Tail Spine attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) piercing damage, and the eel attaches to the target. While attached, the\
    \ eel can't make Bite attacks. Instead, the target takes 4 (1d6 + 1) piercing\
    \ damage at the start of each of the eel's turns. The eel can detach itself as\
    \ a bonus action. A creature, including the target, can use its action to detach\
    \ the eel."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Tail Spine"
"source":
- "BAM"
name: Space Eel
image: "[[Space Eel.png]]"
---

# Space Eel

```statblock
"name": "Space Eel"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 10 ft., fly 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it isn't attached to a creature, the eel makes one Bite attack and one\
    \ Tail Spine attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) piercing damage, and the eel attaches to the target. While attached, the\
    \ eel can't make Bite attacks. Instead, the target takes 4 (1d6 + 1) piercing\
    \ damage at the start of each of the eel's turns. The eel can detach itself as\
    \ a bonus action. A creature, including the target, can use its action to detach\
    \ the eel."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) piercing damage, and the target must succeed on a DC 10 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. Until this\
    \ poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed). The\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Tail Spine"
"source":
- "BAM"
"image": "[[Space Eel.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 55*

## Description

Space eels avoid confrontations with larger creatures unless the eels are starving. These 5-foot-long scavengers might trail a spelljamming ship and feed on barnacles they detach from the ship's hull. Wildspace hunters try to catch and kill the eels for their meat—a task easier to describe than to accomplish.
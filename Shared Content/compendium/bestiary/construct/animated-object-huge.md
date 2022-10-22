---
cssclass: json5e-monster
tags:
- compendium/src/phb
- monster/size/huge
- monster/type/construct
aliases: ["Animated Object (Huge)"]
statblock: true
"name": "Animated Object (Huge)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "80"
"stats":
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the object lacks legs or other appendages it can use for locomotion,\
    \ it instead has a flying speed of 30 feet and can hover. If the object is securely\
    \ attached to a surface or larger object, such as a chain bolted to a wall, its\
    \ speed is 0.\n\nWhen the animated object drops to 0 hit points, it reverts to\
    \ its original object form, and any remaining damage carries over to its original\
    \ object form.\n\nThe DM might rule that a specific objects slam attack inflicts\
    \ slashing or piercing damage based on its form."
  "name": "Animated"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "PHB"
name: Animated Object (Huge)
image: "[[Animated Object (Huge).png]]"
---

# Animated Object (Huge)

```statblock
"name": "Animated Object (Huge)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "80"
"stats":
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the object lacks legs or other appendages it can use for locomotion,\
    \ it instead has a flying speed of 30 feet and can hover. If the object is securely\
    \ attached to a surface or larger object, such as a chain bolted to a wall, its\
    \ speed is 0.\n\nWhen the animated object drops to 0 hit points, it reverts to\
    \ its original object form, and any remaining damage carries over to its original\
    \ object form.\n\nThe DM might rule that a specific objects slam attack inflicts\
    \ slashing or piercing damage based on its form."
  "name": "Animated"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "PHB"
"image": "[[Animated Object (Huge).png]]"
```
^statblock

*Source: Player's Handbook p. 213*
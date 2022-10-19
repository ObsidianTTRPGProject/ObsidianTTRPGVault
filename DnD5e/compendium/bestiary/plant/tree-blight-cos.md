---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/huge
- monster/type/plant
aliases: ["Tree Blight"]
statblock: true
"name": "Tree Blight"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "6"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft."
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands Common and Druidic but doesn't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the blight remains motionless, it is indistinguishable from a dead\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight makes one Branch attack and one Grasping Root attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Branch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature not [grappled](/rules/conditions.md#grappled)\
    \ by the blight. Hit: The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until the grapple ends, the target takes 9 (1d6 + 6) bludgeoning\
    \ damage at the start of each of its turns. The root has AC 15 and can be severed\
    \ by dealing 6 slashing damage or more to it at once. Cutting the root doesn't\
    \ hurt the blight, but ends the grapple."
  "name": "Grasping Root"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature [grappled](/rules/conditions.md#grappled)\
    \ by the blight. Hit: 19 (3d8 + 6) piercing damage."
  "name": "Bite"
"source":
- "CoS"
- "WBtW"
name: Tree Blight
image: "[[Tree Blight.png]]"
---

# Tree Blight

```statblock
"name": "Tree Blight"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "6"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft."
"condition_immunities": "blinded, deafened"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "understands Common and Druidic but doesn't speak"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the blight remains motionless, it is indistinguishable from a dead\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blight makes one Branch attack and one Grasping Root attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Branch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature not [grappled](/rules/conditions.md#grappled)\
    \ by the blight. Hit: The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until the grapple ends, the target takes 9 (1d6 + 6) bludgeoning\
    \ damage at the start of each of its turns. The root has AC 15 and can be severed\
    \ by dealing 6 slashing damage or more to it at once. Cutting the root doesn't\
    \ hurt the blight, but ends the grapple."
  "name": "Grasping Root"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature [grappled](/rules/conditions.md#grappled)\
    \ by the blight. Hit: 19 (3d8 + 6) piercing damage."
  "name": "Bite"
"source":
- "CoS"
- "WBtW"
"image": "[[Tree Blight.png]]"
```
^statblock

*Source: Curse of Strahd p. 230, The Wild Beyond the Witchlight*

## Description

Blights (as described in the Monster Manual) are evil, ambulatory plant creatures, and a tree blight is a particularly enormous variety. It looks like a dead tree or treant, 30 feet tall, with spongy wooden flesh, thorny branches, and rubbery roots that trail behind it. It has blood for sap and is so saturated with blood that it doesn't catch fire easily.

**Vicious Carnivore.** A tree blight feeds on warm-blooded prey and takes perverse delight in causing carnage. It strikes with its heavy branches and crushes prey to death with its roots. It can open its gaping, tooth-filled mouth and bite a creature caught in its roots. The roots of a tree blight can be severed, though cutting them causes the blight no harm.

**Blight Animosity.** A tree blight will often fight alongside other kinds of blights, but it hates other tree blights and will attack them given the chance. Tree blights also hate treants, and the feeling is mutual.
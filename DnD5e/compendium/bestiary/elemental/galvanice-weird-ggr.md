---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/elemental
aliases: ["Galvanice Weird"]
statblock: true
"name": "Galvanice Weird"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the galvanice weird dies, it explodes in a burst of ice and lightning.\
    \ Each creature within 10 feet of the exploding weird must make a DC 13 Dexterity\
    \ saving throw, taking 7 (2d6) lightning damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage plus 5 (2d4) lightning damage. If the target is a creature,\
    \ it must succeed on a DC 13 Constitution saving throw or lose the ability to\
    \ use reactions until the start of the weird's next turn."
  "name": "Slam"
"source":
- "GGR"
name: Galvanice Weird
image: "[[Galvanice Weird.png]]"
---

# Galvanice Weird

```statblock
"name": "Galvanice Weird"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "3"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the galvanice weird dies, it explodes in a burst of ice and lightning.\
    \ Each creature within 10 feet of the exploding weird must make a DC 13 Dexterity\
    \ saving throw, taking 7 (2d6) lightning damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage plus 5 (2d4) lightning damage. If the target is a creature,\
    \ it must succeed on a DC 13 Constitution saving throw or lose the ability to\
    \ use reactions until the start of the weird's next turn."
  "name": "Slam"
"source":
- "GGR"
"image": "[[Galvanice Weird.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 209*

## Description

Galvanice weirds seem to be the epitome of weird technology. Indeed, they serve willingly, with cheerful stupidity, as guardians and laborers in Izzet workshops. They combine a rigid body of elemental ice with a core of lightning that animates them. If a galvanice weird is destroyed, the ice shatters and lightning crackles outward in a dangerous explosion. Still, most Izzet researchers find that their usefulness outweighs this risk.

**Izzet Weirds.** Weirds are the products of Izzet League experiments intended to combine two opposing elemental types in the hope of creating elementals that were more stable than the norm and easier to control. As commonly happens with Izzet experiments, the outcome was the exact opposite. Weirds are even wilder and more unpredictable than elementals of either of their component elements. Nevertheless, they can make potent guardian creatures and can be urged into fighting on behalf of their creators.

**Elemental Nature.** An Izzet weird doesn't require air, food, drink, or sleep.
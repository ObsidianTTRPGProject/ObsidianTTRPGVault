---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/huge
- monster/type/construct
aliases: ["Mad Golem"]
statblock: true
"name": "Mad Golem"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "264"
"hit_dice": "23d12 + 115"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish,\
  \ Infernal, and Undercommon but can't speak"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "WDMM"
name: Mad Golem
image: "[[Mad Golem.png]]"
---

# Mad Golem

```statblock
"name": "Mad Golem"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "264"
"hit_dice": "23d12 + 115"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish,\
  \ Infernal, and Undercommon but can't speak"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 24 (4d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "WDMM"
"image": "[[Mad Golem.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 254*

## Description

Stone golems are magical constructs cut and chiseled from stone to appear as tall, impressive statues. Like other golems, they are nearly impervious to spells and ordinary weapons.

The jumbled construct was once a 10-foot-tall stone golem created in the image of Halaster. In its madness, it has attached so many pieces of other Stonecloaks to itself that it has become a lumbering, 17-foot-tall amalgamation of stone torsos, limbs, and heads—all of which resemble parts of the Mad Mage.
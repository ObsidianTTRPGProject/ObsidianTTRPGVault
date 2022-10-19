---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/construct
- monster/environment/grassland
aliases: ["Scarecrow"]
statblock: true
"name": "Scarecrow"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the scarecrow remains motionless, it is indistinguishable from an\
    \ ordinary, inanimate scarecrow."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarecrow makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) until\
    \ the end of the scarecrow's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarecrow targets one creature it can see within 30 feet of it. If\
    \ the target can see the scarecrow, the target must succeed on a DC 11 Wisdom\
    \ saving throw or be magically [frightened](/rules/conditions.md#frightened) until\
    \ the end of the scarecrow's next turn. The [frightened](/rules/conditions.md#frightened)\
    \ target is [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Terrifying Glare"
"source":
- "MM"
- "CoS"
- "WDH"
- "CM"
name: Scarecrow
image: "[[Scarecrow.png]]"
---

# Scarecrow

```statblock
"name": "Scarecrow"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the scarecrow remains motionless, it is indistinguishable from an\
    \ ordinary, inanimate scarecrow."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarecrow makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC 11\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) until\
    \ the end of the scarecrow's next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The scarecrow targets one creature it can see within 30 feet of it. If\
    \ the target can see the scarecrow, the target must succeed on a DC 11 Wisdom\
    \ saving throw or be magically [frightened](/rules/conditions.md#frightened) until\
    \ the end of the scarecrow's next turn. The [frightened](/rules/conditions.md#frightened)\
    \ target is [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Terrifying Glare"
"source":
- "MM"
- "CoS"
- "WDH"
- "CM"
"image": "[[Scarecrow.png]]"
```
^statblock

*Source: Monster Manual p. 268, Curse of Strahd, Waterdeep: Dragon Heist, Candlekeep Mysteries*

## Description

At harvest time, when death revisits the twilit world and summer's blossoms bow their withered heads, eerie scarecrows loom in silent vigil over empty fields. With immortal patience, these stoic sentinels hold their posts through wind, storm, and flood, bound to their master's command, eager to terrify prey with its sackcloth visage and rend victims with its razor-sharp claws.

**Spirit-Powered Constructs.**  A scarecrow is animated by the bound spirit of a slain evil creature, granting it purpose and mobility. It is this uncanny presence from beyond death that allows a scarecrow to inspire fear in those it gazes upon. Hags and witches often bind scarecrows with the spirits of demons, but any evil spirit will do. Although aspects of the spirit's personality might surface, a scarecrow's spirit doesn't recall the memories it had as a creature, and its will is focused solely on serving its creator. If its creator dies, the spirit inhabiting a scarecrow either continues to follow its last commands, seeks revenge for its creator's death, or destroys itself.

## Environment

grassland
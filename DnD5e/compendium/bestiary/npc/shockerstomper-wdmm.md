---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/gargantuan
- monster/type/construct
aliases: ["Shockerstomper"]
statblock: true
"name": "Shockerstomper"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "300"
"hit_dice": "300d1"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "1"
- !!int "1"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, deafened, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 5"
"languages": ""
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a leg drops to 0 hit points, it is disabled, and Shockerstomper can\
    \ use a reaction to detach it from its main body. Whenever one of its legs is\
    \ disabled, Shockerstomper's walking speed is reduced by 10 feet. The whole contraption\
    \ topples over and shuts down if four of its seven legs are disabled."
  "name": "Disable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that ends its turn in contact with Shockerstomper's body (saucer\
    \ or turrets) must make a DC 15 Constitution saving throw, taking 22 (4d10) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Electrified Surface"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shockerstomper is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature atop or above Shockerstomper's platform can locate its control\
    \ module with a successful DC 15 Intelligence (Investigation) check or Wisdom\
    \ (Perception) check. As an action, a character can try to open the control module's\
    \ access panel, either by tearing it off with a successful DC 25 Strength (Athletics)\
    \ check or by dislodging it with thieves' tools and a successful DC 25 Dexterity\
    \ check. Behind the panel, embedded in the floor of the control module, is a 5-foot-diameter\
    \ pulsating crystal hemisphere with AC 10, 25 hit points, and immunity to poison\
    \ and psychic damage. Destroying the crystal hemisphere shuts down Shockerstomper."
  "name": "Control Module"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A character can try to plug the nozzle of a lightning turret with a 10-pound\
    \ rock or similar object, doing so with a successful DC 15 Strength (Athletics)\
    \ check. A plugged turret can't shoot lightning until a creature uses an action\
    \ to try to clear the obstruction, which requires another successful DC 15 Strength\
    \ ([Athletics](/rules/skills.md#Athletics)) check. Shockerstomper has no ability\
    \ to clear an obstruction itself."
  "name": "Lightning Turret"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shockerstomper makes three Lightning Turret attacks and two Stomp attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The turret shoots a magical lightning bolt at one creature within 60 feet\
    \ of Shockerstomper. The target must make a DC 15 Dexterity saving throw, taking\
    \ 44 (8d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Turret"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 22 (3d10\
    \ + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "WDMM"
name: Shockerstomper
image: "[[Shockerstomper.png]]"
---

# Shockerstomper

```statblock
"name": "Shockerstomper"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "300"
"hit_dice": "300d1"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "1"
- !!int "1"
- !!int "1"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, deafened, charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 5"
"languages": ""
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a leg drops to 0 hit points, it is disabled, and Shockerstomper can\
    \ use a reaction to detach it from its main body. Whenever one of its legs is\
    \ disabled, Shockerstomper's walking speed is reduced by 10 feet. The whole contraption\
    \ topples over and shuts down if four of its seven legs are disabled."
  "name": "Disable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that ends its turn in contact with Shockerstomper's body (saucer\
    \ or turrets) must make a DC 15 Constitution saving throw, taking 22 (4d10) lightning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Electrified Surface"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shockerstomper is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature atop or above Shockerstomper's platform can locate its control\
    \ module with a successful DC 15 Intelligence (Investigation) check or Wisdom\
    \ (Perception) check. As an action, a character can try to open the control module's\
    \ access panel, either by tearing it off with a successful DC 25 Strength (Athletics)\
    \ check or by dislodging it with thieves' tools and a successful DC 25 Dexterity\
    \ check. Behind the panel, embedded in the floor of the control module, is a 5-foot-diameter\
    \ pulsating crystal hemisphere with AC 10, 25 hit points, and immunity to poison\
    \ and psychic damage. Destroying the crystal hemisphere shuts down Shockerstomper."
  "name": "Control Module"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A character can try to plug the nozzle of a lightning turret with a 10-pound\
    \ rock or similar object, doing so with a successful DC 15 Strength (Athletics)\
    \ check. A plugged turret can't shoot lightning until a creature uses an action\
    \ to try to clear the obstruction, which requires another successful DC 15 Strength\
    \ ([Athletics](/rules/skills.md#Athletics)) check. Shockerstomper has no ability\
    \ to clear an obstruction itself."
  "name": "Lightning Turret"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shockerstomper makes three Lightning Turret attacks and two Stomp attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The turret shoots a magical lightning bolt at one creature within 60 feet\
    \ of Shockerstomper. The target must make a DC 15 Dexterity saving throw, taking\
    \ 44 (8d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Turret"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 22 (3d10\
    \ + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "WDMM"
"image": "[[Shockerstomper.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 174*
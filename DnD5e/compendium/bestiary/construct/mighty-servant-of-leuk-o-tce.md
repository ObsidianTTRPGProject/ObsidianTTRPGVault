---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/huge
- monster/type/construct
aliases: ["Mighty Servant of Leuk-o"]
statblock: true
"name": "Mighty Servant of Leuk-o"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "22"
"hp": !!int "310"
"hit_dice": "27d12 + 135"
"stats":
- !!int "30"
- !!int "14"
- !!int "20"
- !!int "1"
- !!int "14"
- !!int "10"
"speed": "walk 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "9"
"skillsaves":
  "Perception": !!int "9"
"damage_resistances": "piercing, slashing"
"damage_immunities": "acid, bludgeoning, cold, fire, lightning, necrotic, poison,\
  \ psychic, radiant"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ incapacitated, paralyzed, petrified, poisoned, restrained, stunned, unconscious"
"senses": "blindsight 120 ft., passive Perception 19"
"languages": "understands the languages of creatures attuned to it but can't speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant is immune to any spell or effect that would alter its form\
    \ or send it to another plane of existence."
  "name": "Immutable Existence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant has advantage on saving throws against spells and other magical\
    \ effects, and spell attacks made against it have disadvantage."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant regains 10 hit points at the start of its turn. If it is reduced\
    \ to 0 hit points, this trait doesn't function until an attuned creature spends\
    \ 24 hours repairing the artifact or until the artifact is subjected to lightning\
    \ damage."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant's long jump is up to 50 feet and its high jump is up to 25\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) force damage. Or Ranged Weapon Attack: +17 to hit, range 120 ft., one\
    \ target. Hit: 36 (4d12 + 10) force damage. If the target is an object, it takes\
    \ triple damage."
  "name": "Destructive Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the servant jumps at least 25 feet as part of its movement, it can then\
    \ use this action to land on its feet in a space that contains one or more other\
    \ creatures. Each of those creatures is pushed to an unoccupied space within 5\
    \ feet of the servant and must make a DC 25 Dexterity saving throw. On a failed\
    \ save, a creature takes 26 (4d12) bludgeoning damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, a creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Crushing Leap"
"source":
- "TCE"
name: Mighty Servant of Leuk-o
image: "[[Mighty Servant of Leuk-o.png]]"
---

# Mighty Servant of Leuk-o

```statblock
"name": "Mighty Servant of Leuk-o"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "22"
"hp": !!int "310"
"hit_dice": "27d12 + 135"
"stats":
- !!int "30"
- !!int "14"
- !!int "20"
- !!int "1"
- !!int "14"
- !!int "10"
"speed": "walk 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "9"
"skillsaves":
  "Perception": !!int "9"
"damage_resistances": "piercing, slashing"
"damage_immunities": "acid, bludgeoning, cold, fire, lightning, necrotic, poison,\
  \ psychic, radiant"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ incapacitated, paralyzed, petrified, poisoned, restrained, stunned, unconscious"
"senses": "blindsight 120 ft., passive Perception 19"
"languages": "understands the languages of creatures attuned to it but can't speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant is immune to any spell or effect that would alter its form\
    \ or send it to another plane of existence."
  "name": "Immutable Existence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant has advantage on saving throws against spells and other magical\
    \ effects, and spell attacks made against it have disadvantage."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant regains 10 hit points at the start of its turn. If it is reduced\
    \ to 0 hit points, this trait doesn't function until an attuned creature spends\
    \ 24 hours repairing the artifact or until the artifact is subjected to lightning\
    \ damage."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant's long jump is up to 50 feet and its high jump is up to 25\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The servant doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) force damage. Or Ranged Weapon Attack: +17 to hit, range 120 ft., one\
    \ target. Hit: 36 (4d12 + 10) force damage. If the target is an object, it takes\
    \ triple damage."
  "name": "Destructive Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the servant jumps at least 25 feet as part of its movement, it can then\
    \ use this action to land on its feet in a space that contains one or more other\
    \ creatures. Each of those creatures is pushed to an unoccupied space within 5\
    \ feet of the servant and must make a DC 25 Dexterity saving throw. On a failed\
    \ save, a creature takes 26 (4d12) bludgeoning damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, a creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Crushing Leap"
"source":
- "TCE"
"image": "[[Mighty Servant of Leuk-o.png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 131*
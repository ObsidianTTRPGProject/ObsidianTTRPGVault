---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/construct
aliases: ["Living Unseen Servant"]
statblock: true
"name": "Living Unseen Servant"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "2"
- !!int "10"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, unconscious"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": "understands one language (usually Common) but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unseen servant is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 bludgeoning\
    \ damage."
  "name": "Slam"
"source":
- "WDMM"
name: Living Unseen Servant
image: "[[Living Unseen Servant.png]]"
---

# Living Unseen Servant

```statblock
"name": "Living Unseen Servant"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "2"
- !!int "10"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, paralyzed, petrified, poisoned, unconscious"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 12"
"languages": "understands one language (usually Common) but can't speak"
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unseen servant is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 bludgeoning\
    \ damage."
  "name": "Slam"
"source":
- "WDMM"
"image": "[[Living Unseen Servant.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 313*

## Description

**Living Spell.** Areas of wild magic and sites that have been ravaged by powerful eldritch forces can give rise to spell effects that refuse to dissipate. These so-called living spells haunt the places where they were created, subsisting on ambient magical energy.

A living spell appears much like a normal spell effect, except that its magical energy lingers and moves with purpose.

**Constructed Nature.** A living spell doesn't require air, food, drink, or sleep.

**Magical Essence.** The process that creates a living spell changes the nature of its magic. A living spell isn't subject to [dispel magic](/compendium/spells/dispel-magic.md) and isn't affected by an [antimagic field](/compendium/spells/antimagic-field.md).

Like an overzealous butler or maid, a living [unseen servant](/compendium/spells/unseen-servant.md) spell busies itself with tasks in hopes of pleasing its creator. It can wield simple weapons but prefers not to. [See invisibility](/compendium/spells/see-invisibility.md), [true seeing](/compendium/spells/true-seeing.md), and similar effects reveal that the servant has a shape similar to that of a slender humanoid adult.
---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/huge
- monster/type/undead
aliases: ["Zikzokrishka"]
statblock: true
"name": "Zikzokrishka"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
"damage_resistances": "necrotic"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zikzokrishka fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Zikzokrishka's choice that is within 120 feet of the Zikzokrishka\
    \ and aware of it must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the Zikzokrishka's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka exhales lightning in a 90-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka beats its tattered wings. Each creature within 10 feet of\
    \ Zikzokrishka must succeed on a DC 21 Dexterity saving throw or take 14 (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ After beating its wings this way, Zikzokrishka can fly up to half its flying\
    \ speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "CM"
name: Zikzokrishka
image: "[[Zikzokrishka.png]]"
---

# Zikzokrishka

```statblock
"name": "Zikzokrishka"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
"damage_resistances": "necrotic"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zikzokrishka fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Zikzokrishka's choice that is within 120 feet of the Zikzokrishka\
    \ and aware of it must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the Zikzokrishka's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka exhales lightning in a 90-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka makes a Wisdom (Perception) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zikzokrishka beats its tattered wings. Each creature within 10 feet of\
    \ Zikzokrishka must succeed on a DC 21 Dexterity saving throw or take 14 (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ After beating its wings this way, Zikzokrishka can fly up to half its flying\
    \ speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Zikzokrishka.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 209*

## Description

**Zikzokrishka's Phylactery.** Zikzokrishka hid her phylactery deep within the Scimitar Spires, a mountain range to the east of the necropolis of Azumar. If the characters defeat her, Zikzokrishka uses her phylactery to rematerialize, having long ago prepared a dragon's corpse to house her spirit upon its return to the phylactery.
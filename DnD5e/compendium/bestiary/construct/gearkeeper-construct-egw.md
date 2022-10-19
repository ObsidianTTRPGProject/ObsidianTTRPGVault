---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/large
- monster/type/construct
aliases: ["Gearkeeper Construct"]
statblock: true
"name": "Gearkeeper Construct"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 60 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Opportunity attacks made against the gearkeeper have disadvantage."
  "name": "Rapid Shifting"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the gearkeeper takes\
    \ 4 (1d8) slashing damage."
  "name": "Whirling Blades"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper makes two Arm Blade attacks, or one Arm Blade attack and\
    \ one Spear Launcher attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) slashing damage."
  "name": "Arm Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 90 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage, and the target is knocked [prone](/rules/conditions.md#prone)."
  "name": "Spear Launcher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper jettisons a spray of jagged metal in a 30-foot cone. Each\
    \ creature in the area must make a DC 15 Dexterity saving throw, taking 21 (6d6)\
    \ piercing damage on a failed save, or half as much damage on a successful one."
  "name": "Shrapnel Blast (Recharge 6)"
"source":
- "EGW"
name: Gearkeeper Construct
image: "[[Gearkeeper Construct.png]]"
---

# Gearkeeper Construct

```statblock
"name": "Gearkeeper Construct"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 60 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Opportunity attacks made against the gearkeeper have disadvantage."
  "name": "Rapid Shifting"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 5 feet of the gearkeeper takes\
    \ 4 (1d8) slashing damage."
  "name": "Whirling Blades"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper makes two Arm Blade attacks, or one Arm Blade attack and\
    \ one Spear Launcher attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) slashing damage."
  "name": "Arm Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 90 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage, and the target is knocked [prone](/rules/conditions.md#prone)."
  "name": "Spear Launcher"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gearkeeper jettisons a spray of jagged metal in a 30-foot cone. Each\
    \ creature in the area must make a DC 15 Dexterity saving throw, taking 21 (6d6)\
    \ piercing damage on a failed save, or half as much damage on a successful one."
  "name": "Shrapnel Blast (Recharge 6)"
"source":
- "EGW"
"image": "[[Gearkeeper Construct.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 290*

## Description

Rolling, deadly whirlwinds of metal plates and curving blades, these clockwork automatons were initially designed by tinkerers and mage engineers to be sentries and guardians in the deepest of vaults during the Age of Arcanum. While most of these majestic and deadly curiosities have fallen to rust and ruin, forgotten along with their long-destroyed and buried societies, some continue to patrol the tunnels and pathways of forgotten tombs and dungeons, following their original operations and directives to protect the contents of their domain.

Resembling a rolling ball of shield-like plates, a gearkeeper construct can rapidly travel through corridors to seek intruders. Upon discovering an unrecognized creature, the shields expand to reveal gaps where numerous metallic legs emerge for precision movement. Bladed appendages whir around the construct, threatening any unlucky delvers who wander too close, while heavy spears of steel can be fired from within the construct's core, impaling unwanted guests. If overwhelmed, the construct can discharge a spray of heated, jagged metal fragments to subdue groups of intruders.

Reverse engineering from the recovered shells and scraps of excavated gearkeeper constructs, a number of modern tinkerers have developed updated variations of these sentinels. Such designs are only recently seeing use in select prisons, or by wealthy collectors seeking to keep their collections safe.
---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/huge
- monster/type/monstrosity
aliases: ["Typhon"]
statblock: true
"name": "Typhon"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "10"
- !!int "20"
- !!int "7"
- !!int "12"
- !!int "13"
"speed": "walk 40 ft."
"saves":
  "Constitution": !!int "10"
"damage_immunities": "acid, necrotic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon regains 20 hit points at the start of its turn. If it takes\
    \ radiant damage, this trait doesn't function at the start of its next turn. The\
    \ typhon dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon makes three attacks: one with its Flurry of Bites, one to constrict,\
    \ and one with its maw."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 35 (8d6\
    \ + 7) piercing damage."
  "name": "Flurry of Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one Large or smaller creature.\
    \ Hit: 17 (3d6 + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and takes 17 (3d6 + 7) bludgeoning damage at the start of each of its turns.\
    \ The typhon can have up to two creatures constricted."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage plus 19 (3d12) acid damage."
  "name": "Maw"
"source":
- "MOT"
name: Typhon
image: "[[Typhon.png]]"
---

# Typhon

```statblock
"name": "Typhon"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "24"
- !!int "10"
- !!int "20"
- !!int "7"
- !!int "12"
- !!int "13"
"speed": "walk 40 ft."
"saves":
  "Constitution": !!int "10"
"damage_immunities": "acid, necrotic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon regains 20 hit points at the start of its turn. If it takes\
    \ radiant damage, this trait doesn't function at the start of its next turn. The\
    \ typhon dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The typhon makes three attacks: one with its Flurry of Bites, one to constrict,\
    \ and one with its maw."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 35 (8d6\
    \ + 7) piercing damage."
  "name": "Flurry of Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one Large or smaller creature.\
    \ Hit: 17 (3d6 + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)\
    \ and takes 17 (3d6 + 7) bludgeoning damage at the start of each of its turns.\
    \ The typhon can have up to two creatures constricted."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage plus 19 (3d12) acid damage."
  "name": "Maw"
"source":
- "MOT"
"image": "[[Typhon.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 246*

## Description

Titanic horrors of writhing flesh and gnashing maws, typhons slither through the Underworld seeking only to consume. Once the souls of mortal warlords and cruel tyrants, typhons come into being over ages of festering bitterness and rage. Over time, these souls twist into eternally ravenous monstrosities, which rampage through the realm of the dead, consuming souls by the thousands. The Underworld remains their prison, though, and most would relish nothing more than to escape and slaughter the living once more.
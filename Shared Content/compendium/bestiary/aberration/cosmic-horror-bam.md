---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/gargantuan
- monster/type/aberration
aliases: ["Cosmic Horror"]
statblock: true
"name": "Cosmic Horror"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "280"
"hit_dice": "16d20 + 112"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "24"
- !!int "15"
- !!int "24"
"speed": "walk 50 ft., fly 100 ft."
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "8"
  "Intelligence": !!int "13"
"damage_immunities": "acid, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 240 ft., passive Perception 12"
"languages": "Deep Speech, telepathy 240 ft."
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the horror fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 18 (3d6\
    \ + 8) force damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the horror can't use this tentacle\
    \ against other targets. The horror has 1d8 + 1 tentacles, each of which can grapple\
    \ one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror emits dreadful whispers in a 60-foot-radius sphere centered\
    \ on itself. Each creature in the sphere that isn't an Aberration must make a\
    \ DC 21 Wisdom saving throw, taking 33 (6d10) psychic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Psychic Whispers (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror crushes one creature it is grappling. The [grappled](/rules/conditions.md#grappled)\
    \ creature must make a DC 22 Constitution saving throw, taking 18 (3d6 + 8) force\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Crushing Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Foul gas squirts from the horror in a 30-foot line that is 5 feet wide.\
    \ Each creature in the line must succeed on a DC 21 Constitution saving throw\
    \ or take 14 (4d6) poison damage."
  "name": "Poison Jet (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror teleports, along with any creatures it is grappling, to an unoccupied\
    \ space it can see within 120 feet of itself."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "BAM"
name: Cosmic Horror
image: "[[Cosmic Horror.png]]"
---

# Cosmic Horror

```statblock
"name": "Cosmic Horror"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "280"
"hit_dice": "16d20 + 112"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "24"
- !!int "15"
- !!int "24"
"speed": "walk 50 ft., fly 100 ft."
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "8"
  "Intelligence": !!int "13"
"damage_immunities": "acid, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 240 ft., passive Perception 12"
"languages": "Deep Speech, telepathy 240 ft."
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the horror fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 18 (3d6\
    \ + 8) force damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the horror can't use this tentacle\
    \ against other targets. The horror has 1d8 + 1 tentacles, each of which can grapple\
    \ one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror emits dreadful whispers in a 60-foot-radius sphere centered\
    \ on itself. Each creature in the sphere that isn't an Aberration must make a\
    \ DC 21 Wisdom saving throw, taking 33 (6d10) psychic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Psychic Whispers (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror crushes one creature it is grappling. The [grappled](/rules/conditions.md#grappled)\
    \ creature must make a DC 22 Constitution saving throw, taking 18 (3d6 + 8) force\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Crushing Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Foul gas squirts from the horror in a 30-foot line that is 5 feet wide.\
    \ Each creature in the line must succeed on a DC 21 Constitution saving throw\
    \ or take 14 (4d6) poison damage."
  "name": "Poison Jet (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror teleports, along with any creatures it is grappling, to an unoccupied\
    \ space it can see within 120 feet of itself."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "BAM"
"image": "[[Cosmic Horror.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 18*

## Description

Cosmic horrors are colossal, malevolent entities that occasionally slip the bonds of the Far Realm and find themselves adrift on the Astral Plane. Drawn to the light of distant stars, these creatures invade Wildspace systems and lay waste to worlds. After feeding on the minds and bodies of a world's inhabitants until it is sated, a cosmic horror usually returns to the void, where it falls into a deep sleep, drifting aimlessly until hunger or some other stimulus awakens it.

Cosmic horrors are among the most powerful creatures spawned by the Far Realm. No two of them have the same appearance, but they have certain qualities in common. Each one is roughly 100 feet long or tall, and its physical form is a seemingly impossible conglomeration of eyes, mouths, wings, tentacles, and less recognizable organs and appendages.
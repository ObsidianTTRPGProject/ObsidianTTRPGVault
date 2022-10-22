---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/huge
- monster/type/undead/titan
aliases: ["Atropal"]
statblock: true
"name": "Atropal"
"size": "Huge"
"type": "undead"
"subtype": "titan"
"alignment": "Neutral Evil"
"ac": !!int "7"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "19"
- !!int "5"
- !!int "22"
- !!int "25"
- !!int "19"
- !!int "24"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"saves":
  "Wisdom": !!int "9"
  "Constitution": !!int "11"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 14"
"languages": "understands Celestial but utters only obscene nonsense"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures within 30 feet of the atropal can't regain hit points, and any\
    \ creature that starts its turn within 30 feet of the atropal takes 10 (3d6) necrotic\
    \ damage. If the atropal is struck by a vorpal sword, the wielder can cut the\
    \ atropal's umbilical cord instead of dealing damage. If its umbilical cord is\
    \ cut, the atropal loses this feature."
  "name": "Negative Energy Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal and any other undead creature within 30 feet of it has advantage\
    \ on saving throws against any effect that turns undead."
  "name": "Turn Resistance Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (3d6)\
    \ necrotic damage."
  "name": "Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 21 (6d6)\
    \ cold damage."
  "name": "Ray of Cold"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal targets one creature it can see within 120 feet of it. The\
    \ target must succeed on a DC 19 Constitution saving throw, taking 36 (8d8) necrotic\
    \ damage on a failed save, or half as much damage on a successful one. The atropal\
    \ regains a number of hit points equal to half the amount of damage dealt."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal summons a [wraith](/compendium/bestiary/undead/wraith.md) which\
    \ materializes within 30 feet of it in an unoccupied space it can see. The wraith\
    \ obeys its summoner's commands and can't be controlled by any other creature.\
    \ The Wraith vanishes when it drops to 0 hit points or when its summoner dies."
  "name": "Summon Wraith (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal makes a touch attack."
  "name": "Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal uses its Ray of Cold."
  "name": "Ray of Cold (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal lets out a withering wail. Any creature within 120 feet of\
    \ the atropal that can hear the wail must succeed on a DC 19 Constitution saving\
    \ throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Wail (Costs 3 Actions)"
"source":
- "ToA"
name: Atropal
image: "[[Atropal.png]]"
---

# Atropal

```statblock
"name": "Atropal"
"size": "Huge"
"type": "undead"
"subtype": "titan"
"alignment": "Neutral Evil"
"ac": !!int "7"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "19"
- !!int "5"
- !!int "22"
- !!int "25"
- !!int "19"
- !!int "24"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"saves":
  "Wisdom": !!int "9"
  "Constitution": !!int "11"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 14"
"languages": "understands Celestial but utters only obscene nonsense"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures within 30 feet of the atropal can't regain hit points, and any\
    \ creature that starts its turn within 30 feet of the atropal takes 10 (3d6) necrotic\
    \ damage. If the atropal is struck by a vorpal sword, the wielder can cut the\
    \ atropal's umbilical cord instead of dealing damage. If its umbilical cord is\
    \ cut, the atropal loses this feature."
  "name": "Negative Energy Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal and any other undead creature within 30 feet of it has advantage\
    \ on saving throws against any effect that turns undead."
  "name": "Turn Resistance Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (3d6)\
    \ necrotic damage."
  "name": "Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 21 (6d6)\
    \ cold damage."
  "name": "Ray of Cold"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal targets one creature it can see within 120 feet of it. The\
    \ target must succeed on a DC 19 Constitution saving throw, taking 36 (8d8) necrotic\
    \ damage on a failed save, or half as much damage on a successful one. The atropal\
    \ regains a number of hit points equal to half the amount of damage dealt."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal summons a [wraith](/compendium/bestiary/undead/wraith.md) which\
    \ materializes within 30 feet of it in an unoccupied space it can see. The wraith\
    \ obeys its summoner's commands and can't be controlled by any other creature.\
    \ The Wraith vanishes when it drops to 0 hit points or when its summoner dies."
  "name": "Summon Wraith (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal makes a touch attack."
  "name": "Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal uses its Ray of Cold."
  "name": "Ray of Cold (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The atropal lets out a withering wail. Any creature within 120 feet of\
    \ the atropal that can hear the wail must succeed on a DC 19 Constitution saving\
    \ throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Wail (Costs 3 Actions)"
"source":
- "ToA"
"image": "[[Atropal.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 214*

## Description

An atropal is a ghastly, unfinished creation of an evil god, cast adrift and abandoned long ago. Since an atropal was never truly alive, it can't be raised from the dead or resurrected by any means. Even divine intervention can't breathe true life into this hateful, miserable horror.

An atropal is malformed and unfinished. Its wet, wrinkled, and bloated body is surmounted by a hairless, overlarge head set with glassy, vacant eyes. It constantly drools stinking ichor as it mouths obscenities. Its arms are too slender, with tiny hands ending in cruelly shaped nails. An atropal never walks but always floats, with its atrophied, dead legs hanging useless below it.

**Negative Energy Connection.** The shriveled umbilical cord of an atropal appears to trail off into nothingness, but in fact, it attaches to the Negative Plane. This connection gives the atropal power over death and undeath. The cord can be severed by a vorpal sword or other vorpal weapon, and doing so weakens the atropal's tie to the Negative Plane.

An atropal can summon vestiges of creatures that died in the Negative Plane, which manifest as wraiths. These servants can exist outside the Negative Plane only by the atropal's sheer force of will, and they quickly dissipate when the atropal is destroyed.

**Undead Nature.** An atropal doesn't require air, food, drink, or sleep.
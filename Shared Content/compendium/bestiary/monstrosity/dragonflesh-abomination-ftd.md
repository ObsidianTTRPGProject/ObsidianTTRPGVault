---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/monstrosity
aliases: ["Dragonflesh Abomination"]
statblock: true
"name": "Dragonflesh Abomination"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "18"
- !!int "14"
- !!int "17"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "6"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 11"
"languages": "understands Common and Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination is surrounded by a noxious stench. At the start of the\
    \ abomination's turn, any creature within 5 feet of it must succeed on a DC 14\
    \ Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned) until\
    \ the start of the abomination's next turn."
  "name": "Cloying Miasma"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination regains 10 hit points at the start of its turns if it has\
    \ at least 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination makes three attacks using Claw, Acidic Spit, or a combination\
    \ of them. It can replace one of the attacks with a Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage plus 5 (1d10) poison damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 10 (3d6)\
    \ acid damage."
  "name": "Acidic Spit"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination belches forth a cloud of acidic gas in a 30-foot cone.\
    \ Each creature in that area must make a DC 14 Constitution saving throw, taking\
    \ 28 (8d6) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Belch (Recharge 5-6)"
"source":
- "FTD"
name: Dragonflesh Abomination
image: "[[Dragonflesh Abomination.png]]"
---

# Dragonflesh Abomination

```statblock
"name": "Dragonflesh Abomination"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "7d12 + 21"
"stats":
- !!int "18"
- !!int "14"
- !!int "17"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "6"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 11"
"languages": "understands Common and Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination is surrounded by a noxious stench. At the start of the\
    \ abomination's turn, any creature within 5 feet of it must succeed on a DC 14\
    \ Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned) until\
    \ the start of the abomination's next turn."
  "name": "Cloying Miasma"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination regains 10 hit points at the start of its turns if it has\
    \ at least 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination makes three attacks using Claw, Acidic Spit, or a combination\
    \ of them. It can replace one of the attacks with a Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage plus 5 (1d10) poison damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 10 (3d6)\
    \ acid damage."
  "name": "Acidic Spit"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abomination belches forth a cloud of acidic gas in a 30-foot cone.\
    \ Each creature in that area must make a DC 14 Constitution saving throw, taking\
    \ 28 (8d6) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Acid Belch (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Dragonflesh Abomination.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 187*

## Description

A dragonflesh abomination is the final stage of a grafter's transformation—a hulking monster whose corrupted brain is ablaze with desire for treasure. Its abhorrent transformation erases the last vestiges of its previous life. It sprouts a tail and clumsy wings and grows to enormous size, barely retaining a bipedal shape. Its stomach churns with acid, causing noxious fumes to waft from its mouth and providing it with a caustic breath weapon. Its body is in a constant state of growth and change, allowing it to quickly heal from its wounds.

These creatures are most often found in abandoned dragon lairs, temples to Tiamat, or other sites associated with the dragons they love.

**Dragonflesh Grafters.** Dragonflesh grafters practice forbidden rituals and risky experiments on themselves, modifying their bodies and minds to emulate the dragons they revere. They collect dragon parts—scales, teeth, skin, flesh, wings, and bones—that they scavenge from around dragon lairs, take from dragon corpses, or buy from merchants and adventurers. They stitch on, implant, or ingest these dragon parts, attempting to incorporate them into their own bodies and absorb the latent magic that lingers in a draconic corpse.

While most would-be grafters wind up hideously scarred or dead, a few survive as wretched horrors. Their minds become twisted by magical malevolence, with only a shadow of their former selves remaining. In the most extreme cases, the resulting abomination holds no remnant of the person it once was and is utterly ruled by a dragon's lust for treasure.
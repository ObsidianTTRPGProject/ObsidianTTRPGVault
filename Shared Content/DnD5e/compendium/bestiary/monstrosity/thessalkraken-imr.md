---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Thessalkraken"]
statblock: true
"name": "Thessalkraken"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "24"
- !!int "11"
- !!int "20"
- !!int "19"
- !!int "15"
- !!int "17"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"damage_immunities": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak,\
  \ telepathy 120 ft."
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken ignores difficult terrain, and magical effects can't\
    \ reduce its speed or cause it to be [restrained](/rules/conditions.md#restrained).\
    \ It can spend 5 feet of movement to escape from nonmagical restraints or being\
    \ [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken makes one bite attack and two tentacle attacks. It can\
    \ replace each tentacle attack with one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) piercing damage plus 5 (1d10) acid damage. If the target is a Medium or\
    \ smaller creature [grappled](/rules/conditions.md#grappled) by the thessalkraken,\
    \ that creature is swallowed, and the grapple ends. While swallowed, the creature\
    \ is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the thessalkraken,\
    \ and it takes 21 (6d6) acid damage at the start of each of the thessalkraken's\
    \ turns.\n\nIf the thessalkraken takes 35 damage or more on a single turn from\
    \ a creature inside it, it must succeed on a DC 23 Constitution saving throw at\
    \ the end of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the thessalkraken. If the thessalkraken dies, a\
    \ swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The thessalkraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the thessalkraken is thrown up to 40 feet in a random direction and knocked\
    \ [prone](/rules/conditions.md#prone). If a thrown target strikes a solid surface,\
    \ the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown.\
    \ If the target is thrown at another creature, that creature must succeed on a\
    \ DC 16 Dexterity saving throw or take the same damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken spits a glob of acid at a point it can see within 60\
    \ feet of it. Each creature within 10 feet of that point must make a DC 18 Dexterity\
    \ saving throw, taking 22 (4d10) acid damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Acid Saliva (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken makes one tentacle attack."
  "name": "Tentacle Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken uses Fling."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the thessalkraken expels an ink cloud in a 60-foot radius.\
    \ The cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than the thessalkraken. Each creature other than the thessalkraken that\
    \ ends its turn there must succeed on a DC 18 Constitution saving throw, taking\
    \ 16 (3d10) poison damage on a failed save, or half as much damage on a successful\
    \ one. A strong current disperses the cloud, which otherwise disappears at the\
    \ end of the thessalkraken's next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "IMR"
name: Thessalkraken
image: "[[Thessalkraken.png]]"
---

# Thessalkraken

```statblock
"name": "Thessalkraken"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "24"
- !!int "11"
- !!int "20"
- !!int "19"
- !!int "15"
- !!int "17"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"damage_immunities": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak,\
  \ telepathy 120 ft."
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken ignores difficult terrain, and magical effects can't\
    \ reduce its speed or cause it to be [restrained](/rules/conditions.md#restrained).\
    \ It can spend 5 feet of movement to escape from nonmagical restraints or being\
    \ [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken makes one bite attack and two tentacle attacks. It can\
    \ replace each tentacle attack with one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) piercing damage plus 5 (1d10) acid damage. If the target is a Medium or\
    \ smaller creature [grappled](/rules/conditions.md#grappled) by the thessalkraken,\
    \ that creature is swallowed, and the grapple ends. While swallowed, the creature\
    \ is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the thessalkraken,\
    \ and it takes 21 (6d6) acid damage at the start of each of the thessalkraken's\
    \ turns.\n\nIf the thessalkraken takes 35 damage or more on a single turn from\
    \ a creature inside it, it must succeed on a DC 23 Constitution saving throw at\
    \ the end of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the thessalkraken. If the thessalkraken dies, a\
    \ swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The thessalkraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the thessalkraken is thrown up to 40 feet in a random direction and knocked\
    \ [prone](/rules/conditions.md#prone). If a thrown target strikes a solid surface,\
    \ the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown.\
    \ If the target is thrown at another creature, that creature must succeed on a\
    \ DC 16 Dexterity saving throw or take the same damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken spits a glob of acid at a point it can see within 60\
    \ feet of it. Each creature within 10 feet of that point must make a DC 18 Dexterity\
    \ saving throw, taking 22 (4d10) acid damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Acid Saliva (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken makes one tentacle attack."
  "name": "Tentacle Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalkraken uses Fling."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, the thessalkraken expels an ink cloud in a 60-foot radius.\
    \ The cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than the thessalkraken. Each creature other than the thessalkraken that\
    \ ends its turn there must succeed on a DC 18 Constitution saving throw, taking\
    \ 16 (3d10) poison damage on a failed save, or half as much damage on a successful\
    \ one. A strong current disperses the cloud, which otherwise disappears at the\
    \ end of the thessalkraken's next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "IMR"
"image": "[[Thessalkraken.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 87*

## Description

The alchemist Thessalar created unknown numbers of misshapen magical creatures, including his many thessalbeasts. Among the largest was the thessalkraken—a slightly smaller variant of the legendary kraken, resembling that great tentacled titan but with a jagged-toothed maw that drips constantly with acid.

A thessalkraken lives in the dark depths, usually a sunken rift or a cavern filled with detritus, treasure, and the remains of sacrificial victims.
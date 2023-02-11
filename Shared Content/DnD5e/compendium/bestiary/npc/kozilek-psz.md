---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/gargantuan
- monster/type/monstrosity/titan
- monster/environment/underwater
aliases: ["Kozilek"]
statblock: true
"name": "Kozilek"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "472"
"hit_dice": "27d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "25"
- !!int "22"
- !!int "18"
- !!int "20"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "11"
  "Intelligence": !!int "13"
  "Strength": !!int "17"
  "Constitution": !!int "14"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks;\
  \ psychic"
"condition_immunities": "frightened, paralyzed, charmed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't\
  \ speak"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek ignores difficult terrain, and magical effects can't reduce its\
    \ speed or cause it to be [restrained](/rules/conditions.md#restrained). It can\
    \ spend 5 feet of movement to escape from nonmagical restraints or being [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek makes three tentacle attacks, each of which it can replace with\
    \ one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Kozilek, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Kozilek, and it\
    \ takes 42 (12d6) acid damage at the start of each of Kozilek's turns. If Kozilek\
    \ takes 50 damage or more on a single turn from a creature inside it, Kozilek\
    \ must succeed on a DC 25 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Kozilek. If Kozilek dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Kozilek has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by Kozilek is thrown up to 60 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 18 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek magically creates three bolts of lightning, each of which can strike\
    \ a target Kozilek can see within 120 feet of it. A target must make a DC 23 Dexterity\
    \ saving throw, taking 22 (4d10) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Storm"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek uses Lightning Storm."
  "name": "Lightning Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Kozilek expels an ink cloud in a 60-foot radius. The\
    \ cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than Kozilek. Each creature other than Kozilek that ends its turn there\
    \ must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage\
    \ on a failed save, or half as much damage on a successful one. A strong current\
    \ disperses the cloud, which otherwise disappears at the end of Kozilek's next\
    \ turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "PSZ"
name: Kozilek
image: "[[Kozilek.png]]"
---

# Kozilek

```statblock
"name": "Kozilek"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "472"
"hit_dice": "27d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "25"
- !!int "22"
- !!int "18"
- !!int "20"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "11"
  "Intelligence": !!int "13"
  "Strength": !!int "17"
  "Constitution": !!int "14"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks;\
  \ psychic"
"condition_immunities": "frightened, paralyzed, charmed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't\
  \ speak"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek ignores difficult terrain, and magical effects can't reduce its\
    \ speed or cause it to be [restrained](/rules/conditions.md#restrained). It can\
    \ spend 5 feet of movement to escape from nonmagical restraints or being [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek makes three tentacle attacks, each of which it can replace with\
    \ one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Kozilek, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Kozilek, and it\
    \ takes 42 (12d6) acid damage at the start of each of Kozilek's turns. If Kozilek\
    \ takes 50 damage or more on a single turn from a creature inside it, Kozilek\
    \ must succeed on a DC 25 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Kozilek. If Kozilek dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Kozilek has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by Kozilek is thrown up to 60 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 18 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek magically creates three bolts of lightning, each of which can strike\
    \ a target Kozilek can see within 120 feet of it. A target must make a DC 23 Dexterity\
    \ saving throw, taking 22 (4d10) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Storm"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kozilek uses Lightning Storm."
  "name": "Lightning Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Kozilek expels an ink cloud in a 60-foot radius. The\
    \ cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than Kozilek. Each creature other than Kozilek that ends its turn there\
    \ must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage\
    \ on a failed save, or half as much damage on a successful one. A strong current\
    \ disperses the cloud, which otherwise disappears at the end of Kozilek's next\
    \ turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "PSZ"
"image": "[[Kozilek.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 38*

## Environment

underwater
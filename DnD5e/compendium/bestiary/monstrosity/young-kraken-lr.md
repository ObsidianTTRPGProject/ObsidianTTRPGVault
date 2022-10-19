---
cssclass: json5e-monster
tags:
- compendium/src/lr
- monster/size/huge
- monster/type/monstrosity/titan
aliases: ["Young Kraken"]
statblock: true
"name": "Young Kraken"
"size": "Huge"
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
"speed": "walk 20 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 60 ft. but can't\
  \ speak"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes two tentacle attacks, each of which it can replace with\
    \ one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) piercing damage.\n\nIf the target is a Medium or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken, that creature is swallowed and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the kraken, and\
    \ it takes 21 (6d6) acid damage at the start of each of the kraken's turns. One\
    \ Medium or two smaller creatures can be swallowed at the same time.\n\nIf the\
    \ kraken takes 35 damage or more on a single turn from a creature inside it, the\
    \ kraken must succeed on a DC 23 Constitution saving throw at the end of that\
    \ turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in spaces within 10 feet of the kraken. If the kraken dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 17 (3d6\
    \ + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The kraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken is thrown up to 40 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 13 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken magically create a bolt of lightning, which can strike a target\
    \ the kraken can see within 90 feet of it. The target must make a DC 18 Dexterity\
    \ saving throw, taking 22 (4d10) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike"
"source":
- "LR"
name: Young Kraken
image: "[[Young Kraken.png]]"
---

# Young Kraken

```statblock
"name": "Young Kraken"
"size": "Huge"
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
"speed": "walk 20 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Strength": !!int "12"
  "Constitution": !!int "10"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Abyssal, Celestial, Infernal, Primordial, telepathy 60 ft. but can't\
  \ speak"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes two tentacle attacks, each of which it can replace with\
    \ one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) piercing damage.\n\nIf the target is a Medium or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken, that creature is swallowed and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the kraken, and\
    \ it takes 21 (6d6) acid damage at the start of each of the kraken's turns. One\
    \ Medium or two smaller creatures can be swallowed at the same time.\n\nIf the\
    \ kraken takes 35 damage or more on a single turn from a creature inside it, the\
    \ kraken must succeed on a DC 23 Constitution saving throw at the end of that\
    \ turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in spaces within 10 feet of the kraken. If the kraken dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 10 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 17 (3d6\
    \ + 7) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The kraken has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Medium or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by the kraken is thrown up to 40 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 13 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken magically create a bolt of lightning, which can strike a target\
    \ the kraken can see within 90 feet of it. The target must make a DC 18 Dexterity\
    \ saving throw, taking 22 (4d10) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike"
"source":
- "LR"
"image": "[[Young Kraken.png]]"
```
^statblock

*Source: Locathah Rising p. 21*
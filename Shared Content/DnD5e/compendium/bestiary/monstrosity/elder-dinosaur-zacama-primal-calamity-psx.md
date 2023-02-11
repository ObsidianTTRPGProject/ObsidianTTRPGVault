---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Elder Dinosaur (Zacama, Primal Calamity)"]
statblock: true
"name": "Elder Dinosaur (Zacama, Primal Calamity)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"hp": !!int "676"
"hit_dice": "33d20 + 330"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "11"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elder dinosaur fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur can use its Frightful Presence. It then makes five attacks:\
    \ three with its bite, one with its stomp, and one with its tail. It can use its\
    \ Swallow instead of a bite. "
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ If the elder dinosaur has three targets [restrained](/rules/conditions.md#restrained)\
    \ in this way, it can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 5 ft., one target. Hit: 46 (8d8\
    \ + 10) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 38 (8d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 20 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the elder dinosaur's choice within 120 feet of it and\
    \ aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the elder dinosaur is within line of sight, ending\
    \ the effect on itself ona success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to the elder dinosaur's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one bite attack against a Large or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage,\
    \ the target is swallowed, and the grapple ends. While swallowed, the creature\
    \ is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the elder dinosaur,\
    \ and it takes 56 (16d6) acid damage at the start of each of the elder dinosaur's\
    \ turns. If the elder dinosaur takes 60 damage or more on a single turn from a\
    \ creature inside it, it must succeed on a DC 20 Constitution saving throw at\
    \ the end of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of it. If the elder dinosaur dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one claw attack, tail attack, wing attack, or\
    \ flipper attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "PSX"
name: Elder Dinosaur (Zacama, Primal Calamity)
image: "[[Elder Dinosaur (Zacama, Primal Calamity).png]]"
---

# Elder Dinosaur (Zacama, Primal Calamity)

```statblock
"name": "Elder Dinosaur (Zacama, Primal Calamity)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"hp": !!int "676"
"hit_dice": "33d20 + 330"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "11"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elder dinosaur fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur can use its Frightful Presence. It then makes five attacks:\
    \ three with its bite, one with its stomp, and one with its tail. It can use its\
    \ Swallow instead of a bite. "
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ If the elder dinosaur has three targets [restrained](/rules/conditions.md#restrained)\
    \ in this way, it can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 5 ft., one target. Hit: 46 (8d8\
    \ + 10) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 38 (8d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 20 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the elder dinosaur's choice within 120 feet of it and\
    \ aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the elder dinosaur is within line of sight, ending\
    \ the effect on itself ona success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to the elder dinosaur's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one bite attack against a Large or smaller creature\
    \ it is grappling. If the attack hits, that creature takes the bite's damage,\
    \ the target is swallowed, and the grapple ends. While swallowed, the creature\
    \ is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the elder dinosaur,\
    \ and it takes 56 (16d6) acid damage at the start of each of the elder dinosaur's\
    \ turns. If the elder dinosaur takes 60 damage or more on a single turn from a\
    \ creature inside it, it must succeed on a DC 20 Constitution saving throw at\
    \ the end of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of it. If the elder dinosaur dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one claw attack, tail attack, wing attack, or\
    \ flipper attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "PSX"
"image": "[[Elder Dinosaur (Zacama, Primal Calamity).png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 33*
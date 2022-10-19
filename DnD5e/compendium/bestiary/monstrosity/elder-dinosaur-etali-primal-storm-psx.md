---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Elder Dinosaur (Etali, Primal Storm)"]
statblock: true
"name": "Elder Dinosaur (Etali, Primal Storm)"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur is always accompanied by a raging thunderstorm similar\
    \ to the effect of a [call lightning](/compendium/spells/call-lightning.md) spell.\
    \ A storm cloud in the shape of a cylinder that is 10 feet tall with a 60-foot\
    \ radius instantly forms 100 feet in the air over the elder dinosaur when it is\
    \ angered or becomes violent, as long as it is outdoors. On each of its turns,\
    \ as an action, the elder dinosaur can choose a point it can see within 120 feet\
    \ of it. A bolt of lightning flashes down from the cloud to that point. Each creature\
    \ within 10 feet of that point must make a DC 20 Dexterity saving throw, taking\
    \ 21 (6d6) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Storm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur can use its Frightful Presence and call down two lightning\
    \ strikes from its Lightning Storm. It then makes three attacks: one with its\
    \ bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the elder dinosaur can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8\
    \ + 10) slashing damage."
  "name": "Claw"
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
name: Elder Dinosaur (Etali, Primal Storm)
image: "[[Elder Dinosaur (Etali, Primal Storm).png]]"
---

# Elder Dinosaur (Etali, Primal Storm)

```statblock
"name": "Elder Dinosaur (Etali, Primal Storm)"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur is always accompanied by a raging thunderstorm similar\
    \ to the effect of a [call lightning](/compendium/spells/call-lightning.md) spell.\
    \ A storm cloud in the shape of a cylinder that is 10 feet tall with a 60-foot\
    \ radius instantly forms 100 feet in the air over the elder dinosaur when it is\
    \ angered or becomes violent, as long as it is outdoors. On each of its turns,\
    \ as an action, the elder dinosaur can choose a point it can see within 120 feet\
    \ of it. A bolt of lightning flashes down from the cloud to that point. Each creature\
    \ within 10 feet of that point must make a DC 20 Dexterity saving throw, taking\
    \ 21 (6d6) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Storm"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder dinosaur can use its Frightful Presence and call down two lightning\
    \ strikes from its Lightning Storm. It then makes three attacks: one with its\
    \ bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the elder dinosaur can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8\
    \ + 10) slashing damage."
  "name": "Claw"
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
"image": "[[Elder Dinosaur (Etali, Primal Storm).png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 33*
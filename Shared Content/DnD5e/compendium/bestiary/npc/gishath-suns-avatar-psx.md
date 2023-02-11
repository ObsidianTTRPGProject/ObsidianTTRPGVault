---
cssclass: json5e-monster
tags:
- compendium/src/psx
- monster/size/gargantuan
- monster/type/beast
aliases: ["Gishath, Sun's Avatar"]
statblock: true
"name": "Gishath, Sun's Avatar"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "203"
"hit_dice": "14d20 + 56"
"stats":
- !!int "24"
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "6"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "2"
  "Wisdom": !!int "7"
  "Strength": !!int "11"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "7"
"senses": "passive Perception 17"
"languages": ""
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gishath fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes two attacks: one with its bite and one with its stomp or\
    \ tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 39 (5d12\
    \ + 7) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Gishath can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes one bite attack against a Large or smaller creature it is\
    \ grappling. If the attack hits, that creature takes the bite's damage and is\
    \ swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Gishath, and it takes 21 (6d6) acid damage\
    \ at the start of each of Gishath's turns.\n\nIf Gishath takes 30 damage or more\
    \ on a single turn from a creature inside it, it must succeed on a DC 18 Constitution\
    \ saving throw at the end of that turn or regurgitate all swallowed creatures,\
    \ which fall [prone](/rules/conditions.md#prone) in a space within 10 feet of\
    \ it. If Gishath dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 29 (5d8\
    \ + 7) bludgeoning damage, and the target must succeed on a DC 19 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 25 (4d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes one stomp or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature that is within 120 feet of Gishath and can hear it must succeed\
    \ on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on tself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Gishath's\
    \ Roar for the next 24 hours."
  "name": "Roar (Costs 2 Actions)"
"source":
- "PSX"
name: Gishath, Sun's Avatar
image: "[[Gishath, Sun's Avatar.png]]"
---

# Gishath, Sun's Avatar

```statblock
"name": "Gishath, Sun's Avatar"
"size": "Gargantuan"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "203"
"hit_dice": "14d20 + 56"
"stats":
- !!int "24"
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "6"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "2"
  "Wisdom": !!int "7"
  "Strength": !!int "11"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "7"
"senses": "passive Perception 17"
"languages": ""
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gishath fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes two attacks: one with its bite and one with its stomp or\
    \ tail. It can't make both attacks against the same target."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 39 (5d12\
    \ + 7) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 19 Dexterity saving throw or it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Gishath can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes one bite attack against a Large or smaller creature it is\
    \ grappling. If the attack hits, that creature takes the bite's damage and is\
    \ swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Gishath, and it takes 21 (6d6) acid damage\
    \ at the start of each of Gishath's turns.\n\nIf Gishath takes 30 damage or more\
    \ on a single turn from a creature inside it, it must succeed on a DC 18 Constitution\
    \ saving throw at the end of that turn or regurgitate all swallowed creatures,\
    \ which fall [prone](/rules/conditions.md#prone) in a space within 10 feet of\
    \ it. If Gishath dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 29 (5d8\
    \ + 7) bludgeoning damage, and the target must succeed on a DC 19 Strength saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 25 (4d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gishath makes one stomp or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature that is within 120 feet of Gishath and can hear it must succeed\
    \ on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on tself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Gishath's\
    \ Roar for the next 24 hours."
  "name": "Roar (Costs 2 Actions)"
"source":
- "PSX"
"image": "[[Gishath, Sun's Avatar.png]]"
```
^statblock

*Source: Plane Shift: Ixalan p. 32*
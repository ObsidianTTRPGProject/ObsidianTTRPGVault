---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/undead
aliases: ["Hollow Dragon"]
statblock: true
"name": "Hollow Dragon"
"size": "Huge"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "19"
"hp": !!int "241"
"hit_dice": "21d12 + 105"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "13"
  "History": !!int "15"
  "Arcana": !!int "9"
"damage_resistances": "necrotic"
"damage_immunities": "poison, radiant"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hollow dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hollow dragon is reduced to 0 hit points, its body breaks into\
    \ nine pieces: two arms, two legs, two wings, a tail, a torso, and a head. Each\
    \ piece is a Large object with AC 19, 27 hit points, and immunity to psychic and\
    \ poison damage. After 1d6 days, if all pieces are still within 6 miles of each\
    \ other, they all teleport to the location of the head piece and merge with it,\
    \ whereupon the hollow dragon regains all its hit points and becomes active again."
  "name": "Reconstruction"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon makes one Bite attack and two Claw attacks, and it can\
    \ use Sapping Presence."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 9 (2d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the hollow dragon's choice within 60 feet of it must make\
    \ a DC 19 Wisdom saving throw. On a failed save, the creature's speed is halved\
    \ and it has disadvantage on attack rolls until the end of its next turn. On a\
    \ successful save, the creature is immune to this hollow dragon's Sapping Presence\
    \ for 24 hours."
  "name": "Sapping Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon exhales radiant flames in a 60-foot cone. Each creature\
    \ in that area must make a DC 19 Dexterity saving throw, taking 54 (12d8) radiant\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Radiant Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon creates ethereal bindings around a creature it can see\
    \ within 60 feet of it. The target must succeed on a DC 19 Strength saving throw\
    \ or be [restrained](/rules/conditions.md#restrained) until the end of the dragon's\
    \ next turn."
  "name": "Ghostly Binding (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A sudden loud ringing noise, painfully intense, erupts from the hollow\
    \ dragon's frame. Each creature within 10 feet of the hollow dragon must make\
    \ a DC 19 Constitution saving throw, taking 24 (7d6) thunder damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Booming Scales (Costs 3 Actions)"
"source":
- "FTD"
name: Hollow Dragon
image: "[[Hollow Dragon.png]]"
---

# Hollow Dragon

```statblock
"name": "Hollow Dragon"
"size": "Huge"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "19"
"hp": !!int "241"
"hit_dice": "21d12 + 105"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "13"
  "History": !!int "15"
  "Arcana": !!int "9"
"damage_resistances": "necrotic"
"damage_immunities": "poison, radiant"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hollow dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hollow dragon is reduced to 0 hit points, its body breaks into\
    \ nine pieces: two arms, two legs, two wings, a tail, a torso, and a head. Each\
    \ piece is a Large object with AC 19, 27 hit points, and immunity to psychic and\
    \ poison damage. After 1d6 days, if all pieces are still within 6 miles of each\
    \ other, they all teleport to the location of the head piece and merge with it,\
    \ whereupon the hollow dragon regains all its hit points and becomes active again."
  "name": "Reconstruction"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon makes one Bite attack and two Claw attacks, and it can\
    \ use Sapping Presence."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 9 (2d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the hollow dragon's choice within 60 feet of it must make\
    \ a DC 19 Wisdom saving throw. On a failed save, the creature's speed is halved\
    \ and it has disadvantage on attack rolls until the end of its next turn. On a\
    \ successful save, the creature is immune to this hollow dragon's Sapping Presence\
    \ for 24 hours."
  "name": "Sapping Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon exhales radiant flames in a 60-foot cone. Each creature\
    \ in that area must make a DC 19 Dexterity saving throw, taking 54 (12d8) radiant\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Radiant Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hollow dragon creates ethereal bindings around a creature it can see\
    \ within 60 feet of it. The target must succeed on a DC 19 Strength saving throw\
    \ or be [restrained](/rules/conditions.md#restrained) until the end of the dragon's\
    \ next turn."
  "name": "Ghostly Binding (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A sudden loud ringing noise, painfully intense, erupts from the hollow\
    \ dragon's frame. Each creature within 10 feet of the hollow dragon must make\
    \ a DC 19 Constitution saving throw, taking 24 (7d6) thunder damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Booming Scales (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Hollow Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 206*

## Description

Unlike dragons who explore the magic of undeath for power, some metallic dragons see undeath as a means to pursue a noble purpose. For the sake of protecting an artifact or fulfilling an oath, a dragon might transform into a hollow dragon, accepting undeath until that purpose is fulfilled.

As the name suggests, a hollow dragon is the husk of a metallic dragon's hide, filled with radiant energy. Depending on the dragon's original kind, that energy might take the appearance of flames, lightning, or misty vapors.

Hollow dragons don't suffer distractions from their undying purpose. So powerful is their drive that their bodies reconstitute if destroyed.

When they fulfill their purpose, most hollow dragons embrace the death they have staved off for so long. But others seek new tasks to sustain themselves—or cling to undeath out of sheer stubbornness or habit.
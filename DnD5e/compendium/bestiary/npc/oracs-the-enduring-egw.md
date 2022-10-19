---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/gargantuan
- monster/type/undead
- monster/environment/swamp
aliases: ["Oracs the Enduring"]
statblock: true
"name": "Oracs the Enduring"
"size": "Gargantuan"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "367"
"hit_dice": "21d20 + 147"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "9"
  "Wisdom": !!int "9"
  "Constitution": !!int "14"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "16"
"damage_resistances": "necrotic"
"damage_immunities": "acid, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, exhaustion"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Oracs fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 9 (2d8) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Oracs's choice that is within 120 feet of Oracs and aware\
    \ of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Oracs's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs exhales acid in a 90-foot line that is 10 feet wide. Each creature\
    \ in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs beats its wings. Each creature within 15 feet of Oracs must succeed\
    \ on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Oracs can then fly up to half\
    \ its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "EGW"
name: Oracs the Enduring
image: "[[Oracs the Enduring.png]]"
---

# Oracs the Enduring

```statblock
"name": "Oracs the Enduring"
"size": "Gargantuan"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "367"
"hit_dice": "21d20 + 147"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "9"
  "Wisdom": !!int "9"
  "Constitution": !!int "14"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "16"
"damage_resistances": "necrotic"
"damage_immunities": "acid, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, exhaustion"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Oracs fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs can use its Frightful Presence. It then makes three attacks: one\
    \ with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 9 (2d8) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Oracs's choice that is within 120 feet of Oracs and aware\
    \ of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Oracs's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs exhales acid in a 90-foot line that is 10 feet wide. Each creature\
    \ in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Oracs beats its wings. Each creature within 15 feet of Oracs must succeed\
    \ on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Oracs can then fly up to half\
    \ its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "EGW"
"image": "[[Oracs the Enduring.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 154*

## Environment

swamp
---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/huge
- monster/type/dragon
- monster/environment/mountain
- monster/environment/hill
aliases: ["Themberchaud"]
statblock: true
"name": "Themberchaud"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Themberchaud fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 7 (2d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Themberchaud's choice that is within 120 feet of Themberchaud\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Themberchaud's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud exhales fire in a 60-foot cone. Each creature in that area\
    \ must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud beats its wings. Each creature within 10 feet of Themberchaud\
    \ must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). Themberchaud can\
    \ then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "OotA"
name: Themberchaud
image: "[[Themberchaud.png]]"
---

# Themberchaud

```statblock
"name": "Themberchaud"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Themberchaud fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 7 (2d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Themberchaud's choice that is within 120 feet of Themberchaud\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Themberchaud's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud exhales fire in a 60-foot cone. Each creature in that area\
    \ must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Themberchaud beats its wings. Each creature within 10 feet of Themberchaud\
    \ must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). Themberchaud can\
    \ then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "OotA"
"image": "[[Themberchaud.png]]"
```
^statblock

*Source: Out of the Abyss p. 53*

## Environment

mountain, hill
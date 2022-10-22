---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/dragon
- monster/environment/arctic
aliases: ["Cryovain"]
statblock: true
"name": "Cryovain"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 4 (1d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 14 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
name: Cryovain
image: "[[Cryovain.png]]"
---

# Cryovain

```statblock
"name": "Cryovain"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 4 (1d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 14 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
"image": "[[Cryovain.png]]"
```
^statblock

*Source: Storm King's Thunder p. 165*

## Environment

arctic
---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/urban
aliases: ["Knight of the Mithral Shield"]
statblock: true
"name": "Knight of the Mithral Shield"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Good"
"ac": !!int "20"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the knight is possessed by yakfolk, its alignment is lawful evil\
    \ and it can speak Yikaria (the yakfolk tongue)."
  "name": "Possessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight of the mithral shield has advantage on saving throws against\
    \ poison, and has resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Warhammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the knight can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a d4 to its roll provided it can hear\
    \ and understand the knight. A creature can benefit from only one Leadership die\
    \ at a time. This effect ends if the knight is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the knight must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "SKT"
name: Knight of the Mithral Shield
image: "[[Knight of the Mithral Shield.png]]"
---

# Knight of the Mithral Shield

```statblock
"name": "Knight of the Mithral Shield"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Good"
"ac": !!int "20"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common), Dwarvish"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the knight is possessed by yakfolk, its alignment is lawful evil\
    \ and it can speak Yikaria (the yakfolk tongue)."
  "name": "Possessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight of the mithral shield has advantage on saving throws against\
    \ poison, and has resistance against poison damage."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Warhammer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the knight can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a d4 to its roll provided it can hear\
    \ and understand the knight. A creature can benefit from only one Leadership die\
    \ at a time. This effect ends if the knight is [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the knight must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "SKT"
"image": "[[Knight of the Mithral Shield.png]]"
```
^statblock

*Source: Storm King's Thunder p. 79*

## Environment

urban
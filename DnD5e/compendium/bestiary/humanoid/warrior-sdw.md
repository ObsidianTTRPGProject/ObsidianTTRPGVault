---
cssclass: json5e-monster
tags:
- compendium/src/sdw
- monster/size/medium
- monster/type/humanoid
aliases: ["Warrior"]
statblock: true
"name": "Warrior"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "6"
"skillsaves":
  "Athletics": !!int "8"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has advantage on initiative rolls."
  "name": "Battle Readiness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior's attack rolls score a critical hit on a roll of 19 or 20 on\
    \ the d20."
  "name": "Improved Critical"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warriorcan reroll a saving throw that it fails, but it must use the\
    \ new result."
  "name": "Indomitable (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can use a bonus action on its turn to regain hit points equal\
    \ to 1d10 + its level."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can attack twice, instead of once, whenever it takes the attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the warrior can see attacks a target other than the warrior\
    \ that is within 5 feet of the warrior, the warrior can use their reaction to\
    \ impose disadvantage on the attack roll. The warrior must be wielding a shield."
  "name": "Protection (Defender Only)"
"source":
- "SDW"
name: Warrior
image: "[[Warrior.png]]"
---

# Warrior

```statblock
"name": "Warrior"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "6"
"skillsaves":
  "Athletics": !!int "8"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has advantage on initiative rolls."
  "name": "Battle Readiness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior's attack rolls score a critical hit on a roll of 19 or 20 on\
    \ the d20."
  "name": "Improved Critical"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warriorcan reroll a saving throw that it fails, but it must use the\
    \ new result."
  "name": "Indomitable (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can use a bonus action on its turn to regain hit points equal\
    \ to 1d10 + its level."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can attack twice, instead of once, whenever it takes the attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the warrior can see attacks a target other than the warrior\
    \ that is within 5 feet of the warrior, the warrior can use their reaction to\
    \ impose disadvantage on the attack roll. The warrior must be wielding a shield."
  "name": "Protection (Defender Only)"
"source":
- "SDW"
"image": "[[Warrior.png]]"
```
^statblock

*Source: Sleeping Dragon's Wake*
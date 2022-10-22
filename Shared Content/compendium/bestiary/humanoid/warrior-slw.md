---
cssclass: json5e-monster
tags:
- compendium/src/slw
- monster/size/medium
- monster/type/humanoid
aliases: ["Warrior"]
statblock: true
"name": "Warrior"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 14"
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
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can attack twice, instead of once, whenever it takes the Attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior imposes disadvantage on the attack roll of a creature within\
    \ 5 feet of it whose target isn't the warrior. The warrior must be able to see\
    \ the attacker."
  "name": "Protection (Defender Only)"
"source":
- "SLW"
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
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 14"
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
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior can attack twice, instead of once, whenever it takes the Attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior imposes disadvantage on the attack roll of a creature within\
    \ 5 feet of it whose target isn't the warrior. The warrior must be able to see\
    \ the attacker."
  "name": "Protection (Defender Only)"
"source":
- "SLW"
"image": "[[Warrior.png]]"
```
^statblock

*Source: Storm Lord's Wrath*
---
cssclass: json5e-monster
tags:
- compendium/src/esk
- monster/size/medium
- monster/type/humanoid
aliases: ["Warrior"]
statblock: true
"name": "Warrior"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior imposes disadvantage on the attack roll of a creature within\
    \ 5 feet of it whose target isn't the warrior. The warrior must be able to see\
    \ the attacker."
  "name": "Protection (Defender Only)"
"source":
- "ESK"
name: Warrior
image: "[[Warrior.png]]"
---

# Warrior

```statblock
"name": "Warrior"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior has one of the following traits of your choice:\n\n- Attacker.\
    \ The warrior gains a +2 bonus to attack rolls.\n- Defender. The warrior gains\
    \ the Protection reaction below."
  "name": "Martial Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warrior imposes disadvantage on the attack roll of a creature within\
    \ 5 feet of it whose target isn't the warrior. The warrior must be able to see\
    \ the attacker."
  "name": "Protection (Defender Only)"
"source":
- "ESK"
"image": "[[Warrior.png]]"
```
^statblock

*Source: Essentials Kit p. 63*
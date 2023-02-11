---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/large
- monster/type/fiend/devil
aliases: ["Monastery of the Distressed Body Grand Master"]
statblock: true
"name": "Monastery of the Distressed Body Grand Master"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shards of a vorpal sword once broken against the devil replace its claws.\
    \ A successful DC 12 Intelligence ([Arcana](/rules/skills.md#Arcana)) or Wisdom\
    \ ([Perception](/rules/skills.md#Perception)) check identifies them as such. When\
    \ the devil rolls a 20 on an attack roll with a claw, the target is decapitated.\
    \ (At your option, the attack can instead deal an extra 6d8 slashing damage.)\
    \ A target is immune to this effect if it is immune to slashing damage, has legendary\
    \ actions, doesn't have or need a head, or if you decide that the target is too\
    \ large for its head to be cut off by the devil's claws. If removed, the shards\
    \ lose their magical powers."
  "name": "Vorpal Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Local teleportation-field bracelets encircle the devil's arms and tail.\
    \ These devices allow the Grand Master to make its claw and sting attacks remotely,\
    \ though still on the devil's turn and using its actions."
  "name": "Teleportation Bracelets"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the Grand Master's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Grand Master has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Grand Master makes three attacks: two with its claws and one with its\
    \ sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed\
    \ on a DC 14 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Sting"
"source":
- "LLK"
name: Monastery of the Distressed Body Grand Master
image: "[[Monastery of the Distressed Body Grand Master.png]]"
---

# Monastery of the Distressed Body Grand Master

```statblock
"name": "Monastery of the Distressed Body Grand Master"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shards of a vorpal sword once broken against the devil replace its claws.\
    \ A successful DC 12 Intelligence ([Arcana](/rules/skills.md#Arcana)) or Wisdom\
    \ ([Perception](/rules/skills.md#Perception)) check identifies them as such. When\
    \ the devil rolls a 20 on an attack roll with a claw, the target is decapitated.\
    \ (At your option, the attack can instead deal an extra 6d8 slashing damage.)\
    \ A target is immune to this effect if it is immune to slashing damage, has legendary\
    \ actions, doesn't have or need a head, or if you decide that the target is too\
    \ large for its head to be cut off by the devil's claws. If removed, the shards\
    \ lose their magical powers."
  "name": "Vorpal Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Local teleportation-field bracelets encircle the devil's arms and tail.\
    \ These devices allow the Grand Master to make its claw and sting attacks remotely,\
    \ though still on the devil's turn and using its actions."
  "name": "Teleportation Bracelets"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the Grand Master's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Grand Master has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Grand Master makes three attacks: two with its claws and one with its\
    \ sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed\
    \ on a DC 14 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Sting"
"source":
- "LLK"
"image": "[[Monastery of the Distressed Body Grand Master.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 14*
---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Alyxian the Dispossessed"]
statblock: true
"name": "Alyxian the Dispossessed"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "10"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, stunned"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian carries a magic dagger that he uses to make Stoneheart Dagger attacks.\
    \ In the hands of creatures other than Alyxian, the dagger is nonmagical and has\
    \ no special properties."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack, plus 9 (2d8) radiant damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (3d4 + 4) force damage, and if the target is a creature,\
    \ it must succeed on a DC 17 Constitution saving throw or become [petrified](/rules/conditions.md#petrified)\
    \ as the dagger lodges itself in the target's body. While the dagger is lodged\
    \ in the target, magic can't end the [petrified](/rules/conditions.md#petrified)\
    \ condition on it and Alyxian can't make Stoneheart Dagger attacks. A creature\
    \ within reach of the [petrified](/rules/conditions.md#petrified) target can use\
    \ an action to try to remove the dagger, doing so with a successful DC 17 Strength\
    \ check."
  "name": "Stoneheart Dagger"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian's Stoneheart Dagger teleports into his free hand, provided he has\
    \ one."
  "name": "Summon Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian adds 3 to his AC against one attack roll that would hit him. To\
    \ do so, Alyxian must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Spear or Stoneheart Dagger attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian moves up to his speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Warrior's Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A gem-sized shard of ruidium appears at a point Alyxian can see within\
    \ 120 feet of himself and explodes. Each creature, other than Alyxian, in a 10-foot-radius\
    \ sphere centered on that point must succeed on a DC 18 Charisma saving throw\
    \ or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion). If a creature\
    \ isn't suffering from ruidium corruption, it becomes corrupted when it fails\
    \ the saving throw."
  "name": "Ruidium Shard (Costs 2 Actions)"
"source":
- "CRCotN"
name: Alyxian the Dispossessed
image: "[[Alyxian the Dispossessed.png]]"
---

# Alyxian the Dispossessed

```statblock
"name": "Alyxian the Dispossessed"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "10"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, stunned"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian carries a magic dagger that he uses to make Stoneheart Dagger attacks.\
    \ In the hands of creatures other than Alyxian, the dagger is nonmagical and has\
    \ no special properties."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack, plus 9 (2d8) radiant damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (3d4 + 4) force damage, and if the target is a creature,\
    \ it must succeed on a DC 17 Constitution saving throw or become [petrified](/rules/conditions.md#petrified)\
    \ as the dagger lodges itself in the target's body. While the dagger is lodged\
    \ in the target, magic can't end the [petrified](/rules/conditions.md#petrified)\
    \ condition on it and Alyxian can't make Stoneheart Dagger attacks. A creature\
    \ within reach of the [petrified](/rules/conditions.md#petrified) target can use\
    \ an action to try to remove the dagger, doing so with a successful DC 17 Strength\
    \ check."
  "name": "Stoneheart Dagger"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian's Stoneheart Dagger teleports into his free hand, provided he has\
    \ one."
  "name": "Summon Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian adds 3 to his AC against one attack roll that would hit him. To\
    \ do so, Alyxian must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Spear or Stoneheart Dagger attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian moves up to his speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Warrior's Stride"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A gem-sized shard of ruidium appears at a point Alyxian can see within\
    \ 120 feet of himself and explodes. Each creature, other than Alyxian, in a 10-foot-radius\
    \ sphere centered on that point must succeed on a DC 18 Charisma saving throw\
    \ or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion). If a creature\
    \ isn't suffering from ruidium corruption, it becomes corrupted when it fails\
    \ the saving throw."
  "name": "Ruidium Shard (Costs 2 Actions)"
"source":
- "CRCotN"
"image": "[[Alyxian the Dispossessed.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 180*
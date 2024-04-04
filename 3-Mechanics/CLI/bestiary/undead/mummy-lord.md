---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Mummy Lord"]
---
# [Mummy Lord](3-Mechanics\CLI\bestiary\undead/mummy-lord.md)
*Source: Monster Manual p. 229. Available in the SRD.*  

```statblock
"name": "Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- "desc": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, dice: d20+9 (+9) to hit with spell attacks). The\
    \ mummy lord has the following cleric spells prepared:\n\nCantrips (at will):\
    \ [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command.md), [guiding\
    \ bolt](/3-Mechanics/CLI/spells/guiding-bolt.md), [shield of faith](/3-Mechanics/CLI/spells/shield-of-faith.md)\n\
    \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person.md),\
    \ [silence](/3-Mechanics/CLI/spells/silence.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)\n\
    \n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md)\n\n4th level (3 slots):\
    \ [divination](/3-Mechanics/CLI/spells/divination.md), [guardian of faith](/3-Mechanics/CLI/spells/guardian-of-faith.md)\n\
    \n5th level (2 slots): [contagion](/3-Mechanics/CLI/spells/contagion.md),\
    \ [insect plague](/3-Mechanics/CLI/spells/insect-plague.md)\n\n6th level (1\
    \ slots): [harm](/3-Mechanics/CLI/spells/harm.md)"
  "name": "spells"
- "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
"actions":
- "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:3d6 + 4|text(14) (3d6 + 4) bludgeoning damage plus dice:6d6|text(21)\
    \ (6d6) necrotic damage. If the target is a creature, it must succeed on a DC\
    \ 16 Constitution saving throw or be cursed with mummy rot. The cursed target\
    \ can't regain hit points, and its hit point maximum decreases by dice:3d6|text(10)\
    \ (3d6) for every 24 hours that elapse. If the curse reduces the target's hit\
    \ point maximum to 0, the target dies, and its body turns to dust. The curse lasts\
    \ until removed by the [remove curse](/3-Mechanics/CLI/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- "desc": "The mummy lord makes one attack with its rotting fist or uses its Dreadful\
    \ Glare."
  "name": "Attack"
- "desc": "Blinding dust and sand swirls magically around the mummy lord. Each creature\
    \ within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving\
    \ throw or be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) until the\
    \ end of the creature's next turn."
  "name": "Blinding Dust"
- "desc": "The mummy lord utters a blasphemous word. Each non-undead creature within\
    \ 10 feet of the mummy lord that can hear the magical utterance must succeed on\
    \ a DC 16 Constitution saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until the end of the mummy lord's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- "desc": "The mummy lord magically unleashes negative energy. Creatures within 60\
    \ feet of the mummy lord, including ones behind barriers and around corners, can't\
    \ regain hit points until the end of the mummy lord's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- "desc": "The mummy lord magically transforms into a whirlwind of sand, moves up\
    \ to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy\
    \ lord is immune to all damage, and it can't be [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
    \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
    \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), or [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned).\
    \ Equipment worn or carried by the mummy lord remain in its possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
- "SKT"
- "TCE"
- "CM"
- "AATM"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/undead/token/mummy-lord.webp"
```
^statblock

## Environment

desert
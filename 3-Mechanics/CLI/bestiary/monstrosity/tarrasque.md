---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/30
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity/titan
statblock: inline
aliases: ["Tarrasque"]
---
# [Tarrasque](3-Mechanics\CLI\bestiary\monstrosity/tarrasque.md)
*Source: Monster Manual p. 286. Available in the SRD.*  

```statblock
"name": "Tarrasque"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"ac_class": "natural armor"
"hp": !!int "676"
"hit_dice": "33d20 + 330"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "11"
"speed": "40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The tarrasque has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Any time the tarrasque is targeted by a [magic missile](/3-Mechanics/CLI/spells/magic-missile.md)\
    \ spell, a line spell, or a spell that requires a ranged attack roll, roll a dice:\
    \ d6|avg|noform (d6). On a 1 to 5, the tarrasque is unaffected. On a 6, the\
    \ tarrasque is unaffected, and the effect is reflected back at the caster as though\
    \ it originated from the tarrasque, turning the caster into the target."
  "name": "Reflective Carapace"
- "desc": "The tarrasque deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The tarrasque can use its Frightful Presence. It then makes five attacks:\
    \ one with its bite, two with its claws, one with its horns, and one with its\
    \ tail. It can use its Swallow instead of its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+19 (+19) to hit, reach 10 ft., one\
    \ target. Hit: dice:4d12 + 10|text(36) (4d12 + 10) piercing damage. If the\
    \ target is a creature, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ and the tarrasque can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+19 (+19) to hit, reach 15 ft., one\
    \ target. Hit: dice:4d8 + 10|text(28) (4d8 + 10) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+19 (+19) to hit, reach 10 ft., one\
    \ target. Hit: dice:4d10 + 10|text(32) (4d10 + 10) piercing damage."
  "name": "Horns"
- "desc": "Melee Weapon Attack: dice: d20+19 (+19) to hit, reach 20 ft., one\
    \ target. Hit: dice:4d6 + 10|text(24) (4d6 + 10) bludgeoning damage. If\
    \ the target is a creature, it must succeed on a DC 20 Strength saving throw or\
    \ be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Tail"
- "desc": "Each creature of the tarrasque's choice within 120 feet of it and aware\
    \ of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the tarrasque is within line of sight, ending the\
    \ effect on itself on a success. If a creature's saving throw is successful or\
    \ the effect ends for it, the creature is immune to the tarrasque's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The tarrasque makes one bite attack against a Large or smaller creature\
    \ it is grappling. If the attack hits, the target takes the bite's damage, the\
    \ target is swallowed, and the grapple ends. While swallowed, the creature is\
    \ [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the tarrasque,\
    \ and it takes dice:16d6|text(56) (16d6) acid damage at the start of each\
    \ of the tarrasque's turns.\n\nIf the tarrasque takes 60 damage or more on a single\
    \ turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution\
    \ saving throw at the end of that turn or regurgitate all swallowed creatures,\
    \ which fall [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in a space within\
    \ 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no\
    \ longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 30 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- "desc": "The tarrasque makes one claw attack or tail attack."
  "name": "Attack"
- "desc": "The tarrasque moves up to half its speed."
  "name": "Move"
- "desc": "The tarrasque makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "MM"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "LoX"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/tarrasque.webp"
```
^statblock

## Environment

urban
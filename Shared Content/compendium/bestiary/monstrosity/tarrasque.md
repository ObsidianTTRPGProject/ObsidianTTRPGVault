---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/gargantuan
- monster/type/monstrosity/titan
- monster/environment/urban
aliases: ["Tarrasque"]
statblock: true
"name": "Tarrasque"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"hp": !!int "676"
"hit_dice": "33d20 + 330"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "11"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any time the tarrasque is targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, a line spell, or a spell that requires a ranged attack roll, roll a d6.\
    \ On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected,\
    \ and the effect is reflected back at the caster as though it originated from\
    \ the tarrasque, turning the caster into the target."
  "name": "Reflective Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque can use its Frightful Presence. It then makes five attacks:\
    \ one with its bite, two with its claws, one with its horns, and one with its\
    \ tail. It can use its Swallow instead of its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the tarrasque can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10\
    \ + 10) piercing damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 20 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the tarrasque's choice within 120 feet of it and aware\
    \ of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the tarrasque is within line of sight, ending the\
    \ effect on itself on a success. If a creature's saving throw is successful or\
    \ the effect ends for it, the creature is immune to the tarrasque's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one bite attack against a Large or smaller creature\
    \ it is grappling. If the attack hits, the target takes the bite's damage, the\
    \ target is swallowed, and the grapple ends. While swallowed, the creature is\
    \ [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the tarrasque,\
    \ and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\n\
    \nIf the tarrasque takes 60 damage or more on a single turn from a creature inside\
    \ it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 30 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one claw attack or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "MM"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "LoX"
name: Tarrasque
image: "[[Tarrasque.png]]"
---

# Tarrasque

```statblock
"name": "Tarrasque"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "25"
"hp": !!int "676"
"hit_dice": "33d20 + 330"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "11"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"damage_immunities": "fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any time the tarrasque is targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, a line spell, or a spell that requires a ranged attack roll, roll a d6.\
    \ On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected,\
    \ and the effect is reflected back at the caster as though it originated from\
    \ the tarrasque, turning the caster into the target."
  "name": "Reflective Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque can use its Frightful Presence. It then makes five attacks:\
    \ one with its bite, two with its claws, one with its horns, and one with its\
    \ tail. It can use its Swallow instead of its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the tarrasque can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10\
    \ + 10) piercing damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 20 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the tarrasque's choice within 120 feet of it and aware\
    \ of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the tarrasque is within line of sight, ending the\
    \ effect on itself on a success. If a creature's saving throw is successful or\
    \ the effect ends for it, the creature is immune to the tarrasque's Frightful\
    \ Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one bite attack against a Large or smaller creature\
    \ it is grappling. If the attack hits, the target takes the bite's damage, the\
    \ target is swallowed, and the grapple ends. While swallowed, the creature is\
    \ [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside the tarrasque,\
    \ and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\n\
    \nIf the tarrasque takes 60 damage or more on a single turn from a creature inside\
    \ it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed\
    \ creature is no longer [restrained](/rules/conditions.md#restrained) by it and\
    \ can escape from the corpse by using 30 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one claw attack or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tarrasque makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "MM"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "LoX"
"image": "[[Tarrasque.png]]"
```
^statblock

*Source: Monster Manual p. 286, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Light of Xaryxis*

## Description

The legendary tarrasque is possibly the most dreaded monster of the Material Plane. It is widely believed that only one of these creatures exists, though no one can predict where and when it will strike.

A scaly biped, the tarrasque is fifty feet tall and seventy feet long, weighing hundreds of tons. It carries itself like a bird of prey, leaning forward and using its powerful lashing tail for balance. Its cavernous maw yawns wide enough to swallow all but the largest creatures, and so great is its hunger that it can devour the populations of whole towns.

**Legendary Destruction.** The destructive potential of the tarrasque is so vast that some cultures incorporate the monster into religious doctrine, weaving its sporadic appearance into stories of divine judgment and wrath.

Legends tell how the tarrasque slumbers in its secret lair beneath the earth, remaining in a dormant state for decades or centuries. When it awakens in answer to some inscrutable cosmic call, it rises from the depths to obliterate everything in its path.

## Environment

urban
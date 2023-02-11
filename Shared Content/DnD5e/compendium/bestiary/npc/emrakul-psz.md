---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/gargantuan
- monster/type/monstrosity/titan
- monster/environment/urban
aliases: ["Emrakul"]
statblock: true
"name": "Emrakul"
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
  \ attacks; psychic"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Emrakul fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any time Emrakul is targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, a line spell, or a spell that requires a ranged attack roll, roll a d6.\
    \ On a 1 to 5, Emrakul is unaffected. On a 6, Emrakul is unaffected, and the effect\
    \ is reflected back at the caster as though it originated from Emrakul, turning\
    \ the caster into the target."
  "name": "Reflective Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul can use its Frightful Presence. It then makes five attacks: one\
    \ with its bite, two with its claws, one with its horns, and one with its tail.\
    \ It can use its Swallow instead of its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Emrakul can't bite another target."
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
  "desc": "Each creature of Emrakul's choice within 120 feet of it and aware of it\
    \ must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if Emrakul is within line of sight, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to Emrakul's Frightful Presence for the\
    \ next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one bite attack against a Large or smaller creature it is\
    \ grappling. If the attack hits, the target takes the bite's damage, the target\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Emrakul, and it takes 56 (16d6) acid damage\
    \ at the start of each of Emrakul's turns.\n\nIf Emrakul takes 60 damage or more\
    \ on a single turn from a creature inside it, Emrakul must succeed on a DC 20\
    \ Constitution saving throw at the end of that turn or regurgitate all swallowed\
    \ creatures, which fall [prone](/rules/conditions.md#prone) in a space within\
    \ 10 feet of Emrakul. If Emrakul dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 30 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one claw attack or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "PSZ"
name: Emrakul
image: "[[Emrakul.png]]"
---

# Emrakul

```statblock
"name": "Emrakul"
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
  \ attacks; psychic"
"condition_immunities": "charmed, frightened, paralyzed, poisoned"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Emrakul fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any time Emrakul is targeted by a [magic missile](/compendium/spells/magic-missile.md)\
    \ spell, a line spell, or a spell that requires a ranged attack roll, roll a d6.\
    \ On a 1 to 5, Emrakul is unaffected. On a 6, Emrakul is unaffected, and the effect\
    \ is reflected back at the caster as though it originated from Emrakul, turning\
    \ the caster into the target."
  "name": "Reflective Carapace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul can use its Frightful Presence. It then makes five attacks: one\
    \ with its bite, two with its claws, one with its horns, and one with its tail.\
    \ It can use its Swallow instead of its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12\
    \ + 10) piercing damage. If the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Emrakul can't bite another target."
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
  "desc": "Each creature of Emrakul's choice within 120 feet of it and aware of it\
    \ must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if Emrakul is within line of sight, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to Emrakul's Frightful Presence for the\
    \ next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one bite attack against a Large or smaller creature it is\
    \ grappling. If the attack hits, the target takes the bite's damage, the target\
    \ is swallowed, and the grapple ends. While swallowed, the creature is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside Emrakul, and it takes 56 (16d6) acid damage\
    \ at the start of each of Emrakul's turns.\n\nIf Emrakul takes 60 damage or more\
    \ on a single turn from a creature inside it, Emrakul must succeed on a DC 20\
    \ Constitution saving throw at the end of that turn or regurgitate all swallowed\
    \ creatures, which fall [prone](/rules/conditions.md#prone) in a space within\
    \ 10 feet of Emrakul. If Emrakul dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 30 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one claw attack or tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emrakul makes one bite attack or uses its Swallow."
  "name": "Chomp (Costs 2 Actions)"
"source":
- "PSZ"
"image": "[[Emrakul.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 38*

## Environment

urban
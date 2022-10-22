---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/huge
- monster/type/construct
- monster/environment/underdark
aliases: ["Clockwork Behir"]
statblock: true
"name": "Clockwork Behir"
"size": "Huge"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the behir\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the behir, and it takes 21 (6d6) acid damage\
    \ at the start of each of the behir's turns. A behir can have only one creature\
    \ swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn\
    \ from the swallowed creature, the behir must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the behir.\
    \ If the behir dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "OoW"
name: Clockwork Behir
image: "[[Clockwork Behir.png]]"
---

# Clockwork Behir

```statblock
"name": "Clockwork Behir"
"size": "Huge"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature.\
    \ Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 16) if the behir\
    \ isn't already constricting a creature, and the target is [restrained](/rules/conditions.md#restrained)\
    \ until this grapple ends."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/rules/conditions.md#blinded)\
    \ and [restrained](/rules/conditions.md#restrained), it has total cover against\
    \ attacks and other effects outside the behir, and it takes 21 (6d6) acid damage\
    \ at the start of each of the behir's turns. A behir can have only one creature\
    \ swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn\
    \ from the swallowed creature, the behir must succeed on a DC 14 Constitution\
    \ saving throw at the end of that turn or regurgitate the creature, which falls\
    \ [prone](/rules/conditions.md#prone) in a space within 10 feet of the behir.\
    \ If the behir dies, a swallowed creature is no longer [restrained](/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Swallow"
"source":
- "OoW"
"image": "[[Clockwork Behir.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 173*

## Environment

underdark
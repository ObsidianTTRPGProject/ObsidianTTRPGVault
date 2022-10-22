---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/construct
aliases: ["Alyxian the Hunter"]
statblock: true
"name": "Alyxian the Hunter"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft., swim 30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem can conjure a magic dart made of ruidium and hurl it at another\
    \ creature it can see within 120 feet of itself. The dart strikes the target unerringly\
    \ and vanishes on contact. The target must make a DC 17 Charisma saving throw.\
    \ On a failed saving throw, the target takes 24 (7d6) psychic damage and gains\
    \ 1 level of [exhaustion](/rules/conditions.md#exhaustion). In addition, if the\
    \ target is not already suffering from ruidium corruption, it becomes corrupted\
    \ when it fails the saving throw. On a successful saving throw, the target takes\
    \ half as much damage and suffers no other effects."
  "name": "Ruidium Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "CRCotN"
name: Alyxian the Hunter
image: "[[Alyxian the Hunter.png]]"
---

# Alyxian the Hunter

```statblock
"name": "Alyxian the Hunter"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft., swim 30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem can conjure a magic dart made of ruidium and hurl it at another\
    \ creature it can see within 120 feet of itself. The dart strikes the target unerringly\
    \ and vanishes on contact. The target must make a DC 17 Charisma saving throw.\
    \ On a failed saving throw, the target takes 24 (7d6) psychic damage and gains\
    \ 1 level of [exhaustion](/rules/conditions.md#exhaustion). In addition, if the\
    \ target is not already suffering from ruidium corruption, it becomes corrupted\
    \ when it fails the saving throw. On a successful saving throw, the target takes\
    \ half as much damage and suffers no other effects."
  "name": "Ruidium Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "CRCotN"
"image": "[[Alyxian the Hunter.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 160*

## Description

This ruidium golem resembles Alyxian the Apotheon. It remains as rigid as a statue until the characters attack it or until Theo vanishes from the Netherdeep.
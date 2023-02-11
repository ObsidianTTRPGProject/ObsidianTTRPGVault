---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/large
- monster/type/construct
aliases: ["Minotaur Living Crystal Statue"]
statblock: true
"name": "Minotaur Living Crystal Statue"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "9"
- !!int "16"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "force"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two attacks: one with its greataxe and one gore attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Gore"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a creature hitting the statue with a melee weapon attack,\
    \ the statue deals 11 (2d10) piercing damage to the attacker."
  "name": "Flying Shards"
"source":
- "GoS"
name: Minotaur Living Crystal Statue
image: "[[Minotaur Living Crystal Statue.png]]"
---

# Minotaur Living Crystal Statue

```statblock
"name": "Minotaur Living Crystal Statue"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "9"
- !!int "16"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "force"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes two attacks: one with its greataxe and one gore attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Gore"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to a creature hitting the statue with a melee weapon attack,\
    \ the statue deals 11 (2d10) piercing damage to the attacker."
  "name": "Flying Shards"
"source":
- "GoS"
"image": "[[Minotaur Living Crystal Statue.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 245*

## Description

Given life through powerful magic, a large, crudely carved crystal minotaur guards the tunnels in Isle of the Abbey.
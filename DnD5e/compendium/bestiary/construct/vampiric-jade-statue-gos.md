---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/large
- monster/type/construct
aliases: ["Vampiric Jade Statue"]
statblock: true
"name": "Vampiric Jade Statue"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "force"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the statue fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, that creature becomes cursed\
    \ by the statue. The curse lasts for 10 minutes. While the creature is cursed,\
    \ the statue has advantage on all attacks against it."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claws"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes one bite attack."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "All creatures currently cursed by the statue and within 20 feet of it take\
    \ 5 necrotic damage."
  "name": "Blood Reaper"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue moves up to its speed without provoking opportunity attacks."
  "name": "Move"
"source":
- "GoS"
name: Vampiric Jade Statue
image: "[[Vampiric Jade Statue.png]]"
---

# Vampiric Jade Statue

```statblock
"name": "Vampiric Jade Statue"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_vulnerabilities": "force"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the statue fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, that creature becomes cursed\
    \ by the statue. The curse lasts for 10 minutes. While the creature is cursed,\
    \ the statue has advantage on all attacks against it."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claws"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue makes one bite attack."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "All creatures currently cursed by the statue and within 20 feet of it take\
    \ 5 necrotic damage."
  "name": "Blood Reaper"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The statue moves up to its speed without provoking opportunity attacks."
  "name": "Move"
"source":
- "GoS"
"image": "[[Vampiric Jade Statue.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 256*

## Description

A large, exquisitely carved jade statue of a vampire guards the tunnels in Isle of the Abbey, having been brought to life by dark magic. Its stone fangs draw blood that it then uses to work a curse on its victims.
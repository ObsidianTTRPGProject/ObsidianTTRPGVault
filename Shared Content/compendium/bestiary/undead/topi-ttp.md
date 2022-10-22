---
cssclass: json5e-monster
tags:
- compendium/src/ttp
- monster/size/small
- monster/type/undead
aliases: ["Topi"]
statblock: true
"name": "Topi"
"size": "Small"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The topi has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the topi to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the topi drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage plus 2 (1d4) poison damage, and the target must succeed\
    \ on a DC 11 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of the target's next turn."
  "name": "Venomous Claws"
"source":
- "TTP"
name: Topi
image: "[[Topi.png]]"
---

# Topi

```statblock
"name": "Topi"
"size": "Small"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The topi has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the topi to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the topi drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage plus 2 (1d4) poison damage, and the target must succeed\
    \ on a DC 11 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of the target's next turn."
  "name": "Venomous Claws"
"source":
- "TTP"
"image": "[[Topi.png]]"
```
^statblock

*Source: The Tortle Package p. 22*

## Description

Topis are similar to zombies. Before a topi is animated, its corpse is shrunk until it stands only 2 feet tall, and its heart is cut out and replaced with a leather bag that contains a live poisonous snake. The snake requires neither air nor sustenance, and it magically renders the topi's claws venomous. When a topi dies, the snake inside it dies too. The process of creating a topi is known only to a handful of evil priests and necromancers.

Topis are more difficult to turn than ordinary zombies, and their spongy bodies make them resistant to bludgeoning.

**Undead Traits.** A topi doesn't require air, food, drink, or sleep.
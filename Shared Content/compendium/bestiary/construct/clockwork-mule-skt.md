---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/construct
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
aliases: ["Clockwork Mule"]
statblock: true
"name": "Clockwork Mule"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Repairing 1 hit point of damage to the clockwork mule takes 1 hour and\
    \ requires replacement parts, which can be bought in a large city for 20 gp. If\
    \ the mule drops to 0 hit points, it is destroyed and unrepairable."
  "name": "Maintainable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mule is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mule has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "SKT"
name: Clockwork Mule
image: "[[Clockwork Mule.png]]"
---

# Clockwork Mule

```statblock
"name": "Clockwork Mule"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Repairing 1 hit point of damage to the clockwork mule takes 1 hour and\
    \ requires replacement parts, which can be bought in a large city for 20 gp. If\
    \ the mule drops to 0 hit points, it is destroyed and unrepairable."
  "name": "Maintainable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mule is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mule has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "SKT"
"image": "[[Clockwork Mule.png]]"
```
^statblock

*Source: Storm King's Thunder p. 162*

## Environment

hill, urban, desert
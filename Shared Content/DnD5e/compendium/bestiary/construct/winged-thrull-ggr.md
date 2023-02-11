---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/small
- monster/type/construct
aliases: ["Winged Thrull"]
statblock: true
"name": "Winged Thrull"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "9"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "9"
- !!int "8"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Common but can't speak"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d6 + 2) bludgeoning damage."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 5 feet of the thrull is hit by an attack, the thrull\
    \ swaps places with that creature and is hit instead."
  "name": "Self-Sacrifice"
"source":
- "GGR"
name: Winged Thrull
image: "[[Winged Thrull.png]]"
---

# Winged Thrull

```statblock
"name": "Winged Thrull"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "9"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "9"
- !!int "8"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Common but can't speak"
"cr": "1/2"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d6 + 2) bludgeoning damage."
  "name": "Rock"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 5 feet of the thrull is hit by an attack, the thrull\
    \ swaps places with that creature and is hit instead."
  "name": "Self-Sacrifice"
"source":
- "GGR"
"image": "[[Winged Thrull.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 221*

## Description

Winged thrulls are at once the most intelligent of Orzhov thrulls (which isn't saying much), as well as the smallest, most unobtrusive, and most mobile. They act as messengers and spies for their Orzhov masters and tend to mimic the mannerisms and movements of the oligarchs they serve.

**Thrulls.** When the Orzhov Syndicate rips a soul from its body to create a spirit, the cast-off remains go to the fleshmages, who use their necromantic magic to liquefy the corpse and transform it into something useful. These creations become thrulls, obedient slaves that serve in a variety of menial roles: laborers, messengers, beasts of burden, and even fashion accessories for the elite. Whatever tasks they perform, they wear faceplates forged from devalued coinage to conceal their ghastly features.

**Construct Nature.** A thrull doesn't require air, food, drink, or sleep.
---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/small
- monster/type/construct
aliases: ["Servitor Thrull"]
statblock: true
"name": "Servitor Thrull"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "6"
- !!int "6"
- !!int "3"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common but can't speak"
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 5 feet of the thrull is hit by an attack, the thrull\
    \ swaps places with that creature and is hit instead."
  "name": "Self-Sacrifice"
"source":
- "GGR"
name: Servitor Thrull
image: "[[Servitor Thrull.png]]"
---

# Servitor Thrull

```statblock
"name": "Servitor Thrull"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "6"
- !!int "6"
- !!int "3"
"speed": "walk 30 ft."
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common but can't speak"
"cr": "1/4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 5 feet of the thrull is hit by an attack, the thrull\
    \ swaps places with that creature and is hit instead."
  "name": "Self-Sacrifice"
"source":
- "GGR"
"image": "[[Servitor Thrull.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 221*

## Description

The most wretched of thrulls are the servitors, small and slender, that serve as playthings for their Orzhov masters. They run trivial errands, transport small items, caper and dance, and keep their masters' expensive robes from trailing on the dirty street. They are utterly loyal, lacking any concept of thinking for themselves.

**Thrulls.** When the Orzhov Syndicate rips a soul from its body to create a spirit, the cast-off remains go to the fleshmages, who use their necromantic magic to liquefy the corpse and transform it into something useful. These creations become thrulls, obedient slaves that serve in a variety of menial roles: laborers, messengers, beasts of burden, and even fashion accessories for the elite. Whatever tasks they perform, they wear faceplates forged from devalued coinage to conceal their ghastly features.

**Construct Nature.** A thrull doesn't require air, food, drink, or sleep.
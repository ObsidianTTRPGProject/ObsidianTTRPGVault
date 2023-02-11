---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/large
- monster/type/construct
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Mechachimera"]
statblock: true
"name": "Mechachimera"
"size": "Large"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "11"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "8"
"damage_immunities": "poison, psychic"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
    \ and one with its claws. When its fire breath is available, it can use the breath\
    \ in place of its bite or horns."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "OoW"
name: Mechachimera
image: "[[Mechachimera.png]]"
---

# Mechachimera

```statblock
"name": "Mechachimera"
"size": "Large"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "11"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "8"
"damage_immunities": "poison, psychic"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
    \ and one with its claws. When its fire breath is available, it can use the breath\
    \ in place of its bite or horns."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "OoW"
"image": "[[Mechachimera.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 134*

## Environment

underdark, mountain, grassland, hill
---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Animated Tile Chimera"]
statblock: true
"name": "Animated Tile Chimera"
"size": "Large"
"type": "monstrosity"
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
"damage_resistances": "piercing"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If destroyed, the tile creature regains all its hit points and becomes\
    \ active again in 24 hours unless at least half its tiles are collected and kept\
    \ separate from the rest of the creature's tiles."
  "name": "Rejuvenation"
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
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When targeted by a melee attack, the tile creature can take a reaction\
    \ to turn its narrowest aspect toward the attacker. The attacker has disadvantage\
    \ on the attack roll."
  "name": "Narrow Dodge"
"source":
- "RoT"
name: Animated Tile Chimera
image: "[[Animated Tile Chimera.png]]"
---

# Animated Tile Chimera

```statblock
"name": "Animated Tile Chimera"
"size": "Large"
"type": "monstrosity"
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
"damage_resistances": "piercing"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If destroyed, the tile creature regains all its hit points and becomes\
    \ active again in 24 hours unless at least half its tiles are collected and kept\
    \ separate from the rest of the creature's tiles."
  "name": "Rejuvenation"
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
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When targeted by a melee attack, the tile creature can take a reaction\
    \ to turn its narrowest aspect toward the attacker. The attacker has disadvantage\
    \ on the attack roll."
  "name": "Narrow Dodge"
"source":
- "RoT"
"image": "[[Animated Tile Chimera.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 42*

## Environment

underdark, mountain, grassland, hill
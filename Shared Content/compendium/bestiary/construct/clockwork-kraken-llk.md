---
cssclass: json5e-monster
tags:
- compendium/src/llk
- monster/size/large
- monster/type/construct
aliases: ["Clockwork Kraken"]
statblock: true
"name": "Clockwork Kraken"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken has eight tentacles, each of which is treated as a\
    \ Medium creature, moves independently on the construct's turn, and has a flying\
    \ speed of 40 feet. The clockwork kraken's senses operate through its tentacles\
    \ as well as its main body. Each tentacle can be attacked independently, with\
    \ damage dealt to tentacles applied to the clockwork kraken's hit point total.\
    \ A tentacle is destroyed if it takes more than 20 damage.\n\nReducing the construct\
    \ to three or fewer tentacles reduces its attacks accordingly. A clockwork kraken\
    \ can regrow any destroyed tentacles at the end of a long rest."
  "name": "Independent Tentacles"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken makes four tentacle slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage."
  "name": "Tentacle Slam"
"source":
- "LLK"
name: Clockwork Kraken
image: "[[Clockwork Kraken.png]]"
---

# Clockwork Kraken

```statblock
"name": "Clockwork Kraken"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken has eight tentacles, each of which is treated as a\
    \ Medium creature, moves independently on the construct's turn, and has a flying\
    \ speed of 40 feet. The clockwork kraken's senses operate through its tentacles\
    \ as well as its main body. Each tentacle can be attacked independently, with\
    \ damage dealt to tentacles applied to the clockwork kraken's hit point total.\
    \ A tentacle is destroyed if it takes more than 20 damage.\n\nReducing the construct\
    \ to three or fewer tentacles reduces its attacks accordingly. A clockwork kraken\
    \ can regrow any destroyed tentacles at the end of a long rest."
  "name": "Independent Tentacles"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The clockwork kraken makes four tentacle slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage."
  "name": "Tentacle Slam"
"source":
- "LLK"
"image": "[[Clockwork Kraken.png]]"
```
^statblock

*Source: Lost Laboratory of Kwalish p. 38*
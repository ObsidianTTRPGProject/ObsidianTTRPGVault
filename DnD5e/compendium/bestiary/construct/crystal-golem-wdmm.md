---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/construct
aliases: ["Crystal Golem"]
statblock: true
"name": "Crystal Golem"
"size": "Large"
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
"speed": "walk 30 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem magically sheds bright light in a 30-foot radius and dim light\
    \ for an additional 30 feet. This light goes out when the golem is destroyed."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the illuminated golem\
    \ and can see the golem must succeed on a DC 17 Wisdom saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the start of the creature's next turn.\n\nA creature can avert its eyes\
    \ to avoid the saving throw at the start of its turn. If the creature does so,\
    \ it can't see the golem until the start of its next turn, when it can avert its\
    \ eyes again. If the creature looks at the golem in the meantime, it must immediately\
    \ make the save."
  "name": "Light Intensity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
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
- "WDMM"
name: Crystal Golem
image: "[[Crystal Golem.png]]"
---

# Crystal Golem

```statblock
"name": "Crystal Golem"
"size": "Large"
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
"speed": "walk 30 ft."
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem magically sheds bright light in a 30-foot radius and dim light\
    \ for an additional 30 feet. This light goes out when the golem is destroyed."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that starts its turn within 10 feet of the illuminated golem\
    \ and can see the golem must succeed on a DC 17 Wisdom saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ until the start of the creature's next turn.\n\nA creature can avert its eyes\
    \ to avoid the saving throw at the start of its turn. If the creature does so,\
    \ it can't see the golem until the start of its next turn, when it can avert its\
    \ eyes again. If the creature looks at the golem in the meantime, it must immediately\
    \ make the save."
  "name": "Light Intensity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
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
- "WDMM"
"image": "[[Crystal Golem.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 210*

## Description

Crystal golems found throughout the Crystal Labyrinth look like 10-foot-tall githyanki warriors. Like other golems, they are nearly impervious to spells and ordinary weapons.
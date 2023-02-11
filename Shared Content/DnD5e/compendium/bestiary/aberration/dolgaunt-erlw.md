---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/aberration
aliases: ["Dolgaunt"]
statblock: true
"name": "Dolgaunt"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
  "Acrobatics": !!int "6"
"condition_immunities": "blinded"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": "Deep Speech, Goblin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dolgaunt is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the dolgaunt instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails. It can't\
    \ use this trait if it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dolgaunt is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dolgaunt makes two tentacle attacks and two unarmed strikes. Up to\
    \ two tentacle attacks can be replaced by Vitality Drain."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12) if it is a Large or smaller creature. Until this grapple ends,\
    \ the dolgaunt can't use the same tentacle on another target. The dolgaunt has\
    \ two tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) bludgeoning damage."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by a tentacle of\
    \ the dolgaunt must make a DC 11 Constitution saving throw. On a failed save,\
    \ the target takes 9 (2d8) necrotic damage, and the dolgaunt regains a number\
    \ of hit points equal to half the necrotic damage taken."
  "name": "Vitality Drain"
"source":
- "ERLW"
name: Dolgaunt
image: "[[Dolgaunt.png]]"
---

# Dolgaunt

```statblock
"name": "Dolgaunt"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
  "Acrobatics": !!int "6"
"condition_immunities": "blinded"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": "Deep Speech, Goblin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dolgaunt is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the dolgaunt instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails. It can't\
    \ use this trait if it's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the dolgaunt is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dolgaunt makes two tentacle attacks and two unarmed strikes. Up to\
    \ two tentacle attacks can be replaced by Vitality Drain."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12) if it is a Large or smaller creature. Until this grapple ends,\
    \ the dolgaunt can't use the same tentacle on another target. The dolgaunt has\
    \ two tentacles."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
    \ + 4) bludgeoning damage."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by a tentacle of\
    \ the dolgaunt must make a DC 11 Constitution saving throw. On a failed save,\
    \ the target takes 9 (2d8) necrotic damage, and the dolgaunt regains a number\
    \ of hit points equal to half the necrotic damage taken."
  "name": "Vitality Drain"
"source":
- "ERLW"
"image": "[[Dolgaunt.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 290*

## Description

Dolgaunts are emaciated hobgoblins with disease-hued flesh. Their eye sockets gape open and empty above a mouth with a wormlike tongue. Writhing cilia cover their bodies, with longer tendrils around their heads and two wiry tentacles protruding from their bare shoulders. A dolgaunt is blind but can perceive its surroundings through the sensitive cilia that cover its skin. It can also absorb life through its tentacles, allowing it to drain the vitality out of any creature it touches.

**Warped by Chaos.** When the daelkyr emerged from Xoriat to conquer Khorvaire, they captured and transformed that land's indigenous creatures to create armies of hideous warriors. Dyrrn the Corruptor shaped dolgaunts from hobgoblin stock, turning them into intelligent, cold, and efficient killers.

When the daelkyr were defeated, the dolgaunts descended into the depths of Khyber with their masters. There, they study in cavernous monasteries, forging their bodies into living weapons dedicated to the missions given them by those masters. Dolgaunts are often found commanding squads of dolgrims, and can also be found working with the Cults of the Dragon Below—particularly those devoted to Dyrrn the Corruptor.
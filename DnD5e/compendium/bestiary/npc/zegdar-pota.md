---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Zegdar"]
statblock: true
"name": "Zegdar"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "117"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "9"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zegdar moves at least 10 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing\
    \ damage. If the target is a creature, it must succeed on a DC 14 Strength saving\
    \ throw or be pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zegdar can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Zegdar can gain advantage on all melee weapon\
    \ attack rolls it makes during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zegdar exhales a cloud of burning embers in a 15-foot cone. Each creature\
    \ in that area must succeed on a DC 14 Dexterity saving throw, taking 21 (6d6)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Burning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage."
  "name": "Gore"
"source":
- "PotA"
name: Zegdar
image: "[[Zegdar.png]]"
---

# Zegdar

```statblock
"name": "Zegdar"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "117"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "9"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zegdar moves at least 10 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing\
    \ damage. If the target is a creature, it must succeed on a DC 14 Strength saving\
    \ throw or be pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zegdar can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, Zegdar can gain advantage on all melee weapon\
    \ attack rolls it makes during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zegdar exhales a cloud of burning embers in a 15-foot cone. Each creature\
    \ in that area must succeed on a DC 14 Dexterity saving throw, taking 21 (6d6)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Burning Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage."
  "name": "Gore"
"source":
- "PotA"
"image": "[[Zegdar.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 120*

## Environment

underdark
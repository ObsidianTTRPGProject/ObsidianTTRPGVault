---
cssclass: json5e-monster
tags:
- compendium/src/oow
- monster/size/medium
- monster/type/humanoid/goblinoid
- monster/environment/underdark
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/desert
aliases: ["Grunka"]
statblock: true
"name": "Grunka"
"size": "Medium"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Goblin"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, Grunka can deal an extra 7 (2d6) damage to a creature it\
    \ hits with a weapon attack if that creature is within 5 feet of an ally of Grunka\
    \ that isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Martial Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hobgoblin sprays acid in a 10-foot cone. Each creature in the area\
    \ must make a DC 10 Dexterity saving throw, taking 7 (2d6) acid damage on a failed\
    \ save, or half as much damage on a successful one.\n\nThe spray gun has a tank\
    \ that can be filled with ten standard vials of acid mixed with water, allowing\
    \ it to be used five times."
  "name": "Acid Spray Gun (Recharge 5-6)"
"source":
- "OoW"
name: Grunka
image: "[[Grunka.png]]"
---

# Grunka

```statblock
"name": "Grunka"
"size": "Medium"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Goblin"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, Grunka can deal an extra 7 (2d6) damage to a creature it\
    \ hits with a weapon attack if that creature is within 5 feet of an ally of Grunka\
    \ that isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Martial Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hobgoblin sprays acid in a 10-foot cone. Each creature in the area\
    \ must make a DC 10 Dexterity saving throw, taking 7 (2d6) acid damage on a failed\
    \ save, or half as much damage on a successful one.\n\nThe spray gun has a tank\
    \ that can be filled with ten standard vials of acid mixed with water, allowing\
    \ it to be used five times."
  "name": "Acid Spray Gun (Recharge 5-6)"
"source":
- "OoW"
"image": "[[Grunka.png]]"
```
^statblock

*Source: The Orrery of the Wanderer p. 115*

## Environment

underdark, grassland, forest, hill, desert
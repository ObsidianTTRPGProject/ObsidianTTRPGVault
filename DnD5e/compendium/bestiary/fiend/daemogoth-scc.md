---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/huge
- monster/type/fiend
aliases: ["Daemogoth"]
statblock: true
"name": "Daemogoth"
"size": "Huge"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "19"
- !!int "15"
- !!int "19"
- !!int "21"
- !!int "14"
- !!int "18"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Deception": !!int "12"
  "Perception": !!int "6"
  "History": !!int "9"
  "Arcana": !!int "13"
"damage_immunities": "psychic"
"condition_immunities": "frightened"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using a 10-minute ritual, the daemogoth can forge a magical bond with a\
    \ willing creature it touches throughout the ritual. The creature becomes bound\
    \ by the pact until it dies, the daemogoth dies, or the pact is broken by any\
    \ effect that can remove a curse.\n\nThe daemogoth chooses one spell from the\
    \ necromancy or enchantment school that is 3rd level or lower. The bound creature\
    \ can cast that spell using this pact, requiring no material components and using\
    \ Intelligence as the spellcasting ability. When it casts the spell, the creature\
    \ takes 7 (2d6) psychic damage, which can't break the creature's concentration\
    \ on a spell. Once the bound creature casts the spell in this way, it can't do\
    \ so again until it finishes a long rest."
  "name": "Pact of Pain"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The daemogoth makes three Agonizing Burst attacks. It can use Terrify,\
    \ if available, in place of one of the attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +9 to hit, reach 10 ft. or range 120 ft.,\
    \ one target. Hit: 11 (2d10) force damage. If the target is a creature, the daemogoth\
    \ regains 5 hit points."
  "name": "Agonizing Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The daemogoth targets one creature it can see within 120 feet of itself.\
    \ The target must make a DC 17 Wisdom saving throw. On a failed save, the target\
    \ takes 33 (6d10) psychic damage and is [frightened](/rules/conditions.md#frightened)\
    \ of the daemogoth until the end of the daemogoth's next turn, and the daemogoth\
    \ regains 5 hit points. On a successful save, the target takes half as much damage\
    \ and isn't [frightened](/rules/conditions.md#frightened), and the daemogoth doesn't\
    \ heal."
  "name": "Terrify (Recharge 4-6)"
"source":
- "SCC"
name: Daemogoth
image: "[[Daemogoth.png]]"
---

# Daemogoth

```statblock
"name": "Daemogoth"
"size": "Huge"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "19"
- !!int "15"
- !!int "19"
- !!int "21"
- !!int "14"
- !!int "18"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Deception": !!int "12"
  "Perception": !!int "6"
  "History": !!int "9"
  "Arcana": !!int "13"
"damage_immunities": "psychic"
"condition_immunities": "frightened"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using a 10-minute ritual, the daemogoth can forge a magical bond with a\
    \ willing creature it touches throughout the ritual. The creature becomes bound\
    \ by the pact until it dies, the daemogoth dies, or the pact is broken by any\
    \ effect that can remove a curse.\n\nThe daemogoth chooses one spell from the\
    \ necromancy or enchantment school that is 3rd level or lower. The bound creature\
    \ can cast that spell using this pact, requiring no material components and using\
    \ Intelligence as the spellcasting ability. When it casts the spell, the creature\
    \ takes 7 (2d6) psychic damage, which can't break the creature's concentration\
    \ on a spell. Once the bound creature casts the spell in this way, it can't do\
    \ so again until it finishes a long rest."
  "name": "Pact of Pain"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The daemogoth makes three Agonizing Burst attacks. It can use Terrify,\
    \ if available, in place of one of the attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +9 to hit, reach 10 ft. or range 120 ft.,\
    \ one target. Hit: 11 (2d10) force damage. If the target is a creature, the daemogoth\
    \ regains 5 hit points."
  "name": "Agonizing Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The daemogoth targets one creature it can see within 120 feet of itself.\
    \ The target must make a DC 17 Wisdom saving throw. On a failed save, the target\
    \ takes 33 (6d10) psychic damage and is [frightened](/rules/conditions.md#frightened)\
    \ of the daemogoth until the end of the daemogoth's next turn, and the daemogoth\
    \ regains 5 hit points. On a successful save, the target takes half as much damage\
    \ and isn't [frightened](/rules/conditions.md#frightened), and the daemogoth doesn't\
    \ heal."
  "name": "Terrify (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Daemogoth.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 189*

## Description

Slipping through the darkest corners of the world, daemogoths are powerful fiendish creatures that feed on misery and other negative emotions. Some sages refer to daemogoths as tear lickers, owing to the fiends' tendency to lurk near battlefields and other sites of great tragedy to consume the anguish saturating the area.

Daemogoths are creatures of forbidden knowledge and magic, all fueled by their consumption of anguish. They trade magical influence over the lives and minds of others to ambitious mortals in exchange for the mortal's agony.

Daemogoths are alien-looking in the extreme. Their eyes are insectile or smooth and bulbous like gleaming jewels, and they have five arms. They typically wear long robes, which drape low over their forms, and they sport a halo of horns, antlers, or floating stones or crystals.
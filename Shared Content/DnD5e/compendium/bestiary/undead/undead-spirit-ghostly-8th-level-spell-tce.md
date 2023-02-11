---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/medium
- monster/type/undead
aliases: ["Undead Spirit (Ghostly, 8th-Level Spell)"]
statblock: true
"name": "Undead Spirit (Ghostly, 8th-Level Spell)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "80"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft., fly 40 ft. (ghostly only; hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes 1d10 force damage for every 5 feet traveled."
  "name": "Incorporeal Passage (Ghostly Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit must succeed on a Constitution saving throw against your spell save DC\
    \ or be [poisoned](/rules/conditions.md#poisoned) until the start of its next\
    \ turn."
  "name": "Festering Aura (Putrid Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel necrotic damage, and the\
    \ creature must succeed on a Wisdom saving throw against your spell save DC or\
    \ be [frightened](/rules/conditions.md#frightened) of the undead until the end\
    \ of the target's next turn."
  "name": "Deathly Touch (Ghostly Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one target. Hit: 2d4 + 3 + summonSpellLevel necrotic damage."
  "name": "Grave Bolt (Skeletal Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel slashing damage. If the target\
    \ is [poisoned](/rules/conditions.md#poisoned), it must succeed on a Constitution\
    \ saving throw against your spell save DC or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the end of its next turn."
  "name": "Rotting Claw (Putrid Only)"
"source":
- "TCE"
name: Undead Spirit (Ghostly, 8th-Level Spell)
image: "[[Undead Spirit (Ghostly, 8th-Level Spell).png]]"
---

# Undead Spirit (Ghostly, 8th-Level Spell)

```statblock
"name": "Undead Spirit (Ghostly, 8th-Level Spell)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "80"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft., fly 40 ft. (ghostly only; hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes 1d10 force damage for every 5 feet traveled."
  "name": "Incorporeal Passage (Ghostly Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit must succeed on a Constitution saving throw against your spell save DC\
    \ or be [poisoned](/rules/conditions.md#poisoned) until the start of its next\
    \ turn."
  "name": "Festering Aura (Putrid Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one creature. Hit: 1d8 + 3 + summonSpellLevel necrotic damage, and the\
    \ creature must succeed on a Wisdom saving throw against your spell save DC or\
    \ be [frightened](/rules/conditions.md#frightened) of the undead until the end\
    \ of the target's next turn."
  "name": "Deathly Touch (Ghostly Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one target. Hit: 2d4 + 3 + summonSpellLevel necrotic damage."
  "name": "Grave Bolt (Skeletal Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel slashing damage. If the target\
    \ is [poisoned](/rules/conditions.md#poisoned), it must succeed on a Constitution\
    \ saving throw against your spell save DC or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the end of its next turn."
  "name": "Rotting Claw (Putrid Only)"
"source":
- "TCE"
"image": "[[Undead Spirit (Ghostly, 8th-Level Spell).png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 114*
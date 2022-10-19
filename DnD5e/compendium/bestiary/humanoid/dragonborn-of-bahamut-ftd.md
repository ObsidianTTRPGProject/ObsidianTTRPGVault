---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/humanoid
aliases: ["Dragonborn of Bahamut"]
statblock: true
"name": "Dragonborn of Bahamut"
"size": "Medium"
"type": "humanoid"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "13"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "17"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "5"
  "Persuasion": !!int "6"
"condition_immunities": "frightened"
"senses": "passive Perception 15"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragonborn fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn makes three Longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 13 (3d8) radiant damage. The dragonborn can cause the sword to flare with\
    \ bright light, and the target must succeed on a DC 14 Constitution saving throw\
    \ or be [blinded](/rules/conditions.md#blinded) until the start of the dragonborn's\
    \ next turn. The sword can flare in this way only once per turn."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn touches another creature within 5 feet of it. The target\
    \ magically regains 40 hit points. In addition, all diseases and poisons affecting\
    \ the target are removed."
  "name": "Healing Touch (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn exhales fiery radiance in a 30-foot cone. Each creature\
    \ in that area must make a DC 15 Dexterity saving throw, taking 44 (8d10) radiant\
    \ damage on a failed save, or half as much damage on a successful one. When the\
    \ dragonborn uses this action, it can choose up to three creatures in the cone.\
    \ These creatures take no damage from the radiance and instead regain 22 (4d10)\
    \ hit points each."
  "name": "Radiant Breath (Recharge 6)"
"source":
- "FTD"
name: Dragonborn of Bahamut
image: "[[Dragonborn of Bahamut.png]]"
---

# Dragonborn of Bahamut

```statblock
"name": "Dragonborn of Bahamut"
"size": "Medium"
"type": "humanoid"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "13"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "17"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "4"
  "Constitution": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Perception": !!int "5"
  "Persuasion": !!int "6"
"condition_immunities": "frightened"
"senses": "passive Perception 15"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragonborn fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn makes three Longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 13 (3d8) radiant damage. The dragonborn can cause the sword to flare with\
    \ bright light, and the target must succeed on a DC 14 Constitution saving throw\
    \ or be [blinded](/rules/conditions.md#blinded) until the start of the dragonborn's\
    \ next turn. The sword can flare in this way only once per turn."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn touches another creature within 5 feet of it. The target\
    \ magically regains 40 hit points. In addition, all diseases and poisons affecting\
    \ the target are removed."
  "name": "Healing Touch (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonborn exhales fiery radiance in a 30-foot cone. Each creature\
    \ in that area must make a DC 15 Dexterity saving throw, taking 44 (8d10) radiant\
    \ damage on a failed save, or half as much damage on a successful one. When the\
    \ dragonborn uses this action, it can choose up to three creatures in the cone.\
    \ These creatures take no damage from the radiance and instead regain 22 (4d10)\
    \ hit points each."
  "name": "Radiant Breath (Recharge 6)"
"source":
- "FTD"
"image": "[[Dragonborn of Bahamut.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 184*

## Description

Often called platinum knights, dragonborn champions of Bahamut might belong to an order that exists to protect the world from evil—and especially from evil dragons. A champion of Bahamut has a distinctive pair of platinum wings and a breath weapon suffused with radiant energy.

**Dragonborn Champions.** The connection between dragonborn and their draconic ancestors manifests in a variety of ways. Some dragonborn identify with a particular kind of dragon and attempt to emulate such dragons' attitudes and behavior. Others consider their draconic heritage—chromatic, metallic, or gem—something like a large extended family. But for dragonborn champions, this bond is spiritual as much as biological, and they devote themselves to their divine ancestor. Dragonborn champions advance the cause of their dragon god among draconic creatures and other folk alike.
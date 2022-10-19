---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Shadow"]
statblock: true
"name": "Shadow"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadow can take the Hide action as\
    \ a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the shadow has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The\
    \ target dies if this reduces its Strength to 0. Otherwise, the reduction lasts\
    \ until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies\
    \ from this attack, a new shadow rises from the corpse 1d4 hours later."
  "name": "Strength Drain"
"source":
- "MM"
- "CoS"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "SjA"
name: Shadow
image: "[[Shadow.png]]"
---

# Shadow

```statblock
"name": "Shadow"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the shadow can take the Hide action as\
    \ a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the shadow has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The\
    \ target dies if this reduces its Strength to 0. Otherwise, the reduction lasts\
    \ until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies\
    \ from this attack, a new shadow rises from the corpse 1d4 hours later."
  "name": "Strength Drain"
"source":
- "MM"
- "CoS"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "SjA"
"image": "[[Shadow.png]]"
```
^statblock

*Source: Monster Manual p. 269, Curse of Strahd, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Spelljammer Academy*

## Description

Shadows are undead that resemble dark exaggerations of humanoid shadows.

**Dark Disposition.** From the darkness, the shadow reaches out to feed on living creatures' vitality. They can consume any living creature, but they are especially drawn to creatures untainted by evil. A creature that lives a life of goodness and piety consigns its basest impulses and strongest temptations to the darkness where the shadows hunger. As a shadow drains its victim's strength and physical form, the victim's shadow darkens and begins to move of its own volition. In death, the creature's shadow breaks free, becoming a new undead shadow hungry for more life to consume.

If a creature from which a shadow has been created somehow returns to life, its undead shadow senses the return. The shadow might seek its "parent" to vex or slay. Whether the shadow pursues its living counterpart, the creature that birthed the shadow no longer casts one until the monster is destroyed.

**Undead Nature.** A shadow doesn't require air, food, drink, or sleep

## Environment

underdark, urban
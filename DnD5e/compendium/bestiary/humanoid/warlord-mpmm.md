---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/urban
aliases: ["Warlord"]
statblock: true
"name": "Warlord"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "229"
"hit_dice": "27d8 + 108"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "9"
  "Perception": !!int "5"
  "Persuasion": !!int "8"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord can reroll a saving throw it fails. It must use the new roll."
  "name": "Indomitable (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord regains 10 hit points at the start of its turn if it has fewer\
    \ than half its hit points but at least 1 hit point."
  "name": "Survivor"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord makes two Greatsword or Short bow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Shortbow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord targets one ally it can see within 30 feet of it. if the target\
    \ can see and hear the warlord, the target can make one weapon attack as a reaction\
    \ and gains advantage on the attack roll."
  "name": "Command Ally"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord makes one Greatsword or Shortbow attack."
  "name": "Weapon Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord targets one creature it can see within 30 feet of it. If the\
    \ target can see and hear it, the target must succeed on a DC 16 Wisdom saving\
    \ throw or be [frightened](/rules/conditions.md#frightened) until the end of warlord's\
    \ next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
name: Warlord
image: "[[Warlord.png]]"
---

# Warlord

```statblock
"name": "Warlord"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "229"
"hit_dice": "27d8 + 108"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "9"
  "Perception": !!int "5"
  "Persuasion": !!int "8"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord can reroll a saving throw it fails. It must use the new roll."
  "name": "Indomitable (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord regains 10 hit points at the start of its turn if it has fewer\
    \ than half its hit points but at least 1 hit point."
  "name": "Survivor"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord makes two Greatsword or Short bow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Shortbow"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord targets one ally it can see within 30 feet of it. if the target\
    \ can see and hear the warlord, the target can make one weapon attack as a reaction\
    \ and gains advantage on the attack roll."
  "name": "Command Ally"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord makes one Greatsword or Shortbow attack."
  "name": "Weapon Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlord targets one creature it can see within 30 feet of it. If the\
    \ target can see and hear it, the target must succeed on a DC 16 Wisdom saving\
    \ throw or be [frightened](/rules/conditions.md#frightened) until the end of warlord's\
    \ next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
"image": "[[Warlord.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 257, Volo's Guide to Monsters p. 220*

## Description

Warlords are legendary battlefield commanders, whose names are spoken with awe. After a string of decisive victories, a warlord could easily take on the role of monarch or general and attract followers willing to die for the warlord's banner.

Warlords urge their troops into the fray with shouted exhortations. You can roll on the Warlord Battle Cries table to select one, or choose a battle cry that fits with your campaign.

**Warlord Battle Cries**

| dice: d8 | Battle Cry |
|----------|------------|
|  | "Remember why we fight!" |
|  | "Victory awaits!" |
|  | "For the crown!" |
|  | "Be monstrous to the enemy!" |
|  | "Fight so they fear us!" |
|  | "Weapons drawn! Spells at the ready!" |
|  | "To the Abyss with them!" |
|  | "You know what to do!" |
^warlord-battle-cries

## Environment

urban
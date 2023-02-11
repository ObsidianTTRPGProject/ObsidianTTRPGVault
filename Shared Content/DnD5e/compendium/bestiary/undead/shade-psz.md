---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Shade"]
statblock: true
"name": "Shade"
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
- "PSZ"
name: Shade
image: "[[Shade.png]]"
---

# Shade

```statblock
"name": "Shade"
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
- "PSZ"
"image": "[[Shade.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 28*

## Environment

underdark, urban
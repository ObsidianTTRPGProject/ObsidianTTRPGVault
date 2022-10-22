---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/coastal
- monster/environment/urban
aliases: ["Swashbuckler"]
statblock: true
"name": "Swashbuckler"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Acrobatics": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the swashbuckler is wearing light or no armor and wielding no [shield](/compendium/items/shield.md),\
    \ its AC includes its Charisma modifier."
  "name": "Suave Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swashbuckler makes one Dagger attack and two Rapier attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Rapier"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swashbuckler takes the Dash or Disengage action."
  "name": "Lightfooted"
"source":
- "MPMM"
- "VGM"
name: Swashbuckler
image: "[[Swashbuckler.png]]"
---

# Swashbuckler

```statblock
"name": "Swashbuckler"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Acrobatics": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the swashbuckler is wearing light or no armor and wielding no [shield](/compendium/items/shield.md),\
    \ its AC includes its Charisma modifier."
  "name": "Suave Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swashbuckler makes one Dagger attack and two Rapier attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Rapier"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The swashbuckler takes the Dash or Disengage action."
  "name": "Lightfooted"
"source":
- "MPMM"
- "VGM"
"image": "[[Swashbuckler.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 238, Volo's Guide to Monsters p. 217*

## Description

Swashbucklers are charming ne'er-do-wells who live by their own codes of honor. They crave notoriety, often indulge in romantic trysts, and eke out livings as pirates and corsairs, rarely staying in one place for too long.

Many swashbucklers have a signature flourish with which they embellish their actions to make themselves more memorable. You can roll on the Swashbuckler Flourishes table or choose one of the options to find a suitably dramatic flourish for a swashbuckler.

**Swashbuckler Flourishes**

| dice: d8 | Flourish |
|----------|----------|
|  | Winks and flashes a charming grin |
|  | Bows theatrically |
|  | Constantly flips their dagger |
|  | Punctuates sentences with a boisterous "Ha-HA!" |
|  | Sings catchy sea chanteys |
|  | Dexterously manipulates a silver coin through their fingers |
|  | Hurls colorful insults |
|  | Adds showy embellishments to rapier strokes |
^swashbuckler-flourishes

## Environment

coastal, urban
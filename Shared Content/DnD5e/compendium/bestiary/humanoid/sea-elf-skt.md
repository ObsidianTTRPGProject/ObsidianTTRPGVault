---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Sea Elf"]
statblock: true
"name": "Sea Elf"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "walk 10 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Elvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the sea elf to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea elf can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if\
    \ used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "SKT"
name: Sea Elf
image: "[[Sea Elf.png]]"
---

# Sea Elf

```statblock
"name": "Sea Elf"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "walk 10 ft., swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Elvish"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the sea elf to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea elf can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if\
    \ used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "SKT"
"image": "[[Sea Elf.png]]"
```
^statblock

*Source: Storm King's Thunder p. 70*

## Environment

underwater, coastal
---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
- monster/environment/arctic
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/desert
aliases: ["Eira"]
statblock: true
"name": "Eira"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "11"
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "3"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Druidic plus any two languages, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eira is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 12, +4 to hit with spell attacks). It has the following druid spells\
    \ prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [shillelagh](/compendium/spells/shillelagh.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [longstrider](/compendium/spells/longstrider.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [animal messenger](/compendium/spells/animal-messenger.md), [barkskin](/compendium/spells/barkskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eira has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the eira to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eira can attempt to hide even when they are only lightly obscured by\
    \ foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded\
    \ with two hands, or 6 (1d8 + 2) bludgeoning damage with [shillelagh](/compendium/spells/shillelagh.md)."
  "name": "Quarterstaff"
"source":
- "TftYP"
name: Eira
image: "[[Eira.png]]"
---

# Eira

```statblock
"name": "Eira"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "11"
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "3"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Druidic plus any two languages, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Eira is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell\
    \ save DC 12, +4 to hit with spell attacks). It has the following druid spells\
    \ prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [shillelagh](/compendium/spells/shillelagh.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [longstrider](/compendium/spells/longstrider.md), [speak with animals](/compendium/spells/speak-with-animals.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [animal messenger](/compendium/spells/animal-messenger.md), [barkskin](/compendium/spells/barkskin.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eira has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the eira to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eira can attempt to hide even when they are only lightly obscured by\
    \ foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded\
    \ with two hands, or 6 (1d8 + 2) bludgeoning damage with [shillelagh](/compendium/spells/shillelagh.md)."
  "name": "Quarterstaff"
"source":
- "TftYP"
"image": "[[Eira.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 159*

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert
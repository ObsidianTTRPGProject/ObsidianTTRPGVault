---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Walnut Dankgrass"]
statblock: true
"name": "Walnut Dankgrass"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "8"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "10"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "2"
"skillsaves":
  "Athletics": !!int "1"
  "Stealth": !!int "5"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut is a 7th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks). She has the following druid spells\
    \ prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [flame blade](/compendium/spells/flame-blade.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n3rd level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (1 4th-level slots): [blight](/compendium/spells/blight.md), [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut can attempt to hide even when she is only lightly obscured by foliage,\
    \ heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Walnut can assume the shape of a dire wolf. She can\
    \ stay in this form for 3 hours or until she reverts to her normal form as a bonus\
    \ action. She automatically reverts if she falls [unconscious](/rules/conditions.md#unconscious),\
    \ drops to 0 hit points, or dies.\n\nWhile transformed, Walnut's game statistics\
    \ are replaced by the statistics of the dire wolf, except she retains her alignment,\
    \ personality, and Intelligence, Wisdom, and Charisma scores.\n\nHer attacks in\
    \ beast form are magical. While in beast form, Walnut can use a bonus action to\
    \ expend one spell slot and regain 1d8 hit points per level of the spell slot\
    \ expended."
  "name": "Wild Shape (Recharges after a Short or Long rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut makes two attacks with Foremother or her longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Foremother (+1 Scimitar)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
"source":
- "AI"
name: Walnut Dankgrass
image: "[[Walnut Dankgrass.png]]"
---

# Walnut Dankgrass

```statblock
"name": "Walnut Dankgrass"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "8"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "10"
"speed": "walk 35 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "2"
"skillsaves":
  "Athletics": !!int "1"
  "Stealth": !!int "5"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut is a 7th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks). She has the following druid spells\
    \ prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [flame blade](/compendium/spells/flame-blade.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n3rd level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (1 4th-level slots): [blight](/compendium/spells/blight.md), [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut can attempt to hide even when she is only lightly obscured by foliage,\
    \ heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Walnut can assume the shape of a dire wolf. She can\
    \ stay in this form for 3 hours or until she reverts to her normal form as a bonus\
    \ action. She automatically reverts if she falls [unconscious](/rules/conditions.md#unconscious),\
    \ drops to 0 hit points, or dies.\n\nWhile transformed, Walnut's game statistics\
    \ are replaced by the statistics of the dire wolf, except she retains her alignment,\
    \ personality, and Intelligence, Wisdom, and Charisma scores.\n\nHer attacks in\
    \ beast form are magical. While in beast form, Walnut can use a bonus action to\
    \ expend one spell slot and regain 1d8 hit points per level of the spell slot\
    \ expended."
  "name": "Wild Shape (Recharges after a Short or Long rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Walnut makes two attacks with Foremother or her longbow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Foremother (+1 Scimitar)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
"source":
- "AI"
"image": "[[Walnut Dankgrass.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 204*

## Description

> [!quote]-  
> 
> The war ever rages.

Growing up in an all-female clan of druids, healers, and rangers, Walnut Dankgrass was drawn to the role of protector from her earliest years. Dedicated to Mielikki, the matriarchal clan known as the Enclave Panax Anima defended the unspoiled wild by word and blade (with the latter option more prevalent by far). But when tragedy struck the enclave, Walnut's clan was destroyed to the last-leaving her with nothing but the all-consuming desire to seek out and destroy those responsible.

As a guardian of the wild, Walnut has long held an antipathy toward civilization and anything urban. However, understanding that civilization was the source of the evil that destroyed her people, she makes the city her home now. She embraces her role as the "C" Team's documancer, knowing that the city's power-and its weaknesses-can be fully gleaned only from within.

Walnut distrusts most folk she meets, except for those whose bearing reflects the matriarchal structure she was once part of. No matter what shape her struggles take, she knows instinctively that her beliefs are right and true-and that she will follow those beliefs to the bitter end.
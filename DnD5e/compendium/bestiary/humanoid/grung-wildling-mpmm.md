---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/humanoid
- monster/environment/forest
aliases: ["Grung Wildling"]
statblock: true
"name": "Grung Wildling"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 14"
"languages": "Grung"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\
    \n2/day: [plant growth](/compendium/spells/plant-growth.md)\n\n3/day each:\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [spike growth](/compendium/spells/spike-growth.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that grapples the grung or otherwise comes into direct contact\
    \ with the grung's skin must succeed on a DC 12 Constitution saving throw or become\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. A [poisoned](/rules/conditions.md#poisoned)\
    \ creature no longer in direct contact with the grung can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success."
  "name": "Poisonous Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [exhaustion](/rules/conditions.md#exhaustion) at the end\
    \ of that day. The grung can recover from this [exhaustion](/rules/conditions.md#exhaustion)\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Shortbow"
"source":
- "MPMM"
- "VGM"
name: Grung Wildling
image: "[[Grung Wildling.png]]"
---

# Grung Wildling

```statblock
"name": "Grung Wildling"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 14"
"languages": "Grung"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\
    \n2/day: [plant growth](/compendium/spells/plant-growth.md)\n\n3/day each:\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [spike growth](/compendium/spells/spike-growth.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that grapples the grung or otherwise comes into direct contact\
    \ with the grung's skin must succeed on a DC 12 Constitution saving throw or become\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. A [poisoned](/rules/conditions.md#poisoned)\
    \ creature no longer in direct contact with the grung can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success."
  "name": "Poisonous Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [exhaustion](/rules/conditions.md#exhaustion) at the end\
    \ of that day. The grung can recover from this [exhaustion](/rules/conditions.md#exhaustion)\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Shortbow"
"source":
- "MPMM"
- "VGM"
"image": "[[Grung Wildling.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*

## Description

Gifted with druidic magic, a grung wildling typically serves as an advisor, a healer, and a nurturer of crops.

**Grungs.** Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Environment

forest
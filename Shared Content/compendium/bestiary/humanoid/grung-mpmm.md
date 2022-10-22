---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/humanoid
- monster/environment/forest
aliases: ["Grung"]
statblock: true
"name": "Grung"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "7"
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "1/4"
"traits":
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
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
"source":
- "MPMM"
- "VGM"
name: Grung
image: "[[Grung.png]]"
---

# Grung

```statblock
"name": "Grung"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "7"
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "1/4"
"traits":
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
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
"source":
- "MPMM"
- "VGM"
"image": "[[Grung.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 149, Volo's Guide to Monsters p. 156*

## Description

The grung stat block represents a typical grung warrior or hunter, met either in a grung community or traveling elsewhere as a mercenary, game warden, guard, or bandit.

**Grungs.** Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Environment

forest
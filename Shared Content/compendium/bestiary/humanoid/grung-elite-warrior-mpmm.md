---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/humanoid
- monster/environment/forest
aliases: ["Grung Elite Warrior"]
statblock: true
"name": "Grung Elite Warrior"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "2"
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
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung makes a chirring noise to which grungs are immune. Each Humanoid\
    \ or Beast that is within 15 feet of the grung and able to hear it must succeed\
    \ on a DC 12 Wisdom saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the grung's next turn."
  "name": "Mesmerizing Chirr (Recharge 6)"
"source":
- "MPMM"
- "VGM"
name: Grung Elite Warrior
image: "[[Grung Elite Warrior.png]]"
---

# Grung Elite Warrior

```statblock
"name": "Grung Elite Warrior"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "walk 25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "2"
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
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage plus 5 (2d4) poison damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The grung makes a chirring noise to which grungs are immune. Each Humanoid\
    \ or Beast that is within 15 feet of the grung and able to hear it must succeed\
    \ on a DC 12 Wisdom saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the grung's next turn."
  "name": "Mesmerizing Chirr (Recharge 6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Grung Elite Warrior.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150, Volo's Guide to Monsters p. 157*

## Description

A grung elite warrior typically leads a group of grung and other warriors into battle and is often accompanied by a grung wildling.

**Grungs.** Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Environment

forest
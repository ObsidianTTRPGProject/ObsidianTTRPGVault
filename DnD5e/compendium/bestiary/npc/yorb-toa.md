---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/small
- monster/type/humanoid/grung
- monster/environment/forest
aliases: ["Yorb"]
statblock: true
"name": "Yorb"
"size": "Small"
"type": "humanoid"
"subtype": "grung"
"alignment": "Lawful Evil"
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
  "desc": "Yorb can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that grapples Yorb or otherwise comes into direct contact\
    \ with Yorb's skin must succeed on a DC 12 Constitution saving throw or become\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. A [poisoned](/rules/conditions.md#poisoned)\
    \ creature no longer in direct contact with Yorb can repeat the saving throw at\
    \ the end of each of its turns, ending the effect on itself on a success."
  "name": "Poisonous Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yorb's long jump is up to 25 feet and its high jump is up to 15 feet, with\
    \ or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or take 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution\
    \ saving throw or take 5 (2d4) poison damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yorb makes a chirring noise to which grungs are immune. Each humanoid or\
    \ beast that is within 15 feet of Yorb and able to hear it must succeed on a DC\
    \ 12 Wisdom saving throw or be [stunned](/rules/conditions.md#stunned) until the\
    \ end of Yorb's next turn."
  "name": "Mesmerizing Chirr (Recharge 6)"
"source":
- "ToA"
name: Yorb
image: "[[Yorb.png]]"
---

# Yorb

```statblock
"name": "Yorb"
"size": "Small"
"type": "humanoid"
"subtype": "grung"
"alignment": "Lawful Evil"
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
  "desc": "Yorb can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that grapples Yorb or otherwise comes into direct contact\
    \ with Yorb's skin must succeed on a DC 12 Constitution saving throw or become\
    \ [poisoned](/rules/conditions.md#poisoned) for 1 minute. A [poisoned](/rules/conditions.md#poisoned)\
    \ creature no longer in direct contact with Yorb can repeat the saving throw at\
    \ the end of each of its turns, ending the effect on itself on a success."
  "name": "Poisonous Skin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yorb's long jump is up to 25 feet and its high jump is up to 15 feet, with\
    \ or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or take 5 (2d4) poison damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution\
    \ saving throw or take 5 (2d4) poison damage."
  "name": "Shortbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yorb makes a chirring noise to which grungs are immune. Each humanoid or\
    \ beast that is within 15 feet of Yorb and able to hear it must succeed on a DC\
    \ 12 Wisdom saving throw or be [stunned](/rules/conditions.md#stunned) until the\
    \ end of Yorb's next turn."
  "name": "Mesmerizing Chirr (Recharge 6)"
"source":
- "ToA"
"image": "[[Yorb.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 108*

## Environment

forest
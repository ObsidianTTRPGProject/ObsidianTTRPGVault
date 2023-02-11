---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/small
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Reduced-Threat Darkmantle"]
statblock: true
"name": "Reduced-Threat Darkmantle"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "5d6 + 5"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 10 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "1"
"senses": "blindsight 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkmantle can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the darkmantle remains motionless, it is indistinguishable from a\
    \ cave formation such as a stalactite or stalagmite."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target\
    \ is Medium or smaller and the darkmantle has advantage on the attack roll, it\
    \ attaches by engulfing the target's head, and the target is also [blinded](/rules/conditions.md#blinded)\
    \ and unable to breathe while the darkmantle is attached in this way.\n\nWhile\
    \ attached to the target, the darkmantle can attack no other creature except the\
    \ target but has advantage on its attack rolls. The darkmantle's speed also becomes\
    \ 0, it can't benefit from any bonus to its speed, and it moves with the target.\n\
    \nA creature can detach the darkmantle by making a successful DC 11 Strength check\
    \ as an action. On its turn, the darkmantle can detach itself from the target\
    \ by using 5 feet of movement."
  "name": "Crush"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot radius of magical darkness extends out from the darkmantle, moves\
    \ with it, and spreads around corners. The darkness lasts as long as the darkmantle\
    \ maintains concentration, up to 10 minutes (as if concentrating on a spell).\
    \ Darkvision can't penetrate this darkness, and no natural light can illuminate\
    \ it. If any of the darkness overlaps with an area of light created by a spell\
    \ of 2nd level or lower, the spell creating the light is dispelled."
  "name": "Darkness Aura (1/Day)"
"source":
- "TftYP"
name: Reduced-Threat Darkmantle
image: "[[Reduced-Threat Darkmantle.png]]"
---

# Reduced-Threat Darkmantle

```statblock
"name": "Reduced-Threat Darkmantle"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "5d6 + 5"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 10 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "1"
"senses": "blindsight 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkmantle can't use its blindsight while [deafened](/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the darkmantle remains motionless, it is indistinguishable from a\
    \ cave formation such as a stalactite or stalagmite."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target\
    \ is Medium or smaller and the darkmantle has advantage on the attack roll, it\
    \ attaches by engulfing the target's head, and the target is also [blinded](/rules/conditions.md#blinded)\
    \ and unable to breathe while the darkmantle is attached in this way.\n\nWhile\
    \ attached to the target, the darkmantle can attack no other creature except the\
    \ target but has advantage on its attack rolls. The darkmantle's speed also becomes\
    \ 0, it can't benefit from any bonus to its speed, and it moves with the target.\n\
    \nA creature can detach the darkmantle by making a successful DC 11 Strength check\
    \ as an action. On its turn, the darkmantle can detach itself from the target\
    \ by using 5 feet of movement."
  "name": "Crush"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot radius of magical darkness extends out from the darkmantle, moves\
    \ with it, and spreads around corners. The darkness lasts as long as the darkmantle\
    \ maintains concentration, up to 10 minutes (as if concentrating on a spell).\
    \ Darkvision can't penetrate this darkness, and no natural light can illuminate\
    \ it. If any of the darkness overlaps with an area of light created by a spell\
    \ of 2nd level or lower, the spell creating the light is dispelled."
  "name": "Darkness Aura (1/Day)"
"source":
- "TftYP"
"image": "[[Reduced-Threat Darkmantle.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark
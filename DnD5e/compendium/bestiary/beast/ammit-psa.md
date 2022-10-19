---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/beast
- monster/environment/swamp
aliases: ["Ammit"]
statblock: true
"name": "Ammit"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ammit can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ammit makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the ammit can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the ammit. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "PSA"
name: Ammit
image: "[[Ammit.png]]"
---

# Ammit

```statblock
"name": "Ammit"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ammit can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ammit makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the ammit can't bite another target."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [grappled](/rules/conditions.md#grappled)\
    \ by the ammit. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"source":
- "PSA"
"image": "[[Ammit.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 30*

## Description

**Demons.** Deep in the desert, far from the protection of the Hekma and the safety of Naktamun, lies a place called Ifnir, the Demons' Nest. The people of Amonkhet believe that the God-Pharaoh banished all the demons of this plane to the desolation of Ifnir as punishment when they rose up in rebellion against him. Some say that the angels carry the worst dissenters into the heart of Ifnir, which is a fate far worse than merely being abandoned amid the scouring sands.

The demons of Ifnir bear some resemblance to Bolas, with long limbs and tails, huge wings, and gaunt bodies adorned with horns and blades. Other demonic creatures have more bestial features, including [ammits](/compendium/bestiary/beast/ammit-psa.md)—crocodilian demons sometimes used as challenges within the trials of the five gods—and the scorpion demons called [soulstingers](/compendium/bestiary/fiend/soulstinger-demon-psa.md), whose venom causes excruciating pain in its victims.

## Environment

swamp
---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/large
- monster/type/beast
aliases: ["Two-Headed Crocodile"]
statblock: true
"name": "Two-Headed Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile has advantage on Wisdom (Perception) checks and\
    \ on saving throws against being [blinded](/rules/conditions.md#blinded), [charmed](/rules/conditions.md#charmed),\
    \ [deafened](/rules/conditions.md#deafened), [frightened](/rules/conditions.md#frightened),\
    \ [stunned](/rules/conditions.md#stunned), and knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When one of the crocodile's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile makes two attacks with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and that head of the crocodile can't bite another target."
  "name": "Bite"
"source":
- "IMR"
name: Two-Headed Crocodile
image: "[[Two-Headed Crocodile.png]]"
---

# Two-Headed Crocodile

```statblock
"name": "Two-Headed Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile has advantage on Wisdom (Perception) checks and\
    \ on saving throws against being [blinded](/rules/conditions.md#blinded), [charmed](/rules/conditions.md#charmed),\
    \ [deafened](/rules/conditions.md#deafened), [frightened](/rules/conditions.md#frightened),\
    \ [stunned](/rules/conditions.md#stunned), and knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When one of the crocodile's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The two-headed crocodile makes two attacks with its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and that head of the crocodile can't bite another target."
  "name": "Bite"
"source":
- "IMR"
"image": "[[Two-Headed Crocodile.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 89*
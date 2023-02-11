---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/dragon
- monster/environment/mountain
- monster/environment/hill
aliases: ["Reduced-Threat Wyvern"]
statblock: true
"name": "Reduced-Threat Wyvern"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "55"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "walk 20 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyvern makes two attacks: one with its bite and one with its stinger.\
    \ While flying, it can use its claws in place of one other attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage. The target must make a DC 13 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Stinger"
"source":
- "TftYP"
name: Reduced-Threat Wyvern
image: "[[Reduced-Threat Wyvern.png]]"
---

# Reduced-Threat Wyvern

```statblock
"name": "Reduced-Threat Wyvern"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "55"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "6"
"speed": "walk 20 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyvern makes two attacks: one with its bite and one with its stinger.\
    \ While flying, it can use its claws in place of one other attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage. The target must make a DC 13 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Stinger"
"source":
- "TftYP"
"image": "[[Reduced-Threat Wyvern.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

mountain, hill
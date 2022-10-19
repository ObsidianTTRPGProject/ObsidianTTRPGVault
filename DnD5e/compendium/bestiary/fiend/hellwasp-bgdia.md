---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/large
- monster/type/fiend
aliases: ["Hellwasp"]
statblock: true
"name": "Hellwasp"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"stats":
- !!int "18"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 10 ft., fly 60 ft. (hover)"
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "3"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Infernal, telepathy 300 ft. (with other hellwasps only)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellwasp's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellwasp makes two attacks: one with its sting and one with its sword\
    \ talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) piercing damage plus 7 (2d6) fire damage, and the target must succeed on\
    \ a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the\
    \ target is also [paralyzed](/rules/conditions.md#paralyzed). The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Sting"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Sword Talons"
"source":
- "BGDIA"
name: Hellwasp
image: "[[Hellwasp.png]]"
---

# Hellwasp

```statblock
"name": "Hellwasp"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"stats":
- !!int "18"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 10 ft., fly 60 ft. (hover)"
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "3"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Infernal, telepathy 300 ft. (with other hellwasps only)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellwasp's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hellwasp makes two attacks: one with its sting and one with its sword\
    \ talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) piercing damage plus 7 (2d6) fire damage, and the target must succeed on\
    \ a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the\
    \ target is also [paralyzed](/rules/conditions.md#paralyzed). The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Sting"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Sword Talons"
"source":
- "BGDIA"
"image": "[[Hellwasp.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 236*

## Description

A hellwasp is an intelligent, malevolent insect native to the Nine Hells. It has a thick protective carapace, thin metallic wings, and strong legs ending in swordlike talons. It uses its stinger to inject a chemical admixture similar to alchemist's fire into its victims. This same solution carries a paralytic enzyme that renders the victim helpless long enough for the hellwasp to grab its prey and flee.

Hellwasps thrive in hot weather, but extreme cold causes their shells to crack and their metabolisms to shut down. Consequently, they avoid the icy layers of the Nine Hells (Stygia and Cania).

**Nests.** Hellwasps spew a golden bile similar to amber, which they use to craft enormous nests riddled with chambers and passages. The hellwasps use these nests as communal shelters and food storage. A typical nest is large enough to support a commune of 1d10 + 10 hellwasps, with each hellwasp having an equal voice and role in the society.

**Hellwasp Telepathy.** Hellwasps communicate with one another via a form of telepathy perceptible only to their kind.
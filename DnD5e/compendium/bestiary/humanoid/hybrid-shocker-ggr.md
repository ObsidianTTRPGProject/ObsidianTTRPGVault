---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/simic-hybrid
aliases: ["Hybrid Shocker"]
statblock: true
"name": "Hybrid Shocker"
"size": "Medium"
"type": "humanoid"
"subtype": "Simic hybrid"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"damage_immunities": "lightning"
"senses": "passive Perception 11"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that touches the hybrid or hits it with a melee attack while\
    \ within 5 feet of it takes 5 (1d10) lightning damage."
  "name": "Electrified Body"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hybrid sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 feet."
  "name": "Illumination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hybrid makes two attacks: one with its shocking touch and one with\
    \ its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ lightning damage."
  "name": "Shocking Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one creature. Hit: The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 11), and the\
    \ hybrid pulls the target up to 15 feet straight toward it. Until this grapple\
    \ ends, the target takes 5 (1d10) lightning damage at the start of each of its\
    \ turns, and the hybrid shocker can't use its tentacles on another creature."
  "name": "Tentacles"
"source":
- "GGR"
name: Hybrid Shocker
image: "[[Hybrid Shocker.png]]"
---

# Hybrid Shocker

```statblock
"name": "Hybrid Shocker"
"size": "Medium"
"type": "humanoid"
"subtype": "Simic hybrid"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"damage_immunities": "lightning"
"senses": "passive Perception 11"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature that touches the hybrid or hits it with a melee attack while\
    \ within 5 feet of it takes 5 (1d10) lightning damage."
  "name": "Electrified Body"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hybrid sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 feet."
  "name": "Illumination"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hybrid makes two attacks: one with its shocking touch and one with\
    \ its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ lightning damage."
  "name": "Shocking Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one creature. Hit: The\
    \ target is [grappled](/rules/conditions.md#grappled) (escape DC 11), and the\
    \ hybrid pulls the target up to 15 feet straight toward it. Until this grapple\
    \ ends, the target takes 5 (1d10) lightning damage at the start of each of its\
    \ turns, and the hybrid shocker can't use its tentacles on another creature."
  "name": "Tentacles"
"source":
- "GGR"
"image": "[[Hybrid Shocker.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 218*

## Description

**Simic Hybrids.** The Guardian Project is a consequence of increasing tension within the Simic Combine as the threat of interguild conflict looms. Believing that the Simic must be prepared to fight for their lives when that conflict comes to a head, biomancers have created soldiers to help defend the guild. These hybrids (also called guardians, after the name of the project) are created from human, vedalken, and elf guild members who volunteer to be transformed.
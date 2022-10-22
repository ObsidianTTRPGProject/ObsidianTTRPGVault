---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/gargantuan
- monster/type/aberration
aliases: ["Core Spawn Worm"]
statblock: true
"name": "Core Spawn Worm"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "279"
"hit_dice": "18d20 + 90"
"stats":
- !!int "26"
- !!int "5"
- !!int "20"
- !!int "6"
- !!int "8"
- !!int "4"
"speed": "walk 60 ft., burrow 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "4"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, psychic"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm sheds dim light in a 20-foot radius."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the worm takes radiant damage, each creature within 20 feet of it takes\
    \ that damage as well."
  "name": "Radiant Mirror"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm can burrow through solid rock at half its burrowing speed and\
    \ leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm makes two attacks: one with its barbed tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one creature. Hit: 25\
    \ (5d6 + 8) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The tentacles can grapple only one creature at a time."
  "name": "Barbed Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 30 (5d8\
    \ + 8) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Dexterity saving throw or be swallowed by the worm. A swallowed\
    \ creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover against attacks and other effects outside the worm, and takes\
    \ 21 (6d6) fire damage at the start of each of the worm's turns.\n\nIf the worm\
    \ takes 30 damage or more on a single turn from a creature inside it, the worm\
    \ must succeed on a DC 21 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the worm. If the worm dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "EGW"
name: Core Spawn Worm
image: "[[Core Spawn Worm.png]]"
---

# Core Spawn Worm

```statblock
"name": "Core Spawn Worm"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "279"
"hit_dice": "18d20 + 90"
"stats":
- !!int "26"
- !!int "5"
- !!int "20"
- !!int "6"
- !!int "8"
- !!int "4"
"speed": "walk 60 ft., burrow 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "4"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, psychic"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm sheds dim light in a 20-foot radius."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the worm takes radiant damage, each creature within 20 feet of it takes\
    \ that damage as well."
  "name": "Radiant Mirror"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm can burrow through solid rock at half its burrowing speed and\
    \ leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The worm makes two attacks: one with its barbed tentacles and one with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one creature. Hit: 25\
    \ (5d6 + 8) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ The tentacles can grapple only one creature at a time."
  "name": "Barbed Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 30 (5d8\
    \ + 8) piercing damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 18 Dexterity saving throw or be swallowed by the worm. A swallowed\
    \ creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ has total cover against attacks and other effects outside the worm, and takes\
    \ 21 (6d6) fire damage at the start of each of the worm's turns.\n\nIf the worm\
    \ takes 30 damage or more on a single turn from a creature inside it, the worm\
    \ must succeed on a DC 21 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of the worm. If the worm dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 20 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "EGW"
"image": "[[Core Spawn Worm.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 287*

## Description

This invertebrate horror has quivering, barbed tentacles set around its massive, toothy maw. The worm's cracked and stony hide pulses with a dull orange glow, as if it might be composed of primordial lava perpetually on the verge of hardening into solid rock.

The Elder Evils assault the multiverse in strange and calamitous ways. Sometimes they breach the Material Plane by exploiting the unfathomable energy and darkness found in the world's depths. These terrestrial manifestations of loathsome alien agendas are known as core spawn, and they are as varied in their physiology as they are horrific.

Their concentration in the desolate lands of Blightshore makes the core spawn a challenge to research, and many who have sought to observe or study these nightmarish entities rarely return. Those who do return are often shells of their former selves who speak of horrifying underground labyrinths of twisting caverns and malevolent nests where other denizens of the Miskath Strand are dragged below to some infernal purpose.

**Offspring of Calamity.** The aberrant creatures known as core spawn are a subterranean breed of heralds, servants, foot soldiers, and lieutenants of the Elder Evils, awakened in the depths by the cataclysmic actions of the Betrayer Gods and their minions. They often appear on the surface world in the wake of seismic events, such as that which created the bottomless Miskath Pit of Eastern Wynandir. Warlocks and cultists sometimes gather together to hasten the arrival of core spawn to the Material Plane, focusing their arcane power on areas of natural seismic instability when the signs and stars are right.
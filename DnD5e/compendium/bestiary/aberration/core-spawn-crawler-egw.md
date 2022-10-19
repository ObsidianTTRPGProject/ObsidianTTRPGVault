---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/small
- monster/type/aberration
aliases: ["Core Spawn Crawler"]
statblock: true
"name": "Core Spawn Crawler"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "7"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "psychic"
"condition_immunities": "blinded"
"senses": "blindsight 30 ft. (blind beyond this radius), tremorsense 60 ft., passive\
  \ Perception 15"
"languages": "understands Deep Speech but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler has advantage on an attack roll against a creature if at least\
    \ one of the crawler's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler makes four attacks: one with its bite, two with its claws,\
    \ and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage and the target must succeed on a DC 11 Wisdom saving throw\
    \ or become [frightened](/rules/conditions.md#frightened) until the start of the\
    \ crawler's next turn."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Tail"
"source":
- "EGW"
name: Core Spawn Crawler
image: "[[Core Spawn Crawler.png]]"
---

# Core Spawn Crawler

```statblock
"name": "Core Spawn Crawler"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "7"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "psychic"
"condition_immunities": "blinded"
"senses": "blindsight 30 ft. (blind beyond this radius), tremorsense 60 ft., passive\
  \ Perception 15"
"languages": "understands Deep Speech but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler has advantage on an attack roll against a creature if at least\
    \ one of the crawler's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The crawler makes four attacks: one with its bite, two with its claws,\
    \ and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage and the target must succeed on a DC 11 Wisdom saving throw\
    \ or become [frightened](/rules/conditions.md#frightened) until the start of the\
    \ crawler's next turn."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 15 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Tail"
"source":
- "EGW"
"image": "[[Core Spawn Crawler.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 286*

## Description

The smallest and most numerous of the core spawn, these eyeless creatures scurry through the subterranean darkness with the help of their four irregular, gangly arms and hooked prehensile tails. Core spawn crawlers rarely travel alone, and a group of these agile predators is known as a vein of crawlers. Their clattering taloned limbs warn of their presence as they scuttle through the shadow-haunted depths of the earth.

The Elder Evils assault the multiverse in strange and calamitous ways. Sometimes they breach the Material Plane by exploiting the unfathomable energy and darkness found in the world's depths. These terrestrial manifestations of loathsome alien agendas are known as core spawn, and they are as varied in their physiology as they are horrific.

Their concentration in the desolate lands of Blightshore makes the core spawn a challenge to research, and many who have sought to observe or study these nightmarish entities rarely return. Those who do return are often shells of their former selves who speak of horrifying underground labyrinths of twisting caverns and malevolent nests where other denizens of the Miskath Strand are dragged below to some infernal purpose.

**Offspring of Calamity.** The aberrant creatures known as core spawn are a subterranean breed of heralds, servants, foot soldiers, and lieutenants of the Elder Evils, awakened in the depths by the cataclysmic actions of the Betrayer Gods and their minions. They often appear on the surface world in the wake of seismic events, such as that which created the bottomless Miskath Pit of Eastern Wynandir. Warlocks and cultists sometimes gather together to hasten the arrival of core spawn to the Material Plane, focusing their arcane power on areas of natural seismic instability when the signs and stars are right.
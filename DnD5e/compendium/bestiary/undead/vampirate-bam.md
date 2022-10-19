---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/undead
aliases: ["Vampirate"]
statblock: true
"name": "Vampirate"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "12"
- !!int "14"
- !!int "18"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the vampirate is reduced to 0 hit points, it explodes in a cloud of\
    \ ash. Any creature within 5 feet of it must succeed on a DC 14 Constitution saving\
    \ throw or take 5 (1d10) necrotic damage."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampirate can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampirate doesn't require air or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 11 (2d10) necrotic damage. A Humanoid reduced to 0 hit points\
    \ by this attack dies and instantly transforms into a free-willed shadow under\
    \ the DM's control."
  "name": "Energy Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 11\
    \ (2d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "BAM"
- "LoX"
name: Vampirate
image: "[[Vampirate.png]]"
---

# Vampirate

```statblock
"name": "Vampirate"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "12"
- !!int "14"
- !!int "18"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the vampirate is reduced to 0 hit points, it explodes in a cloud of\
    \ ash. Any creature within 5 feet of it must succeed on a DC 14 Constitution saving\
    \ throw or take 5 (1d10) necrotic damage."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampirate can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampirate doesn't require air or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 11 (2d10) necrotic damage. A Humanoid reduced to 0 hit points\
    \ by this attack dies and instantly transforms into a free-willed shadow under\
    \ the DM's control."
  "name": "Energy Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 11\
    \ (2d8 + 2) piercing damage."
  "name": "Light Crossbow"
"source":
- "BAM"
- "LoX"
"image": "[[Vampirate.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 62, Light of Xaryxis*

## Description

Vampirates are the walking, talking husks of dead pirates who refused to go quietly into the afterlife. They ply the void in their ships, plundering unsuspecting vessels and feeding on the life energy of those unlucky enough to cross their path.

A vampirate appears as a gaunt figure with milky-white eyes and skin as dry as parchment. Some have a peg leg or a hook in place of a hand—mementos of a life of misadventure. A vampirate has fangs like a vampire's but doesn't use them to draw vital fluids from prey, which vampirates consider an unsavory act. Rather, a vampirate drains life energy from another creature by touching it or by siphoning off its energy from a short distance away. As it feeds on the energy of other creatures, its appearance becomes more robust, although it never truly looks alive.

Vampirates eat, drink, and sleep because they like to, not because they must. They rest in wooden coffins or crates full of grave dirt. In the absence of such containers, they can treat their ship's hold as one big coffin and sleep amid their cargo. When they're not sleeping or marauding, a crew of vampirates whiles away the hours by drinking rum and singing grim chanteys.

A ship crewed by vampirates usually has one or more shadows aboard—the Undead remains of some of the vampirates' victims.
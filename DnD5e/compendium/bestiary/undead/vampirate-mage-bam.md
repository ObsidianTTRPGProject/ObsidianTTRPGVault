---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/undead
aliases: ["Vampirate Mage"]
statblock: true
"name": "Vampirate Mage"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"stats":
- !!int "12"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1/day: [darkness](/compendium/spells/darkness.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [fly](/compendium/spells/fly.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mage is reduced to 0 hit points, it explodes in a cloud of ash.\
    \ Any creature within 5 feet of it must succeed on a DC 14 Constitution saving\
    \ throw or take 11 (2d10) necrotic damage."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage doesn't require air or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage makes two Ray of Cold attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 22 (4d10) necrotic damage. A Humanoid reduced to 0 hit points\
    \ by this attack dies and instantly transforms into a free-willed shadow under\
    \ the DM's control."
  "name": "Energy Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 11 (2d8\
    \ + 2) cold damage."
  "name": "Ray of Cold"
"source":
- "BAM"
- "LoX"
name: Vampirate Mage
image: "[[Vampirate Mage.png]]"
---

# Vampirate Mage

```statblock
"name": "Vampirate Mage"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"stats":
- !!int "12"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1/day: [darkness](/compendium/spells/darkness.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [fly](/compendium/spells/fly.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mage is reduced to 0 hit points, it explodes in a cloud of ash.\
    \ Any creature within 5 feet of it must succeed on a DC 14 Constitution saving\
    \ throw or take 11 (2d10) necrotic damage."
  "name": "Explode"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage doesn't require air or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage makes two Ray of Cold attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 22 (4d10) necrotic damage. A Humanoid reduced to 0 hit points\
    \ by this attack dies and instantly transforms into a free-willed shadow under\
    \ the DM's control."
  "name": "Energy Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 11 (2d8\
    \ + 2) cold damage."
  "name": "Ray of Cold"
"source":
- "BAM"
- "LoX"
"image": "[[Vampirate Mage.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 63, Light of Xaryxis*

## Description

A ship of vampirates needs a spellcaster to operate the spelljamming helm. A vampirate mage rarely, if ever, leaves the helm.
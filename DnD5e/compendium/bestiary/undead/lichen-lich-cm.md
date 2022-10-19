---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/undead
aliases: ["Lichen Lich"]
statblock: true
"name": "Lichen Lich"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "225"
"hit_dice": "30d8 + 90"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "20"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "11"
  "Intelligence": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Medicine": !!int "11"
  "Nature": !!int "14"
  "Perception": !!int "11"
  "Survival": !!int "11"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Common, Druidic, Sylvan"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich casts one of the following spells using Wisdom as the spellcasting\
    \ ability (save DC 19):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\
    \n1/day each: [antilife shell](/compendium/spells/antilife-shell.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [speak with plants](/compendium/spells/speak-with-plants.md),\
    \ [transport via plants](/compendium/spells/transport-via-plants.md), \n\n3/day\
    \ each: [detect magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich makes four attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 17 (5d6)\
    \ poison damage, and the target must succeed on a DC 19 Constitution saving throw\
    \ or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Poisonous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 60 ft., one target. Hit: 14 (4d6)\
    \ necrotic damage."
  "name": "Wither"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich fills up to ten 10-foot cubes with fire. Every cube must be within\
    \ 150 feet of the lich and occupy a space the lich can see, and each cube must\
    \ have at least one face adjacent to the face of another cube. Each creature in\
    \ the area must make a DC 19 Dexterity saving throw, taking 38 (7d10) fire damage\
    \ on a failed save, or half as much damage on a successful one. The fire ignites\
    \ flammable objects in the area that aren't being worn or carried. If the lich\
    \ chooses, plant life in the area is unaffected by the spell."
  "name": "Fire Storm (7th-Level Spell; 1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich makes an attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich targets one [poisoned](/rules/conditions.md#poisoned) creature\
    \ it can see within 30 feet of it. The target must succeed on a DC 19 Constitution\
    \ saving throw or fall [unconscious](/rules/conditions.md#unconscious) until the\
    \ [poisoned](/rules/conditions.md#poisoned) condition ends on it."
  "name": "Poison Prick (Cost 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 19 Constitution saving throw or take 11 (2d10) necrotic\
    \ damage. The lich regains a number of hit points equal to the amount of damage\
    \ that the creature takes."
  "name": "Sap Life (Costs 2 Actions)"
"source":
- "CM"
name: Lichen Lich
image: "[[Lichen Lich.png]]"
---

# Lichen Lich

```statblock
"name": "Lichen Lich"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "225"
"hit_dice": "30d8 + 90"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "20"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "11"
  "Intelligence": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Medicine": !!int "11"
  "Nature": !!int "14"
  "Perception": !!int "11"
  "Survival": !!int "11"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Common, Druidic, Sylvan"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich casts one of the following spells using Wisdom as the spellcasting\
    \ ability (save DC 19):\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\
    \n1/day each: [antilife shell](/compendium/spells/antilife-shell.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [speak with plants](/compendium/spells/speak-with-plants.md),\
    \ [transport via plants](/compendium/spells/transport-via-plants.md), \n\n3/day\
    \ each: [detect magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich makes four attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 17 (5d6)\
    \ poison damage, and the target must succeed on a DC 19 Constitution saving throw\
    \ or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Poisonous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +9 to hit, range 60 ft., one target. Hit: 14 (4d6)\
    \ necrotic damage."
  "name": "Wither"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich fills up to ten 10-foot cubes with fire. Every cube must be within\
    \ 150 feet of the lich and occupy a space the lich can see, and each cube must\
    \ have at least one face adjacent to the face of another cube. Each creature in\
    \ the area must make a DC 19 Dexterity saving throw, taking 38 (7d10) fire damage\
    \ on a failed save, or half as much damage on a successful one. The fire ignites\
    \ flammable objects in the area that aren't being worn or carried. If the lich\
    \ chooses, plant life in the area is unaffected by the spell."
  "name": "Fire Storm (7th-Level Spell; 1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich makes an attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich targets one [poisoned](/rules/conditions.md#poisoned) creature\
    \ it can see within 30 feet of it. The target must succeed on a DC 19 Constitution\
    \ saving throw or fall [unconscious](/rules/conditions.md#unconscious) until the\
    \ [poisoned](/rules/conditions.md#poisoned) condition ends on it."
  "name": "Poison Prick (Cost 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich targets one creature it can see within 30 feet of it. The target\
    \ must succeed on a DC 19 Constitution saving throw or take 11 (2d10) necrotic\
    \ damage. The lich regains a number of hit points equal to the amount of damage\
    \ that the creature takes."
  "name": "Sap Life (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Lichen Lich.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 223*

## Description

Lichen liches are undead remnants of powerful druids.

A lichen lich looks like a skeleton covered with fungi and bark-like lichen. A lichen lich has vines within its chest cavity. These vines exude viscid and poisonous black fluid.
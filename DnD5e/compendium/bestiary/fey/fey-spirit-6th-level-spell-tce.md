---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/small
- monster/type/fey
aliases: ["Fey Spirit (6th-level Spell)"]
statblock: true
"name": "Fey Spirit (6th-level Spell)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "60"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "16"
"speed": "walk 40 ft."
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel piercing damage + 1d6 force\
    \ damage."
  "name": "Shortsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
    \ see. Then one of the following effects occurs, based on the fey's chosen mood:\n\
    \n- Fuming. The fey has advantage on the next attack roll it makes before\
    \ the end of this turn.\n- Mirthful. The fey can force one creature it can\
    \ see within 10 feet of it to make a Wisdom saving throw against your spell save\
    \ DC. Unless the save succeeds, the target is [charmed](/rules/conditions.md#charmed)\
    \ by you and the fey for 1 minute or until the target takes any damage.\n- Tricksy.\
    \ The fey can fill a 5-foot cube within 5 feet of it with magical darkness, which\
    \ lasts until the end of its next turn."
  "name": "Fey Step"
"source":
- "TCE"
name: Fey Spirit (6th-level Spell)
image: "[[Fey Spirit (6th-level Spell).png]]"
---

# Fey Spirit (6th-level Spell)

```statblock
"name": "Fey Spirit (6th-level Spell)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "60"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "16"
"speed": "walk 40 ft."
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 3 + summonSpellLevel piercing damage + 1d6 force\
    \ damage."
  "name": "Shortsword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
    \ see. Then one of the following effects occurs, based on the fey's chosen mood:\n\
    \n- Fuming. The fey has advantage on the next attack roll it makes before\
    \ the end of this turn.\n- Mirthful. The fey can force one creature it can\
    \ see within 10 feet of it to make a Wisdom saving throw against your spell save\
    \ DC. Unless the save succeeds, the target is [charmed](/rules/conditions.md#charmed)\
    \ by you and the fey for 1 minute or until the target takes any damage.\n- Tricksy.\
    \ The fey can fill a 5-foot cube within 5 feet of it with magical darkness, which\
    \ lasts until the end of its next turn."
  "name": "Fey Step"
"source":
- "TCE"
"image": "[[Fey Spirit (6th-level Spell).png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 112*
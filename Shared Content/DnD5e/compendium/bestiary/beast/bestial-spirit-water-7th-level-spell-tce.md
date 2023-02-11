---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/small
- monster/type/beast
aliases: ["Bestial Spirit (Water, 7th-Level Spell)"]
statblock: true
"name": "Bestial Spirit (Water, 7th-Level Spell)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "55"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft. (land only), fly 60 ft. (air only), swim 30 ft.\
  \ (water only)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast can breathe only underwater."
  "name": "Water Breathing (Water Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby (Air Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast has advantage on an attack roll against a creature if at least\
    \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics (Land and Water Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel piercing damage."
  "name": "Maul"
"source":
- "TCE"
name: Bestial Spirit (Water, 7th-Level Spell)
image: "[[Bestial Spirit (Water, 7th-Level Spell).png]]"
---

# Bestial Spirit (Water, 7th-Level Spell)

```statblock
"name": "Bestial Spirit (Water, 7th-Level Spell)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "55"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft. (land only), fly 60 ft. (air only), swim 30 ft.\
  \ (water only)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast can breathe only underwater."
  "name": "Water Breathing (Water Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby (Air Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast has advantage on an attack roll against a creature if at least\
    \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics (Land and Water Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beast makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel piercing damage."
  "name": "Maul"
"source":
- "TCE"
"image": "[[Bestial Spirit (Water, 7th-Level Spell).png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 109*
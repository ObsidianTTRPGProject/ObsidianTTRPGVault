---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/large
- monster/type/celestial
aliases: ["Celestial Spirit (6th-level Spell)"]
statblock: true
"name": "Celestial Spirit (6th-level Spell)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "50"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, understands the languages you speak"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The celestial makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 150/600 ft., one target. Hit: 2d6 + 2 + summonSpellLevel radiant damage."
  "name": "Radiant Bow (Avenger Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 3 + summonSpellLevel radiant damage, and the\
    \ celestial can choose itself or another creature it can see within 10 feet of\
    \ the target. The chosen creature gains 1d10 temporary hit points."
  "name": "Radiant Mace (Defender Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The celestial touches another creature. The target magically regains hit\
    \ points equal to 2d8 + summonSpellLevel."
  "name": "Healing Touch (1/Day)"
"source":
- "TCE"
name: Celestial Spirit (6th-level Spell)
image: "[[Celestial Spirit (6th-level Spell).png]]"
---

# Celestial Spirit (6th-level Spell)

```statblock
"name": "Celestial Spirit (6th-level Spell)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "50"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, understands the languages you speak"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The celestial makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 150/600 ft., one target. Hit: 2d6 + 2 + summonSpellLevel radiant damage."
  "name": "Radiant Bow (Avenger Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 3 + summonSpellLevel radiant damage, and the\
    \ celestial can choose itself or another creature it can see within 10 feet of\
    \ the target. The chosen creature gains 1d10 temporary hit points."
  "name": "Radiant Mace (Defender Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The celestial touches another creature. The target magically regains hit\
    \ points equal to 2d8 + summonSpellLevel."
  "name": "Healing Touch (1/Day)"
"source":
- "TCE"
"image": "[[Celestial Spirit (6th-level Spell).png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 110*
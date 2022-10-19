---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/large
- monster/type/fiend
aliases: ["Abhorrent Overlord"]
statblock: true
"name": "Abhorrent Overlord"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "20"
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Deception": !!int "7"
  "Persuasion": !!int "7"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord's spellcasting ability is Charisma (spell save DC\
    \ 15). It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [confusion](/compendium/spells/confusion.md), [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord can sense the presence of gold within 1,000 feet\
    \ of itself. It can determine which location has the greatest amount of gold and\
    \ can sense the direction to that site. If the gold is being moved, it knows the\
    \ direction of the movement. It can't locate gold if any thickness of clay or\
    \ lead, even a thin sheet, blocks a direct path between it and the gold."
  "name": "Insatiable Greed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage plus 14 (4d6) necrotic damage. The abhorrent overlord regains\
    \ hit points equal to half the amount of necrotic damage dealt if the target is\
    \ a creature."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord conjures a swarm of spectral crows and harpies in\
    \ a 20-foot-radius sphere centered on a point the overlord can see within 120\
    \ feet of it. The sphere remains for 1 minute or until the overlord loses concentration\
    \ (as if concentrating on a spell), and its area is lightly obscured and difficult\
    \ terrain.\n\nAny creature that moves into the area for the first time on a turn\
    \ or starts its turn there must make a DC 15 Constitution saving throw. A creature\
    \ takes 16 (3d10) slashing damage plus 16 (3d10) psychic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Storm of Crows (Recharge 6)"
"source":
- "MOT"
name: Abhorrent Overlord
image: "[[Abhorrent Overlord.png]]"
---

# Abhorrent Overlord

```statblock
"name": "Abhorrent Overlord"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "20"
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Deception": !!int "7"
  "Persuasion": !!int "7"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord's spellcasting ability is Charisma (spell save DC\
    \ 15). It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [confusion](/compendium/spells/confusion.md), [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord can sense the presence of gold within 1,000 feet\
    \ of itself. It can determine which location has the greatest amount of gold and\
    \ can sense the direction to that site. If the gold is being moved, it knows the\
    \ direction of the movement. It can't locate gold if any thickness of clay or\
    \ lead, even a thin sheet, blocks a direct path between it and the gold."
  "name": "Insatiable Greed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage plus 14 (4d6) necrotic damage. The abhorrent overlord regains\
    \ hit points equal to half the amount of necrotic damage dealt if the target is\
    \ a creature."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abhorrent overlord conjures a swarm of spectral crows and harpies in\
    \ a 20-foot-radius sphere centered on a point the overlord can see within 120\
    \ feet of it. The sphere remains for 1 minute or until the overlord loses concentration\
    \ (as if concentrating on a spell), and its area is lightly obscured and difficult\
    \ terrain.\n\nAny creature that moves into the area for the first time on a turn\
    \ or starts its turn there must make a DC 15 Constitution saving throw. A creature\
    \ takes 16 (3d10) slashing damage plus 16 (3d10) psychic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Storm of Crows (Recharge 6)"
"source":
- "MOT"
"image": "[[Abhorrent Overlord.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 219*

## Description

Abhorrent overlords are gaunt, bipedal creatures whose gray, leathery skin is in stark contrast to the gleaming jewelry made of Underworld gold that they adorn themselves with. Their appetite for pain and death is eclipsed only by their greed; these fiends delight in searching out treasure and slaughtering all who stand in their way.
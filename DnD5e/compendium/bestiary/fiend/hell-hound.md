---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fiend
- monster/environment/underdark
- monster/environment/mountain
aliases: ["Hell Hound"]
statblock: true
"name": "Hell Hound"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Infernal but can't speak it"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound has advantage on an attack roll against a creature if at least\
    \ one of the hound's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 7 (2d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound exhales fire in a 15-foot cone. Each creature in that area must\
    \ make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "SLW"
- "BGDIA"
- "IMR"
- "EGW"
- "MOT"
- "CM"
name: Hell Hound
image: "[[Hell Hound.png]]"
---

# Hell Hound

```statblock
"name": "Hell Hound"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Infernal but can't speak it"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound has advantage on an attack roll against a creature if at least\
    \ one of the hound's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 7 (2d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hound exhales fire in a 15-foot cone. Each creature in that area must\
    \ make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "SLW"
- "BGDIA"
- "IMR"
- "EGW"
- "MOT"
- "CM"
"image": "[[Hell Hound.png]]"
```
^statblock

*Source: Monster Manual p. 182, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries*

## Description

Monstrous, fire-breathing fiends that take the form of powerful dogs, hell hounds are found on the battlefields of Acheron and throughout the Lower Planes. On the Material Plane, hell hounds are most commonly seen in service to devils, fire giants, and other evil creatures that use them as guard animals and companions.

**Burning Hunger.** Hell hounds hunt in packs, feeding on any creature that appears edible. They avoid potentially dangerous foes in favor of targeting the weakest prey with their savage bite and fiery breath, demonstrating a relentless determination as they pursue that prey to the bitter end.

When hell hounds feed, the flesh they consume stokes the infernal fires that burn within them. When a hell hound dies, that fire consumes the creature's remains in a billowing eruption of smoke and blazing embers, leaving nothing behind but scorched tufts of black fur.

**Evil to the Core.** Hell hounds are smarter than mundane beasts, and their lawful nature makes them good at following orders. However, a hell hound's evil disposition means that the creature can't be trained to be anything other than a ruthless killer. If a hell hound isn't allowed to indulge its malevolent hunger, it quickly abandons or turns against its master.

## Environment

underdark, mountain
---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/celestial
aliases: ["Archon of Falling Stars"]
statblock: true
"name": "Archon of Falling Stars"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_immunities": "radiant"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "all"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's spellcasting ability is Wisdom (spell save DC 17, +9 to hit\
    \ with spell attacks). The archon can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [command](/compendium/spells/command.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1/day each: [crusader's mantle](/compendium/spells/crusaders-mantle.md),\
    \ [spirit guardians](/compendium/spells/spirit-guardians.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it can use a bonus action to magically teleport\
    \ onto the creature serving as its mount, provided the archon and its mount are\
    \ on the same plane of existence. When it teleports, the archon appears astride\
    \ the mount, along with any equipment it is wearing or carrying. While mounted\
    \ and not [incapacitated](/rules/conditions.md#incapacitated), the archon can't\
    \ be surprised, and both it and its mount have advantage on Dexterity saving throws.\
    \ If the archon is reduced to 0 hit points while riding its mount, the mount is\
    \ reduced to 0 hit points as well."
  "name": "Mount"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon is reduced to 0 hit points, it regains 30 hit points and\
    \ springs back to its feet with a burst of radiance. Each creature of the archon's\
    \ choice within 30 feet of it must succeed on a DC 16 Constitution saving throw,\
    \ or the creature takes 13 (3d8) radiant damage and is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the archon's turn."
  "name": "Radiant Rebirth (Recharges after a Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two attacks with its radiant spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 10 (3d6) radiant damage."
  "name": "Radiant Spear"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a radiant spear attack or casts [guiding bolt](/compendium/spells/guiding-bolt.md)."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a radiant spear attack, and then its mount can use its\
    \ reaction to make a melee weapon attack."
  "name": "Coordinated Assault (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon causes a corpse it can see within 30 feet of it to burst into\
    \ a shower of radiant stars leaving no trace of it behind. Everything it is wearing\
    \ or carrying remains. Each creature within 10 feet of the corpse when it bursts\
    \ must succeed on a DC 16 Dexterity saving throw or take 22 (4d10) radiant damage."
  "name": "Return to Nyx (Costs 3 Actions)"
"source":
- "MOT"
name: Archon of Falling Stars
image: "[[Archon of Falling Stars.png]]"
---

# Archon of Falling Stars

```statblock
"name": "Archon of Falling Stars"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_immunities": "radiant"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "all"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's spellcasting ability is Wisdom (spell save DC 17, +9 to hit\
    \ with spell attacks). The archon can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [command](/compendium/spells/command.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1/day each: [crusader's mantle](/compendium/spells/crusaders-mantle.md),\
    \ [spirit guardians](/compendium/spells/spirit-guardians.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it can use a bonus action to magically teleport\
    \ onto the creature serving as its mount, provided the archon and its mount are\
    \ on the same plane of existence. When it teleports, the archon appears astride\
    \ the mount, along with any equipment it is wearing or carrying. While mounted\
    \ and not [incapacitated](/rules/conditions.md#incapacitated), the archon can't\
    \ be surprised, and both it and its mount have advantage on Dexterity saving throws.\
    \ If the archon is reduced to 0 hit points while riding its mount, the mount is\
    \ reduced to 0 hit points as well."
  "name": "Mount"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon is reduced to 0 hit points, it regains 30 hit points and\
    \ springs back to its feet with a burst of radiance. Each creature of the archon's\
    \ choice within 30 feet of it must succeed on a DC 16 Constitution saving throw,\
    \ or the creature takes 13 (3d8) radiant damage and is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the archon's turn."
  "name": "Radiant Rebirth (Recharges after a Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two attacks with its radiant spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage plus 10 (3d6) radiant damage."
  "name": "Radiant Spear"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a radiant spear attack or casts [guiding bolt](/compendium/spells/guiding-bolt.md)."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a radiant spear attack, and then its mount can use its\
    \ reaction to make a melee weapon attack."
  "name": "Coordinated Assault (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon causes a corpse it can see within 30 feet of it to burst into\
    \ a shower of radiant stars leaving no trace of it behind. Everything it is wearing\
    \ or carrying remains. Each creature within 10 feet of the corpse when it bursts\
    \ must succeed on a DC 16 Dexterity saving throw or take 22 (4d10) radiant damage."
  "name": "Return to Nyx (Costs 3 Actions)"
"source":
- "MOT"
"image": "[[Archon of Falling Stars.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 212*

## Description

The epic accounting of the world's earliest histories called _The Cosmogony_ recounts the battle between a group of the gods' champions and a mighty archon, which took place at the mysterious eastern edge of the world. Defeated, the falling archon is said to have met the rising sun. But Heliod showed mercy to the penitent archon, who swore to uphold justice and righteousness in the world's wildest places. As a sign of his mercy, Heliod gave the archon a spear that rivaled his own in its brilliance. This was the first archon of falling stars.

The mysterious conquerors known as archons once ruled vast empires. These armored warlords saw themselves as champions of merciless justice, and they ruled with iron fists. But their dominance ultimately came to an end. As the archon overlords toppled, they scattered to the fringes of the world, and their holdings developed into the poleis of today.

Even though the age of archons is long past, many wonder if the few surviving archons might someday attempt to reestablish their empire or if they are truly resigned to their lesser role in the world.
---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/aberration
aliases: ["Light Devourer"]
statblock: true
"name": "Light Devourer"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 0 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "3"
"damage_immunities": "radiant"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the light devourer spends any part of its turn in an area of bright\
    \ light or is subjected to radiant damage, it radiates dim light in a 10-foot\
    \ radius for 1 hour."
  "name": "Light Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The light devourer can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The light devourer makes two Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (5d6\
    \ + 4) piercing damage, or radiant damage if the light devourer is radiating light\
    \ (see Light Absorption)."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the light devourer is radiating light (see Light Absorption), it releases\
    \ the light stored in its body in a 20-foot-radius sphere centered on itself,\
    \ then ceases to radiate light. Each creature in the sphere must make a DC 15\
    \ Constitution saving throw, taking 24 (7d6) radiant damage on a failed saving\
    \ throw, or half as much damage on a successful one."
  "name": "Radiant Discharge"
"source":
- "CRCotN"
name: Light Devourer
image: "[[Light Devourer.png]]"
---

# Light Devourer

```statblock
"name": "Light Devourer"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 0 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "3"
"damage_immunities": "radiant"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the light devourer spends any part of its turn in an area of bright\
    \ light or is subjected to radiant damage, it radiates dim light in a 10-foot\
    \ radius for 1 hour."
  "name": "Light Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The light devourer can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The light devourer makes two Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (5d6\
    \ + 4) piercing damage, or radiant damage if the light devourer is radiating light\
    \ (see Light Absorption)."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the light devourer is radiating light (see Light Absorption), it releases\
    \ the light stored in its body in a 20-foot-radius sphere centered on itself,\
    \ then ceases to radiate light. Each creature in the sphere must make a DC 15\
    \ Constitution saving throw, taking 24 (7d6) radiant damage on a failed saving\
    \ throw, or half as much damage on a successful one."
  "name": "Radiant Discharge"
"source":
- "CRCotN"
"image": "[[Light Devourer.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 200*

## Description

The light devourer gets its name from its ability to absorb bright light, whether natural or magical, in its immediate environment. After doing so, the creature begins to glow, the spines lining its back and the numerous needle-like teeth in its maw burning brightly as it converts that stolen light into searing energy, which rips into its prey.

When not illuminated, the light devourer lurks in darkness, stalking the ocean depths for its next meal.
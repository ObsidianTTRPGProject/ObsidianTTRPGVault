---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
- monster/environment/coastal
- monster/environment/underwater
aliases: ["Mirran"]
statblock: true
"name": "Mirran"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Deception": !!int "9"
  "Perception": !!int "9"
  "History": !!int "8"
  "Performance": !!int "9"
  "Arcana": !!int "8"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran's innate spellcasting ability is Charisma (spell save DC 17). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect magic](/compendium/spells/detect-magic.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [levitate](/compendium/spells/levitate.md), [light](/compendium/spells/light.md)\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "SKT"
name: Mirran
image: "[[Mirran.png]]"
---

# Mirran

```statblock
"name": "Mirran"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Deception": !!int "9"
  "Perception": !!int "9"
  "History": !!int "8"
  "Performance": !!int "9"
  "Arcana": !!int "8"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran's innate spellcasting ability is Charisma (spell save DC 17). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect magic](/compendium/spells/detect-magic.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [levitate](/compendium/spells/levitate.md), [light](/compendium/spells/light.md)\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mirran hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "SKT"
"image": "[[Mirran.png]]"
```
^statblock

*Source: Storm King's Thunder p. 207*

## Environment

coastal, underwater
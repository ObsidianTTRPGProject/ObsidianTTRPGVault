---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Storm Giant"]
---
# [Storm Giant](3-Mechanics\CLI\bestiary\giant/storm-giant.md)
*Source: Monster Manual p. 156. Available in the SRD.*  

```statblock
"name": "Storm Giant"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"ac_class": "[scale mail](/3-Mechanics/CLI/items/scale-mail.md)"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Perception": !!int "9"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- "desc": "The giant's innate spellcasting ability is Charisma (spell save DC 17).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md), [feather\
    \ fall](/3-Mechanics/CLI/spells/feather-fall.md), [levitate](/3-Mechanics/CLI/spells/levitate.md),\
    \ [light](/3-Mechanics/CLI/spells/light.md)\n\n3/day each: [control weather](/3-Mechanics/CLI/spells/control-weather.md),\
    \ [water breathing](/3-Mechanics/CLI/spells/water-breathing.md)"
  "name": "innate"
- "desc": "The giant can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "The giant makes two greatsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14) to hit, reach 10 ft., one\
    \ target. Hit: dice:6d6 + 9|text(30) (6d6 + 9) slashing damage."
  "name": "Greatsword"
- "desc": "Ranged Weapon Attack: dice: d20+14 (+14) to hit, range 60/240 ft.,\
    \ one target. Hit: dice:4d12 + 9|text(35) (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- "desc": "The giant hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking dice:12d8|text(54) (12d8) lightning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "MM"
- "SKT"
- "TftYP"
- "GoS"
- "MOT"
- "JttRC"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/giant/token/storm-giant.webp"
```
^statblock

## Environment

coastal, underwater
---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Lamia"]
---
# [Lamia](3-Mechanics\CLI\bestiary\monstrosity/lamia.md)
*Source: Monster Manual p. 201. Available in the SRD.*  

```statblock
"name": "Lamia"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"stats":
- !!int "16"
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "7"
  "Stealth": !!int "3"
  "Insight": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "4"
"traits":
- "desc": "The lamia's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components.\n\
    \nAt will: [disguise self](/3-Mechanics/CLI/spells/disguise-self.md) (any\
    \ humanoid form), [major image](/3-Mechanics/CLI/spells/major-image.md)\n\n1/day:\
    \ [geas](/3-Mechanics/CLI/spells/geas.md)\n\n3/day each: [charm person](/3-Mechanics/CLI/spells/charm-person.md),\
    \ [mirror image](/3-Mechanics/CLI/spells/mirror-image.md), [scrying](/3-Mechanics/CLI/spells/scrying.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "innate"
"actions":
- "desc": "The lamia makes two attacks: one with its claws and one with its dagger\
    \ or Intoxicating Touch."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d10 + 3|text(14) (2d10 + 3) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 3|text(5) (1d4 + 3) piercing damage."
  "name": "Dagger"
- "desc": "Melee Spell Attack: dice: d20+5 (+5) to hit, reach 5 ft., one creature.\
    \ Hit: The target is magically cursed for 1 hour. Until the curse ends, the\
    \ target has disadvantage on Wisdom saving throws and all ability checks."
  "name": "Intoxicating Touch"
"source":
- "MM"
- "GoS"
- "MOT"
- "CM"
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/lamia.webp"
```
^statblock

## Environment

desert
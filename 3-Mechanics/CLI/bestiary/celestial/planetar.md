---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Planetar"]
---
# [Planetar](3-Mechanics\CLI\bestiary\celestial/planetar.md)
*Source: Monster Manual p. 17. Available in the SRD.*  

```statblock
"name": "Planetar"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "24"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "22"
- !!int "25"
"speed": "40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "The planetar's spellcasting ability is Charisma (spell save DC 20). The\
    \ planetar can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (self only)\n\n1/day\
    \ each: [commune](/3-Mechanics/CLI/spells/commune.md), [control weather](/3-Mechanics/CLI/spells/control-weather.md),\
    \ [insect plague](/3-Mechanics/CLI/spells/insect-plague.md)\n\n3/day each:\
    \ [blade barrier](/3-Mechanics/CLI/spells/blade-barrier.md), [dispel evil and\
    \ good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md), [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [raise dead](/3-Mechanics/CLI/spells/raise-dead.md)"
  "name": "innate"
- "desc": "The planetar's weapon attacks are magical. When the planetar hits with\
    \ any weapon, the weapon deals an extra dice: 5d8|avg|noform (5d8) radiant\
    \ damage (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "The planetar knows if it hears a lie."
  "name": "Divine Awareness"
- "desc": "The planetar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The planetar makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 5 ft., one\
    \ target. Hit: dice:4d6 + 7|text(21) (4d6 + 7) slashing damage plus dice:5d8|text(22)\
    \ (5d8) radiant damage."
  "name": "Greatsword"
- "desc": "The planetar touches another creature. The target magically regains dice:6d8\
    \ + 3|text(30) (6d8 + 3) hit points and is freed from any curse, disease, poison,\
    \ blindness, or deafness."
  "name": "Healing Touch (4/Day)"
"source":
- "MM"
- "BGDIA"
- "CRCotN"
- "JttRC"
- "AATM"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/planetar.webp"
```
^statblock
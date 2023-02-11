---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/celestial
aliases: ["Archon Of Redemption"]
statblock: true
"name": "Archon Of Redemption"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The archon can innately cast the following spells, requiring only verbal components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day each: [destructive wave](/compendium/spells/destructive-wave.md),\
    \ [geas](/compendium/spells/geas.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's weapon attacks are magical. When the archon hits with any\
    \ weapon, the weapon deals an extra 3d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon can't be compelled to act in a manner contrary to its nature\
    \ or its understanding of justice."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Though it appears as a humanoid creature riding a mount, an archon is a\
    \ single being. The \"rider\" can't be dismounted, and no other means can separate\
    \ the two portions of the archon's being short of its death."
  "name": "One Being"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two attacks: one with its sword and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage plus 13 (3d8) radiant damage."
  "name": "Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 13 (3d8) radiant damage."
  "name": "Claws"
"source":
- "PSZ"
name: Archon Of Redemption
image: "[[Archon Of Redemption.png]]"
---

# Archon Of Redemption

```statblock
"name": "Archon Of Redemption"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The archon can innately cast the following spells, requiring only verbal components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day each: [destructive wave](/compendium/spells/destructive-wave.md),\
    \ [geas](/compendium/spells/geas.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's weapon attacks are magical. When the archon hits with any\
    \ weapon, the weapon deals an extra 3d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon can't be compelled to act in a manner contrary to its nature\
    \ or its understanding of justice."
  "name": "Axiomatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Though it appears as a humanoid creature riding a mount, an archon is a\
    \ single being. The \"rider\" can't be dismounted, and no other means can separate\
    \ the two portions of the archon's being short of its death."
  "name": "One Being"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two attacks: one with its sword and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage plus 13 (3d8) radiant damage."
  "name": "Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 13 (3d8) radiant damage."
  "name": "Claws"
"source":
- "PSZ"
"image": "[[Archon Of Redemption.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 22*
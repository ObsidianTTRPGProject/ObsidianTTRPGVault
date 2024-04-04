---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Solar"]
---
# [Solar](3-Mechanics\CLI\bestiary\celestial/solar.md)
*Source: Monster Manual p. 18. Available in the SRD.*  

```statblock
"name": "Solar"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "26"
- !!int "22"
- !!int "26"
- !!int "25"
- !!int "25"
- !!int "30"
"speed": "50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "17"
  "Wisdom": !!int "14"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "The solar's spellcasting ability is Charisma (spell save DC 25). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (self only)\n\n1/day\
    \ each: [commune](/3-Mechanics/CLI/spells/commune.md), [control weather](/3-Mechanics/CLI/spells/control-weather.md)\n\
    \n3/day each: [blade barrier](/3-Mechanics/CLI/spells/blade-barrier.md), [dispel\
    \ evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md), [resurrection](/3-Mechanics/CLI/spells/resurrection.md)"
  "name": "innate"
- "desc": "The solar's weapon attacks are magical. When the solar hits with any weapon,\
    \ the weapon deals an extra dice: 6d8|avg|noform (6d8) radiant damage (included\
    \ in the attack)."
  "name": "Angelic Weapons"
- "desc": "The solar knows if it hears a lie."
  "name": "Divine Awareness"
- "desc": "The solar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The solar makes two greatsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 5 ft., one\
    \ target. Hit: dice:4d6 + 8|text(22) (4d6 + 8) slashing damage plus dice:6d8|text(27)\
    \ (6d8) radiant damage."
  "name": "Greatsword"
- "desc": "Ranged Weapon Attack: dice: d20+13 (+13) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:2d8 + 6|text(15) (2d8 + 6) piercing damage plus\
    \ dice:6d8|text(27) (6d8) radiant damage. If the target is a creature that\
    \ has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving\
    \ throw or die."
  "name": "Slaying Longbow"
- "desc": "The solar releases its greatsword to hover magically in an unoccupied space\
    \ within 5 feet of it. If the solar can see the sword, the solar can mentally\
    \ command it as a bonus action to fly up to 50 feet and either make one attack\
    \ against a target or return to the solar's hands. If the hovering sword is targeted\
    \ by any effect, the solar is considered to be holding it. The hovering sword\
    \ falls if the solar dies."
  "name": "Flying Sword"
- "desc": "The solar touches another creature. The target magically regains dice:8d8\
    \ + 4|text(40) (8d8 + 4) hit points and is freed from any curse, disease, poison,\
    \ blindness, or deafness."
  "name": "Healing Touch (4/Day)"
"legendary_actions":
- "desc": "The solar magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
- "desc": "The solar emits magical, divine energy. Each creature of its choice in\
    \ a 10-foot radius must make a DC 23 Dexterity saving throw, taking dice:4d6|text(14)\
    \ (4d6) fire damage plus dice:4d6|text(14) (4d6) radiant damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Searing Burst (Costs 2 Actions)"
- "desc": "The solar targets one creature it can see within 30 feet of it. If the\
    \ target can see it, the target must succeed on a DC 15 Constitution saving throw\
    \ or be [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) until magic such\
    \ as the [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md) spell\
    \ removes the blindness."
  "name": "Blinding Gaze (Costs 3 Actions)"
"source":
- "MM"
- "BGDIA"
- "CM"
- "CRCotN"
- "JttRC"
- "SatO"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/solar.webp"
```
^statblock
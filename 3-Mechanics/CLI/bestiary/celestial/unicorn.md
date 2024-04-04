---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Unicorn"]
---
# [Unicorn](3-Mechanics\CLI\bestiary\celestial/unicorn.md)
*Source: Monster Manual p. 294. Available in the SRD.*  

```statblock
"name": "Unicorn"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "17"
- !!int "16"
"speed": "50 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, Elvish, Sylvan, telepathy 60 ft."
"cr": "5"
"traits":
- "desc": "The unicorn's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The unicorn can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [druidcraft](/3-Mechanics/CLI/spells/druidcraft.md), [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md)\n\
    \n1/day each: [calm emotions](/3-Mechanics/CLI/spells/calm-emotions.md), [dispel\
    \ evil and good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md), [entangle](/3-Mechanics/CLI/spells/entangle.md)"
  "name": "innate"
- "desc": "If the unicorn moves at least 20 feet straight toward a target and then\
    \ hits it with a horn attack on the same turn, the target takes an extra dice:2d8|text(9)\
    \ (2d8) piercing damage. If the target is a creature, it must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge"
- "desc": "The unicorn has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The unicorn's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The unicorn makes two attacks: one with its hooves and one with its horn."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage."
  "name": "Hooves"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 4|text(8) (1d8 + 4) piercing damage."
  "name": "Horn"
- "desc": "The unicorn touches another creature with its horn. The target magically\
    \ regains dice:2d8 + 2|text(11) (2d8 + 2) hit points. In addition, the touch\
    \ removes all diseases and neutralizes all poisons afflicting the target."
  "name": "Healing Touch (3/Day)"
- "desc": "The unicorn magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the unicorn is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- "desc": "The unicorn makes one attack with its hooves."
  "name": "Hooves"
- "desc": "The unicorn creates a shimmering, magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the unicorn's next turn."
  "name": "Shimmering Shield (Costs 2 Actions)"
- "desc": "The unicorn magically regains dice:2d8 + 2|text(11) (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "MM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "TCE"
- "WBtW"
- "KftGV"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/unicorn.webp"
```
^statblock

## Environment

forest
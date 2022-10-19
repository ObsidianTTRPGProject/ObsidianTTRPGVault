---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/celestial
aliases: ["Felidar"]
statblock: true
"name": "Felidar"
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
"speed": "walk 50 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The felidar can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [light](/compendium/spells/light.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [daylight](/compendium/spells/daylight.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the felidar moves at least 20 feet straight toward a creature and then\
    \ hits it with a claws attack on the same turn, the target must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the felidar can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar touches another creature with its horns. The target magically\
    \ regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases\
    \ and neutralizes all poisons afflicting the target"
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the felidar is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar makes one attack with its claws."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar creates a shimmering magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the felidar's next turn."
  "name": "Shimmering Shield (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar magically regains 11 (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "PSZ"
name: Felidar
image: "[[Felidar.png]]"
---

# Felidar

```statblock
"name": "Felidar"
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
"speed": "walk 50 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The felidar can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [light](/compendium/spells/light.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [daylight](/compendium/spells/daylight.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the felidar moves at least 20 feet straight toward a creature and then\
    \ hits it with a claws attack on the same turn, the target must succeed on a DC\
    \ 15 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the felidar can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar touches another creature with its horns. The target magically\
    \ regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases\
    \ and neutralizes all poisons afflicting the target"
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the felidar is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar makes one attack with its claws."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar creates a shimmering magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the felidar's next turn."
  "name": "Shimmering Shield (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The felidar magically regains 11 (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "PSZ"
"image": "[[Felidar.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 23*
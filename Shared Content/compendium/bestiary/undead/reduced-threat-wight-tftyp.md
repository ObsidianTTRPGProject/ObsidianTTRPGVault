---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/swamp
- monster/environment/urban
- monster/environment/desert
aliases: ["Reduced-Threat Wight"]
statblock: true
"name": "Reduced-Threat Wight"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "1"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wight has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wight makes two longsword attacks or two longbow attacks. It can use\
    \ its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 11 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under the wight's control, unless the humanoid is restored to life or its body\
    \ is destroyed. The wight can have no more than twelve zombies under its control\
    \ at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "TftYP"
name: Reduced-Threat Wight
image: "[[Reduced-Threat Wight.png]]"
---

# Reduced-Threat Wight

```statblock
"name": "Reduced-Threat Wight"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "1"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the wight has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wight makes two longsword attacks or two longbow attacks. It can use\
    \ its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 11 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under the wight's control, unless the humanoid is restored to life or its body\
    \ is destroyed. The wight can have no more than twelve zombies under its control\
    \ at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "TftYP"
"image": "[[Reduced-Threat Wight.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark, swamp, urban, desert
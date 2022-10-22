---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
aliases: ["Hedrun Arnsfirth"]
statblock: true
"name": "Hedrun Arnsfirth"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "11"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Perception": !!int "4"
  "Arcana": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hedrun's innate spellcasting ability is Charisma (spell save DC 13). It\
    \ can innately cast the following spells, requiring no verbal or material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [mage armor](/compendium/spells/mage-armor.md)\n\n1/day each: [fear](/compendium/spells/fear.md),\
    \ [hold person](/compendium/spells/hold-person.md), [misty step](/compendium/spells/misty-step.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Hedrun has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hedrun attacks twice with Grave Bolt."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 7 (1d8\
    \ + 3) necrotic damage."
  "name": "Grave Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under Hedrun's control, unless the humanoid is restored to life or its body\
    \ is destroyed. Hedrun can have no more than twelve [zombies](/compendium/bestiary/undead/zombie.md)\
    \ under its control at one time."
  "name": "Life Drain"
"source":
- "TftYP"
name: Hedrun Arnsfirth
image: "[[Hedrun Arnsfirth.png]]"
---

# Hedrun Arnsfirth

```statblock
"name": "Hedrun Arnsfirth"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "11"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Perception": !!int "4"
  "Arcana": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hedrun's innate spellcasting ability is Charisma (spell save DC 13). It\
    \ can innately cast the following spells, requiring no verbal or material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [mage armor](/compendium/spells/mage-armor.md)\n\n1/day each: [fear](/compendium/spells/fear.md),\
    \ [hold person](/compendium/spells/hold-person.md), [misty step](/compendium/spells/misty-step.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Hedrun has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hedrun attacks twice with Grave Bolt."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 7 (1d8\
    \ + 3) necrotic damage."
  "name": "Grave Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under Hedrun's control, unless the humanoid is restored to life or its body\
    \ is destroyed. Hedrun can have no more than twelve [zombies](/compendium/bestiary/undead/zombie.md)\
    \ under its control at one time."
  "name": "Life Drain"
"source":
- "TftYP"
"image": "[[Hedrun Arnsfirth.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 160*
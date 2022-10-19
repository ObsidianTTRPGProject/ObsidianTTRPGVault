---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Doru"]
statblock: true
"name": "Doru"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Doru takes radiant damage\
    \ or damage from holy water, this trait doesn't function at the start of Doru's\
    \ next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru can climb difficult surfaces, including upside down on ceilings, without\
    \ needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru has the following flaws:\n\n_Forbiddance._ Doru can't enter a residence\
    \ without an invitation from one of the occupants.\n\n_Harmed by Running Water._\
    \ Doru takes 20 acid damage when it ends its turn in running water.\n\n_Stake\
    \ to the Heart._ Doru is destroyed if a piercing weapon made of wood is driven\
    \ into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n\n_Sunlight Hypersensitivity._ Doru takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by Doru, [incapacitated](/rules/conditions.md#incapacitated),\
    \ or [restrained](/rules/conditions.md#restrained). Hit: 6 (1d6 + 3) piercing\
    \ damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and Doru regains hit points\
    \ equal to that amount. The reduction lasts until the target finishes a long rest.\
    \ The target dies if this effect reduces its hit point maximum to 0."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, Doru can grapple the target\
    \ (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
name: Doru
image: "[[Doru.png]]"
---

# Doru

```statblock
"name": "Doru"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Doru takes radiant damage\
    \ or damage from holy water, this trait doesn't function at the start of Doru's\
    \ next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru can climb difficult surfaces, including upside down on ceilings, without\
    \ needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru has the following flaws:\n\n_Forbiddance._ Doru can't enter a residence\
    \ without an invitation from one of the occupants.\n\n_Harmed by Running Water._\
    \ Doru takes 20 acid damage when it ends its turn in running water.\n\n_Stake\
    \ to the Heart._ Doru is destroyed if a piercing weapon made of wood is driven\
    \ into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n\n_Sunlight Hypersensitivity._ Doru takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Doru makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by Doru, [incapacitated](/rules/conditions.md#incapacitated),\
    \ or [restrained](/rules/conditions.md#restrained). Hit: 6 (1d6 + 3) piercing\
    \ damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced\
    \ by an amount equal to the necrotic damage taken, and Doru regains hit points\
    \ equal to that amount. The reduction lasts until the target finishes a long rest.\
    \ The target dies if this effect reduces its hit point maximum to 0."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, Doru can grapple the target\
    \ (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
"image": "[[Doru.png]]"
```
^statblock

*Source: Curse of Strahd p. 47*

## Environment

underdark, urban
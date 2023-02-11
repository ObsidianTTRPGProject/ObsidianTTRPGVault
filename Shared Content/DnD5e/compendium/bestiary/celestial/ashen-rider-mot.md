---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/celestial
aliases: ["Ashen Rider"]
statblock: true
"name": "Ashen Rider"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "21d8 + 84"
"stats":
- !!int "20"
- !!int "16"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "History": !!int "7"
"damage_immunities": "thunder"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider's spellcasting ability is Wisdom (spell save DC 18). The\
    \ rider can innately cast the following spells, requiring no material components:\n\
    \nAt will: [command](/compendium/spells/command.md), [compelled duel](/compendium/spells/compelled-duel.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [blade barrier](/compendium/spells/blade-barrier.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature starts its turn within 30 feet of the ashen rider, the\
    \ rider can force that creature to make a DC 18 Wisdom saving throw if the rider\
    \ can see it. On a successful save, the creature is immune to this aura for the\
    \ next 24 hours. On a failed save, the creature can't speak and is [deafened](/rules/conditions.md#deafened)\
    \ until the start of its next turn."
  "name": "Aura of Silence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the ashen rider isn't mounted, it can use a bonus action to magically\
    \ teleport onto the creature serving as its mount, provided the ashen rider and\
    \ its mount are on the same plane of existence. When it teleports, the ashen rider\
    \ appears astride the mount along with any equipment it is wearing or carrying.\n\
    \nWhile mounted and not [incapacitated](/rules/conditions.md#incapacitated), the\
    \ ashen rider can't be surprised, and both it and its mount have advantage on\
    \ Dexterity saving throws. If the ashen rider is reduced to 0 hit points while\
    \ riding its mount, the mount is reduced to 0 hit points as well."
  "name": "Mount"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes three attacks with its ashen blade or two attacks\
    \ with its bolt of ash."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage plus 13 (2d12) radiant damage."
  "name": "Ashen Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one creature. Hit: 22\
    \ (4d10) necrotic damage, and the target can't regain hit points until the start\
    \ of the ashen rider's next turn."
  "name": "Bolt of Ash"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes an attack using its ashen blade or bolt of ash."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes an attack using its ashen blade or bolt of ash, and\
    \ then its mount can use its reaction to make a melee weapon attack."
  "name": "Coordinated Assault (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider targets a creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 18 Constitution saving throw, or it takes 27 (5d10)\
    \ necrotic damage and its hit point maximum is reduced by an amount equal to the\
    \ necrotic damage taken. This reduction lasts until the target finishes a long\
    \ rest. If the target's hit point maximum is reduced to 0, its body and everything\
    \ it is wearing and carrying, except for magic items, are reduced to ash. A creature\
    \ reduced to ash can't be revived by any means short of a [wish](/compendium/spells/wish.md)\
    \ spell."
  "name": "Reduce to Ash (Costs 3 Actions)"
"source":
- "MOT"
name: Ashen Rider
image: "[[Ashen Rider.png]]"
---

# Ashen Rider

```statblock
"name": "Ashen Rider"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "21d8 + 84"
"stats":
- !!int "20"
- !!int "16"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "History": !!int "7"
"damage_immunities": "thunder"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider's spellcasting ability is Wisdom (spell save DC 18). The\
    \ rider can innately cast the following spells, requiring no material components:\n\
    \nAt will: [command](/compendium/spells/command.md), [compelled duel](/compendium/spells/compelled-duel.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [blade barrier](/compendium/spells/blade-barrier.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature starts its turn within 30 feet of the ashen rider, the\
    \ rider can force that creature to make a DC 18 Wisdom saving throw if the rider\
    \ can see it. On a successful save, the creature is immune to this aura for the\
    \ next 24 hours. On a failed save, the creature can't speak and is [deafened](/rules/conditions.md#deafened)\
    \ until the start of its next turn."
  "name": "Aura of Silence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the ashen rider isn't mounted, it can use a bonus action to magically\
    \ teleport onto the creature serving as its mount, provided the ashen rider and\
    \ its mount are on the same plane of existence. When it teleports, the ashen rider\
    \ appears astride the mount along with any equipment it is wearing or carrying.\n\
    \nWhile mounted and not [incapacitated](/rules/conditions.md#incapacitated), the\
    \ ashen rider can't be surprised, and both it and its mount have advantage on\
    \ Dexterity saving throws. If the ashen rider is reduced to 0 hit points while\
    \ riding its mount, the mount is reduced to 0 hit points as well."
  "name": "Mount"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes three attacks with its ashen blade or two attacks\
    \ with its bolt of ash."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage plus 13 (2d12) radiant damage."
  "name": "Ashen Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one creature. Hit: 22\
    \ (4d10) necrotic damage, and the target can't regain hit points until the start\
    \ of the ashen rider's next turn."
  "name": "Bolt of Ash"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes an attack using its ashen blade or bolt of ash."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider makes an attack using its ashen blade or bolt of ash, and\
    \ then its mount can use its reaction to make a melee weapon attack."
  "name": "Coordinated Assault (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ashen rider targets a creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 18 Constitution saving throw, or it takes 27 (5d10)\
    \ necrotic damage and its hit point maximum is reduced by an amount equal to the\
    \ necrotic damage taken. This reduction lasts until the target finishes a long\
    \ rest. If the target's hit point maximum is reduced to 0, its body and everything\
    \ it is wearing and carrying, except for magic items, are reduced to ash. A creature\
    \ reduced to ash can't be revived by any means short of a [wish](/compendium/spells/wish.md)\
    \ spell."
  "name": "Reduce to Ash (Costs 3 Actions)"
"source":
- "MOT"
"image": "[[Ashen Rider.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 213*

## Description

The fall of the ancient archon empires left some archons bitter and resentful. Seeking to avoid the spread of human civilization, these archons made their way to the Underworld. The horrors of the place broke their minds, bodies, and spirits and twisted them into the terrifying archons known as ashen riders. When they ride forth upon the mortal world, terrified mortals make offerings in a desperate attempt to appease them, but the ashen riders aren't merciful, and they delight in reducing the paragons of the mortal world to ash.

The mysterious conquerors known as archons once ruled vast empires. These armored warlords saw themselves as champions of merciless justice, and they ruled with iron fists. But their dominance ultimately came to an end. As the archon overlords toppled, they scattered to the fringes of the world, and their holdings developed into the poleis of today.

Even though the age of archons is long past, many wonder if the few surviving archons might someday attempt to reestablish their empire or if they are truly resigned to their lesser role in the world.
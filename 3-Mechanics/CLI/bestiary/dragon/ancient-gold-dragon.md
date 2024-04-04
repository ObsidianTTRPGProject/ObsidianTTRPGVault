---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Ancient Gold Dragon"]
---
# [Ancient Gold Dragon](3-Mechanics\CLI\bestiary\dragon/ancient-gold-dragon.md)
*Source: Monster Manual p. 113. Available in the SRD.*  

```statblock
"name": "Ancient Gold Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "546"
"hit_dice": "28d20 + 252"
"stats":
- !!int "30"
- !!int "14"
- !!int "29"
- !!int "18"
- !!int "17"
- !!int "28"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "16"
  "Dexterity": !!int "9"
  "Wisdom": !!int "10"
  "Constitution": !!int "16"
"skillsaves":
  "Stealth": !!int "9"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "16"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "24"
"traits":
- "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 10|text(21) (2d10 + 10) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d6 + 10|text(17) (2d6 + 10) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 20 ft., one\
    \ target. Hit: dice:2d8 + 10|text(19) (2d8 + 10) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 24 Wisdom saving throw or become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 90-foot cone. Each creature in that area must make\
    \ a DC 24 Dexterity saving throw, taking dice:13d10|text(71) (13d10) fire\
    \ damage on a failed save, or half as much damage on a successful one.  \n- Weakening\
    \ Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area\
    \ must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based\
    \ attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.  "
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 25 Dexterity saving throw or take dice:2d6 + 10|text(17)\
    \ (2d6 + 10) bludgeoning damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "SatO"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/ancient-gold-dragon.webp"
```
^statblock

## Environment

grassland, forest
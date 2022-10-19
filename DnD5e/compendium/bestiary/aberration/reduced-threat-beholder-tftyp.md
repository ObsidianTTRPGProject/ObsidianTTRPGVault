---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Reduced-Threat Beholder"]
statblock: true
"name": "Reduced-Threat Beholder"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "90"
"hit_dice": "19d10 + 76"
"stats":
- !!int "10"
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "17"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Perception": !!int "10"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, the beholder decides which way the cone faces\
    \ and whether the cone is active. The area works against the beholder's own eye\
    \ rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder shoots three of the following magical eye rays at random (reroll\
    \ duplicates), choosing one to three targets it can see within 120 feet of it:\n\
    \n- 1. Charm Ray. The targeted creature must succeed on a DC 14 Wisdom saving\
    \ throw or be [charmed](/rules/conditions.md#charmed) by the beholder for 1 hour,\
    \ or until the beholder harms the creature.\n- 2. Paralyzing Ray. The targeted\
    \ creature must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 14 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or the beholder moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the beholder's next turn or until the beholder is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is moved up to 30 feet in any direction. The beholder\
    \ can also exert fine control on objects with this ray, such as manipulating a\
    \ simple tool or opening a door or a container.\n- 7. Sleep Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or fall asleep and remain\
    \ [unconscious](/rules/conditions.md#unconscious) for 1 minute. The target awakens\
    \ if it takes damage or another creature takes an action to wake it. This ray\
    \ has no effect on constructs and undead.\n- 8. Petrification Ray. The targeted\
    \ creature must make a DC 14 Dexterity saving throw. On a failed save, the creature\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 14 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder uses one random eye ray."
  "name": "Eye Ray"
"source":
- "TftYP"
name: Reduced-Threat Beholder
image: "[[Reduced-Threat Beholder.png]]"
---

# Reduced-Threat Beholder

```statblock
"name": "Reduced-Threat Beholder"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "90"
"hit_dice": "19d10 + 76"
"stats":
- !!int "10"
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "17"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Perception": !!int "10"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder's central eye creates an area of antimagic, as in the [antimagic\
    \ field](/compendium/spells/antimagic-field.md) spell, in a 150-foot cone. At\
    \ the start of each of its turns, the beholder decides which way the cone faces\
    \ and whether the cone is active. The area works against the beholder's own eye\
    \ rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder shoots three of the following magical eye rays at random (reroll\
    \ duplicates), choosing one to three targets it can see within 120 feet of it:\n\
    \n- 1. Charm Ray. The targeted creature must succeed on a DC 14 Wisdom saving\
    \ throw or be [charmed](/rules/conditions.md#charmed) by the beholder for 1 hour,\
    \ or until the beholder harms the creature.\n- 2. Paralyzing Ray. The targeted\
    \ creature must succeed on a DC 14 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 4. Slowing Ray. The\
    \ targeted creature must succeed on a DC 14 Dexterity saving throw. On a failed\
    \ save, the target's speed is halved for 1 minute. In addition, the creature can't\
    \ take reactions, and it can take either an action or a bonus action on its turn,\
    \ not both. The creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 5. Enervation Ray. The\
    \ targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one.\n\
    - 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or the beholder moves it up to 30 feet in any direction.\
    \ It is [restrained](/rules/conditions.md#restrained) by the ray's telekinetic\
    \ grip until the start of the beholder's next turn or until the beholder is [incapacitated](/rules/conditions.md#incapacitated).\
    \  \n      \n    If the target is an object weighing 300 pounds or less that isn't\
    \ being worn or carried, it is moved up to 30 feet in any direction. The beholder\
    \ can also exert fine control on objects with this ray, such as manipulating a\
    \ simple tool or opening a door or a container.\n- 7. Sleep Ray. The targeted\
    \ creature must succeed on a DC 14 Wisdom saving throw or fall asleep and remain\
    \ [unconscious](/rules/conditions.md#unconscious) for 1 minute. The target awakens\
    \ if it takes damage or another creature takes an action to wake it. This ray\
    \ has no effect on constructs and undead.\n- 8. Petrification Ray. The targeted\
    \ creature must make a DC 14 Dexterity saving throw. On a failed save, the creature\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ It must repeat the saving throw at the end of its next turn. On a success, the\
    \ effect ends. On a failure, the creature is [petrified](/rules/conditions.md#petrified)\
    \ until freed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n- 9. Disintegration Ray. If the target is a creature,\
    \ it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage.\
    \ If this damage reduces the creature to 0 hit points, its body becomes a pile\
    \ of fine gray dust.  \n      \n    If the target is a Large or smaller nonmagical\
    \ object or creation of magical force, it is disintegrated without a saving throw.\
    \ If the target is a Huge or larger object or creation of magical force, this\
    \ ray disintegrates a 10-foot cube of it.\n- 10. Death Ray. The targeted creature\
    \ must succeed on a DC 14 Dexterity saving throw or take 55 (10d10) necrotic damage.\
    \ The target dies if the ray reduces it to 0 hit points."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The beholder uses one random eye ray."
  "name": "Eye Ray"
"source":
- "TftYP"
"image": "[[Reduced-Threat Beholder.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

underdark
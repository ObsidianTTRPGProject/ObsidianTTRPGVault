---
cssclass: json5e-monster
tags:
- compendium/src/nrh-at
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Emo"]
statblock: true
"name": "Emo"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "180"
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
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "12"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo's central eye creates an area of antimagic, as in the [antimagic field](/compendium/spells/antimagic-field.md)\
    \ spell, in a 150-foot cone. At the start of each of its turns, Emo decides which\
    \ way the cone faces and whether the cone is active. The area works against Emo's\
    \ own eye rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo shoots three of the following magical eye rays at random (reroll duplicates),\
    \ choosing one to three targets it can see within 120 feet of it:\n\n- 1. Happiness\
    \ Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or\
    \ fall [prone](/rules/conditions.md#prone) with laughter, becoming [incapacitated](/rules/conditions.md#incapacitated)\
    \ and unable to stand up for 1 minute or until Emo harms the creature. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.\n- 2. Sadness Ray. The targeted creature must succeed\
    \ on a DC 15 Intelligence saving throw. On a failed save, the target is overcome\
    \ by sorrow and takes 3d6 psychic damage, and it can't take a reaction until the\
    \ end of its next turn. On its next turn, it can use either an action or a bonus\
    \ action, not both. On a successful save, the target takes half as much damage\
    \ and suffers none of the other effects.\n- 3. Anger Ray. The targeted creature\
    \ must succeed on a DC 14 Wisdom saving throw or be compelled to duel with Emo\
    \ for 1 minute. The target has disadvantage on attack rolls against creatures\
    \ other than Emo and must make a Wisdom saving throw each time it attempts to\
    \ move more than 30 feet away from Emo.\n- 4. Anxiety Ray. The targeted creature\
    \ must succeed on a DC 15 Intelligence saving throw or lose the ability to distinguish\
    \ friend from foe, regarding all creatures it can see as enemies for 1 minute.\
    \ Each time the target takes damage, it can repeat the saving throw, ending the\
    \ effect on itself on a success.  \n      \n    Whenever the affected creature\
    \ targets another creature with an attack, spell, or other ability, it must choose\
    \ the target at random from among the creatures it can see within range of the\
    \ attack, spell, or other ability it's using. If an enemy provokes an opportunity\
    \ attack from the affected creature, the creature must make that attack if it\
    \ is able to.\n- 5. Fear Ray. The targeted creature must succeed on a DC 14\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) for\
    \ 1 minute.  \n      \n    The target can repeat the saving throw at the end of\
    \ each of its turns, ending the effect on itself on a success.\n- 6. Desolation\
    \ Ray. The targeted creature must succeed on a DC 14 Intelligence saving throw.\
    \ On a successful save, the target takes 5d10 psychic damage, and the spell ends.\
    \ On a failed save, the target takes 5d10 psychic damage and perceives itself\
    \ to be confined within an illusory stone cell for 1 minute. The target can't\
    \ see or hear anything beyond the cell and is [restrained](/rules/conditions.md#restrained).\n\
    - 7. Jealousy Ray. The targeted creature must succeed on a DC 14 Wisdom saving\
    \ throw or become [charmed](/rules/conditions.md#charmed) for 1 minute. While\
    \ the target is [charmed](/rules/conditions.md#charmed) in this way, it must use\
    \ its action before moving on each of its turns to make a melee attack against\
    \ a creature that Emo chooses. The target can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success.\n- 8. Disgusting\
    \ Ray. The targeted creature must succeed on a DC 15 Constitution saving throw\
    \ against poison. On a failed save, the target is enveloped in sphere of yellow,\
    \ nauseating gas and spends its action on its next turn retching and reeling.\n\
    - 9. Surprise Ray. The targeted creature must succeed on a  \n      \n   \
    \ DC 15 Dexterity saving throw or be [blinded](/rules/conditions.md#blinded) by\
    \ a spray of color until the end of its next turn.\n- 10. Trust Ray. The targeted\
    \ creature must succeed on a  \n      \n    DC 16 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by Emo for 1 hour or until Emo harms the creature."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo uses one random eye ray."
  "name": "Eye Ray"
"source":
- "NRH-AT"
name: Emo
image: "[[Emo.png]]"
---

# Emo

```statblock
"name": "Emo"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "180"
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
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "12"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo's central eye creates an area of antimagic, as in the [antimagic field](/compendium/spells/antimagic-field.md)\
    \ spell, in a 150-foot cone. At the start of each of its turns, Emo decides which\
    \ way the cone faces and whether the cone is active. The area works against Emo's\
    \ own eye rays."
  "name": "Antimagic Cone"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo shoots three of the following magical eye rays at random (reroll duplicates),\
    \ choosing one to three targets it can see within 120 feet of it:\n\n- 1. Happiness\
    \ Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or\
    \ fall [prone](/rules/conditions.md#prone) with laughter, becoming [incapacitated](/rules/conditions.md#incapacitated)\
    \ and unable to stand up for 1 minute or until Emo harms the creature. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.\n- 2. Sadness Ray. The targeted creature must succeed\
    \ on a DC 15 Intelligence saving throw. On a failed save, the target is overcome\
    \ by sorrow and takes 3d6 psychic damage, and it can't take a reaction until the\
    \ end of its next turn. On its next turn, it can use either an action or a bonus\
    \ action, not both. On a successful save, the target takes half as much damage\
    \ and suffers none of the other effects.\n- 3. Anger Ray. The targeted creature\
    \ must succeed on a DC 14 Wisdom saving throw or be compelled to duel with Emo\
    \ for 1 minute. The target has disadvantage on attack rolls against creatures\
    \ other than Emo and must make a Wisdom saving throw each time it attempts to\
    \ move more than 30 feet away from Emo.\n- 4. Anxiety Ray. The targeted creature\
    \ must succeed on a DC 15 Intelligence saving throw or lose the ability to distinguish\
    \ friend from foe, regarding all creatures it can see as enemies for 1 minute.\
    \ Each time the target takes damage, it can repeat the saving throw, ending the\
    \ effect on itself on a success.  \n      \n    Whenever the affected creature\
    \ targets another creature with an attack, spell, or other ability, it must choose\
    \ the target at random from among the creatures it can see within range of the\
    \ attack, spell, or other ability it's using. If an enemy provokes an opportunity\
    \ attack from the affected creature, the creature must make that attack if it\
    \ is able to.\n- 5. Fear Ray. The targeted creature must succeed on a DC 14\
    \ Wisdom saving throw or be [frightened](/rules/conditions.md#frightened) for\
    \ 1 minute.  \n      \n    The target can repeat the saving throw at the end of\
    \ each of its turns, ending the effect on itself on a success.\n- 6. Desolation\
    \ Ray. The targeted creature must succeed on a DC 14 Intelligence saving throw.\
    \ On a successful save, the target takes 5d10 psychic damage, and the spell ends.\
    \ On a failed save, the target takes 5d10 psychic damage and perceives itself\
    \ to be confined within an illusory stone cell for 1 minute. The target can't\
    \ see or hear anything beyond the cell and is [restrained](/rules/conditions.md#restrained).\n\
    - 7. Jealousy Ray. The targeted creature must succeed on a DC 14 Wisdom saving\
    \ throw or become [charmed](/rules/conditions.md#charmed) for 1 minute. While\
    \ the target is [charmed](/rules/conditions.md#charmed) in this way, it must use\
    \ its action before moving on each of its turns to make a melee attack against\
    \ a creature that Emo chooses. The target can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success.\n- 8. Disgusting\
    \ Ray. The targeted creature must succeed on a DC 15 Constitution saving throw\
    \ against poison. On a failed save, the target is enveloped in sphere of yellow,\
    \ nauseating gas and spends its action on its next turn retching and reeling.\n\
    - 9. Surprise Ray. The targeted creature must succeed on a  \n      \n   \
    \ DC 15 Dexterity saving throw or be [blinded](/rules/conditions.md#blinded) by\
    \ a spray of color until the end of its next turn.\n- 10. Trust Ray. The targeted\
    \ creature must succeed on a  \n      \n    DC 16 Wisdom saving throw or be [charmed](/rules/conditions.md#charmed)\
    \ by Emo for 1 hour or until Emo harms the creature."
  "name": "Eye Rays"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Emo uses one random eye ray."
  "name": "Eye Ray"
"source":
- "NRH-AT"
"image": "[[Emo.png]]"
```
^statblock

*Source: NERDS Restoring Harmony: Adventure Together p. 9*

## Environment

underdark
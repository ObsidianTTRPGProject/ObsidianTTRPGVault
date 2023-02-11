---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/aberration/beholder
- monster/environment/underdark
aliases: ["Gauth"]
statblock: true
"name": "Gauth"
"size": "Medium"
"type": "aberration"
"subtype": "beholder"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "13"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see the gauth's central eye starts its turn within\
    \ 30 feet of the gauth, the gauth can force it to make a DC 14 Wisdom saving throw\
    \ if the gauth isn't [incapacitated](/rules/conditions.md#incapacitated) and can\
    \ see the creature. A creature that fails the save is [stunned](/rules/conditions.md#stunned)\
    \ until the start of its next turn.\n\nUnless surprised, a creature can avert\
    \ its eyes at the start of its turn to avoid the saving throw. If the creature\
    \ does so, it can't see the gauth until the start of its next turn, when it can\
    \ avert its eyes again. If the creature looks at the gauth in the meantime, it\
    \ must immediately make the save."
  "name": "Stunning Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gauth dies, the magical energy within it explodes, and each creature\
    \ within 10 feet of it must make a DC 14 Dexterity saving throw, taking 13 (3d8)\
    \ force damage on a failed save, or half as much damage on a successful one."
  "name": "Death Throes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gauth shoots three of the following magical eye rays at random (roll\
    \ three d6s, and reroll duplicates), targeting one to three creatures it can see\
    \ within 120 feet of it:\n\n- 1 Devour Magic Ray. The target must succeed\
    \ on a DC 14 Dexterity saving throw or have one of its magic items lose all magical\
    \ properties until the start of the gauth's next turn. If the object is a charged\
    \ item, it also loses 1d4 charges. Determine the affected item randomly, ignoring\
    \ single-use items such as potions and scrolls.\n- 2 Enervation Ray. The target\
    \ must make a DC 14 Constitution saving throw, taking 18 (4d8) necrotic damage\
    \ on a failed save, or half as much damage on a successful one.\n- 3 Fire Ray.\
    \ The target must succeed on a DC 14 Dexterity saving throw or take 22 (4d10)\
    \ fire damage.\n- 4 Paralyzing Ray. The target must succeed on a DC 14 Constitution\
    \ saving throw or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.\n- 5 Pushing Ray. The target must succeed\
    \ on a DC 14 Strength saving throw or be pushed up to 15 feet away from the gauth\
    \ and have its speed halved until the start of the gauth's next turn.\n- 6 Sleep\
    \ Ray. The target must succeed on a DC 14 Wisdom saving throw or fall asleep\
    \ and remain [unconscious](/rules/conditions.md#unconscious) for 1 minute. The\
    \ target awakens if it takes damage or another creature takes an action to wake\
    \ it. This ray has no effect on Constructs and Undead."
  "name": "Eye Rays"
"source":
- "MPMM"
- "VGM"
name: Gauth
image: "[[Gauth.png]]"
---

# Gauth

```statblock
"name": "Gauth"
"size": "Medium"
"type": "aberration"
"subtype": "beholder"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "13"
"speed": "walk 0 ft., fly 20 ft. (hover)"
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see the gauth's central eye starts its turn within\
    \ 30 feet of the gauth, the gauth can force it to make a DC 14 Wisdom saving throw\
    \ if the gauth isn't [incapacitated](/rules/conditions.md#incapacitated) and can\
    \ see the creature. A creature that fails the save is [stunned](/rules/conditions.md#stunned)\
    \ until the start of its next turn.\n\nUnless surprised, a creature can avert\
    \ its eyes at the start of its turn to avoid the saving throw. If the creature\
    \ does so, it can't see the gauth until the start of its next turn, when it can\
    \ avert its eyes again. If the creature looks at the gauth in the meantime, it\
    \ must immediately make the save."
  "name": "Stunning Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gauth dies, the magical energy within it explodes, and each creature\
    \ within 10 feet of it must make a DC 14 Dexterity saving throw, taking 13 (3d8)\
    \ force damage on a failed save, or half as much damage on a successful one."
  "name": "Death Throes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gauth shoots three of the following magical eye rays at random (roll\
    \ three d6s, and reroll duplicates), targeting one to three creatures it can see\
    \ within 120 feet of it:\n\n- 1 Devour Magic Ray. The target must succeed\
    \ on a DC 14 Dexterity saving throw or have one of its magic items lose all magical\
    \ properties until the start of the gauth's next turn. If the object is a charged\
    \ item, it also loses 1d4 charges. Determine the affected item randomly, ignoring\
    \ single-use items such as potions and scrolls.\n- 2 Enervation Ray. The target\
    \ must make a DC 14 Constitution saving throw, taking 18 (4d8) necrotic damage\
    \ on a failed save, or half as much damage on a successful one.\n- 3 Fire Ray.\
    \ The target must succeed on a DC 14 Dexterity saving throw or take 22 (4d10)\
    \ fire damage.\n- 4 Paralyzing Ray. The target must succeed on a DC 14 Constitution\
    \ saving throw or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.\n- 5 Pushing Ray. The target must succeed\
    \ on a DC 14 Strength saving throw or be pushed up to 15 feet away from the gauth\
    \ and have its speed halved until the start of the gauth's next turn.\n- 6 Sleep\
    \ Ray. The target must succeed on a DC 14 Wisdom saving throw or fall asleep\
    \ and remain [unconscious](/rules/conditions.md#unconscious) for 1 minute. The\
    \ target awakens if it takes damage or another creature takes an action to wake\
    \ it. This ray has no effect on Constructs and Undead."
  "name": "Eye Rays"
"source":
- "MPMM"
- "VGM"
"image": "[[Gauth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 133, Volo's Guide to Monsters p. 125*

## Description

A gauth is a hungry, tyrannical creature similar to a beholder that eats magic and tries to exact tribute from anything weaker than itself. Its body is about 4 feet in diameter, with six eyestalks, a central eye (sometimes surrounded by multiple smaller eyes), and four small grasping tentacles near its mouth. It has color and texture variations similar to a true beholder.

A gauth can survive on meat but prefers to sustain itself with power drained from magic objects. If starved of magic for several weeks, it is forced back to its home plane, so it constantly seeks new items to drain. A gauth might employ creatures to bring it items that can provide it with sustenance.

When the ritual to summon a spectator goes wrong, a gauth might push itself through the flawed connection, arriving immediately or several minutes later. It might present itself as a beholder to ignorant creatures in an attempt to intimidate them, or as a spectator to its summoner in order to drain magic items it is expected to guard.

A [beholder](/compendium/bestiary/aberration/beholder.md) usually drives away or kills any gauths that enter its territory, but it might choose to force them to serve it as lieutenants. Gauths are less xenophobic than beholders, so they might form small clusters and work together, though they're just as likely to ignore each other entirely.

## Environment

underdark
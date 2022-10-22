---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/dragon
aliases: ["Adult Deep Dragon"]
statblock: true
"name": "Adult Deep Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d12 + 56"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "7"
  "Persuasion": !!int "12"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 60 ft., darkvision 150 ft., passive Perception 17"
"languages": "Common, Draconic, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 5 (1d10) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses its action to end it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a cloud of spores in a 60-foot cone. Each creature in\
    \ that area must make a DC 16 Wisdom saving throw. On a failed save, the creature\
    \ takes 33 (6d10) psychic damage, and it is [frightened](/rules/conditions.md#frightened)\
    \ of the dragon for 1 minute. On a successful save, the creature takes half as\
    \ much damage with no additional effects. A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Nightmare Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases spores around a creature within 30 feet of it that\
    \ it can see. The target must succeed on a DC 16 Wisdom saving throw or use its\
    \ reaction to make a melee weapon attack against a random creature within reach.\
    \ If no creatures are within reach, or the target can't take a reaction, it takes\
    \ 5 (1d10) psychic damage."
  "name": "Commanding Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases poisonous spores around a creature within 30 feet of\
    \ it that it can see. The target must succeed on a DC 16 Constitution saving throw\
    \ or take 17 (5d6) poison damage and become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Spore Salvo (Costs 2 Actions)"
"source":
- "FTD"
name: Adult Deep Dragon
image: "[[Adult Deep Dragon.png]]"
---

# Adult Deep Dragon

```statblock
"name": "Adult Deep Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d12 + 56"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "7"
  "Persuasion": !!int "12"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 60 ft., darkvision 150 ft., passive Perception 17"
"languages": "Common, Draconic, Undercommon"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 5 (1d10) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses its action to end it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a cloud of spores in a 60-foot cone. Each creature in\
    \ that area must make a DC 16 Wisdom saving throw. On a failed save, the creature\
    \ takes 33 (6d10) psychic damage, and it is [frightened](/rules/conditions.md#frightened)\
    \ of the dragon for 1 minute. On a successful save, the creature takes half as\
    \ much damage with no additional effects. A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Nightmare Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases spores around a creature within 30 feet of it that\
    \ it can see. The target must succeed on a DC 16 Wisdom saving throw or use its\
    \ reaction to make a melee weapon attack against a random creature within reach.\
    \ If no creatures are within reach, or the target can't take a reaction, it takes\
    \ 5 (1d10) psychic damage."
  "name": "Commanding Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases poisonous spores around a creature within 30 feet of\
    \ it that it can see. The target must succeed on a DC 16 Constitution saving throw\
    \ or take 17 (5d6) poison damage and become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Spore Salvo (Costs 2 Actions)"
"source":
- "FTD"
"image": "[[Adult Deep Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 174*

## Description

Making their lairs in the depths of the Underdark, deep dragons are nightmarish cousins of chromatic dragons. The warped magical energy of their subterranean realm gives them the ability to exhale magical spores that instill fear and scar the mind.

Deep dragons' black-and-gray hide is smooth like a salamander's, and their eyes are pale. As they age, their spore breath causes fungi to bloom across their skin, especially around the head and neck. Their wings are attached to their front legs and can fold in close to the body, allowing deep dragons to easily maneuver through relatively narrow tunnels.

Deep dragons often hoard secrets, delighting in knowledge of far-off lands. Many seek out new insights and tricks that they can use against other denizens of the Underdark, preferring social manipulation and crafty dealmaking to exerting themselves in combat. Deep dragons look down on any creature that isn't useful to them, though they are willing to bargain for knowledge they lack.

**A Deep Dragon's Lair.** Deep dragons make their lairs in well-hidden caves or sunless beaches in the Underdark, and these sites are often inaccessible without the ability to fly or dive underwater. They fill their lairs with secret passages and hiding places that allow them to escape or ambush visitors if the need arises. A well-cultivated lair abounds with Underdark fungi and plants, with the floor, walls, and ceiling covered in carpets of mold and moss, or featuring larger mushrooms and plants in neatly organized displays.

The challenge rating of a legendary deep dragon increases by 1 when it's encountered in its lair.
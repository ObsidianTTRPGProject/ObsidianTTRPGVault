---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/huge
- monster/type/dragon
- monster/environment/swamp
aliases: ["Nurvureem, The Dark Lady"]
statblock: true
"name": "Nurvureem, The Dark Lady"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "23"
- !!int "14"
- !!int "21"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "12"
  "Perception": !!int "11"
"damage_resistances": "necrotic"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nurvureem fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Nurvureem has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Nurvureem can take the Hide action as a\
    \ bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nurvureem has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 4 (1d8) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Nurvureem's choice that is within 120 feet of Nurvureem\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Nurvureem's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem exhales necrotic in a 60-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem beats its wings. Each creature within 10 feet of Nurvureem must\
    \ succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage\
    \ and be knocked [prone](/rules/conditions.md#prone). Nurvureem can then fly up\
    \ to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "PotA"
name: Nurvureem, The Dark Lady
image: "[[Nurvureem, The Dark Lady.png]]"
---

# Nurvureem, The Dark Lady

```statblock
"name": "Nurvureem, The Dark Lady"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"stats":
- !!int "23"
- !!int "14"
- !!int "21"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "12"
  "Perception": !!int "11"
"damage_resistances": "necrotic"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nurvureem fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Nurvureem has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, Nurvureem can take the Hide action as a\
    \ bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nurvureem has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 4 (1d8) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Nurvureem's choice that is within 120 feet of Nurvureem\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Nurvureem's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem exhales necrotic in a 60-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8)\
    \ necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nurvureem beats its wings. Each creature within 10 feet of Nurvureem must\
    \ succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage\
    \ and be knocked [prone](/rules/conditions.md#prone). Nurvureem can then fly up\
    \ to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "PotA"
"image": "[[Nurvureem, The Dark Lady.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 180*

## Environment

swamp
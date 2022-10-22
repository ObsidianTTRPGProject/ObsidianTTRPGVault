---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/aberration/warlock
aliases: ["Neogi Void Hunter"]
statblock: true
"name": "Neogi Void Hunter"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Perception": !!int "3"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, telepathy 30 ft., Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\
    \ ability:\n\n1/day each: [dimension door](/compendium/spells/dimension-door.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the neogi's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and magic can't put the neogi\
    \ to sleep."
  "name": "Mental Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi makes one Bite attack and two Claw attacks, or it makes two Eldritch\
    \ Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit: 20\
    \ (3d10 + 4) force damage."
  "name": "Eldritch Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi targets one creature it can see within 30 feet of itself. The\
    \ target must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
    \ the target. The [charmed](/rules/conditions.md#charmed) target obeys the neogi's\
    \ commands and can't take reactions, and the neogi and the target can communicate\
    \ telepathically with each other at a distance of up to 1 mile. Whenever the [charmed](/rules/conditions.md#charmed)\
    \ target takes damage, it can repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
- "BAM"
name: Neogi Void Hunter
image: "[[Neogi Void Hunter.png]]"
---

# Neogi Void Hunter

```statblock
"name": "Neogi Void Hunter"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "6"
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Perception": !!int "3"
  "Arcana": !!int "5"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, telepathy 30 ft., Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\
    \ ability:\n\n1/day each: [dimension door](/compendium/spells/dimension-door.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the neogi's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and magic can't put the neogi\
    \ to sleep."
  "name": "Mental Fortitude"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi makes one Bite attack and two Claw attacks, or it makes two Eldritch\
    \ Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit: 20\
    \ (3d10 + 4) force damage."
  "name": "Eldritch Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neogi targets one creature it can see within 30 feet of itself. The\
    \ target must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
    \ the target. The [charmed](/rules/conditions.md#charmed) target obeys the neogi's\
    \ commands and can't take reactions, and the neogi and the target can communicate\
    \ telepathically with each other at a distance of up to 1 mile. Whenever the [charmed](/rules/conditions.md#charmed)\
    \ target takes damage, it can repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
- "BAM"
"image": "[[Neogi Void Hunter.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 41*

## Description

A neogi void hunter is bigger than a typical adult neogi and often fills the role of captain aboard a nightspider (see the _Astral Adventurer's Guide_). The void hunter pledges fealty to one or more stellar entities in exchange for a taste of their immense power. These entities—known by such names as Acamar, Caiphon, Gibbeth, and Hadar—resemble stars and embody the essence of evil.
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/dragon
- monster/environment/hill
aliases: ["Adult Copper Dragon"]
statblock: true
"name": "Adult Copper Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Perception": !!int "12"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
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
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Acid Breath.\
    \ The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid\
    \ damage on a failed save, or half as much damage on a successful one.\n- Slowing\
    \ Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area\
    \ must succeed on a DC 18 Constitution saving throw. On a failed save, the creature\
    \ can't use reactions, its speed is halved, and it can't make more than one attack\
    \ on its turn. In addition, the creature can use either an action or a bonus action\
    \ on its turn, but not both. These effects last for 1 minute. The creature can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself with a successful save."
  "name": "Breath Weapons (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "GoS"
- "CM"
name: Adult Copper Dragon
image: "[[Adult Copper Dragon.png]]"
---

# Adult Copper Dragon

```statblock
"name": "Adult Copper Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Perception": !!int "12"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
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
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Acid Breath.\
    \ The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid\
    \ damage on a failed save, or half as much damage on a successful one.\n- Slowing\
    \ Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area\
    \ must succeed on a DC 18 Constitution saving throw. On a failed save, the creature\
    \ can't use reactions, its speed is halved, and it can't make more than one attack\
    \ on its turn. In addition, the creature can use either an action or a bonus action\
    \ on its turn, but not both. These effects last for 1 minute. The creature can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself with a successful save."
  "name": "Breath Weapons (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "GoS"
- "CM"
"image": "[[Adult Copper Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 112, Ghosts of Saltmarsh, Candlekeep Mysteries*

## Description

Copper dragons are incorrigible pranksters, joke tellers, and riddlers that live in hills and rocky uplands. Despite their gregarious and even-tempered natures, they possess a covetous, miserly streak, and can become dangerous when their hoards are threatened.

A copper dragon has brow plates jutting over its eyes, extending back to long horns that grow as a series of overlapping segments. Its backswept cheek ridges and jaw frills give it a pensive look. At birth, a copper dragon's scales are a ruddy brown with a metallic tint. As the dragon ages, its scales become more coppery in color, later taking on a green tint as it ages. A copper dragon's pupils fade with age, and the eyes of the oldest copper dragons resemble glowing turquoise orbs.

**Good Hosts.** A copper dragon appreciates wit, a good joke, humorous story, or riddle. A copper dragon becomes annoyed with any creature that doesn't laugh at its jokes or accept its tricks with good humor.

Copper dragons are particularly fond of bards. A dragon might carve out part of its lair as a temporary abode for a bard willing to regale it with stories, riddles, and music. To a copper dragon, such companionship is a treasure to be coveted.

**Cautious and Crafty.** When building its hoard, a copper dragon prefers treasures from the earth. Metals and precious stones are favorites of these creatures.

A copper dragon is wary when it comes to showing off its possessions. If it knows that other creatures seek a specific item in its hoard, a copper dragon will not admit to possessing the item. Instead, it might send curious treasure hunters on a wild goose chase to search for the object while it watches from afar for its own pleasure.

**A Copper Dragon's Lair.** Copper dragons dwell in dry uplands and on hilltops, where they make their lairs in narrow caves. False walls in the lair hide secret antechambers where the dragon stores valuable ores, art objects, and other oddities it has collected over its lifetime. Worthless items are put on display in open caves to tantalize treasure seekers and distract them from where the real treasure is hidden.

**Metallic Dragons.** Metallic dragons seek to preserve and protect, viewing themselves as one powerful race among the many races that have a place in the world.

**Noble Curiosity.** Metallic dragons covet treasure as do their evil chromatic kin, but they aren't driven as much by greed in their pursuit of wealth. Rather, metallic dragons are driven to investigate and collect, taking unclaimed relics and storing them in their lairs. A metallic dragon's treasure hoard is filled with items that reflect its persona, tell its history, and preserve its memories. Metallic dragons also seek to protect other creatures from dangerous magic. As such, powerful magic items and even evil artifacts are sometimes secreted away in a metallic dragon's hoard.

A metallic dragon can be persuaded to part with an item in its hoard for the greater good. However, another creature's need for or right to the item is often unclear from the dragon's point of view. A metallic dragon must be bribed or otherwise convinced to part with the item.

**Solitary Shapeshifters.** At some point in their long lives, metallic dragons gain the magical ability to assume the forms of humanoids and beasts. When a dragon learns how to disguise itself, it might immerse itself in other cultures for a time. Some dragons are too shy or paranoid to stray far from their lairs and their treasure hoards, but bolder dragons love to wander city streets in humanoid form, taking in the local culture and cuisine, and amusing themselves by observing how the smaller races live.

Some metallic dragons prefer to stay as far away from civilization as possible so as to not attract enemies. However, this means that they are often far out of touch with current events.

**The Persistence of Memory.** Metallic dragons have long memories, and they form opinions of humanoids based on previous contact with related humanoids. Good dragons can recognize humanoid bloodlines by smell, sniffing out each person they meet and remembering any relatives they have come into contact with over the years. A gold dragon might never suspect duplicity from a cunning villain, assuming that the villain is of the same mind and heart as a good and virtuous grandmother. On the other hand, the dragon might resent a noble paladin whose ancestor stole a silver statue from the dragon's hoard three centuries before.

**King of Good Dragons.** The chief deity of the metallic dragons is Bahamut, the Platinum Dragon. He dwells in the Seven Heavens of Mount Celestia, but often wanders the Material Plane in the magical guise of a venerable human male in peasant robes. In this form, he is usually accompanied by seven golden canaries-actually seven ancient gold dragons in polymorphed form.

Bahamut seldom interferes in the affairs of mortal creatures, though he makes exceptions to help thwart the machinations of Tiamat the Dragon Queen and her evil brood. Good-aligned clerics and paladins sometimes worship Bahamut for his dedication to justice and protection. As a lesser god, he has the power to grant divine spells.

True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.

Many creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.

Though their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.

True dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.

Dragon Age Categories

| Category | Size | Age Range |
|----------|------|-----------|
| Wyrmling | Medium | 5 years or less |
| Young | Large | 6–100 years |
| Adult | Huge | 101–800 years |
| Ancient | Gargantuan | 801 years or more |
^category-size-age-range

## Environment

hill
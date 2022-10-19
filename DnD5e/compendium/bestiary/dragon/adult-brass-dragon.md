---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/dragon
- monster/environment/desert
aliases: ["Adult Brass Dragon"]
statblock: true
"name": "Adult Brass Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., burrow 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
  "History": !!int "7"
  "Persuasion": !!int "8"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
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
  "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire\
    \ damage on a failed save, or half as much damage on a successful one.\n- Sleep\
    \ Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that\
    \ area must succeed on a DC 18 Constitution saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. This effect ends for a creature if the creature takes damage\
    \ or someone uses an action to wake it."
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
name: Adult Brass Dragon
image: "[[Adult Brass Dragon.png]]"
---

# Adult Brass Dragon

```statblock
"name": "Adult Brass Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., burrow 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
  "History": !!int "7"
  "Persuasion": !!int "8"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
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
  "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire\
    \ damage on a failed save, or half as much damage on a successful one.\n- Sleep\
    \ Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that\
    \ area must succeed on a DC 18 Constitution saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. This effect ends for a creature if the creature takes damage\
    \ or someone uses an action to wake it."
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
"image": "[[Adult Brass Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 105, Ghosts of Saltmarsh*

## Description

The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.

A brass dragon's head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling's scales are a dull, mottled brown. As it ages, the dragon's scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.

**Boldly Talkative.** A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon's presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon's thirst for small talk is slaked.

A brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, the dragon often responds in kind, treating a bout of mutual trickery as a game.

**Prized Treasures.** Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.

Brass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon's hoard.

**A Brass Dragon's Lair.** A brass dragon's desert lair is typically a ruin, canyon, or cave network with ceiling holes to allow for sunlight.

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

desert
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/dragon
- monster/environment/grassland
- monster/environment/forest
aliases: ["Adult Gold Dragon"]
statblock: true
"name": "Adult Gold Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "24"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "14"
  "Persuasion": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 60-foot cone. Each creature in that area must make\
    \ a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save,\
    \ or half as much damage on a successful one.\n- Weakening Breath. The dragon\
    \ exhales gas in a 60-foot cone. Each creature in that area must succeed on a\
    \ DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls,\
    \ Strength checks, and Strength saving throws for 1 minute. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "GoS"
- "EGW"
- "JttRC"
name: Adult Gold Dragon
image: "[[Adult Gold Dragon.png]]"
---

# Adult Gold Dragon

```statblock
"name": "Adult Gold Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "16"
- !!int "15"
- !!int "24"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "14"
  "Persuasion": !!int "13"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Fire Breath.\
    \ The dragon exhales fire in a 60-foot cone. Each creature in that area must make\
    \ a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save,\
    \ or half as much damage on a successful one.\n- Weakening Breath. The dragon\
    \ exhales gas in a 60-foot cone. Each creature in that area must succeed on a\
    \ DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls,\
    \ Strength checks, and Strength saving throws for 1 minute. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "GoS"
- "EGW"
- "JttRC"
"image": "[[Adult Gold Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 114, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Journeys through the Radiant Citadel*

## Description

The most powerful and majestic of the metallic dragons, gold dragons are dedicated foes of evil.

A gold dragon has a sagacious face anointed with flexible spines that resemble whiskers. Its horns sweep back from its nose and brow, echoing twin frills that adorn its long neck. A gold dragon's sail-like wings start at its shoulders and trace down to the tip of its tail, letting it fly with a distinctive rippling motion as if swimming through the air. A gold dragon wyrmling has scales of dark yellow with metallic flecks. Those flecks grow larger as the dragon matures. As a gold dragon ages, its pupils fade until its eyes resemble pools of molten gold.

**Devourer of Wealth.** Gold dragons can eat just about anything, but their preferred diet consists of pearls and gems. Thankfully, a gold dragon doesn't need to gorge itself on such wealth to feel satisfied. Gifts of treasure that it can consume are well received by a gold dragon, as long as they aren't bribes.

**Reserved Shapeshifters.** Gold dragons are respected by the other metallic dragons for their wisdom and fairness, but they are the most aloof and grim of the good-aligned dragons. They value their privacy to the extent that they rarely fraternize with other dragons except their own mates and offspring.

Older gold dragons can assume animal and humanoid forms. Rarely does a gold dragon in disguise reveal its true form. In the guise of a peddler, it might regularly visit a town to catch up on local gossip, patronize honest businesses, and lend a helping hand in unseen ways. In the guise of an animal, the dragon might befriend a lost child, a wandering minstrel, or an innkeeper, serving as a companion for days or weeks on end.

**Master Hoarders.** A gold dragon keeps its hoard in a well-guarded vault deep within its lair. Magical wards placed on the vault make it all but impossible to remove any treasures without the dragon knowing about it.

**A Gold Dragon's Lair.** Gold dragons make their homes in out-of-the-way places, where they can do as they please without arousing suspicion or fear. Most dwell near idyllic lakes and rivers, mist-shrouded islands, cave complexes hidden behind sparkling waterfalls, or ancient ruins.

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

grassland, forest
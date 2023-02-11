---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/dragon
- monster/environment/mountain
- monster/environment/urban
aliases: ["Young Silver Dragon"]
statblock: true
"name": "Young Silver Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_immunities": "cold"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Cold Breath.\
    \ The dragon exhales an icy blast in a 30-foot cone. Each creature in that area\
    \ must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on\
    \ a failed save, or half as much damage on a successful one.\n- Paralyzing Breath.\
    \ The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 17 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
name: Young Silver Dragon
image: "[[Young Silver Dragon.png]]"
---

# Young Silver Dragon

```statblock
"name": "Young Silver Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"stats":
- !!int "23"
- !!int "10"
- !!int "21"
- !!int "14"
- !!int "11"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "8"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_immunities": "cold"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Cold Breath.\
    \ The dragon exhales an icy blast in a 30-foot cone. Each creature in that area\
    \ must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on\
    \ a failed save, or half as much damage on a successful one.\n- Paralyzing Breath.\
    \ The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 17 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Breath Weapons (Recharge 5-6)"
"source":
- "MM"
- "SKT"
"image": "[[Young Silver Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 118, Storm King's Thunder*

## Description

The friendliest and most social of the metallic dragons, silver dragons cheerfully assist good creatures in need.

A silver dragon shimmers as if sculpted from pure metal, its face given a noble cast by its high eyes and sweeping beard-like chin spikes. A spiny frill rises high over its head, tracing down its neck to the tip of its tail. A silver wyrmling's scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until its individual scales are barely visible. As a silver dragon grows older, its pupils fade until its eyes resemble orbs of mercury.

**Dragons of Virtue.** Silver dragons believe that living a moral life involves doing good deeds and ensuring that one's actions cause no undeserved harm to other sentient beings. They don't take it upon themselves to root out evil, as gold and bronze dragons do, but they will gladly oppose creatures that dare to commit evil acts or harm the innocent.

**Friends of the Small Races.** Silver dragons enjoy the company of other silver dragons. Their only true friendships outside their own kin arise in the company of humanoids, and many silver dragons spend as much time in humanoid form as they do in draconic form. A silver dragon adopts a benign humanoid persona such as a kindly old sage or a young wanderer, and it often has mortal companions with whom it develops strong friendships.

Silver dragons must step away from their humanoid lives on a regular basis, returning to their true forms to mate and rear offspring, or to tend to their hoards and personal affairs. Because many lose track of time while away, they sometimes return to find that their companions have grown old or died. Silver dragons often end up befriending several generations of humanoids within a single family as a result.

**Respect for Humanity.**  Silver dragons befriend humanoids of all races, but shorter-lived races such as humans spark their curiosity in a way the longer-lived elves and dwarves don't. Humans have a drive and zest for life that silver dragons find fascinating.

**Hoarding History.** Silver dragons love to possess relics of humanoid history. This includes the great piles of coins they covet, minted by current and fallen humanoid empires, as well as art objects and fine jewelery crafted by numerous races. Other treasures that make up their hoards can include intact ships, the remains of kings and queens, thrones, the crown jewels of ancient empires, inventions and contraptions, and monoliths carried from the ruins of fallen cities.

**A Silver Dragon's Lair.** Silver dragons dwell among the clouds, making their lairs on secluded cold mountain peaks. Though many are comfortable in natural cavern complexes or abandoned mines, silver dragons covet the lost outposts of humanoid civilization. An abandoned mountaintop citadel or a remote tower raised by a long-dead wizard is the sort of lair that every silver dragon dreams of.

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

mountain, urban
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/dragon
- monster/environment/arctic
aliases: ["Adult White Dragon"]
statblock: true
"name": "Adult White Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
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
    \ + 6) piercing damage plus 4 (1d8) cold damage."
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
    \ and aware of it must succeed on a DC 14 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
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
- "HotDQ"
- "RoT"
- "SKT"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
name: Adult White Dragon
image: "[[Adult White Dragon.png]]"
---

# Adult White Dragon

```statblock
"name": "Adult White Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "22"
- !!int "10"
- !!int "22"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
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
    \ + 6) piercing damage plus 4 (1d8) cold damage."
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
    \ and aware of it must succeed on a DC 14 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
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
- "HotDQ"
- "RoT"
- "SKT"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
"image": "[[Adult White Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 101, Hoard of the Dragon Queen, The Rise of Tiamat, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount*

## Description

The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed.

A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky.

**Primal and Vengeful.** White dragons lack the cunning and tactics of most other dragons. However, their bestial nature makes them the best hunters among all dragonkind, singularly focused on surviving and slaughtering their enemies. A white dragon consumes only food that has been frozen, devouring creatures killed by its breath weapon while they are still stiff and frigid. It encases other kills in ice or buries them in snow near its lair, and finding such a larder is a good indication that a white dragon dwells nearby.

A white dragon also keeps the bodies of its greatest enemies as trophies, freezing corpses where it can look upon them and gloat. The remains of giants, remorhazes, and other dragons are often positioned prominently within a white dragon's lair as warnings to intruders.

Though only moderately intelligent, white dragons have extraordinary memories. They recall every slight and defeat, and have been known to conduct malicious vendettas against creatures that have offended them. This often includes silver dragons, which lair in the same territories as whites. White dragons can speak as all dragons can, but they rarely talk unless moved to do so.

**Lone Masters.** White dragons avoid all other dragons except whites of the opposite sex. Even then, when white dragons seek each other out as mates, they stay together only long enough to conceive offspring before fleeing into isolation again.

White dragons can't abide rivals near their lairs. As a result, a white dragon attacks other creatures without provocation, viewing such creatures as either too weak or too powerful to live. The only creatures that typically serve a white dragon are intelligent humanoids that demonstrate enough strength to assuage the dragon's wrath, and can put up with sustaining regular losses as a result of its hunger. This includes dragon-worshiping kobolds, which are commonly found in their lairs.

Powerful creatures can sometimes gain a white dragon's obedience through a demonstration of physical or magical might. Frost giants challenge white dragons to prove their own strength and improve their status in their clans, and their cracked bones litter many a white dragon's lair. However, a white dragon defeated by a frost giant often becomes its servant, accepting the mastery of a superior creature in exchange for asserting its own domination over the other creatures that serve or oppose the giant.

**Treasure Under Ice.** White dragons love the cold sparkle of ice and favor treasure with similar qualities, particularly diamonds. However, in their remote arctic climes, the treasure hoards of white dragons more often contain walrus and mammoth tusk ivory, whale-bone sculptures, figureheads from ships, furs, and magic items seized from overly bold adventurers.

Loose coins and gems are spread across a white dragon's lair, glittering like stars when the light strikes them. Larger treasures and chests are encased in layers of rime created by the white dragon's breath, and held safe beneath layers of transparent ice. The dragon's great strength allows it to easily access its wealth, while lesser creatures must spend hours chipping away or melting the ice to reach the dragon's main hoard.

A white dragon's flawless memory means that it knows how it came to possess every coin, gem, and magic item in its hoard, and it associates each item with a specific victory. White dragons are notoriously difficult to bribe, since any offers of treasure are seen as an insult to their ability to simply slay the creature making the offer and seize the treasure on their own.

**A White Dragon's Lair.** White dragons lair in icy caves and deep subterranean chambers far from the sun. They favor high mountain vales accessible only by flying, caverns in cliff faces, and labyrinthine ice caves in glaciers. White dragons love vertical heights in their caverns, flying up to the ceiling to latch on like bats or slithering down icy crevasses.

A legendary white dragon's innate magic deepens the cold in the area around its lair. Mountain caverns are fast frozen by the white dragon's presence. A white dragon can often detect intruders by the way the keening wind in its lair changes tone.

A white dragon rests on high ice shelves and cliffs in its lair, the floor around it a treacherous morass of broken ice and stone, hidden pits, and slippery slopes. As foes struggle to move toward it, the dragon flies from perch to perch and destroys them with its freezing breath.

**Chromatic Dragons.** The black, blue, green, red, and white dragons represent the evil side of dragonkind. Aggressive, gluttonous, and vain, chromatic dragons are dark sages and powerful tyrants feared by all creatures-including each other.

**Driven by Greed.**  Chromatic dragons lust after treasure, and this greed colors their every scheme and plot. They believe that the world's wealth belongs to them by right, and a chromatic dragon seizes that wealth without regard for the humanoids and other creatures that have "stolen" it. With its piles of coins, gleaming gems, and magic items, a dragon's hoard is the stuff of legend. However, chromatic dragons have no interest in commerce, amassing wealth for no other reason than to have it.

**Creatures of Ego.** Chromatic dragons are united by their sense of superiority, believing themselves the most powerful and worthy of all mortal creatures. When they interact with other creatures, it is only to further their own interests. They believe in their innate right to rule, and this belief is the cornerstone of every chromatic dragon's personality and worldview. Trying to humble a chromatic dragon is like trying to convince the wind to stop blowing. To these creatures, humanoids are animals, fit to serve as prey or beasts of burden, and wholly unworthy of respect.

**Dangerous Lairs.** A dragon's lair serves as the seat of its power and a vault for its treasure. With its innate toughness and tolerance for severe environmental effects, a dragon selects or builds a lair not for shelter but for defense, favoring multiple entrances and exits, and security for its hoard.

Most chromatic dragon lairs are hidden in dangerous and remote locations to prevent all but the most audacious mortals from reaching them. A black dragon might lair in the heart of a vast swamp, while a red dragon might claim the caldera of an active volcano. In addition to the natural defenses of their lairs, powerful chromatic dragons use magical guardians, traps, and subservient creatures to protect their treasures.

**Queen of Evil Dragons.** Tiamat the Dragon Queen is the chief deity of evil dragonkind. She dwells on Avernus, the first layer of the Nine Hells. As a lesser god, Tiamat has the power to grant spells to her worshipers, though she is loath to share her power. She epitomizes the avarice of evil dragons, believing that the multiverse and all its treasures will one day be hers and hers alone.

Tiamat is a gigantic dragon whose five heads reflect the forms of the chromatic dragons that worship her-black, blue, green, red, and white. She is a terror on the battlefield, capable of annihilating whole armies with her five breath weapons, her formidable spellcasting, and her fearsome claws.

Tiamat's most hated enemy is Bahamut the Platinum Dragon, with whom she shares control of the faith of dragonkind. She also holds a special enmity for Asmodeus, who long ago stripped her of the rule of Avernus and who continues to curb the Dragon Queen's power.

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

arctic
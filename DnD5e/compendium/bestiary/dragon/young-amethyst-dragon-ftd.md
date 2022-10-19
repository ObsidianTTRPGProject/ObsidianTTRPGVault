---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon/gem
aliases: ["Young Amethyst Dragon"]
statblock: true
"name": "Young Amethyst Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"stats":
- !!int "21"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "10"
  "Arcana": !!int "12"
  "Persuasion": !!int "8"
"damage_resistances": "force, psychic"
"condition_immunities": "frightened, prone"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n1/day\
    \ each: [blink](/compendium/spells/blink.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 4 (1d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon creates a shining bead of gravitational force in its mouth,\
    \ then releases the energy in a 30-foot cone. Each creature in that area must\
    \ make a DC 17 Strength saving throw. On a failed save, the creature takes 36\
    \ (8d8) force damage, and its speed becomes 0 until the start of the dragon's\
    \ next turn. On a successful save, the creature takes half as much damage, and\
    \ its speed isn't reduced."
  "name": "Singularity Breath (Recharge 5-6)"
"source":
- "FTD"
name: Young Amethyst Dragon
image: "[[Young Amethyst Dragon.png]]"
---

# Young Amethyst Dragon

```statblock
"name": "Young Amethyst Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"stats":
- !!int "21"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "10"
  "Arcana": !!int "12"
  "Persuasion": !!int "8"
"damage_resistances": "force, psychic"
"condition_immunities": "frightened, prone"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n1/day\
    \ each: [blink](/compendium/spells/blink.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 4 (1d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon creates a shining bead of gravitational force in its mouth,\
    \ then releases the energy in a 30-foot cone. Each creature in that area must\
    \ make a DC 17 Strength saving throw. On a failed save, the creature takes 36\
    \ (8d8) force damage, and its speed becomes 0 until the start of the dragon's\
    \ next turn. On a successful save, the creature takes half as much damage, and\
    \ its speed isn't reduced."
  "name": "Singularity Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Young Amethyst Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 161*

## Description

Amethyst dragons, the mightiest of the gem dragons, study and psionically manipulate the fundamental principles of the multiverse, from the force of gravity to the emanations of the Outer Planes. Their innate psionics give them a measure of control over how physical laws affect them. They defy gravity with flight that doesn't rely solely upon their great wings, and gravitational force empowers both their devastating breath weapon and the exploding amethyst crystals they spit at their foes.

**Royal Purple.** When first hatched, an amethyst dragon has scales of dull, opaque purple. As the dragon grows, their scales, horns, and wing membranes become more vibrant and translucent. When the dragon is fully mature, their scales resemble rich purple amethyst crystals, refracting light to take on an inner glow. Their pupils fade with age, making the eyes of an ancient dragon resemble glowing white or pale lavender orbs. Crystalline horns reminiscent of amethyst chunks hover behind their heads, held there by telekinetic force and shifting with their moods.

**Cosmological Study.** Many amethyst dragons are fascinated by the existence of other worlds in the Material Plane, and especially the way individual dragons manifest unique echoes across those worlds. They also prize understanding of the cosmic forces that emanate from the Outer Planes, studying the opposing tides of good and evil, chaos and order, so they can offer counsel to those with the wisdom to accept it.

Amethyst dragons pay particular attention to intrusions of the Far Realm into the Material Plane. They loathe the corruption that accompanies such intrusions into the world, making them fierce opponents of the Far Realm and any creatures warped by its touch. Strangely, though, they are intrigued by and fond of flumphs. These Aberrations, which oppose the depredations of mind flayers and other wicked Aberrations, remind amethyst dragons that allies can be found in the strangest places.

**Hoarded Arcana.** In addition to material wealth, amethyst dragons delight in collecting knowledge and magic dealing with the nature of the planes of existence, cosmic forces, and distant worlds. They prize treasures drawn from different worlds of the Material Plane, especially magic items and artworks that highlight the unique nature of different worlds. Magic items that allow teleportation or travel between planes, spellbooks filled with similar magic, and treatises examining the nature of the multiverse form the centerpiece of an amethyst dragon's hoard.

**Creating an Amethyst Dragon.** Use the Amethyst Dragon Personality Traits and Amethyst Dragon Ideals tables to inspire your portrayal of distinctive amethyst dragon characters.

**Amethyst Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I am never so content as when contemplating the beauty and wonders of the multiverse. |
| 2 | I am a sworn protector against the depredations of the Far Realm, and I will root out its corruption wherever it may arise. |
| 3 | What use is vast knowledge or insight if it is not shared with those who can appreciate it? |
| 4 | Although some are fascinated by words, I think numbers are the true foundations of creation. |
| 5 | To experience a thing is to truly understand it. Direct and personal experience is the most valuable form of knowledge. |
| 6 | I see a far more kaleidoscopic reality than you do... or than any of your selves do, really. |
| 7 | It is not my place to interfere. I merely seek to observe, learn, and understand. |
| 8 | With a true understanding of metaphysics, anything is possible—including the creation of a more orderly and perfect cosmos than this one. |
^trait

**Amethyst Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Balance. Everything is a complex interaction of forces that must be kept in a delicate and carefully maintained balance. (Neutral) |
| 2 | Knowledge. We are the whole of creation, seeking to understand itself. (Any) |
| 3 | Self-Improvement. I am a complex gem, and I constantly polish and refine my many facets to make the whole that much more perfect. (Any) |
| 4 | Responsibility. Having knowledge and power gives one a responsibility to those who have less of either. (Lawful) |
| 5 | Noble Obligation. My superior experience, intellect, and insight give me a duty to mediate disputes when I can. (Good) |
| 6 | Power. Knowledge is power, power must be used, and I use it. Your concerns are irrelevant. (Evil) |
^ideal

**Amethyst Dragon Adventures.** The Amethyst Dragon Adventure Hooks table offers suggestions for stories and adventures involving amethyst dragons.

**Amethyst Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | An amethyst dragon seeks a rare type of crystal found in the domain of a territorial stone giant clan. |
| 2 | A coven of hags seeks to reclaim its hag eye, which rests within an amethyst dragon's hoard. |
| 3 | An amethyst dragon magically disables all teleportation within a thousand miles of their lair. Governments within that area seek emissaries who can negotiate an end to the restriction. |
| 4 | An amethyst dragon recruits a group of adventurers to psychically trade bodies with adventurers from another world, so that each can carry out certain tasks before swapping back. |
| 5 | A cult devoted to a Great Old One of the Far Realm seeks an alien monolith that can summon its master, but the site is guarded by an amethyst dragon. |
| 6 | An amethyst dragon wyrmling is actually the temporally displaced form of an ancient amethyst dragon who already exists in the same time line. |
| 7 | An amethyst dragon seeks the means to plant special crystals that will allow the dragon to magically coexist in multiple places at once across the world during a rare celestial alignment. |
| 8 | An amethyst dragon is fusing with their echoes on other worlds. They all hope to ascend to godhood, perhaps recreating or replacing Sardior. |
^adventure-hook

**Connected Creatures.** Amethyst dragons are generally aloof creatures, dwelling in isolation for long periods of time and rarely cultivating connections with other creatures. When they do connect with others, it is most often for intellectual and philosophical pursuits or to fulfill some arcane purpose involving the dragons' echoes across the worlds.

**Young Amethyst Dragon Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | A myconid community dwells in tunnels near a young amethyst dragon's lair, and its members telepathically commune with the dragon and any visitors in the lair from time to time. |
| 2 | A young amethyst dragon and a githzerai zerth travel together, learning about the multiverse. |
| 3 | A young amethyst dragon wants to take over the cavern lair of a hydra. |
| 4 | A deep pool in a young amethyst dragon's lair leads to the underground domain of an aboleth the dragon has been seeking to eliminate. |
| 5 | A young amethyst dragon and a cloud giant regularly host each other to play strategy games. |
| 6 | Pegasi nesting in the mountain heights are under the protection of a young amethyst dragon. |
^connected-creatures
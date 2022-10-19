---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/gem
aliases: ["Ancient Amethyst Dragon"]
statblock: true
"name": "Ancient Amethyst Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"stats":
- !!int "26"
- !!int "14"
- !!int "27"
- !!int "26"
- !!int "19"
- !!int "23"
"speed": "walk 40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "15"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "18"
  "Arcana": !!int "22"
  "Persuasion": !!int "13"
"damage_resistances": "force, psychic"
"condition_immunities": "frightened, prone"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 23, +15 to\
    \ hit with spell attacks):\n\n1/day each: [blink](/compendium/spells/blink.md),\
    \ [control water](/compendium/spells/control-water.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [globe of\
    \ invulnerability](/compendium/spells/globe-of-invulnerability.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 13 (3d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon creates a shining bead of gravitational force in its mouth,\
    \ then releases the energy in a 90-foot cone. Each creature in that area must\
    \ make a DC 23 Strength saving throw. On a failed save, the creature takes 63\
    \ (14d8) force damage, and its speed becomes 0 until the start of the dragon's\
    \ next turn. On a successful save, the creature takes half as much damage, and\
    \ its speed isn't reduced."
  "name": "Singularity Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses a bonus action to end\
    \ it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 60 feet of it."
  "name": "Psychic Step"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon spits an amethyst that that explodes at a point it can see within\
    \ 60 feet of it. Each creature within a 20-foot-radius sphere centered on that\
    \ point must succeed on a DC 23 Dexterity saving throw or take 18 (4d8) force\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Explosive Crystal (Costs 3 Actions)"
"source":
- "FTD"
name: Ancient Amethyst Dragon
image: "[[Ancient Amethyst Dragon.png]]"
---

# Ancient Amethyst Dragon

```statblock
"name": "Ancient Amethyst Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"stats":
- !!int "26"
- !!int "14"
- !!int "27"
- !!int "26"
- !!int "19"
- !!int "23"
"speed": "walk 40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "15"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "18"
  "Arcana": !!int "22"
  "Persuasion": !!int "13"
"damage_resistances": "force, psychic"
"condition_immunities": "frightened, prone"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 23, +15 to\
    \ hit with spell attacks):\n\n1/day each: [blink](/compendium/spells/blink.md),\
    \ [control water](/compendium/spells/control-water.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [globe of\
    \ invulnerability](/compendium/spells/globe-of-invulnerability.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 13 (3d8) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon creates a shining bead of gravitational force in its mouth,\
    \ then releases the energy in a 90-foot cone. Each creature in that area must\
    \ make a DC 23 Strength saving throw. On a failed save, the creature takes 63\
    \ (14d8) force damage, and its speed becomes 0 until the start of the dragon's\
    \ next turn. On a successful save, the creature takes half as much damage, and\
    \ its speed isn't reduced."
  "name": "Singularity Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses a bonus action to end\
    \ it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 60 feet of it."
  "name": "Psychic Step"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon spits an amethyst that that explodes at a point it can see within\
    \ 60 feet of it. Each creature within a 20-foot-radius sphere centered on that\
    \ point must succeed on a DC 23 Dexterity saving throw or take 18 (4d8) force\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Explosive Crystal (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Ancient Amethyst Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 160*

## Description

Amethyst dragons, the mightiest of the gem dragons, study and psionically manipulate the fundamental principles of the multiverse, from the force of gravity to the emanations of the Outer Planes. Their innate psionics give them a measure of control over how physical laws affect them. They defy gravity with flight that doesn't rely solely upon their great wings, and gravitational force empowers both their devastating breath weapon and the exploding amethyst crystals they spit at their foes.

**Royal Purple.** When first hatched, an amethyst dragon has scales of dull, opaque purple. As the dragon grows, their scales, horns, and wing membranes become more vibrant and translucent. When the dragon is fully mature, their scales resemble rich purple amethyst crystals, refracting light to take on an inner glow. Their pupils fade with age, making the eyes of an ancient dragon resemble glowing white or pale lavender orbs. Crystalline horns reminiscent of amethyst chunks hover behind their heads, held there by telekinetic force and shifting with their moods.

**Cosmological Study.** Many amethyst dragons are fascinated by the existence of other worlds in the Material Plane, and especially the way individual dragons manifest unique echoes across those worlds. They also prize understanding of the cosmic forces that emanate from the Outer Planes, studying the opposing tides of good and evil, chaos and order, so they can offer counsel to those with the wisdom to accept it.

Amethyst dragons pay particular attention to intrusions of the Far Realm into the Material Plane. They loathe the corruption that accompanies such intrusions into the world, making them fierce opponents of the Far Realm and any creatures warped by its touch. Strangely, though, they are intrigued by and fond of flumphs. These Aberrations, which oppose the depredations of mind flayers and other wicked Aberrations, remind amethyst dragons that allies can be found in the strangest places.

**Hoarded Arcana.** In addition to material wealth, amethyst dragons delight in collecting knowledge and magic dealing with the nature of the planes of existence, cosmic forces, and distant worlds. They prize treasures drawn from different worlds of the Material Plane, especially magic items and artworks that highlight the unique nature of different worlds. Magic items that allow teleportation or travel between planes, spellbooks filled with similar magic, and treatises examining the nature of the multiverse form the centerpiece of an amethyst dragon's hoard.

**An Amethyst Dragon's Lair.** Amethyst dragons make their lairs in caves next to or under secluded pools and lakes, preferring caverns with at least one entrance submerged underwater. They prize locations with a combination of open space, connecting tunnels, and dead ends to make the most of their natural and magical mobility, using flight and teleportation to navigate obstacles in their lairs.

The challenge rating of a legendary amethyst dragon increases by 1 when it's encountered in its lair.
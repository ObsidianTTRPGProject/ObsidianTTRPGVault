---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/dragon/gem
aliases: ["Adult Crystal Dragon"]
statblock: true
"name": "Adult Crystal Dragon"
"size": "Huge"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "21"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "10"
  "Survival": !!int "6"
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [divination](/compendium/spells/divination.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [lesser restoration](/compendium/spells/lesser-restoration.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 60-foot cone. Each\
    \ creature in that area must make a DC 17 Constitution saving throw, taking 40\
    \ (9d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 15 temporary hit points by absorbing a portion of\
    \ the radiant energy."
  "name": "Scintillating Breath (Recharge 5-6)"
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
  "desc": "The dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases a searing beam of starlight at a creature that it can\
    \ see within 60 feet of it. The target must succeed on a DC 17 Dexterity saving\
    \ throw or take 31 (9d6) radiant damage."
  "name": "Starlight Strike (Costs 3 Actions)"
"source":
- "FTD"
name: Adult Crystal Dragon
image: "[[Adult Crystal Dragon.png]]"
---

# Adult Crystal Dragon

```statblock
"name": "Adult Crystal Dragon"
"size": "Huge"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "21"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "10"
  "Survival": !!int "6"
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [divination](/compendium/spells/divination.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [lesser restoration](/compendium/spells/lesser-restoration.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 60-foot cone. Each\
    \ creature in that area must make a DC 17 Constitution saving throw, taking 40\
    \ (9d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 15 temporary hit points by absorbing a portion of\
    \ the radiant energy."
  "name": "Scintillating Breath (Recharge 5-6)"
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
  "desc": "The dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon releases a searing beam of starlight at a creature that it can\
    \ see within 60 feet of it. The target must succeed on a DC 17 Dexterity saving\
    \ throw or take 31 (9d6) radiant damage."
  "name": "Starlight Strike (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Adult Crystal Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 171*

## Description

Shimmering with radiant energy and brimming with life, crystal dragons enjoy an innate psionic connection to the Positive Plane that suffuses their bodies as well as their personalities with light. Though they prefer to live in desolate, frigid regions, many of them are among the friendliest of dragonkind, nurturing and optimistic.

**Inner Glow.** When they hatch, crystal dragons have dull gray scales, with a few white or clear crystalline points, allowing the wyrmlings to blend in to rocky terrain in the face of danger. As they age, their scales turn snow white, then slowly fade to transparency. The oldest crystal dragons have scales of perfect clarity that bend and refract light, sometimes making them difficult to see clearly.

The radiant energy of the Positive Plane shimmers in crystal dragons' scales. It glows like starlight between their bodies and the spines and horns that hover close to their heads and backs. These horns shift with the dragon's mood: bristling with anger, lying back with fear or suspicion, and rippling in side-to-side waves with amusement or joy.

**Visions in Starlight.** Many crystal dragons study the stars, recording their observations of the night sky and tracking the signs written in starlight. They read these signs as omens, giving them glimpses of what is to come, and they eagerly examine the potential futures of any creatures who come to them in peace.

Crystal dragons' connection to the radiant forces of the Positive Plane fosters a nurturing, optimistic attitude in most of these dragons. They sometimes adopt the abandoned eggs or hatchlings of other dragons; many a white wyrmling has been raised in the caring environment of a crystal dragon's lair. But they fiercely oppose destructive forces in their home territories, which sometimes leads nearby frost giants and white dragons to put aside their mutual enmity to hunt them.

**Glittering Hoards.** For their treasure hoards, crystal dragons prize diamonds and baubles that refract light, collections of prophecy, works on astronomy, and star charts. When it comes to magical treasure, they seek items and spells that predict the future, create or manipulate light, or channel positive energy for healing and nurturing.

**A Crystal Dragon's Lair.** Crystal dragons dwell in cold regions, where they construct ice and snow structures reminiscent of castles but open to the sky. Glittering crystals scattered about their lairs glow with gathered starlight, and caves or tunnels beneath the ice and snow provide protected areas for their hoards. They use their burrowing ability to dig blinds and secret passages throughout their lairs, allowing them to move easily—and potentially unnoticed.

The challenge rating of a legendary crystal dragon increases by 1 when it's encountered in its lair.
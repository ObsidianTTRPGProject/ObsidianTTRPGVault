---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/gem
aliases: ["Ancient Crystal Dragon"]
statblock: true
"name": "Ancient Crystal Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "222"
"hit_dice": "12d20 + 96"
"stats":
- !!int "25"
- !!int "12"
- !!int "26"
- !!int "20"
- !!int "16"
- !!int "21"
"speed": "walk 40 ft., burrow 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Constitution": !!int "14"
"skillsaves":
  "Stealth": !!int "13"
  "Perception": !!int "15"
  "Survival": !!int "9"
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 25"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [divination](/compendium/spells/divination.md),\
    \ [greater restoration](/compendium/spells/greater-restoration.md), [hypnotic\
    \ pattern](/compendium/spells/hypnotic-pattern.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 9 (2d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 90-foot cone. Each\
    \ creature in that area must make a DC 22 Constitution saving throw, taking 49\
    \ (11d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 25 temporary hit points by absorbing a portion of\
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
    \ see within 60 feet of it. The target must succeed on a DC 19 Dexterity saving\
    \ throw or take 38 (11d6) radiant damage."
  "name": "Starlight Strike (Costs 3 Actions)"
"source":
- "FTD"
name: Ancient Crystal Dragon
image: "[[Ancient Crystal Dragon.png]]"
---

# Ancient Crystal Dragon

```statblock
"name": "Ancient Crystal Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "222"
"hit_dice": "12d20 + 96"
"stats":
- !!int "25"
- !!int "12"
- !!int "26"
- !!int "20"
- !!int "16"
- !!int "21"
"speed": "walk 40 ft., burrow 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Constitution": !!int "14"
"skillsaves":
  "Stealth": !!int "13"
  "Perception": !!int "15"
  "Survival": !!int "9"
"damage_resistances": "cold, radiant"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 25"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [command](/compendium/spells/command.md), [divination](/compendium/spells/divination.md),\
    \ [greater restoration](/compendium/spells/greater-restoration.md), [hypnotic\
    \ pattern](/compendium/spells/hypnotic-pattern.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 9 (2d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 90-foot cone. Each\
    \ creature in that area must make a DC 22 Constitution saving throw, taking 49\
    \ (11d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 25 temporary hit points by absorbing a portion of\
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
    \ see within 60 feet of it. The target must succeed on a DC 19 Dexterity saving\
    \ throw or take 38 (11d6) radiant damage."
  "name": "Starlight Strike (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Ancient Crystal Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 170*

## Description

Shimmering with radiant energy and brimming with life, crystal dragons enjoy an innate psionic connection to the Positive Plane that suffuses their bodies as well as their personalities with light. Though they prefer to live in desolate, frigid regions, many of them are among the friendliest of dragonkind, nurturing and optimistic.

**Inner Glow.** When they hatch, crystal dragons have dull gray scales, with a few white or clear crystalline points, allowing the wyrmlings to blend in to rocky terrain in the face of danger. As they age, their scales turn snow white, then slowly fade to transparency. The oldest crystal dragons have scales of perfect clarity that bend and refract light, sometimes making them difficult to see clearly.

The radiant energy of the Positive Plane shimmers in crystal dragons' scales. It glows like starlight between their bodies and the spines and horns that hover close to their heads and backs. These horns shift with the dragon's mood: bristling with anger, lying back with fear or suspicion, and rippling in side-to-side waves with amusement or joy.

**Visions in Starlight.** Many crystal dragons study the stars, recording their observations of the night sky and tracking the signs written in starlight. They read these signs as omens, giving them glimpses of what is to come, and they eagerly examine the potential futures of any creatures who come to them in peace.

Crystal dragons' connection to the radiant forces of the Positive Plane fosters a nurturing, optimistic attitude in most of these dragons. They sometimes adopt the abandoned eggs or hatchlings of other dragons; many a white wyrmling has been raised in the caring environment of a crystal dragon's lair. But they fiercely oppose destructive forces in their home territories, which sometimes leads nearby frost giants and white dragons to put aside their mutual enmity to hunt them.

**Glittering Hoards.** For their treasure hoards, crystal dragons prize diamonds and baubles that refract light, collections of prophecy, works on astronomy, and star charts. When it comes to magical treasure, they seek items and spells that predict the future, create or manipulate light, or channel positive energy for healing and nurturing.

**A Crystal Dragon's Lair.** Crystal dragons dwell in cold regions, where they construct ice and snow structures reminiscent of castles but open to the sky. Glittering crystals scattered about their lairs glow with gathered starlight, and caves or tunnels beneath the ice and snow provide protected areas for their hoards. They use their burrowing ability to dig blinds and secret passages throughout their lairs, allowing them to move easily—and potentially unnoticed.

The challenge rating of a legendary crystal dragon increases by 1 when it's encountered in its lair.
---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/gem
aliases: ["Ancient Emerald Dragon"]
statblock: true
"name": "Ancient Emerald Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "332"
"hit_dice": "19d20 + 133"
"stats":
- !!int "25"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "18"
- !!int "20"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "8"
  "Wisdom": !!int "11"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "12"
  "Stealth": !!int "8"
  "Perception": !!int "18"
  "Arcana": !!int "12"
"damage_resistances": "fire, psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 20):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [etherealness](/compendium/spells/etherealness.md), [major image](/compendium/spells/major-image.md),\
    \ [mislead](/compendium/spells/mislead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 20-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can cast [mirage arcane](/compendium/spells/mirage-arcane.md),\
    \ requiring no spell components and using Intelligence as the spellcasting ability."
  "name": "Warp Perception (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 10 (3d6) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a wave of psychic dissonance in a 90-foot cone. Each\
    \ creature in that area must make a DC 22 Intelligence saving throw. On a failed\
    \ save, the creature takes 56 (16d6) psychic damage, and until the end of its\
    \ next turn, when the creature makes an attack roll or an ability check, it must\
    \ roll a d8 and reduce the total by the number rolled. On a successful save, the\
    \ creature takes half as much damage with no additional effects."
  "name": "Disorienting Breath (Recharge 5-6)"
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
  "desc": "The dragon creates a dancing mote of green flame around a creature it can\
    \ see within 60 feet of it. The target must succeed on a DC 20 Dexterity saving\
    \ throw or take 42 (12d6) fire damage."
  "name": "Emerald Embers (Costs 3 Actions)"
"source":
- "FTD"
name: Ancient Emerald Dragon
image: "[[Ancient Emerald Dragon.png]]"
---

# Ancient Emerald Dragon

```statblock
"name": "Ancient Emerald Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"hp": !!int "332"
"hit_dice": "19d20 + 133"
"stats":
- !!int "25"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "18"
- !!int "20"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "8"
  "Wisdom": !!int "11"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "12"
  "Stealth": !!int "8"
  "Perception": !!int "18"
  "Arcana": !!int "12"
"damage_resistances": "fire, psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 28"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 20):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [etherealness](/compendium/spells/etherealness.md), [major image](/compendium/spells/major-image.md),\
    \ [mislead](/compendium/spells/mislead.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 20-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can cast [mirage arcane](/compendium/spells/mirage-arcane.md),\
    \ requiring no spell components and using Intelligence as the spellcasting ability."
  "name": "Warp Perception (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 10 (3d6) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a wave of psychic dissonance in a 90-foot cone. Each\
    \ creature in that area must make a DC 22 Intelligence saving throw. On a failed\
    \ save, the creature takes 56 (16d6) psychic damage, and until the end of its\
    \ next turn, when the creature makes an attack roll or an ability check, it must\
    \ roll a d8 and reduce the total by the number rolled. On a successful save, the\
    \ creature takes half as much damage with no additional effects."
  "name": "Disorienting Breath (Recharge 5-6)"
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
  "desc": "The dragon creates a dancing mote of green flame around a creature it can\
    \ see within 60 feet of it. The target must succeed on a DC 20 Dexterity saving\
    \ throw or take 42 (12d6) fire damage."
  "name": "Emerald Embers (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Ancient Emerald Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 195*

## Description

Emerald dragons are the most curious, cunning, and manipulative of the gem dragons, wielding psionic power to weave illusions to deceive and disorient. They cloak their own presence so they can observe other creatures without being discovered as they collect information on everything from local cultural practices to supernatural occurrences.

**Shimmering Green.** A wyrmling emerald dragon's scales are a dull, pale green, but they develop into richer and more varied shades of green as the dragon ages. Eventually, the scales become translucent and shimmer in the light, rippling as the dragon moves. The dragon's horns and spines hover above the body, moving and shifting along the back and tail to mirror the dragon's mood.

**Clever Concealment.** The shyest of the gem dragons, emerald dragons are also the most curious. They love to observe local settlements and peoples, using their psionic abilities to cloak themselves and watch from afar. When an emerald dragon is old enough, the dragon might take on the guise of a creature that can blend in with the local population, or at least get close without arousing suspicion. Once in a position to observe, the dragon studies the day-to-day life of local folk, with a keen interest in any magical phenomena.

Emerald dragons' attentiveness to unusual events makes them particularly useful to their sapphire dragon cousins, who hunt down Aberrations and seek evidence of Far Realm incursions into the Material Plane. These gem dragons often work together, with emerald dragons tracking the source of an incursion while sapphire dragons plan and execute a decisive purge—or recruit agents to do it for them.

Emerald dragons' preference for volcanic lairs often puts them in conflict with fire giants. Despite their reluctance to reveal themselves to strangers, emerald dragons might approach experienced adventurers in the hopes of pitting them against fire giant rivals.

**Hoarded Histories.** Emerald dragons prize knowledge, particularly local histories that focus on magical events and individuals. They usually know of places of power near their lairs and keep detailed records of how phenomena connected to those sites react to outside influences. They also avidly collect magic items and spells that create illusions, allowing them to better conceal their treasures from prying eyes and divinations.

**An Emerald Dragon's Lair.** Emerald dragons dwell in enormous caverns, lava tubes, and tunnel networks deep within the earth. They favor warm spaces, particularly in volcanic regions. Over time, their psychic presence seeps into the land surrounding their lairs, expanding their awareness and subconsciously luring their favorite food—giant lizards—to settle and thrive in the region.

Emerald dragons use the features of their lairs to confuse and imperil intruders. They dig additional tunnels that allow them to move through their lairs in multiple ways and set traps leading to yawning chasms or pools and flows of lava.

Emerald dragons take great pains to hide the chambers that house their hoards and collected lore, often using illusion magic and subtle construction around the natural features of their lairs to conceal their central hoard chambers from mundane and magical sight.

The challenge rating of a legendary emerald dragon increases by 1 when it's encountered in its lair.
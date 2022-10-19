---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon/gem
aliases: ["Young Crystal Dragon"]
statblock: true
"name": "Young Crystal Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "17"
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "8"
  "Survival": !!int "5"
"damage_resistances": "cold, radiant"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 30-foot cone. Each\
    \ creature in that area must make a DC 15 Constitution saving throw, taking 27\
    \ (6d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 10 temporary hit points by absorbing a portion of\
    \ the radiant energy."
  "name": "Scintillating Breath (Recharge 5-6)"
"source":
- "FTD"
name: Young Crystal Dragon
image: "[[Young Crystal Dragon.png]]"
---

# Young Crystal Dragon

```statblock
"name": "Young Crystal Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "17"
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "8"
  "Survival": !!int "5"
"damage_resistances": "cold, radiant"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md), [guidance](/compendium/spells/guidance.md)\n\
    \n1/day each: [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a burst of brilliant radiance in a 30-foot cone. Each\
    \ creature in that area must make a DC 15 Constitution saving throw, taking 27\
    \ (6d8) radiant damage on a failed save, or half as much damage on a successful\
    \ one. The dragon then gains 10 temporary hit points by absorbing a portion of\
    \ the radiant energy."
  "name": "Scintillating Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Young Crystal Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 172*

## Description

Shimmering with radiant energy and brimming with life, crystal dragons enjoy an innate psionic connection to the Positive Plane that suffuses their bodies as well as their personalities with light. Though they prefer to live in desolate, frigid regions, many of them are among the friendliest of dragonkind, nurturing and optimistic.

**Inner Glow.** When they hatch, crystal dragons have dull gray scales, with a few white or clear crystalline points, allowing the wyrmlings to blend in to rocky terrain in the face of danger. As they age, their scales turn snow white, then slowly fade to transparency. The oldest crystal dragons have scales of perfect clarity that bend and refract light, sometimes making them difficult to see clearly.

The radiant energy of the Positive Plane shimmers in crystal dragons' scales. It glows like starlight between their bodies and the spines and horns that hover close to their heads and backs. These horns shift with the dragon's mood: bristling with anger, lying back with fear or suspicion, and rippling in side-to-side waves with amusement or joy.

**Visions in Starlight.** Many crystal dragons study the stars, recording their observations of the night sky and tracking the signs written in starlight. They read these signs as omens, giving them glimpses of what is to come, and they eagerly examine the potential futures of any creatures who come to them in peace.

Crystal dragons' connection to the radiant forces of the Positive Plane fosters a nurturing, optimistic attitude in most of these dragons. They sometimes adopt the abandoned eggs or hatchlings of other dragons; many a white wyrmling has been raised in the caring environment of a crystal dragon's lair. But they fiercely oppose destructive forces in their home territories, which sometimes leads nearby frost giants and white dragons to put aside their mutual enmity to hunt them.

**Glittering Hoards.** For their treasure hoards, crystal dragons prize diamonds and baubles that refract light, collections of prophecy, works on astronomy, and star charts. When it comes to magical treasure, they seek items and spells that predict the future, create or manipulate light, or channel positive energy for healing and nurturing.

**Creating a Crystal Dragon.** Use the Crystal Dragon Personality Traits and Crystal Dragon Ideals tables to inspire your portrayal of distinctive crystal dragon characters.

**Crystal Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | If you're not a thief or a frost giant, let's talk! |
| 2 | Are you comfortable? Can I tell your future for you? Just let me know what I can do for you, okay? |
| 3 | Jokes are as valuable as any gemstone and more fun to share. |
| 4 | My empathy is a bottomless well. I can't help but lose myself in the emotions of others. |
| 5 | The stars have much to tell us, and folk need me to interpret what the stars say. |
| 6 | All play and no work—those are the words I live by. |
| 7 | I am always the first to offer a compliment. |
| 8 | Get off my snowfield, you immature bipeds! When I was a wyrmling, people respected their elders! |
^trait

**Crystal Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Exploration. Yesterday is already known. Today is for something new. (Chaotic) |
| 2 | Empathy. It's a gift to share in another's joy, even if sometimes you must bear their pain, too. (Good) |
| 3 | Hospitality. We all live beautiful lives—it would be a shame not to share our lives with others. (Neutral) |
| 4 | Determinism. Our destinies may already be written, but the way we achieve them still matters. (Any) |
| 5 | Fun and Games. Play is learning, but without the boredom. (Chaotic) |
| 6 | Control. Everyone is welcome, as long as they follow my rules. (Lawful) |
^ideal

**Crystal Dragon Adventures.** The Crystal Dragon Adventure Hooks table offers suggestions for stories and adventures involving crystal dragons.

**Crystal Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | A towering palace of ice and quartz that was once the abode of an ancient crystal dragon is found deserted, with no clue as to whether its master will return or whether some other creature has claimed it. |
| 2 | Prismatic shards rain from the sky in a beautiful but dangerous display. Rumors quickly spread that a crystal dragon is responsible. |
| 3 | A crystal dragon invites the greatest bards and philosophers to partake in "the Great Dialogue" in the dragon's mountaintop lair. But only the dragon knows that the Great Dialogue has no end, and no one can leave the lair once it has begun. |
| 4 | A crystal dragon intent on exploring a new world of the Material Plane has acquired a magic ship for the journey and now just needs a brave crew. |
| 5 | A crystal dragon who has guarded a mountain pass for decades unexpectedly retires to the Elemental Plane of Air. Monstrous forces immediately move into the area—and might take control of the pass unless the dragon can be convinced to return. |
| 6 | A royal heir goes missing while secretly visiting a crystal dragon. The heir's family, the heir's friends, and the dragon all want to find the heir, but no faction trusts the others. |
| 7 | A crystal dragon seeks bold adventurers to steal an egg from an ancient white dragon who is infamous for abject cruelty and utter remorselessness. |
| 8 | A crystal dragon has ripped open holes to the Elemental Planes of Air and Water, creating flash glaciation that encroaches upon inhabited lands. |
^adventure-hook

**Connected Creatures.** Crystal dragons are among the most social and hospitable of dragons. They are equal parts mysterious, contemplative, and mischievous, making it difficult to know what to expect of them.

**Young Crystal Dragon Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | A young crystal dragon tries to protect a local population of rare snowy owlbears from poachers and hunters. |
| 2 | A young crystal dragon has adopted a group of kobolds and is trying to teach them the value of a good practical joke. |
| 3 | A young crystal dragon has captured a pack of winter wolves loyal to a frost giant, intent on convincing the wolves to change their evil ways. |
| 4 | A lonely werebear enjoys long conversations with a young crystal dragon but doesn't always appreciate the dragon's sense of humor. |
| 5 | A young crystal dragon finds some manticores' bluster hilarious and befriends them despite their fear. But the dragon is having trouble overcoming the manticores' predatory nature. |
| 6 | A young crystal dragon uses dancing lights and hypnotic pattern to give an air of authenticity to a charlatan fortuneteller's act, in exchange for a portion of the take from the charlatan's clients. |
^connected-creatures
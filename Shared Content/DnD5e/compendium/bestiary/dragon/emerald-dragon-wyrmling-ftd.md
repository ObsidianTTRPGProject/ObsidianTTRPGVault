---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/dragon/gem
aliases: ["Emerald Dragon Wyrmling"]
statblock: true
"name": "Emerald Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft., burrow 20 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "5"
  "Arcana": !!int "4"
"damage_resistances": "fire, psychic"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 15"
"languages": "Draconic, telepathy 120 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage plus 3 (1d6) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a wave of psychic dissonance in a 15-foot cone. Each\
    \ creature in that area must make a DC 12 Intelligence saving throw. On a failed\
    \ save, the creature takes 17 (5d6) psychic damage, and until the end of its next\
    \ turn, when the creature makes an attack roll or an ability check, it must roll\
    \ a d4 and reduce the total by the number rolled. On a successful save, the creature\
    \ takes half as much damage with no additional effects."
  "name": "Disorienting Breath (Recharge 5-6)"
"source":
- "FTD"
name: Emerald Dragon Wyrmling
image: "[[Emerald Dragon Wyrmling.png]]"
---

# Emerald Dragon Wyrmling

```statblock
"name": "Emerald Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft., burrow 20 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Constitution": !!int "4"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "5"
  "Arcana": !!int "4"
"damage_resistances": "fire, psychic"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 15"
"languages": "Draconic, telepathy 120 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage plus 3 (1d6) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a wave of psychic dissonance in a 15-foot cone. Each\
    \ creature in that area must make a DC 12 Intelligence saving throw. On a failed\
    \ save, the creature takes 17 (5d6) psychic damage, and until the end of its next\
    \ turn, when the creature makes an attack roll or an ability check, it must roll\
    \ a d4 and reduce the total by the number rolled. On a successful save, the creature\
    \ takes half as much damage with no additional effects."
  "name": "Disorienting Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Emerald Dragon Wyrmling.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 197*

## Description

Emerald dragons are the most curious, cunning, and manipulative of the gem dragons, wielding psionic power to weave illusions to deceive and disorient. They cloak their own presence so they can observe other creatures without being discovered as they collect information on everything from local cultural practices to supernatural occurrences.

**Shimmering Green.** A wyrmling emerald dragon's scales are a dull, pale green, but they develop into richer and more varied shades of green as the dragon ages. Eventually, the scales become translucent and shimmer in the light, rippling as the dragon moves. The dragon's horns and spines hover above the body, moving and shifting along the back and tail to mirror the dragon's mood.

**Clever Concealment.** The shyest of the gem dragons, emerald dragons are also the most curious. They love to observe local settlements and peoples, using their psionic abilities to cloak themselves and watch from afar. When an emerald dragon is old enough, the dragon might take on the guise of a creature that can blend in with the local population, or at least get close without arousing suspicion. Once in a position to observe, the dragon studies the day-to-day life of local folk, with a keen interest in any magical phenomena.

Emerald dragons' attentiveness to unusual events makes them particularly useful to their sapphire dragon cousins, who hunt down Aberrations and seek evidence of Far Realm incursions into the Material Plane. These gem dragons often work together, with emerald dragons tracking the source of an incursion while sapphire dragons plan and execute a decisive purge—or recruit agents to do it for them.

Emerald dragons' preference for volcanic lairs often puts them in conflict with fire giants. Despite their reluctance to reveal themselves to strangers, emerald dragons might approach experienced adventurers in the hopes of pitting them against fire giant rivals.

**Hoarded Histories.** Emerald dragons prize knowledge, particularly local histories that focus on magical events and individuals. They usually know of places of power near their lairs and keep detailed records of how phenomena connected to those sites react to outside influences. They also avidly collect magic items and spells that create illusions, allowing them to better conceal their treasures from prying eyes and divinations.

**Creating an Emerald Dragon.** Use the Emerald Dragon Personality Traits and Emerald Dragon Ideals tables to inspire your portrayal of distinctive emerald dragon characters.

**Emerald Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I repeat what others have said back to them to make sure I have remembered it correctly. |
| 2 | I might not like you, but I will endeavor to treat you with respect, if not kindness. |
| 3 | I like to impress visitors by reciting epic poetry. |
| 4 | The only people I'm interested in are those who know history and those who make history. |
| 5 | I like to adopt the personas of characters from legend. |
| 6 | I studiously mimic the mannerisms of my guests. |
| 7 | I prefer to get others talking, then fade into the background. Sometimes literally. |
| 8 | I seek out audiences and like to be the center of attention. |
^trait

**Emerald Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Seclusion. It's safer if others don't know I'm here—safer for me and safer for them. (Any) |
| 2 | Observation. People lie. Histories lie. Even dragons lie. But actions always ring true. (Lawful) |
| 3 | Storytelling. There is a magic in the retelling of stories. Each new teller adds a bit of themself to the spell. (Any) |
| 4 | Nurture. Rearing a child is our best chance to make sure our own stories are passed on. (Any) |
| 5 | Inquisitiveness. Even the smallest village contains myriad stories of love, loss, triumph, and betrayal. There is always more to learn about people. (Any) |
| 6 | Espionage. Once I get paid for the information I glean, I don't care what others do with it. (Evil) |
^ideal

**Emerald Dragon Adventures.** The Emerald Dragon Adventure Hooks table offers suggestions for stories and adventures involving emerald dragons.

**Emerald Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | An emerald dragon is the only witness to a murder but doesn't want to be found or identified. |
| 2 | An emerald dragon seeks heroes to participate in a dramatic reenactment of a legendary battle involving dragon riders. |
| 3 | An emerald dragon's assault on a fire giant has attracted the attention of the giant's clan, and now the dragon seeks aid. |
| 4 | Villagers have been going missing, and then are found weeks later roaming the forest. They have no memory of the emerald dragon who charmed them for wandering too close to the dragon's lair. |
| 5 | Giant lizards drawn to the lair of a legendary emerald dragon are terrorizing a nearby halfling settlement. One solution is to get rid of the dragon. |
| 6 | An emerald dragon is the headmaster in absentia of a bardic college and must be convinced to defend the school in a contest against a rival college. |
| 7 | An emerald dragon invisibly tails a party of adventurers, causing trouble for the heroes so the dragon can watch how they respond. |
| 8 | An emerald dragon has been spying for a villainous cabal, ensuring the villains remain one step ahead of the adventurers. |
^adventure-hook

**Connected Creatures.** Emerald dragons generally go out of their way to avoid interacting with other intelligent creatures. However, their interest in history and culture occasionally gets the better of them, prompting them to seek some engagement with the folk of the world.

**Emerald Dragon Wyrmling Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | Blood hawks routinely accost an emerald dragon wyrmling who lairs near the hawks' nest. |
| 2 | An emerald dragon wyrmling is being hunted by a fire giant's pet hell hound. |
| 3 | An emerald dragon wyrmling follows a berserker to observe the berserker's life. The berserker believes the dragon is a spirit companion. |
| 4 | A flattering orog plies an emerald dragon wyrmling with gems in exchange for information about a settlement the wyrmling has been observing. |
| 5 | An emerald dragon wyrmling keeps trying to play with a pair of newly hatched fire snakes. |
| 6 | An emerald dragon wyrmling has been captured by scheming duergar, who plan to use the wyrmling as bait to lure the wyrmling's parents out of their lair. |
^connected-creatures
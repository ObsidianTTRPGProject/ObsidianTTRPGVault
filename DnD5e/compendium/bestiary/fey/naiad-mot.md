---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/fey
aliases: ["Naiad"]
statblock: true
"name": "Naiad"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "18"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each:\
    \ [fly](/compendium/spells/fly.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad makes two psychic touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) psychic damage."
  "name": "Psychic Touch"
"source":
- "MOT"
- "CM"
name: Naiad
image: "[[Naiad.png]]"
---

# Naiad

```statblock
"name": "Naiad"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "18"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each:\
    \ [fly](/compendium/spells/fly.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [phantasmal force](/compendium/spells/phantasmal-force.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad is [invisible](/rules/conditions.md#invisible) while fully immersed\
    \ in water."
  "name": "Invisible in Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naiad makes two psychic touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) psychic damage."
  "name": "Psychic Touch"
"source":
- "MOT"
- "CM"
"image": "[[Naiad.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 236, Candlekeep Mysteries*

## Description

Naiads live in and near water. They might be spotted among rivers and lakes, on isolated shores, or amid coral labyrinths and deep sea fumaroles. Wherever rivers and seas show their variety and force, naiads gather to revel in nature's might. Individual naiads often grow fixated with a single type or body of water, potentially preferring a deep sea trench, coastline, or river system above all others. Over time, such a resident nymph often becomes connected with their aquatic home through sightings and stories, becoming a guardian of the place and, in effect, a manifestation of its personality.

**Aquatic Collectors.** Curious by nature, naiads often seek out what the seas and rivers claim. As a result, they might be found among sunken ruins and shipwrecks, sifting through the remains for whatever catches their eye. Living creatures aren't exempt from this curiosity, either. Naiads are known to befriend aquatic creatures, or even to keep modest menageries. The occasional star-crossed castaway has even been known to become part of such collections.

**Secret Routes of the Sea.** Sailors across the world claim that naiads know all the secret aquatic routes of Theros. Using this hidden system of currents and arteries, a ship might reach any destination in record time, be it across the sea or along a river a hundred miles inland. Naiads do nothing to dissuade sailors from this belief, and certainly numerous reports tell of charmed nymphs leading lost seafarers home. Yet, if tales of naiad-led galleys appearing amid the headwaters of mountain rivers are true, only the nymphs know for sure.

**Nymphs.** Divine servants that inhabit unspoiled corners of the world, nymphs protect places of natural power and infuse their surroundings with the magic of Nyx. Some are benevolent and aid those who live off the land, while others embody violent aspects of nature. In either case, nymphs generally avoid other sapient creatures, preferring to mind the cycles of nature, the daily interplay of wild animals, or other cosmic forces. Occasionally, though, groups of the same kind of nymphs congregate in a place of natural power or beauty. In times of special need, deities tied to facets of nature might employ nymphs as messengers, guardians, or scouts.

**Immortal Nature.** A nymph doesn't require food, drink, or sleep.
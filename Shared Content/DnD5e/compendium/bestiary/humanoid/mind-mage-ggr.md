---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Mind Mage"]
statblock: true
"name": "Mind Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "5"
  "Arcana": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage's spellcasting ability is Intelligence (spell save DC 16). It\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [encode thoughts](/compendium/spells/encode-thoughts-ggr.md) (see chapter 2),\
    \ [friends](/compendium/spells/friends.md)\n\n1/day each: [dominate person](/compendium/spells/dominate-person.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [modify memory](/compendium/spells/modify-memory.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [sleep](/compendium/spells/sleep.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage wears a [spies' murmur](/compendium/items/spies-murmur-ggr.md)\
    \ (see chapter 5)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "GGR"
name: Mind Mage
image: "[[Mind Mage.png]]"
---

# Mind Mage

```statblock
"name": "Mind Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "5"
  "Arcana": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 12"
"languages": "Common plus any four languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage's spellcasting ability is Intelligence (spell save DC 16). It\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [encode thoughts](/compendium/spells/encode-thoughts-ggr.md) (see chapter 2),\
    \ [friends](/compendium/spells/friends.md)\n\n1/day each: [dominate person](/compendium/spells/dominate-person.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [modify memory](/compendium/spells/modify-memory.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [sleep](/compendium/spells/sleep.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mage wears a [spies' murmur](/compendium/items/spies-murmur-ggr.md)\
    \ (see chapter 5)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "GGR"
"image": "[[Mind Mage.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 233*

## Description

Dimir mind mages are among the most feared spellcasters in Ravnica, thanks in large part to the aura of mystery that shrouds them and their work. Their ability to read and alter memories commands respect from the other members of House Dimir and makes them useful in the full spectrum of the guild's activities. Many mind mages lead cells of their own.
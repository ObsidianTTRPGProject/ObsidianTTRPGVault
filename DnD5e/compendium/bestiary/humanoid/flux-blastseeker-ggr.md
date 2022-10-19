---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Flux Blastseeker"]
statblock: true
"name": "Flux Blastseeker"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "20"
- !!int "9"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker's innate spellcasting ability is Intelligence (spell save\
    \ DC 16, +8 to hit with spell attacks). The blastseeker can innately cast the\
    \ following spells, requiring no components other than its Izzet gear, which doesn't\
    \ function for others:\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [fireball](/compendium/spells/fireball.md), [ice storm](/compendium/spells/ice-storm.md)\n\
    \n3/day each: [mage armor](/compendium/spells/mage-armor.md) (self only),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker can create an additional effect immediately after casting\
    \ a spell. Roll a d6 to determine the effect: 1-3. The blastseeker teleports,\
    \ swapping places with a creature it can see within 30 feet of it. 4-6. The blastseeker\
    \ and each creature within 10 feet of it must succeed on a DC 16 Constitution\
    \ saving throw or take 11 (2d10) thunder damage."
  "name": "Fluxbending Overcast (Recharge 5-6)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "GGR"
name: Flux Blastseeker
image: "[[Flux Blastseeker.png]]"
---

# Flux Blastseeker

```statblock
"name": "Flux Blastseeker"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "20"
- !!int "9"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common plus any one language"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker's innate spellcasting ability is Intelligence (spell save\
    \ DC 16, +8 to hit with spell attacks). The blastseeker can innately cast the\
    \ following spells, requiring no components other than its Izzet gear, which doesn't\
    \ function for others:\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [fireball](/compendium/spells/fireball.md), [ice storm](/compendium/spells/ice-storm.md)\n\
    \n3/day each: [mage armor](/compendium/spells/mage-armor.md) (self only),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blastseeker can create an additional effect immediately after casting\
    \ a spell. Roll a d6 to determine the effect: 1-3. The blastseeker teleports,\
    \ swapping places with a creature it can see within 30 feet of it. 4-6. The blastseeker\
    \ and each creature within 10 feet of it must succeed on a DC 16 Constitution\
    \ saving throw or take 11 (2d10) thunder damage."
  "name": "Fluxbending Overcast (Recharge 5-6)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "GGR"
"image": "[[Flux Blastseeker.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 242*

## Description

While chemisters focus on inventing new tools, weapons, and other devices for the guild to use, the role of a blastseeker is to put those devices to work. Despite the name, not all such devices produce explosions, but all the most interesting ones (from the Izzet perspective) do.
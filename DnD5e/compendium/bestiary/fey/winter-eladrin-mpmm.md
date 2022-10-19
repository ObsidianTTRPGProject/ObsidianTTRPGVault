---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fey/elf
- monster/environment/arctic
- monster/environment/forest
aliases: ["Winter Eladrin"]
statblock: true
"name": "Winter Eladrin"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [fog cloud](/compendium/spells/fog-cloud.md), [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 13 Wisdom saving throw. On a failed save, the creature becomes\
    \ [charmed](/rules/conditions.md#charmed) by the eladrin for 1 minute. While [charmed](/rules/conditions.md#charmed)\
    \ in this way, the creature has disadvantage on ability checks and saving throws.\
    \ The [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success. If\
    \ a creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to any eladrin's Sorrowful Presence for the next 24 hours.\n\nWhenever\
    \ the eladrin deals damage to the [charmed](/rules/conditions.md#charmed) creature,\
    \ the [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw,\
    \ ending the effect on itself on a success."
  "name": "Sorrowful Presence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin makes two Longsword or Longbow attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ slashing damage, or 5 (1d10) slashing damage if used with two hands, plus 13\
    \ (3d8) cold damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 13 (3d8) cold damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the eladrin takes damage from a creature the eladrin can see within\
    \ 60 feet of it, the eladrin can force that creature to make a DC 16 Constitution\
    \ saving throw. On a failed save, the creature takes 11 (2d10) cold damage."
  "name": "Frigid Rebuke"
"source":
- "MPMM"
- "MTF"
name: Winter Eladrin
image: "[[Winter Eladrin.png]]"
---

# Winter Eladrin

```statblock
"name": "Winter Eladrin"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [fog cloud](/compendium/spells/fog-cloud.md), [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 13 Wisdom saving throw. On a failed save, the creature becomes\
    \ [charmed](/rules/conditions.md#charmed) by the eladrin for 1 minute. While [charmed](/rules/conditions.md#charmed)\
    \ in this way, the creature has disadvantage on ability checks and saving throws.\
    \ The [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success. If\
    \ a creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to any eladrin's Sorrowful Presence for the next 24 hours.\n\nWhenever\
    \ the eladrin deals damage to the [charmed](/rules/conditions.md#charmed) creature,\
    \ the [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw,\
    \ ending the effect on itself on a success."
  "name": "Sorrowful Presence"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin makes two Longsword or Longbow attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ slashing damage, or 5 (1d10) slashing damage if used with two hands, plus 13\
    \ (3d8) cold damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage plus 13 (3d8) cold damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the eladrin takes damage from a creature the eladrin can see within\
    \ 60 feet of it, the eladrin can force that creature to make a DC 16 Constitution\
    \ saving throw. On a failed save, the creature takes 11 (2d10) cold damage."
  "name": "Frigid Rebuke"
"source":
- "MPMM"
- "MTF"
"image": "[[Winter Eladrin.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 117, Mordenkainen's Tome of Foes p. 197*

## Description

When sorrow distresses eladrin, they enter the winter season, becoming figures of melancholy. Frozen tears drop from their cheeks, and their palpable sadness emanates from them as icy cold.

**Eladrin.** > [!quote]- A quote from Tasha  
> 
> If an autumn eladrin invites you over for dinner, come with an empty stomach. Their goodwill extends to heaping portions.
> 
> Note to self: send some of my spring eladrin friends to visit Mordenkainen. That'll teach him to lighten up.

Eladrin dwell in the verdant splendor of the Feywild. They are related to the elves found on the Material Plane. But while other elves can temper their wild impulses, eladrin are ruled by emotion—and due to their magical nature, they undergo physical changes to match their changes in temperament.

Eladrin have spent centuries in the Feywild, and most of them have become Fey creatures as a result—those presented here are of the Fey variety. Some are still Humanoid, however, similar in that respect to their other elven kin.

The magic flowing through eladrin responds to their emotional state by transforming them into different seasonal aspects, with behaviors and abilities that change with their forms. Some eladrin might remain in a particular aspect for years, while others run through the emotional spectrum each week.

**Changeable Natures.** Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [incapacitated](/rules/conditions.md#incapacitated). When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

## Environment

arctic, forest
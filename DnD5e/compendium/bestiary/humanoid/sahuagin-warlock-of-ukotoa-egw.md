---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/humanoid/sahuagin
aliases: ["Sahuagin Warlock of Uk'otoa"]
statblock: true
"name": "Sahuagin Warlock of Uk'otoa"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "8"
- !!int "8"
- !!int "16"
"speed": "walk 30 ft., swim 40 ft."
"skillsaves":
  "Arcana": !!int "1"
  "Persuasion": !!int "5"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "Common, Sahuagin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock's innate spellcasting ability is Charisma (spell save DC 13,\
    \ +5 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [eldritch blast](/compendium/spells/eldritch-blast.md)\
    \ (see \"Actions\" below), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1/day each: [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [arms of Hadar](/compendium/spells/arms-of-hadar.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [hunger of Hadar](/compendium/spells/hunger-of-hadar.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes two attacks: one with its bite and one with its Sword\
    \ of Fathoms."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 13 Constitution saving throw or begin choking. The choking creature is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn, when the effect ends on it."
  "name": "Sword of Fathoms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one creature. Hit: 5 (1d10)\
    \ force damage."
  "name": "Eldritch Blast (Cantrip)"
"source":
- "EGW"
name: Sahuagin Warlock of Uk'otoa
image: "[[Sahuagin Warlock of Uk'otoa.png]]"
---

# Sahuagin Warlock of Uk'otoa

```statblock
"name": "Sahuagin Warlock of Uk'otoa"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "8"
- !!int "8"
- !!int "16"
"speed": "walk 30 ft., swim 40 ft."
"skillsaves":
  "Arcana": !!int "1"
  "Persuasion": !!int "5"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "Common, Sahuagin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock's innate spellcasting ability is Charisma (spell save DC 13,\
    \ +5 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [eldritch blast](/compendium/spells/eldritch-blast.md)\
    \ (see \"Actions\" below), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1/day each: [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [arms of Hadar](/compendium/spells/arms-of-hadar.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [hunger of Hadar](/compendium/spells/hunger-of-hadar.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The warlock makes two attacks: one with its bite and one with its Sword\
    \ of Fathoms."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 13 Constitution saving throw or begin choking. The choking creature is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn, when the effect ends on it."
  "name": "Sword of Fathoms"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one creature. Hit: 5 (1d10)\
    \ force damage."
  "name": "Eldritch Blast (Cantrip)"
"source":
- "EGW"
"image": "[[Sahuagin Warlock of Uk'otoa.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 297*

## Description

The slumbering leviathan Uk'otoa preys on the fears and ambitions of humanoids that brave the depths of the Lucidian Ocean. Countless communities of sahuagin inhabit uncharted pockets of water along the Menagerie Coast, and the most ambitious among them often hear the call of the leviathan in their dreams, urging them to take his power and use it to achieve their bloodsoaked dreams.

Sahuagin who answer the call of Uk'otoa tend to have one ambition in common: vengeance against the land dwellers of the Clovis Concord for daring to sail oceans that do not belong to them. As these devotees receive dark boons from their leviathan lord, other sahuagin begin to gather to their side, drawn to their displays of power and seeking their own pathway to power. Over time, these warlocks eventually become empty husks, mere receptacles for Uk'otoa's power, and puppets that the slumbering leviathan can control as he pleases.
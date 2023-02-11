---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/medium
- monster/type/humanoid/wizard
aliases: ["Princess Xedalli"]
statblock: true
"name": "Princess Xedalli"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "103"
"hit_dice": "23d8"
"stats":
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "21"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common, Draconic, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\n1/day each: [fly](/compendium/spells/fly.md), [mislead](/compendium/spells/mislead.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli wears a suit of elven chain."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli makes two Scimitar attacks and uses Radiant Beam (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 10 (3d6) radiant damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical beam of radiance flashes out from Xedalli's hand in a 5-foot-wide,\
    \ 60-foot-long line. Each creature in the line must make a DC 16 Constitution\
    \ saving throw, taking 18 (4d8) radiant damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Radiant Beam (3/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli has a 50 percent chance of magically summoning a [young solar dragon](/compendium/bestiary/dragon/young-solar-dragon-bam.md).\
    \ A summoned dragon appears in an unoccupied space that the summoner can see,\
    \ acts on its own initiative count, and is an ally of its summoner. It remains\
    \ for 10 minutes, until it or its summoner dies, or until its summoner dismisses\
    \ it as an action."
  "name": "Summon Solar Dragon (1/Day)"
"source":
- "LoX"
name: Princess Xedalli
image: "[[Princess Xedalli.png]]"
---

# Princess Xedalli

```statblock
"name": "Princess Xedalli"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "103"
"hit_dice": "23d8"
"stats":
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "21"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common, Draconic, Elvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\n1/day each: [fly](/compendium/spells/fly.md), [mislead](/compendium/spells/mislead.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli wears a suit of elven chain."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli makes two Scimitar attacks and uses Radiant Beam (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 10 (3d6) radiant damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical beam of radiance flashes out from Xedalli's hand in a 5-foot-wide,\
    \ 60-foot-long line. Each creature in the line must make a DC 16 Constitution\
    \ saving throw, taking 18 (4d8) radiant damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Radiant Beam (3/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Xedalli has a 50 percent chance of magically summoning a [young solar dragon](/compendium/bestiary/dragon/young-solar-dragon-bam.md).\
    \ A summoned dragon appears in an unoccupied space that the summoner can see,\
    \ acts on its own initiative count, and is an ally of its summoner. It remains\
    \ for 10 minutes, until it or its summoner dies, or until its summoner dismisses\
    \ it as an action."
  "name": "Summon Solar Dragon (1/Day)"
"source":
- "LoX"
"image": "[[Princess Xedalli.png]]"
```
^statblock

*Source: Light of Xaryxis p. 11*
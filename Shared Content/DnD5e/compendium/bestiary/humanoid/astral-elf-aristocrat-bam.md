---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/humanoid/wizard
aliases: ["Astral Elf Aristocrat"]
statblock: true
"name": "Astral Elf Aristocrat"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
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
  "desc": "The elf casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\n1/day each: [fly](/compendium/spells/fly.md), [mislead](/compendium/spells/mislead.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf wears a suit of elven chain."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf makes two Scimitar attacks and uses Radiant Beam (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 10 (3d6) radiant damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical beam of radiance flashes out from the elf's hand in a 5-foot-wide,\
    \ 60-foot-long line. Each creature in the line must make a DC 16 Constitution\
    \ saving throw, taking 18 (4d8) radiant damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Radiant Beam (3/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has a 50 percent chance of magically summoning a [young solar dragon](/compendium/bestiary/dragon/young-solar-dragon-bam.md).\
    \ A summoned dragon appears in an unoccupied space that the summoner can see,\
    \ acts on its own initiative count, and is an ally of its summoner. It remains\
    \ for 10 minutes, until it or its summoner dies, or until its summoner dismisses\
    \ it as an action."
  "name": "Summon Solar Dragon (1/Day)"
"source":
- "BAM"
- "LoX"
name: Astral Elf Aristocrat
image: "[[Astral Elf Aristocrat.png]]"
---

# Astral Elf Aristocrat

```statblock
"name": "Astral Elf Aristocrat"
"size": "Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
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
  "desc": "The elf casts one of the following spells, using Intelligence as the spellcasting\
    \ ability:\n\n1/day each: [fly](/compendium/spells/fly.md), [mislead](/compendium/spells/mislead.md),\
    \ [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf wears a suit of elven chain."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf makes two Scimitar attacks and uses Radiant Beam (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage plus 10 (3d6) radiant damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical beam of radiance flashes out from the elf's hand in a 5-foot-wide,\
    \ 60-foot-long line. Each creature in the line must make a DC 16 Constitution\
    \ saving throw, taking 18 (4d8) radiant damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Radiant Beam (3/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has a 50 percent chance of magically summoning a [young solar dragon](/compendium/bestiary/dragon/young-solar-dragon-bam.md).\
    \ A summoned dragon appears in an unoccupied space that the summoner can see,\
    \ acts on its own initiative count, and is an ally of its summoner. It remains\
    \ for 10 minutes, until it or its summoner dies, or until its summoner dismisses\
    \ it as an action."
  "name": "Summon Solar Dragon (1/Day)"
"source":
- "BAM"
- "LoX"
"image": "[[Astral Elf Aristocrat.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 11, Light of Xaryxis*

## Description

An astral elf aristocrat is a brilliant, highborn leader gifted with magical abilities, including the power to channel sunlight and summon a solar dragon.

**Astral Elves.** Long ago, some elves ventured to the Astral Plane to be closer to their gods. There, they ceased to age and could exist indefinitely without sustenance.

Astral elves were among the first creatures to dwell in the Silver Void. As other explorers have reached for the stars, astral elves have had to reckon with violent neighbors and strange visitors. Over the eons, astral elves have clashed with numerous invaders, including psurlons, mind flayers, and githyanki. When dealing with others, astral elves customarily cover their faces with ornate visors, becoming faceless extensions of their gods. Their fierce devotion to the pantheon of elven deities is repaid with divine power. For example, the gods invest astral elf warriors with the power to channel the radiant energy of starlight through their weapons, just as they empower astral elf leaders with the ability to cast spells and summon solar dragons.

Astral elves ply the Astral Sea and Wildspace in ships of their own design. These ships are fashioned from crystals harvested from Wildspace systems and bound together with an organic, plant-based material that hardens like ceramic. The elves sculpt these substances in various configurations to create star moths (see the _Astral Adventurer's Guide_) and other vessels. The elves also reshape the petrified bodies of dead gods found adrift in the Silver Void, transforming them into floating cities and citadels.

Although the Silver Void is their home, astral elves often venture into Wildspace systems and place their ships and citadels in orbit around stars. Astral elves do this for several reasons. Proximity to a star allows the astral elves to forge pacts with solar dragons and to collect starlight, which the elves use to grow crystals and repair their ships. Most important, astral elves use their time outside the Deep Astral to replenish their numbers by having and raising children.

Many astral elves are thousands (in some cases tens of thousands) of years old. Whatever their disposition, their longevity gives astral elves a perspective on time that few other kinds of creatures can appreciate. Whether they choose to live in quiet contemplation or strike out to explore the far reaches of the multiverse, astral elves tend to see events happening elsewhere as having little or no meaning to them.

> [!quote] Astral Elves of Xaryxis
> 
> The adventure,_Light of Xaryxis_features an amoral astral elf society called the Xaryxian Empire. This empire is based in Xaryxispace, a Wildspace system illuminated by an enormous radiant sun named Xaryxis.
^astral-elves-of-xaryxis
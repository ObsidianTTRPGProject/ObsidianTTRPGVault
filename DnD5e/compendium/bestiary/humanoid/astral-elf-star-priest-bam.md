---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/humanoid/cleric
aliases: ["Astral Elf Star Priest"]
statblock: true
"name": "Astral Elf Star Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "8"
  "Intelligence": !!int "6"
"skillsaves":
  "Medicine": !!int "8"
  "Religion": !!int "6"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Celestial, Common, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 16):\n\n1/day each: [divination](/compendium/spells/divination.md),\
    \ [sending](/compendium/spells/sending.md), [word of recall](/compendium/spells/word-of-recall.md)\n\
    \n2/day each: [cure wounds](/compendium/spells/cure-wounds.md) (8th-level\
    \ version), [hold person](/compendium/spells/hold-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf makes two Morningstar attacks. It can use Rain of Radiance in place\
    \ of one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ piercing damage plus 17 (5d6) radiant damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, flame-like radiance rains down on a creature that the elf can\
    \ see within 60 feet of itself. The target must make a DC 16 Dexterity saving\
    \ throw, taking 22 (5d8) radiant damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Rain of Radiance"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (2/Day)"
"source":
- "BAM"
- "LoX"
name: Astral Elf Star Priest
image: "[[Astral Elf Star Priest.png]]"
---

# Astral Elf Star Priest

```statblock
"name": "Astral Elf Star Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "8"
  "Intelligence": !!int "6"
"skillsaves":
  "Medicine": !!int "8"
  "Religion": !!int "6"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Celestial, Common, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 16):\n\n1/day each: [divination](/compendium/spells/divination.md),\
    \ [sending](/compendium/spells/sending.md), [word of recall](/compendium/spells/word-of-recall.md)\n\
    \n2/day each: [cure wounds](/compendium/spells/cure-wounds.md) (8th-level\
    \ version), [hold person](/compendium/spells/hold-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf has advantage on saving throws it makes to avoid or end the [charmed](/rules/conditions.md#charmed)\
    \ condition on itself, and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf makes two Morningstar attacks. It can use Rain of Radiance in place\
    \ of one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ piercing damage plus 17 (5d6) radiant damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, flame-like radiance rains down on a creature that the elf can\
    \ see within 60 feet of itself. The target must make a DC 16 Dexterity saving\
    \ throw, taking 22 (5d8) radiant damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Rain of Radiance"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elf magically teleports up to 30 feet, along with anything it is wearing\
    \ or carrying, to an unoccupied space it can see."
  "name": "Starlight Step (2/Day)"
"source":
- "BAM"
- "LoX"
"image": "[[Astral Elf Star Priest.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 13, Light of Xaryxis*

## Description

Star priests draw their strength from the pantheon of elven gods and oversee religious practices in astral elf society. It's common for them to serve aboard spelljamming ships, not only as emissaries of the gods but also as spelljammers.

**Astral Elves.** Long ago, some elves ventured to the Astral Plane to be closer to their gods. There, they ceased to age and could exist indefinitely without sustenance.

Astral elves were among the first creatures to dwell in the Silver Void. As other explorers have reached for the stars, astral elves have had to reckon with violent neighbors and strange visitors. Over the eons, astral elves have clashed with numerous invaders, including psurlons, mind flayers, and githyanki. When dealing with others, astral elves customarily cover their faces with ornate visors, becoming faceless extensions of their gods. Their fierce devotion to the pantheon of elven deities is repaid with divine power. For example, the gods invest astral elf warriors with the power to channel the radiant energy of starlight through their weapons, just as they empower astral elf leaders with the ability to cast spells and summon solar dragons.

Astral elves ply the Astral Sea and Wildspace in ships of their own design. These ships are fashioned from crystals harvested from Wildspace systems and bound together with an organic, plant-based material that hardens like ceramic. The elves sculpt these substances in various configurations to create star moths (see the _Astral Adventurer's Guide_) and other vessels. The elves also reshape the petrified bodies of dead gods found adrift in the Silver Void, transforming them into floating cities and citadels.

Although the Silver Void is their home, astral elves often venture into Wildspace systems and place their ships and citadels in orbit around stars. Astral elves do this for several reasons. Proximity to a star allows the astral elves to forge pacts with solar dragons and to collect starlight, which the elves use to grow crystals and repair their ships. Most important, astral elves use their time outside the Deep Astral to replenish their numbers by having and raising children.

Many astral elves are thousands (in some cases tens of thousands) of years old. Whatever their disposition, their longevity gives astral elves a perspective on time that few other kinds of creatures can appreciate. Whether they choose to live in quiet contemplation or strike out to explore the far reaches of the multiverse, astral elves tend to see events happening elsewhere as having little or no meaning to them.

> [!quote] Astral Elves of Xaryxis
> 
> The adventure,_Light of Xaryxis_features an amoral astral elf society called the Xaryxian Empire. This empire is based in Xaryxispace, a Wildspace system illuminated by an enormous radiant sun named Xaryxis.
^astral-elves-of-xaryxis
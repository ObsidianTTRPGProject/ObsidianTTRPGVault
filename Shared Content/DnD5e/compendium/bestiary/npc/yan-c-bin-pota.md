---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/huge
- monster/type/elemental
aliases: ["Yan-C-Bin"]
statblock: true
"name": "Yan-C-Bin"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "22"
"hp": !!int "283"
"hit_dice": "21d12 + 147"
"stats":
- !!int "18"
- !!int "24"
- !!int "24"
- !!int "16"
- !!int "21"
- !!int "23"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "13"
  "Wisdom": !!int "11"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "blindsight 120 ft., passive Perception 15"
"languages": "Auran"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin's innate spellcasting ability is Charisma (spell save DC 20,\
    \ +12 to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n2/day each: [chain lightning](/compendium/spells/chain-lightning.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [haste](/compendium/spells/haste.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin can enter a hostile creature's space and stop there. He can move\
    \ through a space as narrow as 1 inch wide without squeezing if air could pass\
    \ through that space."
  "name": "Air Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin's slam attacks are treated as magical for the purpose of bypassing\
    \ resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yan-C-Bin fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) force damage plus 10 (3d6) lightning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin unleashes a terrible thundercrack in a 100-foot-radius sphere\
    \ centered on himself. All other creatures in the area must succeed on a DC 24\
    \ Constitution saving throw or take 31 (9d6) thunder damage and be [deafened](/rules/conditions.md#deafened)\
    \ for 1 minute. On a successful save, a creature takes half as much damage and\
    \ is [deafened](/rules/conditions.md#deafened) until the start of Yan-C-Bin's\
    \ next turn."
  "name": "Thundercrack (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin polymorphs into a Medium humanoid. While in polymorphed form,\
    \ a swirling breeze surrounds him, his eyes are pale and cloudy, and he loses\
    \ the Air Form trait. He can remain in polymorphed form for up to 1 hour. Reverting\
    \ to his true form requires an action."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin summons up to three [air elementals](/compendium/bestiary/elemental/air-elemental.md)\
    \ and loses 30 hit points for each elemental he summons. Summoned elementals have\
    \ maximum hit points, appear within 100 feet of Yan-C-Bin, and disappear if Yan-C-Bin\
    \ is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin unleashes a peal of thunder that can be heard out to a range\
    \ of 300 feet. Each creature within 30 feet of Yan-C-Bin takes 5 (1d10) thunder\
    \ damage."
  "name": "Peal of Thunder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin magically teleports up to 120 feet to an unoccupied space he\
    \ can see. Anything Yan-C-Bin is wearing or carrying is teleported with him."
  "name": "Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin steals the air of one breathing creature he can see within 60\
    \ feet of him. The target must make a DC 21 Constitution saving throw. On a failed\
    \ save, the target drops to 0 hit points and is dying. On a successful save, the\
    \ target can't breathe or speak until the start of its next turn."
  "name": "Suffocate (Costs 3 Actions)"
"source":
- "PotA"
name: Yan-C-Bin
image: "[[Yan-C-Bin.png]]"
---

# Yan-C-Bin

```statblock
"name": "Yan-C-Bin"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "22"
"hp": !!int "283"
"hit_dice": "21d12 + 147"
"stats":
- !!int "18"
- !!int "24"
- !!int "24"
- !!int "16"
- !!int "21"
- !!int "23"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "13"
  "Wisdom": !!int "11"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "blindsight 120 ft., passive Perception 15"
"languages": "Auran"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin's innate spellcasting ability is Charisma (spell save DC 20,\
    \ +12 to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n2/day each: [chain lightning](/compendium/spells/chain-lightning.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [haste](/compendium/spells/haste.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin can enter a hostile creature's space and stop there. He can move\
    \ through a space as narrow as 1 inch wide without squeezing if air could pass\
    \ through that space."
  "name": "Air Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin's slam attacks are treated as magical for the purpose of bypassing\
    \ resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Yan-C-Bin fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 20 (3d8\
    \ + 7) force damage plus 10 (3d6) lightning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin unleashes a terrible thundercrack in a 100-foot-radius sphere\
    \ centered on himself. All other creatures in the area must succeed on a DC 24\
    \ Constitution saving throw or take 31 (9d6) thunder damage and be [deafened](/rules/conditions.md#deafened)\
    \ for 1 minute. On a successful save, a creature takes half as much damage and\
    \ is [deafened](/rules/conditions.md#deafened) until the start of Yan-C-Bin's\
    \ next turn."
  "name": "Thundercrack (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin polymorphs into a Medium humanoid. While in polymorphed form,\
    \ a swirling breeze surrounds him, his eyes are pale and cloudy, and he loses\
    \ the Air Form trait. He can remain in polymorphed form for up to 1 hour. Reverting\
    \ to his true form requires an action."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin summons up to three [air elementals](/compendium/bestiary/elemental/air-elemental.md)\
    \ and loses 30 hit points for each elemental he summons. Summoned elementals have\
    \ maximum hit points, appear within 100 feet of Yan-C-Bin, and disappear if Yan-C-Bin\
    \ is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin unleashes a peal of thunder that can be heard out to a range\
    \ of 300 feet. Each creature within 30 feet of Yan-C-Bin takes 5 (1d10) thunder\
    \ damage."
  "name": "Peal of Thunder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin magically teleports up to 120 feet to an unoccupied space he\
    \ can see. Anything Yan-C-Bin is wearing or carrying is teleported with him."
  "name": "Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Yan-C-Bin steals the air of one breathing creature he can see within 60\
    \ feet of him. The target must make a DC 21 Constitution saving throw. On a failed\
    \ save, the target drops to 0 hit points and is dying. On a successful save, the\
    \ target can't breathe or speak until the start of its next turn."
  "name": "Suffocate (Costs 3 Actions)"
"source":
- "PotA"
"image": "[[Yan-C-Bin.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 221*

## Description

Yan-C-Bin (pronounced yan-see-bin) is the Prince of Evil Air. A being of great wisdom and malice, Yan-C-Bin's plots began at the forging of the worlds. Subtler than the other elemental princes, Yan-C-Bin operates unseen, studying his enemies from afar, ambushing them swiftly, and vanishing before his foes can retaliate.

His natural form is an invisible vortex of howling, swirling air 30 feet high and 15 feet wide, but Yan-C-Bin sometimes takes the shape of a gaunt, venerable, dark-skinned human with wispy white hair and glowing white eyes. When he wishes to remain unseen, Yan-C-Bin manifests only as a gust of cold wind flowing silently past.

From his floating palace in the endless, cloudy skies of the Plane of Air, Yan-C-Bin watches worlds as they change over millennia. Evil aerial creatures worship the elemental prince as a god, and claim to see Yan-C-Bin's eyes in swirling storms. Yan-C-Bin doesn't care for their offerings, their sacrifices, or their worship. His only concern is the annihilation of the material realms as they are ripped apart by the superior elemental might of air and wind.

**Yan-C-Bin's Lair.** Yan-C-Bin dwells in a palace of air on the Elemental Plane of Air. In his palace and in air nodes on the Material Plane (including the Howling Caves, described in chapter 5), Yan-C-Bin is master. He can use the following actions in his lair.
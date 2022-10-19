---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/gargantuan
- monster/type/elemental
aliases: ["Ogrémoch"]
statblock: true
"name": "Ogrémoch"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "526"
"hit_dice": "27d20 + 243"
"stats":
- !!int "26"
- !!int "11"
- !!int "28"
- !!int "11"
- !!int "15"
- !!int "22"
"speed": "walk 50 ft., burrow 50 ft."
"saves":
  "Wisdom": !!int "8"
  "Strength": !!int "14"
  "Constitution": !!int "15"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone"
"senses": "blindsight 120 ft., tremorsense 120 ft., passive Perception 12"
"languages": "Common, Terran"
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's innate spellcasting ability is Charisma (spell save DC 20, +12\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [move earth](/compendium/spells/move-earth.md), [wall of stone](/compendium/spells/wall-of-stone.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's slam attacks are treated as magical and adamantine for the purpose\
    \ of bypassing resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ogrémoch fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch deals double damage to objects and structures with his melee and\
    \ ranged weapon attacks."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 30 (4d10\
    \ + 8) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 500 ft., one target. Hit: 46 (7d10\
    \ + 8) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 23 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Boulder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch summons up to three [earth elementals](/compendium/bestiary/elemental/earth-elemental.md)\
    \ and loses 30 hit points for each elemental he summons. Summoned elementals have\
    \ maximum hit points, appear within 100 feet of Ogrémoch, and disappear if Ogré\
    moch is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's crystalline protrusions flare. Each creature within 30 feet\
    \ of Ogrémoch becomes outlined in orange light, shedding dim light in a 10-foot\
    \ radius. Any attack roll against an affected creature has advantage if the attacker\
    \ can see it, and the affected creature can't benefit from being [invisible](/rules/conditions.md#invisible)."
  "name": "Illuminating Crystals"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch stomps the ground, creating an earth tremor that extends in a\
    \ 30-foot radius. Other creatures standing on the ground in that radius must succeed\
    \ on a DC 23 Dexterity saving throw or fall [prone](/rules/conditions.md#prone)."
  "name": "Stomp (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's hit points are reduced by 50 as he breaks off a chunk of his\
    \ body and places it on the ground in an unoccupied space within 15 feet of him.\
    \ The chunk of rock instantly transforms into a [gargoyle](/compendium/bestiary/elemental/gargoyle.md)\
    \ and acts on the same initiative count as Ogrémoch. Ogrémoch can't use this action\
    \ if he has 50 hit points or fewer. The gargoyle obeys Ogrémoch's commands and\
    \ fights until destroyed."
  "name": "Create Gargoyle (Costs 3 Actions)"
"source":
- "PotA"
name: Ogrémoch
image: "[[Ogrémoch.png]]"
---

# Ogrémoch

```statblock
"name": "Ogrémoch"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "526"
"hit_dice": "27d20 + 243"
"stats":
- !!int "26"
- !!int "11"
- !!int "28"
- !!int "11"
- !!int "15"
- !!int "22"
"speed": "walk 50 ft., burrow 50 ft."
"saves":
  "Wisdom": !!int "8"
  "Strength": !!int "14"
  "Constitution": !!int "15"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone"
"senses": "blindsight 120 ft., tremorsense 120 ft., passive Perception 12"
"languages": "Common, Terran"
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's innate spellcasting ability is Charisma (spell save DC 20, +12\
    \ to hit with spell attacks). He can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [move earth](/compendium/spells/move-earth.md), [wall of stone](/compendium/spells/wall-of-stone.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's slam attacks are treated as magical and adamantine for the purpose\
    \ of bypassing resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Ogrémoch fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch deals double damage to objects and structures with his melee and\
    \ ranged weapon attacks."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 30 (4d10\
    \ + 8) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 500 ft., one target. Hit: 46 (7d10\
    \ + 8) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 23 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Boulder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch summons up to three [earth elementals](/compendium/bestiary/elemental/earth-elemental.md)\
    \ and loses 30 hit points for each elemental he summons. Summoned elementals have\
    \ maximum hit points, appear within 100 feet of Ogrémoch, and disappear if Ogré\
    moch is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's crystalline protrusions flare. Each creature within 30 feet\
    \ of Ogrémoch becomes outlined in orange light, shedding dim light in a 10-foot\
    \ radius. Any attack roll against an affected creature has advantage if the attacker\
    \ can see it, and the affected creature can't benefit from being [invisible](/rules/conditions.md#invisible)."
  "name": "Illuminating Crystals"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch stomps the ground, creating an earth tremor that extends in a\
    \ 30-foot radius. Other creatures standing on the ground in that radius must succeed\
    \ on a DC 23 Dexterity saving throw or fall [prone](/rules/conditions.md#prone)."
  "name": "Stomp (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ogrémoch's hit points are reduced by 50 as he breaks off a chunk of his\
    \ body and places it on the ground in an unoccupied space within 15 feet of him.\
    \ The chunk of rock instantly transforms into a [gargoyle](/compendium/bestiary/elemental/gargoyle.md)\
    \ and acts on the same initiative count as Ogrémoch. Ogrémoch can't use this action\
    \ if he has 50 hit points or fewer. The gargoyle obeys Ogrémoch's commands and\
    \ fights until destroyed."
  "name": "Create Gargoyle (Costs 3 Actions)"
"source":
- "PotA"
"image": "[[Ogrémoch.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 216*

## Description

The Prince of Evil Earth is Ogrémoch (pronounced oh-gray-mock), the Mountain that Walks. His natural form is a shambling, 50-foot-tall colossus of rock, with crystal growths embedded throughout his body. When he bothers to speak, his voice sounds like grinding stones.

Ogrémoch is a miser who regards all the resources and treasures found in the ground as his own. He holds nothing but contempt for mortals (or any other denizens of the Material Plane) and desires nothing more than to crush and subjugate whomever he encounters. What he can't crush, he endures and outlasts.

Ogrémoch especially resents any mortals that dare to remove valuable metal or stone from the earth, and those who shape or build things of stone. He notices each nugget of gold or raw gemstone removed from areas under his influence, seeking to reclaim treasures "stolen" from him-and to punish the thieves. When the Prince of Evil Earth gains access to the Material Plane through an elemental node, he begins to methodically locate and destroy every mine, quarry, town, or fortification in the area. It's not that he needs the wealth, but the principle of the thing-extracting treasure from the earth-is anathema to Ogrémoch.

**Ogrémoch's Lair.** Ogrémoch is normally found in the depths of elemental earth, choosing caverns with black crystals and jagged rock spikes to serve as his throne room. He can enter the Material Plane through large and well-established nodes of elemental earth, with a little help from the proper rituals. Within such a node, Ogrémoch wields great power.
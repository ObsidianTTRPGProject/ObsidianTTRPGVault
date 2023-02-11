---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/medium
- monster/type/monstrosity
aliases: ["Assassin Bug"]
statblock: true
"name": "Assassin Bug"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "13"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "poison"
"condition_immunities": "paralyzed"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands Druidic but can't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin bug has advantage on Wisdom (Perception) checks that rely\
    \ on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin bug makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. While [poisoned](/rules/conditions.md#poisoned)\
    \ this way, the target is [paralyzed](/rules/conditions.md#paralyzed). The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: The target\
    \ is infested with 1d3 assassin bug eggs, which immediately hatch into assassin\
    \ bug maggots. At the start of each of the target's turns, the target takes 1d6\
    \ piercing damage per maggot infesting it. Applying fire to the bite wound before\
    \ the end of the target's next turn deals 1 fire damage to the target and kills\
    \ these assassin bug maggots. After this time, the maggots are too far under the\
    \ skin to be burned.\n\nIf a target infested by assassin bug maggots ends its\
    \ turn with 0 hit points, it dies as the maggots burrow into its heart and kill\
    \ it. Any effect that cures disease kills all assassin bug maggots infesting the\
    \ target."
  "name": "Ovipositor"
"source":
- "MFF"
name: Assassin Bug
image: "[[Assassin Bug.png]]"
---

# Assassin Bug

```statblock
"name": "Assassin Bug"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "13"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "poison"
"condition_immunities": "paralyzed"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands Druidic but can't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin bug has advantage on Wisdom (Perception) checks that rely\
    \ on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin bug makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. While [poisoned](/rules/conditions.md#poisoned)\
    \ this way, the target is [paralyzed](/rules/conditions.md#paralyzed). The target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: The target\
    \ is infested with 1d3 assassin bug eggs, which immediately hatch into assassin\
    \ bug maggots. At the start of each of the target's turns, the target takes 1d6\
    \ piercing damage per maggot infesting it. Applying fire to the bite wound before\
    \ the end of the target's next turn deals 1 fire damage to the target and kills\
    \ these assassin bug maggots. After this time, the maggots are too far under the\
    \ skin to be burned.\n\nIf a target infested by assassin bug maggots ends its\
    \ turn with 0 hit points, it dies as the maggots burrow into its heart and kill\
    \ it. Any effect that cures disease kills all assassin bug maggots infesting the\
    \ target."
  "name": "Ovipositor"
"source":
- "MFF"
"image": "[[Assassin Bug.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 4*

## Description

Assassin bugs plague the frontier and the wilderness, where they seek to hatch their voracious maggots within [incapacitated](/rules/conditions.md#incapacitated) hosts. Resembling giant bluebottle flies, these insectile terrors bear stunted humanoid limbs hinting at the bizarre ceremonies that created them.

**Dangerous Cultivation.** While the exact origins of the assassin bug are uncertain, rumors speak of an ancient sect of druids (possibly in service to Malar or Talos) who cultivated the first of these creatures. However, it remains unknown whether their intent was to create a benign means of breaking down monstrous corpses or a more insidious means of ridding the wilderness of growing humanoid populations. Little information survives regarding this sect, but the assassin bugs' unsettling humanoid-like limbs and limited language ability suggests that the druids might have engaged in self-sacrifice to achieve their creation.

**Horrific Egg Layers.** An assassin bug attacks with a paralytic bite to first incapacitate its prey, making it easy to infect that [paralyzed](/rules/conditions.md#paralyzed) victim with eggs. However, they are able to infest any target as needed, and will do so to eliminate threats. Given their need to lay eggs in a living host, assassin bugs generally flee from constructs and undead. Once deposited within a living host, assassin bug eggs immediately hatch into assassin bug maggots that burrow toward their victim's heart, consuming it and killing the host unless they are quickly destroyed. After gorging themselves on the host's body over several days, the maggots emerge as juvenile assassin bugs, ready to continue their horrid life cycle.

**An Unnatural Plague.** Whole settlements along the frontier have been wiped out by plagues of assassin bugs. Without a quickly organized defense, even a single bug can infest and overwhelm an unprepared population. Desperate rulers discovering that settlements are at risk often order entire neighborhoods or whole villages burned at the first sign of infestation. Within infested areas, guards patrol with burning brands and flaming swords, ready to set suspect dwellings ablaze. Fire is an effective destroyer of assassin bug maggots, and wild creatures observed running headfirst into wildfires often reveal an infestation of assassin bugs, as they immolate themselves in an instinctive effort to rid themselves of this scourge.

**Monstrous Interactions.** Few creatures are able to survive an assassin bug's infestation without immediately being treated with magic or fire. Incredibly hardy monsters such as catoblepas and gorgons have sometimes been observed with deep pockmarks showing where juvenile assassin bugs have emerged from their bodies. Vile creatures such as hags sometimes cultivate assassin bugs to use their maggots in horrid recipes. And trolls have been known to intentionally allow assassin bugs to infest their bodies, which heal against the wounds of a maggot infestation and allow those maggots to be pulled out and consumed.
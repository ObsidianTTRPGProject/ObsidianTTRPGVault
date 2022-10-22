---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/aberration/mind-flayer
- monster/environment/underdark
aliases: ["Elder Brain"]
statblock: true
"name": "Elder Brain"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "15"
- !!int "10"
- !!int "20"
- !!int "21"
- !!int "19"
- !!int "24"
"speed": "walk 5 ft., swim 10 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
"skillsaves":
  "Intimidation": !!int "12"
  "Deception": !!int "12"
  "Insight": !!int "14"
  "Arcana": !!int "10"
  "Persuasion": !!int "12"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "understands Common, Deep Speech, and Undercommon but can't speak, telepathy\
  \ 5 miles"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n3/day: [modify\
    \ memory](/compendium/spells/modify-memory.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain is aware of creatures within 5 miles of it that have an\
    \ Intelligence score of 4 or higher. It knows the distance and direction to each\
    \ creature, as well as each one's Intelligence score, but can't sense anything\
    \ else about it. A creature protected by a [mind blank](/compendium/spells/mind-blank.md)\
    \ spell, a [nondetection](/compendium/spells/nondetection.md) spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elder brain fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain can use its telepathy to initiate and maintain telepathic\
    \ conversations with up to ten creatures at a time. The elder brain can let those\
    \ creatures telepathically hear each other while connected in this way."
  "name": "Telepathic Hub"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (4d8\
    \ + 2) bludgeoning damage. If the target is a Huge or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15) and takes 9 (1d8 +\
    \ 5) psychic damage at the start of each of its turns until the grapple ends.\
    \ The elder brain can have up to four targets [grappled](/rules/conditions.md#grappled)\
    \ at a time."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures of the elder brain's choice within 60 feet of it must succeed\
    \ on a DC 18 Intelligence saving throw or take 32 (5d10 + 5) psychic damage and\
    \ be [stunned](/rules/conditions.md#stunned) for 1 minute. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Mind Blast (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one [incapacitated](/rules/conditions.md#incapacitated)\
    \ creature it senses with its Creature Sense trait and establishes a psychic link\
    \ with the target. Until the link ends, the elder brain can perceive everything\
    \ the target senses. The target becomes aware that something is linked to its\
    \ mind once it is no longer [incapacitated](/rules/conditions.md#incapacitated),\
    \ and the elder brain can terminate the link at any time (no action required).\
    \ The target can use an action on its turn to attempt to break the link, doing\
    \ so with a successful DC 18 Charisma saving throw. On a successful save, the\
    \ target takes 10 (3d6) psychic damage. The link also ends if the target and the\
    \ elder brain are more than 5 miles apart. The elder brain can form psychic links\
    \ with up to ten creatures at a time."
  "name": "Psychic Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets a creature with which it has a psychic link. The\
    \ elder brain gains insight into the target's emotional state and foremost thoughts\
    \ (including worries, loves, and hates)."
  "name": "Sense Thoughts"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The elder brain breaks the creature's concentration on a\
    \ spell it has cast. The creature also takes 2 (1d4) psychic damage per level\
    \ of the spell."
  "name": "Break Concentration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The target and enemies of the elder brain within 30 feet\
    \ of target take 10 (3d6) psychic damage."
  "name": "Psychic Pulse"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The elder brain ends the link, causing the creature to have\
    \ disadvantage on all ability checks, attack rolls, and saving throws until the\
    \ end of the creature's next turn."
  "name": "Sever Psychic Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain makes one Tentacle attack."
  "name": "Tentacle (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
name: Elder Brain
image: "[[Elder Brain.png]]"
---

# Elder Brain

```statblock
"name": "Elder Brain"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"stats":
- !!int "15"
- !!int "10"
- !!int "20"
- !!int "21"
- !!int "19"
- !!int "24"
"speed": "walk 5 ft., swim 10 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
"skillsaves":
  "Intimidation": !!int "12"
  "Deception": !!int "12"
  "Insight": !!int "14"
  "Arcana": !!int "10"
  "Persuasion": !!int "12"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "understands Common, Deep Speech, and Undercommon but can't speak, telepathy\
  \ 5 miles"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n3/day: [modify\
    \ memory](/compendium/spells/modify-memory.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain is aware of creatures within 5 miles of it that have an\
    \ Intelligence score of 4 or higher. It knows the distance and direction to each\
    \ creature, as well as each one's Intelligence score, but can't sense anything\
    \ else about it. A creature protected by a [mind blank](/compendium/spells/mind-blank.md)\
    \ spell, a [nondetection](/compendium/spells/nondetection.md) spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the elder brain fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain can use its telepathy to initiate and maintain telepathic\
    \ conversations with up to ten creatures at a time. The elder brain can let those\
    \ creatures telepathically hear each other while connected in this way."
  "name": "Telepathic Hub"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (4d8\
    \ + 2) bludgeoning damage. If the target is a Huge or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15) and takes 9 (1d8 +\
    \ 5) psychic damage at the start of each of its turns until the grapple ends.\
    \ The elder brain can have up to four targets [grappled](/rules/conditions.md#grappled)\
    \ at a time."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Creatures of the elder brain's choice within 60 feet of it must succeed\
    \ on a DC 18 Intelligence saving throw or take 32 (5d10 + 5) psychic damage and\
    \ be [stunned](/rules/conditions.md#stunned) for 1 minute. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Mind Blast (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one [incapacitated](/rules/conditions.md#incapacitated)\
    \ creature it senses with its Creature Sense trait and establishes a psychic link\
    \ with the target. Until the link ends, the elder brain can perceive everything\
    \ the target senses. The target becomes aware that something is linked to its\
    \ mind once it is no longer [incapacitated](/rules/conditions.md#incapacitated),\
    \ and the elder brain can terminate the link at any time (no action required).\
    \ The target can use an action on its turn to attempt to break the link, doing\
    \ so with a successful DC 18 Charisma saving throw. On a successful save, the\
    \ target takes 10 (3d6) psychic damage. The link also ends if the target and the\
    \ elder brain are more than 5 miles apart. The elder brain can form psychic links\
    \ with up to ten creatures at a time."
  "name": "Psychic Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets a creature with which it has a psychic link. The\
    \ elder brain gains insight into the target's emotional state and foremost thoughts\
    \ (including worries, loves, and hates)."
  "name": "Sense Thoughts"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The elder brain breaks the creature's concentration on a\
    \ spell it has cast. The creature also takes 2 (1d4) psychic damage per level\
    \ of the spell."
  "name": "Break Concentration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The target and enemies of the elder brain within 30 feet\
    \ of target take 10 (3d6) psychic damage."
  "name": "Psychic Pulse"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain targets one creature within 120 feet of it with which it\
    \ has a psychic link. The elder brain ends the link, causing the creature to have\
    \ disadvantage on all ability checks, attack rolls, and saving throws until the\
    \ end of the creature's next turn."
  "name": "Sever Psychic Link"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elder brain makes one Tentacle attack."
  "name": "Tentacle (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
"image": "[[Elder Brain.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 120, Volo's Guide to Monsters p. 173*

## Description

The ultimate expression of mind flayer domination, an elder brain sprawls within a vat of viscous brine, cared for by mind flayer minions as it touches the thoughts of creatures near and far. It scrawls upon the canvas of the creatures' minds, rewriting their thoughts and authoring their dreams.

An elder brain sustains itself by consuming the brains of other creatures. If its mind flayer servants don't bring meals directly to it, the elder brain reaches out with tendrils of thought, compelling creatures to come to it so that it can feed on them.

When a mind flayer perishes, the elder brain's servants feed its brain to their master, which then absorbs the knowledge and experience contained therein. Mind flayers conceive of this oneness with the elder brain as a sacred state akin to an afterlife.

**Hive Mind.** Elder brains are so-called among non-illithids because they act as the central communication hub for an entire mind flayer colony, just as a brain does for a living body. Linked to the elder brain, the colony acts like a single organism, acting in concert as if each illithid were the digit of a hand.

An elder brain considers itself and its desires the most important things in the multiverse, and the mind flayers in its colony nothing more than extensions of its will. Each presides over its colony according to its own unique personality and storehouse of collected knowledge and experience. Some elder brains reign as tyrants, while others serve as sages, counselors, and repositories of information and lore for the mind flayers that protect and nourish them.

**An Elder Brain's Lair.** The lair of an elder brain lies deep in the heart of a mind flayer colony. The brain dwells in a dimly glowing brine pool filled with brackish water infused with its vital fluids and psionic energy.

An elder brain's ambitions are always tempered by its relative immobility. Although its telepathic senses can reach for miles, moving anywhere is always a dangerous proposition. If forced outside its brine pool, an elder brain swiftly expires, and transporting an elder brain in its pool through confining and tortuous subterranean tunnels frequently proves difficult or impossible.

## Environment

underdark
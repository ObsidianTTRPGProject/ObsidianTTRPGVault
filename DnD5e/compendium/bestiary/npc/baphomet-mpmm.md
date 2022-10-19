---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Baphomet"]
statblock: true
"name": "Baphomet"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "319"
"hit_dice": "22d12 + 176"
"stats":
- !!int "30"
- !!int "14"
- !!int "26"
- !!int "18"
- !!int "24"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "17"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n1/day:\
    \ [teleport](/compendium/spells/teleport.md)\n\n3/day each: [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [maze](/compendium/spells/maze.md),\
    \ [wall of stone](/compendium/spells/wall-of-stone.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet can perfectly recall any path he has traveled, and he is immune\
    \ to the [maze](/compendium/spells/maze.md) spell."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Baphomet fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet makes one Bite attack, one Gore attack, and one Heartcleaver attack.\
    \ He also uses Frightful Presence."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) piercing damage. If Baphomet moved at least 10 feet straight toward the\
    \ target immediately before the hit, the target takes an extra 16 (3d10) piercing\
    \ damage. If the target is a creature, it must succeed on a DC 25 Strength saving\
    \ throw or be pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) force damage."
  "name": "Heartcleaver"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Baphomet's choice within 120 feet of him and aware of\
    \ him must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/rules/conditions.md#frightened) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. These later saves have disadvantage if Baphomet is within line\
    \ of sight of the creature.\n\nIf a creature succeeds on any of these saves or\
    \ the effect ends on it, the creature is immune to Baphomet's Frightful Presence\
    \ for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet makes one Heartcleaver attack."
  "name": "Heartcleaver Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet moves up to his speed without provoking opportunity attack||opportunity\
    \ attacks, then makes a Gore attack."
  "name": "Charge (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Baphomet
image: "[[Baphomet.png]]"
---

# Baphomet

```statblock
"name": "Baphomet"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "319"
"hit_dice": "22d12 + 176"
"stats":
- !!int "30"
- !!int "14"
- !!int "26"
- !!int "18"
- !!int "24"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "17"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n1/day:\
    \ [teleport](/compendium/spells/teleport.md)\n\n3/day each: [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [maze](/compendium/spells/maze.md),\
    \ [wall of stone](/compendium/spells/wall-of-stone.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet can perfectly recall any path he has traveled, and he is immune\
    \ to the [maze](/compendium/spells/maze.md) spell."
  "name": "Labyrinthine Recall"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Baphomet fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet makes one Bite attack, one Gore attack, and one Heartcleaver attack.\
    \ He also uses Frightful Presence."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) piercing damage. If Baphomet moved at least 10 feet straight toward the\
    \ target immediately before the hit, the target takes an extra 16 (3d10) piercing\
    \ damage. If the target is a creature, it must succeed on a DC 25 Strength saving\
    \ throw or be pushed up to 10 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) force damage."
  "name": "Heartcleaver"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Baphomet's choice within 120 feet of him and aware of\
    \ him must succeed on a DC 18 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/rules/conditions.md#frightened) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. These later saves have disadvantage if Baphomet is within line\
    \ of sight of the creature.\n\nIf a creature succeeds on any of these saves or\
    \ the effect ends on it, the creature is immune to Baphomet's Frightful Presence\
    \ for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet makes one Heartcleaver attack."
  "name": "Heartcleaver Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Baphomet moves up to his speed without provoking opportunity attack||opportunity\
    \ attacks, then makes a Gore attack."
  "name": "Charge (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Baphomet.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 58, Mordenkainen's Tome of Foes p. 143*

## Description

Civilization is weakness and brutality is strength in the credo of Baphomet, the Horned King and the Prince of Beasts. He is worshiped by those who want to break the confines of civility and unleash their bestial natures, for Baphomet envisions a world without restraint, where creatures live out their most bloodthirsty desires.

Cults devoted to Baphomet use mazes and complex knots as their emblems. They create secret places to indulge themselves, including labyrinths of the sort their master favors. Bloodstained crowns and weapons of iron and brass decorate their profane altars.

Over time, a mpmm becomes tainted by his influence, gaining bloodshot eyes and coarse, thickening hair. Small horns eventually sprout from the cultist's forehead. In time, a devoted cultist might transform entirely into a minotaur, which is considered the greatest gift of the Prince of Beasts.

Baphomet appears as a fearsome, 20-foot-tall minotaur with six iron horns. A fiendish light burns in his red eyes. Although he is filled with bestial blood lust, there lies within him a cruel and cunning intellect devoted to subverting all civilization.

Baphomet wields a great glaive called Heartcleaver. He also charges his enemies and gores them with his horns, trampling his foes into the earth and rending them with his teeth like a beast.

**Cultists of Baphomet.** > [!note]
> See the Cult of Baphomet

**Baphomet's Lair.** Baphomet's lair is his palace, the Lyktion, which is on the layer of the Abyss called the Endless Maze. Nestled within the twisting passages of the planewide labyrinth, the Lyktion is immaculately maintained and surrounded by a moat constructed in the fashion of a three-dimensional maze. The palace is a towering structure whose interior is as labyrinthine as the plane on which it stands; it is populated by [minotaurs](/compendium/bestiary/monstrosity/minotaur.md), [goristros](/compendium/bestiary/fiend/goristro.md), and [quasits](/compendium/bestiary/fiend/quasit.md).
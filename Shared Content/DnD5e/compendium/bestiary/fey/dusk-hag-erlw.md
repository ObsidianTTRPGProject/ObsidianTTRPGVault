---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/fey
aliases: ["Dusk Hag"]
statblock: true
"name": "Dusk Hag"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "6"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
"condition_immunities": "blinded, charmed, frightened"
"senses": "blindsight 60 ft., passive Perception 16"
"languages": "Common, Giant, Infernal"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md)\n\
    \n1/day each: [legend lore](/compendium/spells/legend-lore.md), [scrying](/compendium/spells/scrying.md)\n\
    \n3/day each: [dream](/compendium/spells/dream.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [sleep](/compendium/spells/sleep.md) (9d8)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag makes two Nightmare Touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 18 (4d6\
    \ + 4) psychic damage. If the target is [unconscious](/rules/conditions.md#unconscious),\
    \ it takes an extra 10 (3d6) psychic damage and is cursed until the hag dies or\
    \ the curse is removed. The cursed creature's hit point maximum decreases by 5\
    \ (1d10) whenever it finishes a long rest."
  "name": "Nightmare Touch"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When an [unconscious](/rules/conditions.md#unconscious) creature the hag\
    \ can see within 30 feet of her regains consciousness, the hag can force the creature\
    \ to make a DC 15 Wisdom saving throw. Unless the save succeeds, the creature\
    \ takes 11 (2d10) psychic damage, and the hag regains hit points equal to the\
    \ amount of damage taken."
  "name": "Dream Eater"
"source":
- "ERLW"
name: Dusk Hag
image: "[[Dusk Hag.png]]"
---

# Dusk Hag

```statblock
"name": "Dusk Hag"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "6"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
"condition_immunities": "blinded, charmed, frightened"
"senses": "blindsight 60 ft., passive Perception 16"
"languages": "Common, Giant, Infernal"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md)\n\
    \n1/day each: [legend lore](/compendium/spells/legend-lore.md), [scrying](/compendium/spells/scrying.md)\n\
    \n3/day each: [dream](/compendium/spells/dream.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [sleep](/compendium/spells/sleep.md) (9d8)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag makes two Nightmare Touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 18 (4d6\
    \ + 4) psychic damage. If the target is [unconscious](/rules/conditions.md#unconscious),\
    \ it takes an extra 10 (3d6) psychic damage and is cursed until the hag dies or\
    \ the curse is removed. The cursed creature's hit point maximum decreases by 5\
    \ (1d10) whenever it finishes a long rest."
  "name": "Nightmare Touch"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When an [unconscious](/rules/conditions.md#unconscious) creature the hag\
    \ can see within 30 feet of her regains consciousness, the hag can force the creature\
    \ to make a DC 15 Wisdom saving throw. Unless the save succeeds, the creature\
    \ takes 11 (2d10) psychic damage, and the hag regains hit points equal to the\
    \ amount of damage taken."
  "name": "Dream Eater"
"source":
- "ERLW"
"image": "[[Dusk Hag.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 292*

## Description

Dusk hags resemble gnarled crones with shriveled orange skin, tangled gray hair, and eyes that burn like hot coals. They see visions of the future in their dreams, and their dark magic allows them to influence the dreams of others, sending messages or inflicting nightmares with a touch. Tales talk of ambitious wizards, frantic monarchs, and desperate heroes undertaking quests or making bargains with a dusk hag in exchange for its prophecies and visions of the future. But the information gained from a dusk hag often has a way of causing more pain than joy. Like all hags, dusk hags enjoy causing strife to those who bargain with them, and find ways to twist and turn promises to their own advantage. The Dusk Hag Prophecies table provides examples of the sort of dreams dusk hags might share with unsuspecting sleepers.

**Dusk Hag Prophecies**

| dice: d10 | Prophecy |
|-----------|----------|
| 1 | "A red hat approaches with ill intent. Be wary." |
| 2 | "A ship comes on a sea of bones, but treasure waits behind a silver skull." |
| 3 | "Three days, three deaths, three eyes, three breaths." |
| 4 | "Doom falls on the peacock and the sparrow alike. Best be a raven." |
| 5 | "A white hand on a black field holds the golden key." |
| 6 | "Beware the black horse." |
| 7 | "The fish is your friend." |
| 8 | "The stairs downward lead to that which you seek." |
| 9 | "Look for two crossed swords. There your goal lies." |
| 10 | "If you see two crows, turn back. Beyond is death." |
^dusk-hag-prophecies
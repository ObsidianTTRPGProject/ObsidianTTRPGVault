---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/drow
- monster/type/humanoid/elf
- monster/type/humanoid/wizard
aliases: ["Galsariad Ardyth (Tier 1)"]
statblock: true
"name": "Galsariad Ardyth (Tier 1)"
"size": "Medium"
"type": "humanoid"
"subtype": "drow, elf, wizard"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "14d8 - 14"
"stats":
- !!int "8"
- !!int "14"
- !!int "8"
- !!int "16"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Investigation": !!int "5"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Draconic, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 13):\n\nAt will: [mage armor](/compendium/spells/mage-armor.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day: [longstrider](/compendium/spells/longstrider.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 16 (3d10) necrotic damage, and Galsariad gains 5 temporary\
    \ hit points."
  "name": "Drain Potential"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad causes a rippling wave of magical gravity to fill a 10-foot-radius\
    \ sphere centered on a point he can see within 120 feet of himself. Each creature\
    \ in that area must make a DC 13 Strength saving throw. On a failed saving throw,\
    \ the creature takes 17 (5d6) force damage and is pulled up to 10 feet toward\
    \ the sphere's center. On a successful save, the creature takes half as much damage\
    \ and isn't pulled."
  "name": "Gravity Wave (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad targets himself or one willing creature that he can see within\
    \ 60 feet of himself, magically distorting gravity around the target. Any creature\
    \ within 5 feet of the target takes 3 (1d6) force damage. In addition, the target\
    \ can use a reaction to float upward, up to 20 feet, without provoking opportunity\
    \ attacks. When this effect ends at the start of Galsariad's next turn, the target\
    \ floats gently down up to 20 feet."
  "name": "Distort Gravity (1/Day)"
"source":
- "CRCotN"
name: Galsariad Ardyth (Tier 1)
image: "[[Galsariad Ardyth (Tier 1).png]]"
---

# Galsariad Ardyth (Tier 1)

```statblock
"name": "Galsariad Ardyth (Tier 1)"
"size": "Medium"
"type": "humanoid"
"subtype": "drow, elf, wizard"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "14d8 - 14"
"stats":
- !!int "8"
- !!int "14"
- !!int "8"
- !!int "16"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Investigation": !!int "5"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Draconic, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 13):\n\nAt will: [mage armor](/compendium/spells/mage-armor.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day: [longstrider](/compendium/spells/longstrider.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature. Hit: 16 (3d10) necrotic damage, and Galsariad gains 5 temporary\
    \ hit points."
  "name": "Drain Potential"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad causes a rippling wave of magical gravity to fill a 10-foot-radius\
    \ sphere centered on a point he can see within 120 feet of himself. Each creature\
    \ in that area must make a DC 13 Strength saving throw. On a failed saving throw,\
    \ the creature takes 17 (5d6) force damage and is pulled up to 10 feet toward\
    \ the sphere's center. On a successful save, the creature takes half as much damage\
    \ and isn't pulled."
  "name": "Gravity Wave (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad targets himself or one willing creature that he can see within\
    \ 60 feet of himself, magically distorting gravity around the target. Any creature\
    \ within 5 feet of the target takes 3 (1d6) force damage. In addition, the target\
    \ can use a reaction to float upward, up to 20 feet, without provoking opportunity\
    \ attacks. When this effect ends at the start of Galsariad's next turn, the target\
    \ floats gently down up to 20 feet."
  "name": "Distort Gravity (1/Day)"
"source":
- "CRCotN"
"image": "[[Galsariad Ardyth (Tier 1).png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 188*

## Description

Beautiful, ethereal, deathly, shadowy—all accurately describe Galsariad Ardyth, a drow in his two-hundredth year of life. He's recently taken up the study of arcane magic, and he's pursuing the life of an adventurer in hopes of improving his reputation within the Kryn Dynasty. Loquacious, snarky, and sarcastic to a fault, he's ready with a barb for any occasion—usually to mask his own insecurities.

A city-dweller from the Kryn capital of Rosohna, Galsariad is blessed with sharp aesthetic sensibilities and an interest in ancient lore, especially history concerning the Age of Arcanum, Exandria's long-lost magical golden age. He's also the newest member of the rival party, and both Ayo and Irvan are impressed by his ethereal elegance—and have a bit of a crush on him, even if he does talk too much.

Galsariad appreciates people who share his interests and are willing to spend time studying with him, though he also likes it when people treat him with respect even if they don't care about magic. He dislikes people who keep secrets from him, and hates when people judge him for being a novice at magic even though he's centuries old.

> [!quote] Battle Chatter Sample Quotes
> 
> "You have much to learn." "And here I thought you possessed some talent." "With this next incantation, I shall pluck any hope of victory from your mind."
^battle-chatter-sample-quotes

**Rival Stat Blocks.** Stat blocks for the rivals can be found in appendix A. Each of the rivals has three stat blocks; like the characters, they become more powerful as the adventure progresses. The Rival Stat Blocks table shows you which stat blocks to use based on the chapter you are running.

**Rival Stat Blocks.** | Chapters | Stat Blocks |
|----------|-------------|
| 1 and 2 | Galsariad Ardyth (Tier 1) |
| 3 and 4 | Galsariad Ardyth (Tier 2) |
| 5, 6, and 7 | Galsariad Ardyth (Tier 3) |
^chapters-stat-blocks

The tier 1 rivals are fledgling adventurers who have gained a modicum of power through their individual exploits before the beginning of this story. They are seeking to write a grand tale of their own.
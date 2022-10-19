---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/drow
- monster/type/humanoid/elf
- monster/type/humanoid/wizard
aliases: ["Galsariad Ardyth (Tier 3)"]
statblock: true
"name": "Galsariad Ardyth (Tier 3)"
"size": "Medium"
"type": "humanoid"
"subtype": "drow, elf, wizard"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "20"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft., fly 30 ft. (hover), swim 40 ft. (ring of swimming)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Nature": !!int "8"
  "Investigation": !!int "8"
  "Arcana": !!int "8"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Draconic, Undercommon"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 16):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [longstrider](/compendium/spells/longstrider.md), [scrying](/compendium/spells/scrying.md)\
    \ (as an action), [slow](/compendium/spells/slow.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad warps gravity around himself to magically deflect incoming attacks.\
    \ While Galsariad is wearing no armor and not [incapacitated](/rules/conditions.md#incapacitated),\
    \ his AC includes his Intelligence modifier."
  "name": "Deflection"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad wears a ring of swimming and carries a ruidium dagger (see appendix\
    \ B). If he rolls a 1 on an attack roll made with the dagger, he must succeed\
    \ on a DC 20 Charisma saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad makes one Drain Potential attack and one Ruidium Dagger attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 120 ft.,\
    \ one creature. Hit: 22 (4d10) necrotic damage, and Galsariad gains 10 temporary\
    \ hit points."
  "name": "Drain Potential"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 7 (2d6) psychic damage."
  "name": "Ruidium Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad causes a rippling wave of magical gravity to fill a 30-foot-radius\
    \ sphere centered on a point he can see within 100 feet of himself. Each creature\
    \ in that area must make a DC 16 Strength saving throw. On a failed saving throw,\
    \ the creature takes 42 (12d6) force damage and is [restrained](/rules/conditions.md#restrained)\
    \ for 1 minute. On a successful save, the creature takes half as much damage and\
    \ isn't [restrained](/rules/conditions.md#restrained). A [restrained](/rules/conditions.md#restrained)\
    \ creature can repeat the save at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Gravity Wave (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad targets himself or one willing creature that he can see within\
    \ 60 feet of himself, magically distorting gravity around the target. Any creature\
    \ within 5 feet of the target takes 14 (4d6) force damage. In addition, the target\
    \ can use a reaction to float upward, up to 20 feet, without provoking opportunity\
    \ attacks. When this effect ends at the start of Galsariad's next turn, the target\
    \ floats gently down up to 20 feet."
  "name": "Distort Gravity (1/Day)"
"source":
- "CRCotN"
name: Galsariad Ardyth (Tier 3)
image: "[[Galsariad Ardyth (Tier 3).png]]"
---

# Galsariad Ardyth (Tier 3)

```statblock
"name": "Galsariad Ardyth (Tier 3)"
"size": "Medium"
"type": "humanoid"
"subtype": "drow, elf, wizard"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "20"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft., fly 30 ft. (hover), swim 40 ft. (ring of swimming)"
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Nature": !!int "8"
  "Investigation": !!int "8"
  "Arcana": !!int "8"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Draconic, Undercommon"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 16):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md)\n\
    \n1/day each: [longstrider](/compendium/spells/longstrider.md), [scrying](/compendium/spells/scrying.md)\
    \ (as an action), [slow](/compendium/spells/slow.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad warps gravity around himself to magically deflect incoming attacks.\
    \ While Galsariad is wearing no armor and not [incapacitated](/rules/conditions.md#incapacitated),\
    \ his AC includes his Intelligence modifier."
  "name": "Deflection"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad wears a ring of swimming and carries a ruidium dagger (see appendix\
    \ B). If he rolls a 1 on an attack roll made with the dagger, he must succeed\
    \ on a DC 20 Charisma saving throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad makes one Drain Potential attack and one Ruidium Dagger attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +8 to hit, reach 5 ft. or range 120 ft.,\
    \ one creature. Hit: 22 (4d10) necrotic damage, and Galsariad gains 10 temporary\
    \ hit points."
  "name": "Drain Potential"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 7 (2d6) psychic damage."
  "name": "Ruidium Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad causes a rippling wave of magical gravity to fill a 30-foot-radius\
    \ sphere centered on a point he can see within 100 feet of himself. Each creature\
    \ in that area must make a DC 16 Strength saving throw. On a failed saving throw,\
    \ the creature takes 42 (12d6) force damage and is [restrained](/rules/conditions.md#restrained)\
    \ for 1 minute. On a successful save, the creature takes half as much damage and\
    \ isn't [restrained](/rules/conditions.md#restrained). A [restrained](/rules/conditions.md#restrained)\
    \ creature can repeat the save at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Gravity Wave (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galsariad targets himself or one willing creature that he can see within\
    \ 60 feet of himself, magically distorting gravity around the target. Any creature\
    \ within 5 feet of the target takes 14 (4d6) force damage. In addition, the target\
    \ can use a reaction to float upward, up to 20 feet, without provoking opportunity\
    \ attacks. When this effect ends at the start of Galsariad's next turn, the target\
    \ floats gently down up to 20 feet."
  "name": "Distort Gravity (1/Day)"
"source":
- "CRCotN"
"image": "[[Galsariad Ardyth (Tier 3).png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 193*

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

Their journey has forced the tier 3 rivals to make decisions, sometimes out of grim necessity, that they might have not made earlier. All five suffer from ruidium corruption (see "Ruidium "in the introduction). When the characters encounter them, assume that the rivals have removed all levels of exhaustion from themselves through rest or magic, but the other effects of ruidium corruption remain.

If instead you want to weaken the rivals to make them less of a physical threat or reinforce the danger of ruidium corruption, you can give one or more of the rivals 1d4 levels of exhaustion each. In this case, you'll need to keep track of each rival's exhaustion level and the condition's corresponding effects (see "Exhaustion "in the _Player's Handbook_).

**Useful Magic.** To facilitate their efforts, Galsariad has learned the water breathing spell. Additionally, all the rivals have acquired ruidium equipment to protect them from the effects of underwater pressure.
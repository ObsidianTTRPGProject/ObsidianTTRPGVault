---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/ranger
- monster/type/humanoid/water-genasi
aliases: ["Ayo Jabe (Tier 3)"]
statblock: true
"name": "Ayo Jabe (Tier 3)"
"size": "Medium"
"type": "humanoid"
"subtype": "ranger, water genasi"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "16"
- !!int "20"
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Strength": !!int "6"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_resistances": "acid"
"condition_immunities": "frightened"
"senses": "passive Perception 16"
"languages": "Common, Goblin, Orc"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 14):\n\n1/day each: [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [goodberry](/compendium/spells/goodberry.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from energy](/compendium/spells/protection-from-energy.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo wields a ruidium harpoon (see appendix B). If Ayo rolls a 1 on an attack\
    \ roll made with the harpoon, she must succeed on a DC 20 Charisma saving throw\
    \ or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo makes three Harpoon or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage plus 7 (2d6) psychic damage."
  "name": "Ruidium Harpoon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
    \ 18 (3d8 + 5) piercing damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo issues orders to one ally she can see within 30 feet of herself. If\
    \ the target can see or hear Ayo, it can spend its reaction to move up to its\
    \ speed. This movement doesn't provoke opportunity attacks."
  "name": "Reposition"
"source":
- "CRCotN"
name: Ayo Jabe (Tier 3)
image: "[[Ayo Jabe (Tier 3).png]]"
---

# Ayo Jabe (Tier 3)

```statblock
"name": "Ayo Jabe (Tier 3)"
"size": "Medium"
"type": "humanoid"
"subtype": "ranger, water genasi"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "16"
- !!int "20"
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Dexterity": !!int "8"
  "Strength": !!int "6"
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_resistances": "acid"
"condition_immunities": "frightened"
"senses": "passive Perception 16"
"languages": "Common, Goblin, Orc"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 14):\n\n1/day each: [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [goodberry](/compendium/spells/goodberry.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from energy](/compendium/spells/protection-from-energy.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo wields a ruidium harpoon (see appendix B). If Ayo rolls a 1 on an attack\
    \ roll made with the harpoon, she must succeed on a DC 20 Charisma saving throw\
    \ or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo makes three Harpoon or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) piercing damage plus 7 (2d6) psychic damage."
  "name": "Ruidium Harpoon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
    \ 18 (3d8 + 5) piercing damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ayo issues orders to one ally she can see within 30 feet of herself. If\
    \ the target can see or hear Ayo, it can spend its reaction to move up to its\
    \ speed. This movement doesn't provoke opportunity attacks."
  "name": "Reposition"
"source":
- "CRCotN"
"image": "[[Ayo Jabe (Tier 3).png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 192*

## Description

As the de facto leader of a new, unnamed adventuring party, Ayo Jabe has a lot of responsibility on her shoulders. She and her companions have worked odd jobs around the town of Jigow for a few weeks now, and she's starting to feel confident that they're ready for real adventure.

Ayo is a water genasi who was born to orc parents during a terrible storm in the Emerald Gulch. Her family has lived in Jigow for generations, and she's eager to leave home and see the world.

Ayo picked up her combat skills while working as a hunter for the town of Jigow. She recently joined up with her childhood friend Dermot, as well as Maggie Keeneyes, a mercenary who came to town several weeks ago. Despite Maggie's brusque demeanor, she became a loyal friend of Ayo and Dermot, and the three of them have become inseparable, even as more adventurers have joined their party.

Ayo is hotheaded and appreciates people who make decisions as impulsively as she does. Nevertheless, she respects Dermot's even-tempered advice and dutifully plays the role of the wise leader. She has no patience for people who are indecisive, and she is infuriated by people who don't say what they really mean.

> [!quote] Battle Chatter Sample Quotes
> 
> "Okay team, they're off-balance. Rally!" "Have you had enough?" "Yeah, just give up. You're finished."
^battle-chatter-sample-quotes

**Rival Stat Blocks.** Stat blocks for the rivals can be found in appendix A. Each of the rivals has three stat blocks; like the characters, they become more powerful as the adventure progresses. The Rival Stat Blocks table shows you which stat blocks to use based on the chapter you are running.

**Rival Stat Blocks.** | Chapters | Stat Blocks |
|----------|-------------|
| 1 and 2 | Ayo Jabe (Tier 1) |
| 3 and 4 | Ayo Jabe (Tier 2) |
| 5, 6, and 7 | Ayo Jabe (Tier 3) |
^chapters-stat-blocks

Their journey has forced the tier 3 rivals to make decisions, sometimes out of grim necessity, that they might have not made earlier. All five suffer from ruidium corruption (see "Ruidium "in the introduction). When the characters encounter them, assume that the rivals have removed all levels of exhaustion from themselves through rest or magic, but the other effects of ruidium corruption remain.

If instead you want to weaken the rivals to make them less of a physical threat or reinforce the danger of ruidium corruption, you can give one or more of the rivals 1d4 levels of exhaustion each. In this case, you'll need to keep track of each rival's exhaustion level and the condition's corresponding effects (see "Exhaustion "in the _Player's Handbook_).

**Useful Magic.** To facilitate their efforts, Galsariad has learned the water breathing spell. Additionally, all the rivals have acquired ruidium equipment to protect them from the effects of underwater pressure.
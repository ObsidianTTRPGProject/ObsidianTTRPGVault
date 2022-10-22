---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity/wizard
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
aliases: ["Nagpa"]
statblock: true
"name": "Nagpa"
"size": "Medium"
"type": "monstrosity"
"subtype": "wizard"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "203"
"hit_dice": "37d8 + 37"
"stats":
- !!int "9"
- !!int "15"
- !!int "12"
- !!int "23"
- !!int "18"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "10"
  "Intelligence": !!int "12"
"skillsaves":
  "Deception": !!int "11"
  "Insight": !!int "10"
  "Perception": !!int "10"
  "History": !!int "12"
  "Arcana": !!int "12"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common plus up to five other languages"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 20):\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [etherealness](/compendium/spells/etherealness.md),\
    \ [feeblemind](/compendium/spells/feeblemind.md)\n\n2/day each: [fireball](/compendium/spells/fireball.md),\
    \ [fly](/compendium/spells/fly.md), [hold person](/compendium/spells/hold-person.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa makes three Staff or Deathly Ray attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 24 (7d6) necrotic damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 30 (7d6\
    \ + 6) necrotic damage."
  "name": "Deathly Ray"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa targets one creature it can see within 90 feet of it. The target\
    \ must make a DC 20 Charisma saving throw. An evil creature makes the save with\
    \ disadvantage. On a failed save, the target is [charmed](/rules/conditions.md#charmed)\
    \ by the nagpa until the start of the nagpa's next turn. On a successful save,\
    \ the target becomes immune to the nagpa's Corruption for the next 24 hours."
  "name": "Corruption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa forces each creature within 30 feet of it to make a DC 20 Wisdom\
    \ saving throw, excluding Undead and Constructs. On a failed save, a target is\
    \ [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. A [paralyzed](/rules/conditions.md#paralyzed)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Paralysis (Recharge 6-6)"
"source":
- "MPMM"
- "MTF"
name: Nagpa
image: "[[Nagpa.png]]"
---

# Nagpa

```statblock
"name": "Nagpa"
"size": "Medium"
"type": "monstrosity"
"subtype": "wizard"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "203"
"hit_dice": "37d8 + 37"
"stats":
- !!int "9"
- !!int "15"
- !!int "12"
- !!int "23"
- !!int "18"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "10"
  "Intelligence": !!int "12"
"skillsaves":
  "Deception": !!int "11"
  "Insight": !!int "10"
  "Perception": !!int "10"
  "History": !!int "12"
  "Arcana": !!int "12"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common plus up to five other languages"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 20):\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [etherealness](/compendium/spells/etherealness.md),\
    \ [feeblemind](/compendium/spells/feeblemind.md)\n\n2/day each: [fireball](/compendium/spells/fireball.md),\
    \ [fly](/compendium/spells/fly.md), [hold person](/compendium/spells/hold-person.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa makes three Staff or Deathly Ray attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 24 (7d6) necrotic damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 30 (7d6\
    \ + 6) necrotic damage."
  "name": "Deathly Ray"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa targets one creature it can see within 90 feet of it. The target\
    \ must make a DC 20 Charisma saving throw. An evil creature makes the save with\
    \ disadvantage. On a failed save, the target is [charmed](/rules/conditions.md#charmed)\
    \ by the nagpa until the start of the nagpa's next turn. On a successful save,\
    \ the target becomes immune to the nagpa's Corruption for the next 24 hours."
  "name": "Corruption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nagpa forces each creature within 30 feet of it to make a DC 20 Wisdom\
    \ saving throw, excluding Undead and Constructs. On a failed save, a target is\
    \ [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. A [paralyzed](/rules/conditions.md#paralyzed)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Paralysis (Recharge 6-6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Nagpa.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 189, Mordenkainen's Tome of Foes p. 215*

## Description

Long ago, the Raven Queen cursed a cabal of powerful wizards for meddling in a ritual that would have helped avert a war between the gods. She transformed them into the scabrous, birdlike creatures known as nagpas and rendered them able to acquire new lore and magical power only from the ruins of fallen civilizations and great calamities.

Nagpas still fear the Raven Queen and do their best to avoid her and her agents. When it's impossible to do so, they become cringing, fawning things, eager to please and thereby escape further attention from her cold gaze. All the original thirteen remain alive, thanks to their cunning and their willingness to do whatever is necessary to survive.

Hungry to claim more power despite the Raven Queen's curse, nagpas strive to bring about world-shaking destruction. From the shadows, they manipulate events to bring about ruin. They can bring to bear an array of spells to turn other creatures into their agents, influencing their decisions in subtle ways and making them unwitting accomplices in their own destruction. Nagpas are extraordinarily patient and pursue several schemes simultaneously, so if one plan goes awry, they can shift their focus to another. Typically, nagpas emerge from the shadows only when they can deliver a finishing blow. They then revel in the grand devastation their plotting brought about—looting libraries, plundering vaults, and prying secrets of arcane lore and power from the wreckage.

## Environment

coastal, desert, forest, swamp, underdark, urban
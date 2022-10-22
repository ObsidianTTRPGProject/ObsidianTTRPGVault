---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/gargantuan
- monster/type/dragon/bard
aliases: ["Shadrix Silverquill"]
statblock: true
"name": "Shadrix Silverquill"
"size": "Gargantuan"
"type": "dragon"
"subtype": "bard"
"alignment": "Neutral"
"ac": !!int "21"
"hp": !!int "363"
"hit_dice": "22d20 + 132"
"stats":
- !!int "25"
- !!int "14"
- !!int "23"
- !!int "18"
- !!int "18"
- !!int "26"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Deception": !!int "15"
  "Perception": !!int "11"
  "Arcana": !!int "18"
  "Persuasion": !!int "15"
"damage_immunities": "psychic, radiant"
"senses": "blindsight 120 ft., passive Perception 21"
"languages": "all"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [daylight](/compendium/spells/daylight.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [sending](/compendium/spells/sending.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Shadrix fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 12 (1d10\
    \ + 7) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 10 (1d6\
    \ + 7) slashing damage. If the target is a creature, it is wracked with despair\
    \ and has disadvantage on attack rolls until the end of its next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix exhales an entwined burst of blinding radiance and unnerving shadow\
    \ in a 90-foot cone. Each creature in that area must make a DC 21 Constitution\
    \ saving throw. On a failed save, a creature takes 31 (7d8) radiant damage and\
    \ 31 (7d8) psychic damage and is [blinded](/rules/conditions.md#blinded) until\
    \ the start of Shadrix's next turn. On a successful save, a creature takes half\
    \ as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Illuminating Shadow Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix becomes an inky cloud of shadow and can move up to half his flying\
    \ speed without provoking opportunity attacks, then resumes his true form. During\
    \ this movement, he can move through creatures and objects as if they were difficult\
    \ terrain. If he moves through a creature, it must succeed on a DC 21 Constitution\
    \ saving throw or become [blinded](/rules/conditions.md#blinded) until the end\
    \ of its next turn. If Shadrix ends this move inside an object, he takes 5 (1d10)\
    \ force damage and is shunted to the nearest unoccupied space."
  "name": "Shadow Slip (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix magically summons 1d4 [inkling mascots](/compendium/bestiary/ooze/inkling-mascot-scc.md)\
    \ in unoccupied spaces he can see within 60 feet of himself. The inklings obey\
    \ his commands and take their turns immediately after his. While any of these\
    \ inklings live, Shadrix has advantage on attack rolls and saving throws. These\
    \ inklings disappear after 10 minutes, when Shadrix dies, or when he uses this\
    \ action again."
  "name": "Flash of Inspiration (Costs 3 Actions)"
"source":
- "SCC"
name: Shadrix Silverquill
image: "[[Shadrix Silverquill.png]]"
---

# Shadrix Silverquill

```statblock
"name": "Shadrix Silverquill"
"size": "Gargantuan"
"type": "dragon"
"subtype": "bard"
"alignment": "Neutral"
"ac": !!int "21"
"hp": !!int "363"
"hit_dice": "22d20 + 132"
"stats":
- !!int "25"
- !!int "14"
- !!int "23"
- !!int "18"
- !!int "18"
- !!int "26"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Deception": !!int "15"
  "Perception": !!int "11"
  "Arcana": !!int "18"
  "Persuasion": !!int "15"
"damage_immunities": "psychic, radiant"
"senses": "blindsight 120 ft., passive Perception 21"
"languages": "all"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [daylight](/compendium/spells/daylight.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [sending](/compendium/spells/sending.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Shadrix fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 12 (1d10\
    \ + 7) piercing damage plus 4 (1d8) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 10 (1d6\
    \ + 7) slashing damage. If the target is a creature, it is wracked with despair\
    \ and has disadvantage on attack rolls until the end of its next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix exhales an entwined burst of blinding radiance and unnerving shadow\
    \ in a 90-foot cone. Each creature in that area must make a DC 21 Constitution\
    \ saving throw. On a failed save, a creature takes 31 (7d8) radiant damage and\
    \ 31 (7d8) psychic damage and is [blinded](/rules/conditions.md#blinded) until\
    \ the start of Shadrix's next turn. On a successful save, a creature takes half\
    \ as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Illuminating Shadow Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix becomes an inky cloud of shadow and can move up to half his flying\
    \ speed without provoking opportunity attacks, then resumes his true form. During\
    \ this movement, he can move through creatures and objects as if they were difficult\
    \ terrain. If he moves through a creature, it must succeed on a DC 21 Constitution\
    \ saving throw or become [blinded](/rules/conditions.md#blinded) until the end\
    \ of its next turn. If Shadrix ends this move inside an object, he takes 5 (1d10)\
    \ force damage and is shunted to the nearest unoccupied space."
  "name": "Shadow Slip (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Shadrix magically summons 1d4 [inkling mascots](/compendium/bestiary/ooze/inkling-mascot-scc.md)\
    \ in unoccupied spaces he can see within 60 feet of himself. The inklings obey\
    \ his commands and take their turns immediately after his. While any of these\
    \ inklings live, Shadrix has advantage on attack rolls and saving throws. These\
    \ inklings disappear after 10 minutes, when Shadrix dies, or when he uses this\
    \ action again."
  "name": "Flash of Inspiration (Costs 3 Actions)"
"source":
- "SCC"
"image": "[[Shadrix Silverquill.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 212*

## Description

Centuries ago, the dragon Shadrix Silverquill mastered the magic of light and shadow, and he focused that magic through communication. Shadrix's words thrummed with power, inspiring his allies and demoralizing his enemies.

He established Silverquill College on the principles of eloquence and leadership, seeking to produce leaders who would go forth to guide others.
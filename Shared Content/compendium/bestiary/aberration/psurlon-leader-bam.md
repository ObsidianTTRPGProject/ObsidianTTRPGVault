---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/aberration
aliases: ["Psurlon Leader"]
statblock: true
"name": "Psurlon Leader"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "20"
- !!int "11"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "1"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "psychic"
"condition_immunities": "blinded, charmed"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 16"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n1/day\
    \ each: [dimension door](/compendium/spells/dimension-door.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n2/day each: [disguise self](/compendium/spells/disguise-self.md), [mage\
    \ armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magic can't read the psurlon's thoughts or put the psurlon to sleep."
  "name": "Aberrant Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon has advantage on saving throws it makes to avoid or end the\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or [unconscious](/rules/conditions.md#unconscious) condition on itself. While\
    \ one of the psurlon's heads is asleep, its other head is awake."
  "name": "Two Heads"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon makes two Bite attacks and two Claw attacks. It can also use\
    \ Pacify (if available) or Psychic Crush."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon targets one creature it can see within 120 feet of itself.\
    \ The target must succeed on a DC 16 Wisdom saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. The condition ends if the target takes any damage or if another\
    \ creature uses its action to shake the target awake."
  "name": "Pacify (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon targets one creature it can see within 120 feet of itself.\
    \ The target must make a DC 16 Wisdom saving throw, taking 21 (3d10 + 5) psychic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Psychic Crush"
"source":
- "BAM"
name: Psurlon Leader
image: "[[Psurlon Leader.png]]"
---

# Psurlon Leader

```statblock
"name": "Psurlon Leader"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "20"
- !!int "11"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "1"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "psychic"
"condition_immunities": "blinded, charmed"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 16"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n1/day\
    \ each: [dimension door](/compendium/spells/dimension-door.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n2/day each: [disguise self](/compendium/spells/disguise-self.md), [mage\
    \ armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magic can't read the psurlon's thoughts or put the psurlon to sleep."
  "name": "Aberrant Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon has advantage on saving throws it makes to avoid or end the\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ or [unconscious](/rules/conditions.md#unconscious) condition on itself. While\
    \ one of the psurlon's heads is asleep, its other head is awake."
  "name": "Two Heads"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon makes two Bite attacks and two Claw attacks. It can also use\
    \ Pacify (if available) or Psychic Crush."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon targets one creature it can see within 120 feet of itself.\
    \ The target must succeed on a DC 16 Wisdom saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. The condition ends if the target takes any damage or if another\
    \ creature uses its action to shake the target awake."
  "name": "Pacify (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The psurlon targets one creature it can see within 120 feet of itself.\
    \ The target must make a DC 16 Wisdom saving throw, taking 21 (3d10 + 5) psychic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Psychic Crush"
"source":
- "BAM"
"image": "[[Psurlon Leader.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 45*

## Description

One out of every hundred psurlons is a mutant with two heads, one at each end of its body, and a superior intellect. Other psurlons look to the two-headed ones for leadership.
---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Selenelion Twin"]
statblock: true
"name": "Selenelion Twin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "7"
- !!int "18"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "6"
"skillsaves":
  "Sleight of Hand": !!int "6"
  "Stealth": !!int "6"
  "Acrobatics": !!int "8"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Selenelion twins, Gleam and Glister, have advantage on saving throws\
    \ against being [charmed](/rules/conditions.md#charmed), and magic can't put them\
    \ to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A Selenelion twin regains 5 hit points at the start of her turn as long\
    \ as both twins are alive and within 60 feet of each other. A twin dies only if\
    \ she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While both Selenelion twins are alive and on the same plane of existence,\
    \ each is aware of the other's emotions."
  "name": "Twin Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 12 (2d8\
    \ + 3) radiant damage, and the target must succeed on a DC 13 Wisdom saving throw\
    \ or be transformed into a bat for 1 minute, as though affected by a [polymorph](/compendium/spells/polymorph.md)\
    \ spell. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Moon Ray (Gleam Only; 3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 12 (2d8\
    \ + 3) radiant damage, and the target must succeed on a DC 13 Wisdom saving throw\
    \ or be [blinded](/rules/conditions.md#blinded) for 1 minute. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Sun Ray (Glister Only; 3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In her mind's eye, a Selenelion twin can see what the other twin sees for\
    \ up to 1 minute, provided both twins are alive and on the same plane of existence.\
    \ Maintaining this effect requires concentration (as if concentrating on a spell)."
  "name": "Twin Sight (Recharges after a Short or Long Rest)"
"source":
- "WBtW"
name: Selenelion Twin
image: "[[Selenelion Twin.png]]"
---

# Selenelion Twin

```statblock
"name": "Selenelion Twin"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "7"
- !!int "18"
- !!int "13"
- !!int "12"
- !!int "10"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "6"
"skillsaves":
  "Sleight of Hand": !!int "6"
  "Stealth": !!int "6"
  "Acrobatics": !!int "8"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Selenelion twins, Gleam and Glister, have advantage on saving throws\
    \ against being [charmed](/rules/conditions.md#charmed), and magic can't put them\
    \ to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A Selenelion twin regains 5 hit points at the start of her turn as long\
    \ as both twins are alive and within 60 feet of each other. A twin dies only if\
    \ she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While both Selenelion twins are alive and on the same plane of existence,\
    \ each is aware of the other's emotions."
  "name": "Twin Bond"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 12 (2d8\
    \ + 3) radiant damage, and the target must succeed on a DC 13 Wisdom saving throw\
    \ or be transformed into a bat for 1 minute, as though affected by a [polymorph](/compendium/spells/polymorph.md)\
    \ spell. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Moon Ray (Gleam Only; 3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 12 (2d8\
    \ + 3) radiant damage, and the target must succeed on a DC 13 Wisdom saving throw\
    \ or be [blinded](/rules/conditions.md#blinded) for 1 minute. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Sun Ray (Glister Only; 3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In her mind's eye, a Selenelion twin can see what the other twin sees for\
    \ up to 1 minute, provided both twins are alive and on the same plane of existence.\
    \ Maintaining this effect requires concentration (as if concentrating on a spell)."
  "name": "Twin Sight (Recharges after a Short or Long Rest)"
"source":
- "WBtW"
"image": "[[Selenelion Twin.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 241*

## Description

Gleam and Glister are high elf twins, who until recently performed amazing acts of balance and agility at the Witchlight Carnival. Together, they are known as the Selenelion twins. (A selenelion is a celestial event during a lunar eclipse in which the sun and the eclipsed moon can be observed at the same time, either just before sunset or just after sunrise, when both bodies appear just above the horizon at nearly opposite points in the sky.)

Gleam and Glister were born during such an event, and they are blessed with magical abilities tied to moonlight (Gleam) and sunlight (Glister), respectively. The twins are easily distinguished by the masks they wear; Gleam wears a crescent moon mask, and Glister wears a sun mask.

Blessed by Corellon, the twins can each change their sex at the end of a long rest, though one twin rarely does so without the other doing likewise. The accompanying stat block uses "she" and "her" as each twin's default pronouns.

The twins are as fond of one another as two siblings can be. Gleam is the introvert of the pair, while Glister is the extrovert. Both have friendly, agreeable demeanors.
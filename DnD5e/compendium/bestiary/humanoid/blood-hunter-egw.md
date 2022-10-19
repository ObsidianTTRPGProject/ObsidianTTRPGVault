---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Blood Hunter"]
statblock: true
"name": "Blood Hunter"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "18"
- !!int "12"
- !!int "15"
- !!int "9"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Strength": !!int "7"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "4"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter can innately cast [hex](/compendium/spells/hex.md). Its\
    \ innate spellcasting ability is Intelligence.\n\nAt will: [hex](/compendium/spells/hex.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the blood hunter targets one creature it can see within\
    \ 30 feet of it. The target must succeed on a DC 14 Strength saving throw or have\
    \ its speed reduced to 0 and be unable to take reactions. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Blood Curse of Binding (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter attacks twice with a weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 3 (1d6) fire damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "EGW"
name: Blood Hunter
image: "[[Blood Hunter.png]]"
---

# Blood Hunter

```statblock
"name": "Blood Hunter"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "18"
- !!int "12"
- !!int "15"
- !!int "9"
- !!int "16"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Strength": !!int "7"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "4"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter can innately cast [hex](/compendium/spells/hex.md). Its\
    \ innate spellcasting ability is Intelligence.\n\nAt will: [hex](/compendium/spells/hex.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the blood hunter targets one creature it can see within\
    \ 30 feet of it. The target must succeed on a DC 14 Strength saving throw or have\
    \ its speed reduced to 0 and be unable to take reactions. The target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Blood Curse of Binding (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood hunter attacks twice with a weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 3 (1d6) fire damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "EGW"
"image": "[[Blood Hunter.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 284*

## Description

To mortals and monsters alike, the blood hunter is a legendary figure—a humanoid stalker said to embrace monstrous power. Long years ago, a group of mortals undertook dark rituals and alchemical experiments to gain the power of the deadliest monsters, allowing them to better hunt those monsters.

Blood hunters are steely on the surface, but roiling emotion lies beneath that impassive mask. Bestial fury and fathomless sorrow drive every stroke of a blood hunter's blade. Humanoids who draw the ire of a blood hunter are often in league with monsters—or the victims of a terrible misunderstanding. Such misunderstandings are tough to clear up, for blood hunters are the kind of folk to slay first and ask questions later.
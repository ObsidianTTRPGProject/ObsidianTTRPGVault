---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/small
- monster/type/humanoid
aliases: ["Dragon Speaker"]
statblock: true
"name": "Dragon Speaker"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
"skillsaves":
  "Religion": !!int "3"
  "Persuasion": !!int "5"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, and any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The speaker casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [charm\
    \ person](/compendium/spells/charm-person.md), [command](/compendium/spells/command.md),\
    \ [comprehend languages](/compendium/spells/comprehend-languages.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The speaker makes two Thunder Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (3d8) thunder damage, and the target is pushed horizontally\
    \ up to 10 feet away from the speaker."
  "name": "Thunder Bolt"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the speaker can see within 60 feet of it makes a damage\
    \ roll, the speaker can roll a d6 and subtract the number rolled from that damage\
    \ roll."
  "name": "Disarming Words (3/Day)"
"source":
- "FTD"
name: Dragon Speaker
image: "[[Dragon Speaker.png]]"
---

# Dragon Speaker

```statblock
"name": "Dragon Speaker"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
"skillsaves":
  "Religion": !!int "3"
  "Persuasion": !!int "5"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, and any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The speaker casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [charm\
    \ person](/compendium/spells/charm-person.md), [command](/compendium/spells/command.md),\
    \ [comprehend languages](/compendium/spells/comprehend-languages.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The speaker makes two Thunder Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (3d8) thunder damage, and the target is pushed horizontally\
    \ up to 10 feet away from the speaker."
  "name": "Thunder Bolt"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the speaker can see within 60 feet of it makes a damage\
    \ roll, the speaker can roll a d6 and subtract the number rolled from that damage\
    \ roll."
  "name": "Disarming Words (3/Day)"
"source":
- "FTD"
"image": "[[Dragon Speaker.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 189*

## Description

Dragon speakers are charismatic and persuasive orators who serve as a dragon's ambassadors among other folk. Dragon speakers have loud and authoritative voices, which they use to gain valuable resources, diplomatic connections, and donations of treasure and magic for their dragons—as well as to weave magic both subtle and thundering. They use their commanding presence to instill awe and fear into the hearts of friends and foes alike.

**Dragon Followers.** Dragons boast many minions, students, employees, acolytes, and thralls. Dragon followers are those servitors whose devotion to a dragon approaches fanatical reverence and who receive magical power from the dragon in return.

Dragon followers might serve and revere any kind of dragon, and their behavior and beliefs reflect the ethos of the dragon they follow. Many dragon followers have personal stories of benevolent dragons sharing great knowledge, protecting their towns, or sparing their lives during some foolhardy adventure. Other followers seek to uncover the mysteries of draconic nature and live a life worthy of their dragon's reward, and they dream of a world where dragons can live among them as their rulers.
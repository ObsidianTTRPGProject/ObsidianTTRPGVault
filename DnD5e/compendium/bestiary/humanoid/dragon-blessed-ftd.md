---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/humanoid
aliases: ["Dragon Blessed"]
statblock: true
"name": "Dragon Blessed"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "6"
  "Religion": !!int "5"
"condition_immunities": "frightened"
"senses": "passive Perception 13"
"languages": "Common, Draconic, and any two languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blessed casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [enhance\
    \ ability](/compendium/spells/enhance-ability.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [revivify](/compendium/spells/revivify.md),\
    \ [tongues](/compendium/spells/tongues.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blessed makes two Mace or Radiant Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 22 (5d8)\
    \ radiant damage, and the blessed regains 5 (1d10) hit points."
  "name": "Radiant Bolt"
"source":
- "FTD"
name: Dragon Blessed
image: "[[Dragon Blessed.png]]"
---

# Dragon Blessed

```statblock
"name": "Dragon Blessed"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "6"
  "Religion": !!int "5"
"condition_immunities": "frightened"
"senses": "passive Perception 13"
"languages": "Common, Draconic, and any two languages"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blessed casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [enhance\
    \ ability](/compendium/spells/enhance-ability.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [revivify](/compendium/spells/revivify.md),\
    \ [tongues](/compendium/spells/tongues.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blessed makes two Mace or Radiant Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 22 (5d8)\
    \ radiant damage, and the blessed regains 5 (1d10) hit points."
  "name": "Radiant Bolt"
"source":
- "FTD"
"image": "[[Dragon Blessed.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 188*

## Description

Dragon blessed are the acolytes of dragons, whom they revere as gods. They wield magic to heal and support those who have earned their dragon masters' favor—and scourge those who incur the dragons' wrath. Dragon blessed view their lives and magical abilities as gifts bestowed by their dragon, and they give life energy to save those they deem important to their masters' work.

**Dragon Followers.** Dragons boast many minions, students, employees, acolytes, and thralls. Dragon followers are those servitors whose devotion to a dragon approaches fanatical reverence and who receive magical power from the dragon in return.

Dragon followers might serve and revere any kind of dragon, and their behavior and beliefs reflect the ethos of the dragon they follow. Many dragon followers have personal stories of benevolent dragons sharing great knowledge, protecting their towns, or sparing their lives during some foolhardy adventure. Other followers seek to uncover the mysteries of draconic nature and live a life worthy of their dragon's reward, and they dream of a world where dragons can live among them as their rulers.
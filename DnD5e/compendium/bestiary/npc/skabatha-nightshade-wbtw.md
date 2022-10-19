---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/fey/hag
aliases: ["Skabatha Nightshade"]
statblock: true
"name": "Skabatha Nightshade"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "18"
- !!int "9"
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "2"
  "Perception": !!int "6"
  "Arcana": !!int "7"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common, Elvish, Infernal, Sylvan"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 14):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [druidcraft](/compendium/spells/druidcraft.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)\n\n1/day:\
    \ [awaken](/compendium/spells/awaken.md) (as an action), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)\n\n2/day each: [polymorph](/compendium/spells/polymorph.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first creature that Skabatha sees after she finishes a long rest is\
    \ [invisible](/rules/conditions.md#invisible) to her. She can't remember seeing\
    \ the creature or perceive it using her truesight until the end of her next long\
    \ rest."
  "name": "Forgetfulness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 25 (6d6\
    \ + 4) poison damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha magically shrinks herself to Tiny size (between 4 and 8 inches\
    \ tall) or returns to her normal size. If Skabatha lacks the room to return to\
    \ her normal size, she attains the maximum size possible in the space available.\
    \ Anything she is wearing or carrying changes size along with her.\n\nAs a Tiny\
    \ creature, Skabatha deals 2 (1d4) poison damage when she hits with a Claw attack.\
    \ She has advantage on Dexterity (Stealth) checks, and disadvantage on Strength\
    \ checks and Strength saving throws. Her statistics otherwise remain unchanged."
  "name": "Alter Size"
"source":
- "WBtW"
name: Skabatha Nightshade
image: "[[Skabatha Nightshade.png]]"
---

# Skabatha Nightshade

```statblock
"name": "Skabatha Nightshade"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "18"
- !!int "9"
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "2"
  "Perception": !!int "6"
  "Arcana": !!int "7"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common, Elvish, Infernal, Sylvan"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 14):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [druidcraft](/compendium/spells/druidcraft.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)\n\n1/day:\
    \ [awaken](/compendium/spells/awaken.md) (as an action), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)\n\n2/day each: [polymorph](/compendium/spells/polymorph.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [speak with plants](/compendium/spells/speak-with-plants.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first creature that Skabatha sees after she finishes a long rest is\
    \ [invisible](/rules/conditions.md#invisible) to her. She can't remember seeing\
    \ the creature or perceive it using her truesight until the end of her next long\
    \ rest."
  "name": "Forgetfulness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 25 (6d6\
    \ + 4) poison damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skabatha magically shrinks herself to Tiny size (between 4 and 8 inches\
    \ tall) or returns to her normal size. If Skabatha lacks the room to return to\
    \ her normal size, she attains the maximum size possible in the space available.\
    \ Anything she is wearing or carrying changes size along with her.\n\nAs a Tiny\
    \ creature, Skabatha deals 2 (1d4) poison damage when she hits with a Claw attack.\
    \ She has advantage on Dexterity (Stealth) checks, and disadvantage on Strength\
    \ checks and Strength saving throws. Her statistics otherwise remain unchanged."
  "name": "Alter Size"
"source":
- "WBtW"
"image": "[[Skabatha Nightshade.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 218*

## Description

Skabatha is the oldest member of the Hourglass Coven. Better known as Granny Nightshade, she offers her assistance to those who are haunted by regret. Her deals often result in cruel twists; for example, a petitioner who asks to be reunited with a lost love might be transformed into one of their loved one's cherished items, such as a favorite bonnet.

Skabatha assumes the guise of an old toymaker. Part toy herself, she has a windup key between her hunched shoulders that rotates quickly when she's in a good mood and slows down as her mood sours. When she is furious, the key comes to a dead stop.
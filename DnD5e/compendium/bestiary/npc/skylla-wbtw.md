---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/warlock
aliases: ["Skylla"]
statblock: true
"name": "Skylla"
"size": "Medium"
"type": "humanoid"
"subtype": "human, warlock"
"alignment": "Chaotic Evil"
"ac": !!int "10"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "9"
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
"skillsaves":
  "Nature": !!int "3"
  "Intimidation": !!int "5"
  "Deception": !!int "5"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\n1/day\
    \ each: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [fly](/compendium/spells/fly.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla carries an eldritch staff (see appendix A) with 10 charges. The\
    \ staff regains 1d6 + 4 expended charges daily at dawn. If its last charge is\
    \ expended, roll a d20; on a 1, the staff is destroyed."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla makes two Eldritch Staff attacks. She can replace one of the attacks\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage when used with two hands,\
    \ and Skylla can expend up to 3 of the staff's charges, dealing an extra 4 (1d8)\
    \ lightning damage for each expended charge."
  "name": "Eldritch Staff"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Skylla takes damage, she can expend 3 charges of her eldritch staff\
    \ to turn [invisible](/rules/conditions.md#invisible) and teleport, along with\
    \ any equipment she's wearing or carrying, up to 60 feet to an unoccupied space\
    \ she can see. She remains [invisible](/rules/conditions.md#invisible) until the\
    \ start of her next turn or until she attacks or casts a spell."
  "name": "Eldritch Escape"
"source":
- "WBtW"
name: Skylla
image: "[[Skylla.png]]"
---

# Skylla

```statblock
"name": "Skylla"
"size": "Medium"
"type": "humanoid"
"subtype": "human, warlock"
"alignment": "Chaotic Evil"
"ac": !!int "10"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "9"
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
"skillsaves":
  "Nature": !!int "3"
  "Intimidation": !!int "5"
  "Deception": !!int "5"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\n1/day\
    \ each: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [fly](/compendium/spells/fly.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla carries an eldritch staff (see appendix A) with 10 charges. The\
    \ staff regains 1d6 + 4 expended charges daily at dawn. If its last charge is\
    \ expended, roll a d20; on a 1, the staff is destroyed."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skylla makes two Eldritch Staff attacks. She can replace one of the attacks\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage when used with two hands,\
    \ and Skylla can expend up to 3 of the staff's charges, dealing an extra 4 (1d8)\
    \ lightning damage for each expended charge."
  "name": "Eldritch Staff"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Skylla takes damage, she can expend 3 charges of her eldritch staff\
    \ to turn [invisible](/rules/conditions.md#invisible) and teleport, along with\
    \ any equipment she's wearing or carrying, up to 60 feet to an unoccupied space\
    \ she can see. She remains [invisible](/rules/conditions.md#invisible) until the\
    \ start of her next turn or until she attacks or casts a spell."
  "name": "Eldritch Escape"
"source":
- "WBtW"
"image": "[[Skylla.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 220*

## Description

Skylla, who sometimes goes by the alias Charmay, forged a warlock's pact with Baba Yaga. It is from this powerful archfey that Skylla draws her magic.

Skylla is spiteful and treacherous, as likely to betray her allies as to help them. She talked Kelek into allowing her to serve as the primary liaison between the League of Malevolence and the Hourglass Coven, claiming her pact with Baba Yaga made her better suited for the role than anyone else. Endelyn Moongrave foresaw that Skylla's allies would turn on her one day and shared this information with the warlock. Skylla reacted to that news by distancing herself from the League of Malevolence, and now she works for Endelyn. Skylla is open to the idea of rejoining the league, but not while Kelek is in charge.
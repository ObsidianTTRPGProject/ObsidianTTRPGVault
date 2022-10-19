---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Alyxian the Absolved"]
statblock: true
"name": "Alyxian the Absolved"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "9"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting modifier (spell save DC 17):\n\nAt\
    \ will: [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack, plus 9 (2d8) radiant damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian strikes the ground, creating a burst of energy that ripples outward.\
    \ Each creature he chooses within a 30-foot-radius sphere centered on himself\
    \ must succeed on a DC 17 Constitution saving throw or take 35 (10d6) force damage\
    \ and be knocked [prone](/rules/conditions.md#prone). A creature that succeeds\
    \ on the saving throw takes half as much damage and isn't knocked [prone](/rules/conditions.md#prone)."
  "name": "Force Wave (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian adds 3 to his AC against one attack roll that would hit him. To\
    \ do so, Alyxian must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Spear attack, and all damage from this attack is radiant."
  "name": "Arch Heart's Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian moves up to his speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Change Bringer's Dance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. Any equipment he is wearing or carrying becomes [invisible](/rules/conditions.md#invisible)\
    \ with him."
  "name": "Moon Weaver's Veil (Costs 2 Actions)"
"source":
- "CRCotN"
name: Alyxian the Absolved
image: "[[Alyxian the Absolved.png]]"
---

# Alyxian the Absolved

```statblock
"name": "Alyxian the Absolved"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "9"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting modifier (spell save DC 17):\n\nAt\
    \ will: [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [remove curse](/compendium/spells/remove-curse.md), [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ when used with two hands to make a melee attack, plus 9 (2d8) radiant damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian strikes the ground, creating a burst of energy that ripples outward.\
    \ Each creature he chooses within a 30-foot-radius sphere centered on himself\
    \ must succeed on a DC 17 Constitution saving throw or take 35 (10d6) force damage\
    \ and be knocked [prone](/rules/conditions.md#prone). A creature that succeeds\
    \ on the saving throw takes half as much damage and isn't knocked [prone](/rules/conditions.md#prone)."
  "name": "Force Wave (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian adds 3 to his AC against one attack roll that would hit him. To\
    \ do so, Alyxian must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Spear attack, and all damage from this attack is radiant."
  "name": "Arch Heart's Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian moves up to his speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Change Bringer's Dance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. Any equipment he is wearing or carrying becomes [invisible](/rules/conditions.md#invisible)\
    \ with him."
  "name": "Moon Weaver's Veil (Costs 2 Actions)"
"source":
- "CRCotN"
"image": "[[Alyxian the Absolved.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 182*
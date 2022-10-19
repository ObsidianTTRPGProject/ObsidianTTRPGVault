---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/sorcerer
aliases: ["Kelek"]
statblock: true
"name": "Kelek"
"size": "Medium"
"type": "humanoid"
"subtype": "human, sorcerer"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [dominate beast](/compendium/spells/dominate-beast.md), [fly](/compendium/spells/fly.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [web](/compendium/spells/web.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek wears bracers of defense and carries a staff of striking with 10\
    \ charges. The staff regains 1d6 + 4 expended charges daily at dawn. If its last\
    \ charge is expended, roll a d20; on a 1, the staff becomes a nonmagical quarterstaff."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek makes three attacks using Sorcerer's Bolt, Staff of Striking, or\
    \ a combination of them. He can replace one of the attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (2d12) force damage."
  "name": "Sorcerer's Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) bludgeoning damage, or 9 (1d8 + 5) bludgeoning damage when used with two\
    \ hands, and Kelek can expend up to 3 of the staff's charges, dealing an extra\
    \ 3 (1d6) force damage for each expended charge."
  "name": "Staff of Striking"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek creates a magical explosion of fire centered on a point he can see\
    \ within 120 feet of him. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 14 Dexterity saving throw, taking 35 (10d6) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Fiery Explosion (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When he is hit by an attack, Kelek protects himself with an [invisible](/rules/conditions.md#invisible)\
    \ barrier of magical force. Until the end of his next turn, he gains a +5 bonus\
    \ to AC, including against the triggering attack."
  "name": "Arcane Defense (3/Day)"
"source":
- "WBtW"
name: Kelek
image: "[[Kelek.png]]"
---

# Kelek

```statblock
"name": "Kelek"
"size": "Medium"
"type": "humanoid"
"subtype": "human, sorcerer"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [dominate beast](/compendium/spells/dominate-beast.md), [fly](/compendium/spells/fly.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [web](/compendium/spells/web.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek wears bracers of defense and carries a staff of striking with 10\
    \ charges. The staff regains 1d6 + 4 expended charges daily at dawn. If its last\
    \ charge is expended, roll a d20; on a 1, the staff becomes a nonmagical quarterstaff."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek makes three attacks using Sorcerer's Bolt, Staff of Striking, or\
    \ a combination of them. He can replace one of the attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 60 ft.,\
    \ one target. Hit: 13 (2d12) force damage."
  "name": "Sorcerer's Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) bludgeoning damage, or 9 (1d8 + 5) bludgeoning damage when used with two\
    \ hands, and Kelek can expend up to 3 of the staff's charges, dealing an extra\
    \ 3 (1d6) force damage for each expended charge."
  "name": "Staff of Striking"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kelek creates a magical explosion of fire centered on a point he can see\
    \ within 120 feet of him. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 14 Dexterity saving throw, taking 35 (10d6) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Fiery Explosion (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When he is hit by an attack, Kelek protects himself with an [invisible](/rules/conditions.md#invisible)\
    \ barrier of magical force. Until the end of his next turn, he gains a +5 bonus\
    \ to AC, including against the triggering attack."
  "name": "Arcane Defense (3/Day)"
"source":
- "WBtW"
"image": "[[Kelek.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 219*

## Description

Kelek is a greedy, narcissistic sociopath who revels in chaos but is a coward at heart. The fact that he's highly intelligent makes him even more dangerous. More than anything, he wants the staff of power in the possession of his most hated foe, Ringlerun (described later in this appendix).
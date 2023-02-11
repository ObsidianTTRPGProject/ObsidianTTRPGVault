---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fey/elf
- monster/environment/desert
- monster/environment/forest
aliases: ["Summer Eladrin"]
statblock: true
"name": "Summer Eladrin"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "19"
- !!int "21"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "18"
"speed": "walk 50 ft."
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "8"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes\
    \ [frightened](/rules/conditions.md#frightened) of the eladrin for 1 minute. A\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to any eladrin's Fearsome\
    \ Presence for the next 24 hours."
  "name": "Fearsome Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin makes two Longsword or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, or 15 (2d10 + 4) slashing damage if used with two hands,\
    \ plus 9 (2d8) fire damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 14 (2d8 + 5) piercing damage plus 9 (2d8) fire damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the eladrin must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
name: Summer Eladrin
image: "[[Summer Eladrin.png]]"
---

# Summer Eladrin

```statblock
"name": "Summer Eladrin"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "19"
- !!int "21"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "18"
"speed": "walk 50 ft."
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "8"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes\
    \ [frightened](/rules/conditions.md#frightened) of the eladrin for 1 minute. A\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to any eladrin's Fearsome\
    \ Presence for the next 24 hours."
  "name": "Fearsome Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin makes two Longsword or Longbow attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, or 15 (2d10 + 4) slashing damage if used with two hands,\
    \ plus 9 (2d8) fire damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit:\
    \ 14 (2d8 + 5) piercing damage plus 9 (2d8) fire damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eladrin adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the eladrin must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "[[Summer Eladrin.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 116, Mordenkainen's Tome of Foes p. 196*

## Description

When angered, eladrin enter the season of summer, a burning, tempestuous state that transforms them into aggressive warriors eager to vent their wrath. Their magic responds to their fury and amplifies their fighting ability, helping them move with astonishing quickness and strike with terrible force.

**Eladrin.** > [!quote]- A quote from Tasha  
> 
> If an autumn eladrin invites you over for dinner, come with an empty stomach. Their goodwill extends to heaping portions.
> 
> Note to self: send some of my spring eladrin friends to visit Mordenkainen. That'll teach him to lighten up.

Eladrin dwell in the verdant splendor of the Feywild. They are related to the elves found on the Material Plane. But while other elves can temper their wild impulses, eladrin are ruled by emotion—and due to their magical nature, they undergo physical changes to match their changes in temperament.

Eladrin have spent centuries in the Feywild, and most of them have become Fey creatures as a result—those presented here are of the Fey variety. Some are still Humanoid, however, similar in that respect to their other elven kin.

The magic flowing through eladrin responds to their emotional state by transforming them into different seasonal aspects, with behaviors and abilities that change with their forms. Some eladrin might remain in a particular aspect for years, while others run through the emotional spectrum each week.

**Changeable Natures.** Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [incapacitated](/rules/conditions.md#incapacitated). When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

## Environment

desert, forest
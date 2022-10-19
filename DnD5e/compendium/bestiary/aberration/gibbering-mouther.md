---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/aberration
- monster/environment/underdark
aliases: ["Gibbering Mouther"]
statblock: true
"name": "Gibbering Mouther"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "10"
- !!int "6"
"speed": "walk 10 ft., swim 10 ft."
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ground in a 10-foot radius around the mouther is doughlike difficult\
    \ terrain. Each creature that starts its turn in that area must succeed on a DC\
    \ 10 Strength saving throw or have its speed reduced to 0 until the start of its\
    \ next turn."
  "name": "Aberrant Ground"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mouther babbles incoherently while it can see any creature and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated). Each creature that starts\
    \ its turn within 20 feet of the mouther and can hear the gibbering must succeed\
    \ on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions\
    \ until the start of its next turn and rolls a d8 to determine what it does during\
    \ its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature\
    \ takes no action or bonus action and uses all its movement to move in a randomly\
    \ determined direction. On a 7 or 8, the creature makes a melee attack against\
    \ a randomly determined creature within its reach or does nothing if it can't\
    \ make such an attack."
  "name": "Gibbering"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding\
    \ Spittle."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6)\
    \ piercing damage. If the target is Medium or smaller, it must succeed on a DC\
    \ 10 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is killed by this damage, it is absorbed into the mouther."
  "name": "Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mouther spits a chemical glob at a point it can see within 15 feet\
    \ of it. The glob explodes in a blinding flash of light on impact. Each creature\
    \ within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) until the end of the mouther's next\
    \ turn."
  "name": "Blinding Spittle (Recharge 5-6)"
"source":
- "MM"
- "TftYP"
- "WDH"
- "WDMM"
- "ERLW"
- "IDRotF"
- "TCE"
- "CRCotN"
- "JttRC"
name: Gibbering Mouther
image: "[[Gibbering Mouther.png]]"
---

# Gibbering Mouther

```statblock
"name": "Gibbering Mouther"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "10"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "10"
- !!int "6"
"speed": "walk 10 ft., swim 10 ft."
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ground in a 10-foot radius around the mouther is doughlike difficult\
    \ terrain. Each creature that starts its turn in that area must succeed on a DC\
    \ 10 Strength saving throw or have its speed reduced to 0 until the start of its\
    \ next turn."
  "name": "Aberrant Ground"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mouther babbles incoherently while it can see any creature and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated). Each creature that starts\
    \ its turn within 20 feet of the mouther and can hear the gibbering must succeed\
    \ on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions\
    \ until the start of its next turn and rolls a d8 to determine what it does during\
    \ its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature\
    \ takes no action or bonus action and uses all its movement to move in a randomly\
    \ determined direction. On a 7 or 8, the creature makes a melee attack against\
    \ a randomly determined creature within its reach or does nothing if it can't\
    \ make such an attack."
  "name": "Gibbering"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding\
    \ Spittle."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6)\
    \ piercing damage. If the target is Medium or smaller, it must succeed on a DC\
    \ 10 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is killed by this damage, it is absorbed into the mouther."
  "name": "Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mouther spits a chemical glob at a point it can see within 15 feet\
    \ of it. The glob explodes in a blinding flash of light on impact. Each creature\
    \ within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) until the end of the mouther's next\
    \ turn."
  "name": "Blinding Spittle (Recharge 5-6)"
"source":
- "MM"
- "TftYP"
- "WDH"
- "WDMM"
- "ERLW"
- "IDRotF"
- "TCE"
- "CRCotN"
- "JttRC"
"image": "[[Gibbering Mouther.png]]"
```
^statblock

*Source: Monster Manual p. 157, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*

## Description

Of all the terrors created by foul sorcery, gibbering mouthers are among the most wicked and depraved. This creature is the composite eyes, mouths, and liquefied matter of its former victims. Driven to insanity by the destruction of their bodies and absorption into the mouther, those victims gibber incoherent madness, forced to consume everything in reach.

**Amoeboid Form.** The gibbering mouther's body is an amorphous mass of mouths and eyes that propels itself by oozing forward, fastening several mouths to the ground and pulling its bulk behind. Though it moves slowly, it swims through water, mud, and quicksand with ease.

**Mouths of Madness.** When a gibbering mouther senses prey, its mouths begin to murmur and chatter, each with a different voice: deep or shrill, wailing or ululating, crying out in agony or ecstasy. This cacophonous gibbering overcomes the senses of any creature that hears it, causing most to flee in terror. Others are overcome with madness or stand [paralyzed](/rules/conditions.md#paralyzed), fixated on the horrific creature as it oozes forward to consume them.

**All-Consuming.**  Driven to devour any creature it can reach, a gibbering mouther flows over victims transfixed by its mad ranting, its multitudinous voices temporarily silenced as it gnaws and swallows living flesh. The monster liquefies stone with which it comes into contact, hindering creatures that overcome its gibbering and attempt to flee.

A gibbering mouther leaves nothing of its prey behind. However, even as the last of a victim's body is consumed, its eyes and mouth boil to the surface, ready to join the chorus of tormented gibbering that welcomes the monster's next meal.

## Environment

underdark
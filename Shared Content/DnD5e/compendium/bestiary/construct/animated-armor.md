---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/construct
aliases: ["Animated Armor"]
statblock: true
"name": "Animated Armor"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the armor\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the armor remains motionless, it is indistinguishable from a normal\
    \ suit of armor."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
name: Animated Armor
image: "[[Animated Armor.png]]"
---

# Animated Armor

```statblock
"name": "Animated Armor"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor is [incapacitated](/rules/conditions.md#incapacitated) while\
    \ in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the armor\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the armor remains motionless, it is indistinguishable from a normal\
    \ suit of armor."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The armor makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
"image": "[[Animated Armor.png]]"
```
^statblock

*Source: Monster Manual p. 19, Curse of Strahd, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

**Constructed Nature.** An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

**Animated Armor.** This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.

To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.
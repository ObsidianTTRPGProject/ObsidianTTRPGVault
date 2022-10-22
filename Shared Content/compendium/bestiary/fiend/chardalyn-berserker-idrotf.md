---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/fiend
aliases: ["Chardalyn Berserker"]
statblock: true
"name": "Chardalyn Berserker"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Survival": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The berserker must roll a d6 at the start of each of its turns. On a 1,\
    \ the berserker does nothing on its turn except speak to a nonexistent, evil master\
    \ whom it has pledged to serve."
  "name": "Chardalyn Madness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the berserker can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The berserker attacks three times with a melee weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) until the end of\
    \ its next turn."
  "name": "Chardalyn Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed\
    \ on a DC 13 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Chardalyn Javelin"
"source":
- "IDRotF"
name: Chardalyn Berserker
image: "[[Chardalyn Berserker.png]]"
---

# Chardalyn Berserker

```statblock
"name": "Chardalyn Berserker"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Survival": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The berserker must roll a d6 at the start of each of its turns. On a 1,\
    \ the berserker does nothing on its turn except speak to a nonexistent, evil master\
    \ whom it has pledged to serve."
  "name": "Chardalyn Madness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of its turn, the berserker can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The berserker attacks three times with a melee weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned) until the end of\
    \ its next turn."
  "name": "Chardalyn Flail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed\
    \ on a DC 13 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Chardalyn Javelin"
"source":
- "IDRotF"
"image": "[[Chardalyn Berserker.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 280*

## Description

Chardalyn berserkers are Reghed nomads who wield weapons made of chardalyn, specifically ones suffused with demonic magic (see the sidebar on Chardalyn). This exposure has transformed them into fiends. They shed their heavier protective clothing and embrace the frigid cold, allowing frostbite to ravage the exposed parts of their bodies, with only their faith in the Frostmaiden keeping them alive.

**Chardalyn Weapons.** A chardalyn berserker wields one or more weapons made wholly or partly out of chardalyn that has been tainted by demonic magic. Battleaxes, flails, javelins, and spears are favored weapons, though other weapons are possible.

A character who claims one or more of these weapons can be corrupted by them. Each day at dawn, roll a d6 for each such weapon in the character's possession. On a roll of 1, the character must succeed on a DC 13 Charisma saving throw or become an evil NPC under the DM's control, unless the character is evil already. This alignment change can be undone by any magic that ends a curse, but after ten days, it can be reversed only by a [wish](/compendium/spells/wish.md) spell or divine intervention.

A creature wounded by one of these chardalyn weapons can feel a sudden sickness creep over them, but it passes quickly.

**Chardalyn Madness.** Prolonged contact with the demonic magic imprinted on the chardalyn has afflicted the berserker with a form of madness, causing the berserker to believe that its weapons are conduits through which it can speak to a demon lord or other dark power, as well as channel its rage. If the berserker's madness is cured using magic that removes the effects of madness, the berserker loses its Chardalyn Madness trait but retains its chaotic evil alignment and other qualities. Further exposure to the demonic magic causes the berserker's madness to return, however.
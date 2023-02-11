---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/elemental
- monster/environment/underwater
aliases: ["Steam Mephit"]
statblock: true
"name": "Steam Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "5"
- !!int "11"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft., fly 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Ignan"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [blur](/compendium/spells/blur.md), requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [blur](/compendium/spells/blur.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a cloud of steam. Each creature within\
    \ 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take\
    \ 4 (1d8) fire damage."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4)\
    \ slashing damage plus 2 (1d4) fire damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Steam Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "EGW"
name: Steam Mephit
image: "[[Steam Mephit.png]]"
---

# Steam Mephit

```statblock
"name": "Steam Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "5"
- !!int "11"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft., fly 30 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Ignan"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [blur](/compendium/spells/blur.md), requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [blur](/compendium/spells/blur.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a cloud of steam. Each creature within\
    \ 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take\
    \ 4 (1d8) fire damage."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4)\
    \ slashing damage plus 2 (1d4) fire damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Steam Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "EGW"
"image": "[[Steam Mephit.png]]"
```
^statblock

*Source: Monster Manual p. 217, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Explorer's Guide to Wildemount*

## Description

**Mephits.** Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

**Elemental Nature.** A mephit doesn't require food, drink, or sleep.

**Steam Mephit.** Composed of fire and water, steam mephits leave trails of hot water wherever they go, and they hiss with tendrils of steam. Bossy and hypersensitive, they are the self-appointed overlords of all mephits.

## Environment

underwater
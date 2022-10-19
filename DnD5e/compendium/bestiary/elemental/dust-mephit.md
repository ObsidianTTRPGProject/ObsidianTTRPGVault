---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/elemental
- monster/environment/desert
aliases: ["Dust Mephit"]
statblock: true
"name": "Dust Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "5"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Terran"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [sleep](/compendium/spells/sleep.md), requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of dust. Each creature within\
    \ 5 feet of it must then succeed on a DC 10 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A [blinded](/rules/conditions.md#blinded) creature can repeat\
    \ the saving throw on each of its turns, ending the effect on itself on a success."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Blinding Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "ToA"
name: Dust Mephit
image: "[[Dust Mephit.png]]"
---

# Dust Mephit

```statblock
"name": "Dust Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "5"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Terran"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [sleep](/compendium/spells/sleep.md), requiring\
    \ no material components. Its innate spellcasting ability is Charisma.\n\nAt\
    \ will: [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of dust. Each creature within\
    \ 5 feet of it must then succeed on a DC 10 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A [blinded](/rules/conditions.md#blinded) creature can repeat\
    \ the saving throw on each of its turns, ending the effect on itself on a success."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Blinding Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "ToA"
"image": "[[Dust Mephit.png]]"
```
^statblock

*Source: Monster Manual p. 215, Princes of the Apocalypse, Tomb of Annihilation*

## Description

**Mephits.** Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

**Elemental Nature.** A mephit doesn't require food, drink, or sleep.

**Dust Mephit.** Composed of earth and air, dust mephits are drawn to catacombs and find death morbidly fascinating.

## Environment

desert
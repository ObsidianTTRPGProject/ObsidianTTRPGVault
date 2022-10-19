---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/elemental
- monster/environment/underdark
aliases: ["Magma Mephit"]
statblock: true
"name": "Magma Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "12"
- !!int "12"
- !!int "7"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan, Terran"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [heat metal](/compendium/spells/heat-metal.md)\
    \ (spell save DC 10), requiring no material components. Its innate spellcasting\
    \ ability is Charisma.\n\nAt will: [heat metal](/compendium/spells/heat-metal.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of lava. Each creature within\
    \ 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Death Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ mound of magma."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) slashing damage plus 2 (1d4) fire damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of fire. Each creature in that area must\
    \ make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "SjA"
name: Magma Mephit
image: "[[Magma Mephit.png]]"
---

# Magma Mephit

```statblock
"name": "Magma Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "12"
- !!int "12"
- !!int "7"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan, Terran"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit can innately cast [heat metal](/compendium/spells/heat-metal.md)\
    \ (spell save DC 10), requiring no material components. Its innate spellcasting\
    \ ability is Charisma.\n\nAt will: [heat metal](/compendium/spells/heat-metal.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the mephit dies, it explodes in a burst of lava. Each creature within\
    \ 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Death Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary\
    \ mound of magma."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4\
    \ + 1) slashing damage plus 2 (1d4) fire damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of fire. Each creature in that area must\
    \ make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 6)"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "SjA"
"image": "[[Magma Mephit.png]]"
```
^statblock

*Source: Monster Manual p. 216, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Spelljammer Academy*

## Description

**Mephits.** Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

**Elemental Nature.** A mephit doesn't require food, drink, or sleep.

**Magma Mephit.** Composed of earth and fire, magma mephits glow a dull red color as they perspire beads of molten lava. They are slow to comprehend the meaning of others' words and actions.

## Environment

underdark
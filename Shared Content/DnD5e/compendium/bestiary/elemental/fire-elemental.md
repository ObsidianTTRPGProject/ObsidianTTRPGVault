---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/elemental
- monster/environment/desert
aliases: ["Fire Elemental"]
statblock: true
"name": "Fire Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "10"
- !!int "17"
- !!int "16"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 50 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing. A creature that touches the elemental or hits it with a melee attack\
    \ while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental\
    \ can enter a hostile creature's space and stop there. The first time it enters\
    \ a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches\
    \ fire; until someone takes an action to douse the fire, the creature takes 5\
    \ (1d10) fire damage at the start of each of its turns."
  "name": "Fire Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental sheds bright light in a 30-foot radius and dim light in an\
    \ additional 30 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For every 5 feet the elemental moves in water, or for every gallon of water\
    \ splashed on it, it takes 1 cold damage."
  "name": "Water Susceptibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental makes two touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) fire damage. If the target is a creature or a flammable object, it ignites.\
    \ Until a creature takes an action to douse the fire, the target takes 5 (1d10)\
    \ fire damage at the start of each of its turns."
  "name": "Touch"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "IMR"
- "EGW"
- "MOT"
- "TCE"
- "CM"
- "WBtW"
name: Fire Elemental
image: "[[Fire Elemental.png]]"
---

# Fire Elemental

```statblock
"name": "Fire Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "10"
- !!int "17"
- !!int "16"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 50 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing. A creature that touches the elemental or hits it with a melee attack\
    \ while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental\
    \ can enter a hostile creature's space and stop there. The first time it enters\
    \ a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches\
    \ fire; until someone takes an action to douse the fire, the creature takes 5\
    \ (1d10) fire damage at the start of each of its turns."
  "name": "Fire Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental sheds bright light in a 30-foot radius and dim light in an\
    \ additional 30 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For every 5 feet the elemental moves in water, or for every gallon of water\
    \ splashed on it, it takes 1 cold damage."
  "name": "Water Susceptibility"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The elemental makes two touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) fire damage. If the target is a creature or a flammable object, it ignites.\
    \ Until a creature takes an action to douse the fire, the target takes 5 (1d10)\
    \ fire damage at the start of each of its turns."
  "name": "Touch"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "IMR"
- "EGW"
- "MOT"
- "TCE"
- "CM"
- "WBtW"
"image": "[[Fire Elemental.png]]"
```
^statblock

*Source: Monster Manual p. 125, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight*

## Description

A faint humanoid shape threads through the core of this wild, moving flame. A fire elemental is a force of capricious devastation. Wherever it moves, it sets its surroundings ablaze, turning the world to ash, smoke, and cinders. Water can halt its destructive progress, causing the fire elemental to shrink back, hissing and smoking in pain and rage.

Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.

**Living Elements.** On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.

**Conjured by Magic.** Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.

**Bound and Shaped.** Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.

**Elemental Nature.** An elemental doesn't require air, food, drink, or sleep.

## Environment

desert
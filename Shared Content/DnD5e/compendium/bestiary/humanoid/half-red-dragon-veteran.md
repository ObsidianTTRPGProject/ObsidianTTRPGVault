---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Half-Red Dragon Veteran"]
statblock: true
"name": "Half-Red Dragon Veteran"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn,\
    \ it can also make a shortsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The veteran exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "GoS"
- "SLW"
- "IMR"
name: Half-Red Dragon Veteran
image: "[[Half-Red Dragon Veteran.png]]"
---

# Half-Red Dragon Veteran

```statblock
"name": "Half-Red Dragon Veteran"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "fire"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn,\
    \ it can also make a shortsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit:\
    \ 6 (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The veteran exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "GoS"
- "SLW"
- "IMR"
"image": "[[Half-Red Dragon Veteran.png]]"
```
^statblock

*Source: Monster Manual p. 180, The Rise of Tiamat, Ghosts of Saltmarsh, Storm Lord's Wrath, Infernal Machine Rebuild*

## Description

When a dragon in polymorphed form mates with another creature, the union sometimes produces half dragon offspring. A creature might also transform into a half-dragon as a result of a mad wizard's spell or a ritual bath in dragon's blood. In all these cases, the result is a creature that combines the essence of a dragon with the form of its original race. Regardless of their origins, all half-dragons have similar features and appearance, gaining special senses, resistance to destructive energy, and a breath weapon.

**Draconic Nature.** Half-dragons are incapable of having natural born offspring. Those that wish to propagate must find other ways to do so, almost always involving magic. By way of compensation, half dragons are blessed with long life. Barring unforeseen misfortune, a typical half-dragon's life expectancy is twice that of its no draconic line, so that a half-dragon human might live more than a century and a half.

Half-dragons inherit personality traits common to their draconic heritage, so that half-gold dragons are often shy and secretive, while half-copper dragons are impish and playful. Half-green dragons are deceitful, while half-white dragons are often dim-witted brutes. These traits are tempered by a half-dragon's other lineage, but greed, arrogance, and paranoia are qualities that even good-aligned half-dragons often possess.

**Half-Dragon Template.** A beast, humanoid, giant, or monstrosity can become a half-dragon. When a creature becomes a half-dragon, it retains all its statistics except as noted below.

**Challenge.** To avoid recalculating the creature's challenge rating, apply the template only to a creature that meets the optional prerequisite in the Breath Weapon table below. Otherwise, use the guidelines in the Dungeon Master's Guide to recalculate the rating after you apply the template.

**Senses.** The half-dragon gains [blindsight](/rules/senses.md#blindsight) with a radius of 10 feet and [darkvision](/rules/senses.md#darkvision) with a radius of 60 feet.

**Resistances.** The half-dragon gains resistance to a type of damage based on its color.

| Color | Damage Resistance |
|-------|-------------------|
| Black or copper | Acid |
| Blue or bronze | Lightning |
| Brass, gold, or red | Fire |
| Green | Poison |
| Silver or white | Cold |
^color-damage-resistance

**Languages.** The half-dragon speaks Draconic in addition to any other languages it knows.

**New Action Breath Weapon.** The half-dragon has the breath weapon of its dragon half. The half-dragon's size determines how this action functions.

| Size | Breath Weapon | Optional Prerequisite |
|------|---------------|-----------------------|
| Large or smaller | As a wyrmling | Challenge 2 or higher |
| Huge | As a young dragon | Challenge 7 or higher |
| Gargantuan | As an adult dragon | Challenge 8 or higher |
^size-breath-weapon-optional-prerequisite

**Sample Half-Dragon.** Here the half-dragon template has been applied to a human [veteran](/compendium/bestiary/humanoid/veteran.md) to create a half-red dragon veteran. [Splint armor](/compendium/items/splint-armor.md) has been replaced with [plate](/compendium/items/plate-armor.md).
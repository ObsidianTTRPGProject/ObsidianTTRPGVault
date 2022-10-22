---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/humanoid
aliases: ["Meletian Hoplite"]
statblock: true
"name": "Meletian Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "3"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite is a 3rd-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). It has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [ray of frost](/compendium/spells/ray-of-frost.md)\
    \ (see \"Actions\" below)\n\n1st level (4 1st-level slots): [color spray](/compendium/spells/color-spray.md),\
    \ [expeditious retreat](/compendium/spells/expeditious-retreat.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (2 2nd-level slots): [blur](/compendium/spells/blur.md), [cloud\
    \ of daggers](/compendium/spells/cloud-of-daggers.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes three weapon attacks. It can replace one weapon attack\
    \ with ray of frost."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 4 (1d8)\
    \ cold damage, and the target's speed is reduced by 10 feet until the start of\
    \ the hoplite's next turn."
  "name": "Ray of Frost (Cantrip)"
"source":
- "MOT"
name: Meletian Hoplite
image: "[[Meletian Hoplite.png]]"
---

# Meletian Hoplite

```statblock
"name": "Meletian Hoplite"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "3"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite is a 3rd-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). It has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [ray of frost](/compendium/spells/ray-of-frost.md)\
    \ (see \"Actions\" below)\n\n1st level (4 1st-level slots): [color spray](/compendium/spells/color-spray.md),\
    \ [expeditious retreat](/compendium/spells/expeditious-retreat.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (2 2nd-level slots): [blur](/compendium/spells/blur.md), [cloud\
    \ of daggers](/compendium/spells/cloud-of-daggers.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hoplite makes three weapon attacks. It can replace one weapon attack\
    \ with ray of frost."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) bludgeoning damage. If the target is a Medium or smaller creature, it must\
    \ succeed on a DC 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Shield Bash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 4 (1d8)\
    \ cold damage, and the target's speed is reduced by 10 feet until the start of\
    \ the hoplite's next turn."
  "name": "Ray of Frost (Cantrip)"
"source":
- "MOT"
"image": "[[Meletian Hoplite.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 229*

## Description

Meletian hoplites use a combination of cunning, faith, and magic to defend their coastal home. Most of these skilled soldiers serve in the Reverent Army, the defenders of Meletis, which uses an array of proven strategies and flexible troop formations to gain the advantage over foes. Bolstered by trained griffon and pegasus steeds, they strike foes where they least expect.

Hoplites are highly trained warriors, versed not only in strategy and tactics but in the glorification of the warrior's spirit, the basis of an ethos that forges an unbreakable bond between members of a military unit. In combat, hoplites typically work in groups and use coordinated tactics to win victories.

The three Hoplite Unit Names tables present the sorts of titles used by hoplite contingents hailing from Theros's great poleis. Consider using these names for military forces characters encounter during their adventures or that they were once a part of.

**Meletian Hoplite Unit Names**

| D8 | Name |
|----|------|
| 1 | Kraken's Claw |
| 2 | Hands of Justice |
| 3 | Thassa's Spear |
| 4 | Ephara's Shield |
| 5 | Kindred of the Deep |
| 6 | Riders of Heliod |
| 7 | Keepers of Pyrgnos |
| 8 | The Skysworn |
^meletian-hoplite-unit-names
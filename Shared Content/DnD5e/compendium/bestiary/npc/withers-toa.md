---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
aliases: ["Withers"]
statblock: true
"name": "Withers"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages he knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). Withers has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [expeditious\
    \ retreat](/compendium/spells/expeditious-retreat.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (4 2nd-level\
    \ slots): [darkness](/compendium/spells/darkness.md), [hold person](/compendium/spells/hold-person.md),\
    \ [rope trick](/compendium/spells/rope-trick.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [wall\
    \ of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level slots):\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers carries the [amulet of the black skull](/compendium/items/amulet-of-the-black-skull-toa.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Withers has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers makes two longsword attacks. He can use his Life Drain in place\
    \ of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a zombie under the Withers's control, unless\
    \ the humanoid is restored to life or its body is destroyed. Withers can have\
    \ no more than twelve zombies under its control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "ToA"
name: Withers
image: "[[Withers.png]]"
---

# Withers

```statblock
"name": "Withers"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages he knew in life"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). Withers has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [expeditious\
    \ retreat](/compendium/spells/expeditious-retreat.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (4 2nd-level\
    \ slots): [darkness](/compendium/spells/darkness.md), [hold person](/compendium/spells/hold-person.md),\
    \ [rope trick](/compendium/spells/rope-trick.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [wall\
    \ of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level slots):\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers carries the [amulet of the black skull](/compendium/items/amulet-of-the-black-skull-toa.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Withers has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Withers makes two longsword attacks. He can use his Life Drain in place\
    \ of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a zombie under the Withers's control, unless\
    \ the humanoid is restored to life or its body is destroyed. Withers can have\
    \ no more than twelve zombies under its control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "ToA"
"image": "[[Withers.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 145*

## Description

Before he was turned into an undead creature, Withers was an Omuan engineer named Gorra. Like all of Omu's citizens, Gorra was enslaved and put to work constructing the tomb. When Acererak sacrificed his workers to their own dungeon, Gorra's traps performed the best.
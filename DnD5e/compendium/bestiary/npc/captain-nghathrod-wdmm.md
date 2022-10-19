---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/aberration
- monster/environment/underdark
aliases: ["Captain N'ghathrod"]
statblock: true
"name": "Captain N'ghathrod"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "111"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod's innate spellcasting ability is Intelligence (spell\
    \ save DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod is a 10th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (save DC 15, +7 to hit with spell attacks). Captain N'ghathrod\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
    \ ward](/compendium/spells/blade-ward.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [shield](/compendium/spells/shield.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [sending](/compendium/spells/sending.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md)\n\n5th\
    \ level (2 5th-level slots): [telekinesis](/compendium/spells/telekinesis.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by Captain N'ghathrod. Hit:\
    \ The target takes 55 (10d10) piercing damage. If this damage reduces the target\
    \ to 0 hit points, Captain N'ghathrod kills the target by extracting and devouring\
    \ its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ 22 (4d8 + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "WDMM"
name: Captain N'ghathrod
image: "[[Captain N'ghathrod.png]]"
---

# Captain N'ghathrod

```statblock
"name": "Captain N'ghathrod"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "111"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod's innate spellcasting ability is Intelligence (spell\
    \ save DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod is a 10th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (save DC 15, +7 to hit with spell attacks). Captain N'ghathrod\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
    \ ward](/compendium/spells/blade-ward.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [shield](/compendium/spells/shield.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md)\n\
    \n3rd level (3 3rd-level slots): [clairvoyance](/compendium/spells/clairvoyance.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [sending](/compendium/spells/sending.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md)\n\n5th\
    \ level (2 5th-level slots): [telekinesis](/compendium/spells/telekinesis.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10\
    \ + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by Captain N'ghathrod. Hit:\
    \ The target takes 55 (10d10) piercing damage. If this damage reduces the target\
    \ to 0 hit points, Captain N'ghathrod kills the target by extracting and devouring\
    \ its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Captain N'ghathrod magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ 22 (4d8 + 4) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "WDMM"
"image": "[[Captain N'ghathrod.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 250*

## Description

Before it turned to a life of space piracy, N'ghathrod lived in a mind flayer colony on the ringed planet of Glyth, which is farther from the sun than Toril.

## Environment

underdark
---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Wood Elf Wizard"]
statblock: true
"name": "Wood Elf Wizard"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf's spellcasting ability is Charisma (spell save DC 12). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The wood elf has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wood elf to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "CM"
name: Wood Elf Wizard
image: "[[Wood Elf Wizard.png]]"
---

# Wood Elf Wizard

```statblock
"name": "Wood Elf Wizard"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "10"
- !!int "17"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf's spellcasting ability is Charisma (spell save DC 12). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The wood elf has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [witch bolt](/compendium/spells/witch-bolt.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [misty step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level slots):\
    \ [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (2\
    \ 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wood elf to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands, plus 3 (1d6) poison damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood elf magically summons a [quasit](/compendium/bestiary/fiend/quasit.md),\
    \ or attempts to summon a [shadow demon](/compendium/bestiary/fiend/shadow-demon.md)\
    \ with a 50|50 percent|50% summoning chance% chance chance of success. The summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "CM"
"image": "[[Wood Elf Wizard.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 187*

## Environment

underdark
---
cssclass: json5e-monster
tags:
- compendium/src/lmop
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Nezznar the Black Spider"]
statblock: true
"name": "Nezznar the Black Spider"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar can innately cast the following spells, requiring no material components:\n\
    \nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)\
    \ (save DC 12)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar is a 4th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 13; +5 to hit with spell attacks). Nezznar has the following\
    \ spells prepared from the wizard's spell list:\n\nCantrips (at will): [mage\
    \ hand](/compendium/spells/mage-hand.md), [ray of frost](/compendium/spells/ray-of-frost.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [invisibility](/compendium/spells/invisibility.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has a [spider staff](/compendium/items/spider-staff-lmop.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has disadvantage on attack rolls when he or his target is in sunlight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage plus 3 (1d6) poison damage."
  "name": "Spider Staff"
"source":
- "LMoP"
name: Nezznar the Black Spider
image: "[[Nezznar the Black Spider.png]]"
---

# Nezznar the Black Spider

```statblock
"name": "Nezznar the Black Spider"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar can innately cast the following spells, requiring no material components:\n\
    \nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)\
    \ (save DC 12)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar is a 4th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 13; +5 to hit with spell attacks). Nezznar has the following\
    \ spells prepared from the wizard's spell list:\n\nCantrips (at will): [mage\
    \ hand](/compendium/spells/mage-hand.md), [ray of frost](/compendium/spells/ray-of-frost.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [invisibility](/compendium/spells/invisibility.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has a [spider staff](/compendium/items/spider-staff-lmop.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nezznar has disadvantage on attack rolls when he or his target is in sunlight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage plus 3 (1d6) poison damage."
  "name": "Spider Staff"
"source":
- "LMoP"
"image": "[[Nezznar the Black Spider.png]]"
```
^statblock

*Source: Lost Mine of Phandelver p. 59*

## Description

Drow (dark elves) are a devious, scheming subterranean race that worships Lolth, the Demon Queen of Spiders.

Drow society is strictly matriarchal. Male drow are relegated to servitor roles, and while most train as warriors, a few, such as Nezznar, become skilled wizards.
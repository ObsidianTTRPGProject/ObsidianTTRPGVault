---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/urban
aliases: ["Preeta Kreepa"]
statblock: true
"name": "Preeta Kreepa"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Common, Dwarvish, Goblin, Undercommon"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Preeta is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Preeta has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action or a reaction, Preeta can shoot one of the following\
    \ eye rays at one target she can see within 120 feet of her:\n\n- Fear Ray.\
    \ The target must succeed on a DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- Paralyzing Ray. The\
    \ target must succeed on a DC 15 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Eye Rays"
"source":
- "WDMM"
name: Preeta Kreepa
image: "[[Preeta Kreepa.png]]"
---

# Preeta Kreepa

```statblock
"name": "Preeta Kreepa"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Common, Dwarvish, Goblin, Undercommon"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Preeta is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Preeta has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action or a reaction, Preeta can shoot one of the following\
    \ eye rays at one target she can see within 120 feet of her:\n\n- Fear Ray.\
    \ The target must succeed on a DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- Paralyzing Ray. The\
    \ target must succeed on a DC 15 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Eye Rays"
"source":
- "WDMM"
"image": "[[Preeta Kreepa.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 56*

## Description

Mages spend their lives in the study and practice of magic. Good-aligned mages offer counsel to nobles and others in power, while evil mages dwell in isolated sites to perform unspeakable experiments without interference.

Preeta served as an assistant to Arcturia, one of Halaster's apprentices, until Arcturia transformed her into a monstrous horror. Preeta looks like an old woman with two beholder eyestalks sprouting from her eye sockets. Her mouth, twice as large as it should be, is filled with sharp, pointed teeth. She wears the flayed, slippery, translucent skin of a kuo-toa as a cloak.

## Environment

urban
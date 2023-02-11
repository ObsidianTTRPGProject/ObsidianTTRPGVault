---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/sahuagin
aliases: ["Sahuagin High Priestess"]
statblock: true
"name": "Sahuagin High Priestess"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "10"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "6"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess is a 7th-level spellcaster. Her spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). She has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\
    \ (trident)\n\n3rd level (3 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [fear](/compendium/spells/fear.md), [mass healing word](/compendium/spells/mass-healing-word.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (1 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess can breathe air and water, but she needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess can magically command any shark within 120 feet of her,\
    \ using a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess makes two attacks with her toothsome staff, or one attack\
    \ with her bite and one with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage."
  "name": "Toothsome Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
"source":
- "GoS"
- "SDW"
name: Sahuagin High Priestess
image: "[[Sahuagin High Priestess.png]]"
---

# Sahuagin High Priestess

```statblock
"name": "Sahuagin High Priestess"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "10"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "6"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Sahuagin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess is a 7th-level spellcaster. Her spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). She has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md)\n\n2nd level (3 2nd-level\
    \ slots): [hold person](/compendium/spells/hold-person.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\
    \ (trident)\n\n3rd level (3 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [fear](/compendium/spells/fear.md), [mass healing word](/compendium/spells/mass-healing-word.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (1 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess can breathe air and water, but she needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess can magically command any shark within 120 feet of her,\
    \ using a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The high priestess makes two attacks with her toothsome staff, or one attack\
    \ with her bite and one with her claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage."
  "name": "Toothsome Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
"source":
- "GoS"
- "SDW"
"image": "[[Sahuagin High Priestess.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 251, Sleeping Dragon's Wake*

## Description

A sahuagin high priestess is the most devout and ferocious of all Sekolah's worshipers. Armed with a staff studded with jagged shark's teeth, she can be seen leading dark rituals in The Final Enemy.
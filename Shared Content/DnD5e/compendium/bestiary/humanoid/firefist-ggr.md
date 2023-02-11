---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Firefist"]
statblock: true
"name": "Firefist"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Religion": !!int "3"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The firefist is a 9th-level Boros spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [guiding bolt](/compendium/spells/guiding-bolt.md), [healing word](/compendium/spells/healing-word.md),\
    \ [heroism](/compendium/spells/heroism.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [blinding smite](/compendium/spells/blinding-smite.md), [crusader's\
    \ mantle](/compendium/spells/crusaders-mantle.md), [revivify](/compendium/spells/revivify.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level\
    \ slots): [flame strike](/compendium/spells/flame-strike.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The firefist makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Greatsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the firefist or one creature it can see within 30 feet of it makes\
    \ an attack roll, the firefist grants a +10 bonus to that roll."
  "name": "Guided Attack (Recharges after a Short or Long Rest)"
"source":
- "GGR"
name: Firefist
image: "[[Firefist.png]]"
---

# Firefist

```statblock
"name": "Firefist"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Religion": !!int "3"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The firefist is a 9th-level Boros spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [guiding bolt](/compendium/spells/guiding-bolt.md), [healing word](/compendium/spells/healing-word.md),\
    \ [heroism](/compendium/spells/heroism.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [blinding smite](/compendium/spells/blinding-smite.md), [crusader's\
    \ mantle](/compendium/spells/crusaders-mantle.md), [revivify](/compendium/spells/revivify.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level\
    \ slots): [flame strike](/compendium/spells/flame-strike.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The firefist makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Greatsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the firefist or one creature it can see within 30 feet of it makes\
    \ an attack roll, the firefist grants a +10 bonus to that roll."
  "name": "Guided Attack (Recharges after a Short or Long Rest)"
"source":
- "GGR"
"image": "[[Firefist.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 231*

## Description

Boros firefists combine potent magic with peerless fighting ability, inspiring all who serve alongside them. They often act as the point of contact between the Boros Legion and the angelic leaders.
---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Biomancer"]
statblock: true
"name": "Biomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "10"
- !!int "15"
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Nature": !!int "9"
  "Arcana": !!int "9"
"senses": "passive Perception 12"
"languages": "Common plus any one language"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer is a 16th-level Simic spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 17, +9 to hit with spell attacks). The biomancer\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [grease](/compendium/spells/grease.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [darkvision](/compendium/spells/darkvision.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [hold person](/compendium/spells/hold-person.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [haste](/compendium/spells/haste.md), [protection from energy](/compendium/spells/protection-from-energy.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [creation](/compendium/spells/creation.md),\
    \ [hold monster](/compendium/spells/hold-monster.md)\n\n6th level (1 6th-level\
    \ slots): [move earth](/compendium/spells/move-earth.md), [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n7th level (1 7th-level slots): [prismatic spray](/compendium/spells/prismatic-spray.md)\n\
    \n8th level (1 8th-level slots): [control weather](/compendium/spells/control-weather.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer magically emanates life-giving energy within 30 feet of itself.\
    \ Any ally of the biomancer that starts its turn there regains 5 (1d10) hit points."
  "name": "Bolstering Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
"source":
- "GGR"
name: Biomancer
image: "[[Biomancer.png]]"
---

# Biomancer

```statblock
"name": "Biomancer"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Good"
"ac": !!int "17"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "10"
- !!int "15"
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Nature": !!int "9"
  "Arcana": !!int "9"
"senses": "passive Perception 12"
"languages": "Common plus any one language"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer is a 16th-level Simic spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 17, +9 to hit with spell attacks). The biomancer\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [grease](/compendium/spells/grease.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [alter self](/compendium/spells/alter-self.md),\
    \ [darkvision](/compendium/spells/darkvision.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [hold person](/compendium/spells/hold-person.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [haste](/compendium/spells/haste.md), [protection from energy](/compendium/spells/protection-from-energy.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [creation](/compendium/spells/creation.md),\
    \ [hold monster](/compendium/spells/hold-monster.md)\n\n6th level (1 6th-level\
    \ slots): [move earth](/compendium/spells/move-earth.md), [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n7th level (1 7th-level slots): [prismatic spray](/compendium/spells/prismatic-spray.md)\n\
    \n8th level (1 8th-level slots): [control weather](/compendium/spells/control-weather.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer magically emanates life-giving energy within 30 feet of itself.\
    \ Any ally of the biomancer that starts its turn there regains 5 (1d10) hit points."
  "name": "Bolstering Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The biomancer has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
"source":
- "GGR"
"image": "[[Biomancer.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 256*

## Description

Nearly all the innovation and advancement in Simic bioengineering comes from the work of biomancers. Specialists in hybridizing and altering creatures through a mixture of science and magic, they have spawned countless hybrids and krasis in search of the perfect union between nature and civilization.
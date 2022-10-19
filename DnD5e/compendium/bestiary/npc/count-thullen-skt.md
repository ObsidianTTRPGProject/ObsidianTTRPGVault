---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
- monster/environment/mountain
aliases: ["Count Thullen"]
statblock: true
"name": "Count Thullen"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
"senses": "passive Perception 17"
"languages": "Common, Draconic, Druidic, Giant"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md)\n\n3/day each: [feather\
    \ fall](/compendium/spells/feather-fall.md), [fly](/compendium/spells/fly.md),\
    \ [misty step](/compendium/spells/misty-step.md), [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen is a 9th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). He has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [produce flame](/compendium/spells/produce-flame.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md), [gust of wind](/compendium/spells/gust-of-wind.md)\n\
    \n3rd level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [speak with plants](/compendium/spells/speak-with-plants.md)\n\
    \n4th level (3 4th-level slots): [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [grasping vine](/compendium/spells/grasping-vine.md)\n\n5th level (1 5th-level\
    \ slots): [conjure elemental](/compendium/spells/conjure-elemental.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen makes two morningstar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
name: Count Thullen
image: "[[Count Thullen.png]]"
---

# Count Thullen

```statblock
"name": "Count Thullen"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Good"
"ac": !!int "14"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
"senses": "passive Perception 17"
"languages": "Common, Draconic, Druidic, Giant"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [gaseous form](/compendium/spells/gaseous-form.md)\n\n3/day each: [feather\
    \ fall](/compendium/spells/feather-fall.md), [fly](/compendium/spells/fly.md),\
    \ [misty step](/compendium/spells/misty-step.md), [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen is a 9th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). He has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [produce flame](/compendium/spells/produce-flame.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [barkskin](/compendium/spells/barkskin.md), [gust of wind](/compendium/spells/gust-of-wind.md)\n\
    \n3rd level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [speak with plants](/compendium/spells/speak-with-plants.md)\n\
    \n4th level (3 4th-level slots): [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [grasping vine](/compendium/spells/grasping-vine.md)\n\n5th level (1 5th-level\
    \ slots): [conjure elemental](/compendium/spells/conjure-elemental.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thullen makes two morningstar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "SKT"
"image": "[[Count Thullen.png]]"
```
^statblock

*Source: Storm King's Thunder p. 198*

## Environment

mountain
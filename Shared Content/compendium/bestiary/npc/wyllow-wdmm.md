---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
aliases: ["Wyllow"]
statblock: true
"name": "Wyllow"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "132"
"hit_dice": "24d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Medicine": !!int "9"
  "Nature": !!int "5"
  "Perception": !!int "9"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Druidic, Elvish"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Wyllow is an 18th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 17, +9 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [produce flame](/compendium/spells/produce-flame.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [entangle](/compendium/spells/entangle.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [beast sense](/compendium/spells/beast-sense.md), [hold person](/compendium/spells/hold-person.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)\n\
    \n9th level (1 9th-level slots): [foresight](/compendium/spells/foresight.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyllow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wyllow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyllow can attempt to hide even when they are only lightly obscured\
    \ by foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Wyllow magically polymorphs into a beast or elemental with a challenge\
    \ rating of 6 or less, and can remain in this form for up to 9 hours. Wyllow can\
    \ choose whether its equipment falls to the ground, melds with its new form, or\
    \ is worn by the new form. Wyllow reverts to its true form if it dies or falls\
    \ [unconscious](/rules/conditions.md#unconscious). Wyllow can revert to its true\
    \ form using a bonus action on its turn.\n\nWhile in a new form, Wyllow retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ and Dexterity are replaced by those of the new form, and it gains any special\
    \ senses, proficiencies, traits, actions, and reactions (except class features,\
    \ legendary actions, and lair actions) that the new form has but that it lacks.\
    \ It can cast its spells with verbal or somatic components in its new form.\n\n\
    The new form's attacks count as magical for the purpose of overcoming resistances\
    \ and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "WDMM"
name: Wyllow
image: "[[Wyllow.png]]"
---

# Wyllow

```statblock
"name": "Wyllow"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "132"
"hit_dice": "24d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "20"
- !!int "11"
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Medicine": !!int "9"
  "Nature": !!int "5"
  "Perception": !!int "9"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Druidic, Elvish"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Wyllow is an 18th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 17, +9 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [produce flame](/compendium/spells/produce-flame.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [entangle](/compendium/spells/entangle.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [beast sense](/compendium/spells/beast-sense.md), [hold person](/compendium/spells/hold-person.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [water breathing](/compendium/spells/water-breathing.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [locate creature](/compendium/spells/locate-creature.md), [stoneskin](/compendium/spells/stoneskin.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (3 5th-level\
    \ slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [tree stride](/compendium/spells/tree-stride.md)\n\
    \n6th level (1 6th-level slots): [heal](/compendium/spells/heal.md), [heroes'\
    \ feast](/compendium/spells/heroes-feast.md), [sunbeam](/compendium/spells/sunbeam.md)\n\
    \n7th level (1 7th-level slots): [fire storm](/compendium/spells/fire-storm.md)\n\
    \n8th level (1 8th-level slots): [animal shapes](/compendium/spells/animal-shapes.md)\n\
    \n9th level (1 9th-level slots): [foresight](/compendium/spells/foresight.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyllow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the wyllow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wyllow can attempt to hide even when they are only lightly obscured\
    \ by foliage, heavy rain, falling snow, mist, and other natural phenomena."
  "name": "Mask of the Wild"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Wyllow magically polymorphs into a beast or elemental with a challenge\
    \ rating of 6 or less, and can remain in this form for up to 9 hours. Wyllow can\
    \ choose whether its equipment falls to the ground, melds with its new form, or\
    \ is worn by the new form. Wyllow reverts to its true form if it dies or falls\
    \ [unconscious](/rules/conditions.md#unconscious). Wyllow can revert to its true\
    \ form using a bonus action on its turn.\n\nWhile in a new form, Wyllow retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ and Dexterity are replaced by those of the new form, and it gains any special\
    \ senses, proficiencies, traits, actions, and reactions (except class features,\
    \ legendary actions, and lair actions) that the new form has but that it lacks.\
    \ It can cast its spells with verbal or somatic components in its new form.\n\n\
    The new form's attacks count as magical for the purpose of overcoming resistances\
    \ and immunity to nonmagical attacks."
  "name": "Change Shape (2/Day)"
"source":
- "WDMM"
"image": "[[Wyllow.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 70*

## Description

Wyllow is a moon elf druid with eyes as green as emeralds. Butterflies nest in her tangled black hair, and small critters gather around her feet.

## Environment

forest, mountain, swamp
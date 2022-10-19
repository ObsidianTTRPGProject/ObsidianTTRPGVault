---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Druid of the Old Ways"]
statblock: true
"name": "Druid of the Old Ways"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "11"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Common, Druidic"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid is a 12th-level Gruul spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 16, +8 to hit with spell attacks). It has the following\
    \ druid spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [resistance](/compendium/spells/resistance.md),\
    \ [thorn whip](/compendium/spells/thorn-whip.md)\n\n1st level (4 1st-level slots):\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [beast sense](/compendium/spells/beast-sense.md), [flame blade](/compendium/spells/flame-blade.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md)\n\n3rd level\
    \ (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [transport via plants](/compendium/spells/transport-via-plants.md),\
    \ [wall of thorns](/compendium/spells/wall-of-thorns.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid can communicate with beasts and plants as if they shared a language."
  "name": "Speak with Beasts and Plants"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "GGR"
name: Druid of the Old Ways
image: "[[Druid of the Old Ways.png]]"
---

# Druid of the Old Ways

```statblock
"name": "Druid of the Old Ways"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "11"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Common, Druidic"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid is a 12th-level Gruul spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 16, +8 to hit with spell attacks). It has the following\
    \ druid spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [produce flame](/compendium/spells/produce-flame.md), [resistance](/compendium/spells/resistance.md),\
    \ [thorn whip](/compendium/spells/thorn-whip.md)\n\n1st level (4 1st-level slots):\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [beast sense](/compendium/spells/beast-sense.md), [flame blade](/compendium/spells/flame-blade.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md)\n\n3rd level\
    \ (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (3 4th-level slots): [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n5th level (2 5th-level slots): [commune with nature](/compendium/spells/commune-with-nature.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [transport via plants](/compendium/spells/transport-via-plants.md),\
    \ [wall of thorns](/compendium/spells/wall-of-thorns.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid can communicate with beasts and plants as if they shared a language."
  "name": "Speak with Beasts and Plants"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "GGR"
"image": "[[Druid of the Old Ways.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 239*

## Description

The druids of the Old Ways are the keepers of ancient Gruul traditions devoted to the primal ferocity of animal gods such as Ilharg the Raze-Boar and Kashath the Stalker.

**The End-Raze.** The druids of the Old Ways believe that civilization will never be eradicated by scattered raids and petty skirmishes. They cling to the idea of a coming apocalypse, the End-Raze, when Ilharg's hoofs will trample every brick and stone of Ravnica's soaring skylines to rubble. The world will return to a state of nature in which the lawless code of muscle and savagery will reign once again.
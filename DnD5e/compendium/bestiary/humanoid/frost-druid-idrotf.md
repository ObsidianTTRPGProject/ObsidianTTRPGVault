---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Frost Druid"]
statblock: true
"name": "Frost Druid"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "9"
"speed": "walk 40 ft. (wolf form only), burrow 5 ft. (fox form only), climb 30 ft.\
  \ (goat form only), fly 60 ft. (owl form only)"
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_resistances": "cold"
"senses": "darkvision 60 ft. (beast form only), passive Perception 16"
"languages": "Common, Druidic"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14; +6 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md), [resistance](/compendium/spells/resistance.md)\n\
    \n1st level (4 1st-level slots): [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md), [wind wall](/compendium/spells/wind-wall.md)\n\
    \n4th level (3 4th-level slots): [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [awaken](/compendium/spells/awaken.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage plus 5 (2d4) cold damage."
  "name": "Ice Sickle (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Maul (Beast Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid magically polymorphs into a beast form—fox, mountain goat, owl,\
    \ or wolf—or back into its humanoid form. Any equipment it is wearing or carrying\
    \ is absorbed or borne by the beast form (the druid's choice). It reverts to its\
    \ humanoid form when it dies. The druid's statistics are the same in each form,\
    \ except where noted in this stat block."
  "name": "Change Shape"
"source":
- "IDRotF"
name: Frost Druid
image: "[[Frost Druid.png]]"
---

# Frost Druid

```statblock
"name": "Frost Druid"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "9"
"speed": "walk 40 ft. (wolf form only), burrow 5 ft. (fox form only), climb 30 ft.\
  \ (goat form only), fly 60 ft. (owl form only)"
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_resistances": "cold"
"senses": "darkvision 60 ft. (beast form only), passive Perception 16"
"languages": "Common, Druidic"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14; +6 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md), [resistance](/compendium/spells/resistance.md)\n\
    \n1st level (4 1st-level slots): [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md), [wind wall](/compendium/spells/wind-wall.md)\n\
    \n4th level (3 4th-level slots): [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [awaken](/compendium/spells/awaken.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage plus 5 (2d4) cold damage."
  "name": "Ice Sickle (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Maul (Beast Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The druid magically polymorphs into a beast form—fox, mountain goat, owl,\
    \ or wolf—or back into its humanoid form. Any equipment it is wearing or carrying\
    \ is absorbed or borne by the beast form (the druid's choice). It reverts to its\
    \ humanoid form when it dies. The druid's statistics are the same in each form,\
    \ except where noted in this stat block."
  "name": "Change Shape"
"source":
- "IDRotF"
"image": "[[Frost Druid.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 288*

## Description

Frost druids are solitary defenders of nature and the natural enemies of civilization in the North. They seek to preserve the arctic wilderness by destroying outsiders who cross their path. Each patrols its territory in the guise of an arctic fox, a mountain goat, a snowy owl, or a wolf, reverting to human form only when it attacks. Clever ambushers, they use [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md) spells to create illusory snowdrifts under which they can hide, or to obscure pools covered by thin ice through which others might fall.

**Awakened Companions.** A frost druid is often accompanied by one or more beasts, shrubs, or evergreen trees that it has made sentient using the [awaken](/compendium/spells/awaken.md) spell. These druids favor polar bears and reindeer (use the [elk](/compendium/bestiary/beast/elk.md) stat block in the "Monster Manual") as companions, and such creatures typically share the druid's disposition.

**Ice Sickle.** A frost druid can carve a sickle out of ice, requiring a total of 24 hours for the work. Bitter cold courses through this weapon while it's in the druid's hands. If the druid dies, the ice sickle melts away. The weapon is otherwise identical to a normal sickle.
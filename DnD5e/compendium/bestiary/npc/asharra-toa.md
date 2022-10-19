---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/humanoid/aarakocra
aliases: ["Asharra"]
statblock: true
"name": "Asharra"
"size": "Medium"
"type": "humanoid"
"subtype": "aarakocra"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "17"
- !!int "11"
"speed": "walk 20 ft., fly 50 ft."
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "7"
  "History": !!int "4"
"senses": "passive Perception 17"
"languages": "Auran, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asharra is a 5th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). Asharra has the following\
    \ druid spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [produce flame](/compendium/spells/produce-flame.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [hold person](/compendium/spells/hold-person.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (2 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [wind wall](/compendium/spells/wind-wall.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aarakocra is flying and dives at least 30 feet straight toward a\
    \ target and then hits it with a melee weapon attack, the attack deals an extra\
    \ 3 (1d6) damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asharra knows a ritual called the Dance of the Seven Winds, which temporarily\
    \ grants magical flight to as many as ten nonflying creatures. The ritual, which\
    \ takes 10 minutes to complete, can only be performed by an aarakocra elder and\
    \ requires a black orchid as a material component.\n\nAsharra must grind the orchid\
    \ to powder, inhale it, and dance in circles around the ritual's beneficiaries\
    \ uninterrupted while seven other aarakocra chant prayers to the Wind Dukes of\
    \ Aaqa. When the dance concludes, Asharra's wings disappear and she loses the\
    \ ability to fly. The ritual's beneficiaries each gain a magical flying speed\
    \ of 30 feet (allowing them to fly 4 miles per hour). This benefit lasts for 3\
    \ days, after which Asharra's wings reappear and she regains the ability to fly."
  "name": "Dance of the Seven Winds"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Five aarakocra within 30 feet of each other can magically summon an [air\
    \ elemental](/compendium/bestiary/elemental/air-elemental.md). Each of the five\
    \ must use its action and movement on three consecutive turns to perform an aerial\
    \ dance and must maintain concentration while doing so (as if concentrating on\
    \ a spell). When all five have finished their third turn of the dance, the elemental\
    \ appears in an unoccupied space within 60 feet of them. It is friendly toward\
    \ them and obeys their spoken commands. It remains for 1 hour, until it or all\
    \ its summoners die, or until any of its summoners dismisses it as a bonus action.\
    \ A summoner can't perform the dance again until it finishes a short rest. When\
    \ the elemental returns to the Elemental Plane of Air, any aarakocra within 5\
    \ feet of it can return with it."
  "name": "Summon Air Elemental"
"source":
- "ToA"
name: Asharra
image: "[[Asharra.png]]"
---

# Asharra

```statblock
"name": "Asharra"
"size": "Medium"
"type": "humanoid"
"subtype": "aarakocra"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "17"
- !!int "11"
"speed": "walk 20 ft., fly 50 ft."
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "7"
  "History": !!int "4"
"senses": "passive Perception 17"
"languages": "Auran, Common"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asharra is a 5th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). Asharra has the following\
    \ druid spells prepared:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [mending](/compendium/spells/mending.md), [produce flame](/compendium/spells/produce-flame.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [hold person](/compendium/spells/hold-person.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (2 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [wind wall](/compendium/spells/wind-wall.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aarakocra is flying and dives at least 30 feet straight toward a\
    \ target and then hits it with a melee weapon attack, the attack deals an extra\
    \ 3 (1d6) damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Asharra knows a ritual called the Dance of the Seven Winds, which temporarily\
    \ grants magical flight to as many as ten nonflying creatures. The ritual, which\
    \ takes 10 minutes to complete, can only be performed by an aarakocra elder and\
    \ requires a black orchid as a material component.\n\nAsharra must grind the orchid\
    \ to powder, inhale it, and dance in circles around the ritual's beneficiaries\
    \ uninterrupted while seven other aarakocra chant prayers to the Wind Dukes of\
    \ Aaqa. When the dance concludes, Asharra's wings disappear and she loses the\
    \ ability to fly. The ritual's beneficiaries each gain a magical flying speed\
    \ of 30 feet (allowing them to fly 4 miles per hour). This benefit lasts for 3\
    \ days, after which Asharra's wings reappear and she regains the ability to fly."
  "name": "Dance of the Seven Winds"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Talon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Five aarakocra within 30 feet of each other can magically summon an [air\
    \ elemental](/compendium/bestiary/elemental/air-elemental.md). Each of the five\
    \ must use its action and movement on three consecutive turns to perform an aerial\
    \ dance and must maintain concentration while doing so (as if concentrating on\
    \ a spell). When all five have finished their third turn of the dance, the elemental\
    \ appears in an unoccupied space within 60 feet of them. It is friendly toward\
    \ them and obeys their spoken commands. It remains for 1 hour, until it or all\
    \ its summoners die, or until any of its summoners dismisses it as a bonus action.\
    \ A summoner can't perform the dance again until it finishes a short rest. When\
    \ the elemental returns to the Elemental Plane of Air, any aarakocra within 5\
    \ feet of it can return with it."
  "name": "Summon Air Elemental"
"source":
- "ToA"
"image": "[[Asharra.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 69*

## Description

Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.

**Biography.** The incredibly old leader of the community at Kir Sabal. The others refer to her as Teacher, and they revere her as a living saint. Asharra is intelligent, ambitious, and somewhat manipulative, but never cruel or insensitive.
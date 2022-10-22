---
cssclass: json5e-monster
tags:
- compendium/src/tce
- monster/size/medium
- monster/type/construct
aliases: ["Construct Spirit (8th-level Spell)"]
statblock: true
"name": "Construct Spirit (8th-level Spell)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "21"
"hp": !!int "100"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "poison"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the construct or hits it with a melee attack while\
    \ within 5 feet of it takes 1d10 fire damage."
  "name": "Heated Body (Metal Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the construct can see starts its turn within 10 feet of\
    \ the construct, the construct can force it to make a Wisdom saving throw against\
    \ your spell save DC. On a failed save, the target can't use reactions and its\
    \ speed is halved until the start of its next turn."
  "name": "Stony Lethargy (Stone Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The construct makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel bludgeoning damage."
  "name": "Slam"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the construct takes damage, it makes a slam attack against a random\
    \ creature within 5 feet of it. If no creature is within reach, the construct\
    \ moves up to half its speed toward an enemy it can see, without provoking opportunity\
    \ attacks."
  "name": "Berserk Lashing (Clay Only)"
"source":
- "TCE"
name: Construct Spirit (8th-level Spell)
image: "[[Construct Spirit (8th-level Spell).png]]"
---

# Construct Spirit (8th-level Spell)

```statblock
"name": "Construct Spirit (8th-level Spell)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "21"
"hp": !!int "100"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "poison"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the construct or hits it with a melee attack while\
    \ within 5 feet of it takes 1d10 fire damage."
  "name": "Heated Body (Metal Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the construct can see starts its turn within 10 feet of\
    \ the construct, the construct can force it to make a Wisdom saving throw against\
    \ your spell save DC. On a failed save, the target can't use reactions and its\
    \ speed is halved until the start of its next turn."
  "name": "Stony Lethargy (Stone Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The construct makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 4 + summonSpellLevel bludgeoning damage."
  "name": "Slam"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the construct takes damage, it makes a slam attack against a random\
    \ creature within 5 feet of it. If no creature is within reach, the construct\
    \ moves up to half its speed toward an enemy it can see, without provoking opportunity\
    \ attacks."
  "name": "Berserk Lashing (Clay Only)"
"source":
- "TCE"
"image": "[[Construct Spirit (8th-level Spell).png]]"
```
^statblock

*Source: Tasha's Cauldron of Everything p. 111*
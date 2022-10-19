---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/large
- monster/type/giant
aliases: ["Mercane"]
statblock: true
"name": "Mercane"
"size": "Large"
"type": "giant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Giant, telepathy 60 ft. (see also Mercane telepathy)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane can communicate telepathically with any other mercane it knows,\
    \ regardless of the distance between them."
  "name": "Mercane Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane makes three Psi-Imbued Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the mercane until the end of the target's next turn."
  "name": "Psi-Imbued Blade"
"source":
- "BAM"
- "LoX"
name: Mercane
image: "[[Mercane.png]]"
---

# Mercane

```statblock
"name": "Mercane"
"size": "Large"
"type": "giant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Giant, telepathy 60 ft. (see also Mercane telepathy)"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane can communicate telepathically with any other mercane it knows,\
    \ regardless of the distance between them."
  "name": "Mercane Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mercane makes three Psi-Imbued Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the mercane until the end of the target's next turn."
  "name": "Psi-Imbued Blade"
"source":
- "BAM"
- "LoX"
"image": "[[Mercane.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 37, Light of Xaryxis*

## Description

Mercanes are merchants who trade primarily in magic items and advanced technology, including artifacts and spelljamming helms. These 12-foot-tall, lanky, blue giants dress in elegant robes and have elongated heads and long, spindly fingers. They use spelljamming ships to cross the Astral Sea and travel from world to world within Wildspace systems, where they conduct most of their business. It's rare to see more than one mercane at a time, though it's common for a mercane to be accompanied by underlings or bodyguards.

Mercanes will conduct business with anyone, fairly and reliably, provided the other party has neither harmed nor swindled another mercane in the past. Mercanes have a special form of telepathy that enables them to communicate with one another across the multiverse. A mercane often uses this ability to warn another mercanes about individuals who are dangerous or unreliable. Once a mercane has been offended by someone, getting back into their good graces is next to impossible.
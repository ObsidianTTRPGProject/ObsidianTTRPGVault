---
cssclass: json5e-monster
tags:
- compendium/src/lox
- monster/size/large
- monster/type/giant
aliases: ["Vocath"]
statblock: true
"name": "Vocath"
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
  "desc": "Vocath casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vocath can communicate telepathically with any other mercane it knows,\
    \ regardless of the distance between them."
  "name": "Mercane Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vocath makes three Psi-Imbued Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of Vocath until the end of the target's next turn."
  "name": "Psi-Imbued Blade"
"source":
- "LoX"
name: Vocath
image: "[[Vocath.png]]"
---

# Vocath

```statblock
"name": "Vocath"
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
  "desc": "Vocath casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [light](/compendium/spells/light.md)\n\
    \n1/day each: [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [mage armor](/compendium/spells/mage-armor.md) (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vocath can communicate telepathically with any other mercane it knows,\
    \ regardless of the distance between them."
  "name": "Mercane Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vocath makes three Psi-Imbued Blade attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage, and if the target is a creature, it must succeed on a\
    \ DC 15 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of Vocath until the end of the target's next turn."
  "name": "Psi-Imbued Blade"
"source":
- "LoX"
"image": "[[Vocath.png]]"
```
^statblock

*Source: Light of Xaryxis p. 37*
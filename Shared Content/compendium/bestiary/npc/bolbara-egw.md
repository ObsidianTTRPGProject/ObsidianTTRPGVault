---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/small
- monster/type/humanoid/goblinoid
aliases: ["Bol'bara"]
statblock: true
"name": "Bol'bara"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Chaotic Good (chaotic evil when fully possessed)"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d6 + 9"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Goblin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara's innate spellcasting ability is Charisma (spell save DC 12, +4\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [hex](/compendium/spells/hex.md), [hold person](/compendium/spells/hold-person.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Bol'bara reduces a hostile creature to 0 hit points, she gains 6 temporary\
    \ hit points."
  "name": "Dark One's Blessing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara can take the Disengage or Hide action as a bonus action on each\
    \ of her turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 120 ft., one creature. Hit: 7 (1d10\
    \ + 2) force damage."
  "name": "Eldritch Blast (Cantrip)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara moves up to her speed. She can move through other creatures and\
    \ objects as if they were difficult terrain. She takes 5 (1d10) force damage if\
    \ she ends her turn inside an object."
  "name": "Incorporeal Dash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius sphere of magical confusion extends from a point Bol'bara\
    \ can see within 60 feet of her and spreads around corners. Each creature that\
    \ starts its turn in that area is treated as if targeted by the [confusion](/compendium/spells/confusion.md)\
    \ spell (save DC 12). The sphere lasts as long as Bol'bara maintains concentration,\
    \ up to 1 minute (as if concentrating on a spell)."
  "name": "Zone of Calamity (Costs 2 Actions)"
"source":
- "EGW"
name: Bol'bara
image: "[[Bol'bara.png]]"
---

# Bol'bara

```statblock
"name": "Bol'bara"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Chaotic Good (chaotic evil when fully possessed)"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d6 + 9"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Goblin"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara's innate spellcasting ability is Charisma (spell save DC 12, +4\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [hex](/compendium/spells/hex.md), [hold person](/compendium/spells/hold-person.md),\
    \ [invisibility](/compendium/spells/invisibility.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Bol'bara reduces a hostile creature to 0 hit points, she gains 6 temporary\
    \ hit points."
  "name": "Dark One's Blessing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara can take the Disengage or Hide action as a bonus action on each\
    \ of her turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 120 ft., one creature. Hit: 7 (1d10\
    \ + 2) force damage."
  "name": "Eldritch Blast (Cantrip)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bol'bara moves up to her speed. She can move through other creatures and\
    \ objects as if they were difficult terrain. She takes 5 (1d10) force damage if\
    \ she ends her turn inside an object."
  "name": "Incorporeal Dash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius sphere of magical confusion extends from a point Bol'bara\
    \ can see within 60 feet of her and spreads around corners. Each creature that\
    \ starts its turn in that area is treated as if targeted by the [confusion](/compendium/spells/confusion.md)\
    \ spell (save DC 12). The sphere lasts as long as Bol'bara maintains concentration,\
    \ up to 1 minute (as if concentrating on a spell)."
  "name": "Zone of Calamity (Costs 2 Actions)"
"source":
- "EGW"
"image": "[[Bol'bara.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 261*
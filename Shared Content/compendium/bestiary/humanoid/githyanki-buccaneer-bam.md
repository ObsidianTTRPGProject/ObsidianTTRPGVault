---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/humanoid/gith
aliases: ["Githyanki Buccaneer"]
statblock: true
"name": "Githyanki Buccaneer"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "5"
  "Deception": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Gith"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\nAt\
    \ will: [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day each: [plane shift](/compendium/spells/plane-shift.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes two Greatsword or Telekinetic Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 3 (1d6) psychic damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 13 (3d6\
    \ + 3) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "BAM"
- "LoX"
name: Githyanki Buccaneer
image: "[[Githyanki Buccaneer.png]]"
---

# Githyanki Buccaneer

```statblock
"name": "Githyanki Buccaneer"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
  "Constitution": !!int "4"
"skillsaves":
  "Athletics": !!int "5"
  "Deception": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Common, Gith"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\nAt\
    \ will: [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day each: [plane shift](/compendium/spells/plane-shift.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki makes two Greatsword or Telekinetic Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 3 (1d6) psychic damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 13 (3d6\
    \ + 3) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "BAM"
- "LoX"
"image": "[[Githyanki Buccaneer.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 27, Light of Xaryxis*

## Description

Githyanki buccaneers ply the Astral Plane for riches, which they haul back to their hidden fortresses in the Deep Astral. Many of them are warriors who lost the will to serve the Lich-Queen Vlaakith; they prefer to live by their own code or revel in their unbridled freedom.
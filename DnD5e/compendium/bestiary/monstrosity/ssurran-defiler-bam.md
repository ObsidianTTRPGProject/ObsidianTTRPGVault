---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/monstrosity/lizardfolk
aliases: ["Ssurran Defiler"]
statblock: true
"name": "Ssurran Defiler"
"size": "Medium"
"type": "monstrosity"
"subtype": "lizardfolk"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "13"
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Intelligence": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "necrotic"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability:\n\nAt will: [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day: [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran's AC includes its Intelligence modifier."
  "name": "Intellect Fortress"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran makes two Claw attacks and uses Defile (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage plus 4 (1d8) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ordinary vegetation within 10 feet of the ssurran withers and dies. In\
    \ addition, each creature within 10 feet of the ssurran must make a DC 11 Constitution\
    \ saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one. The ssurran regains 5 (1d10) hit points for\
    \ each creature that fails the saving throw."
  "name": "Defile (Recharge 6)"
"source":
- "BAM"
- "LoX"
name: Ssurran Defiler
image: "[[Ssurran Defiler.png]]"
---

# Ssurran Defiler

```statblock
"name": "Ssurran Defiler"
"size": "Medium"
"type": "monstrosity"
"subtype": "lizardfolk"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "13"
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "15"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Intelligence": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "4"
  "Survival": !!int "4"
"damage_resistances": "necrotic"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability:\n\nAt will: [mage hand](/compendium/spells/mage-hand.md)\
    \ (the hand is invisible)\n\n1/day: [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran can hold its breath for 15 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran's AC includes its Intelligence modifier."
  "name": "Intellect Fortress"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran makes two Claw attacks and uses Defile (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage plus 4 (1d8) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ordinary vegetation within 10 feet of the ssurran withers and dies. In\
    \ addition, each creature within 10 feet of the ssurran must make a DC 11 Constitution\
    \ saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one. The ssurran regains 5 (1d10) hit points for\
    \ each creature that fails the saving throw."
  "name": "Defile (Recharge 6)"
"source":
- "BAM"
- "LoX"
"image": "[[Ssurran Defiler.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 58, Light of Xaryxis*

## Description

Ssurran defilers can lay waste to the plant life around them and draw vital energy at the same time from other creatures that are caught in the area.
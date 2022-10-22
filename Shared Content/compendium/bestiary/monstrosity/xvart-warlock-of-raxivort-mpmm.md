---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/monstrosity
- monster/environment/hill
- monster/environment/underdark
aliases: ["Xvart Warlock of Raxivort"]
statblock: true
"name": "Xvart Warlock of Raxivort"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Abyssal"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 11):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [burning hands](/compendium/spells/burning-hands.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the xvart reduces an enemy to 0 hit points, the xvart gains 4 temporary\
    \ hit points."
  "name": "Raxivort's Blessing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart can communicate with ordinary [bats](/compendium/bestiary/beast/bat.md)\
    \ and [rats](/compendium/bestiary/beast/rat.md), as well as [giant bats](/compendium/bestiary/beast/giant-bat.md)\
    \ and [giant rats](/compendium/bestiary/beast/giant-rat.md)."
  "name": "Raxivort's Tongue"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart makes two Scimitar or Raxivort's Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +3 to hit, range 30 ft., one creature. Hit: 7 (1d10\
    \ + 2) poison damage."
  "name": "Raxivort's Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart takes the Disengage action."
  "name": "Low Cunning"
"source":
- "MPMM"
- "VGM"
name: Xvart Warlock of Raxivort
image: "[[Xvart Warlock of Raxivort.png]]"
---

# Xvart Warlock of Raxivort

```statblock
"name": "Xvart Warlock of Raxivort"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Abyssal"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 11):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [burning hands](/compendium/spells/burning-hands.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the xvart reduces an enemy to 0 hit points, the xvart gains 4 temporary\
    \ hit points."
  "name": "Raxivort's Blessing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart can communicate with ordinary [bats](/compendium/bestiary/beast/bat.md)\
    \ and [rats](/compendium/bestiary/beast/rat.md), as well as [giant bats](/compendium/bestiary/beast/giant-bat.md)\
    \ and [giant rats](/compendium/bestiary/beast/giant-rat.md)."
  "name": "Raxivort's Tongue"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart makes two Scimitar or Raxivort's Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +3 to hit, range 30 ft., one creature. Hit: 7 (1d10\
    \ + 2) poison damage."
  "name": "Raxivort's Bite"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The xvart takes the Disengage action."
  "name": "Low Cunning"
"source":
- "MPMM"
- "VGM"
"image": "[[Xvart Warlock of Raxivort.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 267, Volo's Guide to Monsters p. 200*

## Description

Some xvarts are spawned with a trace of Raxivort's divine energy. These xvarts usually form a pact with him and wield magic in his service as warlocks.

**Xvarts.** Xvarts are cowardly, greedy creatures spawned by a renegade demigod, Raxivort. They have blue skin, orange eyes, and receding hairlines, mirroring their creator's appearance. They stand about 3 feet tall.

Raxivort spent centuries watching over the treasury of Graz'zt, and in time, Raxivort plundered his lord's vault. One of the treasures he stole was the _Infinity Spindle_, a crystalline shard that could transform even a creature as lowly as Raxivort into a demigod. After his apotheosis, Raxivort forged the Black Sewers, a realm within Pandemonium that he filled with his beloved creatures, rats and bats, which xvarts befriend to this day. He enjoyed his reign only briefly before Graz'zt unleashed his vengeance. The demon prince urged villains far and wide to pursue the Infinity Spindle for themselves and destroy Raxivort.

## Environment

hill, underdark
---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Inspired"]
statblock: true
"name": "Inspired"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "2"
  "Persuasion": !!int "7"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "Common, Quori"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired's spellcasting ability is Intelligence (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [mage hand](/compendium/spells/mage-hand.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\
    \ (see \"Actions\" below)\n\n1/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [dissonant whispers](/compendium/spells/dissonant-whispers.md), [hex](/compendium/spells/hex.md),\
    \ [hold person](/compendium/spells/hold-person.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired has advantage on Wisdom saving throws."
  "name": "Dual Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired makes two crysteel dagger attacks. It can replace one attack\
    \ with vicious mockery."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage plus 10 (3d6) force damage."
  "name": "Crysteel Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired unleashes a string of insults laced with subtle enchantments\
    \ at one creature it can see within 60 feet of it. If the target can hear the\
    \ Inspired, the target must succeed on a DC 13 Wisdom saving throw or take 2 (1d4)\
    \ psychic damage and have disadvantage on the next attack roll it makes before\
    \ the end of its next turn."
  "name": "Vicious Mockery (Cantrip)"
"source":
- "ERLW"
name: Inspired
image: "[[Inspired.png]]"
---

# Inspired

```statblock
"name": "Inspired"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "2"
  "Persuasion": !!int "7"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "Common, Quori"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired's spellcasting ability is Intelligence (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [mage hand](/compendium/spells/mage-hand.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\
    \ (see \"Actions\" below)\n\n1/day each: [charm person](/compendium/spells/charm-person.md),\
    \ [dissonant whispers](/compendium/spells/dissonant-whispers.md), [hex](/compendium/spells/hex.md),\
    \ [hold person](/compendium/spells/hold-person.md), [mage armor](/compendium/spells/mage-armor.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired has advantage on Wisdom saving throws."
  "name": "Dual Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired makes two crysteel dagger attacks. It can replace one attack\
    \ with vicious mockery."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage plus 10 (3d6) force damage."
  "name": "Crysteel Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Inspired unleashes a string of insults laced with subtle enchantments\
    \ at one creature it can see within 60 feet of it. If the target can hear the\
    \ Inspired, the target must succeed on a DC 13 Wisdom saving throw or take 2 (1d4)\
    \ psychic damage and have disadvantage on the next attack roll it makes before\
    \ the end of its next turn."
  "name": "Vicious Mockery (Cantrip)"
"source":
- "ERLW"
"image": "[[Inspired.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 294*

## Description

The rulers of distant Sarlona are known as the Inspired. These noble families are said to be bound to celestial spirits that guide and empower them, but the truth is far darker. The Inspired are the mortal hosts of the nightmare spirits of Dal Quor, and they carry out the foul agenda of the Dreaming Dark.

Any humanoid who can dream can volunteer to serve as a quori vessel. But the Inspired of Sarlona are humans bred to be such vessels. They have no choice in this destiny, since they can't resist quori possession. Physically, Inspired resemble the kalashtar, possessing an almost supernatural beauty.

Most of the people of the Five Nations have heard of the Inspired lords in Riedra—never realizing that Inspired are spread throughout Khorvaire as well. Beggars and generals, mayors and merchants might all be secret servants of the Dreaming Dark. Such Inspired have to willingly accept quori possession, but the Dreaming Dark has long experience in weaving dreams that can convince mortals to surrender their bodies.
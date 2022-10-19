---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/devil
- monster/environment/urban
aliases: ["Green Abishai"]
statblock: true
"name": "Green Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "195"
"hit_dice": "26d8 + 78"
"stats":
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "19"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Charisma": !!int "9"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Persuasion": !!int "9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md), [major image](/compendium/spells/major-image.md)\n\
    \n1/day each: [confusion](/compendium/spells/confusion.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md)\n\n3/day each:\
    \ [charm person](/compendium/spells/charm-person.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [fear](/compendium/spells/fear.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the abishai's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai makes two Fiendish Claw attacks, or it makes one Fiendish Claw\
    \ attack and uses Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) force damage. If the target is a creature, it must succeed on a DC 16 Constitution\
    \ saving throw or take 16 (3d10) poison damage and become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Fiendish Claw"
"source":
- "MPMM"
- "MTF"
name: Green Abishai
image: "[[Green Abishai.png]]"
---

# Green Abishai

```statblock
"name": "Green Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "195"
"hit_dice": "26d8 + 78"
"stats":
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "19"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Charisma": !!int "9"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Persuasion": !!int "9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md), [major image](/compendium/spells/major-image.md)\n\
    \n1/day each: [confusion](/compendium/spells/confusion.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md)\n\n3/day each:\
    \ [charm person](/compendium/spells/charm-person.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [fear](/compendium/spells/fear.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the abishai's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The abishai makes two Fiendish Claw attacks, or it makes one Fiendish Claw\
    \ attack and uses Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) force damage. If the target is a creature, it must succeed on a DC 16 Constitution\
    \ saving throw or take 16 (3d10) poison damage and become [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Fiendish Claw"
"source":
- "MPMM"
- "MTF"
"image": "[[Green Abishai.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 40, Mordenkainen's Tome of Foes p. 162*

## Description

Green abishais are adept at discovering secrets and other sensitive information, while their diplomatic skills and their magic ensure they can manipulate even the shrewdest opponents.

**Abishais.** Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

## Environment

urban
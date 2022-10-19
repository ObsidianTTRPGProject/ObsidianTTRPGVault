---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/huge
- monster/type/giant/cloud-giant
aliases: ["Blagothkus"]
statblock: true
"name": "Blagothkus"
"size": "Huge"
"type": "giant"
"subtype": "cloud giant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "26"
- !!int "13"
- !!int "20"
- !!int "16"
- !!int "15"
- !!int "15"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
"senses": "passive Perception 16"
"languages": "Common, Draconic, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus can innately cast the following spells (spell save DC 15), requiring\
    \ no material components:\n\n3/day each: [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [levitate](/compendium/spells/levitate.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus is a 5th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 15, +7 to hit with spell attacks). Blagothkus has the\
    \ following spells prepared from the wizard spell list:\n\nCantrips (at will):\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [misty step](/compendium/spells/misty-step.md), [shatter](/compendium/spells/shatter.md)\n\
    \n3rd level (2 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus attacks twice with his morningstar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) piercing damage."
  "name": "Morningstar"
"source":
- "HotDQ"
- "ToD"
name: Blagothkus
image: "[[Blagothkus.png]]"
---

# Blagothkus

```statblock
"name": "Blagothkus"
"size": "Huge"
"type": "giant"
"subtype": "cloud giant"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "26"
- !!int "13"
- !!int "20"
- !!int "16"
- !!int "15"
- !!int "15"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
"senses": "passive Perception 16"
"languages": "Common, Draconic, Giant"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus can innately cast the following spells (spell save DC 15), requiring\
    \ no material components:\n\n3/day each: [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [levitate](/compendium/spells/levitate.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus is a 5th-level spellcaster that uses Intelligence as his spellcasting\
    \ ability (spell save DC 15, +7 to hit with spell attacks). Blagothkus has the\
    \ following spells prepared from the wizard spell list:\n\nCantrips (at will):\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [misty step](/compendium/spells/misty-step.md), [shatter](/compendium/spells/shatter.md)\n\
    \n3rd level (2 3rd-level slots): [fly](/compendium/spells/fly.md), [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Blagothkus attacks twice with his morningstar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 21 (3d8\
    \ + 8) piercing damage."
  "name": "Morningstar"
"source":
- "HotDQ"
- "ToD"
"image": "[[Blagothkus.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 89, Tyranny of Dragons p. 181*
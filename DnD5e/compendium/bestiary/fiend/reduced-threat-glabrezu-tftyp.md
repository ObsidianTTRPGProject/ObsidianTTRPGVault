---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/fiend/demon
aliases: ["Reduced-Threat Glabrezu"]
statblock: true
"name": "Reduced-Threat Glabrezu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "78"
"hit_dice": "15d10 + 75"
"stats":
- !!int "20"
- !!int "15"
- !!int "21"
- !!int "19"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu's spellcasting ability is Intelligence (spell save DC 14).\
    \ The glabrezu can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n1/day each: [confusion](/compendium/spells/confusion.md),\
    \ [fly](/compendium/spells/fly.md), [power word stun](/compendium/spells/power-word-stun.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu makes four attacks: two with its pincers and two with its\
    \ fists. Alternatively, it makes two attacks with its pincers and casts one spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 13). The glabrezu has two\
    \ pincers, each of which can grapple only one target."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) bludgeoning damage."
  "name": "Fist"
"source":
- "TftYP"
name: Reduced-Threat Glabrezu
image: "[[Reduced-Threat Glabrezu.png]]"
---

# Reduced-Threat Glabrezu

```statblock
"name": "Reduced-Threat Glabrezu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "78"
"hit_dice": "15d10 + 75"
"stats":
- !!int "20"
- !!int "15"
- !!int "21"
- !!int "19"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu's spellcasting ability is Intelligence (spell save DC 14).\
    \ The glabrezu can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n1/day each: [confusion](/compendium/spells/confusion.md),\
    \ [fly](/compendium/spells/fly.md), [power word stun](/compendium/spells/power-word-stun.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The glabrezu makes four attacks: two with its pincers and two with its\
    \ fists. Alternatively, it makes two attacks with its pincers and casts one spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 13). The glabrezu has two\
    \ pincers, each of which can grapple only one target."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) bludgeoning damage."
  "name": "Fist"
"source":
- "TftYP"
"image": "[[Reduced-Threat Glabrezu.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*
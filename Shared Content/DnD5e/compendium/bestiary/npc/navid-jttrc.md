---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/large
- monster/type/elemental
- monster/environment/desert
aliases: ["Navid"]
statblock: true
"name": "Navid"
"size": "Large"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "22"
- !!int "12"
- !!int "24"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Ignan"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Navid's innate spellcasting ability is Charisma (spell save DC 15, +7 to\
    \ hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [polymorph](/compendium/spells/polymorph.md) (self only)\n\n1/day each:\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md) ([fire elemental](/compendium/bestiary/elemental/fire-elemental.md)\
    \ only), [gaseous form](/compendium/spells/gaseous-form.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n3/day each: [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [tongues](/compendium/spells/tongues.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Navid dies, its body disintegrates in a flash of fire and puff of smoke,\
    \ leaving behind only equipment Navid was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Navid makes two scimitar attacks or uses its Hurl Flame twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) fire damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6)\
    \ fire damage."
  "name": "Hurl Flame"
"source":
- "JttRC"
name: Navid
image: "[[Navid.png]]"
---

# Navid

```statblock
"name": "Navid"
"size": "Large"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "22"
- !!int "12"
- !!int "24"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Ignan"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Navid's innate spellcasting ability is Charisma (spell save DC 15, +7 to\
    \ hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [polymorph](/compendium/spells/polymorph.md) (self only)\n\n1/day each:\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md) ([fire elemental](/compendium/bestiary/elemental/fire-elemental.md)\
    \ only), [gaseous form](/compendium/spells/gaseous-form.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [plane shift](/compendium/spells/plane-shift.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n3/day each: [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [tongues](/compendium/spells/tongues.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Navid dies, its body disintegrates in a flash of fire and puff of smoke,\
    \ leaving behind only equipment Navid was wearing or carrying."
  "name": "Elemental Demise"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Navid makes two scimitar attacks or uses its Hurl Flame twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) fire damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6)\
    \ fire damage."
  "name": "Hurl Flame"
"source":
- "JttRC"
"image": "[[Navid.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 145*

## Environment

desert
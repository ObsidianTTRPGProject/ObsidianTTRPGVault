---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/huge
- monster/type/monstrosity
aliases: ["Kraken"]
statblock: true
"name": "Kraken"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Athletics": !!int "14"
  "Perception": !!int "9"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The kraken can innately cast the following spells, requiring no components:\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes two attacks: one with its claw and one with its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 30 (6d6\
    \ + 9) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken hurls a magical lightning bolt at a point it can see within\
    \ 500 feet of it. Each creature within 10 feet of that point must make a DC 17\
    \ Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "PSZ"
name: Kraken
image: "[[Kraken.png]]"
---

# Kraken

```statblock
"name": "Kraken"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Athletics": !!int "14"
  "Perception": !!int "9"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The kraken can innately cast the following spells, requiring no components:\n\
    \n3/day each: [control weather](/compendium/spells/control-weather.md), [water\
    \ breathing](/compendium/spells/water-breathing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken makes two attacks: one with its claw and one with its tentacles."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 30 (6d6\
    \ + 9) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained)."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraken hurls a magical lightning bolt at a point it can see within\
    \ 500 feet of it. Each creature within 10 feet of that point must make a DC 17\
    \ Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "PSZ"
"image": "[[Kraken.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 25*
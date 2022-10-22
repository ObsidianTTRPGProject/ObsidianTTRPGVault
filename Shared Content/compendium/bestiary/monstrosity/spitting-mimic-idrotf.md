---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/large
- monster/type/monstrosity/shapechanger
aliases: ["Spitting Mimic"]
statblock: true
"name": "Spitting Mimic"
"size": "Large"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "21"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "15"
- !!int "10"
"speed": "walk 20 ft."
"skillsaves":
  "Stealth": !!int "7"
"damage_immunities": "acid"
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic can use its action to polymorph into an object or back into its\
    \ true, amorphous form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
    \ adhered to the mimic is also [grappled](/rules/conditions.md#grappled) by it\
    \ (escape DC 16). Ability checks made to escape this grapple have disadvantage."
  "name": "Adhesive (Object Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
    \ object."
  "name": "False Appearance (Object Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic has advantage on attack rolls against any creature [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Grappler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic attacks three times: twice with its pseudopods and once with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage. If the mimic is in object form, the target is subjected\
    \ to its Adhesive trait."
  "name": "Pseudopods"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 10 (1d10\
    \ + 5) piercing damage plus 7 (2d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic spits acid at one creature it can see within 30 feet of it. The\
    \ target must make a DC 14 Dexterity saving throw, taking 32 (9d6 + 1) acid damage\
    \ on failed save, or half as much damage on a successful one."
  "name": "Spit Acid (Recharge 5-6)"
"source":
- "IDRotF"
name: Spitting Mimic
image: "[[Spitting Mimic.png]]"
---

# Spitting Mimic

```statblock
"name": "Spitting Mimic"
"size": "Large"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "21"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "15"
- !!int "10"
"speed": "walk 20 ft."
"skillsaves":
  "Stealth": !!int "7"
"damage_immunities": "acid"
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic can use its action to polymorph into an object or back into its\
    \ true, amorphous form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
    \ adhered to the mimic is also [grappled](/rules/conditions.md#grappled) by it\
    \ (escape DC 16). Ability checks made to escape this grapple have disadvantage."
  "name": "Adhesive (Object Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
    \ object."
  "name": "False Appearance (Object Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic has advantage on attack rolls against any creature [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Grappler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic attacks three times: twice with its pseudopods and once with\
    \ its bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage. If the mimic is in object form, the target is subjected\
    \ to its Adhesive trait."
  "name": "Pseudopods"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 10 (1d10\
    \ + 5) piercing damage plus 7 (2d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic spits acid at one creature it can see within 30 feet of it. The\
    \ target must make a DC 14 Dexterity saving throw, taking 32 (9d6 + 1) acid damage\
    \ on failed save, or half as much damage on a successful one."
  "name": "Spit Acid (Recharge 5-6)"
"source":
- "IDRotF"
"image": "[[Spitting Mimic.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 302*

## Description

Mimics are shape-shifting monsters described in the _Monster Manual_. The variant presented here is a particularly large and voracious specimen—the result of Netherese experiments on ordinary mimics—that spits acid.
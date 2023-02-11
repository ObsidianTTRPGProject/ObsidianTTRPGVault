---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/beast
aliases: ["Giant Lightning Eel"]
statblock: true
"name": "Giant Lightning Eel"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "11"
- !!int "17"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "3"
"speed": "walk 5 ft., swim 30 ft."
"damage_resistances": "lightning"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage plus 4 (1d8) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature the eel touches within 5 feet of it outside water, or each\
    \ creature within 15 feet of it in a body of water, must make a DC 12 Constitution\
    \ saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the\
    \ target takes any of this damage, the target is [stunned](/rules/conditions.md#stunned)\
    \ until the end of the eel's next turn. On a successful save, a target takes half\
    \ as much damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Lightning Jolt (Recharge 5-6)"
"source":
- "TftYP"
name: Giant Lightning Eel
image: "[[Giant Lightning Eel.png]]"
---

# Giant Lightning Eel

```statblock
"name": "Giant Lightning Eel"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "11"
- !!int "17"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "3"
"speed": "walk 5 ft., swim 30 ft."
"damage_resistances": "lightning"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eel makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage plus 4 (1d8) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature the eel touches within 5 feet of it outside water, or each\
    \ creature within 15 feet of it in a body of water, must make a DC 12 Constitution\
    \ saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the\
    \ target takes any of this damage, the target is [stunned](/rules/conditions.md#stunned)\
    \ until the end of the eel's next turn. On a successful save, a target takes half\
    \ as much damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Lightning Jolt (Recharge 5-6)"
"source":
- "TftYP"
"image": "[[Giant Lightning Eel.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 236*
---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/beast
aliases: ["Giant Crayfish"]
statblock: true
"name": "Giant Crayfish"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant crayfish can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant crayfish makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). The crayfish has two claws, each of which can grapple only one\
    \ target."
  "name": "Claw"
"source":
- "TftYP"
name: Giant Crayfish
image: "[[Giant Crayfish.png]]"
---

# Giant Crayfish

```statblock
"name": "Giant Crayfish"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant crayfish can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant crayfish makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12). The crayfish has two claws, each of which can grapple only one\
    \ target."
  "name": "Claw"
"source":
- "TftYP"
"image": "[[Giant Crayfish.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 235*
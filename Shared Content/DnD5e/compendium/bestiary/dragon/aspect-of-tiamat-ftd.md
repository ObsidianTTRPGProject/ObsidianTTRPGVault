---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/chromatic
aliases: ["Aspect of Tiamat"]
statblock: true
"name": "Aspect of Tiamat"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "23"
"hp": !!int "574"
"hit_dice": "28d20 + 280"
"stats":
- !!int "30"
- !!int "14"
- !!int "30"
- !!int "21"
- !!int "20"
- !!int "26"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "17"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Constitution": !!int "19"
"skillsaves":
  "Intimidation": !!int "26"
  "Perception": !!int "23"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "blinded, charmed, deafened, frightened, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 33"
"languages": "Common, Draconic, Infernal"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect would be reduced to 0 hit points, her current hit point total\
    \ instead resets to 500 hit points, she recharges her Chromatic Flames, and she\
    \ regains any expended uses of Legendary Resistance. Additionally, the aspect\
    \ can now use the options in the \"Mythic Actions\" section for 1 hour. Award\
    \ a party an additional 155,000 XP (310,000 XP total) for defeating the aspect\
    \ of Tiamat after her Chromatic Wrath activates."
  "name": "Chromatic Wrath (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack, one Claw attack, and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 23 (2d12\
    \ + 10) piercing damage plus 19 (3d12) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The aspect can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 23 (2d12\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 27 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect exhales multicolored flames in a 300-foot cone. Each creature\
    \ in that area must make a DC 27 Dexterity saving throw. On a failed save, the\
    \ creature takes 71 (11d12) damage of a type of the aspect's choosing: acid, cold,\
    \ fire, lightning, or poison. On a successful save, the creature takes half as\
    \ much damage."
  "name": "Chromatic Flames (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack. If the attack hits a creature, the target\
    \ must succeed on a DC 27 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the aspect until the end of its next turn."
  "name": "Furious Bite (Costs 2 Actions)"
"source":
- "FTD"
name: Aspect of Tiamat
image: "[[Aspect of Tiamat.png]]"
---

# Aspect of Tiamat

```statblock
"name": "Aspect of Tiamat"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "23"
"hp": !!int "574"
"hit_dice": "28d20 + 280"
"stats":
- !!int "30"
- !!int "14"
- !!int "30"
- !!int "21"
- !!int "20"
- !!int "26"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "17"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Constitution": !!int "19"
"skillsaves":
  "Intimidation": !!int "26"
  "Perception": !!int "23"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "blinded, charmed, deafened, frightened, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 33"
"languages": "Common, Draconic, Infernal"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect would be reduced to 0 hit points, her current hit point total\
    \ instead resets to 500 hit points, she recharges her Chromatic Flames, and she\
    \ regains any expended uses of Legendary Resistance. Additionally, the aspect\
    \ can now use the options in the \"Mythic Actions\" section for 1 hour. Award\
    \ a party an additional 155,000 XP (310,000 XP total) for defeating the aspect\
    \ of Tiamat after her Chromatic Wrath activates."
  "name": "Chromatic Wrath (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack, one Claw attack, and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 23 (2d12\
    \ + 10) piercing damage plus 19 (3d12) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The aspect can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 23 (2d12\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 27 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect exhales multicolored flames in a 300-foot cone. Each creature\
    \ in that area must make a DC 27 Dexterity saving throw. On a failed save, the\
    \ creature takes 71 (11d12) damage of a type of the aspect's choosing: acid, cold,\
    \ fire, lightning, or poison. On a successful save, the creature takes half as\
    \ much damage."
  "name": "Chromatic Flames (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack. If the attack hits a creature, the target\
    \ must succeed on a DC 27 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the aspect until the end of its next turn."
  "name": "Furious Bite (Costs 2 Actions)"
"source":
- "FTD"
"image": "[[Aspect of Tiamat.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 166*

## Description

The five-headed progenitor of chromatic dragons, Tiamat embodies the vices of evil dragons. Since the destruction of the First World, she has dwelled in the Nine Hells—some say by choice. But others claim that she is imprisoned there to punish her for the evils she perpetrated when the gods sought to colonize the First World with their followers.

Mortals who hunger for power and wealth often swear fealty to Tiamat in pursuit of those goals. Many of her followers have attempted to break her out of Avernus—and failed—but even while she remains in the Nine Hells, Tiamat can send her aspect to manifest in the Material Plane. A follower with enough power and anger, and with a hoard worthy of ancient dragons, can sacrifice it all to unleash the wrath of the dragon queen on a world.

The aspect of Tiamat has the body of a titanic dragon with five heads, each the shape and hue of a different chromatic dragon. Each head might speak separately and have different mannerisms, but they are all Tiamat. Once unleashed, the aspect of Tiamat rampages across the world, acquiring any treasure she can find and destroying any creature that dares to cross her path.
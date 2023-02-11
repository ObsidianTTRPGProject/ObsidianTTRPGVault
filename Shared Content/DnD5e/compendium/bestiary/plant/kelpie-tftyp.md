---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/plant
aliases: ["Kelpie"]
statblock: true
"name": "Kelpie"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "7"
- !!int "12"
- !!int "10"
"speed": "walk 10 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "fire, bludgeoning, piercing"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": "Common, Sylvan"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie can use its action to reshape its body into the form of a humanoid\
    \ or beast that is Small, Medium, or Large. Its statistics are otherwise unchanged.\
    \ The disguise is convincing, unless the kelpie is in bright light or the viewer\
    \ is within 30 feet of it, in which case the seams between the seaweed strands\
    \ are visible. The kelpie returns to its true form if takes a bonus action to\
    \ do so or if it dies."
  "name": "Seaweed Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the kelpie remains motionless in its true form, it is indistinguishable\
    \ from normal seaweed."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12)."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie chooses one humanoid it can see within 150 feet of it. If the\
    \ target can see the kelpie, the target must succeed on a DC 11 Wisdom saving\
    \ throw or be magically [charmed](/rules/conditions.md#charmed) while the kelpie\
    \ maintains concentration, up to 10 minutes (as if concentrating on a spell).\
    \ The [charmed](/rules/conditions.md#charmed) target is [incapacitated](/rules/conditions.md#incapacitated),\
    \ and instead of holding its breath underwater, it tries to breathe normally and\
    \ immediately runs out of breath, unless it can breathe water. If the [charmed](/rules/conditions.md#charmed)\
    \ target is more than 5 feet away from the kelpie, the target must move on its\
    \ turn toward the kelpie by the most direct route, trying to get within 5 feet.\
    \ It doesn't avoid opportunity attacks.\n\nBefore moving into damaging terrain,\
    \ such as lava or a pit, and whenever it takes damage from a source other than\
    \ the kelpie or drowning, the target can repeat the saving throw. A [charmed](/rules/conditions.md#charmed)\
    \ target can also repeat the saving throw at the end of each of its turns. If\
    \ the saving throw is successful, the effect ends on it.\n\nA target that successfully\
    \ saves is immune to this kelpie's hypnosis for the next 24 hours."
  "name": "Drowning Hypnosis"
"source":
- "TftYP"
name: Kelpie
image: "[[Kelpie.png]]"
---

# Kelpie

```statblock
"name": "Kelpie"
"size": "Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "7"
- !!int "12"
- !!int "10"
"speed": "walk 10 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "fire, bludgeoning, piercing"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": "Common, Sylvan"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie can use its action to reshape its body into the form of a humanoid\
    \ or beast that is Small, Medium, or Large. Its statistics are otherwise unchanged.\
    \ The disguise is convincing, unless the kelpie is in bright light or the viewer\
    \ is within 30 feet of it, in which case the seams between the seaweed strands\
    \ are visible. The kelpie returns to its true form if takes a bonus action to\
    \ do so or if it dies."
  "name": "Seaweed Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the kelpie remains motionless in its true form, it is indistinguishable\
    \ from normal seaweed."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage. If the target is a Medium or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 12)."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kelpie chooses one humanoid it can see within 150 feet of it. If the\
    \ target can see the kelpie, the target must succeed on a DC 11 Wisdom saving\
    \ throw or be magically [charmed](/rules/conditions.md#charmed) while the kelpie\
    \ maintains concentration, up to 10 minutes (as if concentrating on a spell).\
    \ The [charmed](/rules/conditions.md#charmed) target is [incapacitated](/rules/conditions.md#incapacitated),\
    \ and instead of holding its breath underwater, it tries to breathe normally and\
    \ immediately runs out of breath, unless it can breathe water. If the [charmed](/rules/conditions.md#charmed)\
    \ target is more than 5 feet away from the kelpie, the target must move on its\
    \ turn toward the kelpie by the most direct route, trying to get within 5 feet.\
    \ It doesn't avoid opportunity attacks.\n\nBefore moving into damaging terrain,\
    \ such as lava or a pit, and whenever it takes damage from a source other than\
    \ the kelpie or drowning, the target can repeat the saving throw. A [charmed](/rules/conditions.md#charmed)\
    \ target can also repeat the saving throw at the end of each of its turns. If\
    \ the saving throw is successful, the effect ends on it.\n\nA target that successfully\
    \ saves is immune to this kelpie's hypnosis for the next 24 hours."
  "name": "Drowning Hypnosis"
"source":
- "TftYP"
"image": "[[Kelpie.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 238*
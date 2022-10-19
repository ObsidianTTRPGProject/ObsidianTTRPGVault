---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/monstrosity
- monster/environment/mountain
- monster/environment/hill
aliases: ["Reduced-Threat Peryton"]
statblock: true
"name": "Reduced-Threat Peryton"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "6d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "9"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "understands Common and Elvish but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the peryton is flying and dives at least 30 feet straight toward a target\
    \ and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8)\
    \ damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes one gore attack and one talon attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage."
  "name": "Talons"
"source":
- "TftYP"
name: Reduced-Threat Peryton
image: "[[Reduced-Threat Peryton.png]]"
---

# Reduced-Threat Peryton

```statblock
"name": "Reduced-Threat Peryton"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "6d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "9"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "understands Common and Elvish but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the peryton is flying and dives at least 30 feet straight toward a target\
    \ and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8)\
    \ damage to the target."
  "name": "Dive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton doesn't provoke an opportunity attack when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The peryton makes one gore attack and one talon attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage."
  "name": "Talons"
"source":
- "TftYP"
"image": "[[Reduced-Threat Peryton.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*

## Environment

mountain, hill
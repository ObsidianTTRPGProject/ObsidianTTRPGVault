---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/giant
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/arctic
aliases: ["Dragonpriest"]
statblock: true
"name": "Dragonpriest"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "30"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Elvish, Draconic"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonpriest has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonpriest regains 5 hit points at the start of its turn. If the\
    \ dragonpriest takes acid or fire damage, this trait doesn't function at the start\
    \ of the dragonpriest's next turn. The dragonpriest dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "TftYP"
name: Dragonpriest
image: "[[Dragonpriest.png]]"
---

# Dragonpriest

```statblock
"name": "Dragonpriest"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "30"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Elvish, Draconic"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonpriest has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragonpriest regains 5 hit points at the start of its turn. If the\
    \ dragonpriest takes acid or fire damage, this trait doesn't function at the start\
    \ of the dragonpriest's next turn. The dragonpriest dies only if it starts its\
    \ turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "TftYP"
"image": "[[Dragonpriest.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 16*

## Environment

underdark, mountain, forest, swamp, hill, arctic
---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/huge
- monster/type/aberration
aliases: ["Alyxian the Tormented"]
statblock: true
"name": "Alyxian the Tormented"
"size": "Huge"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"stats":
- !!int "21"
- !!int "18"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 40 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "necrotic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, stunned"
"senses": "blindsight 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Alyxian drops to 0 hit points, his body dies and cracks open like\
    \ a cocoon. Alyxian instantly emerges from the cocoon in his second form, Alyxian\
    \ the Callous, in the space where his previous form died. His initiative count\
    \ doesn't change."
  "name": "Apotheonic Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Grasping Hand attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) force damage, and if the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15). Alyxian has six hands,\
    \ each of which can grapple one target."
  "name": "Grasping Hand"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets up to two creatures he can see within 120 feet of himself.\
    \ Each target must make a DC 17 Constitution saving throw, taking 28 (8d6) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Void Eyes (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Grasping Hand attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ancient weapons embedded in Alyxian's hide detach from Alyxian and fly\
    \ about in a 10-foot-radius sphere centered on a point Alyxian can see within\
    \ 60 feet of himself. A creature takes 18 (4d8) slashing damage when it enters\
    \ that area for the first time on a turn or starts its turn there. The effect\
    \ lasts until the end of Alyxian's next turn, when the weapons return to Alyxian\
    \ and embed themselves in his hide once again (causing him no harm)."
  "name": "Weapons of Yore (Costs 2 Actions)"
"source":
- "CRCotN"
name: Alyxian the Tormented
image: "[[Alyxian the Tormented.png]]"
---

# Alyxian the Tormented

```statblock
"name": "Alyxian the Tormented"
"size": "Huge"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"stats":
- !!int "21"
- !!int "18"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 40 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "necrotic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, stunned"
"senses": "blindsight 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Alyxian drops to 0 hit points, his body dies and cracks open like\
    \ a cocoon. Alyxian instantly emerges from the cocoon in his second form, Alyxian\
    \ the Callous, in the space where his previous form died. His initiative count\
    \ doesn't change."
  "name": "Apotheonic Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian can't be surprised and can't be changed into another form against\
    \ his will."
  "name": "Divinely Blessed"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Alyxian fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes two Grasping Hand attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) force damage, and if the target is a Medium or smaller creature, it is\
    \ [grappled](/rules/conditions.md#grappled) (escape DC 15). Alyxian has six hands,\
    \ each of which can grapple one target."
  "name": "Grasping Hand"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets up to two creatures he can see within 120 feet of himself.\
    \ Each target must make a DC 17 Constitution saving throw, taking 28 (8d6) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Void Eyes (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Grasping Hand attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ancient weapons embedded in Alyxian's hide detach from Alyxian and fly\
    \ about in a 10-foot-radius sphere centered on a point Alyxian can see within\
    \ 60 feet of himself. A creature takes 18 (4d8) slashing damage when it enters\
    \ that area for the first time on a turn or starts its turn there. The effect\
    \ lasts until the end of Alyxian's next turn, when the weapons return to Alyxian\
    \ and embed themselves in his hide once again (causing him no harm)."
  "name": "Weapons of Yore (Costs 2 Actions)"
"source":
- "CRCotN"
"image": "[[Alyxian the Tormented.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 178*
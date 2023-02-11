---
cssclass: json5e-monster
tags:
- compendium/src/crcotn
- monster/size/large
- monster/type/celestial
aliases: ["Alyxian the Callous"]
statblock: true
"name": "Alyxian the Callous"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "23"
- !!int "18"
- !!int "21"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "radiant"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ restrained, stunned"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Alyxian the Callous drops to 0 hit points, his body dies and sheds\
    \ its wings, and he rises to his feet in his third form, Alyxian the Dispossessed.\
    \ His initiative count doesn't change."
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
  "desc": "Alyxian makes two Radiant Spear attacks. He can replace one of these attacks\
    \ with Blinding Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 15 (2d8 + 6) radiant damage."
  "name": "Radiant Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian teleports, along with any equipment he is wearing or carrying,\
    \ to an unoccupied space he can see within 120 feet of himself. Each creature\
    \ within 5 feet of his new location must succeed on a DC 17 Constitution saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the end of its next\
    \ turn."
  "name": "Blinding Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian releases divine energy in a 60-foot cone. Each creature of his\
    \ choice in that area must make a DC 17 Constitution saving throw. On a failed\
    \ saving throw, the creature takes 31 (7d8) radiant damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, a creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Heavenly Destruction (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Radiant Spear attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets one creature he can see within 120 feet of himself. The\
    \ target must succeed on a DC 17 Strength saving throw or be [restrained](/rules/conditions.md#restrained)\
    \ by magical chains for 1 minute. While [restrained](/rules/conditions.md#restrained)\
    \ in this way, the target can't leave the space by any means. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Celestial Chains"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets one creature he can see within 30 feet of himself. Light\
    \ flares around the target, dealing 17 (5d6) radiant damage to it and creatures\
    \ within 10 feet of it."
  "name": "Flare (Costs 2 Actions)"
"source":
- "CRCotN"
name: Alyxian the Callous
image: "[[Alyxian the Callous.png]]"
---

# Alyxian the Callous

```statblock
"name": "Alyxian the Callous"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "23"
- !!int "18"
- !!int "21"
- !!int "15"
- !!int "16"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Wisdom": !!int "7"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "7"
  "Perception": !!int "7"
"damage_immunities": "radiant"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ restrained, stunned"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Celestial, Common, Elvish, telepathy 120 ft."
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Alyxian the Callous drops to 0 hit points, his body dies and sheds\
    \ its wings, and he rises to his feet in his third form, Alyxian the Dispossessed.\
    \ His initiative count doesn't change."
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
  "desc": "Alyxian makes two Radiant Spear attacks. He can replace one of these attacks\
    \ with Blinding Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 15 (2d8 + 6) radiant damage."
  "name": "Radiant Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian teleports, along with any equipment he is wearing or carrying,\
    \ to an unoccupied space he can see within 120 feet of himself. Each creature\
    \ within 5 feet of his new location must succeed on a DC 17 Constitution saving\
    \ throw or be [blinded](/rules/conditions.md#blinded) until the end of its next\
    \ turn."
  "name": "Blinding Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian releases divine energy in a 60-foot cone. Each creature of his\
    \ choice in that area must make a DC 17 Constitution saving throw. On a failed\
    \ saving throw, the creature takes 31 (7d8) radiant damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, a creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Heavenly Destruction (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian makes one Radiant Spear attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets one creature he can see within 120 feet of himself. The\
    \ target must succeed on a DC 17 Strength saving throw or be [restrained](/rules/conditions.md#restrained)\
    \ by magical chains for 1 minute. While [restrained](/rules/conditions.md#restrained)\
    \ in this way, the target can't leave the space by any means. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Celestial Chains"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Alyxian targets one creature he can see within 30 feet of himself. Light\
    \ flares around the target, dealing 17 (5d6) radiant damage to it and creatures\
    \ within 10 feet of it."
  "name": "Flare (Costs 2 Actions)"
"source":
- "CRCotN"
"image": "[[Alyxian the Callous.png]]"
```
^statblock

*Source: Critical Role: Call of the Netherdeep p. 179*
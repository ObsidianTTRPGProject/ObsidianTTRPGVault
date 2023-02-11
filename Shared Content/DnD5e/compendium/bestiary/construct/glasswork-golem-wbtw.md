---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/medium
- monster/type/construct
aliases: ["Glasswork Golem"]
statblock: true
"name": "Glasswork Golem"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the golem is embedded in a window and motionless at the start of combat,\
    \ it has advantage on its initiative roll. Moreover, if a creature hasn't observed\
    \ the golem move or act, that creature must succeed on a DC 18 Intelligence (Investigation)\
    \ check to discern that the golem is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem regains 10 hit points at the start of its turn. If the golem\
    \ takes bludgeoning or thunder damage, this trait doesn't function at the start\
    \ of the golem's next turn. The golem is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two Glass Sword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Glass Sword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, colored light springs from the golem in a 15-foot cone. Each creature\
    \ in the cone must succeed on a DC 10 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Dazzling Light (Recharge 5-6)"
"source":
- "WBtW"
name: Glasswork Golem
image: "[[Glasswork Golem.png]]"
---

# Glasswork Golem

```statblock
"name": "Glasswork Golem"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the golem is embedded in a window and motionless at the start of combat,\
    \ it has advantage on its initiative roll. Moreover, if a creature hasn't observed\
    \ the golem move or act, that creature must succeed on a DC 18 Intelligence (Investigation)\
    \ check to discern that the golem is animate."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem regains 10 hit points at the start of its turn. If the golem\
    \ takes bludgeoning or thunder damage, this trait doesn't function at the start\
    \ of the golem's next turn. The golem is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two Glass Sword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage."
  "name": "Glass Sword"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, colored light springs from the golem in a 15-foot cone. Each creature\
    \ in the cone must succeed on a DC 10 Constitution saving throw or be [blinded](/rules/conditions.md#blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Dazzling Light (Recharge 5-6)"
"source":
- "WBtW"
"image": "[[Glasswork Golem.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 193*
---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/undead
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/arctic
aliases: ["Knight of the Order"]
statblock: true
"name": "Knight of the Order"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ knight's next turn. The knight's body is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a [wish](/compendium/spells/wish.md)\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight is immune to effects that turn undead."
  "name": "Turn Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight knows the distance to and direction of any creature against\
    \ which it seeks revenge, even if the creature and the knight are on different\
    \ planes of existence. If the creature being tracked by the knight dies, the knight\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight makes two longsword attacks or two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage. If the target is a creature against which the knight has\
    \ sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. If the target is a creature against which the knight\
    \ has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage.\
    \ Instead of dealing damage, the knight can grapple the target (escape DC 14)\
    \ provided the target is Large or smaller."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is [paralyzed](/rules/conditions.md#paralyzed) until\
    \ the knight deals damage to it, or until the end of the knight's next turn. When\
    \ the paralysis ends, the target is [frightened](/rules/conditions.md#frightened)\
    \ of the knight for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the knight, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
name: Knight of the Order
image: "[[Knight of the Order.png]]"
---

# Knight of the Order

```statblock
"name": "Knight of the Order"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ knight's next turn. The knight's body is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a [wish](/compendium/spells/wish.md)\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight is immune to effects that turn undead."
  "name": "Turn Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight knows the distance to and direction of any creature against\
    \ which it seeks revenge, even if the creature and the knight are on different\
    \ planes of existence. If the creature being tracked by the knight dies, the knight\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight makes two longsword attacks or two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage. If the target is a creature against which the knight has\
    \ sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. If the target is a creature against which the knight\
    \ has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage.\
    \ Instead of dealing damage, the knight can grapple the target (escape DC 14)\
    \ provided the target is Large or smaller."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The knight targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is [paralyzed](/rules/conditions.md#paralyzed) until\
    \ the knight deals damage to it, or until the end of the knight's next turn. When\
    \ the paralysis ends, the target is [frightened](/rules/conditions.md#frightened)\
    \ of the knight for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the knight, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
"image": "[[Knight of the Order.png]]"
```
^statblock

*Source: Curse of Strahd p. 139*

## Environment

forest, swamp, hill, urban, desert, arctic
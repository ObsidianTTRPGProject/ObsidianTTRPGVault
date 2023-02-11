---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
- monster/environment/desert
aliases: ["Lesser Mummy Lord"]
statblock: true
"name": "Lesser Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_resistances": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy wears a [ring of fire resistance](/compendium/items/ring-of-fire-resistance.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [frightened](/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed) for the\
    \ same duration. A target that succeeds on the saving throw is immune to the Dreadful\
    \ Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"source":
- "TftYP"
name: Lesser Mummy Lord
image: "[[Lesser Mummy Lord.png]]"
---

# Lesser Mummy Lord

```statblock
"name": "Lesser Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_resistances": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy wears a [ring of fire resistance](/compendium/items/ring-of-fire-resistance.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [frightened](/rules/conditions.md#frightened)\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [paralyzed](/rules/conditions.md#paralyzed) for the\
    \ same duration. A target that succeeds on the saving throw is immune to the Dreadful\
    \ Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"source":
- "TftYP"
"image": "[[Lesser Mummy Lord.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 224*

## Environment

desert
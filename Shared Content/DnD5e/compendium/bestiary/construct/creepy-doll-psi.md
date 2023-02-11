---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/tiny
- monster/type/construct
aliases: ["Creepy Doll"]
statblock: true
"name": "Creepy Doll"
"size": "Tiny"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "speaks and understands the languages known by its creator"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the creepy doll remains motionless, it is indistinguishable from\
    \ an ordinary, inanimate doll."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll makes one attack with its scissors and uses Psychic Assault."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Scissors"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll targets one creature it can see within 10 feet of it that\
    \ has a brain. The target must succeed on a DC 12 Intelligence saving throw or\
    \ take 11 (2d10) psychic damage. Also on a failure, roll 3d6. If the total equals\
    \ or exceeds the target's Intelligence score, that score is reduced to 0. The\
    \ target is [stunned](/rules/conditions.md#stunned) until it regains at least\
    \ one point of Intelligence, as from the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or similar magic."
  "name": "Psychic Assault"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll initiates an Intelligence contest with an [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid within 5 feet of it. If it wins the contest, the creepy doll's spirit\
    \ inhabits the target's body while the target's spirit is placed into the creepy\
    \ doll's body. The creepy doll controls the target's body completely. It retains\
    \ its alignment, Intelligence, Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The target retains its alignment, Intelligence,\
    \ Wisdom, and Charisma while inhabiting the creepy doll's body.\n\nThe body exchange\
    \ lasts until the doll's spirit is forced out by magic. (The [dispel evil and\
    \ good](/compendium/spells/dispel-evil-and-good.md) spell will accomplish this,\
    \ though the doll is not one of the creature types whose possession that spell\
    \ normally ends.) The body and the doll must be within 5 feet of each other for\
    \ such an effect to work. The target is immune to this doll's Body Exchange for\
    \ 24 hours after winning the Intelligence contest or after the exchange ends."
  "name": "Body Exchange"
"source":
- "PSI"
name: Creepy Doll
image: "[[Creepy Doll.png]]"
---

# Creepy Doll

```statblock
"name": "Creepy Doll"
"size": "Tiny"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "10"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "speaks and understands the languages known by its creator"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the creepy doll remains motionless, it is indistinguishable from\
    \ an ordinary, inanimate doll."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll makes one attack with its scissors and uses Psychic Assault."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage."
  "name": "Scissors"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll targets one creature it can see within 10 feet of it that\
    \ has a brain. The target must succeed on a DC 12 Intelligence saving throw or\
    \ take 11 (2d10) psychic damage. Also on a failure, roll 3d6. If the total equals\
    \ or exceeds the target's Intelligence score, that score is reduced to 0. The\
    \ target is [stunned](/rules/conditions.md#stunned) until it regains at least\
    \ one point of Intelligence, as from the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or similar magic."
  "name": "Psychic Assault"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The creepy doll initiates an Intelligence contest with an [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid within 5 feet of it. If it wins the contest, the creepy doll's spirit\
    \ inhabits the target's body while the target's spirit is placed into the creepy\
    \ doll's body. The creepy doll controls the target's body completely. It retains\
    \ its alignment, Intelligence, Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The target retains its alignment, Intelligence,\
    \ Wisdom, and Charisma while inhabiting the creepy doll's body.\n\nThe body exchange\
    \ lasts until the doll's spirit is forced out by magic. (The [dispel evil and\
    \ good](/compendium/spells/dispel-evil-and-good.md) spell will accomplish this,\
    \ though the doll is not one of the creature types whose possession that spell\
    \ normally ends.) The body and the doll must be within 5 feet of each other for\
    \ such an effect to work. The target is immune to this doll's Body Exchange for\
    \ 24 hours after winning the Intelligence contest or after the exchange ends."
  "name": "Body Exchange"
"source":
- "PSI"
"image": "[[Creepy Doll.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 25*
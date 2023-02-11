---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/large
- monster/type/giant
aliases: ["The Demogorgon"]
statblock: true
"name": "The Demogorgon"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "21"
- !!int "8"
- !!int "17"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Giant, Orc"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin has advantage on Wisdom (Perception) checks and on saving throws\
    \ against being [blinded](/rules/conditions.md#blinded), [charmed](/rules/conditions.md#charmed),\
    \ [deafened](/rules/conditions.md#deafened), [frightened](/rules/conditions.md#frightened),\
    \ [stunned](/rules/conditions.md#stunned), and knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When one of the ettin's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin's right head exhales fire in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Dexterity saving throw, taking 45 (10d8) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin's left head exhales an icy blast in a 30-foot cone. Each creature\
    \ in that area must make a DC 14 Constitution saving throw, taking 45 (10d8) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin turns its magical gaze toward one creature that it can see within\
    \ 120 feet of it. That target must make a DC 14 Wisdom saving throw. Unless the\
    \ target is [incapacitated](/rules/conditions.md#incapacitated), it can avert\
    \ its eyes to avoid the gaze and to automatically succeed on the save. If the\
    \ target does so, it can't see the ettin until the start of the ettin's next turn.\
    \ If the target looks at the ettin in the meantime, it must immediately make the\
    \ save.\n\nIf the target fails the save, it suffers one of the following effects\
    \ of the ettin's choice or at random:"
  "name": "Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [stunned](/rules/conditions.md#stunned) until the start of\
    \ the ettin's next turn or until the ettin is no longer within line of sight."
  "name": "Beguiling Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [charmed](/rules/conditions.md#charmed) by the ettin until\
    \ the start of the ettin's next turn. The ettin chooses how the [charmed](/rules/conditions.md#charmed)\
    \ target uses its actions, reactions, and movement."
  "name": "Hypnotic Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target suffers the effect of the [confusion](/compendium/spells/confusion.md)\
    \ spell without making a saving throw. The effect lasts until the start of the\
    \ ettin's next turn. The ettin doesn't need to concentrate on the spell."
  "name": "Insanity Gaze"
"source":
- "IMR"
name: The Demogorgon
image: "[[The Demogorgon.png]]"
---

# The Demogorgon

```statblock
"name": "The Demogorgon"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "21"
- !!int "8"
- !!int "17"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Giant, Orc"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin has advantage on Wisdom (Perception) checks and on saving throws\
    \ against being [blinded](/rules/conditions.md#blinded), [charmed](/rules/conditions.md#charmed),\
    \ [deafened](/rules/conditions.md#deafened), [frightened](/rules/conditions.md#frightened),\
    \ [stunned](/rules/conditions.md#stunned), and knocked [unconscious](/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When one of the ettin's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin's right head exhales fire in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Dexterity saving throw, taking 45 (10d8) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin's left head exhales an icy blast in a 30-foot cone. Each creature\
    \ in that area must make a DC 14 Constitution saving throw, taking 45 (10d8) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Cold Breath (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ettin turns its magical gaze toward one creature that it can see within\
    \ 120 feet of it. That target must make a DC 14 Wisdom saving throw. Unless the\
    \ target is [incapacitated](/rules/conditions.md#incapacitated), it can avert\
    \ its eyes to avoid the gaze and to automatically succeed on the save. If the\
    \ target does so, it can't see the ettin until the start of the ettin's next turn.\
    \ If the target looks at the ettin in the meantime, it must immediately make the\
    \ save.\n\nIf the target fails the save, it suffers one of the following effects\
    \ of the ettin's choice or at random:"
  "name": "Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [stunned](/rules/conditions.md#stunned) until the start of\
    \ the ettin's next turn or until the ettin is no longer within line of sight."
  "name": "Beguiling Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target is [charmed](/rules/conditions.md#charmed) by the ettin until\
    \ the start of the ettin's next turn. The ettin chooses how the [charmed](/rules/conditions.md#charmed)\
    \ target uses its actions, reactions, and movement."
  "name": "Hypnotic Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The target suffers the effect of the [confusion](/compendium/spells/confusion.md)\
    \ spell without making a saving throw. The effect lasts until the start of the\
    \ ettin's next turn. The ettin doesn't need to concentrate on the spell."
  "name": "Insanity Gaze"
"source":
- "IMR"
"image": "[[The Demogorgon.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 53*
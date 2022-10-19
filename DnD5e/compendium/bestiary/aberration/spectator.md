---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/aberration
- monster/environment/underdark
aliases: ["Spectator"]
statblock: true
"name": "Spectator"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "8"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"skillsaves":
  "Perception": !!int "6"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spectator shoots up to two of the following magical eye rays at one\
    \ or two creatures it can see within 90 feet of it. It can use each ray only once\
    \ on a turn.\n\n- 1. Confusion Ray. The target must succeed on a DC 13 Wisdom\
    \ saving throw, or it can't take reactions until the end of its next turn. On\
    \ its turn, the target can't move, and it uses its action to make a melee or ranged\
    \ attack against a randomly determined creature within range. If the target can't\
    \ attack, it does nothing on its turn.\n- 2. Paralyzing Ray. The target must\
    \ succeed on a DC 13 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The target\
    \ must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the spectator is visible to the target, ending the\
    \ effect on itself on a success.\n- 4. Wounding Ray. The target must make\
    \ a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Eye Rays"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spectator magically creates enough food and water to sustain itself\
    \ for 24 hours."
  "name": "Create Food and Water"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the spectator makes a successful saving throw against a spell, or a\
    \ spell attack misses it, the spectator can choose another creature (including\
    \ the spellcaster) it can see within 30 feet of it. The spell targets the chosen\
    \ creature instead of the spectator. If the spell forced a saving throw, the chosen\
    \ creature makes its own save. If the spell was an attack, the attack roll is\
    \ rerolled against the chosen creature."
  "name": "Spell Reflection"
"source":
- "MM"
- "LMoP"
- "WDH"
- "WDMM"
- "RMBRE"
- "IDRotF"
- "SjA"
name: Spectator
image: "[[Spectator.png]]"
---

# Spectator

```statblock
"name": "Spectator"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "8"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"skillsaves":
  "Perception": !!int "6"
"condition_immunities": "prone"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spectator shoots up to two of the following magical eye rays at one\
    \ or two creatures it can see within 90 feet of it. It can use each ray only once\
    \ on a turn.\n\n- 1. Confusion Ray. The target must succeed on a DC 13 Wisdom\
    \ saving throw, or it can't take reactions until the end of its next turn. On\
    \ its turn, the target can't move, and it uses its action to make a melee or ranged\
    \ attack against a randomly determined creature within range. If the target can't\
    \ attack, it does nothing on its turn.\n- 2. Paralyzing Ray. The target must\
    \ succeed on a DC 13 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.\n- 3. Fear Ray. The target\
    \ must succeed on a DC 13 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, with disadvantage if the spectator is visible to the target, ending the\
    \ effect on itself on a success.\n- 4. Wounding Ray. The target must make\
    \ a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Eye Rays"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spectator magically creates enough food and water to sustain itself\
    \ for 24 hours."
  "name": "Create Food and Water"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the spectator makes a successful saving throw against a spell, or a\
    \ spell attack misses it, the spectator can choose another creature (including\
    \ the spellcaster) it can see within 30 feet of it. The spell targets the chosen\
    \ creature instead of the spectator. If the spell forced a saving throw, the chosen\
    \ creature makes its own save. If the spell was an attack, the attack roll is\
    \ rerolled against the chosen creature."
  "name": "Spell Reflection"
"source":
- "MM"
- "LMoP"
- "WDH"
- "WDMM"
- "RMBRE"
- "IDRotF"
- "SjA"
"image": "[[Spectator.png]]"
```
^statblock

*Source: Monster Manual p. 30, Lost Mine of Phandelver, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, The Lost Dungeon of Rickedness: Big Rick Energy, Icewind Dale: Rime of the Frostmaiden, Spelljammer Academy*

## Description

A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the ritual's magic. Appropriately, a spectator has four eyestalks, two on each side of the wide eye at the center of its four-foot diameter body.

**Magical Guardians.** A summoned spectator guards a location or a treasure of its summoner's choice for 101 years, allowing no creature but its summoner to enter the area or access the item, unless the summoner instructed otherwise. If the item is stolen or destroyed before the years have all passed, a summoned spectator vanishes. It otherwise never abandons its post.

**Glimmers of Madness.** Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.

Like any beholder, a spectator views itself as the epitome of its kind, and it has an intense hatred of other spectators. If two spectators encounter one another, they almost always fight to the death.

**Freed from Service.** When a spectator has fulfilled its service, it is free to do as it pleases. Many take up residence in the places they previously guarded, especially if their summoners have died. With the spectator's loss of purpose, the flickers of madness it displayed during its servitude flourish.

## Environment

underdark
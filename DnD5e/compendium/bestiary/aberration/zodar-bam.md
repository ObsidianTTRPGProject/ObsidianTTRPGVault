---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/aberration
aliases: ["Zodar"]
statblock: true
"name": "Zodar"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "200"
"hit_dice": "16d8 + 128"
"stats":
- !!int "30"
- !!int "10"
- !!int "26"
- !!int "12"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "13"
"damage_immunities": "acid, fire, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, petrified,\
  \ poisoned"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 12"
"languages": "see Disembodied Voice below"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Up to three times in its life, the zodar can cause a message of up to twenty-five\
    \ words to issue from the air around it. It speaks only when it has something\
    \ profoundly important to say, and the message can be understood by any creature\
    \ that has an Intelligence score of 2 or higher."
  "name": "Disembodied Voice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the zodar fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar can't be teleported or sent to any plane of existence against\
    \ its will."
  "name": "Transport Inhibitor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar makes two Crushing Fist attacks. Before or after these attacks,\
    \ the zodar uses Forced Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 21 (2d10\
    \ + 10) force damage."
  "name": "Crushing Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar magically warps space around one creature it can see within 60\
    \ feet of itself. The target must make a DC 21 Constitution saving throw. On a\
    \ failed save, the target takes 22 (4d10) force damage, and the zodar teleports\
    \ it, along with any equipment it's wearing or carrying, up to 60 feet to an unoccupied\
    \ space that the zodar can see and that can support the target. On a successful\
    \ save, the target takes half as much damage and isn't teleported."
  "name": "Forced Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar casts the [wish](/compendium/spells/wish.md) spell, requiring\
    \ no spell components and using Charisma as the spellcasting ability (spell save\
    \ DC 17). After casting this spell, the zodar turns to dust and is destroyed."
  "name": "Wish"
"source":
- "BAM"
- "LoX"
name: Zodar
image: "[[Zodar.png]]"
---

# Zodar

```statblock
"name": "Zodar"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "200"
"hit_dice": "16d8 + 128"
"stats":
- !!int "30"
- !!int "10"
- !!int "26"
- !!int "12"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "13"
"damage_immunities": "acid, fire, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, petrified,\
  \ poisoned"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 12"
"languages": "see Disembodied Voice below"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Up to three times in its life, the zodar can cause a message of up to twenty-five\
    \ words to issue from the air around it. It speaks only when it has something\
    \ profoundly important to say, and the message can be understood by any creature\
    \ that has an Intelligence score of 2 or higher."
  "name": "Disembodied Voice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the zodar fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar can't be teleported or sent to any plane of existence against\
    \ its will."
  "name": "Transport Inhibitor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar makes two Crushing Fist attacks. Before or after these attacks,\
    \ the zodar uses Forced Teleport."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 21 (2d10\
    \ + 10) force damage."
  "name": "Crushing Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar magically warps space around one creature it can see within 60\
    \ feet of itself. The target must make a DC 21 Constitution saving throw. On a\
    \ failed save, the target takes 22 (4d10) force damage, and the zodar teleports\
    \ it, along with any equipment it's wearing or carrying, up to 60 feet to an unoccupied\
    \ space that the zodar can see and that can support the target. On a successful\
    \ save, the target takes half as much damage and isn't teleported."
  "name": "Forced Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The zodar casts the [wish](/compendium/spells/wish.md) spell, requiring\
    \ no spell components and using Charisma as the spellcasting ability (spell save\
    \ DC 17). After casting this spell, the zodar turns to dust and is destroyed."
  "name": "Wish"
"source":
- "BAM"
- "LoX"
"image": "[[Zodar.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 64, Light of Xaryxis*

## Description

A zodar is a bipedal entity whose body is encased in an obsidian exoskeleton. It has no facial features aside from two narrow, vertical slits that resemble eyes, and its countenance betrays no hint of pain or emotion. Underneath its armored exterior, a zodar's body is composed of tightly knit muscle fibers that make it incredibly strong and heavy. A zodar weighs 1,500 pounds.

No one knows how many zodars exist or where they came from, but the most popular hypothesis is that they are the creations of some long-forgotten god. Zodars interact with other sapient creatures in a manner that goes beyond mere aloofness. They simply hover in silence. When a zodar finally performs some significant action, the reasons for that action aren't always clear.

One interpretation of this behavior posits that each zodar has a specific mission and is relentless in its pursuit of the goal, but it reacts oddly to situations that don't involve its mission because it doesn't know what else to do. Another theory is that all zodars are working in concert to achieve some master objective. A third, less ominous idea is that zodars lost their sense of purpose when their creator vanished, and they are struggling to find their new role.

A zodar can cause speech to issue from the air around it on three occasions in its lifetime. When it feels compelled to speak, it chooses its words wisely. It can also warp the fabric of the multiverse to cast the wish spell as its final act—it is destroyed once the spell is cast.
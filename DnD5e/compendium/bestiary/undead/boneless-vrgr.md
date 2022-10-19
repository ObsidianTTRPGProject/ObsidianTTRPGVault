---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/undead
aliases: ["Boneless"]
statblock: true
"name": "Boneless"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "bludgeoning, poison"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless can move through any opening at least 1 inch wide without\
    \ squeezing. It can also squeeze to fit into a space that a Tiny creature could\
    \ fit in."
  "name": "Compression"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless makes two Slam attacks. If both attacks hit a Large or smaller\
    \ creature, the creature is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 13), and the boneless can use Crushing Embrace."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless wraps its body around a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by it. While the boneless is attached, the target is [blinded](/rules/conditions.md#blinded)\
    \ and is unable to breathe. The target must succeed on a DC 13 Strength saving\
    \ throw at the start of each of the boneless' turns or take 5 (1d4 + 3) bludgeoning\
    \ damage. If something moves the target, the boneless moves with it. The boneless\
    \ can detach itself by spending 5 feet of its movement. A creature, including\
    \ the target, can use its action to try to detach the boneless and force it to\
    \ move into the nearest unoccupied space, doing so with a successful DC 13 Strength\
    \ check. When the boneless dies, it detaches from any creature it is attached\
    \ to."
  "name": "Crushing Embrace"
"source":
- "VRGR"
name: Boneless
image: "[[Boneless.png]]"
---

# Boneless

```statblock
"name": "Boneless"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_resistances": "bludgeoning, poison"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless can move through any opening at least 1 inch wide without\
    \ squeezing. It can also squeeze to fit into a space that a Tiny creature could\
    \ fit in."
  "name": "Compression"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless makes two Slam attacks. If both attacks hit a Large or smaller\
    \ creature, the creature is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 13), and the boneless can use Crushing Embrace."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The boneless wraps its body around a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by it. While the boneless is attached, the target is [blinded](/rules/conditions.md#blinded)\
    \ and is unable to breathe. The target must succeed on a DC 13 Strength saving\
    \ throw at the start of each of the boneless' turns or take 5 (1d4 + 3) bludgeoning\
    \ damage. If something moves the target, the boneless moves with it. The boneless\
    \ can detach itself by spending 5 feet of its movement. A creature, including\
    \ the target, can use its action to try to detach the boneless and force it to\
    \ move into the nearest unoccupied space, doing so with a successful DC 13 Strength\
    \ check. When the boneless dies, it detaches from any creature it is attached\
    \ to."
  "name": "Crushing Embrace"
"source":
- "VRGR"
"image": "[[Boneless.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 228*

## Description

Not all animate corpses shamble from their graves. Boneless are undead remains devoid of skeletons. Most rise from the bodies of those who've suffered brutal ends, such as deliberate skinning or crushing. Deathless malice infuses what remains, their husks flopping and slithering in pursuit of vengeance or at the whims of sinister masters. Slipping through cracks and under doors, these stealthy undead seek to adorn living frames once more, wrapping themselves around their victims and wringing them to death in their full-body grip.

Boneless arise in a variety of forms. While the animate skins of specific creatures are the most common, foul spellcasters might create these horrors from the scraps of failed experiments, necromantic slurries, heaps of discarded hair, abattoirs, and charnel concoctions. These origins don't affect a boneless's statistics but lend it distinct forms.

Whether through accident or depraved genius, some villains use one corpse to create two separate undead. Boneless might adorn the frames of other undead, like skeletons or zombies. The sight of a boneless peeling itself from its independently undead frame haunts the nightmares of many seasoned monster hunters.
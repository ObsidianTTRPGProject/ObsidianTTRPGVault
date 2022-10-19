---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/large
- monster/type/aberration
aliases: ["Gaj"]
statblock: true
"name": "Gaj"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "15"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands all languages but can't speak"
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj makes one Mandibles attack and uses Mind-Probing Antennae or Paralyze\
    \ (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6\
    \ + 3) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until the grapple ends, the target takes 10 (2d6 + 3) slashing\
    \ damage at the start of each of the gaj's turns. While it is grappling a creature,\
    \ the gaj can't use its mandibles to attack other creatures."
  "name": "Mandibles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj targets one creature [grappled](/rules/conditions.md#grappled)\
    \ by it. The target must make a DC 12 Wisdom saving throw. On a failed save, the\
    \ target takes 16 (3d10) psychic damage, and the gaj magically pulls one piece\
    \ of information from the target's mind that the gaj wants to know. On a successful\
    \ save, the target takes half as much damage, and the gaj learns nothing."
  "name": "Mind-Probing Antennae"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj magically targets one creature it can see within 60 feet of itself.\
    \ The target must succeed on a DC 12 Wisdom saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyze (Recharge 6)"
"source":
- "BAM"
- "LoX"
name: Gaj
image: "[[Gaj.png]]"
---

# Gaj

```statblock
"name": "Gaj"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "15"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "understands all languages but can't speak"
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj makes one Mandibles attack and uses Mind-Probing Antennae or Paralyze\
    \ (if available)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6\
    \ + 3) slashing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11). Until the grapple ends, the target takes 10 (2d6 + 3) slashing\
    \ damage at the start of each of the gaj's turns. While it is grappling a creature,\
    \ the gaj can't use its mandibles to attack other creatures."
  "name": "Mandibles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj targets one creature [grappled](/rules/conditions.md#grappled)\
    \ by it. The target must make a DC 12 Wisdom saving throw. On a failed save, the\
    \ target takes 16 (3d10) psychic damage, and the gaj magically pulls one piece\
    \ of information from the target's mind that the gaj wants to know. On a successful\
    \ save, the target takes half as much damage, and the gaj learns nothing."
  "name": "Mind-Probing Antennae"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gaj magically targets one creature it can see within 60 feet of itself.\
    \ The target must succeed on a DC 12 Wisdom saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyze (Recharge 6)"
"source":
- "BAM"
- "LoX"
"image": "[[Gaj.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 23, Light of Xaryxis*

## Description

Gaj are hideous hunters that prey on other intelligent life forms. They crawl on six insectile legs and attack with their mandibles. They ambush prey by burying themselves under sand or silt and lying in wait, lurking in dark caves, or perching on natural stone ledges, where they blend in with their surroundings. Gaj have no language, but they have the magical ability to understand the speech of other creatures.

A gaj's head is a spongy globe about 2 feet in diameter, with three feathery antennae protruding from the top. Spaced around the head are six compound eyes, and six finger-like appendages hang over its mouth. A gaj can try to read the thoughts of another intelligent creature by wrapping its antennae around the creature's head. Regardless of whether the attempt succeeds, this mental probe is painful and takes a toll on the victim's well-being.
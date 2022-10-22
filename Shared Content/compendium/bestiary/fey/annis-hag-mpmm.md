---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fey
- monster/environment/hill
- monster/environment/mountain
aliases: ["Annis Hag"]
statblock: true
"name": "Annis Hag"
"size": "Large"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "21"
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 40 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Giant, Sylvan"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\n3/day each: [disguise self](/compendium/spells/disguise-self.md)\
    \ (including the form of a Medium Humanoid), [Fog cloud](/compendium/spells/fog-cloud.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The annis makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 36 (9d6\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) if it is a Large or smaller creature. Until the grapple ends,\
    \ the target takes 36 (9d6 + 5) bludgeoning damage at the start of each of the\
    \ hag's turns. The hag can't make attacks while grappling a creature in this way."
  "name": "Crushing Hug"
"source":
- "MPMM"
- "VGM"
name: Annis Hag
image: "[[Annis Hag.png]]"
---

# Annis Hag

```statblock
"name": "Annis Hag"
"size": "Large"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "21"
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 40 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Giant, Sylvan"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hag casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\n3/day each: [disguise self](/compendium/spells/disguise-self.md)\
    \ (including the form of a Medium Humanoid), [Fog cloud](/compendium/spells/fog-cloud.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The annis makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 36 (9d6\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) if it is a Large or smaller creature. Until the grapple ends,\
    \ the target takes 36 (9d6 + 5) bludgeoning damage at the start of each of the\
    \ hag's turns. The hag can't make attacks while grappling a creature in this way."
  "name": "Crushing Hug"
"source":
- "MPMM"
- "VGM"
"image": "[[Annis Hag.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 47, Volo's Guide to Monsters p. 159*

## Description

Annis hags lair in mountains or hills. These hunchbacked and hump-shouldered hags are the largest and most physically imposing of their kind, standing eight feet tall. They can easily tear a fully grown person apart, but they love hunting the young, preferring their flesh above all others.

Annis hags leave tokens of their cruelty at the edges of forests and other areas they claim to provoke fear and distrust in nearby villages and settlements. To an annis hag, nothing is sweeter than making a once-vibrant community paralyzed with terror, so folk never venture out at night, strangers are met with suspicion and anger, and parents warn their children: "Be good, or the annis will get you."

When an annis feels especially cruel, the hag adopts the appearance of a kindly elder, approaches a child in a remote place, and gives them an iron token (described below), through which the child can magically confide in the hag. Over time, "Granny" or "Grampy" convinces the child that it's okay to do bad deeds—starting with breaking things or wandering without permission, then graduating to pushing someone down the stairs or setting a house on fire. Eventually, the child's terrified family and community face painful decisions of what to do about the seemingly remorseless child.

Much as annis hags befriend children in order to corrupt them, they may adopt a group of ogres, trolls, or other creatures ([ogres](/compendium/bestiary/giant/ogre.md) and [trolls](/compendium/bestiary/giant/troll.md)), ruling them through brute strength, insults, and superstition.

**Iron Token.** An annis hag can pull out one of their iron teeth or nails and spend 1 minute shaping and polishing it into the form of a coin, a ring, or a tiny mirror.

Thereafter, any creature that holds this iron token can have a whispered conversation with the hag, provided the creature and the hag are within 10 miles of each other. When the hag speaks through the token, the holder can hear the hag's whisper but not any other sounds at the hag's location. Similarly, the hag can hear the holder of the token but not the noise around it.

A hag can have up to three iron tokens active at one time. As an action, the hag can discern the direction and approximate distance to those active tokens. The hag can deactivate any of those tokens at any distance (no action required), whereupon the token retains its current form but loses its magic.

## Environment

hill, mountain
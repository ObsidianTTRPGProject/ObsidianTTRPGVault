---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/large
- monster/type/giant
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/arctic
aliases: ["The Bagman"]
statblock: true
"name": "The Bagman"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman regains 10 hit points at the start of its turn. If the Bagman\
    \ takes acid or fire damage, this trait doesn't function at the start of the Bagman's\
    \ next turn. The Bagman dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman has advantage on attack rolls against any creature [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Grappler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature tries to read the Bagman's thoughts, that creature must succeed\
    \ on a DC 8 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The [stunned](/rules/conditions.md#stunned) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Alien Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "VRGR"
name: The Bagman
image: "[[The Bagman.png]]"
---

# The Bagman

```statblock
"name": "The Bagman"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman regains 10 hit points at the start of its turn. If the Bagman\
    \ takes acid or fire damage, this trait doesn't function at the start of the Bagman's\
    \ next turn. The Bagman dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman has advantage on attack rolls against any creature [grappled](/rules/conditions.md#grappled)\
    \ by it."
  "name": "Grappler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature tries to read the Bagman's thoughts, that creature must succeed\
    \ on a DC 8 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The [stunned](/rules/conditions.md#stunned) creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Alien Mind"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Bagman makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "VRGR"
"image": "[[The Bagman.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 225*

## Description

**Beware the Bagman.** The Bagman is an urban legend about an adventurer who sought to escape doom by abandoning his party and hiding inside a [bag of holding](/compendium/items/bag-of-holding.md). When he tried to leave, though, he became lost amid a constantly increasing number of extradimensional storage spaces. Over time, the strange forces of this magical in-between place transformed the adventurer into a monstrous creature. Now, every night, the Bagman slips out from a random [bag of holding](/compendium/items/bag-of-holding.md). If he doesn't find his home, he drags someone back into the bag with him and leaves behind some trinket from his hidden kingdom of lost junk. Some say that if you speak too loudly over an open [bag of holding](/compendium/items/bag-of-holding.md) or whisper "follow my voice" into a magical storage space three times, the Bagman will come for you.

Any character might know the story of the Bagman. What the Bagman is and how you use this urban legend is up to you. Is there truly a Bagman, or is he just a story? If an object vanishes overnight or if someone finds something that isn't theirs in a [bag of holding](/compendium/items/bag-of-holding.md), is the Bagman to blame? Is the Bagman just a monster that preys on adventurers, or is he the Darklord of his own hidden domain? The possibilities for horror adventures are endless, and nowhere—especially not adventurers' gear—is safe.

## Environment

underdark, mountain, forest, swamp, hill, arctic
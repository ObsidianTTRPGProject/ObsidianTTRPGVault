---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Ancient Lunar Dragon"]
statblock: true
"name": "Ancient Lunar Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "297"
"hit_dice": "17d20 + 119"
"stats":
- !!int "27"
- !!int "12"
- !!int "24"
- !!int "12"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "13"
  "Perception": !!int "14"
"damage_immunities": "cold"
"senses": "darkvision 240 ft., passive Perception 24"
"languages": "Draconic"
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ leaves a 20-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 15 (2d6\
    \ + 8) piercing damage plus 7 (2d6) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 15 (2d6\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a blast of frost in a 90-foot cone. Each creature in\
    \ the cone must make a DC 21 Constitution saving throw. On a failed save, the\
    \ creature takes 36 (8d8) cold damage, and its speed is reduced to 0 until the\
    \ end of its next turn. On a successful save, the creature takes half as much\
    \ damage, and its speed isn't reduced."
  "name": "Cold Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon becomes partially incorporeal for as long as it maintains concentration\
    \ on the effect (as if concentrating on a spell). While partially incorporeal,\
    \ the dragon has resistance to bludgeoning, piercing, and slashing damage."
  "name": "Phase (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical ice covers the ground in a 20-foot radius centered on a point the\
    \ dragon can see within 120 feet of itself. The ice, which is difficult terrain\
    \ for all creatures except lunar dragons, lasts for 10 minutes or until the dragon\
    \ uses this legendary action again."
  "name": "Treacherous Ice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 21 Dexterity saving throw or take 12 (1d8 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its speed without provoking opportunity attacks."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "BAM"
name: Ancient Lunar Dragon
image: "[[Ancient Lunar Dragon.png]]"
---

# Ancient Lunar Dragon

```statblock
"name": "Ancient Lunar Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "297"
"hit_dice": "17d20 + 119"
"stats":
- !!int "27"
- !!int "12"
- !!int "24"
- !!int "12"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "8"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "13"
  "Perception": !!int "14"
"damage_immunities": "cold"
"senses": "darkvision 240 ft., passive Perception 24"
"languages": "Draconic"
"cr": "19"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ leaves a 20-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 15 (2d6\
    \ + 8) piercing damage plus 7 (2d6) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 15 (2d6\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a blast of frost in a 90-foot cone. Each creature in\
    \ the cone must make a DC 21 Constitution saving throw. On a failed save, the\
    \ creature takes 36 (8d8) cold damage, and its speed is reduced to 0 until the\
    \ end of its next turn. On a successful save, the creature takes half as much\
    \ damage, and its speed isn't reduced."
  "name": "Cold Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon becomes partially incorporeal for as long as it maintains concentration\
    \ on the effect (as if concentrating on a spell). While partially incorporeal,\
    \ the dragon has resistance to bludgeoning, piercing, and slashing damage."
  "name": "Phase (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical ice covers the ground in a 20-foot radius centered on a point the\
    \ dragon can see within 120 feet of itself. The ice, which is difficult terrain\
    \ for all creatures except lunar dragons, lasts for 10 minutes or until the dragon\
    \ uses this legendary action again."
  "name": "Treacherous Ice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 21 Dexterity saving throw or take 12 (1d8 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its speed without provoking opportunity attacks."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "BAM"
"image": "[[Ancient Lunar Dragon.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 32*

## Description

Lunar dragons (also known as moon dragons or phase dragons) are capricious, xenophobic creatures that make their lairs inside desolate moons by burrowing through the rock.

Before laying eggs, a female lunar dragon stocks her lair with food; she won't leave the lair again until the eggs hatch and the offspring are old enough to fend for themselves. Lunar dragon eggs have stony shells that are pale white to light gray in color. Lunar dragons are alabaster white when they hatch and gradually turn darker as they age. Ancient moon dragons are the color of slate.

Lunar dragons enjoy depriving other creatures of treasure more than acquiring the treasure themselves. Often found among the treasures in a lunar dragon's hoard are one or more spelljamming helms (see the _Astral Adventurer's Guide_) taken from vessels that dared to invade the dragon's territory.

A lunar dragon can become incorporeal, but not to the extent that it can pass through other creatures or solid objects. In this semi-incorporeal state, roughly half of the dragon's body has a dark, indistinctly spectral form.

**A Lunar Dragon's Lair.** The cave complex where a lunar dragon makes its lair contains ample space for food, as well as one or more hidden chambers where the dragon keeps its treasure. Depending on the composition and features of the moon, the lair might contain natural springs and heat vents, wild gardens, crystal formations, magical phenomena, or an ecosystem of lesser life forms that have adapted to living with the dragon.
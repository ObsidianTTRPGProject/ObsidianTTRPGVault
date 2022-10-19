---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/elemental
aliases: ["Arclight Phoenix"]
statblock: true
"name": "Arclight Phoenix"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"stats":
- !!int "15"
- !!int "22"
- !!int "17"
- !!int "5"
- !!int "12"
- !!int "7"
"speed": "walk 0 ft., fly 120 ft."
"saves":
  "Dexterity": !!int "10"
"damage_resistances": "thunder; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, restrained,\
  \ unconscious"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix doesn't provoke an opportunity attack when it flies\
    \ out of an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first time on a turn that the arclight phoenix touches the ground,\
    \ it takes 11 (2d10) force damage."
  "name": "Grounded Lightning"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix sheds bright light in a 15-foot radius and dim light\
    \ for an additional 15 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix can move through a space as narrow as 1 inch wide\
    \ without squeezing. A creature that touches the phoenix or hits it with a melee\
    \ attack while within 5 feet of it takes 9 (2d8) lightning damage. In addition,\
    \ the arclight phoenix can enter a hostile creature's space and stop there. The\
    \ first time it enters a creature's space on a turn, that creature takes 9 (2d8)\
    \ lightning damage."
  "name": "Lightning Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the arclight phoenix dies, it explodes. Each creature within 30 feet\
    \ of it must make a DC 18 Dexterity saving throw, taking 36 (8d8) lightning damage\
    \ on a failed save, or half as much damage on a successful one. The explosion\
    \ destroys the phoenix but leaves behind a Tiny, warm egg with a mizzium shell.\
    \ The egg contains the embryo of a new arclight phoenix. It hatches when it is\
    \ in the area of a spell that deals lightning damage, or if a creature touches\
    \ the egg and expends spell slots whose combined levels equal 13 or more. When\
    \ it hatches, the egg releases a new arclight phoenix that appears in the egg's\
    \ space."
  "name": "Crackling Death"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 27 (6d8)\
    \ lightning damage, and lightning jumps from the target to one creature of the\
    \ phoenix's choice that it can see within 30 feet of the target. That second creature\
    \ must succeed on a DC 18 Dexterity saving throw or take 27 (6d8) lightning damage."
  "name": "Arclight Touch"
"source":
- "GGR"
name: Arclight Phoenix
image: "[[Arclight Phoenix.png]]"
---

# Arclight Phoenix

```statblock
"name": "Arclight Phoenix"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"stats":
- !!int "15"
- !!int "22"
- !!int "17"
- !!int "5"
- !!int "12"
- !!int "7"
"speed": "walk 0 ft., fly 120 ft."
"saves":
  "Dexterity": !!int "10"
"damage_resistances": "thunder; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, restrained,\
  \ unconscious"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix doesn't provoke an opportunity attack when it flies\
    \ out of an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first time on a turn that the arclight phoenix touches the ground,\
    \ it takes 11 (2d10) force damage."
  "name": "Grounded Lightning"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix sheds bright light in a 15-foot radius and dim light\
    \ for an additional 15 feet."
  "name": "Illumination"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The arclight phoenix can move through a space as narrow as 1 inch wide\
    \ without squeezing. A creature that touches the phoenix or hits it with a melee\
    \ attack while within 5 feet of it takes 9 (2d8) lightning damage. In addition,\
    \ the arclight phoenix can enter a hostile creature's space and stop there. The\
    \ first time it enters a creature's space on a turn, that creature takes 9 (2d8)\
    \ lightning damage."
  "name": "Lightning Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the arclight phoenix dies, it explodes. Each creature within 30 feet\
    \ of it must make a DC 18 Dexterity saving throw, taking 36 (8d8) lightning damage\
    \ on a failed save, or half as much damage on a successful one. The explosion\
    \ destroys the phoenix but leaves behind a Tiny, warm egg with a mizzium shell.\
    \ The egg contains the embryo of a new arclight phoenix. It hatches when it is\
    \ in the area of a spell that deals lightning damage, or if a creature touches\
    \ the egg and expends spell slots whose combined levels equal 13 or more. When\
    \ it hatches, the egg releases a new arclight phoenix that appears in the egg's\
    \ space."
  "name": "Crackling Death"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 27 (6d8)\
    \ lightning damage, and lightning jumps from the target to one creature of the\
    \ phoenix's choice that it can see within 30 feet of the target. That second creature\
    \ must succeed on a DC 18 Dexterity saving throw or take 27 (6d8) lightning damage."
  "name": "Arclight Touch"
"source":
- "GGR"
"image": "[[Arclight Phoenix.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 193*

## Description

An arclight phoenix is variously said to be a byproduct of a lightning strike on an aviary, a mishap in an effort to create a translocation device, or a successful attempt to create an elemental creature in the form of a majestic bird.

Whatever its origin, an arclight phoenix looks like a bird of prey formed entirely of electrical energy. Lightning fans out behind it as it bolts from place to place through the sky, making up in speed what it lacks in grace and majesty. It seems happiest during natural thunderstorms, as it darts among the clouds, gliding alongside thunderbolts.

**Elemental Nature.** An arclight phoenix doesn't require air, food, drink, or sleep.
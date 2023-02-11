---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/large
- monster/type/beast
aliases: ["Serpopard"]
statblock: true
"name": "Serpopard"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpopard has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the serpopard moves at least 20 feet straight toward a creature and\
    \ then hits it with a claw attack on the same turn, that target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the serpopard can make\
    \ one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage, and the target must make a DC 14 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
"source":
- "PSA"
name: Serpopard
image: "[[Serpopard.png]]"
---

# Serpopard

```statblock
"name": "Serpopard"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The serpopard has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the serpopard moves at least 20 feet straight toward a creature and\
    \ then hits it with a claw attack on the same turn, that target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the serpopard can make\
    \ one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage, and the target must make a DC 14 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
"source":
- "PSA"
"image": "[[Serpopard.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 37*

## Description

Serpopards are strange felines with serpentine features, including long, flexible bodies, venomous fangs, and sensitive tongues they can use to detect the scent of prey from a great distance. They like to perch in trees near desert oases or along the Luxa river, inside the Hekma, to drop down on creatures that come near the water.

**The Desert Lands.** The desolate wilderness beyond the protection of the Hekma is largely uncharted. Immediately beyond the protective veil is a chaotic dune sea called Shefet, the Scouring Sands. The desert wears away at the edges of the fertile lands surrounding Naktamun, serving as a constant reminder that only the bounty and protection of the God-Pharaoh stand between the people of the city-state and a grisly death in the sands beyond. Beyond Shefet are parched, cracked expanses called Ramunap, the Broken Lands. The ruins of ancient civilizations are said to lie in the Broken Lands, though no one has ever explored such ruins and returned to Naktamun to tell of them.
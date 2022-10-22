---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/beast
- monster/environment/arctic
aliases: ["Cerodon"]
statblock: true
"name": "Cerodon"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cerodon moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the cerodon can make one\
    \ stomp attack against it as a bonus action."
  "name": "Trampling Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerodon deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 29 (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSA"
name: Cerodon
image: "[[Cerodon.png]]"
---

# Cerodon

```statblock
"name": "Cerodon"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cerodon moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the cerodon can make one\
    \ stomp attack against it as a bonus action."
  "name": "Trampling Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cerodon deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8\
    \ + 7) piercing damage."
  "name": "Gore"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one [prone](/rules/conditions.md#prone)\
    \ creature. Hit: 29 (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "PSA"
"image": "[[Cerodon.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 37*

## Description

Cerodons are sometimes mistaken for herbivores because of their resemblance to bulls, but they are never mistaken for harmless. They stand over thirty feet tall at the shoulder, and their heads are crowned with enormous horns that jut forward from the nose, then extend backward almost the entire length of their bodies. The horn structure resembles a sandstone cliff, and a cerodon can use it to ruin buildings or monuments with a minimum of effort. Cerodons are extremely aggressive, and often mistake the shimmering Hekma for an intruder into their territory.

**The Desert Lands.** The desolate wilderness beyond the protection of the Hekma is largely uncharted. Immediately beyond the protective veil is a chaotic dune sea called Shefet, the Scouring Sands. The desert wears away at the edges of the fertile lands surrounding Naktamun, serving as a constant reminder that only the bounty and protection of the God-Pharaoh stand between the people of the city-state and a grisly death in the sands beyond. Beyond Shefet are parched, cracked expanses called Ramunap, the Broken Lands. The ruins of ancient civilizations are said to lie in the Broken Lands, though no one has ever explored such ruins and returned to Naktamun to tell of them.

## Environment

arctic
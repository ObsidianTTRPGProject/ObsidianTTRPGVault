---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/ooze
- monster/environment/underdark
aliases: ["Ochre Jelly"]
statblock: true
"name": "Ochre Jelly"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "15"
- !!int "6"
- !!int "14"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 10 ft., climb 10 ft."
"damage_resistances": "acid"
"damage_immunities": "lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 3 (1d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a jelly that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new jellies if it has at least 10 hit points. Each\
    \ new jelly has hit points equal to half the original jelly's, rounded down. New\
    \ jellies are one size smaller than the original jelly."
  "name": "Split"
"source":
- "MM"
- "LMoP"
- "PotA"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "ERLW"
- "RMBRE"
- "CRCotN"
- "JttRC"
name: Ochre Jelly
image: "[[Ochre Jelly.png]]"
---

# Ochre Jelly

```statblock
"name": "Ochre Jelly"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "15"
- !!int "6"
- !!int "14"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "walk 10 ft., climb 10 ft."
"damage_resistances": "acid"
"damage_immunities": "lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The jelly can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage plus 3 (1d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a jelly that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new jellies if it has at least 10 hit points. Each\
    \ new jelly has hit points equal to half the original jelly's, rounded down. New\
    \ jellies are one size smaller than the original jelly."
  "name": "Split"
"source":
- "MM"
- "LMoP"
- "PotA"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "ERLW"
- "RMBRE"
- "CRCotN"
- "JttRC"
"image": "[[Ochre Jelly.png]]"
```
^statblock

*Source: Monster Manual p. 243, Lost Mine of Phandelver, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*

## Description

Ochre jellies are yellowish blobs that can slide under doors and through narrow cracks in pursuit of creatures to devour. They have enough bestial cunning to avoid large groups of enemies.

An ochre jelly follows at a safe distance as it pursues its meal. Its digestive enzymes dissolve flesh quickly but have no effect on other substances such as bone, wood, and metal.

**Oozes.** Oozes thrive in the dark, shunning areas of bright light and extreme temperatures. They flow through the damp underground, feeding on any creature or object that can be dissolved, slinking along the ground, dripping from walls and ceilings, spreading across the edges of underground pools, and squeezing through cracks.

The first warning an adventurer receives of an ooze's presence is often the searing pain of its acidic touch. Oozes are drawn to movement and warmth. Organic material nourishes them, and when prey is scarce they feed on grime, fungus, and offal. Veteran explorers know that an immaculately clean passageway is a likely sign that an ooze lairs nearby.

**Slow Death.**  An ooze kills its prey slowly. Some varieties, such as black puddings and gelatinous cubes, engulf creatures to prevent escape. The only upside of this torturous death is that a victim's comrades can come to the rescue before it is too late.

Since not every ooze digests every type of substance, some have coins, metal gear, bones, and other debris suspended within their quivering bodies. A slain ooze can be a rich source of treasure for its killers.

Whether this is true or not, the Faceless Lord is one of the few beings that can control oozes and imbue them with a modicum of intelligence. Most of the time, oozes have no sense of tactics or self-preservation. They are direct and predictable, attacking and eating without cunning. Under the control of Juiblex, they exhibit glimmers of sentience and malevolent intent.

**Unwitting Servants.**  Although an ooze lacks the intelligence to ally itself with other creatures, others that understand an ooze's need to feed might lure it into a location where it can be of use to them. Clever monsters keep oozes around to defend passageways or consume refuse. Likewise, an ooze can be enticed into a pit trap, where its captors feed it often enough to prevent it from coming after them. Crafty creatures place torches and flaming braziers in strategic areas to dissuade an ooze from leaving a particular tunnel or room.

**Spawn of Juiblex.**  According to the Demonomicon of Iggwilv and other sources, oozes are scattered fragments or offspring of the demon lord Juiblex.

**Ooze Nature.**  An ooze doesn't require sleep.

## Environment

underdark
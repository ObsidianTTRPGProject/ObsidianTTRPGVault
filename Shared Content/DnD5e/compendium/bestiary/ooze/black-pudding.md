---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/ooze
- monster/environment/underdark
aliases: ["Black Pudding"]
statblock: true
"name": "Black Pudding"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "16"
- !!int "5"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the pudding or hits it with a melee attack while\
    \ within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of\
    \ metal or wood that hits the pudding corrodes. After dealing damage, the weapon\
    \ takes a permanent and cumulative −1 penalty to damage rolls. If its penalty\
    \ drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or\
    \ wood that hits the pudding is destroyed after dealing damage. The pudding can\
    \ eat through 2-inch-thick, nonmagical wood or metal in 1 round."
  "name": "Corrosive Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pudding can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor\
    \ worn by the target is partly dissolved and takes a permanent and cumulative\
    \ −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces\
    \ its AC to 10."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a pudding that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new puddings if it has at least 10 hit points. Each\
    \ new pudding has hit points equal to half the original pudding's, rounded down.\
    \ New puddings are one size smaller than the original pudding."
  "name": "Split"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "IDRotF"
- "CM"
- "JttRC"
name: Black Pudding
image: "[[Black Pudding.png]]"
---

# Black Pudding

```statblock
"name": "Black Pudding"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "16"
- !!int "5"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the pudding or hits it with a melee attack while\
    \ within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of\
    \ metal or wood that hits the pudding corrodes. After dealing damage, the weapon\
    \ takes a permanent and cumulative −1 penalty to damage rolls. If its penalty\
    \ drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or\
    \ wood that hits the pudding is destroyed after dealing damage. The pudding can\
    \ eat through 2-inch-thick, nonmagical wood or metal in 1 round."
  "name": "Corrosive Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pudding can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor\
    \ worn by the target is partly dissolved and takes a permanent and cumulative\
    \ −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces\
    \ its AC to 10."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a pudding that is Medium or larger is subjected to lightning or slashing\
    \ damage, it splits into two new puddings if it has at least 10 hit points. Each\
    \ new pudding has hit points equal to half the original pudding's, rounded down.\
    \ New puddings are one size smaller than the original pudding."
  "name": "Split"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "IDRotF"
- "CM"
- "JttRC"
"image": "[[Black Pudding.png]]"
```
^statblock

*Source: Monster Manual p. 241, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

A black pudding resembles a heaving mound of sticky black sludge. In dim passageways, the pudding appears to be little more than a blot of shadow.

Flesh, wood, metal, and bone dissolve when the pudding ebbs over them. Stone remains behind, wiped clean.

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
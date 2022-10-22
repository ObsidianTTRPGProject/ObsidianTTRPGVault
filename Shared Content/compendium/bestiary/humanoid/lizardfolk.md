---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/lizardfolk
- monster/environment/forest
- monster/environment/swamp
aliases: ["Lizardfolk"]
statblock: true
"name": "Lizardfolk"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "5"
"senses": "passive Perception 13"
"languages": "Draconic"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk makes two melee attacks, each one with a different weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Heavy Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Spiked Shield"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "TCE"
- "JttRC"
name: Lizardfolk
image: "[[Lizardfolk.png]]"
---

# Lizardfolk

```statblock
"name": "Lizardfolk"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "5"
"senses": "passive Perception 13"
"languages": "Draconic"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk makes two melee attacks, each one with a different weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Heavy Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Spiked Shield"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "TCE"
- "JttRC"
"image": "[[Lizardfolk.png]]"
```
^statblock

*Source: Monster Manual p. 204, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Journeys through the Radiant Citadel*

## Description

Lizardfolk are primitive reptilian humanoids that lurk in the swamps and jungles of the world. Their hut villages thrive in forbidding grottos, half-sunken ruins, and watery caverns.

**Territorial Xenophobes.** Lizardfolk deal and trade with other races only rarely. Fiercely territorial, they use camouflaged scouts to guard the perimeter of their domain. When unwelcome visitors are detected, a tribe sends a hunting band to harass or drive the trespassers off, or tricks them into blundering into the lairs of crocodiles and other dangerous creatures.

Lizardfolk have no notion of traditional morality, and they find the concepts of good and evil utterly alien. Truly neutral creatures, they kill when it is expedient and do whatever it takes to survive.

Lizardfolk rarely stray beyond their claimed hunting grounds. Any creature that enters their territory is fair game to be stalked, killed, and devoured. They make no distinction between humanoids, beasts, and monsters. Similarly, lizardfolk don't like reaching too far beyond their borders, where they could easily become the hunted instead of the hunters.

Occasions might arise when lizardfolk will form alliances with their neighbors. These lizardfolk usually learn firsthand that humans, dwarves, halflings, and elves can sometimes prove helpful or trustworthy. Once lizardfolk forge ties with outsiders, they are steadfast and fierce allies.

**Great Feasts and Sacrifices.** Lizardfolk are omnivorous, but they have a taste for humanoid flesh. Prisoners are often taken back to their camps to become the centerpieces of great feasts and rites involving dancing, storytelling, and ritual combat.

Victims are either cooked and eaten by the tribe, or are sacrificed to Semuanya, the lizardfolk god.

**Canny Crafters.** Though they aren't skilled artisans, lizardfolk craft tools and ornamental jewelry out of the bones of their kills, and they use the hides and shells of dead monsters to create shields.

**Lizardfolk Leaders.** Lizardfolk respect and fear magic with a religious awe. Lizardfolk shamans lead their tribes, overseeing rites and ceremonies performed to honor Semuanya. From time to time, however, a lizardfolk tribe produces a powerful figure touched not by Semuanya but by Sess'inek-a reptilian demon lord who seeks to corrupt and control the lizardfolk.

Lizardfolk born in Sess'inek's image are larger and more cunning than other lizardfolk, and are thoroughly evil. These lizard kings and queens dominate lizardfolk tribes, usurping a shaman's authority and inspiring uncharacteristic aggression among their subjects.

**Dragon Worshipers.** Lizardfolk speak Draconic, which they are thought to have learned from dragons in ancient times. A tribe that wanders into the territory of a dragon will offer it tribute to win its favor. An evil dragon might exploit lizardfolk for its own vile ends, turning them into raiders and plunderers.

## Environment

forest, swamp
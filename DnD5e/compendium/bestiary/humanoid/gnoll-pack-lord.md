---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/gnoll
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
- monster/environment/desert
aliases: ["Gnoll Pack Lord"]
statblock: true
"name": "Gnoll Pack Lord"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the gnoll can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes two attacks, either with its glaive or its longbow, and\
    \ uses its Incite Rampage if it can."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10\
    \ + 3) slashing damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature the gnoll can see within 30 feet of it can use its reaction\
    \ to make a melee attack if it can hear the gnoll and has the Rampage trait."
  "name": "Incite Rampage (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "GoS"
- "BGDIA"
name: Gnoll Pack Lord
image: "[[Gnoll Pack Lord.png]]"
---

# Gnoll Pack Lord

```statblock
"name": "Gnoll Pack Lord"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the gnoll can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gnoll makes two attacks, either with its glaive or its longbow, and\
    \ uses its Incite Rampage if it can."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10\
    \ + 3) slashing damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature the gnoll can see within 30 feet of it can use its reaction\
    \ to make a melee attack if it can hear the gnoll and has the Rampage trait."
  "name": "Incite Rampage (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "GoS"
- "BGDIA"
"image": "[[Gnoll Pack Lord.png]]"
```
^statblock

*Source: Monster Manual p. 163, Princes of the Apocalypse, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus*

## Description

The alpha of a gnoll pack is the pack lord, ruling by might and cunning. A pack lord earns the best of a gnoll pack's spoils, food, valuable trinkets, and magic items. It ornaments its body with brutal piercings and grotesque trophies, dyeing its fur with demonic sigils, hoping Yeenoghu will make it invulnerable.

**Gnolls.** Gnolls are feral humanoids that attack settlements along the frontiers and borderlands of civilization without warning, slaughtering their victims and devouring their flesh.

**Demonic Origin.**  The origin of the gnolls traces back to a time when the demon lord Yeenoghu found his way to the Material Plane and ran amok. Packs of ordinary hyenas followed in his wake, scavenging the demon lord's kills. Those hyenas were transformed into the first gnolls, parading after Yeenoghu until he was banished back to the Abyss. The gnolls then scattered across the face of the world, a dire reminder of demonic power.

Gnolls rarely build permanent structures or craft anything of lasting value. They don't make weapons or armor, but scavenge such items from the corpses of their fallen victims, stringing ears, teeth, scalps, and other trophies from their foes onto their patchwork armor.

**Nomadic Destroyers.**  Gnolls are dangerous because they strike at random. They emerge from the wilderness, plunder and slaughter, then move elsewhere. They attack like a plague of locusts, pillaging settlements and leaving little behind but razed buildings, gnawed corpses, and befouled land. Gnolls choose easy targets for their raids. Armored warriors holed up in a fortified castle will survive a rampaging gnoll horde unscathed, even as the towns, villages, and farms that surround the castle are ablaze, their people slaughtered and devoured.

**Thirst for Blood.**  No goodness or compassion resides in the heart of a gnoll. Like a demon, it lacks anything resembling a conscience, and can't be taught or coerced to put aside its destructive tendencies. The gnolls' frenzied bloodlust makes them an enemy to all, and when they lack a common foe, they fight among themselves. Even the most savage orcs avoid allying with gnolls.

## Environment

grassland, forest, hill, desert
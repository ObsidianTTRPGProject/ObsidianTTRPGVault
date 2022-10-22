---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/dragon
aliases: ["Young Sea Serpent"]
statblock: true
"name": "Young Sea Serpent"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "10"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_immunities": "cold"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent makes one Bite attack and one Constrict or Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage plus 5 (1d10) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 20 ft., one creature. Hit: 22 (4d8\
    \ + 4) bludgeoning damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the sea serpent can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Strength saving throw or be pushed up to 20 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent exhales a 30-foot cone of cold. Each creature in that area\
    \ must make a DC 14 Constitution saving throw, taking 38 (7d10) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Rime Breath (Recharge 5-6)"
"source":
- "FTD"
name: Young Sea Serpent
image: "[[Young Sea Serpent.png]]"
---

# Young Sea Serpent

```statblock
"name": "Young Sea Serpent"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "19"
- !!int "12"
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "10"
"speed": "walk 10 ft., swim 40 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_immunities": "cold"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Common, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent makes one Bite attack and one Constrict or Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage plus 5 (1d10) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 20 ft., one creature. Hit: 22 (4d8\
    \ + 4) bludgeoning damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the sea serpent can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Strength saving throw or be pushed up to 20 feet away and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sea serpent exhales a 30-foot cone of cold. Each creature in that area\
    \ must make a DC 14 Constitution saving throw, taking 38 (7d10) cold damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Rime Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Young Sea Serpent.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 219*

## Description

Sea serpents rank alongside dragon turtles as some of the most feared predators of the deep and inspire many sailors' worst nightmares. Their strong fins propel them through the water at great speed.

Young sea serpents are agile hunters. They use reefs and natural camouflage to hide before they strike, picking off members of a ship's crew one by one. Ancient sea serpents grow large enough to demolish whole ships, then feed at leisure on helpless sailors in the water. At any age, a sea serpent attacks with terrible bites, a lashing tail, a constricting grip, and a frigid breath weapon that can leave sailors' corpses floating frozen amid the wreckage of their ships.

Sea serpents are as fiercely territorial as any other dragons, and they do not take kindly to ships passing over their domains without permission. Some can be appeased by offerings of treasure, but most demand that a ship's crew sacrifice one or more of their own.

Living amid the wreckage of sunken ships or in deep sea caves, sea serpents collect the cargo of the craft they sink, amassing great hoards of trade goods, sailors' trinkets, and pirates' booty.
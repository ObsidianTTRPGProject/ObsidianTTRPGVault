---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/underwater
- monster/environment/coastal
aliases: ["Dragon Turtle"]
statblock: true
"name": "Dragon Turtle"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes three attacks: one with its bite and two with its\
    \ claws. It can make one tail attack in place of its two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire\
    \ damage on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "ToA"
- "GoS"
- "EGW"
- "MOT"
- "CM"
- "JttRC"
name: Dragon Turtle
image: "[[Dragon Turtle.png]]"
---

# Dragon Turtle

```statblock
"name": "Dragon Turtle"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"stats":
- !!int "25"
- !!int "10"
- !!int "20"
- !!int "10"
- !!int "12"
- !!int "12"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"damage_resistances": "fire"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes three attacks: one with its bite and two with its\
    \ claws. It can make one tail attack in place of its two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle\
    \ and knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature\
    \ in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire\
    \ damage on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "ToA"
- "GoS"
- "EGW"
- "MOT"
- "CM"
- "JttRC"
"image": "[[Dragon Turtle.png]]"
```
^statblock

*Source: Monster Manual p. 119, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

Dragon turtles are among the most fearsome creatures of the oceans. As large and voracious as the oldest of its land-based dragon kin, a dragon turtle strikes with its deadly jaws, steaming breath, and crushing tail.

A dragon turtle's rough shell is the same dark green color as the deep water where this monster dwells. Silver highlights lining the shell resemble light dancing on open water, and a surfacing dragon turtle is sometimes mistaken for the reflection of the sun or moon on the waves.

**Dragons of the Deep.** Like true dragons, dragon turtles collect treasure, first by sinking ships and then by sifting through the wreckage for coins and other precious items. A dragon turtle swallows treasure for transport, then regurgitates it when it reaches its lair.

Dragon turtles dwell in caves hidden in coral reefs or beneath the seafloor, or along rugged stretches of coastline. If a choice cave is already inhabited, a dragon turtle attacks its current residents in an attempt to take over.

**Mercenary Monsters.** A dragon turtle is smart enough to be bribed, and pirates sailing seas patrolled by these creatures quickly learn to offer them treasure in exchange for safe passage. Clever sahuagin sometimes ally with dragon turtles, enticing them with treasure to use their blistering breath weapons in sahuagin raids against ships and coastal settlements.

**Elemental Might.** Dragon turtles sometimes find their way through sunken planar rifts to the Elemental Plane of Water. Those monstrous specimens can often be found in the service of marids, which strap magnificent coral thrones to the backs of dragon turtles and ride them as mounts.

## Environment

underwater, coastal
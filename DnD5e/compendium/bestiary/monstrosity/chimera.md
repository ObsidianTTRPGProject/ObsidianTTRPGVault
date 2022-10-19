---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/hill
aliases: ["Chimera"]
statblock: true
"name": "Chimera"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "11"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "8"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
    \ and one with its claws. When its fire breath is available, it can use the breath\
    \ in place of its bite or horns."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "WDMM"
- "SDW"
- "BGDIA"
name: Chimera
image: "[[Chimera.png]]"
---

# Chimera

```statblock
"name": "Chimera"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "19"
- !!int "11"
- !!int "19"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "8"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
    \ and one with its claws. When its fire breath is available, it can use the breath\
    \ in place of its bite or horns."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) bludgeoning damage."
  "name": "Horns"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that area\
    \ must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "WDMM"
- "SDW"
- "BGDIA"
"image": "[[Chimera.png]]"
```
^statblock

*Source: Monster Manual p. 39, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus*

## Description

Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.

Gifted with demonic cruelty, a chimera serves as a grim reminder of what happens when demon princes find their way to the Material Plane. A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky and engulfing prey with its fiery breath before landing.

**Conflicted Creature.** A chimera combines the worst aspects of its three parts. Its dragon head drives it to raid, plunder, and accumulate a great hoard. Its leonine nature compels it to hunt and kill powerful creatures that threaten its territory. Its goat head grants it a vicious, stubborn streak that compels it to fight to the death. These three aspects drive a chimera to stake out a territory that is as large as 10 miles wide. It preys on wild game, viewing more powerful creatures as rivals to be humiliated and defeated. Its greatest rivals are dragons, griffons, manticores, perytons, and wyverns. When it hunts, the chimera looks for easy ways to amuse itself. It enjoys the fear and suffering of weaker creatures. The monster often toys with its prey, breaking off an attack prematurely and leaving a creature wounded and terrified before returning to finish it off.

**Servant of Evil.** Though chimeras are far from cunning, their draconic ego makes them susceptible to flattery and gifts. If offered food and treasure, a chimera might spare a traveler. A villain can lure a chimera into service by keeping it well fed and its treasure hoard well stocked.

## Environment

underdark, mountain, grassland, hill
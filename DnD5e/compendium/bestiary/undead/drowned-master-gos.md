---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/undead
aliases: ["Drowned Master"]
statblock: true
"name": "Drowned Master"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "10"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master shares its mind with every other drowned one within\
    \ 1 mile of it, and can communicate its thoughts and observations to them instantaneously\
    \ and without limitation."
  "name": "Bound Together"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the drowned master's turns, each creature within\
    \ 5 feet of it takes 5 (1d10) cold damage. A creature that touches the drowned\
    \ master or hits it with a melee attack while within 5 feet of it takes 5 (1d10)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the drowned master to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the drowned master drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master makes two attacks: one with its greatsword and one with\
    \ its Life-Draining Tentacle."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 14 (4d6) cold damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 10 (2d6\
    \ + 3) necrotic damage. The target must succeed on a DC 15 Constitution saving\
    \ throw or have its hit point maximum reduced by an amount equal to the damage\
    \ taken. The target dies if this effect reduces its hit point maximum to 0. This\
    \ reduction lasts until the target finishes a long rest. On a failed save, the\
    \ target also contracts bluerot (see the \"Bluerot\" in notes)."
  "name": "Life-Draining Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master discharges foul ink in front of itself in a 30-foot\
    \ cone. Each creature caught in the ink must make a DC 15 Constitution saving\
    \ throw, taking 27 (6d8) necrotic damage on a failed save or half as much damage\
    \ on a successful one. A creature that fails this saving throw is [blinded](/rules/conditions.md#blinded)\
    \ until the end of its next turn and contracts bluerot (see the \"Bluerot\" in\
    \ notes)."
  "name": "Necrotic Ink (Recharge 5-6)"
"source":
- "GoS"
- "LR"
name: Drowned Master
image: "[[Drowned Master.png]]"
---

# Drowned Master

```statblock
"name": "Drowned Master"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "10"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master shares its mind with every other drowned one within\
    \ 1 mile of it, and can communicate its thoughts and observations to them instantaneously\
    \ and without limitation."
  "name": "Bound Together"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of the drowned master's turns, each creature within\
    \ 5 feet of it takes 5 (1d10) cold damage. A creature that touches the drowned\
    \ master or hits it with a melee attack while within 5 feet of it takes 5 (1d10)\
    \ cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the drowned master to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the drowned master drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master makes two attacks: one with its greatsword and one with\
    \ its Life-Draining Tentacle."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage plus 14 (4d6) cold damage, and the target must succeed\
    \ on a DC 12 Constitution saving throw or contract [bluerot](/rules/diseases.md#bluerot)\
    \ (see the \"Bluerot\" in notes)."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 10 (2d6\
    \ + 3) necrotic damage. The target must succeed on a DC 15 Constitution saving\
    \ throw or have its hit point maximum reduced by an amount equal to the damage\
    \ taken. The target dies if this effect reduces its hit point maximum to 0. This\
    \ reduction lasts until the target finishes a long rest. On a failed save, the\
    \ target also contracts bluerot (see the \"Bluerot\" in notes)."
  "name": "Life-Draining Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drowned master discharges foul ink in front of itself in a 30-foot\
    \ cone. Each creature caught in the ink must make a DC 15 Constitution saving\
    \ throw, taking 27 (6d8) necrotic damage on a failed save or half as much damage\
    \ on a successful one. A creature that fails this saving throw is [blinded](/rules/conditions.md#blinded)\
    \ until the end of its next turn and contracts bluerot (see the \"Bluerot\" in\
    \ notes)."
  "name": "Necrotic Ink (Recharge 5-6)"
"source":
- "GoS"
- "LR"
"image": "[[Drowned Master.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 235, Locathah Rising*

## Description

This waterlogged undead, bound to the Pit of Hatred in Tammeraut's Fate, hovers menacingly over the bones of its victims. Its torso, arms, and head retain their former shapes, but its legs have split into shadowy tentacles. The drowned master is tethered to a source of powerful magic that prevents it from traveling far. It commands other drowned ones, compelling them to serve as agents in its dark plots.

**Bluerot.** This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. This disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifest in 1d4 hours, causing the victim's Constitution and Charisma scores to decrease by 1d4 each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater.

At the end of each long rest, an infected creature makes a DC 12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw, the victim takes 18 (4d8) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal.
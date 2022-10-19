---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/huge
- monster/type/monstrosity
- monster/environment/swamp
aliases: ["Amonkhet Hydra"]
statblock: true
"name": "Amonkhet Hydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra has five heads. While it has more than one head, the hydra has\
    \ advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ hydra takes 25 or more damage in a single turn, one of its heads dies. If all\
    \ its heads die, the hydra dies.\n\nAt the end of its turn, it grows two heads\
    \ for each of its heads that died since its last turn, unless it has taken fire\
    \ damage since its last turn. The hydra regains 10 hit points for each head regrown\
    \ in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
    \ can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage, and the target must make on a DC 16 Constitution saving\
    \ throw, taking 7 (2d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Bite"
"source":
- "PSA"
name: Amonkhet Hydra
image: "[[Amonkhet Hydra.png]]"
---

# Amonkhet Hydra

```statblock
"name": "Amonkhet Hydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra has five heads. While it has more than one head, the hydra has\
    \ advantage on saving throws against being [blinded](/rules/conditions.md#blinded),\
    \ [charmed](/rules/conditions.md#charmed), [deafened](/rules/conditions.md#deafened),\
    \ [frightened](/rules/conditions.md#frightened), [stunned](/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/rules/conditions.md#unconscious).\n\nWhenever the\
    \ hydra takes 25 or more damage in a single turn, one of its heads dies. If all\
    \ its heads die, the hydra dies.\n\nAt the end of its turn, it grows two heads\
    \ for each of its heads that died since its last turn, unless it has taken fire\
    \ damage since its last turn. The hydra regains 10 hit points for each head regrown\
    \ in this way."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
    \ can be used only for opportunity attacks."
  "name": "Reactive Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the hydra sleeps, at least one of its heads is awake."
  "name": "Wakeful"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydra makes as many bite attacks as it has heads."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage, and the target must make on a DC 16 Constitution saving\
    \ throw, taking 7 (2d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Bite"
"source":
- "PSA"
"image": "[[Amonkhet Hydra.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 35*

## Description

The hydra is a reptilian horror with a crocodilian body and multiple heads on long, serpentine necks. Although its heads can be severed, the hydra magically regrows them in short order. A typical specimen has five heads. At the dawn of time, [Tiamat](/compendium/deities/dawn-war-tiamat.md), the Queen of Evil Dragons, slew a rival dragon god named Lernaea and cast her blood across the multiverse. Each drop that fell upon a world spawned a multi-headed hydra consumed by a hunger as great as the fallen god's hatred. Great champions are known to test their mettle against these fearsome creatures.

**The Desert Lands.** The desolate wilderness beyond the protection of the Hekma is largely uncharted. Immediately beyond the protective veil is a chaotic dune sea called Shefet, the Scouring Sands. The desert wears away at the edges of the fertile lands surrounding Naktamun, serving as a constant reminder that only the bounty and protection of the God-Pharaoh stand between the people of the city-state and a grisly death in the sands beyond. Beyond Shefet are parched, cracked expanses called Ramunap, the Broken Lands. The ruins of ancient civilizations are said to lie in the Broken Lands, though no one has ever explored such ruins and returned to Naktamun to tell of them.

**Everlasting Hunger.** A rapacious and gluttonous monster, a hydra snatches and tears apart its prey in a frenzy of feeding. When a hydra has cleared a territory of food and driven off any creatures smart enough to avoid it, it moves on to seek its meals elsewhere. A hydra's hunger is so great that if it can't feed, it might turn against itself, its heads attacking each other as the creature eats itself alive.

**Hardy Water Dwellers.** Hydras are natural swimmers, dwelling in rivers, along lakeshores, in ocean shallows, and in wetland bogs. A hydra rarely requires shelter from the elements, so it doesn't normally have a lair. Only in colder climes are hydras drawn to the protection of sheltered caverns and ruins. When a hydra sleeps, at least one of its heads remains awake and alert, making the creature difficult to catch by surprise.

## Environment

swamp
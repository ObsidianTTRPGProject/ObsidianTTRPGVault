---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/medium
- monster/type/undead
- monster/environment/desert
aliases: ["Amonkhet Mummy"]
statblock: true
"name": "Amonkhet Mummy"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "8"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "12"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "2"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "the languages it knew in life"
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 12 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy targets one creature it can see within 60 feet of it. If the\
    \ target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against\
    \ this magic or become [frightened](/rules/conditions.md#frightened) until the\
    \ end of the mummy's next turn. If the target fails the saving throw by 5 or more,\
    \ it is also [paralyzed](/rules/conditions.md#paralyzed) for the same duration.\
    \ A target that succeeds on the saving throw is immune to the Dreadful Glare of\
    \ all mummies (but not mummy lords) for the next 24 hours."
  "name": "Dreadful Glare"
"source":
- "PSA"
name: Amonkhet Mummy
image: "[[Amonkhet Mummy.png]]"
---

# Amonkhet Mummy

```statblock
"name": "Amonkhet Mummy"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "8"
- !!int "15"
- !!int "6"
- !!int "10"
- !!int "12"
"speed": "walk 20 ft."
"saves":
  "Wisdom": !!int "2"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "the languages it knew in life"
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 12 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [remove curse](/compendium/spells/remove-curse.md)\
    \ spell or other magic."
  "name": "Rotting Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mummy targets one creature it can see within 60 feet of it. If the\
    \ target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against\
    \ this magic or become [frightened](/rules/conditions.md#frightened) until the\
    \ end of the mummy's next turn. If the target fails the saving throw by 5 or more,\
    \ it is also [paralyzed](/rules/conditions.md#paralyzed) for the same duration.\
    \ A target that succeeds on the saving throw is immune to the Dreadful Glare of\
    \ all mummies (but not mummy lords) for the next 24 hours."
  "name": "Dreadful Glare"
"source":
- "PSA"
"image": "[[Amonkhet Mummy.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 34*

## Description

Not every citizen of Naktamun proves to be worthy of the afterlife. Acolytes sometimes die before the Ceremony of Measurement, perhaps in training accidents. Many [initiates](/compendium/backgrounds/initiate-psa.md) perish in one of the first four trials, before earning their five cartouches. [Viziers](/compendium/backgrounds/vizier-psa.md) sometimes die before they have truly earned a place in the afterlife serving their gods. Without having proven themselves worthy, these poor souls have no place as Eternals in the afterlife—but neither have they committed a grievous sin that would warrant abandoning them to the Curse of Wandering as marauding [mummies](/compendium/bestiary/undead/amonkhet-mummy-psa.md).

Fortunately, the beneficence of the God-Pharaoh is great enough to provide a role for these people. Called the anointed, they are carefully embalmed, protected from the Curse of Wandering, and allowed to spend another lifetime in service to the worthy. The God-Pharaoh promises that those who faithfully serve as the anointed will earn a place as attendants in the afterlife as well, and even an eternity of service in the afterlife is prefera-ble to an eternity subjected to the Curse of Wandering.

The bodies of the anointed are carefully wrapped in cloth and adorned with cartouches. In contrast to the cartouches of [initiates](/compendium/backgrounds/initiate-psa.md) and [viziers](/compendium/backgrounds/vizier-psa.md), these do not harbor the life essence of the deceased at their best. Instead, they coach the anointed for a particular form of service. With their cartouches in place, the anointed rise and join the ranks of serving [mummies](/compendium/bestiary/undead/amonkhet-mummy-psa.md) who attend to the needs of daily life in Amonkhet.

**The Curse of Wandering.** The Curse of Wandering is the greatest danger of the desert lands. A creature killed in the desert rises again as a [zombie](/compendium/bestiary/undead/zombie.md) as soon as the moisture has dried from its flesh. As a result, the corpses of every kind of desert creature shamble across the dunes alongside the humanoid [zombies](/compendium/bestiary/undead/zombie.md) of [dissenters](/compendium/backgrounds/dissenter-psa.md) and would-be explorers. Most of these former humanoids are mindless marauders, though some tales speak of [mummies](/compendium/bestiary/undead/amonkhet-mummy-psa.md) that have retained a sinister intelligence and even magical ability, becoming [mummy lords](/compendium/bestiary/undead/amonkhet-mummy-lord-psa.md).

## Environment

desert
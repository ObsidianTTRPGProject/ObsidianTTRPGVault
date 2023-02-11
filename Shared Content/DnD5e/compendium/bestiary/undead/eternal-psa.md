---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/swamp
- monster/environment/urban
- monster/environment/desert
aliases: ["Eternal"]
statblock: true
"name": "Eternal"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the eternal has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eternal makes two longsword attacks or two longbow attacks. It can\
    \ use its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under the eternal's control, unless the humanoid is restored to life or its\
    \ body is destroyed. The eternal can have no more than twelve zombies under its\
    \ control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "PSA"
name: Eternal
image: "[[Eternal.png]]"
---

# Eternal

```statblock
"name": "Eternal"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the eternal has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eternal makes two longsword attacks or two longbow attacks. It can\
    \ use its Life Drain in place of one longsword attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest. The target dies\
    \ if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this\
    \ attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ under the eternal's control, unless the humanoid is restored to life or its\
    \ body is destroyed. The eternal can have no more than twelve zombies under its\
    \ control at one time."
  "name": "Life Drain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "PSA"
"image": "[[Eternal.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 34*

## Description

**The Curse of Wandering.** The Curse of Wandering is the greatest danger of the desert lands. A creature killed in the desert rises again as a [zombie](/compendium/bestiary/undead/zombie.md) as soon as the moisture has dried from its flesh. As a result, the corpses of every kind of desert creature shamble across the dunes alongside the humanoid [zombies](/compendium/bestiary/undead/zombie.md) of [dissenters](/compendium/backgrounds/dissenter-psa.md) and would-be explorers. Most of these former humanoids are mindless marauders, though some tales speak of [mummies](/compendium/bestiary/undead/amonkhet-mummy-psa.md) that have retained a sinister intelligence and even magical ability, becoming [mummy lords](/compendium/bestiary/undead/amonkhet-mummy-lord-psa.md).

**The Anointed.** Not every citizen of Naktamun proves to be worthy of the afterlife. Acolytes sometimes die before the Ceremony of Measurement, perhaps in training accidents. Many [initiates](/compendium/backgrounds/initiate-psa.md) perish in one of the first four trials, before earning their five cartouches. [Viziers](/compendium/backgrounds/vizier-psa.md) sometimes die before they have truly earned a place in the afterlife serving their gods. Without having proven themselves worthy, these poor souls have no place as Eternals in the afterlife—but neither have they committed a grievous sin that would warrant abandoning them to the Curse of Wandering as marauding [mummies](/compendium/bestiary/undead/amonkhet-mummy-psa.md).

Fortunately, the beneficence of the God-Pharaoh is great enough to provide a role for these people. Called the [anointed](/compendium/bestiary/undead/anointed-psa.md), they are carefully embalmed, protected from the Curse of Wandering, and allowed to spend another lifetime in service to the worthy. The God-Pharaoh promises that those who faithfully serve as the [anointed](/compendium/bestiary/undead/anointed-psa.md) will earn a place as attendants in the afterlife as well, and even an eternity of service in the afterlife is preferable to an eternity subjected to the Curse of Wandering.

The bodies of the anointed are carefully wrapped in cloth and adorned with cartouches. In contrast to the cartouches of [initiates](/compendium/backgrounds/initiate-psa.md) and [viziers](/compendium/backgrounds/vizier-psa.md), these do not harbor the life essence of the deceased at their best. Instead, they coach the [anointed](/compendium/bestiary/undead/anointed-psa.md) for a particular form of service. With their cartouches in place, the [anointed](/compendium/bestiary/undead/anointed-psa.md) rise and join the ranks of serving mummies who attend to the needs of daily life in Amonkhet.

**An Eternal Army.** A being as mighty and magnificent as Nicol Bolas demands a fighting force of the highest caliber, so that an ordinary army of zombies could never be worthy of the God-Pharaoh. The Eternals are elite soldiers with all the skill and prowess of living soldiers, but none of the disadvantages that arise in living beings, such as emotions, hesitation, or disloyalty. Bolas has personally crafted all of Amonkhet to create just such an army.

## Environment

underdark, swamp, urban, desert
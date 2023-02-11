---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/aberration
aliases: ["Tsucora Quori"]
statblock: true
"name": "Tsucora Quori"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"stats":
- !!int "17"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Quori"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no components:\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md)\n\n1/day: [fear](/compendium/spells/fear.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori makes three attacks: one pincer attack, one attack with its claws,\
    \ and one stinger attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. The quori has two pincers,\
    \ each of which can grapple one target."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (4d4\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 8 (1d10\
    \ + 3) piercing damage plus 10 (3d6) psychic damage, and the target must succeed\
    \ on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the quori for 1 minute. The target can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success."
  "name": "Stinger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the quori can see within 5 feet of it must succeed on\
    \ a DC 14 Charisma saving throw or be possessed by the quori; the quori then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The quori now controls the body but doesn't deprive the\
    \ target of awareness. The quori can't be targeted by any attack, spell, or other\
    \ effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity\
    \ to being [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened).\
    \ It otherwise uses the possessed target's statistics, but doesn't gain access\
    \ to the target's knowledge, class features, or proficiencies.\n\nThe possession\
    \ lasts until the body drops to 0 hit points, the quori ends it as a bonus action,\
    \ or the quori is forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the quori reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this quori's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "ERLW"
name: Tsucora Quori
image: "[[Tsucora Quori.png]]"
---

# Tsucora Quori

```statblock
"name": "Tsucora Quori"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"stats":
- !!int "17"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Quori"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no components:\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md)\n\n1/day: [fear](/compendium/spells/fear.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori makes three attacks: one pincer attack, one attack with its claws,\
    \ and one stinger attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. The quori has two pincers,\
    \ each of which can grapple one target."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (4d4\
    \ + 3) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 8 (1d10\
    \ + 3) piercing damage plus 10 (3d6) psychic damage, and the target must succeed\
    \ on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the quori for 1 minute. The target can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success."
  "name": "Stinger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the quori can see within 5 feet of it must succeed on\
    \ a DC 14 Charisma saving throw or be possessed by the quori; the quori then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The quori now controls the body but doesn't deprive the\
    \ target of awareness. The quori can't be targeted by any attack, spell, or other\
    \ effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity\
    \ to being [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened).\
    \ It otherwise uses the possessed target's statistics, but doesn't gain access\
    \ to the target's knowledge, class features, or proficiencies.\n\nThe possession\
    \ lasts until the body drops to 0 hit points, the quori ends it as a bonus action,\
    \ or the quori is forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the quori reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this quori's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "ERLW"
"image": "[[Tsucora Quori.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 307*

## Description

Tsucora quori are nightmarish creatures. Their headless torsos are covered with eyes and twitching limbs, including two massive arms that end in powerful pincers, and a serpentine tail tipped with a vicious stinger. They are cruel and calculating, enjoying the power they wield over others as they concoct elaborate schemes to advance their own positions and discredit their rivals.

**Relentless Schemers.** Constantly jockeying for position, each tsucora hopes to be reincarnated as a more powerful servant of the Dreaming Dark. As such, their plans are as often focused on the ruination of competitors as they are on the furthering of il-Lashtavar's plans. When they aren't serving in the cities of their nightmare realm, they hunt the dreaming spirits of mortals.

**Fearmongers.** Their ability to manipulate the fears of mortals sees tsucoras often sent to Eberron as Inspired. Nothing keeps humanoid chattel in line like fear, and the tsucoras are the masters of manipulating the uncertainty of mobs and high-ranking officials alike. The effectiveness of tsucora Inspired keeps the members of this order in the good graces of the kalaraq quori.

Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.
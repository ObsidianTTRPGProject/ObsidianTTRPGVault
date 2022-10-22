---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/huge
- monster/type/giant
aliases: ["Borborygmos"]
statblock: true
"name": "Borborygmos"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "270"
"hit_dice": "20d12 + 140"
"stats":
- !!int "24"
- !!int "11"
- !!int "24"
- !!int "8"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "9"
  "Strength": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Athletics": !!int "13"
  "Insight": !!int "9"
  "Survival": !!int "9"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened"
"senses": "tremorsense 60 ft., passive Perception 13"
"languages": "Common, Giant"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Borborygmos fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos has disadvantage on any attack roll against a target more than\
    \ 30 feet away."
  "name": "Poor Depth Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos can use his Frightful Presence. He also makes two attacks:\
    \ one with his maul and one with his stomp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 28 (6d6\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 18 (2d10\
    \ + 7) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +13 to hit, range 30/120 ft., one target. Hit:\
    \ 29 (4d10 + 7) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Borborygmos's choice that is within 60 feet of him and\
    \ can see or hear him must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of him for 1 minute. The [frightened](/rules/conditions.md#frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to Borborygmos's Frightful Presence for\
    \ the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos makes a weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos yells menacingly at one creature he can see within 60 feet\
    \ of him. That creature must succeed on a DC 17 Wisdom saving throw or become\
    \ [frightened](/rules/conditions.md#frightened) of him for 1 minute. If the creature\
    \ is already [frightened](/rules/conditions.md#frightened), it becomes [stunned](/rules/conditions.md#stunned)\
    \ instead. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to Borborygmos's Bellow for\
    \ the next 24 hours."
  "name": "Bellow (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos moves up to half his speed and can move through the space of\
    \ any creature smaller than Huge. The first time Borborygmos enters a creature's\
    \ space during this move, the creature must make a DC 21 Dexterity saving throw.\
    \ If the saving throw succeeds, the creature is pushed 5 feet away from Borborygmos.\
    \ If the saving throw fails, that creature is knocked [prone](/rules/conditions.md#prone),\
    \ and Borborygmos can make a stomp attack against it."
  "name": "Wide Berth (Costs 3 Actions)"
"source":
- "GGR"
name: Borborygmos
image: "[[Borborygmos.png]]"
---

# Borborygmos

```statblock
"name": "Borborygmos"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "270"
"hit_dice": "20d12 + 140"
"stats":
- !!int "24"
- !!int "11"
- !!int "24"
- !!int "8"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Wisdom": !!int "9"
  "Strength": !!int "13"
  "Constitution": !!int "13"
"skillsaves":
  "Athletics": !!int "13"
  "Insight": !!int "9"
  "Survival": !!int "9"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened"
"senses": "tremorsense 60 ft., passive Perception 13"
"languages": "Common, Giant"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Borborygmos fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos has disadvantage on any attack roll against a target more than\
    \ 30 feet away."
  "name": "Poor Depth Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos can use his Frightful Presence. He also makes two attacks:\
    \ one with his maul and one with his stomp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 28 (6d6\
    \ + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 21 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 18 (2d10\
    \ + 7) bludgeoning damage."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +13 to hit, range 30/120 ft., one target. Hit:\
    \ 29 (4d10 + 7) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Borborygmos's choice that is within 60 feet of him and\
    \ can see or hear him must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of him for 1 minute. The [frightened](/rules/conditions.md#frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to Borborygmos's Frightful Presence for\
    \ the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos makes a weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos yells menacingly at one creature he can see within 60 feet\
    \ of him. That creature must succeed on a DC 17 Wisdom saving throw or become\
    \ [frightened](/rules/conditions.md#frightened) of him for 1 minute. If the creature\
    \ is already [frightened](/rules/conditions.md#frightened), it becomes [stunned](/rules/conditions.md#stunned)\
    \ instead. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to Borborygmos's Bellow for\
    \ the next 24 hours."
  "name": "Bellow (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Borborygmos moves up to half his speed and can move through the space of\
    \ any creature smaller than Huge. The first time Borborygmos enters a creature's\
    \ space during this move, the creature must make a DC 21 Dexterity saving throw.\
    \ If the saving throw succeeds, the creature is pushed 5 feet away from Borborygmos.\
    \ If the saving throw fails, that creature is knocked [prone](/rules/conditions.md#prone),\
    \ and Borborygmos can make a stomp attack against it."
  "name": "Wide Berth (Costs 3 Actions)"
"source":
- "GGR"
"image": "[[Borborygmos.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 238*

## Description

For decades, the enormous cyclops Borborygmos has commanded the respect and obedience of the Gruul Clans by defeating all who challenged him. He embodies the raging fire that the Gruul believe burns in their bellies, and his wrath toward the civilization of Ravnica knows no bounds.

**Mightiest of the Mighty.** Borborygmos leads the Burning Tree clan, which is the largest and most diverse of the Gruul Clans. He is almost always accompanied by other members of his clan-not because he needs their protection, but because they might need his. His companions include creatures ranging from burly giants to cowering goblins.

The Gruul follow strength, and Borborygmos holds his position only because he has proved stronger than any challenger.
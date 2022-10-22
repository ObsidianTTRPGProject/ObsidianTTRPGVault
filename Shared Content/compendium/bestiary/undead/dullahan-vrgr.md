---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/undead
aliases: ["Dullahan"]
statblock: true
"name": "Dullahan"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "cold, lightning, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "understands the languages it knew in life but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dullahan is reduced to 0 hit points, it doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, it regains 97 hit points. In addition, it summons three [death's heads](/compendium/bestiary/undead/deaths-head-vrgr.md),\
    \ one of each type, in unoccupied spaces within 5 feet of it. The death's heads\
    \ are under the dullahan's control and act immediately after the dullahan in the\
    \ initiative order. Additionally, the dullahan can now use the options in the\
    \ \"Mythic Actions\" section. Award a party an additional 5,900 XP (11,800 XP\
    \ total) for defeating the dullahan after it uses Headless Summoning."
  "name": "Headless Summoning (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dullahan fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 11 (2d10) necrotic damage. If the dullahan scores a critical hit against\
    \ a creature, the target must succeed on a DC 15 Constitution saving throw or\
    \ the dullahan cuts off the target's head. The target dies if it can't survive\
    \ without the lost head. A creature that doesn't have or need a head, or has legendary\
    \ actions, instead takes an extra 27 (6d8) slashing damage."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 14 (2d10\
    \ + 3) fire damage."
  "name": "Fiery Skull"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dullahan's choice within 30 feet of it must succeed\
    \ on a DC 15 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the dullahan until the end of its next turn."
  "name": "Frightful Presence (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan moves up to its speed without provoking opportunity attacks\
    \ and makes one Battleaxe attack with advantage. If the attack hits, but is not\
    \ a critical hit, the attack deals an extra 27 (6d8) necrotic damage."
  "name": "Head Hunt (Costs 3 Actions)"
"source":
- "VRGR"
name: Dullahan
image: "[[Dullahan.png]]"
---

# Dullahan

```statblock
"name": "Dullahan"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "cold, lightning, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "understands the languages it knew in life but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dullahan is reduced to 0 hit points, it doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, it regains 97 hit points. In addition, it summons three [death's heads](/compendium/bestiary/undead/deaths-head-vrgr.md),\
    \ one of each type, in unoccupied spaces within 5 feet of it. The death's heads\
    \ are under the dullahan's control and act immediately after the dullahan in the\
    \ initiative order. Additionally, the dullahan can now use the options in the\
    \ \"Mythic Actions\" section. Award a party an additional 5,900 XP (11,800 XP\
    \ total) for defeating the dullahan after it uses Headless Summoning."
  "name": "Headless Summoning (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dullahan fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
    \ plus 11 (2d10) necrotic damage. If the dullahan scores a critical hit against\
    \ a creature, the target must succeed on a DC 15 Constitution saving throw or\
    \ the dullahan cuts off the target's head. The target dies if it can't survive\
    \ without the lost head. A creature that doesn't have or need a head, or has legendary\
    \ actions, instead takes an extra 27 (6d8) slashing damage."
  "name": "Battleaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 14 (2d10\
    \ + 3) fire damage."
  "name": "Fiery Skull"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dullahan's choice within 30 feet of it must succeed\
    \ on a DC 15 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the dullahan until the end of its next turn."
  "name": "Frightful Presence (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dullahan moves up to its speed without provoking opportunity attacks\
    \ and makes one Battleaxe attack with advantage. If the attack hits, but is not\
    \ a critical hit, the attack deals an extra 27 (6d8) necrotic damage."
  "name": "Head Hunt (Costs 3 Actions)"
"source":
- "VRGR"
"image": "[[Dullahan.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 233*

## Description

Dullahans are headless undead warriors—the remains of villains who let vengeance consume them. These decapitated hunters haunt the areas where they were slain, butchering innocents in search of their severed heads or to quench their thirst for revenge.

Wicked knights or commanders in life, dullahans adhere to twisted codes of chivalry or soldiership. These fallen champions consider a specific location their battlefield. This gives rise to stories of haunted battlegrounds, ruins, roads, river crossings and other strategic locations where a dullahan continues a terrifying campaign against the living. In death, dullahans are often rejoined by those who followed them in life, either in the form of lesser undead, like skeletons or wights, or terrifying mounts, like warhorse skeletons or nightmares.

**Headless Hunts.** Dullahans are known for seeking their lost heads, giving rise to regional legends of headless hunters and endless searches. The Dullahan Legends table suggests dullahan hauntings that might be the stuff of local legends.

**Dullahan Legends**

| dice: d4 | Haunting |
|----------|----------|
| 1 | A dullahan pursues anyone who has one of the shards of its shattered skull. |
| 2 | A vain dullahan pursues it own relatives, seeking to claim a head with its family resemblance. |
| 3 | A greedy dullahan seeks to recover its bejeweled helmet, caring nothing for the head that wears it. |
| 4 | Two dullahans seek the same head, both believing they're the actual owner. |
^dullahan-legends
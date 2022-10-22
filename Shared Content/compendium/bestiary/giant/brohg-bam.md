---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/huge
- monster/type/giant
aliases: ["B'rohg"]
statblock: true
"name": "B'rohg"
"size": "Huge"
"type": "giant"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "21"
- !!int "14"
- !!int "21"
- !!int "5"
- !!int "10"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Athletics": !!int "8"
  "Survival": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The b'rohg makes four Fist attacks or two Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60/240 ft., one target. Hit: 23\
    \ (4d8 + 5) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The b'rohg uses all four of its hands to target one Large or smaller creature\
    \ it can see within 10 feet of itself. The target must succeed on a DC 16 Dexterity\
    \ saving throw or be [grappled](/rules/conditions.md#grappled) (escape DC 16).\
    \ Until this grapple ends, the b'rohg can't make Fist attacks or Rock attacks,\
    \ and the target takes 49 (8d10 + 5) bludgeoning damage at the start of each of\
    \ its turns. A creature reduced to 0 hit points by this damage is ripped into\
    \ four pieces."
  "name": "Hideous Rend"
"source":
- "BAM"
- "LoX"
name: B'rohg
image: "[[B'rohg.png]]"
---

# B'rohg

```statblock
"name": "B'rohg"
"size": "Huge"
"type": "giant"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "92"
"hit_dice": "8d12 + 40"
"stats":
- !!int "21"
- !!int "14"
- !!int "21"
- !!int "5"
- !!int "10"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Athletics": !!int "8"
  "Survival": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The b'rohg makes four Fist attacks or two Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 60/240 ft., one target. Hit: 23\
    \ (4d8 + 5) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The b'rohg uses all four of its hands to target one Large or smaller creature\
    \ it can see within 10 feet of itself. The target must succeed on a DC 16 Dexterity\
    \ saving throw or be [grappled](/rules/conditions.md#grappled) (escape DC 16).\
    \ Until this grapple ends, the b'rohg can't make Fist attacks or Rock attacks,\
    \ and the target takes 49 (8d10 + 5) bludgeoning damage at the start of each of\
    \ its turns. A creature reduced to 0 hit points by this damage is ripped into\
    \ four pieces."
  "name": "Hideous Rend"
"source":
- "BAM"
- "LoX"
"image": "[[B'rohg.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 16, Light of Xaryxis*

## Description

B'rohgs are broad-shouldered, four-armed Giants, 15 feet tall, with burnt-orange skin. They have flat noses, pointed ears, and long hair that grows down the backs and sides of their otherwise bald heads. They wear simple garb and like to hurl heavy rocks. A b'rohg can wield a weapon with each of its four arms, but it prefers to pound enemies with its fists and rip smaller creatures apart with its bare hands.

B'rohgs communicate with one another using grunts and basic hand signals; they have no spoken or written language. They prefer to be left alone and for that reason don't normally pose a threat to smaller creatures. Because of their size and strength, they are popular attractions in gladiatorial arenas, where they are coerced into fighting for food.

B'rohgs are accustomed to eking out a meager existence in their natural habitat, and they rarely bond with other kinds of creatures. A b'rohg that benefits from a stranger's act of kindness is at first puzzled by the effort, then wary. If this kindness is sufficient to earn the creature's trust, the b'rohg will try to repay the stranger, perhaps by carrying their gear or helping them navigate perilous terrain. A solitary b'rohg that is befriended by a group of adventurers might follow them around for a while, but it will soon tire of their company and once again seek out others of its own kind.
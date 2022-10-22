---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/large
- monster/type/monstrosity
aliases: ["Fleecemane Lion"]
statblock: true
"name": "Fleecemane Lion"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "14"
- !!int "10"
"speed": "walk 50 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lion moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the lion can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a 10-foot running start, the lion can long jump up to 25 feet."
  "name": "Running Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion has advantage on saving throws against any spell that targets\
    \ only the lion (not an area). If the lion's saving throw succeeds and the spell\
    \ is of 4th level or lower, the spell has no effect on the lion and instead targets\
    \ the caster."
  "name": "Spell Turning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion makes two attacks: one with its bite and one with its claw."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion emits a magical roar. Each creature within 60 feet of the lion\
    \ that can hear the roar must succeed on a DC 12 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the lion until the end of the lion's next turn."
  "name": "Roar (Costs 2 Actions)"
"source":
- "MOT"
name: Fleecemane Lion
image: "[[Fleecemane Lion.png]]"
---

# Fleecemane Lion

```statblock
"name": "Fleecemane Lion"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "14"
- !!int "10"
"speed": "walk 50 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lion moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is [prone](/rules/conditions.md#prone), the lion can make one\
    \ bite attack against it as a bonus action."
  "name": "Pounce"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a 10-foot running start, the lion can long jump up to 25 feet."
  "name": "Running Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion has advantage on saving throws against any spell that targets\
    \ only the lion (not an area). If the lion's saving throw succeeds and the spell\
    \ is of 4th level or lower, the spell has no effect on the lion and instead targets\
    \ the caster."
  "name": "Spell Turning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion makes two attacks: one with its bite and one with its claw."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion makes one claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lion emits a magical roar. Each creature within 60 feet of the lion\
    \ that can hear the roar must succeed on a DC 12 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ of the lion until the end of the lion's next turn."
  "name": "Roar (Costs 2 Actions)"
"source":
- "MOT"
"image": "[[Fleecemane Lion.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 223*

## Description

Twice the size of normal lions and with resplendent manes of silvery or golden hair, fleecemane lions prowl and protect sites imbued with the power of Nyx. While the specifics of these massive lions' connection to Nyx is unclear, many myths tell of the deadly predators stalking mortals and spreading fear until they're ultimately defeated by a brave hunter. As a result, overcoming a fleecemane lion is widely considered an early step on the road to becoming a true hero.
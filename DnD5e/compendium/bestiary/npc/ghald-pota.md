---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/large
- monster/type/humanoid/sahuagin
aliases: ["Ghald"]
statblock: true
"name": "Ghald"
"size": "Large"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "19"
- !!int "17"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "7"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Sahuagin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Ghald has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Ghald scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald can breathe air and water, but he needs to be submerged at least\
    \ once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald can magically command any shark within 120 feet of him, using a limited\
    \ telepathy."
  "name": "Shark Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald deals an extra 14 (4d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Ghald's that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Ghald doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald makes three attacks, one with his bite and two with his shortswords."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or Small creature\
    \ against which Ghald has advantage on the attack roll. Hit: 9 (2d4 + 4) bludgeoning\
    \ damage, and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until the grapple ends, the target can't breathe, and Ghald has advantage\
    \ on attack rolls against it."
  "name": "Garrote"
"source":
- "PotA"
name: Ghald
image: "[[Ghald.png]]"
---

# Ghald

```statblock
"name": "Ghald"
"size": "Large"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "102"
"hit_dice": "12d10 + 36"
"stats":
- !!int "19"
- !!int "17"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
  "Intelligence": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "7"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Sahuagin"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, Ghald has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Ghald scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald can breathe air and water, but he needs to be submerged at least\
    \ once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald can magically command any shark within 120 feet of him, using a limited\
    \ telepathy."
  "name": "Shark Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald deals an extra 14 (4d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Ghald's that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Ghald doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ghald makes three attacks, one with his bite and two with his shortswords."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4\
    \ + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or Small creature\
    \ against which Ghald has advantage on the attack roll. Hit: 9 (2d4 + 4) bludgeoning\
    \ damage, and the target is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until the grapple ends, the target can't breathe, and Ghald has advantage\
    \ on attack rolls against it."
  "name": "Garrote"
"source":
- "PotA"
"image": "[[Ghald.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 210*

## Description

Ghald is an 8-foot-tall, four-armed sahuagin who works with a partner, Unferth, for the Kraken Society in Yartar. He's careful not to emerge from his hiding place beneath the docks unless it's dark and rainy, and even then he hides under a bulky cloak. He and Unferth serve as the Kraken Society's top operatives in this part of the North, and specialize in advancing the agenda of the society through theft, intimidation, and assassination.

When the thieves' guild known as the Hand of Yartar comes into possession of a powerful elemental weapon (see the "Dark Dealings in Yartar" side trek in chapter 6), Ghald and Unferth make sure the Kraken Society comes in with the top bid. They then make sure that no one else interferes.
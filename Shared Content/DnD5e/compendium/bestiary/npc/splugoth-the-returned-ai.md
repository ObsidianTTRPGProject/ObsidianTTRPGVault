---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/small
- monster/type/humanoid/goblinoid
aliases: ["Splugoth the Returned"]
statblock: true
"name": "Splugoth the Returned"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "4"
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, Elvish, Goblin"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as two or more of Splugoth's allies are within 5 feet of him and\
    \ are not [incapacitated](/rules/conditions.md#incapacitated), attack rolls against\
    \ him are made with disadvantage."
  "name": "Defensive Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Touch of Madness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth makes two attacks with his dagger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth remembers and repeats aloud a few words from a place he entered\
    \ while walking back from the next world to this one. Each creature of his choice\
    \ within 30 feet of him that can hear him must succeed on a DC 12 Wisdom saving\
    \ throw or be [stunned](/rules/conditions.md#stunned) until the end of its next\
    \ turn."
  "name": "Word From Beyond (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Splugoth can see hits him with a melee weapon attack, the\
    \ weapon snags on a pocket of residual resurrectional energy and is caught fast.\
    \ The attack is negated and the weapon cannot be used until the creature succeeds\
    \ on a DC 12 Strength (Athletics) check as an action to pull it out of Splugoth.\
    \ Natural weapons can have their attacks negated by this feature, but can then\
    \ be retracted automatically at the end of the attacking creature's turn."
  "name": "Absorb Attack"
"source":
- "AI"
name: Splugoth the Returned
image: "[[Splugoth the Returned.png]]"
---

# Splugoth the Returned

```statblock
"name": "Splugoth the Returned"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "4"
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic, Elvish, Goblin"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As long as two or more of Splugoth's allies are within 5 feet of him and\
    \ are not [incapacitated](/rules/conditions.md#incapacitated), attack rolls against\
    \ him are made with disadvantage."
  "name": "Defensive Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth can take the Disengage or Hide action as a bonus action on each\
    \ of his turns."
  "name": "Nimble Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Touch of Madness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth makes two attacks with his dagger."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Splugoth remembers and repeats aloud a few words from a place he entered\
    \ while walking back from the next world to this one. Each creature of his choice\
    \ within 30 feet of him that can hear him must succeed on a DC 12 Wisdom saving\
    \ throw or be [stunned](/rules/conditions.md#stunned) until the end of its next\
    \ turn."
  "name": "Word From Beyond (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Splugoth can see hits him with a melee weapon attack, the\
    \ weapon snags on a pocket of residual resurrectional energy and is caught fast.\
    \ The attack is negated and the weapon cannot be used until the creature succeeds\
    \ on a DC 12 Strength (Athletics) check as an action to pull it out of Splugoth.\
    \ Natural weapons can have their attacks negated by this feature, but can then\
    \ be retracted automatically at the end of the attacking creature's turn."
  "name": "Absorb Attack"
"source":
- "AI"
"image": "[[Splugoth the Returned.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 213*

## Description

> [!quote]-  
> 
> I'm going to give you a piece of advice. Don't trust Acquisitions Incorporated. And never, ever, ever trust Omin Dran. Wait, that's two pieces of advice. You owe me.

Sometimes a goblin can't catch a break. First, you fall in with a cult that works for the release of a death god. Then you get taken prisoner by a group of sociopathic adventurers who end up letting you die after you save their sorry lives. One minute, you're a dead goblin named Splug. And then you're alive again, and it seems like a really good idea to play up the drama of resurrection with a cool new name-and a master plan for cold, cold revenge against those who betrayed you.

Every once in a while, the (accidentally) capricious and (totally unintentionally) self-centered nature of an Acquisitions Incorporated franchise might incur some collateral damage among followers, hirelings, and staff. When that happens, the collateral damage sometimes inspires some collateral damage of its own. No one is entirely sure how many times Splugoth the Returned has actually returned from the dead. But as the point goblin for the group known as the Six (see "Factions and Rivals" in chapter 3), he's made vengeance against Acq Inc and Omin Dran his life's work. And then the work of his next life. And the one after that.
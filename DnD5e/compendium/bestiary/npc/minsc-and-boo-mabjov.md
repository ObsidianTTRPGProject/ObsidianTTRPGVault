---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Minsc and Boo!"]
statblock: true
"name": "Minsc and Boo!"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
  "Survival": !!int "8"
"senses": "passive Perception 14"
"languages": "Common, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of his turn, Minsc can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against him have advantage until\
    \ the start of his next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Minsc's favored enemy is evil. When he hits an evil creature with a melee\
    \ attack he deals an additional 1d6 slashing damage."
  "name": "Favored Enemy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Boo is a miniature giant space hamster and has the statistics of a [rat](/compendium/bestiary/beast/rat.md).\
    \ As a bonus action, Minsc can talk to Boo and gain the inspiration to go into\
    \ a berserker fury. While in this berserking fury Minsc gains the following advantages:\n\
    \n- Minsc has advantage on Strength checks and Strength saving throws.\n- Minsc\
    \ gains a +4 bonus to the damage rolls when using a melee weapon.\n- Minsc has\
    \ resistance to bludgeoning, piercing, and slashing damage.\n- Minsc can make\
    \ a single melee weapon attack as a bonus\n- Minsc can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened) while raging. If Minsc is [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened) when he enters his berserking\
    \ fury, the effect is suspended for the duration of the rage\n- If Minsc drops\
    \ to 0 hit points while in a berserking fury and doesn't die outright, he can\
    \ make a DC 10 Constitution saving throw. If he succeeds, he drops to 1 hit point\
    \ instead. Each time he uses this feature after the first, the DC increases by\
    \ 5. After 24 hours, the DC resets to 10."
  "name": "Go for the eyes Boo"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Boo is Minsc's animal companion. Boo is a miniature giant space hamster\
    \ and has the statistics of a [rat](/compendium/bestiary/beast/rat.md)."
  "name": "Boo, The Miniature Giant Space Hamster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Minsc makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage"
  "name": "Great Sword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Boo takes damage, Minsc can choose to take the damage instead."
  "name": "Run, Boo, run!"
"source":
- "MaBJoV"
name: Minsc and Boo!
image: "[[Minsc and Boo!.png]]"
---

# Minsc and Boo!

```statblock
"name": "Minsc and Boo!"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
  "Survival": !!int "8"
"senses": "passive Perception 14"
"languages": "Common, Sylvan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of his turn, Minsc can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against him have advantage until\
    \ the start of his next turn."
  "name": "Reckless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Minsc's favored enemy is evil. When he hits an evil creature with a melee\
    \ attack he deals an additional 1d6 slashing damage."
  "name": "Favored Enemy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Boo is a miniature giant space hamster and has the statistics of a [rat](/compendium/bestiary/beast/rat.md).\
    \ As a bonus action, Minsc can talk to Boo and gain the inspiration to go into\
    \ a berserker fury. While in this berserking fury Minsc gains the following advantages:\n\
    \n- Minsc has advantage on Strength checks and Strength saving throws.\n- Minsc\
    \ gains a +4 bonus to the damage rolls when using a melee weapon.\n- Minsc has\
    \ resistance to bludgeoning, piercing, and slashing damage.\n- Minsc can make\
    \ a single melee weapon attack as a bonus\n- Minsc can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened) while raging. If Minsc is [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened) when he enters his berserking\
    \ fury, the effect is suspended for the duration of the rage\n- If Minsc drops\
    \ to 0 hit points while in a berserking fury and doesn't die outright, he can\
    \ make a DC 10 Constitution saving throw. If he succeeds, he drops to 1 hit point\
    \ instead. Each time he uses this feature after the first, the DC increases by\
    \ 5. After 24 hours, the DC resets to 10."
  "name": "Go for the eyes Boo"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Boo is Minsc's animal companion. Boo is a miniature giant space hamster\
    \ and has the statistics of a [rat](/compendium/bestiary/beast/rat.md)."
  "name": "Boo, The Miniature Giant Space Hamster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Minsc makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage"
  "name": "Great Sword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Boo takes damage, Minsc can choose to take the damage instead."
  "name": "Run, Boo, run!"
"source":
- "MaBJoV"
"image": "[[Minsc and Boo!.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 68*

## Description

Minsc is a berserker warrior from the nation of Rasheman in the utter east, though his affinity for animals speaks to his skill as a hunter and tracker as well. He originally came to the Sword Coast on a dejemma, a ritual journey to manhood, as the bodyguard of a young Wychalarn of Rasheman named Dynaheir. But Dynaheir was killed while Minsc was adventuring with the Bhaalspawn known as Abdel Adrian.

Minsc continued his adventures with Abdel until he had the misfortune of being [petrified](/rules/conditions.md#petrified) by an evil wizard. He remained a [petrified](/rules/conditions.md#petrified) statue for nearly a century before another wizard released him. Everyone and everything that he had known had passed on, so Minsc decided not to return to Rasheman, but continue his adventures on the Sword Coast. During those adventures he met Suldil. He felt an affinity for the woman due to the fact that they both lost centuries of their lives to magic. When he has time away from his other adventures, Minsc helps track down prospective heroes who Suldil thinks might make good members of the Knights of Bahamut. Minsc secretly hopes that she will one day think that Boo will make a good member of the Knights of Bahamut.

Minsc does not have a strong hold on reality, as evidenced by his continued dependence on his animal companion Boo, a creature that he claims is a miniature giant space hamster. Apparently such things do exist somewhere in the Realms, but Minsc has surely taken too many blows to the head. Minsc has a very simplistic view of the world and is often quick to decide whether or not someone is evil and should be attacked. Fortunately, he is also kind by nature and determined to be a hero. He is somewhat unstable and is prone to flying into a rage.

**Minsc as a Contact.** Minsc is the primary contact for members of the Knights of Bahamut at low levels. He is able to convince strange companions to join you in your adventures. Your group can only have one such companion at a time.

**Strange Companions via Minsc**

| Companion | Required Level | Stat Block |
|-----------|----------------|------------|
| Goo—Boo's miniature space hamster cousin | 1 | Rat |
| Murderoid—the living moon | 3 | A large point of light in the night sky. Also, a voice that speaks in your head at night... about murdering your enemies |
| Delphinid—the space dolphin | 3 | Dolphin with fly speed of 30 ft. |
| Backpack guy—the space mimic | 7 | Mimic that can only assume the form of a backpack. Refuses to fight unless worn |
| Basharin—a blind beholder | 7 | Beholder that does not have the antimagic cone trait and whose only action is bite |
^strange-companions-via-minsc
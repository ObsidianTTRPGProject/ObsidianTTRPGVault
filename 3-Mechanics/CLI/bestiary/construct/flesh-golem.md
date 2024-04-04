---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Flesh Golem"]
---
# [Flesh Golem](3-Mechanics\CLI\bestiary\construct/flesh-golem.md)
*Source: Monster Manual p. 169. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Flesh Golem"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a\
    \ dice: d6|avg|noform (d6). On a 6, the golem goes berserk. On each of its\
    \ turns while berserk, the golem attacks the nearest creature it can see. If no\
    \ creature is near enough to move to and attack, the golem attacks an object,\
    \ with preference for an object smaller than itself. Once the golem goes berserk,\
    \ it continues to do so until it is destroyed or regains all its hit points.\n\
    \nThe golem's creator, if within 60 feet of the berserk golem, can try to calm\
    \ it by speaking firmly and persuasively. The golem must be able to hear its creator,\
    \ who must take an action to make a DC 15 Charisma ([Persuasion](/3-Mechanics/CLI/rules/skills.md#Persuasion))\
    \ check. If the check succeeds, the golem ceases being berserk. If it takes damage\
    \ while still at 40 hit points or fewer, the golem might go berserk again."
  "name": "Berserk"
- "desc": "If the golem takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion of Fire"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "Whenever the golem is subjected to lightning damage, it takes no damage\
    \ and instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/construct/token/flesh-golem.webp"
```
^statblock
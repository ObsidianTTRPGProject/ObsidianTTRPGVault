---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/construct
aliases: ["Reduced-Threat Flesh Golem"]
statblock: true
"name": "Reduced-Threat Flesh Golem"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "46"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points.\n\nThe golem's creator, if within\
    \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
    \ The golem must be able to hear its creator, who must take an action to make\
    \ a DC 13 Charisma (Persuasion) check. If the check succeeds, the golem ceases\
    \ being berserk. If it takes damage while still at 40 hit points or fewer, the\
    \ golem might go berserk again."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the golem takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to lightning damage, it takes no damage\
    \ and instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "TftYP"
name: Reduced-Threat Flesh Golem
image: "[[Reduced-Threat Flesh Golem.png]]"
---

# Reduced-Threat Flesh Golem

```statblock
"name": "Reduced-Threat Flesh Golem"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "46"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points.\n\nThe golem's creator, if within\
    \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
    \ The golem must be able to hear its creator, who must take an action to make\
    \ a DC 13 Charisma (Persuasion) check. If the check succeeds, the golem ceases\
    \ being berserk. If it takes damage while still at 40 hit points or fewer, the\
    \ golem might go berserk again."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the golem takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion of Fire"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to lightning damage, it takes no damage\
    \ and instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "TftYP"
"image": "[[Reduced-Threat Flesh Golem.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*
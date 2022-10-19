---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/large
- monster/type/construct
aliases: ["Reduced-Threat Clay Golem"]
statblock: true
"name": "Reduced-Threat Clay Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "14d10 + 56"
"stats":
- !!int "20"
- !!int "9"
- !!int "18"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "walk 20 ft."
"damage_immunities": "acid; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to acid damage, it takes no damage and\
    \ instead regains a number of hit points equal to the acid damage dealt."
  "name": "Acid Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 60 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
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
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 13 Constitution saving throw or have its hit point maximum reduced by an amount\
    \ equal to the damage taken. The target dies if this attack reduces its hit point\
    \ maximum to 0. The reduction lasts until removed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of its next turn, the golem magically gains a +2 bonus to\
    \ its AC, has advantage on Dexterity saving throws, and can use its slam attack\
    \ as a bonus action."
  "name": "Haste (Recharge 5-6)"
"source":
- "TftYP"
name: Reduced-Threat Clay Golem
image: "[[Reduced-Threat Clay Golem.png]]"
---

# Reduced-Threat Clay Golem

```statblock
"name": "Reduced-Threat Clay Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "14d10 + 56"
"stats":
- !!int "20"
- !!int "9"
- !!int "18"
- !!int "3"
- !!int "8"
- !!int "1"
"speed": "walk 20 ft."
"damage_immunities": "acid; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A reduced-threat monster takes a −2 penalty on attack rolls (included in\
    \ the stat block), ability checks (included in the stat block for skill proficiencies),\
    \ saving throws (included in the stat block for saving throw proficiencies), and\
    \ saving throw DCs (included in the stat block)."
  "name": "Reduced Threat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem is subjected to acid damage, it takes no damage and\
    \ instead regains a number of hit points equal to the acid damage dealt."
  "name": "Acid Absorption"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 60 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points."
  "name": "Berserk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
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
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 13 Constitution saving throw or have its hit point maximum reduced by an amount\
    \ equal to the damage taken. The target dies if this attack reduces its hit point\
    \ maximum to 0. The reduction lasts until removed by the  [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Until the end of its next turn, the golem magically gains a +2 bonus to\
    \ its AC, has advantage on Dexterity saving throws, and can use its slam attack\
    \ as a bonus action."
  "name": "Haste (Recharge 5-6)"
"source":
- "TftYP"
"image": "[[Reduced-Threat Clay Golem.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 113*
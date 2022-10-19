---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/construct
aliases: ["Clay Golem"]
statblock: true
"name": "Clay Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "133"
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
"cr": "9"
"traits":
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Constitution saving throw or have its hit point maximum reduced by an amount\
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
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "WDMM"
name: Clay Golem
image: "[[Clay Golem.png]]"
---

# Clay Golem

```statblock
"name": "Clay Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "133"
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
"cr": "9"
"traits":
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 15 Constitution saving throw or have its hit point maximum reduced by an amount\
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
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "WDMM"
"image": "[[Clay Golem.png]]"
```
^statblock

*Source: Monster Manual p. 168, Curse of Strahd, The Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage*

## Description

Sculpted from clay, this bulky golem stands head and shoulders taller than most human-sized creatures. It is human shaped, but its proportions are off.

Clay golems are often divinely endowed with purpose by priests of great faith. However, clay is a weak vessel for life force. If the golem is damaged, the elemental spirit bound into it can break free. Such a golem runs amok, smashing everything around it until it is destroyed or completely repaired.

**Golems.** Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.

To create a golem, one requires a manual of golems (see the Dungeon Master's Guide). The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.

**Elemental Spirit in Material Form.**  The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.

After constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.

A golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.

A golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.

**Ageless Guardians.**  Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.

**Blind Obedience.**  When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is [incapacitated](/rules/conditions.md#incapacitated), it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.

**Constructed Nature.**  A golem doesn't require air, food, drink, or sleep.
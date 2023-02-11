---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/construct
aliases: ["Flesh Golem"]
statblock: true
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
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points.\n\nThe golem's creator, if within\
    \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
    \ The golem must be able to hear its creator, who must take an action to make\
    \ a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases\
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
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
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
name: Flesh Golem
image: "[[Flesh Golem.png]]"
---

# Flesh Golem

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
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a\
    \ d6. On a 6, the golem goes berserk. On each of its turns while berserk, the\
    \ golem attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, the golem attacks an object, with preference for an object\
    \ smaller than itself. Once the golem goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points.\n\nThe golem's creator, if within\
    \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
    \ The golem must be able to hear its creator, who must take an action to make\
    \ a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases\
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
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
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
"image": "[[Flesh Golem.png]]"
```
^statblock

*Source: Monster Manual p. 169, Curse of Strahd, The Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*

## Description

A flesh golem is a grisly assortment of humanoid body parts stitched and bolted together into a muscled brute imbued with formidable strength. Its brain is capable of simple reason, though its thoughts are no more sophisticated than those of a young child. The golem's muscle tissue responds to the power of lightning, invigorating the creature with vitality and strength. Powerful enchantments protect the golem's skin, deflecting spells and all but the most potent weapons.

A flesh golem lurches with a stiff-jointed gait, as if not in complete control of its body. Its dead flesh isn't an ideal container for an elemental spirit, which sometimes howls incoherently to vent its outrage. If the spirit breaks free of its creator's will, the golem goes berserk until calmed, or until its shell of flesh is destroyed or completely healed.

**Golems.** Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.

To create a golem, one requires a manual of golems (see the Dungeon Master's Guide). The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.

**Elemental Spirit in Material Form.**  The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.

After constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.

A golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.

A golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.

**Ageless Guardians.**  Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.

**Blind Obedience.**  When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is [incapacitated](/rules/conditions.md#incapacitated), it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.

**Constructed Nature.**  A golem doesn't require air, food, drink, or sleep.
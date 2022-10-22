---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-thp
- monster/size/medium
- monster/type/aberration/shapeshifter
aliases: ["Usagt"]
statblock: true
"name": "Usagt"
"size": "Medium"
"type": "aberration"
"subtype": "shapeshifter"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "20"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "History": !!int "5"
  "Performance": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 100 ft., passive Perception 18"
"languages": "all, telepathy 30 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt's innate spellcasting ability is Charisma (spell save DC 15).\
    \ It can cast the following spells, requiring no spell components:\n\nAt will:\
    \ [banishment](/compendium/spells/banishment.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt's true form is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt can use its action to polymorph into a Small, Medium, or Large\
    \ humanoid it has seen in person or telepathically, or back into its true form.\
    \ Its statistics, other than its size, are the same in each form. While polymorphed,\
    \ the usagt is not [invisible](/rules/conditions.md#invisible). Its new form appears\
    \ to wear clothes, carry equipment, and even wield weapons, but these are all\
    \ parts of the usagt itself; they vanish if dropped or removed from the creature.\
    \ It can't activate, use, wield, or otherwise benefit from any of its apparent\
    \ equipment. It reverts to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage plus 11 (2d6 + 4) psychic damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt targets one creature it can see within 30 feet of it. The target\
    \ must contest its Charisma ([Deception](/rules/skills.md#Deception)) check against\
    \ the usagt's Wisdom (Insight) check.\n\nThe target has advantage on the roll\
    \ if it is immune to being [charmed](/rules/conditions.md#charmed). A target can\
    \ choose to fail this check.\n\nIf the usagt wins, it magically learns the identity\
    \ of a creature from the target's past, someone the target wishes it could speak\
    \ to again or with whom the target has left something unsaid. If somehow no such\
    \ creature exists in the target's past, the usagt learns that instead."
  "name": "Personal Insight"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the usagt takes damage, it can choose to revert to its default, [invisible](/rules/conditions.md#invisible)\
    \ form and move up to 15 feet without provoking opportunity attacks."
  "name": "Invisibility Response (Recharges When the Usagt Uses Its Shapechanger Ability)"
"source":
- "AitFR-THP"
name: Usagt
image: "[[Usagt.png]]"
---

# Usagt

```statblock
"name": "Usagt"
"size": "Medium"
"type": "aberration"
"subtype": "shapeshifter"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "20"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "History": !!int "5"
  "Performance": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 100 ft., passive Perception 18"
"languages": "all, telepathy 30 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt's innate spellcasting ability is Charisma (spell save DC 15).\
    \ It can cast the following spells, requiring no spell components:\n\nAt will:\
    \ [banishment](/compendium/spells/banishment.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt's true form is [invisible](/rules/conditions.md#invisible)."
  "name": "Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt can use its action to polymorph into a Small, Medium, or Large\
    \ humanoid it has seen in person or telepathically, or back into its true form.\
    \ Its statistics, other than its size, are the same in each form. While polymorphed,\
    \ the usagt is not [invisible](/rules/conditions.md#invisible). Its new form appears\
    \ to wear clothes, carry equipment, and even wield weapons, but these are all\
    \ parts of the usagt itself; they vanish if dropped or removed from the creature.\
    \ It can't activate, use, wield, or otherwise benefit from any of its apparent\
    \ equipment. It reverts to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt makes two attacks with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage plus 11 (2d6 + 4) psychic damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The usagt targets one creature it can see within 30 feet of it. The target\
    \ must contest its Charisma ([Deception](/rules/skills.md#Deception)) check against\
    \ the usagt's Wisdom (Insight) check.\n\nThe target has advantage on the roll\
    \ if it is immune to being [charmed](/rules/conditions.md#charmed). A target can\
    \ choose to fail this check.\n\nIf the usagt wins, it magically learns the identity\
    \ of a creature from the target's past, someone the target wishes it could speak\
    \ to again or with whom the target has left something unsaid. If somehow no such\
    \ creature exists in the target's past, the usagt learns that instead."
  "name": "Personal Insight"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the usagt takes damage, it can choose to revert to its default, [invisible](/rules/conditions.md#invisible)\
    \ form and move up to 15 feet without provoking opportunity attacks."
  "name": "Invisibility Response (Recharges When the Usagt Uses Its Shapechanger Ability)"
"source":
- "AitFR-THP"
"image": "[[Usagt.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: The Hidden Page p. 14*

## Description

These peculiar creatures originate on a tranquil, lawful plane where they lead gentle, languid existences. They enjoy the experiences of life—in memory and in practice—but have curiously few ambitions. Their natural lifespan is centuries long, and they give little thought to the passage of time.

Some scholars of the planes believe usagt are not organisms in any traditional sense but a kind of intelligent being made of notions and psychic matter.

**Curiously Shy.** An usagt's true form is amorphous and [invisible](/rules/conditions.md#invisible). They change shape based on the thoughts and memories they observe in other creatures' memories. Each usagt thus has a peculiar sense of itself and its peers, based on what shapes it can take in what order, rather than any visual cues of its own.

**Cunning Observers.** The favorite pastime of most usagt is putting on little improvised plays with others of its kind, changing shapes throughout. Usagt observe other creatures and detect their thoughts to broaden the catalog of characters they can portray.

**Strange Nature.** Usagt do not reproduce. An usagt requires no food, drink, or sleep, but enjoys them when it can. It does require air.
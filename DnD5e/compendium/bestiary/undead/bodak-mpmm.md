---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
aliases: ["Bodak"]
statblock: true
"name": "Bodak"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "7"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Abyssal, the languages it knew in life"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see the bodak's eyes starts its turn within 30\
    \ feet of the bodak, the bodak can force it to make a DC 13 Constitution saving\
    \ throw if the bodak isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and can see the creature. If the saving throw fails by 5 or more, the creature\
    \ is reduced to 0 hit points unless it is immune to the [frightened](/rules/conditions.md#frightened)\
    \ condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed\
    \ save.\n\nUnless surprised, a creature can avert its eyes to avoid the saving\
    \ throw at the start of its turn. If the creature does so, it has disadvantage\
    \ on attack rolls against the bodak until the start of its next turn. If the creature\
    \ looks at the bodak in the meantime, that creature must immediately make the\
    \ saving throw."
  "name": "Death Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak takes 5 radiant damage when it starts its turn in sunlight. While\
    \ in sunlight, it has disadvantage on attack rolls and ability checks."
  "name": "Sunlight Hypersensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that the bodak can see within 60 feet of it must make a DC\
    \ 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Withering Gaze"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak activates or deactivates this deathly aura. While active, the\
    \ aura deals 5 necrotic damage to any creature that ends its turn within 30 feet\
    \ of the bodak. Undead and Fiends ignore this effect."
  "name": "Aura of Annihilation"
"source":
- "MPMM"
- "VGM"
name: Bodak
image: "[[Bodak.png]]"
---

# Bodak

```statblock
"name": "Bodak"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "7"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Abyssal, the languages it knew in life"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see the bodak's eyes starts its turn within 30\
    \ feet of the bodak, the bodak can force it to make a DC 13 Constitution saving\
    \ throw if the bodak isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and can see the creature. If the saving throw fails by 5 or more, the creature\
    \ is reduced to 0 hit points unless it is immune to the [frightened](/rules/conditions.md#frightened)\
    \ condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed\
    \ save.\n\nUnless surprised, a creature can avert its eyes to avoid the saving\
    \ throw at the start of its turn. If the creature does so, it has disadvantage\
    \ on attack rolls against the bodak until the start of its next turn. If the creature\
    \ looks at the bodak in the meantime, that creature must immediately make the\
    \ saving throw."
  "name": "Death Gaze"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak takes 5 radiant damage when it starts its turn in sunlight. While\
    \ in sunlight, it has disadvantage on attack rolls and ability checks."
  "name": "Sunlight Hypersensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that the bodak can see within 60 feet of it must make a DC\
    \ 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Withering Gaze"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The bodak activates or deactivates this deathly aura. While active, the\
    \ aura deals 5 necrotic damage to any creature that ends its turn within 30 feet\
    \ of the bodak. Undead and Fiends ignore this effect."
  "name": "Aura of Annihilation"
"source":
- "MPMM"
- "VGM"
"image": "[[Bodak.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 64, Volo's Guide to Monsters p. 127*

## Description

A bodak is the undying remains of someone who revered Orcus. Devoid of life and soul, it exists only to cause death.

A worshiper of Orcus can take ritual vows while carving the demon lord's symbol on their chest over the heart. Orcus's power flays body, mind, and soul, leaving behind a sentient husk that consumes life energy near it. Most bodaks come into being in this way, then are unleashed to spread death in Orcus's name.

Bodaks are extensions of Orcus's will outside the Abyss, serving the demon prince's aims and other minions. Orcus can recall anything a bodak sees or hears. If he so chooses, he can speak through a bodak to address his enemies and followers directly.

A bodak retains vague impressions of its past life. It seeks out its former allies and enemies alike to destroy them, as its warped soul seeks to erase anything connected to its former life. Minions of Orcus are the one exception to this compulsion; a bodak recognizes them as kindred souls and spares them from its wrath. Anyone who knew the individual before its transformation into a bodak can recognize mannerisms or other subtle clues to its original identity.

## Environment

swamp, underdark, urban
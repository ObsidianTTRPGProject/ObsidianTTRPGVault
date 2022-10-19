---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead/sorcerer
- monster/environment/desert
- monster/environment/swamp
- monster/environment/underdark
aliases: ["Skull Lord"]
statblock: true
"name": "Skull Lord"
"size": "Medium"
"type": "undead"
"subtype": "sorcerer"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "21"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "12"
  "History": !!int "8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned,\
  \ stunned, unconscious"
"senses": "darkvision 60 ft., passive Perception 22"
"languages": "all the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull, lord casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 18):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)\n\n2/day each: [dimension\
    \ door](/compendium/spells/dimension-door.md), [fear](/compendium/spells/fear.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skull lord is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half the damage, the skull lord instead takes no damage\
    \ if it succeeds on the saving throw and only half damage if it fails, provided\
    \ it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skull lord fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 30 feet of the skull lord, any Undead ally of the skull lord\
    \ makes saving throws with advantage, and that ally regains 1d6 hit points whenever\
    \ it starts its turn there."
  "name": "Master of the Grave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord makes three Bone Staff or Deathly Ray attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage plus 21 (6d6) necrotic damage."
  "name": "Bone Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 27 (5d8\
    \ + 5) necrotic damage."
  "name": "Deathly Ray"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord makes one Bone Staff or Deathly Ray attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord moves up to its speed without provoking opportunity attack||opportunity\
    \ attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord summons up to five [skeletons](/compendium/bestiary/undead/skeleton.md)\
    \ or [zombies](/compendium/bestiary/undead/zombie.md) in unoccupied spaces within\
    \ 30 feet of it. They remain until destroyed. Undead summoned in this way roll\
    \ initiative, act in the next available turn, and obey the skull lord. The skull\
    \ lord can have no more than five Undead summoned by this ability at a time."
  "name": "Summon Undead (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Skull Lord
image: "[[Skull Lord.png]]"
---

# Skull Lord

```statblock
"name": "Skull Lord"
"size": "Medium"
"type": "undead"
"subtype": "sorcerer"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "21"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "12"
  "History": !!int "8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned,\
  \ stunned, unconscious"
"senses": "darkvision 60 ft., passive Perception 22"
"languages": "all the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull, lord casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 18):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)\n\n2/day each: [dimension\
    \ door](/compendium/spells/dimension-door.md), [fear](/compendium/spells/fear.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skull lord is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half the damage, the skull lord instead takes no damage\
    \ if it succeeds on the saving throw and only half damage if it fails, provided\
    \ it isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the skull lord fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While within 30 feet of the skull lord, any Undead ally of the skull lord\
    \ makes saving throws with advantage, and that ally regains 1d6 hit points whenever\
    \ it starts its turn there."
  "name": "Master of the Grave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord makes three Bone Staff or Deathly Ray attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage plus 21 (6d6) necrotic damage."
  "name": "Bone Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 27 (5d8\
    \ + 5) necrotic damage."
  "name": "Deathly Ray"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord makes one Bone Staff or Deathly Ray attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord moves up to its speed without provoking opportunity attack||opportunity\
    \ attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skull lord summons up to five [skeletons](/compendium/bestiary/undead/skeleton.md)\
    \ or [zombies](/compendium/bestiary/undead/zombie.md) in unoccupied spaces within\
    \ 30 feet of it. They remain until destroyed. Undead summoned in this way roll\
    \ initiative, act in the next available turn, and obey the skull lord. The skull\
    \ lord can have no more than five Undead summoned by this ability at a time."
  "name": "Summon Undead (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Skull Lord.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 220, Mordenkainen's Tome of Foes p. 230*

## Description

Skull lords have claimed vast regions of the Shadowfell as their dominion. From these blighted lands, they wage war against their rivals, commanding hordes of the undying in a bid to establish dominance. Yet skull lords always prove to be their own worst enemies; each is a combined being born from three hateful individuals, and they constantly plot against themselves.

Infighting and treachery brought skull lords into existence. The first of them appeared in the aftermath of Vecna's bid to conquer the world of Greyhawk, after the vampire Kas betrayed Vecna and took his eye and hand. In the confusion resulting from this turn of events, Vecna's warlords turned against each other, and his plans were dashed. In a rage, Vecna gathered up his generals and captains and bound them in groups of three, fusing them into abominations cursed to fight among themselves for all time. Since the first skull lords were exiled into the shadows, others have arisen, typically created from other leaders who betrayed their masters.

## Environment

desert, swamp, underdark
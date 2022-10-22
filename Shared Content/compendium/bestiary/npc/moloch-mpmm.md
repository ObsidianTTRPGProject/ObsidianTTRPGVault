---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fiend/devil
aliases: ["Moloch"]
statblock: true
"name": "Moloch"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "253"
"hit_dice": "22d10 + 132"
"stats":
- !!int "26"
- !!int "19"
- !!int "22"
- !!int "21"
- !!int "18"
- !!int "23"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "11"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [confusion](/compendium/spells/confusion.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [fly](/compendium/spells/fly.md), [major image](/compendium/spells/major-image.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Moloch fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Moloch dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch makes one Bite attack, one Claw attack, and one Many-Tailed Whip\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 26 (4d8\
    \ + 8) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) force damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 30 ft., one target. Hit: 13 (2d4\
    \ + 8) lightning damage plus 11 (2d10) thunder damage. If the target is a creature,\
    \ it must succeed on a DC 24 Strength saving throw or be pulled up to 30 feet\
    \ in a straight line toward Moloch."
  "name": "Many-Tailed Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch exhales in a 30-foot cube. Each creature in that area must succeed\
    \ on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever\
    \ it is holding, and become [frightened](/rules/conditions.md#frightened) of Moloch\
    \ for 1 minute. While [frightened](/rules/conditions.md#frightened) in this way,\
    \ a creature must take the Dash action and move away from Moloch by the safest\
    \ available route on each of its turns, unless there is nowhere to move, in which\
    \ case it needn't take the Dash action. If the creature ends its turn in a location\
    \ where it doesn't have line of sight to Moloch, the creature can repeat the saving\
    \ throw, ending the effect on itself on a success."
  "name": "Breath of Despair (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch teleports, along with any equipment he is wearing or carrying, up\
    \ to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch makes one Bite, Claw, or Many-Tailed Whip attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Moloch
image: "[[Moloch.png]]"
---

# Moloch

```statblock
"name": "Moloch"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "253"
"hit_dice": "22d10 + 132"
"stats":
- !!int "26"
- !!int "19"
- !!int "22"
- !!int "21"
- !!int "18"
- !!int "23"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "11"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [confusion](/compendium/spells/confusion.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [fly](/compendium/spells/fly.md), [major image](/compendium/spells/major-image.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md), [suggestion](/compendium/spells/suggestion.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Moloch fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Moloch dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch makes one Bite attack, one Claw attack, and one Many-Tailed Whip\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 26 (4d8\
    \ + 8) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) force damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 30 ft., one target. Hit: 13 (2d4\
    \ + 8) lightning damage plus 11 (2d10) thunder damage. If the target is a creature,\
    \ it must succeed on a DC 24 Strength saving throw or be pulled up to 30 feet\
    \ in a straight line toward Moloch."
  "name": "Many-Tailed Whip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch exhales in a 30-foot cube. Each creature in that area must succeed\
    \ on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever\
    \ it is holding, and become [frightened](/rules/conditions.md#frightened) of Moloch\
    \ for 1 minute. While [frightened](/rules/conditions.md#frightened) in this way,\
    \ a creature must take the Dash action and move away from Moloch by the safest\
    \ available route on each of its turns, unless there is nowhere to move, in which\
    \ case it needn't take the Dash action. If the creature ends its turn in a location\
    \ where it doesn't have line of sight to Moloch, the creature can repeat the saving\
    \ throw, ending the effect on itself on a success."
  "name": "Breath of Despair (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch teleports, along with any equipment he is wearing or carrying, up\
    \ to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch makes one Bite, Claw, or Many-Tailed Whip attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moloch uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Moloch.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 183, Mordenkainen's Tome of Foes p. 177*

## Description

> [!quote]- A quote from Mordenkainen  
> 
> Moloch obsesses over the power he lost, rather than thinking of the power he could gain elsewhere in the planes. What a pity he so wastes his potential.

Exiled from the Nine Hells, Moloch would do anything to reclaim his position. Long ago, Moloch earned his place among the other archdevils through the glory he won driving demons out of the Nine Hells. Asmodeus rewarded him by elevating him to the rulership of Malbolge.

For eons, Moloch ruled his domain, vying against the other archdevils as he sought still greater power. This animosity worked in Asmodeus's favor, since Asmodeus knew that Moloch's scheming helped keep the other archdevils in check. The arrangement unraveled, however, when Moloch took the night hag named Malagard for his advisor. Her poisonous words gradually convinced him to attempt to topple Asmodeus. The conspiracy nearly succeeded, but was ultimately thwarted. Moloch was stripped of his station and sentenced to death—only the timely use of a planar portal allowed him to escape.

Moloch wasted no time in preparing for his return. He amassed an army of devils and monsters and left them to make final preparations for invading the Nine Hells, while he ventured to the Material Plane in search of an artifact that would ensure his success. But while there, he became trapped, leaving his armies at the mercy of his enemies. They were destroyed in short order.

Moloch was rendered nearly powerless by this failure. He schemes of ways to reclaim his former status, but every time he enters the Nine Hells, he is demoted to an [imp](/compendium/bestiary/fiend/imp.md) and can't regain his normal powers until he leaves. Thus, he lives a split existence, sometimes plotting in Malbolge or other layers of the Hells and at other times wandering the planes in search of magical might or secrets that might help him win back his title.

Rumors suggest that he can often be found in Sigil, where he bargains with yugoloths to build yet another army with which he might invade Malbolge and wrest the throne from Glasya. Bereft as he is, he has little to offer in exchange, so he might bargain with mortals to gain their aid in acquiring coin, jewels, and other riches in return for knowledge about the Nine Hells and the other planes.

Most of Moloch's cultists have switched allegiance to one of the other archdevils, but idols constructed to honor him still stand in deep dungeons, their jeweled eyes and the remnants of power they hold drawing monstrous worshipers and unwise adventurers into places where his foul influence remains.
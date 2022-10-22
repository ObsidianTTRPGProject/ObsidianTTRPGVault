---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Drow Matron Mother"]
statblock: true
"name": "Drow Matron Mother"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "247"
"hit_dice": "33d8 + 99"
"stats":
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "21"
- !!int "22"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "10"
  "Religion": !!int "9"
  "Insight": !!int "11"
  "Perception": !!int "11"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Elvish, Undercommon"
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [command](/compendium/spells/command.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [clairvoyance](/compendium/spells/clairvoyance.md), [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [gate](/compendium/spells/gate.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [suggestion](/compendium/spells/suggestion.md)\n\
    \n2/day each: [banishment](/compendium/spells/banishment.md), [blade barrier](/compendium/spells/blade-barrier.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [hold person](/compendium/spells/hold-person.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow wields a [tentacle rod](/compendium/items/tentacle-rod.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two Demon Staff attacks or one Demon Staff attack and three\
    \ Tentacle Rod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with two\
    \ hands, plus 14 (4d6) psychic damage. The target must succeed on a DC 19 Wisdom\
    \ saving throw or become [frightened](/rules/conditions.md#frightened) of the\
    \ drow for 1 minute. The [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Demon Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature. Hit: 3 (1d6)\
    \ bludgeoning damage. If the target is hit three times by the [rod](/compendium/items/tentacle-rod.md)\
    \ on one turn, the target must succeed on a DC 15 Constitution saving throw or\
    \ suffer the following effects for 1 minute: the target's speed is halved, it\
    \ has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover,\
    \ on each of its turns, it can take either an action or a bonus action, but not\
    \ both. At the end of each of its turns, it can repeat the saving throw, ending\
    \ the effect on itself on a success."
  "name": "Tentacle Rod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area\
    \ up to 120 feet away from the drow. Each creature in the column must make a DC\
    \ 20 Dexterity saving throw, taking 14 (4d6) fire damage and 14 (4d6) radiant\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Divine Flame (2/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow bestows the Spider Queen's blessing on one ally she can see within\
    \ 30 feet of her. The ally takes 7 (2d6) psychic damage but has advantage on the\
    \ next attack roll it makes before the end of its next turn."
  "name": "Lolth's Fickle Favor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically summons a [glabrezu](/compendium/bestiary/fiend/glabrezu.md)\
    \ or a [yochlol](/compendium/bestiary/fiend/yochlol.md). The summoned creature\
    \ appears in an unoccupied space within 60 feet of its summoner, acts as an ally\
    \ of its summoner, and can't summon other demons. It remains for 10 minutes, until\
    \ it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Servant (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "An allied demon within 30 feet of the drow uses its reaction to make one\
    \ attack against a target of the drow's choice that she can see."
  "name": "Compel Demon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes one Demon Staff attack."
  "name": "Demon Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Drow Matron Mother
image: "[[Drow Matron Mother.png]]"
---

# Drow Matron Mother

```statblock
"name": "Drow Matron Mother"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "247"
"hit_dice": "33d8 + 99"
"stats":
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "21"
- !!int "22"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "10"
  "Religion": !!int "9"
  "Insight": !!int "11"
  "Perception": !!int "11"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Elvish, Undercommon"
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [command](/compendium/spells/command.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1/day each: [clairvoyance](/compendium/spells/clairvoyance.md), [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [faerie fire](/compendium/spells/faerie-fire.md), [gate](/compendium/spells/gate.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only), [suggestion](/compendium/spells/suggestion.md)\n\
    \n2/day each: [banishment](/compendium/spells/banishment.md), [blade barrier](/compendium/spells/blade-barrier.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [hold person](/compendium/spells/hold-person.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow wields a [tentacle rod](/compendium/items/tentacle-rod.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes two Demon Staff attacks or one Demon Staff attack and three\
    \ Tentacle Rod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with two\
    \ hands, plus 14 (4d6) psychic damage. The target must succeed on a DC 19 Wisdom\
    \ saving throw or become [frightened](/rules/conditions.md#frightened) of the\
    \ drow for 1 minute. The [frightened](/rules/conditions.md#frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Demon Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature. Hit: 3 (1d6)\
    \ bludgeoning damage. If the target is hit three times by the [rod](/compendium/items/tentacle-rod.md)\
    \ on one turn, the target must succeed on a DC 15 Constitution saving throw or\
    \ suffer the following effects for 1 minute: the target's speed is halved, it\
    \ has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover,\
    \ on each of its turns, it can take either an action or a bonus action, but not\
    \ both. At the end of each of its turns, it can repeat the saving throw, ending\
    \ the effect on itself on a success."
  "name": "Tentacle Rod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area\
    \ up to 120 feet away from the drow. Each creature in the column must make a DC\
    \ 20 Dexterity saving throw, taking 14 (4d6) fire damage and 14 (4d6) radiant\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Divine Flame (2/Day)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow bestows the Spider Queen's blessing on one ally she can see within\
    \ 30 feet of her. The ally takes 7 (2d6) psychic damage but has advantage on the\
    \ next attack roll it makes before the end of its next turn."
  "name": "Lolth's Fickle Favor"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow magically summons a [glabrezu](/compendium/bestiary/fiend/glabrezu.md)\
    \ or a [yochlol](/compendium/bestiary/fiend/yochlol.md). The summoned creature\
    \ appears in an unoccupied space within 60 feet of its summoner, acts as an ally\
    \ of its summoner, and can't summon other demons. It remains for 10 minutes, until\
    \ it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Servant (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "An allied demon within 30 feet of the drow uses its reaction to make one\
    \ attack against a target of the drow's choice that she can see."
  "name": "Compel Demon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow makes one Demon Staff attack."
  "name": "Demon Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drow uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Drow Matron Mother.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 104, Mordenkainen's Tome of Foes p. 186*

## Description

Among drow followers of [Lolth](/compendium/deities/drow-lolth.md), each noble house is led by a matron mother, an influential priestess of Lolth charged with carrying out the god's will while also advancing the interests of the family. Matron mothers embody the scheming and treachery associated with the Queen of Spiders. Each stands at the center of a vast conspiratorial web, with demons, spiders, and conscripted soldiers positioned between them and their enemies. Although matron mothers command great power, that power depends on maintaining the Spider Queen's favor, and the goddess sometimes capriciously takes back what she has given. The stat block here represents a matron mother at the height of her power.

A matron mother is almost never encountered alone. She is typically accompanied by a [drow favored consort](/compendium/bestiary/humanoid/drow-favored-consort-mpmm.md) and a [drow house captain](/compendium/bestiary/humanoid/drow-house-captain-mpmm.md), each of whom appears in this book. Other Underdark creatures might also be in the priestess's presence, providing protection or advice.

**Mothers of Rebellion.** Some matron mothers renounce [Lolth](/compendium/deities/drow-lolth.md) and join the war against their former goddess. Such drow could be of any alignment, and they lose the following abilities in the stat block: Lolth's Fickle Favor, Summon Servant, and Compel Demon. Even without these abilities, drow matron mothers are formidable opponents, and several of them hold positions of great influence in the Underdark armies arrayed against the followers of Lolth.

**A Matron Mother's Lair.** The palace of a drow matron mother is her home and fortress. Sigils throughout the building allow the matron mother to use the following lair actions while within it.

Any temple of [Lolth](/compendium/deities/drow-lolth.md) also functions as a matron mother's lair while she is inside it, unless she has renounced Lolth or another matron mother is present. When two or more matron mothers gather within a temple of their goddess, none of them can use it as their lair.

## Environment

underdark
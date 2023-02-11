---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/gargantuan
- monster/type/celestial
aliases: ["Archaic"]
statblock: true
"name": "Archaic"
"size": "Gargantuan"
"type": "celestial"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "245"
"hit_dice": "14d20 + 98"
"stats":
- !!int "25"
- !!int "10"
- !!int "24"
- !!int "27"
- !!int "24"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "13"
  "Intelligence": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Perception": !!int "13"
  "History": !!int "20"
  "Arcana": !!int "20"
"damage_resistances": "force"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [divination](/compendium/spells/divination.md),\
    \ [sending](/compendium/spells/sending.md)\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [forcecage](/compendium/spells/forcecage.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic's mind can't be read, creatures can communicate telepathically\
    \ with the archaic only if it allows, and magic can't determine whether the archaic\
    \ is lying."
  "name": "Enigmatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archaic fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic makes two Force Strike attacks. It can also use Gravity Shift,\
    \ if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +14 to hit, reach 15 ft. or range 120 ft.,\
    \ one target. Hit: 19 (2d10 + 8) force damage, and the target is pulled up to\
    \ 10 feet toward the archaic or pushed 10 feet away from it, as the archaic chooses."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic reverses gravity for one creature it can see within 100 feet\
    \ of itself. The creature must succeed on a DC 22 Wisdom saving throw or fall\
    \ 100 feet upward. If the falling creature encounters a solid object (such as\
    \ a ceiling) in this fall, it strikes the object just as it would during a downward\
    \ fall. If the creature reaches the top of the area without striking anything,\
    \ it hovers there until the start of the archaic's next turn, at which time gravity\
    \ returns to normal and the creature falls."
  "name": "Gravity Shift (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic teleports to an unoccupied space that it can see within 120\
    \ feet of itself."
  "name": "Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature the archaic can see casts a spell of 5th level\
    \ or lower, that creature must succeed on a DC 22 Charisma saving throw, or the\
    \ archaic immediately casts the same spell at the same level (+14 to hit with\
    \ spell attacks, spell save DC 22), requiring no material components and choosing\
    \ the spell's targets."
  "name": "Spell Mimicry (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic makes one Force Strike attack."
  "name": "Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic targets one creature it can see within 120 feet of itself.\
    \ The target must succeed on a DC 22 Constitution saving throw or take 35 (10d6)\
    \ force damage, and each spell of 5th level or lower on the target ends."
  "name": "Unravel Magic (Costs 2 Actions)"
"source":
- "SCC"
name: Archaic
image: "[[Archaic.png]]"
---

# Archaic

```statblock
"name": "Archaic"
"size": "Gargantuan"
"type": "celestial"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "245"
"hit_dice": "14d20 + 98"
"stats":
- !!int "25"
- !!int "10"
- !!int "24"
- !!int "27"
- !!int "24"
- !!int "20"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "13"
  "Intelligence": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Perception": !!int "13"
  "History": !!int "20"
  "Arcana": !!int "20"
"damage_resistances": "force"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [divination](/compendium/spells/divination.md),\
    \ [sending](/compendium/spells/sending.md)\n\n1/day each: [banishment](/compendium/spells/banishment.md),\
    \ [forcecage](/compendium/spells/forcecage.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic's mind can't be read, creatures can communicate telepathically\
    \ with the archaic only if it allows, and magic can't determine whether the archaic\
    \ is lying."
  "name": "Enigmatic Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archaic fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic makes two Force Strike attacks. It can also use Gravity Shift,\
    \ if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +14 to hit, reach 15 ft. or range 120 ft.,\
    \ one target. Hit: 19 (2d10 + 8) force damage, and the target is pulled up to\
    \ 10 feet toward the archaic or pushed 10 feet away from it, as the archaic chooses."
  "name": "Force Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic reverses gravity for one creature it can see within 100 feet\
    \ of itself. The creature must succeed on a DC 22 Wisdom saving throw or fall\
    \ 100 feet upward. If the falling creature encounters a solid object (such as\
    \ a ceiling) in this fall, it strikes the object just as it would during a downward\
    \ fall. If the creature reaches the top of the area without striking anything,\
    \ it hovers there until the start of the archaic's next turn, at which time gravity\
    \ returns to normal and the creature falls."
  "name": "Gravity Shift (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic teleports to an unoccupied space that it can see within 120\
    \ feet of itself."
  "name": "Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Immediately after a creature the archaic can see casts a spell of 5th level\
    \ or lower, that creature must succeed on a DC 22 Charisma saving throw, or the\
    \ archaic immediately casts the same spell at the same level (+14 to hit with\
    \ spell attacks, spell save DC 22), requiring no material components and choosing\
    \ the spell's targets."
  "name": "Spell Mimicry (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic makes one Force Strike attack."
  "name": "Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archaic targets one creature it can see within 120 feet of itself.\
    \ The target must succeed on a DC 22 Constitution saving throw or take 35 (10d6)\
    \ force damage, and each spell of 5th level or lower on the target ends."
  "name": "Unravel Magic (Costs 2 Actions)"
"source":
- "SCC"
"image": "[[Archaic.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 184*

## Description

Archaics are towering, multi-armed creatures overflowing with magic. Despite their solitude, archaics carry vast understanding of magic and the world's history, as well as the ability to warp the fabric of the world around them. Sages who seek out archaics for their knowledge receive confusing and often contradictory answers to questions. If a supplicant successfully unwinds the tangle, the answer they seek is revealed.

In truth, archaics are the reincarnated souls of the oracles of Strixhaven. When an oracle dies, their soul travels back through time to the explosion of magic that brought the Founder Dragons into being. In that outrush of creative force, the oracle's soul can be caught in the tide and clad in the very substance of the world, becoming an archaic. Because their knowledge cuts across the flow of time, archaics are careful how much they reveal to mortals and thus tend to speak in riddles.
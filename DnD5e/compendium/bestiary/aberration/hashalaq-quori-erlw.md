---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/medium
- monster/type/aberration
aliases: ["Hashalaq Quori"]
statblock: true
"name": "Hashalaq Quori"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "18"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
"skillsaves":
  "Insight": !!int "11"
  "History": !!int "12"
  "Arcana": !!int "12"
  "Persuasion": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Quori"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori's spellcasting ability is Intelligence (spell save DC 16). It\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md)\n\n1/day: [dominate person](/compendium/spells/dominate-person.md),\
    \ [dream](/compendium/spells/dream.md)\n\n3/day each: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori uses its Mind Thrust twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) force damage. If the target is a creature, it must succeed on a DC 16 Wisdom\
    \ saving throw or fall [prone](/rules/conditions.md#prone) in a fit of laughter."
  "name": "Idyllic Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori targets a creature it can see within 60 feet of it. The target\
    \ must make a DC 16 Wisdom saving throw, taking 18 (4d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Mind Thrust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the quori can see within 5 feet of it must succeed on\
    \ a DC 16 Charisma saving throw or be possessed by the quori; the quori then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The quori now controls the body but doesn't deprive the\
    \ target of awareness. The quori can't be targeted by any attack, spell, or other\
    \ effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity\
    \ to being [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened).\
    \ It otherwise uses the possessed target's statistics, but doesn't gain access\
    \ to the target's knowledge, class features, or proficiencies.\n\nThe possession\
    \ lasts until the body drops to 0 hit points, the quori ends it as a bonus action,\
    \ or the quori is forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the quori reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this quori's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the quori takes damage from a creature it can see within 60 feet of\
    \ it, the quori can force that creature to succeed on a DC 16 Intelligence saving\
    \ throw or take 11 (2d10) psychic damage."
  "name": "Empathic Feedback"
"source":
- "ERLW"
name: Hashalaq Quori
image: "[[Hashalaq Quori.png]]"
---

# Hashalaq Quori

```statblock
"name": "Hashalaq Quori"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "18"
- !!int "16"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
"skillsaves":
  "Insight": !!int "11"
  "History": !!int "12"
  "Arcana": !!int "12"
  "Persuasion": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Quori"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori's spellcasting ability is Intelligence (spell save DC 16). It\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md)\n\n1/day: [dominate person](/compendium/spells/dominate-person.md),\
    \ [dream](/compendium/spells/dream.md)\n\n3/day each: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori uses its Mind Thrust twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) force damage. If the target is a creature, it must succeed on a DC 16 Wisdom\
    \ saving throw or fall [prone](/rules/conditions.md#prone) in a fit of laughter."
  "name": "Idyllic Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The quori targets a creature it can see within 60 feet of it. The target\
    \ must make a DC 16 Wisdom saving throw, taking 18 (4d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Mind Thrust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the quori can see within 5 feet of it must succeed on\
    \ a DC 16 Charisma saving throw or be possessed by the quori; the quori then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The quori now controls the body but doesn't deprive the\
    \ target of awareness. The quori can't be targeted by any attack, spell, or other\
    \ effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity\
    \ to being [charmed](/rules/conditions.md#charmed) and [frightened](/rules/conditions.md#frightened).\
    \ It otherwise uses the possessed target's statistics, but doesn't gain access\
    \ to the target's knowledge, class features, or proficiencies.\n\nThe possession\
    \ lasts until the body drops to 0 hit points, the quori ends it as a bonus action,\
    \ or the quori is forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the quori reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this quori's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the quori takes damage from a creature it can see within 60 feet of\
    \ it, the quori can force that creature to succeed on a DC 16 Intelligence saving\
    \ throw or take 11 (2d10) psychic damage."
  "name": "Empathic Feedback"
"source":
- "ERLW"
"image": "[[Hashalaq Quori.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 305*

## Description

Hashalaq quori are loremasters and judges, and are commonly known as dreamstealers. In their natural form, hashalaqs are composed of hundreds of translucent tendrils. They can compress and configure these tendrils to form a wide range of simple shapes. A point of blue light suspended within its tendrils serves as the hashalaq's sensory organ, which can be moved around to suit the creature's current shape.

**The Power of Pleasure.** Hashalaq quori have studied their mortal prey for centuries. Inhabiting human bodies as Inspired has granted the hashalaq a deep understanding of the hedonistic urges of humanity. As a result, they have developed numerous ways to control humanoids through pleasure—even as they have developed a taste for such things themselves.

**The Learned of Dal Quor.** Hashalaq quori are the loremasters of Dal Quor. Even those hashalaqs who don't make use of Inspired vessels dedicate themselves to studying Eberron and the planes, and they are among the few quori castes whose members understand the ways of magic. In Dal Quor, the hashalaq quori are typically found as advisors to the kalaraq. They also serve as judges, policing the quori and ensuring that the rivalries of the tsucora never threaten the greater plans of the Dreaming Dark.

Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.
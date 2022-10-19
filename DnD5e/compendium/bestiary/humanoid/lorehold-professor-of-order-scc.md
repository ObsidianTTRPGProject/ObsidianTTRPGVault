---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/wizard
aliases: ["Lorehold Professor of Order"]
statblock: true
"name": "Lorehold Professor of Order"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Perception": !!int "5"
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "force"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n2/day each: [dimension door](/compendium/spells/dimension-door.md), [locate\
    \ object](/compendium/spells/locate-object.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor can cast the [contact other plane](/compendium/spells/contact-other-plane.md)\
    \ spell to contact a long-dead spirit, using Intelligence as the spellcasting\
    \ ability."
  "name": "Voice from the Past (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Repelling Burst attacks. It can also use Force\
    \ Barrier, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 30 ft., one target. Hit: 13 (2d8\
    \ + 4) force damage. If the target is a Large or smaller creature, it must succeed\
    \ on a DC 15 Strength saving throw or be pushed up to 10 feet directly away from\
    \ the professor and become [restrained](/rules/conditions.md#restrained) until\
    \ the start of professor's next turn."
  "name": "Repelling Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically creates a wall of translucent, golden force within\
    \ 90 feet of itself. The wall lasts for 1 minute or until the professor uses this\
    \ action again. The barrier can be a vertical or horizontal plane up to 30 feet\
    \ on a side or a 10-foot-radius hemispherical dome with a floor. The wall provides\
    \ total cover. It has AC 17, 30 hit points, and immunity to poison and psychic\
    \ damage."
  "name": "Force Barrier (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the professor can see within 60 feet of it casts a spell,\
    \ the professor can magically lock the casting in the moment before completion.\
    \ The spellcaster must succeed on a DC 15 saving throw using the spell's spellcasting\
    \ ability, or the spell fails and is wasted."
  "name": "Arcane Stasis (2/Day)"
"source":
- "SCC"
name: Lorehold Professor of Order
image: "[[Lorehold Professor of Order.png]]"
---

# Lorehold Professor of Order

```statblock
"name": "Lorehold Professor of Order"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "wizard"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
  "Constitution": !!int "5"
"skillsaves":
  "Perception": !!int "5"
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "force"
"senses": "passive Perception 15"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 15):\n\nAt will: [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md)\n\
    \n2/day each: [dimension door](/compendium/spells/dimension-door.md), [locate\
    \ object](/compendium/spells/locate-object.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [stone shape](/compendium/spells/stone-shape.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor can cast the [contact other plane](/compendium/spells/contact-other-plane.md)\
    \ spell to contact a long-dead spirit, using Intelligence as the spellcasting\
    \ ability."
  "name": "Voice from the Past (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Repelling Burst attacks. It can also use Force\
    \ Barrier, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 30 ft., one target. Hit: 13 (2d8\
    \ + 4) force damage. If the target is a Large or smaller creature, it must succeed\
    \ on a DC 15 Strength saving throw or be pushed up to 10 feet directly away from\
    \ the professor and become [restrained](/rules/conditions.md#restrained) until\
    \ the start of professor's next turn."
  "name": "Repelling Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically creates a wall of translucent, golden force within\
    \ 90 feet of itself. The wall lasts for 1 minute or until the professor uses this\
    \ action again. The barrier can be a vertical or horizontal plane up to 30 feet\
    \ on a side or a 10-foot-radius hemispherical dome with a floor. The wall provides\
    \ total cover. It has AC 17, 30 hit points, and immunity to poison and psychic\
    \ damage."
  "name": "Force Barrier (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the professor can see within 60 feet of it casts a spell,\
    \ the professor can magically lock the casting in the moment before completion.\
    \ The spellcaster must succeed on a DC 15 saving throw using the spell's spellcasting\
    \ ability, or the spell fails and is wasted."
  "name": "Arcane Stasis (2/Day)"
"source":
- "SCC"
"image": "[[Lorehold Professor of Order.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 198*

## Description

Lorehold's professors of order search for evidence of patterns and predictable outcomes in history. They study the flow of events, learning which occurrences herald specific outcomes, and they trace their magic through those paths of causality. In their exploration of ruins, professors of order shore up dangerous structures and find the safest paths as they search. When confronted, they confound their foes by channeling the stasis of perfect order, creating resilient barriers of force and quashing hostile magic.

**Lorehold Scholars.** The archaeomancers of Lorehold College draw their magical might from the flow of time and fate and the way those forces shape the course of history. Scholars of this broad mystical study divide between those who see history as an unpredictable jumble of chance and those who believe events form a perfect—and predictable—pattern.
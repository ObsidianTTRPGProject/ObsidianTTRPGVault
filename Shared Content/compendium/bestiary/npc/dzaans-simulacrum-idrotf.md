---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/construct
aliases: ["Dzaan's Simulacrum"]
statblock: true
"name": "Dzaan's Simulacrum"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "24"
"hit_dice": "9d8 + 9"
"stats":
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 11"
"languages": "Abyssal, Common, Giant, Infernal"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum is a 9th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (2 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (2 2nd-level\
    \ slots): [invisibility](/compendium/spells/invisibility.md), [levitate](/compendium/spells/levitate.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)\nSee \"Actions\"\
    \ below."
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature (the attack\
    \ roll has advantage if the target is wearing armor made of metal). Hit: 9 (2d8)\
    \ lightning damage, and the target can't take reactions until the start of its\
    \ next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum hurls a bubble of acid at one creature it can see within\
    \ 60 feet of it, or at two such creatures that are within 5 feet of each other.\
    \ A target must succeed on a DC 13 Dexterity saving throw or take 7 (2d6) acid\
    \ damage."
  "name": "Acid Splash (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum creates three darts of magical force. Each dart unerringly\
    \ strikes one creature the simulacrum can see within 120 feet of it, dealing 3\
    \ (1d4 + 1) force damage. If the simulacrum casts this spell using a 2nd-level\
    \ spell slot, it creates one more dart."
  "name": "Magic Missile (1st-Level Spell; Requires a Spell Slot)"
"source":
- "IDRotF"
name: Dzaan's Simulacrum
image: "[[Dzaan's Simulacrum.png]]"
---

# Dzaan's Simulacrum

```statblock
"name": "Dzaan's Simulacrum"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "24"
"hit_dice": "9d8 + 9"
"stats":
- !!int "10"
- !!int "11"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 11"
"languages": "Abyssal, Common, Giant, Infernal"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum is a 9th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (2 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (2 2nd-level\
    \ slots): [invisibility](/compendium/spells/invisibility.md), [levitate](/compendium/spells/levitate.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)\nSee \"Actions\"\
    \ below."
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature (the attack\
    \ roll has advantage if the target is wearing armor made of metal). Hit: 9 (2d8)\
    \ lightning damage, and the target can't take reactions until the start of its\
    \ next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum hurls a bubble of acid at one creature it can see within\
    \ 60 feet of it, or at two such creatures that are within 5 feet of each other.\
    \ A target must succeed on a DC 13 Dexterity saving throw or take 7 (2d6) acid\
    \ damage."
  "name": "Acid Splash (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The simulacrum creates three darts of magical force. Each dart unerringly\
    \ strikes one creature the simulacrum can see within 120 feet of it, dealing 3\
    \ (1d4 + 1) force damage. If the simulacrum casts this spell using a 2nd-level\
    \ spell slot, it creates one more dart."
  "name": "Magic Missile (1st-Level Spell; Requires a Spell Slot)"
"source":
- "IDRotF"
"image": "[[Dzaan's Simulacrum.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 270*

## Description

Unbeknownst to his executioners, Dzaan had used a spell scroll of simulacrum to create a copy of himself. This simulacrum dwells in the sunken Netherese spire, waiting for its creator to return.

The simulacrum, which looks and acts like Dzaan, has half of Dzaan's hit points and can't regain expended spell slots. It has wasted its 3rd-level spell slots trying to reach Dzaan with [sending](/compendium/spells/sending.md) spells, to no avail, and has expended other spell slots to help it survive the perils of the spire. It uses its remaining spell slots sparingly.

The sunken Netherese tower contains a special room that can transform the simulacrum into a real person—or any magical illusion into the real thing, for that matter. If this change occurs, the simulacrum effectively becomes a clone of Dzaan, authentic in every way.
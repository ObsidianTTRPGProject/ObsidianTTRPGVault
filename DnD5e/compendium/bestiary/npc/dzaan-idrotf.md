---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Dzaan"]
statblock: true
"name": "Dzaan"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "49"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [invisibility](/compendium/spells/invisibility.md), [levitate](/compendium/spells/levitate.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)\n\n3rd level (3\
    \ 3rd-level slots): [fireball](/compendium/spells/fireball.md), [sending](/compendium/spells/sending.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [arcane\
    \ eye](/compendium/spells/arcane-eye.md), [confusion](/compendium/spells/confusion.md)\n\
    \n5th level (1 5th-level slots): [animate objects](/compendium/spells/animate-objects.md)\n\
    See \"Actions\" below."
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature (the attack\
    \ roll has advantage if the target is wearing armor made of metal). Hit: 9 (2d8)\
    \ lightning damage, and the target can't take reactions until the start of his\
    \ next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan hurls a bubble of acid at one creature he can see within 60 feet\
    \ of it, or at two such creatures that are within 5 feet of each other. A target\
    \ must succeed on a DC 13 Dexterity saving throw or take 7 (2d6) acid damage."
  "name": "Acid Splash (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan creates three darts of magical force. Each dart unerringly strikes\
    \ one creature Dzaan can see within 120 feet of it, dealing 3 (1d4 + 1) force\
    \ damage. If Dzaan casts this spell using a 2nd-level spell slot, he creates one\
    \ more dart."
  "name": "Magic Missile (1st-Level Spell; Requires a Spell Slot)"
"source":
- "IDRotF"
name: Dzaan
image: "[[Dzaan.png]]"
---

# Dzaan

```statblock
"name": "Dzaan"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "49"
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
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [invisibility](/compendium/spells/invisibility.md), [levitate](/compendium/spells/levitate.md),\
    \ [phantasmal force](/compendium/spells/phantasmal-force.md)\n\n3rd level (3\
    \ 3rd-level slots): [fireball](/compendium/spells/fireball.md), [sending](/compendium/spells/sending.md),\
    \ [slow](/compendium/spells/slow.md)\n\n4th level (3 4th-level slots): [arcane\
    \ eye](/compendium/spells/arcane-eye.md), [confusion](/compendium/spells/confusion.md)\n\
    \n5th level (1 5th-level slots): [animate objects](/compendium/spells/animate-objects.md)\n\
    See \"Actions\" below."
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature (the attack\
    \ roll has advantage if the target is wearing armor made of metal). Hit: 9 (2d8)\
    \ lightning damage, and the target can't take reactions until the start of his\
    \ next turn."
  "name": "Shocking Grasp (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan hurls a bubble of acid at one creature he can see within 60 feet\
    \ of it, or at two such creatures that are within 5 feet of each other. A target\
    \ must succeed on a DC 13 Dexterity saving throw or take 7 (2d6) acid damage."
  "name": "Acid Splash (Cantrip)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dzaan creates three darts of magical force. Each dart unerringly strikes\
    \ one creature Dzaan can see within 120 feet of it, dealing 3 (1d4 + 1) force\
    \ damage. If Dzaan casts this spell using a 2nd-level spell slot, he creates one\
    \ more dart."
  "name": "Magic Missile (1st-Level Spell; Requires a Spell Slot)"
"source":
- "IDRotF"
"image": "[[Dzaan.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 270*

## Description

Dzaan was a Red Wizard of Thay who studied the arcane tradition of illusion. The leaders of the Arcane Brotherhood welcomed him with open arms, eager to count a Red Wizard among their ranks. Dzaan might have become a force to reckon with in the brotherhood had his quest for power not led him to Icewind Dale, where he was killed by the people of Easthaven after making a few too many enemies.

**Dzaan's Demise.** Dzaan's trouble started after he broke away from his fellow wizards and hired adventurers to scour Icewind Dale for Netherese ruins. One group of them uncovered a buried tower in the tundra (see "Lost Spire of Netheril"), and Dzaan went out of his way to eliminate anyone who knew of it, including the adventurers who found it and several Ten-Towners with whom they had spoken. After turning the tower into his secret base, Dzaan visited Easthaven to gather supplies. Although he took the precaution of adopting a magical disguise, members of the local militia recognized Dzaan by the way he walked and spoke. They captured him, gagged him, confiscated his spellbook, and condemned him to death.

The characters have no opportunity to speak with Dzaan. They first encounter him in Easthaven, tied to a stake and engulfed in flames (see "Toil and Trouble"). The Ten-Towners enjoy the execution while it lasts. After warming themselves by the fire, they leave Dzaan's ashes to be scattered by the wind.

**Dzaan's Simulacrum.** Unbeknownst to his executioners, Dzaan had used a spell scroll of [simulacrum](/compendium/spells/simulacrum.md) to create a copy of himself. This simulacrum dwells in the sunken Netherese spire, waiting for its creator to return.

The simulacrum, which looks and acts like Dzaan, has half of Dzaan's hit points and can't regain expended spell slots. It has wasted its 3rd-level spell slots trying to reach Dzaan with [sending](/compendium/spells/sending.md) spells, to no avail, and has expended other spell slots to help it survive the perils of the spire. It uses its remaining spell slots sparingly.

The sunken Netherese tower contains a special room that can transform the simulacrum into a real person—or any magical illusion into the real thing, for that matter. If this change occurs, the simulacrum effectively becomes a [clone of Dzaan](/compendium/bestiary/npc/dzaan-idrotf.md), authentic in every way. Dzaan's stat block and abilities change as follows:

- He has spell slots appropriate for a 9th-level wizard (four 1st-level spell slots, three 2nd- through 4th-level spell slots, and one 5th-level spell slot), but he lacks a spellbook and therefore can't change his list of prepared spells.
- If he finishes a long rest, he has the following additional spell slots, which allow him to cast the indicated spells: 3rd level (3 slots): [fireball](/compendium/spells/fireball.md), [sending](/compendium/spells/sending.md), [slow](/compendium/spells/slow.md) 4th level (3 slots): [arcane eye](/compendium/spells/arcane-eye.md), [confusion](/compendium/spells/confusion.md) 5th level (1 slot): [animate objects](/compendium/spells/animate-objects.md)
- His hit point maximum becomes 49 (9d8 + 9), and his challenge rating becomes 2 (450 XP). His challenge rating becomes 4 (1,100 XP) if he finishes a long rest and regains his expended spells.

**Companion.** Because they're so despised throughout Faerûn, Red Wizards often adopt disguises and rarely travel abroad without an escort. They generally favor undead servants and bodyguards, since they find that undead tend to be more obedient than the living. Dzaan's bodyguard is a Thayan [wight](/compendium/bestiary/undead/wight.md) named Krintaas. When Dzaan returned to Easthaven, he ordered his companion to stay with the simulacrum and watch over it and the buried Netherese spire.
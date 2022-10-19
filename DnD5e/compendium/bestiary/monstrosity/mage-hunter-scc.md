---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/large
- monster/type/monstrosity
aliases: ["Mage Hunter"]
statblock: true
"name": "Mage Hunter"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "walk 40 ft., climb 40 ft. (hunter form only), fly 10 ft. (hover sentry form\
  \ only)"
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "9"
"condition_immunities": "blinded, charmed, deafened, frightened, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 19"
"languages": "understands Common but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter knows the location of every spellcaster, active spell, and magic\
    \ item within 120 feet of itself."
  "name": "Magic Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb (Hunter Form Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter makes two Claw attacks."
  "name": "Multiattack (Hunter Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage."
  "name": "Claw (Hunter Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the hunter can't make a Tail attack against another target."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter emits a pulse of energy that helps it better locate its magical\
    \ quarry. Each creature within 120 feet of the hunter that has the ability to\
    \ cast spells must succeed on a DC 14 Wisdom saving throw or be mystically marked\
    \ by the hunter for 1 hour.\n\nWhile marked, a creature can't become hidden from\
    \ the hunter and gains no benefit from the [invisible](/rules/conditions.md#invisible)\
    \ condition against the hunter. Additionally, while a marked creature is on the\
    \ same plane of existence as the hunter, the hunter always knows the distance\
    \ and direction to the creature."
  "name": "Mage Tracker (Sentry Form Only)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter folds into its drone-like sentry form or unfolds into its hunter\
    \ form. Its game statistics are the same in each form."
  "name": "Shift Form"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hunter takes damage from a spell, it takes only half the triggering\
    \ damage (rounded down). If the creature that cast the spell is within 60 feet\
    \ of the hunter, that creature must succeed on a DC 14 Dexterity saving throw\
    \ or take the other half of the damage."
  "name": "Consume and Destroy"
"source":
- "SCC"
name: Mage Hunter
image: "[[Mage Hunter.png]]"
---

# Mage Hunter

```statblock
"name": "Mage Hunter"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "19"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "walk 40 ft., climb 40 ft. (hunter form only), fly 10 ft. (hover sentry form\
  \ only)"
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "9"
"condition_immunities": "blinded, charmed, deafened, frightened, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 19"
"languages": "understands Common but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter knows the location of every spellcaster, active spell, and magic\
    \ item within 120 feet of itself."
  "name": "Magic Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb (Hunter Form Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter makes two Claw attacks."
  "name": "Multiattack (Hunter Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage."
  "name": "Claw (Hunter Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the hunter can't make a Tail attack against another target."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter emits a pulse of energy that helps it better locate its magical\
    \ quarry. Each creature within 120 feet of the hunter that has the ability to\
    \ cast spells must succeed on a DC 14 Wisdom saving throw or be mystically marked\
    \ by the hunter for 1 hour.\n\nWhile marked, a creature can't become hidden from\
    \ the hunter and gains no benefit from the [invisible](/rules/conditions.md#invisible)\
    \ condition against the hunter. Additionally, while a marked creature is on the\
    \ same plane of existence as the hunter, the hunter always knows the distance\
    \ and direction to the creature."
  "name": "Mage Tracker (Sentry Form Only)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hunter folds into its drone-like sentry form or unfolds into its hunter\
    \ form. Its game statistics are the same in each form."
  "name": "Shift Form"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the hunter takes damage from a spell, it takes only half the triggering\
    \ damage (rounded down). If the creature that cast the spell is within 60 feet\
    \ of the hunter, that creature must succeed on a DC 14 Dexterity saving throw\
    \ or take the other half of the damage."
  "name": "Consume and Destroy"
"source":
- "SCC"
"image": "[[Mage Hunter.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 199*

## Description

Mage hunters are hideous spider-legged creatures employed by the Oriq to pursue magic-wielders. These creatures can naturally sense magic via the glowing purple spines on their backs.

A mage hunter is usually in its sentry form, a diamond-shaped drone with a heightened ability to sense and locate mages. Once it finds a quarry, the mage hunter takes on its arachnoid hunter form and pursues its targets with vicious skill.
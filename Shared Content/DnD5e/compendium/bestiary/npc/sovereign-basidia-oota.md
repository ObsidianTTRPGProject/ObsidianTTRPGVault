---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/large
- monster/type/plant
- monster/environment/underdark
aliases: ["Sovereign Basidia"]
statblock: true
"name": "Sovereign Basidia"
"size": "Large"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 120 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Basidia takes damage, all other myconids within 240 feet of it can\
    \ sense its pain."
  "name": "Distress Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Basidia has disadvantage on ability checks, attack rolls,\
    \ and saving throws. Basidia dies if it spends more than 1 hour in direct sunlight."
  "name": "Sun Sickness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia uses either its Hallucination Spores or its Pacifying Spores, then\
    \ makes a fist attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4\
    \ + 1) bludgeoning damage plus 7 (3d4) poison damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia targets one corpse of a humanoid or a Large or smaller beast within\
    \ 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises\
    \ as a spore servant. The corpse stays animated for 1d4 + 1 weeks or until destroyed,\
    \ and it can't be animated again in this way."
  "name": "Animating Spores (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia ejects spores at one creature it can see within 5 feet of it. The\
    \ target must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ while it hallucinates. The target can repeat the saving throw at the end of\
    \ each of its turns, ending the effect on itself on a success."
  "name": "Hallucination Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia ejects spores at one creature it can see within 5 feet of it. The\
    \ target must succeed on a DC 12 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Pacifying Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 30-foot radius of spores extends from Basidia. These spores can go around\
    \ corners and affect only creatures with an Intelligence of 2 or higher that aren't\
    \ undead, constructs, or elementals. Affected creatures can communicate telepathically\
    \ with one another while they are within 30 feet of each other. The effect lasts\
    \ for 1 hour."
  "name": "Rapport Spores"
"source":
- "OotA"
name: Sovereign Basidia
image: "[[Sovereign Basidia.png]]"
---

# Sovereign Basidia

```statblock
"name": "Sovereign Basidia"
"size": "Large"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft."
"senses": "darkvision 120 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Basidia takes damage, all other myconids within 240 feet of it can\
    \ sense its pain."
  "name": "Distress Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Basidia has disadvantage on ability checks, attack rolls,\
    \ and saving throws. Basidia dies if it spends more than 1 hour in direct sunlight."
  "name": "Sun Sickness"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia uses either its Hallucination Spores or its Pacifying Spores, then\
    \ makes a fist attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4\
    \ + 1) bludgeoning damage plus 7 (3d4) poison damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia targets one corpse of a humanoid or a Large or smaller beast within\
    \ 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises\
    \ as a spore servant. The corpse stays animated for 1d4 + 1 weeks or until destroyed,\
    \ and it can't be animated again in this way."
  "name": "Animating Spores (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia ejects spores at one creature it can see within 5 feet of it. The\
    \ target must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. The [poisoned](/rules/conditions.md#poisoned) target is [incapacitated](/rules/conditions.md#incapacitated)\
    \ while it hallucinates. The target can repeat the saving throw at the end of\
    \ each of its turns, ending the effect on itself on a success."
  "name": "Hallucination Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Basidia ejects spores at one creature it can see within 5 feet of it. The\
    \ target must succeed on a DC 12 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Pacifying Spores"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 30-foot radius of spores extends from Basidia. These spores can go around\
    \ corners and affect only creatures with an Intelligence of 2 or higher that aren't\
    \ undead, constructs, or elementals. Affected creatures can communicate telepathically\
    \ with one another while they are within 30 feet of each other. The effect lasts\
    \ for 1 hour."
  "name": "Rapport Spores"
"source":
- "OotA"
"image": "[[Sovereign Basidia.png]]"
```
^statblock

*Source: Out of the Abyss p. 88*

## Environment

underdark
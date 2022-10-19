---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/humanoid/derro
aliases: ["Narrak"]
statblock: true
"name": "Narrak"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d6 + 9"
"stats":
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "5"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Arcana": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak is a 5th-level spellcaster. His spellcasting ability is Charisma\
    \ (Save DC 13, +5 to hit with spell attacks) Narrak has two 2nd-level spell slots,\
    \ which he regains after finishing a short or long rest, and knows the following\
    \ warlock spells:\n\nCantrips (at will): [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [friends](/compendium/spells/friends.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n1st-2nd level (2 2nd-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [charm person](/compendium/spells/charm-person.md), [hex](/compendium/spells/hex.md),\
    \ [hold person](/compendium/spells/hold-person.md), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [spider climb](/compendium/spells/spider-climb.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Narrak has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak casts [mage armor](/compendium/spells/mage-armor.md) on himself"
  "name": "Armor of Shadows (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While he is in a dim light or darkness, Narrak can become [invisible](/rules/conditions.md#invisible).\
    \ He remains so until he moves or takes an action or reaction."
  "name": "One with Shadows"
"source":
- "OotA"
name: Narrak
image: "[[Narrak.png]]"
---

# Narrak

```statblock
"name": "Narrak"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d6 + 9"
"stats":
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "5"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Arcana": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak is a 5th-level spellcaster. His spellcasting ability is Charisma\
    \ (Save DC 13, +5 to hit with spell attacks) Narrak has two 2nd-level spell slots,\
    \ which he regains after finishing a short or long rest, and knows the following\
    \ warlock spells:\n\nCantrips (at will): [eldritch blast](/compendium/spells/eldritch-blast.md),\
    \ [friends](/compendium/spells/friends.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n1st-2nd level (2 2nd-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [charm person](/compendium/spells/charm-person.md), [hex](/compendium/spells/hex.md),\
    \ [hold person](/compendium/spells/hold-person.md), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md),\
    \ [spider climb](/compendium/spells/spider-climb.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Narrak has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Narrak casts [mage armor](/compendium/spells/mage-armor.md) on himself"
  "name": "Armor of Shadows (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While he is in a dim light or darkness, Narrak can become [invisible](/rules/conditions.md#invisible).\
    \ He remains so until he moves or takes an action or reaction."
  "name": "One with Shadows"
"source":
- "OotA"
"image": "[[Narrak.png]]"
```
^statblock

*Source: Out of the Abyss p. 232*
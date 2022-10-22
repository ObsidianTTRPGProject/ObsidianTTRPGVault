---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/humanoid/derro
aliases: ["Droki"]
statblock: true
"name": "Droki"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "5"
- !!int "16"
"speed": "walk 30 ft. (60 ft. with boots of speed)"
"skillsaves":
  "Stealth": !!int "5"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki's innate spellcasting ability is Charisma (spell save DC 13). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md),\
    \ [shatter](/compendium/spells/shatter.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki wears [boots of speed](/compendium/items/boots-of-speed.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki deals an extra 7 (2d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Droki that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Droki doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki makes two attacks with his shortsword"
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage. The sword is coated with serpent venom that wears off\
    \ after the first hit. A target subjected to the venom must make a DC 11 Constitution\
    \ saving throw, taking 10 (3d6) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Shortsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki adds 3 to his AC against one melee attack that would hit him. To\
    \ do so, Droki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
name: Droki
image: "[[Droki.png]]"
---

# Droki

```statblock
"name": "Droki"
"size": "Small"
"type": "humanoid"
"subtype": "derro"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "5"
- !!int "16"
"speed": "walk 30 ft. (60 ft. with boots of speed)"
"skillsaves":
  "Stealth": !!int "5"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki's innate spellcasting ability is Charisma (spell save DC 13). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day\
    \ each: [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md),\
    \ [shatter](/compendium/spells/shatter.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki wears [boots of speed](/compendium/items/boots-of-speed.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki deals an extra 7 (2d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Droki that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and Droki doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki makes two attacks with his shortsword"
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage. The sword is coated with serpent venom that wears off\
    \ after the first hit. A target subjected to the venom must make a DC 11 Constitution\
    \ saving throw, taking 10 (3d6) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Shortsword"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Droki adds 3 to his AC against one melee attack that would hit him. To\
    \ do so, Droki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "OotA"
"image": "[[Droki.png]]"
```
^statblock

*Source: Out of the Abyss p. 231*

## Description

**Roleplaying Droki.** Droki hates everyone in general and surfacers in particular. He gnashes his teeth if he has to address the characters, taking every opportunity to be insulting and misleading. If the characters look through his satchel while he's still conscious, he throws an epic tantrum and becomes intractable until knocked [unconscious](/rules/conditions.md#unconscious).

Droki is also obsessed with things happening where and when they should. If he is captured before he runs his errands in the Whorlstone Tunnels, he constantly complains about the characters altering fate by delaying him, and a good tactic to pressure him is to threaten to hold him indefinitely. He prefers to escape than to fight, except if the characters take his satchel.
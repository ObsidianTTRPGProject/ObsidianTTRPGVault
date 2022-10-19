---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
aliases: ["Quenthel Baenre"]
statblock: true
"name": "Quenthel Baenre"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "132"
"hit_dice": "24d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "12"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "9"
  "Religion": !!int "11"
  "Insight": !!int "12"
  "Perception": !!int "12"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel's spellcasting ability is Charisma (spell save DC 19). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel is a 20th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 20, +12 to hit with spell attacks). Quenthel has the following cleric\
    \ spells prepared:\n\nAt will: Any cleric spell up to 9th level.\n\nCantrips\
    \ (at will): [guidance](/compendium/spells/guidance.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [resistance](/compendium/spells/resistance.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [animal friendship](/compendium/spells/animal-friendship.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [detect poison and disease](/compendium/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md)\
    \ (2 giant spiders), [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th\
    \ level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (2 5th-level slots): [insect plague](/compendium/spells/insect-plague.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Quenthel to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Quenthel has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel wields a [tentacle rod](/compendium/items/tentacle-rod.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel makes two scourge attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel attempts to magically summon a [yochlol](/compendium/bestiary/fiend/yochlol.md)\
    \ with a 30|30 percent|30% summoning chance% chance chance of success. If the\
    \ attempt fails, Quenthel takes 5 (1d10) psychic damage. Otherwise, the summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While seated on her throne, Quenthel can use an action on her turn to cast\
    \ [disintegrate](/compendium/spells/disintegrate.md) (save DC 19). A target that\
    \ fails its saving throw takes 10d6 + 40 force damage. If this damage reduces\
    \ the target to 0 hit points, it is disintegrated."
  "name": "Throne Activation"
"source":
- "OotA"
name: Quenthel Baenre
image: "[[Quenthel Baenre.png]]"
---

# Quenthel Baenre

```statblock
"name": "Quenthel Baenre"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "132"
"hit_dice": "24d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "20"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "12"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "9"
  "Religion": !!int "11"
  "Insight": !!int "12"
  "Perception": !!int "12"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel's spellcasting ability is Charisma (spell save DC 19). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](/compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [levitate](/compendium/spells/levitate.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel is a 20th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 20, +12 to hit with spell attacks). Quenthel has the following cleric\
    \ spells prepared:\n\nAt will: Any cleric spell up to 9th level.\n\nCantrips\
    \ (at will): [guidance](/compendium/spells/guidance.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [resistance](/compendium/spells/resistance.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [animal friendship](/compendium/spells/animal-friendship.md), [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [detect poison and disease](/compendium/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md)\
    \ (2 giant spiders), [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th\
    \ level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (2 5th-level slots): [insect plague](/compendium/spells/insect-plague.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put Quenthel to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Quenthel has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel wields a [tentacle rod](/compendium/items/tentacle-rod.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel makes two scourge attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Quenthel attempts to magically summon a [yochlol](/compendium/bestiary/fiend/yochlol.md)\
    \ with a 30|30 percent|30% summoning chance% chance chance of success. If the\
    \ attempt fails, Quenthel takes 5 (1d10) psychic damage. Otherwise, the summoned\
    \ demon appears in an unoccupied space within 60 feet of its summoner, acts as\
    \ an ally of its summoner, and can't summon other demons. It remains for 10 minutes,\
    \ until it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While seated on her throne, Quenthel can use an action on her turn to cast\
    \ [disintegrate](/compendium/spells/disintegrate.md) (save DC 19). A target that\
    \ fails its saving throw takes 10d6 + 40 force damage. If this damage reduces\
    \ the target to 0 hit points, it is disintegrated."
  "name": "Throne Activation"
"source":
- "OotA"
"image": "[[Quenthel Baenre.png]]"
```
^statblock

*Source: Out of the Abyss p. 204*

## Environment

underdark
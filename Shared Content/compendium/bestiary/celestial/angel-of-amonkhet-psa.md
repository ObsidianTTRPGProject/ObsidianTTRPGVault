---
cssclass: json5e-monster
tags:
- compendium/src/psa
- monster/size/medium
- monster/type/celestial
aliases: ["Angel of Amonkhet"]
statblock: true
"name": "Angel of Amonkhet"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's spellcasting ability is Charisma (spell save DC 17). The angel\
    \ can innately cast the following spells, requiring only verbal components:\n\n\
    At will: [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day each: [commune](/compendium/spells/commune.md), [raise dead](/compendium/spells/raise-dead.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's weapon attacks are magical. When the angel hits with any weapon,\
    \ the weapon deals an extra 4d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the angel can't attack another target with its staff."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel touches another creature. The target magically regains 20 (4d8\
    \ + 2) hit points and is freed from any curse, disease, poison, blindness, or\
    \ deafness."
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (the angel's choice).\n\nIn a new form, the angel retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ Dexterity, and special senses are replaced by those of the new form, and it\
    \ gains any statistics and capabilities (except class features, legendary actions,\
    \ and lair actions) that the new form has but that it lacks."
  "name": "Change Shape"
"source":
- "PSA"
name: Angel of Amonkhet
image: "[[Angel of Amonkhet.png]]"
---

# Angel of Amonkhet

```statblock
"name": "Angel of Amonkhet"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's spellcasting ability is Charisma (spell save DC 17). The angel\
    \ can innately cast the following spells, requiring only verbal components:\n\n\
    At will: [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day each: [commune](/compendium/spells/commune.md), [raise dead](/compendium/spells/raise-dead.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's weapon attacks are magical. When the angel hits with any weapon,\
    \ the weapon deals an extra 4d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 17). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the angel can't attack another target with its staff."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel touches another creature. The target magically regains 20 (4d8\
    \ + 2) hit points and is freed from any curse, disease, poison, blindness, or\
    \ deafness."
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (the angel's choice).\n\nIn a new form, the angel retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ Dexterity, and special senses are replaced by those of the new form, and it\
    \ gains any statistics and capabilities (except class features, legendary actions,\
    \ and lair actions) that the new form has but that it lacks."
  "name": "Change Shape"
"source":
- "PSA"
"image": "[[Angel of Amonkhet.png]]"
```
^statblock

*Source: Plane Shift: Amonkhet p. 30*

## Description

Whatever their original forms might have been, the angels of Amonkhet have been twisted into distorted reflections of Nicol Bolas. Their limbs are long and thin, with elongated shins and forearms. Their huge wings are adorned with white and black feathers. Light shines through their joints and chests as if from an internal fire, and their eyes glow with a gold or orange light.

Bolas's angels are his personal agents during his absence from Amonkhet. Their mission, which they pursue with unwavering devotion, is to keep Naktamun free of dissenting voices. They stand as sentinels over the city, extending supernatural senses to detect the presence of [dissenters](/compendium/backgrounds/dissenter-psa.md). They use their long, hooked [staffs](/compendium/items/staff.md) to capture those who question the God-Pharaoh's rule, and are tasked with carrying out the punishment that Bolas's law demands. [Dissenters](/compendium/backgrounds/dissenter-psa.md) are bound into sarcophagi—the Tombs of Disgrace—and exposed to the mockery of fellow citizens in the Display of Doubt. On the following morning, the angels carry the sarcophagi into the desert and abandon the [dissenters](/compendium/backgrounds/dissenter-psa.md) to the horrors of the sands—and the Curse of Wandering.
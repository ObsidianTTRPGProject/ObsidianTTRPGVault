---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/medium
- monster/type/celestial
aliases: ["Host of Herons Angel"]
statblock: true
"name": "Host of Herons Angel"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever an angel of the Host of Herons or a friendly creature within 10\
    \ feet of it makes a saving throw, the creature gains a bonus to the saving throw\
    \ equal to the angel's Charisma modifier. The angel must be conscious to receive\
    \ or grant this bonus."
  "name": "Heron Protection"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
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
- "PSI"
name: Host of Herons Angel
image: "[[Host of Herons Angel.png]]"
---

# Host of Herons Angel

```statblock
"name": "Host of Herons Angel"
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
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever an angel of the Host of Herons or a friendly creature within 10\
    \ feet of it makes a saving throw, the creature gains a bonus to the saving throw\
    \ equal to the angel's Charisma modifier. The angel must be conscious to receive\
    \ or grant this bonus."
  "name": "Heron Protection"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
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
- "PSI"
"image": "[[Host of Herons Angel.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 26*
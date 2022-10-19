---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/humanoid/gnome
- monster/type/humanoid/shapechanger
aliases: ["The Pudding King"]
statblock: true
"name": "The Pudding King"
"size": "Small"
"type": "humanoid"
"subtype": "gnome, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "2"
  "Arcana": !!int "4"
  "Survival": !!int "2"
"damage_resistances": "acid, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Gnomish, Terran, Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King's innate spellcasting ability is Intelligence (spell save\
    \ DC 12). He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [nondetection](/compendium/spells/nondetection.md) (self only)\n\
    \n1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King is a 9th-level spellcaster. His spellcasting ability is\
    \ Charisma (spell save DC 14, +6 to hit with spell attacks). The Pudding King\
    \ knows the following sorcerer spells:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [false life](/compendium/spells/false-life.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [ray of sickness](/compendium/spells/ray-of-sickness.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [confusion](/compendium/spells/confusion.md)\n\
    \n5th level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on Dexterity (Stealth) checks made to hide\
    \ in rocky terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on Intelligence, Wisdom, and Charisma saving\
    \ throws against magic."
  "name": "Gnome Cunning"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ piercing damage."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King magically transforms into an ooze, or back into his true\
    \ form. He reverts to his true form if he dies. Any equipment he is wearing or\
    \ carrying is absorbed by the new form. In ooze form, the Pudding King retains\
    \ his alignment, hit points, Hit Dice, and Intelligence, Wisdom, and Charisma\
    \ scores, as well as this action. His statistics and capabilities are otherwise\
    \ replaced by those of the new form."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King creates a patch of green slime (see \"Dungeon Hazards\"\
    \ in chapter 5 of the Dungeon Master's Guide). The slime appears on a section\
    \ of wall, ceiling, or floor within 30 feet of the Pudding King."
  "name": "Create Green Slime (Recharges after a Long Rest)"
"source":
- "OotA"
name: The Pudding King
image: "[[The Pudding King.png]]"
---

# The Pudding King

```statblock
"name": "The Pudding King"
"size": "Small"
"type": "humanoid"
"subtype": "gnome, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "2"
  "Arcana": !!int "4"
  "Survival": !!int "2"
"damage_resistances": "acid, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Gnomish, Terran, Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King's innate spellcasting ability is Intelligence (spell save\
    \ DC 12). He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [nondetection](/compendium/spells/nondetection.md) (self only)\n\
    \n1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King is a 9th-level spellcaster. His spellcasting ability is\
    \ Charisma (spell save DC 14, +6 to hit with spell attacks). The Pudding King\
    \ knows the following sorcerer spells:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [false life](/compendium/spells/false-life.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [ray of sickness](/compendium/spells/ray-of-sickness.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [confusion](/compendium/spells/confusion.md)\n\
    \n5th level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on Dexterity (Stealth) checks made to hide\
    \ in rocky terrain."
  "name": "Stone Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on Intelligence, Wisdom, and Charisma saving\
    \ throws against magic."
  "name": "Gnome Cunning"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened)."
  "name": "Insanity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ piercing damage."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King magically transforms into an ooze, or back into his true\
    \ form. He reverts to his true form if he dies. Any equipment he is wearing or\
    \ carrying is absorbed by the new form. In ooze form, the Pudding King retains\
    \ his alignment, hit points, Hit Dice, and Intelligence, Wisdom, and Charisma\
    \ scores, as well as this action. His statistics and capabilities are otherwise\
    \ replaced by those of the new form."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Pudding King creates a patch of green slime (see \"Dungeon Hazards\"\
    \ in chapter 5 of the Dungeon Master's Guide). The slime appears on a section\
    \ of wall, ceiling, or floor within 30 feet of the Pudding King."
  "name": "Create Green Slime (Recharges after a Long Rest)"
"source":
- "OotA"
"image": "[[The Pudding King.png]]"
```
^statblock

*Source: Out of the Abyss p. 233*
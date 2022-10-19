---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/urban
aliases: ["Drivvin Freth"]
statblock: true
"name": "Drivvin Freth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Perception": !!int "6"
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Dwarvish, Elvish, Goblin, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Drivvin can cast [disguise\
    \ self](/compendium/spells/disguise-self.md) and [invisibility](/compendium/spells/invisibility.md)\
    \ at will and has the following wizard spells prepared:\n\nAt will: [disguise\
    \ self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [fire shield](/compendium/spells/fire-shield.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Drivvin casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drivvin freth's innate spellcasting ability is Charisma (spell save\
    \ DC 15). The drivvin freth can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drivvin freth has advantage on saving throws against being charmed,\
    \ and magic can't put the drivvin freth to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drivvin freth has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin magically summons a demon of challenge rating 6 or lower. The summoned\
    \ demon appears in an unoccupied space within 60 feet of him, acts as his ally,\
    \ and can't summon other demons. The summoned demon remains until Drivvin dismisses\
    \ it as an action or until the demon is reduced to 0 hit points."
  "name": "Summon Demon (1/Day)"
"source":
- "WDMM"
name: Drivvin Freth
image: "[[Drivvin Freth.png]]"
---

# Drivvin Freth

```statblock
"name": "Drivvin Freth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Perception": !!int "6"
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Dwarvish, Elvish, Goblin, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Drivvin can cast [disguise\
    \ self](/compendium/spells/disguise-self.md) and [invisibility](/compendium/spells/invisibility.md)\
    \ at will and has the following wizard spells prepared:\n\nAt will: [disguise\
    \ self](/compendium/spells/disguise-self.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [fire shield](/compendium/spells/fire-shield.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Drivvin casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drivvin freth's innate spellcasting ability is Charisma (spell save\
    \ DC 15). The drivvin freth can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md)\n\
    \n1/day each: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The drivvin freth has advantage on saving throws against being charmed,\
    \ and magic can't put the drivvin freth to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the drivvin freth has disadvantage on attack rolls,\
    \ as well as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Drivvin magically summons a demon of challenge rating 6 or lower. The summoned\
    \ demon appears in an unoccupied space within 60 feet of him, acts as his ally,\
    \ and can't summon other demons. The summoned demon remains until Drivvin dismisses\
    \ it as an action or until the demon is reduced to 0 hit points."
  "name": "Summon Demon (1/Day)"
"source":
- "WDMM"
"image": "[[Drivvin Freth.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 169*

## Environment

urban
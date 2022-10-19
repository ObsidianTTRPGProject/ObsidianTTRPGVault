---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/undead
- monster/environment/urban
aliases: ["Nester"]
statblock: true
"name": "Nester"
"size": "Medium"
"type": "undead"
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
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Common, Draconic, Dwarvish, Giant, Terran"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nester is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Nester can cast [disguise\
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
    \n3rd level: [animate dead](/compendium/spells/animate-dead.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level: [blight](/compendium/spells/blight.md),\
    \ [fire shield](/compendium/spells/fire-shield.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level: [cone of cold](/compendium/spells/cone-of-cold.md), [Rary's telepathic\
    \ bond](/compendium/spells/rarys-telepathic-bond.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Nester casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nester has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDMM"
name: Nester
image: "[[Nester.png]]"
---

# Nester

```statblock
"name": "Nester"
"size": "Medium"
"type": "undead"
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
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Common, Draconic, Dwarvish, Giant, Terran"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nester is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Nester can cast [disguise\
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
    \n3rd level: [animate dead](/compendium/spells/animate-dead.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level: [blight](/compendium/spells/blight.md),\
    \ [fire shield](/compendium/spells/fire-shield.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level: [cone of cold](/compendium/spells/cone-of-cold.md), [Rary's telepathic\
    \ bond](/compendium/spells/rarys-telepathic-bond.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Nester casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nester has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDMM"
"image": "[[Nester.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 131*

## Description

The floating skull and hanging skeletal arms are all that remain of him; they move like they're attached to an [invisible](/rules/conditions.md#invisible) body.

## Environment

urban
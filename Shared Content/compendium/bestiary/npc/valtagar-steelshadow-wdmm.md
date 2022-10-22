---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/urban
aliases: ["Valtagar Steelshadow"]
statblock: true
"name": "Valtagar Steelshadow"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
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
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin); poison"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Dwarvish, Infernal, Terran, Troglodyte, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valtagar is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Valtagar can cast [disguise\
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
    \n4th level: [fire shield](/compendium/spells/fire-shield.md), [Otiluke's\
    \ Resilient Sphere](/compendium/spells/otilukes-resilient-sphere.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Valtagar casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valtagar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The valtagar steelshadow has advantage on saving throws against poison,\
    \ and has resistance against poison damage."
  "name": "Dwarven Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the valtagar steelshadow magically increases in size, along\
    \ with anything they are wearing or carrying. While enlarged, the valtagar steelshadow\
    \ is Large, doubles their damage dice on Strength-based weapon attacks (included\
    \ in the attacks), and makes Strength checks and Strength saving throws with advantage.\
    \ If the valtagar steelshadow lacks the room to become Large, they attain the\
    \ maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The valtagar steelshadow magically turns [invisible](/rules/conditions.md#invisible)\
    \ until they attack, cast a spell, or use their Enlarge, or until their concentration\
    \ is broken, up to 1 hour (as if concentrating on a spell). Any equipment the\
    \ valtagar steelshadow wears or carries is invisible with them."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDMM"
name: Valtagar Steelshadow
image: "[[Valtagar Steelshadow.png]]"
---

# Valtagar Steelshadow

```statblock
"name": "Valtagar Steelshadow"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
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
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin); poison"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common, Dwarvish, Infernal, Terran, Troglodyte, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valtagar is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Valtagar can cast [disguise\
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
    \n4th level: [fire shield](/compendium/spells/fire-shield.md), [Otiluke's\
    \ Resilient Sphere](/compendium/spells/otilukes-resilient-sphere.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [scrying](/compendium/spells/scrying.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [time stop](/compendium/spells/time-stop.md)\n\
    Valtagar casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valtagar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The valtagar steelshadow has advantage on saving throws against poison,\
    \ and has resistance against poison damage."
  "name": "Dwarven Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the valtagar steelshadow magically increases in size, along\
    \ with anything they are wearing or carrying. While enlarged, the valtagar steelshadow\
    \ is Large, doubles their damage dice on Strength-based weapon attacks (included\
    \ in the attacks), and makes Strength checks and Strength saving throws with advantage.\
    \ If the valtagar steelshadow lacks the room to become Large, they attain the\
    \ maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The valtagar steelshadow magically turns [invisible](/rules/conditions.md#invisible)\
    \ until they attack, cast a spell, or use their Enlarge, or until their concentration\
    \ is broken, up to 1 hour (as if concentrating on a spell). Any equipment the\
    \ valtagar steelshadow wears or carries is invisible with them."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "WDMM"
"image": "[[Valtagar Steelshadow.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 271*

## Description

Archmages are exceedingly rare in duergar society, and Valtagar's gift for wizardry never sat well with the clans of Gracklstugh. He doesn't put himself in harm's way unless he has a clear tactical edge.

## Environment

urban
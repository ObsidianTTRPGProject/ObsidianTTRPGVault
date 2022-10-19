---
cssclass: json5e-monster
tags:
- compendium/src/aitfr-isf
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Malivar"]
statblock: true
"name": "Malivar"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Ignan, Infernal"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Malivar is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n2nd level (3 2nd-level\
    \ slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md), [misty\
    \ step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fireball](/compendium/spells/fireball.md),\
    \ [thunder step](/compendium/spells/thunder-step-xge.md)\n\n4th level (3 4th-level\
    \ slots): [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n*5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [conjure elemental](/compendium/spells/conjure-elemental.md)\n\
    Conjuration spell of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Malivar teleports up to 30 feet to an unoccupied space\
    \ that he can see.\n\nIf he instead chooses a space within range that is occupied\
    \ by a willing Small or Medium creature, they both teleport, swapping places."
  "name": "Benign Transportation (Recharges after Malivar Casts a Conjuration Spell\
    \ of 1st Level or Higher)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage"
  "name": "Dagger"
"source":
- "AitFR-ISF"
name: Malivar
image: "[[Malivar.png]]"
---

# Malivar

```statblock
"name": "Malivar"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Ignan, Infernal"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Malivar is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [poison spray](/compendium/spells/poison-spray.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n2nd level (3 2nd-level\
    \ slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md), [misty\
    \ step](/compendium/spells/misty-step.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [fireball](/compendium/spells/fireball.md),\
    \ [thunder step](/compendium/spells/thunder-step-xge.md)\n\n4th level (3 4th-level\
    \ slots): [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n*5th level (2 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md), [conjure elemental](/compendium/spells/conjure-elemental.md)\n\
    Conjuration spell of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Malivar teleports up to 30 feet to an unoccupied space\
    \ that he can see.\n\nIf he instead chooses a space within range that is occupied\
    \ by a willing Small or Medium creature, they both teleport, swapping places."
  "name": "Benign Transportation (Recharges after Malivar Casts a Conjuration Spell\
    \ of 1st Level or Higher)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage"
  "name": "Dagger"
"source":
- "AitFR-ISF"
"image": "[[Malivar.png]]"
```
^statblock

*Source: Adventures in the Forgotten Realms: In Scarlet Flames p. 12*

## Description

Malivar Kresk is a Red Wizard of Thay, a conjurer, and recent apprentice to the treacherous Red Wizard named Morwena. Young, pale white, plain, and slender, Malivar usually hates his own appearance but hopes his red robes and smooth scalp give him a "lean and mean" look.

Now alone on his mission, Malivar doesn't hesitate to use or abuse the trust of others if it means he can get revenge, return to Thay alive, and report on Morwena's betrayal.
---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid
- monster/environment/urban
aliases: ["Diviner Wizard"]
statblock: true
"name": "Diviner Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 15):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [true seeing](/compendium/spells/true-seeing.md)\n\n2/day\
    \ each: [arcane eye](/compendium/spells/arcane-eye.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [fly](/compendium/spells/fly.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [locate object](/compendium/spells/locate-object.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [Rary's telepathic bond](/compendium/spells/rarys-telepathic-bond.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 20 (3d10 + 4) radiant damage."
  "name": "Arcane Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner magically creates a burst of illumination in a 10-foot-radius\
    \ sphere centered on a point within 120 feet of it. Each creature in that area\
    \ must make a DC 15 Wisdom saving throw. On a failed save, a creature takes 45\
    \ (10d8) psychic damage and is [stunned](/rules/conditions.md#stunned) until the\
    \ end of the diviner's next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Overwhelming Revelation (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the diviner or a creature it can see makes an attack roll, a saving\
    \ throw, or an ability check, the diviner rolls a d20 and chooses whether to use\
    \ that roll in place of the d20 rolled for the attack roll, saving throw, or ability\
    \ check. "
  "name": "Portent (3/Day)"
"source":
- "MPMM"
- "VGM"
name: Diviner Wizard
image: "[[Diviner Wizard.png]]"
---

# Diviner Wizard

```statblock
"name": "Diviner Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 15):\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [true seeing](/compendium/spells/true-seeing.md)\n\n2/day\
    \ each: [arcane eye](/compendium/spells/arcane-eye.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [fly](/compendium/spells/fly.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [locate object](/compendium/spells/locate-object.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [Rary's telepathic bond](/compendium/spells/rarys-telepathic-bond.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 20 (3d10 + 4) radiant damage."
  "name": "Arcane Burst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The diviner magically creates a burst of illumination in a 10-foot-radius\
    \ sphere centered on a point within 120 feet of it. Each creature in that area\
    \ must make a DC 15 Wisdom saving throw. On a failed save, a creature takes 45\
    \ (10d8) psychic damage and is [stunned](/rules/conditions.md#stunned) until the\
    \ end of the diviner's next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [stunned](/rules/conditions.md#stunned)."
  "name": "Overwhelming Revelation (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the diviner or a creature it can see makes an attack roll, a saving\
    \ throw, or an ability check, the diviner rolls a d20 and chooses whether to use\
    \ that roll in place of the d20 rolled for the attack roll, saving throw, or ability\
    \ check. "
  "name": "Portent (3/Day)"
"source":
- "MPMM"
- "VGM"
"image": "[[Diviner Wizard.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261, Volo's Guide to Monsters p. 213*

## Description

Diviners peer into the future and know that knowledge is power. They might act aloof and mysterious, hinting at omens and secrets, or they might be know-it-alls, spilling insights to advance their own status.

**Wizards.** Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Environment

urban
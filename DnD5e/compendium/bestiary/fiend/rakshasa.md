---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fiend
- monster/environment/urban
aliases: ["Rakshasa"]
statblock: true
"name": "Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "14"
- !!int "17"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "20"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "8"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Infernal"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). The rakshasa can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [fly](/compendium/spells/fly.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa can't be affected or detected by spells of 6th level or lower\
    \ unless it wishes to be. It has advantage on saving throws against all other\
    \ spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, and the target is cursed if it is a creature. The magical\
    \ curse takes effect whenever the target takes a short or long rest, filling the\
    \ target's thoughts with horrible images and dreams. The cursed target gains no\
    \ benefit from finishing a short or long rest. The curse lasts until it is lifted\
    \ by a [remove curse](/compendium/spells/remove-curse.md) spell or similar magic."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "TCE"
- "CM"
name: Rakshasa
image: "[[Rakshasa.png]]"
---

# Rakshasa

```statblock
"name": "Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "14"
- !!int "17"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "20"
"speed": "walk 40 ft."
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "8"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Infernal"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). The rakshasa can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [dominate\
    \ person](/compendium/spells/dominate-person.md), [fly](/compendium/spells/fly.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n3/day each: [charm person](/compendium/spells/charm-person.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [major image](/compendium/spells/major-image.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa can't be affected or detected by spells of 6th level or lower\
    \ unless it wishes to be. It has advantage on saving throws against all other\
    \ spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The rakshasa makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, and the target is cursed if it is a creature. The magical\
    \ curse takes effect whenever the target takes a short or long rest, filling the\
    \ target's thoughts with horrible images and dreams. The cursed target gains no\
    \ benefit from finishing a short or long rest. The curse lasts until it is lifted\
    \ by a [remove curse](/compendium/spells/remove-curse.md) spell or similar magic."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "TCE"
- "CM"
"image": "[[Rakshasa.png]]"
```
^statblock

*Source: Monster Manual p. 257, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Tasha's Cauldron of Everything, Candlekeep Mysteries*

## Description

The rakshasa employs delicacy and misdirection in its pursuit of dominion over others. Few creatures ever see the fiend in its true form, for it can take on any guise it wants, although it prefers to masquerade as someone powerful or influential: a noble, cardinal, or rich merchant, for example. A rakshasa's true form combines the features of a human and a tiger, with one noteworthy deformity: its palms are where the backs of the hands would be on a human.

**Evil Spirits in Mortal Flesh.**  Rakshasas originated long ago in the Nine Hells, when powerful devils created a dark ritual to free their essence from their fiendish bodies in order to escape the Lower Planes. A rakshasa enters the Material Plane to feed its appetite for humanoid flesh and evil schemes. It selects its prey with care, taking pains to keep its presence in the world a secret.

**Evil Reborn.** For a rakshasa, death on the Material Plane means an agonizing and torturous return to the Nine Hells, where its essence remains trapped until its body reforms-a process that can take months or years.

When the rakshasa is reborn, it has all the memories and knowledge of its former life, and it seeks retribution against the one who slew it. If the target has somehow slipped through its grasp, the rakshasa might punish its killer's family, friends, or descendants.

Like devils, rakshasas killed in the Nine Hells are forever destroyed.

## Environment

urban
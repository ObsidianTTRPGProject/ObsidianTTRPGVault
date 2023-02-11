---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Dagryn"]
statblock: true
"name": "Dagryn"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "12"
- !!int "8"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "5"
  "Performance": !!int "5"
  "Persuasion": !!int "5"
"damage_resistances": "poison"
"damage_immunities": "acid"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn's innate spellcasting ability is Charisma (spell save DC 13). Dagryn\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [alter self](/compendium/spells/alter-self.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [major image](/compendium/spells/major-image.md), [levitate](/compendium/spells/levitate.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn is a 11th-level spellcaster. His spellcasting ability is Charisma\
    \ (save DC 13, +5 to hit with spell attacks). He regains his expended spell slots\
    \ when he finishes a short or long rest. He knows the following warlock spells:\n\
    \nCantrips (at will): [blade ward](/compendium/spells/blade-ward.md), [eldritch\
    \ blast](/compendium/spells/eldritch-blast.md), [friends](/compendium/spells/friends.md),\
    \ [message](/compendium/spells/message.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st-5th level (3 5th-level slots): [bane](/compendium/spells/bane.md), [charm\
    \ person](/compendium/spells/charm-person.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [fear](/compendium/spells/fear.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [misty step](/compendium/spells/misty-step.md), [phantasmal force](/compendium/spells/phantasmal-force.md),\
    \ [seeming](/compendium/spells/seeming.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Dwarven Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Dagryn drops to 0 hit points, instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ he begins to transform into his dragon form. He immediately gains all the statistics\
    \ of an adult black dragon with the exception that his size is medium, and he\
    \ is [stunned](/rules/conditions.md#stunned). At the start of his next turn, he\
    \ grows to large size, but remains [stunned](/rules/conditions.md#stunned). At\
    \ the start of his subsequent turn, Dagryn grows to huge size, takes the form\
    \ of an adult black dragon and is no longer considered [stunned](/rules/conditions.md#stunned).\
    \ Dagryn remains in his dragon form for 24 hours whereupon he reverts to his dwarven\
    \ form and stat block."
  "name": "Draconic Transformation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn magically turns [invisible](/rules/conditions.md#invisible) until\
    \ he attacks, casts a spell, or until its concentration is broken, up to 1 hour\
    \ (as if concentrating on a spell). Any equipment Dagryn wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MaBJoV"
name: Dagryn
image: "[[Dagryn.png]]"
---

# Dagryn

```statblock
"name": "Dagryn"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "12"
- !!int "8"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "5"
  "Performance": !!int "5"
  "Persuasion": !!int "5"
"damage_resistances": "poison"
"damage_immunities": "acid"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Undercommon"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn's innate spellcasting ability is Charisma (spell save DC 13). Dagryn\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [alter self](/compendium/spells/alter-self.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [major image](/compendium/spells/major-image.md), [levitate](/compendium/spells/levitate.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn is a 11th-level spellcaster. His spellcasting ability is Charisma\
    \ (save DC 13, +5 to hit with spell attacks). He regains his expended spell slots\
    \ when he finishes a short or long rest. He knows the following warlock spells:\n\
    \nCantrips (at will): [blade ward](/compendium/spells/blade-ward.md), [eldritch\
    \ blast](/compendium/spells/eldritch-blast.md), [friends](/compendium/spells/friends.md),\
    \ [message](/compendium/spells/message.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st-5th level (3 5th-level slots): [bane](/compendium/spells/bane.md), [charm\
    \ person](/compendium/spells/charm-person.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [dominate beast](/compendium/spells/dominate-beast.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [fear](/compendium/spells/fear.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [misty step](/compendium/spells/misty-step.md), [phantasmal force](/compendium/spells/phantasmal-force.md),\
    \ [seeming](/compendium/spells/seeming.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Dwarven Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Dagryn drops to 0 hit points, instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ he begins to transform into his dragon form. He immediately gains all the statistics\
    \ of an adult black dragon with the exception that his size is medium, and he\
    \ is [stunned](/rules/conditions.md#stunned). At the start of his next turn, he\
    \ grows to large size, but remains [stunned](/rules/conditions.md#stunned). At\
    \ the start of his subsequent turn, Dagryn grows to huge size, takes the form\
    \ of an adult black dragon and is no longer considered [stunned](/rules/conditions.md#stunned).\
    \ Dagryn remains in his dragon form for 24 hours whereupon he reverts to his dwarven\
    \ form and stat block."
  "name": "Draconic Transformation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dagryn magically turns [invisible](/rules/conditions.md#invisible) until\
    \ he attacks, casts a spell, or until its concentration is broken, up to 1 hour\
    \ (as if concentrating on a spell). Any equipment Dagryn wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MaBJoV"
"image": "[[Dagryn.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 110*

## Description

> [!quote]- A quote from Volo  
> 
> I've long pursued the story of the dwarf who could change into a dragon. That Minsc and his ridiculous pet could track him down first is infuriating!

Dagryn appears as an old, stooped dwarf, crippled with age and afflictions. Long ago, however, he went by another name... and another form.

Originally, Dagryn was a powerful black dragon that hunted the Underdark, feasting on everything from beholders to drow to illithid. But he was particularly fond of dwarves, whom he considered a delicacy. Supremely arrogant, Dagryn believe no denizens of the Underdark could challenge his power, until he had the misfortune of angering a coven of hags.

The hags trapped and killed the great wyrm, but instead of leaving him for dead, they reincarnated him in the form of a dwarf—a twisted joke on the once fearsome creature. In a final mockery of his former glory, they branded him with the name Dagryn—a bastardized echo of the mighty beast he once had been. Dagryn has now lived so many years as a dwarf that the memories of his life before the reincarnation have mostly faded. In addition to forgetting his true name, he no longer remembers his origin world, though he knows that Faerûn is not where he was born.

In the early years after his transformation, Dagryn discovered another cruel quirk of the hag's curse. After several years his wretched existence as a lowly dwarf became unbearable, and Dagryn was driven to suicide. But upon his death, he woke to discover his body had been restored to its original dragon form. However, his joy was short lived—after 24 hours he once again shifted back into his dwarven shape... but now he had a malformed leg, giving him a painful limp.

Over the next decades, the true scope of the horror inflicted upon him became apparent. Each time his dwarven body was killed, he would be reborn as a dragon for a single day. And each time he turned back into a dwarf he would find himself afflicted with some new infirmity: arthritic joints; rotting teeth; punishing migraines; constant ulcers.

Dagryn now dreads adding new ailments to the relentless, crippling pain of his dwarven body. Whenever he is killed—a somewhat frequent occurrence, as a frail, old dwarf is an easy target—he spends his time as a dragon unleashing mad vengeance upon the world in an orgy of death, destruction, and mayhem. As a result, he has developed two very distinct and contrasting personalities: the timid, subservient dwarf and the raging, hate-filled dragon.
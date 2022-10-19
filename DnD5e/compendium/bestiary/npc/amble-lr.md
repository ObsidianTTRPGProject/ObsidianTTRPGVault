---
cssclass: json5e-monster
tags:
- compendium/src/lr
- monster/size/medium
- monster/type/humanoid/tortle
aliases: ["Amble"]
statblock: true
"name": "Amble"
"size": "Medium"
"type": "humanoid"
"subtype": "tortle"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "18"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "8"
  "Intelligence": !!int "4"
  "Strength": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Medicine": !!int "8"
  "Animal Handling": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Aquan, Common, Druidic"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble is a 12th-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 16, +8 to hit with spell attacks). Amble has the following druid\
    \ spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [mending](/compendium/spells/mending.md), [shape water](/compendium/spells/shape-water-xge.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [absorb elements](/compendium/spells/absorb-elements-xge.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [darkvision](/compendium/spells/darkvision.md),\
    \ [hold person](/compendium/spells/hold-person.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)\n\n4th level (3 4th-level\
    \ slots): [charm monster](/compendium/spells/charm-monster-xge.md), [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level (2 5th-level\
    \ slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\n6th level (1\
    \ 6th-level slots): [conjure fey](/compendium/spells/conjure-fey.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of a short or long rest, Amble can touch a point in space,\
    \ and an [invisible](/rules/conditions.md#invisible), 30-foot-radius sphere of\
    \ magic appears, centered on that point. Total cover blocks the sphere.\n\nWhile\
    \ within the sphere, Amble and their allies gain a +5 bonus to Dexterity (Stealth)\
    \ and Wisdom (Perception) checks, and any light from open flames in the sphere\
    \ isn't visible outside it.\n\nThe sphere vanishes at the end of the rest or when\
    \ Amble leaves the sphere."
  "name": "Hearth of Moonlight and Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble can hold their breath for up to 1 hour at a time."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "(As a Bonus Action) Amble can choose one creature they can see within 120\
    \ feet of them and spend up to 6d6 of their die pool. Roll the spent dice and\
    \ add them together. The target regains a number of hit points equal to the total.\
    \ The target also gains 1 temporary hit point per die spent. Amble regains all\
    \ expended dice when they finish a long rest."
  "name": "Balm of the Summer Court (12d6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "(As a Bonus Action) Amble may teleport up to 60 feet to an unoccupied space\
    \ they can see."
  "name": "Hidden Paths (4/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble magically polymorphs into a beast with a challenge rating of 1 or\
    \ less, and can remain in this form for up to 6 hours. Amble's equipment melds\
    \ with their new form. Amble reverts to their true form if they die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Amble can revert to their true form using a bonus action on their turn.\n\n\
    Amble's game statistics are replaced by the statistics of the beast, but they\
    \ retain their alignment, personality, and Intelligence, Wisdom, and Charisma\
    \ scores. Amble also retains all their skill and saving throw proficiencies, in\
    \ addition to gaining those of the creature. If the creature has the same proficiency\
    \ as Amble and the bonus in its stat block is higher, use the creature's bonus\
    \ instead of Amble's.\n\nWhen Amble transforms, they assume the beast's hit points\
    \ and Hit Dice. When Amble reverts to their normal form, they return to the number\
    \ of hit points they had before they transformed. However, if Amble reverts as\
    \ a result of dropping to 0 hit points, any excess damage carries over their normal\
    \ form.\n\nAmble can't cast spells, and their ability to speak or take any action\
    \ that requires hands is limited to the capabilities of their beast form. Transforming\
    \ doesn't break Amble's concentration on a spell they've already cast however,\
    \ or prevent them from taking actions that are part of a spell."
  "name": "Change Shape (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit (+8 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 5 (1d6 + 2) bludgeoning damage, or 8 (1d8 + 4) bludgeoning\
    \ damage with shillelagh."
  "name": "Club"
"source":
- "LR"
name: Amble
image: "[[Amble.png]]"
---

# Amble

```statblock
"name": "Amble"
"size": "Medium"
"type": "humanoid"
"subtype": "tortle"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "14"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "18"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "8"
  "Intelligence": !!int "4"
  "Strength": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Medicine": !!int "8"
  "Animal Handling": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "8"
"senses": "passive Perception 18"
"languages": "Aquan, Common, Druidic"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble is a 12th-level spellcaster. Their spellcasting ability is Wisdom\
    \ (spell save DC 16, +8 to hit with spell attacks). Amble has the following druid\
    \ spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [mending](/compendium/spells/mending.md), [shape water](/compendium/spells/shape-water-xge.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n1st level (4 1st-level slots):\
    \ [absorb elements](/compendium/spells/absorb-elements-xge.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n2nd level (3 2nd-level slots): [darkvision](/compendium/spells/darkvision.md),\
    \ [hold person](/compendium/spells/hold-person.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [moonbeam](/compendium/spells/moonbeam.md)\n\n3rd level (3 3rd-level slots):\
    \ [conjure animals](/compendium/spells/conjure-animals.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)\n\n4th level (3 4th-level\
    \ slots): [charm monster](/compendium/spells/charm-monster-xge.md), [freedom\
    \ of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level (2 5th-level\
    \ slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\n6th level (1\
    \ 6th-level slots): [conjure fey](/compendium/spells/conjure-fey.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of a short or long rest, Amble can touch a point in space,\
    \ and an [invisible](/rules/conditions.md#invisible), 30-foot-radius sphere of\
    \ magic appears, centered on that point. Total cover blocks the sphere.\n\nWhile\
    \ within the sphere, Amble and their allies gain a +5 bonus to Dexterity (Stealth)\
    \ and Wisdom (Perception) checks, and any light from open flames in the sphere\
    \ isn't visible outside it.\n\nThe sphere vanishes at the end of the rest or when\
    \ Amble leaves the sphere."
  "name": "Hearth of Moonlight and Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble can hold their breath for up to 1 hour at a time."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "(As a Bonus Action) Amble can choose one creature they can see within 120\
    \ feet of them and spend up to 6d6 of their die pool. Roll the spent dice and\
    \ add them together. The target regains a number of hit points equal to the total.\
    \ The target also gains 1 temporary hit point per die spent. Amble regains all\
    \ expended dice when they finish a long rest."
  "name": "Balm of the Summer Court (12d6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "(As a Bonus Action) Amble may teleport up to 60 feet to an unoccupied space\
    \ they can see."
  "name": "Hidden Paths (4/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Amble magically polymorphs into a beast with a challenge rating of 1 or\
    \ less, and can remain in this form for up to 6 hours. Amble's equipment melds\
    \ with their new form. Amble reverts to their true form if they die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Amble can revert to their true form using a bonus action on their turn.\n\n\
    Amble's game statistics are replaced by the statistics of the beast, but they\
    \ retain their alignment, personality, and Intelligence, Wisdom, and Charisma\
    \ scores. Amble also retains all their skill and saving throw proficiencies, in\
    \ addition to gaining those of the creature. If the creature has the same proficiency\
    \ as Amble and the bonus in its stat block is higher, use the creature's bonus\
    \ instead of Amble's.\n\nWhen Amble transforms, they assume the beast's hit points\
    \ and Hit Dice. When Amble reverts to their normal form, they return to the number\
    \ of hit points they had before they transformed. However, if Amble reverts as\
    \ a result of dropping to 0 hit points, any excess damage carries over their normal\
    \ form.\n\nAmble can't cast spells, and their ability to speak or take any action\
    \ that requires hands is limited to the capabilities of their beast form. Transforming\
    \ doesn't break Amble's concentration on a spell they've already cast however,\
    \ or prevent them from taking actions that are part of a spell."
  "name": "Change Shape (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit (+8 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 5 (1d6 + 2) bludgeoning damage, or 8 (1d8 + 4) bludgeoning\
    \ damage with shillelagh."
  "name": "Club"
"source":
- "LR"
"image": "[[Amble.png]]"
```
^statblock

*Source: Locathah Rising p. 15*
---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/humanoid/tortle
aliases: ["Krull"]
statblock: true
"name": "Krull"
"size": "Medium"
"type": "humanoid"
"subtype": "tortle"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "20"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "20"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
"skillsaves":
  "Medicine": !!int "8"
  "Nature": !!int "4"
  "Arcana": !!int "4"
  "Survival": !!int "8"
"senses": "passive Perception 15"
"languages": "Aquan, Common, Draconic"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull is a 14th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 16, +8 to hit with spell attacks). He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [detect evil and\
    \ good](/compendium/spells/detect-evil-and-good.md), [false life](/compendium/spells/false-life.md),\
    \ [inflict wounds](/compendium/spells/inflict-wounds.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [gentle repose](/compendium/spells/gentle-repose.md), [hold person](/compendium/spells/hold-person.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [animate dead](/compendium/spells/animate-dead.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [speak with dead](/compendium/spells/speak-with-dead.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [blight](/compendium/spells/blight.md),\
    \ [death ward](/compendium/spells/death-ward.md), [divination](/compendium/spells/divination.md),\
    \ [locate creature](/compendium/spells/locate-creature.md)\n\n5th level (2 5th-level\
    \ slots): [antilife shell](/compendium/spells/antilife-shell.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [contagion](/compendium/spells/contagion.md), [greater restoration](/compendium/spells/greater-restoration.md)\n\
    \n6th level (1 6th-level slots): [create undead](/compendium/spells/create-undead.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [divine word](/compendium/spells/divine-word.md), [regenerate](/compendium/spells/regenerate.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull can hold his breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Necrotic damage dealt by Krull's spells ignores resistance to necrotic\
    \ damage."
  "name": "Inescapable Destruction"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "+1 Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull withdraws into his shell. Until he emerges as a bonus action, he\
    \ has a +4 bonus to AC and has advantage on Strength and Constitution saving throws.\
    \ While in his shell, Krull is [prone](/rules/conditions.md#prone), his speed\
    \ is 0 and can't increase, he has disadvantage on Dexterity saving throws, he\
    \ can't take reactions, and the only action he can take is to emerge from his\
    \ shell."
  "name": "Shell Defense"
"source":
- "BGDIA"
name: Krull
image: "[[Krull.png]]"
---

# Krull

```statblock
"name": "Krull"
"size": "Medium"
"type": "humanoid"
"subtype": "tortle"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "20"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "20"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
"skillsaves":
  "Medicine": !!int "8"
  "Nature": !!int "4"
  "Arcana": !!int "4"
  "Survival": !!int "8"
"senses": "passive Perception 15"
"languages": "Aquan, Common, Draconic"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull is a 14th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 16, +8 to hit with spell attacks). He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [cure wounds](/compendium/spells/cure-wounds.md), [detect evil and\
    \ good](/compendium/spells/detect-evil-and-good.md), [false life](/compendium/spells/false-life.md),\
    \ [inflict wounds](/compendium/spells/inflict-wounds.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [gentle repose](/compendium/spells/gentle-repose.md), [hold person](/compendium/spells/hold-person.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [animate dead](/compendium/spells/animate-dead.md), [magic circle](/compendium/spells/magic-circle.md),\
    \ [speak with dead](/compendium/spells/speak-with-dead.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [blight](/compendium/spells/blight.md),\
    \ [death ward](/compendium/spells/death-ward.md), [divination](/compendium/spells/divination.md),\
    \ [locate creature](/compendium/spells/locate-creature.md)\n\n5th level (2 5th-level\
    \ slots): [antilife shell](/compendium/spells/antilife-shell.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [contagion](/compendium/spells/contagion.md), [greater restoration](/compendium/spells/greater-restoration.md)\n\
    \n6th level (1 6th-level slots): [create undead](/compendium/spells/create-undead.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [divine word](/compendium/spells/divine-word.md), [regenerate](/compendium/spells/regenerate.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull can hold his breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Necrotic damage dealt by Krull's spells ignores resistance to necrotic\
    \ damage."
  "name": "Inescapable Destruction"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) bludgeoning damage plus 9 (2d8) necrotic damage."
  "name": "+1 Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Krull withdraws into his shell. Until he emerges as a bonus action, he\
    \ has a +4 bonus to AC and has advantage on Strength and Constitution saving throws.\
    \ While in his shell, Krull is [prone](/rules/conditions.md#prone), his speed\
    \ is 0 and can't increase, he has disadvantage on Dexterity saving throws, he\
    \ can't take reactions, and the only action he can take is to emerge from his\
    \ shell."
  "name": "Shell Defense"
"source":
- "BGDIA"
"image": "[[Krull.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 110*
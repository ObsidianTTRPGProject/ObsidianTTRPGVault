---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Edwin Odesseiron"]
statblock: true
"name": "Edwin Odesseiron"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "10"
"skillsaves":
  "History": !!int "15"
  "Arcana": !!int "15"
"senses": "passive Perception 12"
"languages": "Abyssal, Aquan, Auran, Common, Ignan, Infernal, Terran"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 18, +12 to hit with spell attacks). Edwin has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [shield](/compendium/spells/shield.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n2nd level (3 2nd-level\
    \ slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\n\
    5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [arcane gate](/compendium/spells/arcane-gate.md),\
    \ [contingency](/compendium/spells/contingency.md)\n\n7th level (1 7th-level\
    \ slots): [simulacrum](/compendium/spells/simulacrum.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [clone](/compendium/spells/clone.md), [maze](/compendium/spells/maze.md)\n\
    \n9th level (1 9th-level slots): [meteor swarm](/compendium/spells/meteor-swarm.md)\n\
     Conjuration spell of 1st level or higher."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Edwin is concentrating on a conjuration spell, his concentration\
    \ cannot be broken as a result of taking damage."
  "name": "Focused Conjuration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magic quarterstaff that grants a +2 bonus to attack and damage rolls\
    \ made with it. While held it grants a +2 bonus to armor class, saving throws,\
    \ and spell attack rolls (all factored into Edwin's statistics). The staff has\
    \ 20 charges for the following properties. The staff regains 2d8 + 4 expended\
    \ charges daily at dawn.\n\nWhile holding this staff, Edwin can use an action\
    \ to expend 1 or more of its Charges to cast one of the following Spells from\
    \ it, using his spell save DC and spell attack bonus: [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (5 charges), [fireball](/compendium/spells/fireball.md) (5th-level version,\
    \ 5 charges), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\
    \ (6 charges), [hold monster](/compendium/spells/hold-monster.md) (5 charges),\
    \ [levitate](/compendium/spells/levitate.md) (2 charges), [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ (5th-level version, 5 charges), [magic missile](/compendium/spells/magic-missile.md)\
    \ (1 charge), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md)\
    \ (1 charge), or [wall of force](/compendium/spells/wall-of-force.md) (5 charges)."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin has a [contingency](/compendium/spells/contingency.md) spell trigger\
    \ if he is [incapacitated](/rules/conditions.md#incapacitated), [paralyzed](/rules/conditions.md#paralyzed)\
    \ or [stunned](/rules/conditions.md#stunned). When this occurs, a 6th level [dispel\
    \ magic](/compendium/spells/dispel-magic.md) targets himself. He also has a clone\
    \ body stored in a cavern one mile beneath the city of Baldur's Gate."
  "name": "Contingency"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin is always accompanied by a simulacrum of himself. The copy is identical\
    \ to him in all respects except that it has 58 HP, does not have the staff of\
    \ power and does not have a 7th level spell slot."
  "name": "Simulacrum"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage or 6 (1d8 + 2) bludgeoning damage if wielded with two\
    \ hands. Edwin can expend one of the staff's charges to deal an extra 3 (1d6)\
    \ force damage on a hit."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin magically summons three [hell hounds](/compendium/bestiary/fiend/hell-hound.md).\
    \ The summoned hell hounds appear in an unoccupied space within 60 feet of its\
    \ summoner, and act as allies of their summoner. They remain for 10 minutes, until\
    \ they or their summoner dies, or until their summoner dismisses them as an action."
  "name": "Summon Hell Hounds"
"source":
- "MaBJoV"
name: Edwin Odesseiron
image: "[[Edwin Odesseiron.png]]"
---

# Edwin Odesseiron

```statblock
"name": "Edwin Odesseiron"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "10"
"skillsaves":
  "History": !!int "15"
  "Arcana": !!int "15"
"senses": "passive Perception 12"
"languages": "Abyssal, Aquan, Auran, Common, Ignan, Infernal, Terran"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 18, +12 to hit with spell attacks). Edwin has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [mage armor](/compendium/spells/mage-armor.md), [shield](/compendium/spells/shield.md),\
    \ [unseen servant](/compendium/spells/unseen-servant.md)\n\n2nd level (3 2nd-level\
    \ slots): [cloud of daggers](/compendium/spells/cloud-of-daggers.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [fireball](/compendium/spells/fireball.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\n\
    5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [conjure elemental](/compendium/spells/conjure-elemental.md), [scrying](/compendium/spells/scrying.md)\n\
    \n6th level (1 6th-level slots): [arcane gate](/compendium/spells/arcane-gate.md),\
    \ [contingency](/compendium/spells/contingency.md)\n\n7th level (1 7th-level\
    \ slots): [simulacrum](/compendium/spells/simulacrum.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [clone](/compendium/spells/clone.md), [maze](/compendium/spells/maze.md)\n\
    \n9th level (1 9th-level slots): [meteor swarm](/compendium/spells/meteor-swarm.md)\n\
     Conjuration spell of 1st level or higher."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Edwin is concentrating on a conjuration spell, his concentration\
    \ cannot be broken as a result of taking damage."
  "name": "Focused Conjuration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magic quarterstaff that grants a +2 bonus to attack and damage rolls\
    \ made with it. While held it grants a +2 bonus to armor class, saving throws,\
    \ and spell attack rolls (all factored into Edwin's statistics). The staff has\
    \ 20 charges for the following properties. The staff regains 2d8 + 4 expended\
    \ charges daily at dawn.\n\nWhile holding this staff, Edwin can use an action\
    \ to expend 1 or more of its Charges to cast one of the following Spells from\
    \ it, using his spell save DC and spell attack bonus: [cone of cold](/compendium/spells/cone-of-cold.md)\
    \ (5 charges), [fireball](/compendium/spells/fireball.md) (5th-level version,\
    \ 5 charges), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\
    \ (6 charges), [hold monster](/compendium/spells/hold-monster.md) (5 charges),\
    \ [levitate](/compendium/spells/levitate.md) (2 charges), [lightning bolt](/compendium/spells/lightning-bolt.md)\
    \ (5th-level version, 5 charges), [magic missile](/compendium/spells/magic-missile.md)\
    \ (1 charge), [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md)\
    \ (1 charge), or [wall of force](/compendium/spells/wall-of-force.md) (5 charges)."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin has a [contingency](/compendium/spells/contingency.md) spell trigger\
    \ if he is [incapacitated](/rules/conditions.md#incapacitated), [paralyzed](/rules/conditions.md#paralyzed)\
    \ or [stunned](/rules/conditions.md#stunned). When this occurs, a 6th level [dispel\
    \ magic](/compendium/spells/dispel-magic.md) targets himself. He also has a clone\
    \ body stored in a cavern one mile beneath the city of Baldur's Gate."
  "name": "Contingency"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin is always accompanied by a simulacrum of himself. The copy is identical\
    \ to him in all respects except that it has 58 HP, does not have the staff of\
    \ power and does not have a 7th level spell slot."
  "name": "Simulacrum"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage or 6 (1d8 + 2) bludgeoning damage if wielded with two\
    \ hands. Edwin can expend one of the staff's charges to deal an extra 3 (1d6)\
    \ force damage on a hit."
  "name": "Staff of Power"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Edwin magically summons three [hell hounds](/compendium/bestiary/fiend/hell-hound.md).\
    \ The summoned hell hounds appear in an unoccupied space within 60 feet of its\
    \ summoner, and act as allies of their summoner. They remain for 10 minutes, until\
    \ they or their summoner dies, or until their summoner dismisses them as an action."
  "name": "Summon Hell Hounds"
"source":
- "MaBJoV"
"image": "[[Edwin Odesseiron.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 114*

## Description

In many ways an archetypal Red Wizard, Edwin Odesseiron is an exceedingly arrogant conjuration mage hailing from the eastern nation of Thay. He originally traveled west to the Sword Coast on a mission to kill the Rashemi Wychlaran Dynaheir, both as part of a personal rivalry and under orders from his superior Red Wizards. Once his mission was accomplished, and Dynaheir was dead, Edwin remained on the Sword Coast in order to build up his own personal power without the oversight of the Zulkirs of Thay.

While Edwin had a falling out with the Red Wizards of Thay some time ago, he managed to repair the relationship by delivering one of the Nether Scrolls to the ruler of Thay—Szass Tam. His short time studying the Nether Scroll resulted in some calamitous results, but one of the spells he learned imparted him with the longevity of an elf.

While Edwin will often return to his homeland of Thay, he can most often be found in the city of Baldur's Gate. He has recently taken over Ramazith's Tower and adopted the identity of Lorroakan, the young mage who formerly lived in the tower (now dead by Edwin's hand).

Despite his inarguably high intelligence, Edwin seems to lack common sense. As a result, his grand schemes and power grabs are typically undone by his own hubris and oversights. Edwin almost universally treats others with disdain, openly insulting his "lessers." As much as Edwin detests those he views as his inferiors, he gets along no better with his betters. (His envy of the legendary wizard Elminster Aumar is particularly venomous.) Edwin has a simulacrum of himself that he uses to augment his power or send into dangerous situations. Since he doesn't respect the intelligence of anyone other than himself, he often finds himself engaged in conversation with his simulacrum.
---
cssclass: json5e-monster
tags:
- compendium/src/lr
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/coastal
- monster/environment/underwater
aliases: ["Whymsee"]
statblock: true
"name": "Whymsee"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "Common, Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee's spellcasting ability is Wisdom (spell save DC 13, +5 to hit with\
    \ spell attacks). It can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [command](/compendium/spells/command.md), [create\
    \ or destroy water](/compendium/spells/create-or-destroy-water.md)\n\n1/day\
    \ each: [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n3/day each: [control\
    \ water](/compendium/spells/control-water.md), [darkness](/compendium/spells/darkness.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10)\
    \ thunder damage."
  "name": "Thunderous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Whymsee can expel an ink cloud in a 20-foot radius. The\
    \ cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than kraken priests or a kraken. Each creature other than a kraken priest\
    \ or a kraken that ends its turn there must succeed on a DC 14 Constitution saving\
    \ throw, taking 9 (2d8) poison damage on a failed save, or half as much damage\
    \ on a successful one. A strong current disperses the cloud, which otherwise disappears\
    \ at the end of Whymsee's next turn."
  "name": "Ink Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee withdraws into her shell. Until she emerges, she gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ her shell, Whymsee is [prone](/rules/conditions.md#prone), her speed is 0 and\
    \ can't increase, she has disadvantage on Dexterity saving throws, it can't take\
    \ reactions, and the only action she can take is a bonus action to emerge."
  "name": "Shell Defense"
"source":
- "LR"
name: Whymsee
image: "[[Whymsee.png]]"
---

# Whymsee

```statblock
"name": "Whymsee"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 15"
"languages": "Common, Aquan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee's spellcasting ability is Wisdom (spell save DC 13, +5 to hit with\
    \ spell attacks). It can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [command](/compendium/spells/command.md), [create\
    \ or destroy water](/compendium/spells/create-or-destroy-water.md)\n\n1/day\
    \ each: [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n3/day each: [control\
    \ water](/compendium/spells/control-water.md), [darkness](/compendium/spells/darkness.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10)\
    \ thunder damage."
  "name": "Thunderous Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Whymsee can expel an ink cloud in a 20-foot radius. The\
    \ cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than kraken priests or a kraken. Each creature other than a kraken priest\
    \ or a kraken that ends its turn there must succeed on a DC 14 Constitution saving\
    \ throw, taking 9 (2d8) poison damage on a failed save, or half as much damage\
    \ on a successful one. A strong current disperses the cloud, which otherwise disappears\
    \ at the end of Whymsee's next turn."
  "name": "Ink Cloud"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whymsee withdraws into her shell. Until she emerges, she gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ her shell, Whymsee is [prone](/rules/conditions.md#prone), her speed is 0 and\
    \ can't increase, she has disadvantage on Dexterity saving throws, it can't take\
    \ reactions, and the only action she can take is a bonus action to emerge."
  "name": "Shell Defense"
"source":
- "LR"
"image": "[[Whymsee.png]]"
```
^statblock

*Source: Locathah Rising p. 20*

## Environment

coastal, underwater
---
cssclass: json5e-monster
tags:
- compendium/src/dip
- monster/size/medium
- monster/type/humanoid/half-orc
- monster/type/humanoid/shapechanger
aliases: ["Anchorite of Talos"]
statblock: true
"name": "Anchorite of Talos"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "9"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "1"
  "Stealth": !!int "3"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anchorite's innate spellcasting ability is Wisdom (spell save DC 12).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [augury](/compendium/spells/augury.md), [bless](/compendium/spells/bless.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md) (8d6 damage), [revivify](/compendium/spells/revivify.md)\n\
    \n3/day: [thunderwave](/compendium/spells/thunderwave.md) (2d8 damage)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anchorite can use its action to polymorph into a boar or back into\
    \ its true form, which is humanoid. Its statistics are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Clawed Gauntlet (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Tusk (Boar Form Only)"
"source":
- "DIP"
- "DC"
- "SDW"
name: Anchorite of Talos
image: "[[Anchorite of Talos.png]]"
---

# Anchorite of Talos

```statblock
"name": "Anchorite of Talos"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "9"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "1"
  "Stealth": !!int "3"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anchorite's innate spellcasting ability is Wisdom (spell save DC 12).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \n1/day each: [augury](/compendium/spells/augury.md), [bless](/compendium/spells/bless.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md) (8d6 damage), [revivify](/compendium/spells/revivify.md)\n\
    \n3/day: [thunderwave](/compendium/spells/thunderwave.md) (2d8 damage)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The anchorite can use its action to polymorph into a boar or back into\
    \ its true form, which is humanoid. Its statistics are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Clawed Gauntlet (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Tusk (Boar Form Only)"
"source":
- "DIP"
- "DC"
- "SDW"
"image": "[[Anchorite of Talos.png]]"
```
^statblock

*Source: Dragon of Icespire Peak p. 51, Divine Contention, Sleeping Dragon's Wake*

## Description

These religious recluses are granted spellcasting power by Talos, the god of storms. Their human ancestors bred with orcs, and now all anchorites of Talos are half-orcs.
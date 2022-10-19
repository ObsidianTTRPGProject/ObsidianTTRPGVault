---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/medium
- monster/type/humanoid/lizardfolk
- monster/environment/forest
- monster/environment/swamp
aliases: ["Skr'a S'orsk"]
statblock: true
"name": "Skr'a S'orsk"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skr'a S'orsk is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). Skr'a S'orsk has the following\
    \ druid spells prepared:\n\nCantrips (at will): [produce flame](/compendium/spells/produce-flame.md),\
    \ [resistance](/compendium/spells/resistance.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md)\n\n2nd level (3 2nd-level slots):\
    \ [blindness/deafness](/compendium/spells/blindness-deafness.md), [spike growth](/compendium/spells/spike-growth.md)\n\
    \n3rd level (2 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [conjure animals](/compendium/spells/conjure-animals.md) (reptiles only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Lizardfolk Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage, or 7 (1d10 + 2) piercing damage in [crocodile](/compendium/bestiary/beast/crocodile.md)\
    \ form. If Skr'a S'orsk is in crocodile form and the target is a Large or smaller\
    \ creature, the target is [grappled](/rules/conditions.md#grappled) (escape DC\
    \ 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Skr'a S'orsk can't bite another target. If Skr'a S'orsk reverts to its true\
    \ form, the grapple ends."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws (Lizardfolk Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk magically polymorphs into a [crocodile](/compendium/bestiary/beast/crocodile.md),\
    \ remaining in that form for up to 1 hour. It can revert to its true form as a\
    \ bonus action. Its statistics, other than its size, are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "EGW"
name: Skr'a S'orsk
image: "[[Skr'a S'orsk.png]]"
---

# Skr'a S'orsk

```statblock
"name": "Skr'a S'orsk"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Skr'a S'orsk is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). Skr'a S'orsk has the following\
    \ druid spells prepared:\n\nCantrips (at will): [produce flame](/compendium/spells/produce-flame.md),\
    \ [resistance](/compendium/spells/resistance.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [entangle](/compendium/spells/entangle.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md)\n\n2nd level (3 2nd-level slots):\
    \ [blindness/deafness](/compendium/spells/blindness-deafness.md), [spike growth](/compendium/spells/spike-growth.md)\n\
    \n3rd level (2 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [conjure animals](/compendium/spells/conjure-animals.md) (reptiles only)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Lizardfolk Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage, or 7 (1d10 + 2) piercing damage in [crocodile](/compendium/bestiary/beast/crocodile.md)\
    \ form. If Skr'a S'orsk is in crocodile form and the target is a Large or smaller\
    \ creature, the target is [grappled](/rules/conditions.md#grappled) (escape DC\
    \ 12). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Skr'a S'orsk can't bite another target. If Skr'a S'orsk reverts to its true\
    \ form, the grapple ends."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claws (Lizardfolk Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lizardfolk magically polymorphs into a [crocodile](/compendium/bestiary/beast/crocodile.md),\
    \ remaining in that form for up to 1 hour. It can revert to its true form as a\
    \ bonus action. Its statistics, other than its size, are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "EGW"
"image": "[[Skr'a S'orsk.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 254*

## Environment

forest, swamp
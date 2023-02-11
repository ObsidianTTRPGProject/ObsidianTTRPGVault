---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/humanoid/goliath
- monster/type/humanoid/shapechanger
aliases: ["Goliath Werebear"]
statblock: true
"name": "Goliath Werebear"
"size": "Medium"
"type": "humanoid"
"subtype": "goliath, shapechanger"
"alignment": "Neutral Good"
"ac": !!int "10"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft. (40 ft. swim 30 ft. in bear or hybrid form)"
"skillsaves":
  "Athletics": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "5"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 18"
"languages": "Common, Giant (can't speak in bear form)"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear is acclimated to high altitude, including elevations above\
    \ 20,000 feet."
  "name": "Mountain Born"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear counts as one size larger when determining its carrying capacity\
    \ and the weight it can push, drag, or lift."
  "name": "Powerful Build (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear can use its action to polymorph into a Large bear-humanoid\
    \ hybrid or into a Large polar bear, or back into its goliath form. Its statistics,\
    \ other than its size and AC, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10\
    \ + 5) piercing damage. If the target is a humanoid, it must succeed on a DC 15\
    \ Constitution saving throw or be cursed with werebear lycanthropy, as described\
    \ in the Monster Manual."
  "name": "Bite (Bear or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Claw (Bear or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d12\
    \ + 5) slashing damage."
  "name": "Greataxe (Humanoid or Hybrid Form Only)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the werebear takes damage, it reduces the damage taken by 10 (1d12\
    \ + 4)."
  "name": "Stone's Endurance (Recharges after a Short or Long Rest)"
"source":
- "IDRotF"
name: Goliath Werebear
image: "[[Goliath Werebear.png]]"
---

# Goliath Werebear

```statblock
"name": "Goliath Werebear"
"size": "Medium"
"type": "humanoid"
"subtype": "goliath, shapechanger"
"alignment": "Neutral Good"
"ac": !!int "10"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft. (40 ft. swim 30 ft. in bear or hybrid form)"
"skillsaves":
  "Athletics": !!int "8"
  "Perception": !!int "8"
  "Survival": !!int "5"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 18"
"languages": "Common, Giant (can't speak in bear form)"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear is acclimated to high altitude, including elevations above\
    \ 20,000 feet."
  "name": "Mountain Born"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear counts as one size larger when determining its carrying capacity\
    \ and the weight it can push, drag, or lift."
  "name": "Powerful Build (Humanoid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear can use its action to polymorph into a Large bear-humanoid\
    \ hybrid or into a Large polar bear, or back into its goliath form. Its statistics,\
    \ other than its size and AC, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The werebear makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10\
    \ + 5) piercing damage. If the target is a humanoid, it must succeed on a DC 15\
    \ Constitution saving throw or be cursed with werebear lycanthropy, as described\
    \ in the Monster Manual."
  "name": "Bite (Bear or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Claw (Bear or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d12\
    \ + 5) slashing damage."
  "name": "Greataxe (Humanoid or Hybrid Form Only)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the werebear takes damage, it reduces the damage taken by 10 (1d12\
    \ + 4)."
  "name": "Stone's Endurance (Recharges after a Short or Long Rest)"
"source":
- "IDRotF"
"image": "[[Goliath Werebear.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 293*

## Description

Goliath legends speak of a creature that prowls the far reaches of Icewind Dale, known as Oyaminartok the Winter Walker. She can take the form of either a polar bear or a hulking, bipedal shape obscured by wind and blowing snow. Elders invoke her name to keep young goliaths from wandering too far from home before they're ready. Adult goliaths sometimes encounter this legendary individual in their travels to the far-flung corners of the dale. If they flee like cowards, Oyaminartok laughs and lets them go to wander in obscurity. If they challenge Oyaminartok to a fight, the Winter Walker smiles and tests their mettle. Those who impress her with their fighting skills are bitten and become goliath werebears themselves—goliaths who carry Oyaminartok's curse of lycanthropy. Contrary to myth, Oyaminartok is not a monster but a force of good in the region, and she passes her curse only to goliaths whose hearts are pure.

Oyaminartok and others of her kind try to help creatures they come across, for the weather and the geography of Icewind Dale can be brutal. They know the safest routes across the tundra, and they can help guide travelers through the Sea of Moving Ice and across its ever-shifting ice floes. These polar werebears attack evil in the wilderness, but they steer clear of camps and settlements. Fire is Oyaminartok's bane, and thus she and her kind are wary around hearths and open flames.
---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/sahuagin
aliases: ["Sahuagin Deep Diver"]
statblock: true
"name": "Sahuagin Deep Diver"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver has advantage on Dexterity (Stealth) checks made while submerged\
    \ in water."
  "name": "Brine Lurker"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can breathe air and water, but it needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can cause its lure to light up or darken at will. While\
    \ the lure is lit, the deep diver sheds bright light in a 30-foot radius centered\
    \ on itself and dim light for an additional 20 feet."
  "name": "Lure"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver makes two attacks with its glaive, or one attack with its\
    \ bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 13 (2d10\
    \ + 2) slashing damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver pulses magical light from its lure. Any creature within\
    \ 30 feet of the deep diver that can see the light must succeed on a DC 11 Wisdom\
    \ saving throw or be [charmed](/rules/conditions.md#charmed) until the end of\
    \ its next turn. A creature [charmed](/rules/conditions.md#charmed) in this way\
    \ is [incapacitated](/rules/conditions.md#incapacitated) as it stares at the light."
  "name": "Light of Sekolah"
"source":
- "GoS"
- "LR"
name: Sahuagin Deep Diver
image: "[[Sahuagin Deep Diver.png]]"
---

# Sahuagin Deep Diver

```statblock
"name": "Sahuagin Deep Diver"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver has advantage on melee attack rolls against any creature\
    \ that doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver has advantage on Dexterity (Stealth) checks made while submerged\
    \ in water."
  "name": "Brine Lurker"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can breathe air and water, but it needs to be submerged\
    \ at least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can cause its lure to light up or darken at will. While\
    \ the lure is lit, the deep diver sheds bright light in a 30-foot radius centered\
    \ on itself and dim light for an additional 20 feet."
  "name": "Lure"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver makes two attacks with its glaive, or one attack with its\
    \ bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 13 (2d10\
    \ + 2) slashing damage."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deep diver pulses magical light from its lure. Any creature within\
    \ 30 feet of the deep diver that can see the light must succeed on a DC 11 Wisdom\
    \ saving throw or be [charmed](/rules/conditions.md#charmed) until the end of\
    \ its next turn. A creature [charmed](/rules/conditions.md#charmed) in this way\
    \ is [incapacitated](/rules/conditions.md#incapacitated) as it stares at the light."
  "name": "Light of Sekolah"
"source":
- "GoS"
- "LR"
"image": "[[Sahuagin Deep Diver.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 250, Locathah Rising*

## Description

These mighty sahuagin, found in The Final Enemy, are transformed by the divine magic of Sekolah to enable them to better explore the darkest depths of the ocean. Out of the water, they cling to shadows and serve as hunters and assassins. A long, scaly lure that can be illuminated extends from a deep diver's forehead.
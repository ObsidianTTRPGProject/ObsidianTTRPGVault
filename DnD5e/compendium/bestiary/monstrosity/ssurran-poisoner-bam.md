---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/monstrosity/lizardfolk
aliases: ["Ssurran Poisoner"]
statblock: true
"name": "Ssurran Poisoner"
"size": "Medium"
"type": "monstrosity"
"subtype": "lizardfolk"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Draconic"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage plus 4 (1d8) poison damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran throws a tangerine-sized bomb at a point up to 60 feet away,\
    \ where it explodes, releasing a 10-foot-radius sphere of poisonous gas that disperses\
    \ quickly. Each creature in the sphere must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one. After the ssurran throws a bomb, roll a d6; on a roll of 4 or\
    \ lower, the ssurran has no more bombs to throw."
  "name": "Poison Bomb"
"source":
- "BAM"
- "LoX"
name: Ssurran Poisoner
image: "[[Ssurran Poisoner.png]]"
---

# Ssurran Poisoner

```statblock
"name": "Ssurran Poisoner"
"size": "Medium"
"type": "monstrosity"
"subtype": "lizardfolk"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "passive Perception 13"
"languages": "Draconic"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage plus 4 (1d8) poison damage."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ssurran throws a tangerine-sized bomb at a point up to 60 feet away,\
    \ where it explodes, releasing a 10-foot-radius sphere of poisonous gas that disperses\
    \ quickly. Each creature in the sphere must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one. After the ssurran throws a bomb, roll a d6; on a roll of 4 or\
    \ lower, the ssurran has no more bombs to throw."
  "name": "Poison Bomb"
"source":
- "BAM"
- "LoX"
"image": "[[Ssurran Poisoner.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 58, Light of Xaryxis*

## Description

Ssurran poisoners coat their weapons with toxin and hurl bombs that release poisonous gas.
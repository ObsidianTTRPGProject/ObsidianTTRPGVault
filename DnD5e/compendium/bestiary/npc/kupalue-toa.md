---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/small
- monster/type/plant
- monster/environment/forest
- monster/environment/swamp
aliases: ["Kupalué"]
statblock: true
"name": "Kupalué"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kupalué has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring plant life."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kupalué regains 3 hit points at the start of its turn. If it takes cold,\
    \ fire, or necrotic damage, this trait doesn't function at the start of Kupalué\
    's next turn. Kupalué dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "ToA"
name: Kupalué
image: "[[Kupalué.png]]"
---

# Kupalué

```statblock
"name": "Kupalué"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kupalué has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring plant life."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kupalué regains 3 hit points at the start of its turn. If it takes cold,\
    \ fire, or necrotic damage, this trait doesn't function at the start of Kupalué\
    's next turn. Kupalué dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "ToA"
"image": "[[Kupalué.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 35*

## Environment

forest, swamp
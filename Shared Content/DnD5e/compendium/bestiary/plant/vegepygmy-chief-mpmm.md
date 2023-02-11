---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/small
- monster/type/plant
- monster/environment/forest
- monster/environment/swamp
aliases: ["Vegepygmy Chief"]
statblock: true
"name": "Vegepygmy Chief"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Vegepygmy"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy regains 5 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy makes two Claw attacks or two melee Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy.\
    \ The spores spread around corners. Each creature in that area that isn't a Plant\
    \ must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 9 (2d8) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Spores (1/Day)"
"source":
- "MPMM"
- "VGM"
name: Vegepygmy Chief
image: "[[Vegepygmy Chief.png]]"
---

# Vegepygmy Chief

```statblock
"name": "Vegepygmy Chief"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Vegepygmy"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy regains 5 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vegepygmy makes two Claw attacks or two melee Spear attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy.\
    \ The spores spread around corners. Each creature in that area that isn't a Plant\
    \ must succeed on a DC 12 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned).\
    \ While [poisoned](/rules/conditions.md#poisoned) in this way, a target takes\
    \ 9 (2d8) poison damage at the start of each of its turns. A target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Spores (1/Day)"
"source":
- "MPMM"
- "VGM"
"image": "[[Vegepygmy Chief.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 253, Volo's Guide to Monsters p. 197*

## Description

As a [vegepygmy](/compendium/bestiary/plant/vegepygmy-mpmm.md) ages, it grows tougher and develops spore clusters on its body. Other vegepygmies defer to these so-called chiefs. A chief can expel its spores in a burst, infecting nearby creatures. If a creature dies while infected, its corpse produces vegepygmies the same way russet mold does.

**Vegepygmies.** Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [myconid adults](/compendium/bestiary/plant/myconid-adult.md), [shriekers](/compendium/bestiary/plant/shrieker.md), and [violet fungi](/compendium/bestiary/plant/violet-fungus.md).

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

## Environment

forest, swamp
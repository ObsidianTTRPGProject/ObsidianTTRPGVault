---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/huge
- monster/type/plant
- monster/environment/forest
aliases: ["Grandfather Oak"]
statblock: true
"name": "Grandfather Oak"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Grandfather Oak remains motionless, it is indistinguishable from\
    \ a normal tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak magically animates one or two trees it can see within 60\
    \ feet of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of Grandfather\
    \ Oak. The tree remains animate for 1 day or until it dies; until Grandfather\
    \ Oak dies or is more than 120 feet from the tree; or until Grandfather Oak takes\
    \ a bonus action to turn it back into an inanimate tree. The tree then takes root\
    \ if possible."
  "name": "Animate Trees (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak ejects spores at one creature it can see within 5 feet\
    \ of it. The target must succeed on a DC 17 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Pacifying Spores (3/Day)"
"source":
- "IMR"
name: Grandfather Oak
image: "[[Grandfather Oak.png]]"
---

# Grandfather Oak

```statblock
"name": "Grandfather Oak"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "23"
- !!int "8"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 13"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Grandfather Oak remains motionless, it is indistinguishable from\
    \ a normal tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6\
    \ + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit:\
    \ 28 (4d10 + 6) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak magically animates one or two trees it can see within 60\
    \ feet of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of Grandfather\
    \ Oak. The tree remains animate for 1 day or until it dies; until Grandfather\
    \ Oak dies or is more than 120 feet from the tree; or until Grandfather Oak takes\
    \ a bonus action to turn it back into an inanimate tree. The tree then takes root\
    \ if possible."
  "name": "Animate Trees (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Grandfather Oak ejects spores at one creature it can see within 5 feet\
    \ of it. The target must succeed on a DC 17 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Pacifying Spores (3/Day)"
"source":
- "IMR"
"image": "[[Grandfather Oak.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 5*

## Environment

forest
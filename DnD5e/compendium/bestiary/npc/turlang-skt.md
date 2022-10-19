---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/plant
- monster/environment/forest
aliases: ["Turlang"]
statblock: true
"name": "Turlang"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "200"
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
  "desc": "Turlang casts one of the following spells, requiring no material spell\
    \ components and using Wisdom as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md), [guidance](/compendium/spells/guidance.md),\
    \ [resistance](/compendium/spells/resistance.md), [speak with plants](/compendium/spells/speak-with-plants.md)\n\
    \n1/day each: [commune with nature](/compendium/spells/commune-with-nature.md)\
    \ (cast as 1 action), [conjure woodland beings](/compendium/spells/conjure-woodland-beings.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md) (cast as\
    \ 1 action)\n\n2/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [goodberry](/compendium/spells/goodberry.md), [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [speak with\
    \ animals](/compendium/spells/speak-with-animals.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Turlang remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two slam attacks."
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
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of Turlang.\
    \ The tree remains animate for 1 day or until it dies; until Turlang dies or is\
    \ more than 120 feet from the tree; or until Turlang takes a bonus action to turn\
    \ it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "SKT"
name: Turlang
image: "[[Turlang.png]]"
---

# Turlang

```statblock
"name": "Turlang"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "200"
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
  "desc": "Turlang casts one of the following spells, requiring no material spell\
    \ components and using Wisdom as the spellcasting ability (spell save DC 15):\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md), [guidance](/compendium/spells/guidance.md),\
    \ [resistance](/compendium/spells/resistance.md), [speak with plants](/compendium/spells/speak-with-plants.md)\n\
    \n1/day each: [commune with nature](/compendium/spells/commune-with-nature.md)\
    \ (cast as 1 action), [conjure woodland beings](/compendium/spells/conjure-woodland-beings.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md) (cast as\
    \ 1 action)\n\n2/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [goodberry](/compendium/spells/goodberry.md), [gust of wind](/compendium/spells/gust-of-wind.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [speak with\
    \ animals](/compendium/spells/speak-with-animals.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Turlang remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The treant makes two slam attacks."
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
  "desc": "The treant magically animates one or two trees it can see within 60 feet\
    \ of it. These trees have the same statistics as a [treant](/compendium/bestiary/plant/treant.md),\
    \ except they have Intelligence and Charisma scores of 1, they can't speak, and\
    \ they have only the Slam action option. An animated tree acts as an ally of Turlang.\
    \ The tree remains animate for 1 day or until it dies; until Turlang dies or is\
    \ more than 120 feet from the tree; or until Turlang takes a bonus action to turn\
    \ it back into an inanimate tree. The tree then takes root if possible."
  "name": "Animate Trees (1/Day)"
"source":
- "SKT"
"image": "[[Turlang.png]]"
```
^statblock

*Source: Storm King's Thunder p. 107*

## Environment

forest
---
cssclass: json5e-monster
tags:
- compendium/src/jttrc
- monster/size/medium
- monster/type/fey
- monster/environment/forest
aliases: ["Lungtian"]
statblock: true
"name": "Lungtian"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Good"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Elvish, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian's innate spellcasting ability is Charisma (spell save DC 14).\
    \ Lungtian can innately cast the following spells, requiring no material components:\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\n1/day each:\
    \ [barkskin](/compendium/spells/barkskin.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n3/day each: [entangle](/compendium/spells/entangle.md),\
    \ [goodberry](/compendium/spells/goodberry.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian can communicate with beasts and plants as if they shared a language."
  "name": "Speak with Beasts and Plants"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on her turn, Lungtian can use 10 feet of her movement to step magically\
    \ into one living tree within her reach and emerge from a second living tree within\
    \ 60 feet of the first tree, appearing in an unoccupied space within 5 feet of\
    \ the second tree. Both trees must be large or bigger."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage\
    \ with shillelagh."
  "name": "Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian targets one humanoid or beast that she can see within 30 feet\
    \ of her. If the target can see Lungtian, it must succeed on a DC 14 Wisdom saving\
    \ throw or be magically [charmed](/rules/conditions.md#charmed). The [charmed](/rules/conditions.md#charmed)\
    \ creature regards Lungtian as a trusted friend to be heeded and protected. Although\
    \ the target isn't under Lungtian's control, it takes Lungtian's requests or actions\
    \ in the most favorable way it can.\n\nEach time Lungtian or its allies do anything\
    \ harmful to the target, it can repeat the saving throw, ending the effect on\
    \ itself on a success. Otherwise, the effect lasts 24 hours or until Lungtian\
    \ dies, is on a different plane of existence from the target, or ends the effect\
    \ as a bonus action. If a target's saving throw is successful, the target is immune\
    \ to Lungtian's Fey Charm for the next 24 hours.\n\nLungtian can have no more\
    \ than one humanoid and up to three beasts [charmed](/rules/conditions.md#charmed)\
    \ at a time."
  "name": "Fey Charm"
"source":
- "JttRC"
name: Lungtian
image: "[[Lungtian.png]]"
---

# Lungtian

```statblock
"name": "Lungtian"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Good"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Elvish, Sylvan"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian's innate spellcasting ability is Charisma (spell save DC 14).\
    \ Lungtian can innately cast the following spells, requiring no material components:\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\n1/day each:\
    \ [barkskin](/compendium/spells/barkskin.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md)\n\n3/day each: [entangle](/compendium/spells/entangle.md),\
    \ [goodberry](/compendium/spells/goodberry.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian can communicate with beasts and plants as if they shared a language."
  "name": "Speak with Beasts and Plants"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on her turn, Lungtian can use 10 feet of her movement to step magically\
    \ into one living tree within her reach and emerge from a second living tree within\
    \ 60 feet of the first tree, appearing in an unoccupied space within 5 feet of\
    \ the second tree. Both trees must be large or bigger."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage\
    \ with shillelagh."
  "name": "Club"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lungtian targets one humanoid or beast that she can see within 30 feet\
    \ of her. If the target can see Lungtian, it must succeed on a DC 14 Wisdom saving\
    \ throw or be magically [charmed](/rules/conditions.md#charmed). The [charmed](/rules/conditions.md#charmed)\
    \ creature regards Lungtian as a trusted friend to be heeded and protected. Although\
    \ the target isn't under Lungtian's control, it takes Lungtian's requests or actions\
    \ in the most favorable way it can.\n\nEach time Lungtian or its allies do anything\
    \ harmful to the target, it can repeat the saving throw, ending the effect on\
    \ itself on a success. Otherwise, the effect lasts 24 hours or until Lungtian\
    \ dies, is on a different plane of existence from the target, or ends the effect\
    \ as a bonus action. If a target's saving throw is successful, the target is immune\
    \ to Lungtian's Fey Charm for the next 24 hours.\n\nLungtian can have no more\
    \ than one humanoid and up to three beasts [charmed](/rules/conditions.md#charmed)\
    \ at a time."
  "name": "Fey Charm"
"source":
- "JttRC"
"image": "[[Lungtian.png]]"
```
^statblock

*Source: Journeys through the Radiant Citadel p. 121*

## Environment

forest
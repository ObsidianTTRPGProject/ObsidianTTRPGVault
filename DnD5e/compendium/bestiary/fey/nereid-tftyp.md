---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/fey
aliases: ["Nereid"]
statblock: true
"name": "Nereid"
"size": "Medium"
"type": "fey"
"alignment": "Any Chaotic alignment"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., swim 60 ft."
"skillsaves":
  "Nature": !!int "3"
  "Stealth": !!int "5"
  "Acrobatics": !!int "5"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Common, Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If immersed in water, the nereid can make itself [invisible](/rules/conditions.md#invisible)\
    \ as a bonus action. It remains [invisible](/rules/conditions.md#invisible) until\
    \ it leaves the water, ends the invisibility as a bonus action, or dies."
  "name": "Aquatic Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid wears a mantle of silky cloth the color of sea foam, which holds\
    \ the creature's spirit. The mantle has an AC and hit points equal to that of\
    \ the nereid, but the garment can't be directly harmed while the nereid wears\
    \ it. If the mantle is destroyed, the nereid becomes [poisoned](/rules/conditions.md#poisoned)\
    \ and dies within 1 hour. A nereid is willing to do anything in its power to recover\
    \ the mantle if it is stolen, including serving the thief."
  "name": "Mantle Dependent"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can cast [control water](/compendium/spells/control-water.md)\
    \ at will, requiring no components. Its spellcasting ability for it is Charisma.\
    \ This use of the spell has a range of 30 feet and can affect a cube of water\
    \ no larger than 30 feet on a side."
  "name": "Shape Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can comprehend and verbally communicate with beasts."
  "name": "Speak With Animals"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 16 (2d12 + 3) acid damage, and the target is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the nereid's next turn."
  "name": "Blinding Acid"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid touches one creature it can see within 5 feet of it. The target\
    \ must succeed on a DC 13 Constitution saving throw or take 22 (3d12 + 3) acid\
    \ damage. On a failure, it also runs out of breath and can't speak for 1 minute.\
    \ At the end of each of its turns, it can repeat the save, ending the effect on\
    \ itself on a success."
  "name": "Drowning Kiss (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid causes a 5-foot cube of water within 60 feet of it to take a\
    \ shape of its choice and strike one target it can see within 5 feet of that water.\
    \ The target must make a DC 13 Strength saving throw. On a failed save, it takes\
    \ 17 (4d6 + 3) bludgeoning damage, and if it is a Large or smaller creature, it\
    \ is pushed up to 15 feet in a straight line or is knocked [prone](/rules/conditions.md#prone)\
    \ (nereid's choice). On a successful save, the target takes half as much damage\
    \ and isn't pushed or knocked [prone](/rules/conditions.md#prone)."
  "name": "Water Lash"
"source":
- "TftYP"
name: Nereid
image: "[[Nereid.png]]"
---

# Nereid

```statblock
"name": "Nereid"
"size": "Medium"
"type": "fey"
"alignment": "Any Chaotic alignment"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., swim 60 ft."
"skillsaves":
  "Nature": !!int "3"
  "Stealth": !!int "5"
  "Acrobatics": !!int "5"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Common, Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If immersed in water, the nereid can make itself [invisible](/rules/conditions.md#invisible)\
    \ as a bonus action. It remains [invisible](/rules/conditions.md#invisible) until\
    \ it leaves the water, ends the invisibility as a bonus action, or dies."
  "name": "Aquatic Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid wears a mantle of silky cloth the color of sea foam, which holds\
    \ the creature's spirit. The mantle has an AC and hit points equal to that of\
    \ the nereid, but the garment can't be directly harmed while the nereid wears\
    \ it. If the mantle is destroyed, the nereid becomes [poisoned](/rules/conditions.md#poisoned)\
    \ and dies within 1 hour. A nereid is willing to do anything in its power to recover\
    \ the mantle if it is stolen, including serving the thief."
  "name": "Mantle Dependent"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can cast [control water](/compendium/spells/control-water.md)\
    \ at will, requiring no components. Its spellcasting ability for it is Charisma.\
    \ This use of the spell has a range of 30 feet and can affect a cube of water\
    \ no larger than 30 feet on a side."
  "name": "Shape Water"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid can comprehend and verbally communicate with beasts."
  "name": "Speak With Animals"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: +5 to hit, reach 5 ft. or range 30 ft.,\
    \ one target. Hit: 16 (2d12 + 3) acid damage, and the target is [blinded](/rules/conditions.md#blinded)\
    \ until the start of the nereid's next turn."
  "name": "Blinding Acid"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid touches one creature it can see within 5 feet of it. The target\
    \ must succeed on a DC 13 Constitution saving throw or take 22 (3d12 + 3) acid\
    \ damage. On a failure, it also runs out of breath and can't speak for 1 minute.\
    \ At the end of each of its turns, it can repeat the save, ending the effect on\
    \ itself on a success."
  "name": "Drowning Kiss (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nereid causes a 5-foot cube of water within 60 feet of it to take a\
    \ shape of its choice and strike one target it can see within 5 feet of that water.\
    \ The target must make a DC 13 Strength saving throw. On a failed save, it takes\
    \ 17 (4d6 + 3) bludgeoning damage, and if it is a Large or smaller creature, it\
    \ is pushed up to 15 feet in a straight line or is knocked [prone](/rules/conditions.md#prone)\
    \ (nereid's choice). On a successful save, the target takes half as much damage\
    \ and isn't pushed or knocked [prone](/rules/conditions.md#prone)."
  "name": "Water Lash"
"source":
- "TftYP"
"image": "[[Nereid.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 240*

## Description

One of the most inviting locations in the Hidden Shrine of Tamoachan is a gently illuminated pool of water, beside which sits a lovely being singing a pleasant tune. The figure is a nereid—a fey water creature that can shape its environment to suit its needs. Whether male or female, a nereid bears an otherworldly beauty.
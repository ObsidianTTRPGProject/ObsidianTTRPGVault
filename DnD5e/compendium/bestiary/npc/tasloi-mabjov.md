---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/small
- monster/type/humanoid/goblinoid
aliases: ["Tasloi"]
statblock: true
"name": "Tasloi"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "8"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "9"
- !!int "12"
"speed": "walk 25 ft., climb 25 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Sylvan, Tasloi"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tasloi can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tasloi can use their Dexterity score for attack and damage rolls with a\
    \ javelin, just as if the javelin had the finesse property."
  "name": "Javelin Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "MaBJoV"
name: Tasloi
image: "[[Tasloi.png]]"
---

# Tasloi

```statblock
"name": "Tasloi"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "8"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "9"
- !!int "12"
"speed": "walk 25 ft., climb 25 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Sylvan, Tasloi"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tasloi can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tasloi can use their Dexterity score for attack and damage rolls with a\
    \ javelin, just as if the javelin had the finesse property."
  "name": "Javelin Expert"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "MaBJoV"
"image": "[[Tasloi.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 153*

## Description

Lanky but small goblin-like creatures, tasloi largely dwell in the dense tropical forests of southern Faerûn. However, groups of tasloi have made their way northwards to the Sword Coast, with a notable enclave within the Cloakwood. With vibrant green skin covered by a thin layer of coarse black hair, tasloi can perfectly blend in with their surroundings with only the faint glow of their golden, almost feline eyes betraying their presence. Although generally less intelligent than humans, tasloi can be quite clever, using superior numbers and pack tactics to make them surprisingly formidable foes.

**Tree Dwellers.** Tasloi prefer the low-light conditions of jungle canopies and avoid direct sunlight altogether. In more temperate areas where foliage is sparse, such as the forests of the Sword Coast, they largely limit their activities to dawn and dusk. Expert climbers, the tasloi's long arms allow them to rapidly move among treetops by leaping from branches and swinging from vines. Tasloi are less at home on the ground, where they knuckle-walk by adopting a crouched position similar to that of an ape.

**Social Creatures.** Tasloi live in a loosely structured tribal society together in bands that consist of multiple individual families. Most tasloi communities build homes in trees surrounded by interconnected platforms high off the ground. Tasloi have a deep fear of being alone, which is reinforced by their culture's many superstitions. They practice a form of husbandry, raising giant rats and other large vermin as livestock, both for food and use as mounts. Tasloi mostly speak a language unique to their kind, but some have learned to speak a broken form of Common. Although vicious, these opportunists can be reasoned with under the right circumstances.

**Ambush Predators.** Although tasloi can and will eat almost anything, they have a strong preference for fresh meat, especially that of humans, elves, and other humanoids. They are known take advantage of much more fearsome monsters by staking out escape routes from their lairs and luring already-injured adventurers into a trap. Tasloi also use hit-and-run tactics and other techniques that take advantage of their familiarity with their forest homes.
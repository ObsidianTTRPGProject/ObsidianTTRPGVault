---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/dragon
- monster/environment/mountain
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/environment/desert
- monster/environment/coastal
aliases: ["Pseudodragon"]
statblock: true
"name": "Pseudodragon"
"size": "Tiny"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "6"
- !!int "15"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 15 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight, hearing, or smell."
  "name": "Keen Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon can magically communicate simple ideas, emotions, and\
    \ images telepathically with any creature within 100 feet of it that can understand\
    \ a language."
  "name": "Limited Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or become [poisoned](/rules/conditions.md#poisoned) for 1 hour. If the\
    \ saving throw fails by 5 or more, the target falls [unconscious](/rules/conditions.md#unconscious)\
    \ for the same duration, or until it takes damage or another creature uses an\
    \ action to shake it awake."
  "name": "Sting"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDMM"
- "GoS"
- "ERLW"
- "IMR"
- "EGW"
- "IDRotF"
name: Pseudodragon
image: "[[Pseudodragon.png]]"
---

# Pseudodragon

```statblock
"name": "Pseudodragon"
"size": "Tiny"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "6"
- !!int "15"
- !!int "13"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 15 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": "understands Common and Draconic but can't speak"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on sight, hearing, or smell."
  "name": "Keen Senses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The pseudodragon can magically communicate simple ideas, emotions, and\
    \ images telepathically with any creature within 100 feet of it that can understand\
    \ a language."
  "name": "Limited Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or become [poisoned](/rules/conditions.md#poisoned) for 1 hour. If the\
    \ saving throw fails by 5 or more, the target falls [unconscious](/rules/conditions.md#unconscious)\
    \ for the same duration, or until it takes damage or another creature uses an\
    \ action to shake it awake."
  "name": "Sting"
"source":
- "MM"
- "RoT"
- "ToA"
- "WDMM"
- "GoS"
- "ERLW"
- "IMR"
- "EGW"
- "IDRotF"
"image": "[[Pseudodragon.png]]"
```
^statblock

*Source: Monster Manual p. 254, The Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*

## Description

The elusive pseudodragon dwells in the quiet places of the world, making its home in the hollows of trees and small caves. With its red-brown scales, horns, and a maw filled with sharp teeth, a pseudodragon resembles a tiny red dragon but its disposition is playful.

**Quiet and Defensive.** Pseudodragons have little interest in other creatures, and they avoid them whenever possible. If it is attacked, a pseudodragon fights back using the poisonous stinger at the tip of its tail, one jab of which can put a creature into a catatonic state that can last for hours.

**Draconic Familiars.** Mages often seek out pseudodragons, whose agreeable disposition, telepathic ability, and resistance to magic make them superior familiars. Pseudodragons are selective when it comes to choosing companions, but they can sometimes be won over with gifts of food or treasure. When a pseudodragon finds an agreeable companion, it bonds with that person as long as it is treated fairly.

A pseudodragon puts up with no ill treatment, and it abandons a manipulative or abusive companion without warning.

**Language of Emotion.** Pseudodragons can't speak, but they communicate using a limited form of telepathy that allows them to share basic ideas such as hunger, curiosity, or affection. When it bonds with a companion, a pseudodragon can communicate what it sees and hears even over long distances.

A pseudodragon often vocalizes animal noises. A rasping purr indicates pleasure, while a hiss means unpleasant surprise. A bird-like chirping represents desire, and a growl always means anger or discontent.

> [!quote] Variant: Pseudodragon Familiar
> 
> Some pseudodragons are willing to serve spellcasters as a familiar. Such pseudodragons have the following trait.
^variant-pseudodragon-familiar

**Familiar.** The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.

## Environment

mountain, forest, hill, urban, desert, coastal
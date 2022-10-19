---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/small
- monster/type/monstrosity
aliases: ["Egg Hunter Adult"]
statblock: true
"name": "Egg Hunter Adult"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "8d6 + 24"
"stats":
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "3"
- !!int "13"
- !!int "5"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "4"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "4"
"condition_immunities": "frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the egg hunter is motionless at the start of combat, it has advantage\
    \ on its initiative roll. Moreover, if a creature hasn't observed the egg hunter\
    \ move or act, that creature must succeed on a DC 18 Intelligence (Investigation)\
    \ check to discern that the egg hunter is animate. Dragons have disadvantage on\
    \ this check."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter makes two Barbed Proboscis attacks, and it can use Torpor\
    \ Spores if it's available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage plus 9 (2d8) necrotic damage, and the egg hunter regains\
    \ hit points equal to the necrotic damage dealt."
  "name": "Barbed Proboscis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter releases a billow of sparkling blue spores. Each creature\
    \ in a 30-foot-radius sphere centered on the egg hunter must succeed on a DC 14\
    \ Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned) for\
    \ 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the creature\
    \ can take either an action or a bonus action on its turn but not both, and it\
    \ can't take reactions. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to this\
    \ egg hunter's Torpor Spores for the next 24 hours."
  "name": "Torpor Spores (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the egg hunter takes damage, it gives itself resistance to that damage."
  "name": "Rapid Adaptation"
"source":
- "FTD"
name: Egg Hunter Adult
image: "[[Egg Hunter Adult.png]]"
---

# Egg Hunter Adult

```statblock
"name": "Egg Hunter Adult"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "8d6 + 24"
"stats":
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "3"
- !!int "13"
- !!int "5"
"speed": "walk 40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "4"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "4"
"condition_immunities": "frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the egg hunter is motionless at the start of combat, it has advantage\
    \ on its initiative roll. Moreover, if a creature hasn't observed the egg hunter\
    \ move or act, that creature must succeed on a DC 18 Intelligence (Investigation)\
    \ check to discern that the egg hunter is animate. Dragons have disadvantage on\
    \ this check."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter makes two Barbed Proboscis attacks, and it can use Torpor\
    \ Spores if it's available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage plus 9 (2d8) necrotic damage, and the egg hunter regains\
    \ hit points equal to the necrotic damage dealt."
  "name": "Barbed Proboscis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The egg hunter releases a billow of sparkling blue spores. Each creature\
    \ in a 30-foot-radius sphere centered on the egg hunter must succeed on a DC 14\
    \ Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned) for\
    \ 1 minute. While [poisoned](/rules/conditions.md#poisoned) in this way, the creature\
    \ can take either an action or a bonus action on its turn but not both, and it\
    \ can't take reactions. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to this\
    \ egg hunter's Torpor Spores for the next 24 hours."
  "name": "Torpor Spores (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the egg hunter takes damage, it gives itself resistance to that damage."
  "name": "Rapid Adaptation"
"source":
- "FTD"
"image": "[[Egg Hunter Adult.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 193*

## Description

The salamander-like adult of the species can inflate its bulbous tail so that it takes on the shape and texture of a dragon egg. It uses this mimicry to establish itself in a nest tended by a dragon or other creatures. If an egg hunter is discovered, it releases spores that make other creatures lethargic, allowing it to scurry to safety. If things turn dire, the egg hunter's physical form can magically harden, reducing the harm it suffers from even a dragon's wrath.

**Egg Hunters.** Egg hunters are parasites that seek out dragon eggs and feed on the contents. They deposit their own eggs into the empty shells, hiding the eggs from unsuspecting dragon parents or guardians.
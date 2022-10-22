---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/small
- monster/type/aberration/shapechanger
aliases: ["Gingwatzim"]
statblock: true
"name": "Gingwatzim"
"size": "Small"
"type": "aberration"
"subtype": "shapechanger"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d6 + 18"
"stats":
- !!int "3"
- !!int "15"
- !!int "16"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (hover) in its true form only"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 60 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gingwatzim has two alternate forms, both of which are chosen by its\
    \ creator when the gingwatzim comes into being. One form is an exact duplicate\
    \ of a Tiny nonmagical object (such as a book, dagger, or gemstone) that its creator\
    \ is carrying or wearing when the gingwatzim is conjured. The other form can be\
    \ any Tiny beast. Once these alternate forms are chosen, they can't be changed."
  "name": "Alternate Forms"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 16 (4d6\
    \ + 2) necrotic damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion). When\
    \ the target finishes a short or long rest, the target loses every level of [exhaustion](/rules/conditions.md#exhaustion)\
    \ gained from this attack."
  "name": "Energy Drain (True Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gingwatzim changes from its true form—a 3-foot-diameter sphere of luminous\
    \ ectoplasm—into one of its two alternate forms, or from one of those forms back\
    \ into its true form. In object form, it can't move or make attacks but otherwise\
    \ retains its statistics, and it is indistinguishable from the thing it is imitating.\
    \ In beast form, it retains its hit points but otherwise uses the stat block of\
    \ the beast it is imitating. When it dies, the gingwatzim reverts to its true\
    \ form and then vanishes."
  "name": "Change Shape"
"source":
- "CM"
name: Gingwatzim
image: "[[Gingwatzim.png]]"
---

# Gingwatzim

```statblock
"name": "Gingwatzim"
"size": "Small"
"type": "aberration"
"subtype": "shapechanger"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d6 + 18"
"stats":
- !!int "3"
- !!int "15"
- !!int "16"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (hover) in its true form only"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 60 ft."
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gingwatzim has two alternate forms, both of which are chosen by its\
    \ creator when the gingwatzim comes into being. One form is an exact duplicate\
    \ of a Tiny nonmagical object (such as a book, dagger, or gemstone) that its creator\
    \ is carrying or wearing when the gingwatzim is conjured. The other form can be\
    \ any Tiny beast. Once these alternate forms are chosen, they can't be changed."
  "name": "Alternate Forms"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 16 (4d6\
    \ + 2) necrotic damage, and the target must succeed on a DC 12 Constitution saving\
    \ throw or gain 1 level of [exhaustion](/rules/conditions.md#exhaustion). When\
    \ the target finishes a short or long rest, the target loses every level of [exhaustion](/rules/conditions.md#exhaustion)\
    \ gained from this attack."
  "name": "Energy Drain (True Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The gingwatzim changes from its true form—a 3-foot-diameter sphere of luminous\
    \ ectoplasm—into one of its two alternate forms, or from one of those forms back\
    \ into its true form. In object form, it can't move or make attacks but otherwise\
    \ retains its statistics, and it is indistinguishable from the thing it is imitating.\
    \ In beast form, it retains its hit points but otherwise uses the stat block of\
    \ the beast it is imitating. When it dies, the gingwatzim reverts to its true\
    \ form and then vanishes."
  "name": "Change Shape"
"source":
- "CM"
"image": "[[Gingwatzim.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 27*

## Description

A gingwatzim is a peculiar form of life created by a spell or a ritual. The magic that brings it into being draws on spirit energy from the Ethereal Plane to give the gingwatzim its true form—that of a luminous (but not too bright) sphere of ectoplasm roughly 3 feet in diameter. A newly formed gingwatzim appears as near to its creator as possible and follows its creator's commands without question, using telepathy to communicate.

A gingwatzim can assume two other forms that are determined by its creator at the time the gingwatzim comes into being. One is an exact duplicate of a Tiny nonmagical object that its creator is wearing or carrying. The gingwatzim's other form is that of a specific Tiny beast.
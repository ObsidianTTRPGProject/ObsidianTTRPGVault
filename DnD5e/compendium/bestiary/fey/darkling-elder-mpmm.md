---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fey
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
aliases: ["Darkling Elder"]
statblock: true
"name": "Darkling Elder"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "5"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the darkling elder dies, magical light flashes out from it in a 10-foot\
    \ radius as its body and possessions, other than metal or magic objects, burn\
    \ to ash. Any creature in that area must make a DC 11 Constitution saving throw.\
    \ On a failed save, the creature takes 7 (2d6) radiant damage and is [blinded](/rules/conditions.md#blinded)\
    \ until the end of its next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Death Burn"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkling elder makes two Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkling elder casts [darkness](/compendium/spells/darkness.md), requiring\
    \ no spell components and using Wisdom as the spellcasting ability."
  "name": "Darkness (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
name: Darkling Elder
image: "[[Darkling Elder.png]]"
---

# Darkling Elder

```statblock
"name": "Darkling Elder"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "5"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the darkling elder dies, magical light flashes out from it in a 10-foot\
    \ radius as its body and possessions, other than metal or magic objects, burn\
    \ to ash. Any creature in that area must make a DC 11 Constitution saving throw.\
    \ On a failed save, the creature takes 7 (2d6) radiant damage and is [blinded](/rules/conditions.md#blinded)\
    \ until the end of its next turn. On a successful save, the creature takes half\
    \ as much damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Death Burn"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkling elder makes two Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The darkling elder casts [darkness](/compendium/spells/darkness.md), requiring\
    \ no spell components and using Wisdom as the spellcasting ability."
  "name": "Darkness (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "[[Darkling Elder.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 84, Volo's Guide to Monsters p. 134*

## Description

A wise and respected darkling can undergo a ritual to become an elder. Other elders mark the supplicant with glowing tattoos, channeling away some of the darkling's absorbed light. If the ritual succeeds, the darkling grows into a taller, elf-like form. The darkling perishes if the ritual fails.

**Darklings.** Ancient legends speak of a seelie fey who betrayed the Summer Queen. In the Summer Queens' wrath, she cursed every member of his house. The seelie fey's true name has been stricken from history, but the stories call him Dubh Catha ("Dark Crow" in Common), and other Fey refer to the house's descendants as dubh sith—"darklings." Darklings dwell in secluded caverns and chambers beneath the towns of other species. From such enclaves, they quietly ply their trade as thieves and assassins.

## Environment

forest, swamp, underdark, urban
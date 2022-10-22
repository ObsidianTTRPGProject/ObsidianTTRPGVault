---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/humanoid/bullywug
aliases: ["Bullywug Royal"]
statblock: true
"name": "Bullywug Royal"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "14"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "3"
  "Strength": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "5"
  "Stealth": !!int "3"
"senses": "passive Perception 10"
"languages": "Bullywug"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the royal hits with\
    \ it (included in the attack)."
  "name": "Brute"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal has advantage on melee attacks made while riding a frog mount."
  "name": "Frog Rider"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal can communicate simple concepts to frogs and toads when it speaks\
    \ in Bullywug."
  "name": "Speak with Frogs and Toads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal has advantage on Dexterity (Stealth) checks made to hide in swampy\
    \ terrain."
  "name": "Swamp Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal makes two attacks: one with its royal spear and one with its\
    \ bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 10 ft. or range 20/60\
    \ ft., one target. Hit: 10 (2d6 + 3) piercing damage, or 12 (2d8 + 3) piercing\
    \ damage if used with two hands to make a melee attack. If the target is a Medium\
    \ or smaller creature, it must succeed on a DC 13 Strength saving throw or be\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Royal Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal makes a loud pronouncement. Each bullywug within 60 feet of the\
    \ royal that can hear the pronouncement has advantage on its next attack roll."
  "name": "Croaked Decree (1/Day)"
"source":
- "GoS"
- "WBtW"
name: Bullywug Royal
image: "[[Bullywug Royal.png]]"
---

# Bullywug Royal

```statblock
"name": "Bullywug Royal"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "14"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "3"
  "Strength": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "5"
  "Stealth": !!int "3"
"senses": "passive Perception 10"
"languages": "Bullywug"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the royal hits with\
    \ it (included in the attack)."
  "name": "Brute"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal has advantage on melee attacks made while riding a frog mount."
  "name": "Frog Rider"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal can communicate simple concepts to frogs and toads when it speaks\
    \ in Bullywug."
  "name": "Speak with Frogs and Toads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal has advantage on Dexterity (Stealth) checks made to hide in swampy\
    \ terrain."
  "name": "Swamp Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal makes two attacks: one with its royal spear and one with its\
    \ bite."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 10 ft. or range 20/60\
    \ ft., one target. Hit: 10 (2d6 + 3) piercing damage, or 12 (2d8 + 3) piercing\
    \ damage if used with two hands to make a melee attack. If the target is a Medium\
    \ or smaller creature, it must succeed on a DC 13 Strength saving throw or be\
    \ knocked [prone](/rules/conditions.md#prone)."
  "name": "Royal Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The royal makes a loud pronouncement. Each bullywug within 60 feet of the\
    \ royal that can hear the pronouncement has advantage on its next attack roll."
  "name": "Croaked Decree (1/Day)"
"source":
- "GoS"
- "WBtW"
"image": "[[Bullywug Royal.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 232, The Wild Beyond the Witchlight*

## Description

The largest and most intelligent bullywugs invariably end up leading their kind. These sneering specimens dress in robes made from leather, rough cloth, and bits of marsh plants. As seen in Danger at Dunwater, a bullywug royal is often accompanied by and mounted astride a giant toad.
---
cssclass: json5e-monster
tags:
- compendium/src/esk
- monster/size/medium
- monster/type/humanoid
aliases: ["Expert"]
statblock: true
"name": "Expert"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Stealth": !!int "4"
  "Performance": !!int "4"
  "Acrobatics": !!int "4"
  "Persuasion": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can take the Help action as a bonus action."
  "name": "Helpful"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert has [thieves' tools](/compendium/items/thieves-tools.md) and\
    \ a musical instrument."
  "name": "Tools"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "ESK"
name: Expert
image: "[[Expert.png]]"
---

# Expert

```statblock
"name": "Expert"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Stealth": !!int "4"
  "Performance": !!int "4"
  "Acrobatics": !!int "4"
  "Persuasion": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can take the Help action as a bonus action."
  "name": "Helpful"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert has [thieves' tools](/compendium/items/thieves-tools.md) and\
    \ a musical instrument."
  "name": "Tools"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "ESK"
"image": "[[Expert.png]]"
```
^statblock

*Source: Essentials Kit p. 63*
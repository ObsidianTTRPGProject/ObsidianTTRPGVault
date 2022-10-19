---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Neronvain"]
statblock: true
"name": "Neronvain"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "8"
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "13"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "Arcana": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Neronvain adds his Charisma bonus to his AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magic can't put Neronvain to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Neronvain makes two attacks, either with his shortsword or Eldritch Arrow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 13 (3d8) poison damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 11 (2d10)\
    \ force damage plus 9 (2d8) poison damage."
  "name": "Eldritch Arrow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Poison gas fills a 20-foot-radius sphere centered on a point Neronvain\
    \ can see within 50 feet of him. The gas spreads around corners and remains until\
    \ the start of Neronvain's next turn. Each creature that starts its turn in the\
    \ gas must succeed on a DC 16 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Poisonous Cloud (2/Day)"
"source":
- "RoT"
- "ToD"
name: Neronvain
image: "[[Neronvain.png]]"
---

# Neronvain

```statblock
"name": "Neronvain"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "8"
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "13"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "Arcana": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Neronvain adds his Charisma bonus to his AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magic can't put Neronvain to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Neronvain makes two attacks, either with his shortsword or Eldritch Arrow."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 13 (3d8) poison damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 11 (2d10)\
    \ force damage plus 9 (2d8) poison damage."
  "name": "Eldritch Arrow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Poison gas fills a 20-foot-radius sphere centered on a point Neronvain\
    \ can see within 50 feet of him. The gas spreads around corners and remains until\
    \ the start of Neronvain's next turn. Each creature that starts its turn in the\
    \ gas must succeed on a DC 16 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Poisonous Cloud (2/Day)"
"source":
- "RoT"
- "ToD"
"image": "[[Neronvain.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 91, Tyranny of Dragons p. 187*
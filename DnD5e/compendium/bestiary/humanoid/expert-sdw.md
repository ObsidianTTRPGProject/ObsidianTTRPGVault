---
cssclass: json5e-monster
tags:
- compendium/src/sdw
- monster/size/medium
- monster/type/humanoid
aliases: ["Expert"]
statblock: true
"name": "Expert"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
"skillsaves":
  "Sleight of Hand": !!int "8"
  "Stealth": !!int "12"
  "Performance": !!int "6"
  "Acrobatics": !!int "12"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can take the Help action as a bonus action, and the creature\
    \ who receives the help gains a 1d6 bonus to the d20 roll. If that roll is an\
    \ attack roll, the creature can forgo adding the bonus to it, and then if the\
    \ attack hits, the creature can add the bonus to the attack's damage roll against\
    \ one target."
  "name": "Helpful"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the expert is not [incapacitated](/rules/conditions.md#incapacitated)\
    \ and subjected to an effect that allows it to make a Dexterity saving throw to\
    \ take only half damage, it instead takes no damage if it succeeds on the saving\
    \ throw, and only half damage if it failed."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert has thieves' tools and a musical instrument."
  "name": "Tools"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can attack twice, instead of once, whenever it takes the attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d6 + 4) piercing damage."
  "name": "Shortbow"
"source":
- "SDW"
name: Expert
image: "[[Expert.png]]"
---

# Expert

```statblock
"name": "Expert"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "8"
"skillsaves":
  "Sleight of Hand": !!int "8"
  "Stealth": !!int "12"
  "Performance": !!int "6"
  "Acrobatics": !!int "12"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can take the Help action as a bonus action, and the creature\
    \ who receives the help gains a 1d6 bonus to the d20 roll. If that roll is an\
    \ attack roll, the creature can forgo adding the bonus to it, and then if the\
    \ attack hits, the creature can add the bonus to the attack's damage roll against\
    \ one target."
  "name": "Helpful"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the expert is not [incapacitated](/rules/conditions.md#incapacitated)\
    \ and subjected to an effect that allows it to make a Dexterity saving throw to\
    \ take only half damage, it instead takes no damage if it succeeds on the saving\
    \ throw, and only half damage if it failed."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert has thieves' tools and a musical instrument."
  "name": "Tools"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The expert can attack twice, instead of once, whenever it takes the attack\
    \ action on its turn."
  "name": "Extra Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d6 + 4) piercing damage."
  "name": "Shortbow"
"source":
- "SDW"
"image": "[[Expert.png]]"
```
^statblock

*Source: Sleeping Dragon's Wake*
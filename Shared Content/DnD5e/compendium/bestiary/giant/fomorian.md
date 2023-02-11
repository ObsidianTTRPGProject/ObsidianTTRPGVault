---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/giant
- monster/environment/underdark
aliases: ["Fomorian"]
statblock: true
"name": "Fomorian"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "9"
- !!int "14"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Giant, Undercommon"
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fomorian attacks twice with its greatclub or makes one greatclub attack\
    \ and uses Evil Eye once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fomorian magically forces a creature it can see within 60 feet of it\
    \ to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Evil Eye"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature\
    \ is also cursed with magical deformities. While deformed, the creature has its\
    \ speed halved and has disadvantage on ability checks, saving throws, and attacks\
    \ based on Strength or Dexterity.\n\nThe transformed creature can repeat the saving\
    \ throw whenever it finishes a long rest, ending the effect on a success."
  "name": "Curse of the Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "WDMM"
- "CM"
- "WBtW"
- "JttRC"
name: Fomorian
image: "[[Fomorian.png]]"
---

# Fomorian

```statblock
"name": "Fomorian"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "9"
- !!int "14"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Giant, Undercommon"
"cr": "8"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fomorian attacks twice with its greatclub or makes one greatclub attack\
    \ and uses Evil Eye once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8\
    \ + 6) bludgeoning damage."
  "name": "Greatclub"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fomorian magically forces a creature it can see within 60 feet of it\
    \ to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Evil Eye"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature\
    \ is also cursed with magical deformities. While deformed, the creature has its\
    \ speed halved and has disadvantage on ability checks, saving throws, and attacks\
    \ based on Strength or Dexterity.\n\nThe transformed creature can repeat the saving\
    \ throw whenever it finishes a long rest, ending the effect on a success."
  "name": "Curse of the Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "WDMM"
- "CM"
- "WBtW"
- "JttRC"
"image": "[[Fomorian.png]]"
```
^statblock

*Source: Monster Manual p. 136, Waterdeep: Dungeon of the Mad Mage, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*

## Description

The most hideous and wicked of all giantkind are the godless fomorians, whose deformed bodies reflect their vile demeanors. Some have facial features randomly distributed around their misshapen, warty heads. Others have limbs of grossly different sizes and shapes, or emit terrible howls each time they draw breath through misshapen mouths. Their wretched appearance rarely evokes sympathy, however, for the fomorians brought their doom upon themselves with the evil that rules their hearts and minds.

**Fey Curse.** The elves remember when the fomorians were among the most handsome of races, possessed of brilliant minds and unrivaled magical ability. That physical perfection did not extend to their hearts, however, as a lust for magic and power consumed them. The fomorians sought to conquer the Feywild and enslave its inhabitants, claiming those creatures' magic for themselves. When the fey united to defend their realm, the fomorians fought them and were subjected to a terrible curse.

One by one, the giants fell as their bodies were warped to reflect the evil in their hearts. Stripped of their grace and magical power, the wretched horrors fled from the light, delving deep beneath the world to nurse their hatred. Cursing their fate, they have ever after plotted vengeance against the fey that wronged them.

**Giants of the Underdark.** The fomorians dwell in eerily beautiful caverns in the Underdark, rarely venturing to the surface. Their lairs feature abundant access to water, fish, and mushroom forests, as well as to the creatures whose slave labor keeps the fomorians fed. When those slaves can no longer toil, they are slain and devoured. Wickedness and depravity are the cornerstones of fomorian society, in which the strongest and cruelest giants rule. Fomorians mark their territories with the corpses of their enemies, painting their cavern walls with blood or stitching together limbs and body parts to make mockeries of the creatures they have killed.

**Ruined Flesh, Evil Minds.**  The deformities visited on the fomorians prevent them from hurling rocks like their giant kin, or wearing anything more than scraps of cloth. However, the grotesque positioning of their eyes, noses, and ears gives fomorians keen perceptive abilities, making it hard to surprise or ambush them. The greed and evil of the fomorians lies at the heart of their degeneration and fall, and continues to plague them. Fomorians make alliances with other creatures when it suits them, but they are disloyal by nature and betray their allies on a whim.

**Curse of the Evil Eye.** Fomorians can pass their curse onto others using a power called the evil eye-a last vestige of the giants' once-remarkable spellcasting ability. A creature cursed by a fomorian's evil eye is magically twisted and deformed, gaining a glimpse into the pain and malice that has consumed this evil race.

## Environment

underdark
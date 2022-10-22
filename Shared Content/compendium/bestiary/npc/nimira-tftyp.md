---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/underdark
aliases: ["Nimira"]
statblock: true
"name": "Nimira"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nimira has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nimira has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Multiattack. Nimira makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, or 16 (4d6 + 2) slashing damage while enlarged."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Nimira magically increases in size, along with anything it\
    \ is wearing or carrying. While enlarged, Nimira is Large, doubles its damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If Nimira lacks the room to\
    \ become Large, it attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage\
    \ while enlarged."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nimira magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, casts a spell, or uses its Enlarge, or until its concentration is\
    \ broken, up to 1 hour (as if concentrating on a spell). Any equipment Nimira\
    \ wears or carries is [invisible](/rules/conditions.md#invisible) with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "TftYP"
name: Nimira
image: "[[Nimira.png]]"
---

# Nimira

```statblock
"name": "Nimira"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nimira has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Nimira has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Multiattack. Nimira makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage, or 16 (4d6 + 2) slashing damage while enlarged."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, Nimira magically increases in size, along with anything it\
    \ is wearing or carrying. While enlarged, Nimira is Large, doubles its damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If Nimira lacks the room to\
    \ become Large, it attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage\
    \ while enlarged."
  "name": "Javelin"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nimira magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, casts a spell, or uses its Enlarge, or until its concentration is\
    \ broken, up to 1 hour (as if concentrating on a spell). Any equipment Nimira\
    \ wears or carries is [invisible](/rules/conditions.md#invisible) with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "TftYP"
"image": "[[Nimira.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 54*

## Description

The tyrannical duergar, also known as gray dwarves, dwell in fantastic cities deep in the Underdark. Using ancient dwarven knowledge and myriad slaves, they work tirelessly to expand their subterranean kingdoms.

Most duergar (including females) are bald and have ashen gray skin. They wear drab clothing designed to blend in with stone, along with simple jewelry that reflects their severe and utilitarian demeanor.

**Slaves to Slavers.** The duergar were once dwarves, before their greed and endless delving beneath the earth brought them into contact with the mind flayers. Held in captivity for generations by the illithids, the dwarves eventually won their independence with the aid of the evil god Laduguer. Slavery had forever changed them, however, darkening their spirits to make the duergar as evil as the tyrants they had escaped. Despite winning their freedom, duergar are dour, pessimistic, untrusting creatures, always toiling and complaining, with no memory of what it means to be happy or proud. Their craftsmanship and accomplishments endure, yet they are bereft of warmth or artistry.

Duergar make war against their dwarven kin and all other subterranean races. They forge alliances when it is convenient, then break those alliances when they have nothing more to gain. They take and hold slaves to toil in the Underdark, regarding them as free labor and crude currency.

**Tough as Stone.** Like dwarves, duergar have strong constitutions. Adding to their physical stamina is an incredible mental fortitude resulting from their time as slaves of the illithids. A duergar's mind is a fortress, able to shrug off charms, illusions, and other spells.

**Born of Darkness.** The Underdark is saturated with strange magical power, which the duergar absorbed over generations of imprisonment. A duergar can increase its size and strength for a short time, becoming a powerful ogre-sized warrior. If it faces a foe it can't fight, or when spying on creatures approaching its territory, it can just as easily become [invisible](/rules/conditions.md#invisible) to slip away into the darkness. Eons spent in the Underdark also sharpened their [darkvision](/rules/senses.md#darkvision), allowing them to see twice as far as other dwarves. This keen eyesight comes at a cost, however, as a duergar's vision is compromised by sunlight.

**Infernal Master.** Asmodeus, Lord of the Nine Hells, has been known to impersonate duergar gods in order to cultivate the evil brimming in the hearts of the gray dwarves. He offers them divine guidance and vengeance against their enemies while urging them on toward greater acts of tyranny, all the while concealing his true identity.

## Environment

underdark
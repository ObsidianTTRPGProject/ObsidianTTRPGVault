---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Duergar Spy"]
statblock: true
"name": "Duergar Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "13"
"speed": "walk 25 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Deception": !!int "5"
  "Stealth": !!int "7"
  "Investigation": !!int "5"
  "Insight": !!int "2"
  "Perception": !!int "4"
  "Persuasion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, the spy can deal an extra 7 (2d6) damage when it hits a\
    \ target with a weapon attack and has advantage on the attack roll, or when the\
    \ target is within 5 feet of an ally of the spy that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the spy has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the spy magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the spy is Large, doubles her damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If the spy lacks the room\
    \ to become Large, it attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, or 10 (2d6 + 3) piercing damage while enlarged."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, deals damage, casts a spell, or uses its Enlarge, or until its concentration\
    \ is broken, up to 1 hour (as if concentrating on a spell). Any equipment the\
    \ spy wears or carries is [invisible](/rules/conditions.md#invisible) with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "TftYP"
name: Duergar Spy
image: "[[Duergar Spy.png]]"
---

# Duergar Spy

```statblock
"name": "Duergar Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "13"
"speed": "walk 25 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Deception": !!int "5"
  "Stealth": !!int "7"
  "Investigation": !!int "5"
  "Insight": !!int "2"
  "Perception": !!int "4"
  "Persuasion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy has advantage on saving throws against poison, spells, and illusions,\
    \ as well as to resist being [charmed](/rules/conditions.md#charmed) or [paralyzed](/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, the spy can deal an extra 7 (2d6) damage when it hits a\
    \ target with a weapon attack and has advantage on the attack roll, or when the\
    \ target is within 5 feet of an ally of the spy that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the spy has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the spy magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the spy is Large, doubles her damage\
    \ dice on Strength-based weapon attacks (included in the attacks), and makes Strength\
    \ checks and Strength saving throws with advantage. If the spy lacks the room\
    \ to become Large, it attains the maximum size possible in the space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, or 10 (2d6 + 3) piercing damage while enlarged."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +5 to hit, range 30/120 ft., one target. Hit: 6\
    \ (1d6 + 3) piercing damage."
  "name": "Hand Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spy magically turns [invisible](/rules/conditions.md#invisible) until\
    \ it attacks, deals damage, casts a spell, or uses its Enlarge, or until its concentration\
    \ is broken, up to 1 hour (as if concentrating on a spell). Any equipment the\
    \ spy wears or carries is [invisible](/rules/conditions.md#invisible) with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "TftYP"
"image": "[[Duergar Spy.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 234*

## Description

The tyrannical duergar, also known as gray dwarves, dwell in fantastic cities deep in the Underdark. Using ancient dwarven knowledge and myriad slaves, they work tirelessly to expand their subterranean kingdoms.

Most duergar (including females) are bald and have ashen gray skin. They wear drab clothing designed to blend in with stone, along with simple jewelry that reflects their severe and utilitarian demeanor.

**Slaves to Slavers.** The duergar were once dwarves, before their greed and endless delving beneath the earth brought them into contact with the mind flayers. Held in captivity for generations by the illithids, the dwarves eventually won their independence with the aid of the evil god Laduguer. Slavery had forever changed them, however, darkening their spirits to make the duergar as evil as the tyrants they had escaped. Despite winning their freedom, duergar are dour, pessimistic, untrusting creatures, always toiling and complaining, with no memory of what it means to be happy or proud. Their craftsmanship and accomplishments endure, yet they are bereft of warmth or artistry.

Duergar make war against their dwarven kin and all other subterranean races. They forge alliances when it is convenient, then break those alliances when they have nothing more to gain. They take and hold slaves to toil in the Underdark, regarding them as free labor and crude currency.

**Tough as Stone.** Like dwarves, duergar have strong constitutions. Adding to their physical stamina is an incredible mental fortitude resulting from their time as slaves of the illithids. A duergar's mind is a fortress, able to shrug off charms, illusions, and other spells.

**Born of Darkness.** The Underdark is saturated with strange magical power, which the duergar absorbed over generations of imprisonment. A duergar can increase its size and strength for a short time, becoming a powerful ogre-sized warrior. If it faces a foe it can't fight, or when spying on creatures approaching its territory, it can just as easily become [invisible](/rules/conditions.md#invisible) to slip away into the darkness. Eons spent in the Underdark also sharpened their [darkvision](/rules/senses.md#darkvision), allowing them to see twice as far as other dwarves. This keen eyesight comes at a cost, however, as a duergar's vision is compromised by sunlight.

**Infernal Master.** Asmodeus, Lord of the Nine Hells, has been known to impersonate duergar gods in order to cultivate the evil brimming in the hearts of the gray dwarves. He offers them divine guidance and vengeance against their enemies while urging them on toward greater acts of tyranny, all the while concealing his true identity.
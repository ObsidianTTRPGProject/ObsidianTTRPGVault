---
cssclass: json5e-monster
tags:
- compendium/src/hftt
- monster/size/huge
- monster/type/monstrosity
aliases: ["Thessalhydra"]
statblock: true
"name": "Thessalhydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "69"
"hit_dice": "6d12 + 30"
"stats":
- !!int "19"
- !!int "12"
- !!int "20"
- !!int "5"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "acid"
"condition_immunities": "blinded, charmed, deafened, frightened, stunned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes one maw attack and one Flurry of Bites."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 10 (4d4) poison damage."
  "name": "Flurry of Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 5 (1d10) acid damage."
  "name": "Maw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (1d12\
    \ + 4) slashing damage, and the target is [grappled](/rules/conditions.md#grappled).\
    \ As an action, the target can escape the grapple by succeeding on a DC 14 Strength\
    \ (Athletics) or Dexterity (Acrobatics) check (its choice). Until this grapple\
    \ ends, the thessalhydra can't use its tail pincer."
  "name": "Tail Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra spits a glob of acid at a point it can see within 30 feet\
    \ of it. Each creature within 10 feet of that point must make a DC 15 Dexterity\
    \ saving throw, taking 18 (4d8) acid damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Acid Saliva (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes a Wisdom (Perception) check with advantage."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes a tail pincer attack."
  "name": "Tail Swipe"
"source":
- "HftT"
- "IMR"
name: Thessalhydra
image: "[[Thessalhydra.png]]"
---

# Thessalhydra

```statblock
"name": "Thessalhydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "69"
"hit_dice": "6d12 + 30"
"stats":
- !!int "19"
- !!int "12"
- !!int "20"
- !!int "5"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "acid"
"condition_immunities": "blinded, charmed, deafened, frightened, stunned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes one maw attack and one Flurry of Bites."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 10 (4d4) poison damage."
  "name": "Flurry of Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 5 (1d10) acid damage."
  "name": "Maw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10 (1d12\
    \ + 4) slashing damage, and the target is [grappled](/rules/conditions.md#grappled).\
    \ As an action, the target can escape the grapple by succeeding on a DC 14 Strength\
    \ (Athletics) or Dexterity (Acrobatics) check (its choice). Until this grapple\
    \ ends, the thessalhydra can't use its tail pincer."
  "name": "Tail Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra spits a glob of acid at a point it can see within 30 feet\
    \ of it. Each creature within 10 feet of that point must make a DC 15 Dexterity\
    \ saving throw, taking 18 (4d8) acid damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Acid Saliva (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes a Wisdom (Perception) check with advantage."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The thessalhydra makes a tail pincer attack."
  "name": "Tail Swipe"
"source":
- "HftT"
- "IMR"
"image": "[[Thessalhydra.png]]"
```
^statblock

*Source: Hunt for the Thessalhydra p. 41, Infernal Machine Rebuild*

## Description

The thessalhydra is a strange and terrible creature with eight heads surrounding a large, circular mouth rimmed with jagged teeth. Its maw drips with acid, and its tail ends with a pair of sharp pincers. The thessalhydra is gluttonous and damaging to any environment.
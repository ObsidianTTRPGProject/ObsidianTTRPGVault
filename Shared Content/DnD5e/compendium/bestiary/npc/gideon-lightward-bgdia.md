---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/medium
- monster/type/undead
aliases: ["Gideon Lightward"]
statblock: true
"name": "Gideon Lightward"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "13"
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Religion": !!int "6"
  "Insight": !!int "7"
"damage_vulnerabilities": "radiant"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon regains 10 hit points at the start of each of his turns. If he takes\
    \ radiant damage, this trait doesn't function at the start of his next turn. Gideon\
    \ is destroyed only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon attacks twice with his fists."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon targets one creature he can see within 60 feet of him. The target\
    \ must make a DC 15 Constitution saving throw, taking 22 (4d10) necrotic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Withering Gaze"
"source":
- "BGDIA"
name: Gideon Lightward
image: "[[Gideon Lightward.png]]"
---

# Gideon Lightward

```statblock
"name": "Gideon Lightward"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "13"
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Religion": !!int "6"
  "Insight": !!int "7"
"damage_vulnerabilities": "radiant"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon regains 10 hit points at the start of each of his turns. If he takes\
    \ radiant damage, this trait doesn't function at the start of his next turn. Gideon\
    \ is destroyed only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon attacks twice with his fists."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gideon targets one creature he can see within 60 feet of him. The target\
    \ must make a DC 15 Constitution saving throw, taking 22 (4d10) necrotic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Withering Gaze"
"source":
- "BGDIA"
"image": "[[Gideon Lightward.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 65*

## Description

Gideon Lightward was a priest of Lathander who served Elturel and his deity proudly. Zariel saw that his fervor could be an asset to her, so she sent devils to corrupt him in the months leading up to the fall of Elturel. The devils posed as angels, offering Gideon increased power if he would dedicate himself to fighting the ever-present threat of demons.

Gideon slowly gave up his sanity and free will to the devils, leaving him corrupted by Zariel and fully serving her in the months leading up to Elturel's fall. He died during the destruction wrought as the city was drawn to Avernus, but the priest rose as an undead creature. Even as an undead, Gideon remains his mistress's most loyal servant in Elturel. He sees his cause as a noble one—fighting the demons whose chaos marks the end of all things. But his mind is broken and filled with hatred for those who refuse to follow his commands.
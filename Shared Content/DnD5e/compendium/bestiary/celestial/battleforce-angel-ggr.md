---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/celestial
aliases: ["Battleforce Angel"]
statblock: true
"name": "Battleforce Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "6"
"damage_resistances": "fire, radiant"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks. It also uses Battlefield Inspiration."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 18 (4d8) radiant damage. If the target is within 5 feet of any of the angel's\
    \ allies, the target takes an extra 2 (1d4) radiant damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel chooses up to three creatures it can see within 30 feet of it.\
    \ Until the end of the angel's next turn, each target can add a d4 to its attack\
    \ rolls and saving throws."
  "name": "Battlefield Inspiration"
"source":
- "GGR"
name: Battleforce Angel
image: "[[Battleforce Angel.png]]"
---

# Battleforce Angel

```statblock
"name": "Battleforce Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "6"
"damage_resistances": "fire, radiant"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks. It also uses Battlefield Inspiration."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 18 (4d8) radiant damage. If the target is within 5 feet of any of the angel's\
    \ allies, the target takes an extra 2 (1d4) radiant damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel chooses up to three creatures it can see within 30 feet of it.\
    \ Until the end of the angel's next turn, each target can add a d4 to its attack\
    \ rolls and saving throws."
  "name": "Battlefield Inspiration"
"source":
- "GGR"
"image": "[[Battleforce Angel.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 189*

## Description

Battleforce angels are the radiant hosts that soar into combat, bathed in the light of Boros zeal. They lead companies of mortal soldiers from above or fly ahead of roc-mounted skyknights. They don't shy away from the blood, pain, and confusion of combat; rather, they immerse themselves in the shifting tides of battle. Only by wading into the battle can they fulfill their responsibility to carry out the commands of the warleaders by adapting their tactics to the shifting situation on the ground.

**Boros Angels.** Angels of the Boros Legion view themselves as the embodiments of what their creator intended. They are fierce warriors devoted to justice and dedicated to protecting the weak against evil and oppression. They are commanders, advisors, strategists, and soldiers. Their presence in battle inspires the mortal soldiers of the legion with righteous zeal.

Most Boros soldiers assume that angels are paragons of goodness, wisdom, and mercy. The reality is that angels aren't immune to the temptations of corruption, and the necessities of political machination can compromise the best of them.

**Warleaders.** The wisest, most visionary angels are responsible for forming and implementing the military strategy of the Boros Legion. Since they are immortal, their plans might span centuries, and they have been known to accept decades of losses as a reasonable cost for a more significant victory many years later. These warleaders have the statistics of planetars or solars (as presented in the Monster Manual), but their appearance is similar to other Boros angels.
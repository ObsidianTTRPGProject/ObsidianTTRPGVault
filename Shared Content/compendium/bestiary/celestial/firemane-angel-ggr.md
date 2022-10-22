---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/celestial
aliases: ["Firemane Angel"]
statblock: true
"name": "Firemane Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "22"
- !!int "15"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "23"
"speed": "walk 40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "6"
  "Strength": !!int "10"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). The angel can innately cast the following spells,\
    \ requiring no material components:\n\n1/day each: [daylight](/compendium/spells/daylight.md),\
    \ [fireball](/compendium/spells/fireball.md) (as a 6th-level spell)\n\n3/day\
    \ each: [compelled duel](/compendium/spells/compelled-duel.md), [guiding bolt](/compendium/spells/guiding-bolt.md)\
    \ (as a 5th-level spell)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the angel takes 21 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage, or 11 (1d10 + 6) slashing damage if used with two hands,\
    \ plus 22 (5d8) fire or radiant damage (angel's choice)."
  "name": "Longsword"
"source":
- "GGR"
name: Firemane Angel
image: "[[Firemane Angel.png]]"
---

# Firemane Angel

```statblock
"name": "Firemane Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "22"
- !!int "15"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "23"
"speed": "walk 40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "6"
  "Strength": !!int "10"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's innate spellcasting ability is Charisma (spell save DC 18,\
    \ +10 to hit with spell attacks). The angel can innately cast the following spells,\
    \ requiring no material components:\n\n1/day each: [daylight](/compendium/spells/daylight.md),\
    \ [fireball](/compendium/spells/fireball.md) (as a 6th-level spell)\n\n3/day\
    \ each: [compelled duel](/compendium/spells/compelled-duel.md), [guiding bolt](/compendium/spells/guiding-bolt.md)\
    \ (as a 5th-level spell)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the angel takes 21 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage, or 11 (1d10 + 6) slashing damage if used with two hands,\
    \ plus 22 (5d8) fire or radiant damage (angel's choice)."
  "name": "Longsword"
"source":
- "GGR"
"image": "[[Firemane Angel.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 190*

## Description

Firemane angels are holy champions and paragons of war who specialize in single combat. They are powerful warriors who seek out the mightiest foes in any conflict, trusting lesser soldiers to handle lesser opponents.

Like many other Boros angels, firemanes typically have red hair. In the heat of battle, a firemane's hair can ignite, transforming into a mane of flames cascading over its shoulders and down its back.

**Boros Angels.** Angels of the Boros Legion view themselves as the embodiments of what their creator intended. They are fierce warriors devoted to justice and dedicated to protecting the weak against evil and oppression. They are commanders, advisors, strategists, and soldiers. Their presence in battle inspires the mortal soldiers of the legion with righteous zeal.

Most Boros soldiers assume that angels are paragons of goodness, wisdom, and mercy. The reality is that angels aren't immune to the temptations of corruption, and the necessities of political machination can compromise the best of them.

**Warleaders.** The wisest, most visionary angels are responsible for forming and implementing the military strategy of the Boros Legion. Since they are immortal, their plans might span centuries, and they have been known to accept decades of losses as a reasonable cost for a more significant victory many years later. These warleaders have the statistics of planetars or solars (as presented in the Monster Manual), but their appearance is similar to other Boros angels.
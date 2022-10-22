---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/medium
- monster/type/humanoid/warlock
aliases: ["Oriq Blood Mage"]
statblock: true
"name": "Oriq Blood Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "11"
- !!int "14"
- !!int "18"
- !!int "20"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "9"
  "Survival": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "exhaustion"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the blood mage includes its Constitution modifier while it isn't\
    \ wearing armor or wielding a shield."
  "name": "Blood Aegis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage wears an Oriq mask. While wearing the mask, the blood mage\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma (Deception) checks\
    \ (included above)."
  "name": "Oriq Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the blood mage isn't [blinded](/rules/conditions.md#blinded), it\
    \ can see any creature that isn't an Undead or a Construct within 60 feet of itself,\
    \ even through total cover, heavily obscured areas, invisibility, or any other\
    \ phenomena that would prevent sight."
  "name": "Sanguine Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage makes two Blood Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) necrotic damage. If the target is a creature, it can't regain hit points\
    \ until the start of the blood mage's next turn."
  "name": "Blood Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage chooses a point within 150 feet of itself, and a 20-foot\
    \ radius sphere centered on that point fills with a burst of searing, blood-red\
    \ mist. Each creature of the blood mage's choice that it can see in that area\
    \ must make a DC 17 Constitution saving throw. On a failed save, a creature takes\
    \ 38 (7d10) necrotic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a success, a creature takes half as much\
    \ damage and isn't [incapacitated](/rules/conditions.md#incapacitated). A creature\
    \ dies if reduced to 0 hit points by this necrotic damage."
  "name": "Blood Boil (Recharge 4-6)"
"source":
- "SCC"
name: Oriq Blood Mage
image: "[[Oriq Blood Mage.png]]"
---

# Oriq Blood Mage

```statblock
"name": "Oriq Blood Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "11"
- !!int "14"
- !!int "18"
- !!int "20"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Medicine": !!int "5"
  "Deception": !!int "9"
  "Survival": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "exhaustion"
"senses": "passive Perception 11"
"languages": "Common plus any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the blood mage includes its Constitution modifier while it isn't\
    \ wearing armor or wielding a shield."
  "name": "Blood Aegis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage wears an Oriq mask. While wearing the mask, the blood mage\
    \ can't be targeted by any divination magic or perceived through magical scrying\
    \ sensors, and it adds double its proficiency bonus to Charisma (Deception) checks\
    \ (included above)."
  "name": "Oriq Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While the blood mage isn't [blinded](/rules/conditions.md#blinded), it\
    \ can see any creature that isn't an Undead or a Construct within 60 feet of itself,\
    \ even through total cover, heavily obscured areas, invisibility, or any other\
    \ phenomena that would prevent sight."
  "name": "Sanguine Sense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage makes two Blood Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) necrotic damage. If the target is a creature, it can't regain hit points\
    \ until the start of the blood mage's next turn."
  "name": "Blood Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The blood mage chooses a point within 150 feet of itself, and a 20-foot\
    \ radius sphere centered on that point fills with a burst of searing, blood-red\
    \ mist. Each creature of the blood mage's choice that it can see in that area\
    \ must make a DC 17 Constitution saving throw. On a failed save, a creature takes\
    \ 38 (7d10) necrotic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a success, a creature takes half as much\
    \ damage and isn't [incapacitated](/rules/conditions.md#incapacitated). A creature\
    \ dies if reduced to 0 hit points by this necrotic damage."
  "name": "Blood Boil (Recharge 4-6)"
"source":
- "SCC"
"image": "[[Oriq Blood Mage.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 201*

## Description

Oriq blood mages create deadly weapons formed of their own blood. They can also sense the life energy within nearby creatures, making the blood mages almost impossible to ambush.

**Oriq.** The Oriq are a secret society of mages who wield forbidden magic in the service of their leader, Extus Narr. Narr was in consideration for elevation to the role of Oracle of Strixhaven, but when the Founder Dragons passed him over in favor of Jadzi, his bitterness knew no bounds. He now uses the Oriq to gather the spells and magical energy he needs to summon a devastating being, the Blood Avatar, to destroy Strixhaven.

The Oriq work in secret, infiltrating Strixhaven to search for the magic their master covets and watch for impressionable students and embittered faculty they might turn to their cause. The Oriq take pains to hide their true allegiance and wear masks to hide their identities. These masks have magical properties that function only for their intended wearers.
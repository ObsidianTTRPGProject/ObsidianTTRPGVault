---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/kraul
aliases: ["Kraul Death Priest"]
statblock: true
"name": "Kraul Death Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "kraul"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft., fly 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "4"
"skillsaves":
  "Nature": !!int "3"
  "Religion": !!int "3"
  "Insight": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Kraul"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul's innate spellcasting ability is Wisdom (spell save DC 12, +4\
    \ to hit with spell attacks). The kraul can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [chill touch](/compendium/spells/chill-touch.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1/day each: [animate\
    \ dead](/compendium/spells/animate-dead.md), [blight](/compendium/spells/blight.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n3/day each: [ray\
    \ of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of the kraul drops to 0 hit points, the\
    \ kraul or another creature of its choice within 30 feet of it gains 5 (1d10)\
    \ temporary hit points, provided the kraul isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Feed on Death"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul is immune to the [charmed](/rules/conditions.md#charmed) and\
    \ [frightened](/rules/conditions.md#frightened) conditions while within 30 feet\
    \ of at least one other kraul."
  "name": "Hive Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul has advantage on an attack roll against a creature if at least\
    \ one of the kraul's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul makes one attack with its quarterstaff and casts one of its spells\
    \ with a casting time of 1 action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
"source":
- "GGR"
name: Kraul Death Priest
image: "[[Kraul Death Priest.png]]"
---

# Kraul Death Priest

```statblock
"name": "Kraul Death Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "kraul"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft., fly 40 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "4"
"skillsaves":
  "Nature": !!int "3"
  "Religion": !!int "3"
  "Insight": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Kraul"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul's innate spellcasting ability is Wisdom (spell save DC 12, +4\
    \ to hit with spell attacks). The kraul can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [chill touch](/compendium/spells/chill-touch.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1/day each: [animate\
    \ dead](/compendium/spells/animate-dead.md), [blight](/compendium/spells/blight.md),\
    \ [vampiric touch](/compendium/spells/vampiric-touch.md)\n\n3/day each: [ray\
    \ of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of the kraul drops to 0 hit points, the\
    \ kraul or another creature of its choice within 30 feet of it gains 5 (1d10)\
    \ temporary hit points, provided the kraul isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Feed on Death"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul is immune to the [charmed](/rules/conditions.md#charmed) and\
    \ [frightened](/rules/conditions.md#frightened) conditions while within 30 feet\
    \ of at least one other kraul."
  "name": "Hive Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul has advantage on an attack roll against a creature if at least\
    \ one of the kraul's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kraul makes one attack with its quarterstaff and casts one of its spells\
    \ with a casting time of 1 action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
"source":
- "GGR"
"image": "[[Kraul Death Priest.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 214*

## Description

The death priests occupy the highest roles in kraul society. They lead the buzzing chants of the kraul rites. Their inscrutable clicks and buzzing can summon crippling necromantic magic, and the presence of death seems to fortify them. They draw power from the defeat of their enemies and channel it to their followers, ensuring the continuation of the cycle.

The current leader of the kraul is a death priest named Mazirek.

**Kraul.** The kraul are an ascendant power group within the Golgari Swarm, long content to linger at the margins of the undercity but now increasingly making their buzzing voices heard in the subterranean Golgari guildhall. These six-legged, insectile beings are hard-headed and literal-minded, with little grasp of metaphor or nuance.
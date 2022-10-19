---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Golgari Shaman"]
statblock: true
"name": "Golgari Shaman"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "11"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "17"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Nature": !!int "4"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shaman is an 8th-level Golgari spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). The shaman has the\
    \ following druid spells prepared:\n\nCantrips (at will): [poison spray](/compendium/spells/poison-spray.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spike growth](/compendium/spells/spike-growth.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (2 4th-level slots): [blight](/compendium/spells/blight.md), [giant\
    \ insect](/compendium/spells/giant-insect.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shaman has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ necrotic damage, and the target must make a DC 14 Constitution saving throw,\
    \ taking 18 (4d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Fungal Rot"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of the shaman drops to 0 hit points, the\
    \ shaman gains 5 (1d10) temporary hit points."
  "name": "Feed on Death"
"source":
- "GGR"
name: Golgari Shaman
image: "[[Golgari Shaman.png]]"
---

# Golgari Shaman

```statblock
"name": "Golgari Shaman"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "11"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "17"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Nature": !!int "4"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shaman is an 8th-level Golgari spellcaster. Its spellcasting ability\
    \ is Wisdom (spell save DC 14, +6 to hit with spell attacks). The shaman has the\
    \ following druid spells prepared:\n\nCantrips (at will): [poison spray](/compendium/spells/poison-spray.md),\
    \ [shillelagh](/compendium/spells/shillelagh.md), [thorn whip](/compendium/spells/thorn-whip.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spike growth](/compendium/spells/spike-growth.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [plant growth](/compendium/spells/plant-growth.md)\n\
    \n4th level (2 4th-level slots): [blight](/compendium/spells/blight.md), [giant\
    \ insect](/compendium/spells/giant-insect.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shaman has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
    \ necrotic damage, and the target must make a DC 14 Constitution saving throw,\
    \ taking 18 (4d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Fungal Rot"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of the shaman drops to 0 hit points, the\
    \ shaman gains 5 (1d10) temporary hit points."
  "name": "Feed on Death"
"source":
- "GGR"
"image": "[[Golgari Shaman.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 236*

## Description

Golgari shamans are the spiritual leaders of the Golgari Swarm. They teach the guild's beliefs about the cycles of nature, using their necromantic magic to show how life sprouts from death.

Golgari shamans paint their faces so they appear to have extra eyes on their cheeks and chins. They sometimes use magical moodmark paint (described in chapter 5) to allow them to communicate by means of these marks. They wear clothing adorned with beetle carapaces, spiderwebs, or shelf fungus.

**Golgari Lairs.** Members of the Golgari Swarm have an intimate connection to their territory. When at least six Golgari defend their territory together, they can call on the environment to aid them. The group must include Jarad Vod Savo or at least one Golgari shaman, kraul death priest, undercity medusa, or Devkarin lich. When determining the difficulty of such an encounter, consider the lair to be one additional creature of challenge rating 1.
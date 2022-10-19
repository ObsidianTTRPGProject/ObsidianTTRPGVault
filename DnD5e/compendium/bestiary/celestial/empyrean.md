---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/celestial/titan
aliases: ["Empyrean"]
statblock: true
"name": "Empyrean"
"size": "Huge"
"type": "celestial"
"subtype": "titan"
"alignment": "Chaotic Good or Neutral Evil"
"ac": !!int "22"
"hp": !!int "313"
"hit_dice": "19d12 + 190"
"stats":
- !!int "30"
- !!int "21"
- !!int "30"
- !!int "21"
- !!int "22"
- !!int "27"
"speed": "walk 50 ft., fly 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "13"
  "Intelligence": !!int "12"
  "Strength": !!int "17"
"skillsaves":
  "Insight": !!int "13"
  "Persuasion": !!int "15"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean's innate spellcasting ability is Charisma (spell save DC 23,\
    \ +15 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n1/day each: [commune](/compendium/spells/commune.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [earthquake](/compendium/spells/earthquake.md),\
    \ [fire storm](/compendium/spells/fire-storm.md), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the empyrean fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the empyrean's next turn."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6)\
    \ damage of one of the following types (empyrean's choice): acid, cold, fire,\
    \ force, lightning, radiant, or thunder."
  "name": "Bolt"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean bolsters all nonhostile creatures within 120 feet of it until\
    \ the end of its next turn. Bolstered creatures can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and they gain advantage on\
    \ ability checks and saving throws until the end of the empyrean's next turn."
  "name": "Bolster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean strikes the ground with its maul, triggering an earth tremor.\
    \ All other creatures on the ground within 60 feet of the empyrean must succeed\
    \ on a DC 25 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Trembling Strike (Costs 2 Actions)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "BGDIA"
- "MOT"
name: Empyrean
image: "[[Empyrean.png]]"
---

# Empyrean

```statblock
"name": "Empyrean"
"size": "Huge"
"type": "celestial"
"subtype": "titan"
"alignment": "Chaotic Good or Neutral Evil"
"ac": !!int "22"
"hp": !!int "313"
"hit_dice": "19d12 + 190"
"stats":
- !!int "30"
- !!int "21"
- !!int "30"
- !!int "21"
- !!int "22"
- !!int "27"
"speed": "walk 50 ft., fly 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "13"
  "Intelligence": !!int "12"
  "Strength": !!int "17"
"skillsaves":
  "Insight": !!int "13"
  "Persuasion": !!int "15"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean's innate spellcasting ability is Charisma (spell save DC 23,\
    \ +15 to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [water breathing](/compendium/spells/water-breathing.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n1/day each: [commune](/compendium/spells/commune.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [earthquake](/compendium/spells/earthquake.md),\
    \ [fire storm](/compendium/spells/fire-storm.md), [plane shift](/compendium/spells/plane-shift.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the empyrean fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 15 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of the empyrean's next turn."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6)\
    \ damage of one of the following types (empyrean's choice): acid, cold, fire,\
    \ force, lightning, radiant, or thunder."
  "name": "Bolt"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean bolsters all nonhostile creatures within 120 feet of it until\
    \ the end of its next turn. Bolstered creatures can't be [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened), and they gain advantage on\
    \ ability checks and saving throws until the end of the empyrean's next turn."
  "name": "Bolster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The empyrean strikes the ground with its maul, triggering an earth tremor.\
    \ All other creatures on the ground within 60 feet of the empyrean must succeed\
    \ on a DC 25 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Trembling Strike (Costs 2 Actions)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "BGDIA"
- "MOT"
"image": "[[Empyrean.png]]"
```
^statblock

*Source: Monster Manual p. 130, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros*

## Description

Empyreans are the celestial children of the gods of the Upper Planes. They are universally beautiful, statuesque, and self-assured.

**Manifest Emotion.** An empyrean can experience deity-like fits of serenity or rage. It can affect the environment around it by its mood. When an empyrean is unhappy, the clouds might cry tears of salt water, the wildflowers in surrounding meadows might wilt, dead fish might wash ashore in lakes or rivers, or a nearby forest might lose the leaves from its trees. When an empyrean is jubilant, sunlight follows it everywhere, small animals frolic in its footsteps, and birds fill the sky with their pleasing songs.

**Evil Empyreans.** A few empyreans have turned to evil after venturing to the Lower Planes and becoming corrupted, or as the result of being cursed by evil gods. An evil empyrean can't survive long on the Upper Planes and usually retreats to the Material Plane, where it can rule over a kingdom of mortals as an indomitable tyrant.

**Immortal Titans.** Empyreans don't age but can be slain. Because few empyreans can imagine their own demise, they fight fearlessly when drawn into battle, refusing to believe that the end is upon them even when standing at death's door. When an empyrean dies, its spirit returns to its home plane. There, one of the fallen empyrean's parents resurrects the empyrean unless he or she has a good reason not to.
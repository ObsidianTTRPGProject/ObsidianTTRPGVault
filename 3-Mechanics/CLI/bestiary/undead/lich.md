---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Lich"]
---
# [Lich](3-Mechanics\CLI\bestiary\undead/lich.md)
*Source: Monster Manual p. 202. Available in the SRD.*  

```statblock
"name": "Lich"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "12"
  "Arcana": !!int "19"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "21"
"traits":
- "desc": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, dice: d20+12 (+12) to hit with spell attacks). The lich\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/3-Mechanics/CLI/spells/mage-hand.md),\
    \ [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md), [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md)\n\
    \n1st level (4 slots): [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md), [shield](/3-Mechanics/CLI/spells/shield.md),\
    \ [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [Melf's acid arrow](/3-Mechanics/CLI/spells/melfs-acid-arrow.md), [mirror image](/3-Mechanics/CLI/spells/mirror-image.md)\n\
    \n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/spells/animate-dead.md),\
    \ [counterspell](/3-Mechanics/CLI/spells/counterspell.md), [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md),\
    \ [fireball](/3-Mechanics/CLI/spells/fireball.md)\n\n4th level (3 slots):\
    \ [blight](/3-Mechanics/CLI/spells/blight.md), [dimension door](/3-Mechanics/CLI/spells/dimension-door.md)\n\
    \n5th level (3 slots): [cloudkill](/3-Mechanics/CLI/spells/cloudkill.md),\
    \ [scrying](/3-Mechanics/CLI/spells/scrying.md)\n\n6th level (1 slots): [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md),\
    \ [globe of invulnerability](/3-Mechanics/CLI/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 slots): [finger of death](/3-Mechanics/CLI/spells/finger-of-death.md),\
    \ [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\n\n8th level (1 slots):\
    \ [dominate monster](/3-Mechanics/CLI/spells/dominate-monster.md), [power word\
    \ stun](/3-Mechanics/CLI/spells/power-word-stun.md)\n\n9th level (1 slots):\
    \ [power word kill](/3-Mechanics/CLI/spells/power-word-kill.md)"
  "name": "spells"
- "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If it has a phylactery, a destroyed lich gains a new body in dice: 1d10|avg|noform\
    \ (1d10) days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- "desc": "The lich has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- "desc": "Melee Spell Attack: dice: d20+12 (+12) to hit, reach 5 ft., one creature.\
    \ Hit: dice:3d6|text(10) (3d6) cold damage. The target must succeed on a\
    \ DC 18 Constitution saving throw or be [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- "desc": "The lich casts a cantrip."
  "name": "Cantrip"
- "desc": "The lich uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- "desc": "The lich fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) for 1 minute.\
    \ The [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to the lich's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- "desc": "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution\
    \ saving throw against this magic, taking dice:6d6|text(21) (6d6) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "MM"
- "CoS"
- "GoS"
- "IDRotF"
- "TCE"
- "PSI"
- "SatO"
- "ToFW"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/undead/token/lich.webp"
```
^statblock
---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/undead
aliases: ["Renwick"]
statblock: true
"name": "Renwick"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil Alignment"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
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
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). Renwick has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [disintegrate](/compendium/spells/disintegrate.md), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)\n\n8th level (1 8th-level\
    \ slots): [dominate monster](/compendium/spells/dominate-monster.md), [power\
    \ word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Renwick fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 18 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to Renwick's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of Renwick must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "PotA"
name: Renwick
image: "[[Renwick.png]]"
---

# Renwick

```statblock
"name": "Renwick"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil Alignment"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
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
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). Renwick has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [mirror image](/compendium/spells/mirror-image.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [disintegrate](/compendium/spells/disintegrate.md), [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md)\n\n8th level (1 8th-level\
    \ slots): [dominate monster](/compendium/spells/dominate-monster.md), [power\
    \ word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Renwick fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 18 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Renwick fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to Renwick's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of Renwick must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "PotA"
"image": "[[Renwick.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 66*
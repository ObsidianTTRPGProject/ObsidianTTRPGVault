---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
aliases: ["Tarul Var"]
statblock: true
"name": "Tarul Var"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "History": !!int "9"
  "Arcana": !!int "9"
"damage_resistances": "cold; lightning; necrotic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Common, Infernal, Primordial, Thayan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var is a 12th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nConjuration spell of 1st level or higher\n\nCantrips\
    \ (at will): [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [flaming sphere](/compendium/spells/flaming-sphere.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [dimension door](/compendium/spells/dimension-door.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Var is concentrating on a conjuration spell, his concentration can't\
    \ be broken as a result of taking damage."
  "name": "Focused Conjuration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Var fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Var is destroyed but his phylactery remains intact, Var gains a new\
    \ body in 1d10 days, regaining all his hit points and becoming active again. The\
    \ new body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 17 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var teleports up to 30 feet to an unoccupied space he can see. Alternatively,\
    \ he can choose a space within range that is occupied by a Small or Medium creature.\
    \ If that creature is willing, both creatures teleport, swapping places. Var can\
    \ use this feature again only after he finishes a long rest or casts a conjuration\
    \ spell of 1st level or higher."
  "name": "Benign Transposition"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var uses Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var fixes his gaze on one creature he can see within 10 feet of him. The\
    \ target must succeed on a DC 17 Wisdom saving throw against this magic or become\
    \ [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to Var's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
"source":
- "TftYP"
name: Tarul Var
image: "[[Tarul Var.png]]"
---

# Tarul Var

```statblock
"name": "Tarul Var"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "History": !!int "9"
  "Arcana": !!int "9"
"damage_resistances": "cold; lightning; necrotic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Common, Infernal, Primordial, Thayan"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var is a 12th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nConjuration spell of 1st level or higher\n\nCantrips\
    \ (at will): [fire bolt](/compendium/spells/fire-bolt.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [detect magic](/compendium/spells/detect-magic.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [flaming sphere](/compendium/spells/flaming-sphere.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [dimension door](/compendium/spells/dimension-door.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Var is concentrating on a conjuration spell, his concentration can't\
    \ be broken as a result of taking damage."
  "name": "Focused Conjuration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Var fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Var is destroyed but his phylactery remains intact, Var gains a new\
    \ body in 1d10 days, regaining all his hit points and becoming active again. The\
    \ new body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 17 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var teleports up to 30 feet to an unoccupied space he can see. Alternatively,\
    \ he can choose a space within range that is occupied by a Small or Medium creature.\
    \ If that creature is willing, both creatures teleport, swapping places. Var can\
    \ use this feature again only after he finishes a long rest or casts a conjuration\
    \ spell of 1st level or higher."
  "name": "Benign Transposition"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var uses Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Var fixes his gaze on one creature he can see within 10 feet of him. The\
    \ target must succeed on a DC 17 Wisdom saving throw against this magic or become\
    \ [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to Var's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
"source":
- "TftYP"
"image": "[[Tarul Var.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 244*

## Description

After failing in an earlier task for the Red Wizards, the lich Tarul Var is sequestered within the Doomvault (Dead in Thay), where he tries to avoid the attention of Szass Tam. Interlopers who discover his quarters are set upon by the lich and his dread warrior guards, but if Var is brought to the brink of death, he might bargain for a chance to escape the dungeon.

**Undead Nature.** A lich doesn't require air, food, drink, or sleep.
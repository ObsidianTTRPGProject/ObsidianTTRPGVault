---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
aliases: ["Valindra Shadowmantle"]
statblock: true
"name": "Valindra Shadowmantle"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
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
"languages": "Common, Abyssal, Draconic, Dwarvish, Elvish, Infernal"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra is an 18th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). Valindra has the following\
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
    \ slots): [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Valindra can mask her shriveled flesh and appear to\
    \ be a living elf. This magical illusion lasts until she ends it as a bonus action\
    \ or until she uses her Frightening Gaze legendary action. The effect also ends\
    \ if Valindra drops to 30 hit points or fewer, or if [dispel magic](/compendium/spells/dispel-magic.md)\
    \ is cast on her."
  "name": "Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When preparing her spells, Valindra can swap out any spell on her list\
    \ of prepared spells for another wizard spell of the same level."
  "name": "Preparation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Valindra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If destroyed Valindra gains a new body in 1d10 days, regaining all her\
    \ hit points and becoming active again. The new body appears within 5 feet of\
    \ the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra has advantage on saving throws against any effect that turns undead."
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
  "desc": "Valindra casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra uses her Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra fixes her gaze on one creature she can see within 10 feet of her.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to the Valindra's gaze for the next\
    \ 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of Valindra must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "ToA"
name: Valindra Shadowmantle
image: "[[Valindra Shadowmantle.png]]"
---

# Valindra Shadowmantle

```statblock
"name": "Valindra Shadowmantle"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
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
"languages": "Common, Abyssal, Draconic, Dwarvish, Elvish, Infernal"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra is an 18th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). Valindra has the following\
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
    \ slots): [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Valindra can mask her shriveled flesh and appear to\
    \ be a living elf. This magical illusion lasts until she ends it as a bonus action\
    \ or until she uses her Frightening Gaze legendary action. The effect also ends\
    \ if Valindra drops to 30 hit points or fewer, or if [dispel magic](/compendium/spells/dispel-magic.md)\
    \ is cast on her."
  "name": "Mask"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When preparing her spells, Valindra can swap out any spell on her list\
    \ of prepared spells for another wizard spell of the same level."
  "name": "Preparation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Valindra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If destroyed Valindra gains a new body in 1d10 days, regaining all her\
    \ hit points and becoming active again. The new body appears within 5 feet of\
    \ the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra has advantage on saving throws against any effect that turns undead."
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
  "desc": "Valindra casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra uses her Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Valindra fixes her gaze on one creature she can see within 10 feet of her.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to the Valindra's gaze for the next\
    \ 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of Valindra must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "ToA"
"image": "[[Valindra Shadowmantle.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 58*

## Description

Liches are the remains of great wizards who embrace undeath as a means of preserving themselves. They further their own power at any cost, having no interest in the affairs of the living except where those affairs interfere with their own. Scheming and insane, they hunger for long-forgotten knowledge and the most terrible secrets. Because the shadow of death doesn't hang over them, they can conceive plans that take years, decades, or centuries to come to fruition.

A lich is a gaunt and skeletal humanoid with withered flesh stretched tight across its bones. Its eyes succumbed to decay long ago, but points of light burn in its empty sockets. It is often garbed in the moldering remains of fine clothing and jewelry worn and dulled by the passage of time.

**Biography.** Valindra Shadowmantle works for Szass Tam, the most powerful lich among the Red Wizards of Thay, though she is not a Red Wizard herself. She found the heart and converted it into a base to use while her minions search for the Soulmonger. Her orders from Szass Tam are to seize control of the Soulmonger, if possible, or destroy it otherwise. Valindra created a teleportation circle inside the heart that she uses to travel instantly to and from Thay (where her phylactery is safely stored), to deliver reports to Szass Tam and pick up new instructions.

Characters who explore the Heart of Ubtao are certain to meet Valindra. She's considered the possibility that adventurers might cross her path, and she won't necessarily be hostile toward them. Her mission is to seize the Soulmonger by any means; if adventurers can help her achieve that, she'll use them.

With her ability to appear as a living elf, Valindra can easily conceal her lichdom and her association to Thay. She presents herself as a scholarly wizard who wants to "imprison" the Soulmonger; that way, its unique magic can be studied while it's safely quarantined from the world. She argues that destroying it should be a last resort.
---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
aliases: ["Lich"]
statblock: true
"name": "Lich"
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
  "desc": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). The lich has the following\
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
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich has advantage on saving throws against any effect that turns undead."
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
  "desc": "The lich casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to the lich's gaze for the next 24\
    \ hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "MM"
- "CoS"
- "GoS"
- "IDRotF"
- "TCE"
name: Lich
image: "[[Lich.png]]"
---

# Lich

```statblock
"name": "Lich"
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
  "desc": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, +12 to hit with spell attacks). The lich has the following\
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
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich has advantage on saving throws against any effect that turns undead."
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
  "desc": "The lich casts a cantrip."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to the lich's gaze for the next 24\
    \ hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution\
    \ saving throw against this magic, taking 21 (6d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "MM"
- "CoS"
- "GoS"
- "IDRotF"
- "TCE"
"image": "[[Lich.png]]"
```
^statblock

*Source: Monster Manual p. 202, Curse of Strahd, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything*

## Description

Liches are the remains of great wizards who embrace undeath as a means of preserving themselves. They further their own power at any cost, having no interest in the affairs of the living except where those affairs interfere with their own. Scheming and insane, they hunger for long-forgotten knowledge and the most terrible secrets. Because the shadow of death doesn't hang over them, they can conceive plans that take years, decades, or centuries to come to fruition.

A lich is a gaunt and skeletal humanoid with withered flesh stretched tight across its bones. Its eyes succumbed to decay long ago, but points of light burn in its empty sockets. It is often garbed in the moldering remains of fine clothing and jewelry worn and dulled by the passage of time.

**Secrets of Undeath.** No wizard takes up the path to lichdom on a whim, and the process of becoming a lich is a well-guarded secret. Wizards that seek lichdom must make bargains with fiends, evil gods, or other foul entities. Many turn to Orcus, Demon Prince of Undeath, whose power has created countless liches. However, those that control the power of lichdom always demand fealty and service for their knowledge.

A lich is created by an arcane ritual that traps the wizard's soul within a phylactery. Doing so binds the soul to the mortal world, preventing it from traveling to the Outer Planes after death. A phylactery is traditionally an amulet in the shape of a small box, but it can take the form of any item possessing an interior space into which arcane sigils of naming, binding, immortality, and dark magic are scribed in silver.

With its phylactery prepared, the future lich drinks a potion of transformation-a vile concoction of poison mixed with the blood of a sentient creature whose soul is sacrificed to the phylactery. The wizard falls dead, then rises as a lich as its soul is drawn into the phylactery, where it forever remains.

**Soul Sacrifices.** A lich must periodically feed souls to its phylactery to sustain the magic preserving its body and consciousness. It does this using the [imprisonment](/compendium/spells/imprisonment.md) spell. Instead of choosing one of the normal options of the spell, the lich uses the spell to magically trap the target's body and soul inside its phylactery. The phylactery must be on the same plane as the lich for the spell to work. A lich's phylactery can hold only one creature at a time, and a [dispel magic](/compendium/spells/dispel-magic.md) cast as a 9th-level spell upon the phylactery releases any creature imprisoned within it. A creature imprisoned in the phylactery for 24 hours is consumed and destroyed utterly, whereupon nothing short of divine intervention can restore it to life.

A lich that fails or forgets to maintain its body with sacrificed souls begins to physically fall apart, and might eventually become a demilich.

**Death and Restoration.** When a lich's body is broken by accident or assault, the will and mind of the lich drains from it, leaving only a lifeless corpse behind. Within days, a new body reforms next to the lich's phylactery, coalescing out of glowing smoke that issues from the device. Because the destruction of its phylactery means the possibility of eternal death, a lich usually keeps its phylactery in a hidden, well-guarded location.

Destroying a lich's phylactery is no easy task and often requires a special ritual, item, or weapon. Every phylactery is unique, and discovering the key to its destruction can be a quest in and of itself.

**Lonely Existence.** From time to time, a lich might be stirred from its single-minded pursuit of power to take an interest in the world around it, most often when some great event reminds it of the life it once led. It otherwise lives in isolation, engaging only with those creatures whose service helps secure its lair.

Few liches call themselves by their former names, instead adopting monikers such as the Black Hand or the Forgotten King.

**Magic Collectors.** Liches collect spells and magic items. In addition to its spell repertoire, a lich has ready access to potions, scrolls, libraries of spellbooks, one or more wands, and perhaps a staff or two. It has no qualms about putting these treasures to use whenever its lair comes under attack.

**Undead Nature.** A lich doesn't require air, food, drink, or sleep.

**A Lich's Lair.** A lich often haunts the abode it favored in life, such as a lonely tower, a haunted ruin, or an academy of black magic. Alternatively, some liches construct secret tombs filled with powerful guardians and traps. Everything about a lich's lair reflects its keen mind and wicked cunning, including the magic and mundane traps that secure it. Undead, constructs, and bound demons lurk in shadowy recesses, emerging to destroy those who dare to disturb the lich's work.

A lich encountered in its lair has a challenge rating of 22 (41,000 XP).
---
cssclass: json5e-monster
tags:
- compendium/src/vgm
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
aliases: ["Illithilich"]
statblock: true
"name": "Illithilich"
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
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich's innate spellcasting ability is Intelligence (spell save\
    \ DC 20). It can innately cast the following spells, requiring no components.\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich is an 18th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
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
  "desc": "If the illithilich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed illithilich gains a new body in 1d10\
    \ days, regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich has advantage on saving throws against any effect that\
    \ turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 18 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit: 21 (3d10\
    \ + 5) psychic damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 20 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by the lich. Hit: 55 (10d10)\
    \ piercing damage. If this damage reduces the target to 0 hit points, the lich\
    \ kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 18 Intelligence saving throw or take\
    \ 27 (5d8 + 5) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich makes one attack with its tentacles."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich uses Extract Brain."
  "name": "Extract Brain (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich recharges its Mind Blast and uses it."
  "name": "Mind Blast (Costs 3 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell\
    \ that it has prepared. Doing so costs 1 legendary action per level of the spell."
  "name": "Cast Spell (Costs 1–3 Actions)"
"source":
- "VGM"
name: Illithilich
image: "[[Illithilich.png]]"
---

# Illithilich

```statblock
"name": "Illithilich"
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
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich's innate spellcasting ability is Intelligence (spell save\
    \ DC 20). It can innately cast the following spells, requiring no components.\n\
    \nAt will: [detect thoughts](/compendium/spells/detect-thoughts.md), [levitate](/compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich is an 18th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
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
  "desc": "If the illithilich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it has a phylactery, a destroyed illithilich gains a new body in 1d10\
    \ days, regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the phylactery."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich has advantage on saving throws against any effect that\
    \ turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage. The target must succeed on a DC 18 Constitution saving throw or\
    \ be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit: 21 (3d10\
    \ + 5) psychic damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 20 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/rules/conditions.md#grappled) by the lich. Hit: 55 (10d10)\
    \ piercing damage. If this damage reduces the target to 0 hit points, the lich\
    \ kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 18 Intelligence saving throw or take\
    \ 27 (5d8 + 5) psychic damage and be [stunned](/rules/conditions.md#stunned) for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich makes one attack with its tentacles."
  "name": "Tentacles"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich uses Extract Brain."
  "name": "Extract Brain (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich recharges its Mind Blast and uses it."
  "name": "Mind Blast (Costs 3 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The illithilich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell\
    \ that it has prepared. Doing so costs 1 legendary action per level of the spell."
  "name": "Cast Spell (Costs 1–3 Actions)"
"source":
- "VGM"
"image": "[[Illithilich.png]]"
```
^statblock

*Source: Volo's Guide to Monsters p. 172*

## Description

Mind flayers that pursue arcane magic are exiled as deviants, and for them no eternal communion with an elder brain is possible. The road to lichdom offers a way to escape the permanency of death, but that path is long and solitary. Alhoons are mind flayers that use a shortcut.

**Arcane Temptation.**  Elder brains forbid mind flayers from pursuing magic power aside from psionics, but it isn't an interdiction they must often enforce. Illithids brook no masters but members of their own kind, so it isn't in their nature to bow to any god or otherworldly patron. However, wizardry remains a rare temptation.

In the pages of a spellbook, an illithid sees a system to acquire authority. Through the writings of the wizard who penned it, the illithid perceives the workings of a highly intelligent mind. Most mind flayers who find a spellbook react with abhorrence or indifference, but for some a spellbook is a gateway to a new way of thinking.

For a time, the study of such forbidden texts can be hidden from other illithids and even from an elder brain. Understanding of wizardry eludes the mind like a living thing. Yet eventually, understanding comes, and a mind flayer arcanist must accept itself as deviant and flee the colony if it is to live.

Confronting this awful reality, a group of nine mind flayer deviants used their arcane magic and psionics to weave a new truth. These nine called themselves the alhoon, and ever afterward, all those who follow in their footsteps have been referred to by the same name.

Initially, an alhoon can be difficult to distinguish from a normal mind flayer. The most obvious difference is the lack of the mind flayer's ever-present mucus coating. Without that protection, an alhoon's skin becomes dry and cracked. Its eyes might appear shriveled and sunken. Both of these clues are easily missed by someone who hasn't seen a mind flayer. However, in short order, an alhoon's flesh withers away and its empty eye sockets gleam with cold pinpricks of light like other liches.

The undeath conferred by a periapt of mind trapping lasts only so long as the life of the living victim selected. Thus an alhoon who brought a 200-year-old elf to be sacrificed looks forward to a much longer existence than one that sacrifices a 35-year-old person. Alhoons can extend their existence by repeating the ritual with new victims, effectively resetting the clocks for themselves.

Destruction of a periapt of mind trapping consigns those trapped within it to oblivion, and thus alhoons often work together to create elaborate protections about the periapt and their preferred ritual site. Sometimes a single alhoon is entrusted with the periapt of mind trapping, but this is a dangerous proposition. Anyone who holds the periapt of mind trapping gains advantage on attacks, saves, and check against the alhoons associated with its creation, and those alhoons in turn suffer disadvantage on attacks, saves, and check against the holder.

In addition, the holder of the periapt can telepathically communicate with any sacrificed soul trapped within, and alhoons within the periapt can speak telepathically with the holder. A creature carrying the periapt can't prevent communication from alhoons but can silence trapped souls.

**Existential Fear.**  Arcanist deviants that taste freedom from the colony react in a variety of ways. Some prize their privacy, others seek to commune with similar minds, and still others seek to dominate a colony, elevating themselves to the position of leadership normally held by an elder brain. Regardless of the arcanist's personal inclinations, it faces the same stark fact: When it dies, it will not join the host of minds in the elder brain. Deviant minds are never accepted as part of the collective. For it, death means oblivion.

**Dreadful Deliverance.**  Lichdom offers salvation and the prospect of being able to pursue knowledge indefinitely. Having feasted on the brains of people when alive, a mind flayer has no compunction about feeding souls to a phylactery. The only hindrance to a mind flayer becoming a lich is the means, which is a secret some mind flayer arcanists stop at nothing to discover. Yet lichdom requires an arcane spellcaster to be at the apex of power, something many mind flayers find is far from their grasps.

**A Psionic Secret.**  Alhoons can cooperate in the creation of a periapt of mind trapping, a fist-sized container made of silver, emerald, and amethyst. The process requires at least three mind flayer arcanists and the sacrifice of an equal number of souls from living victims in a three-day-long ritual of spellcasting and psionic communion. Upon its completion, free-willed undeath is conferred on the mind flayers, turning them into alhoons.

**Precarious Immortality.**  Unlike with true lichdom, the periapt of mind trapping doesn't restore the alhoons to undeath if they are destroyed. Instead, a destroyed alhoon's mind is transferred to the periapt where it remains in communion with any other trapped alhoon minds, as well as the souls of those sacrificed.

**Variant Mind Flayer Lich (Illithilich).** The path to true lichdom is something only the most powerful mind flayer mages can pursue, since it requires the ability to craft a phylactery and cast the [imprisonment](/compendium/spells/imprisonment.md) spell. A mind flayer lich uses the lich stat block (see the Monster Manual), with the following changes:

- It has a challenge rating of 22 (41,000 XP).
- It speaks Deep Speech and Undercommon, and has telepathy out to a range of 120 feet.
- It has the Magic Resistance and Innate Spellcasting (Psionics) traits, as well as the Tentacles, Extract Brain, and Mind Blast action options (all described below). So long as a mind flayer lich feeds captured souls to its phylactery, it maintains the muscular power of its tentacles and the ability to extract brains.
- Its suite of legendary actions (described below) is different from that of the normal lich.

**Magic Resistance.**  The lich has advantage on saving throws against spells and other magical effects.

At will: detect thoughts, levitate

1/day each: dominate monster, plane shift (self only)

**Innate Spellcasting (Psionics).**  The lich's innate spellcasting ability is Intelligence (spell save DC 20). It can innately cast the following spells, requiring no components.

**Actions.** **Tentacles.** Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit: 21 (3d10 + 5) psychic damage. If the target is Large or smaller, it is [grappled](/rules/conditions.md#grappled) (escape DC 15) and must succeed on a DC 20 Intelligence saving throw or be [stunned](/rules/conditions.md#stunned) until this grapple ends.

**Extract Brain.** Melee Weapon Attack: +12 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated) humanoid [grappled](/rules/conditions.md#grappled) by the lich. Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the lich kills the target by extracting and devouring its brain.

**Mind Blast (Recharge 5-6).** The lich magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 18 Intelligence saving throw or take 27 (5d8 + 5) psychic damage and be [stunned](/rules/conditions.md#stunned) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

**Illithilich Legendary Actions.** The lich gains the following legendary action options, which replace all of the lich's legendary actions.

**Tentacles.**  The lich makes one attack with its tentacles.

**Extract Brain (Costs 2 Actions).**  The lich uses Extract Brain.

**Mind Blast (Costs 3 Actions).**  The lich recharges its Mind Blast and uses it.

**Cast Spell (Costs 1–3 Actions).**  The lich uses a spell slot to cast a 1st-, 2nd-, or 3rd-level spell that it has prepared. Doing so costs 1 legendary action per level of the spell.

## Environment

underdark
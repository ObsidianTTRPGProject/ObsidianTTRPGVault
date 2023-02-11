---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/undead
aliases: ["Nass Lantomir's Ghost"]
statblock: true
"name": "Nass Lantomir's Ghost"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic, Orc"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost is a 6th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14). The ghost has the following wizard spells prepared:\n\n\
    Cantrips (at will): [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 60 feet of the ghost that can see it must\
    \ succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If the target's saving throw is successful\
    \ or the effect ends for it, the target is immune to this ghost's Horrifying Visage\
    \ for the next 24 hours. The aging effect can be reversed by a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, but only if it is cast within 24 hours."
  "name": "Horrifying Visage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the ghost can see within 5 feet of it must succeed on\
    \ a DC 14 Charisma saving throw or be possessed by the ghost; the ghost then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The ghost now controls the body but doesn't deprive the\
    \ target of awareness. The ghost can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The possession lasts until the body drops to 0 hit\
    \ points, the ghost ends it as a bonus action, or the ghost is turned or forced\
    \ out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the ghost reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this ghost's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "IDRotF"
name: Nass Lantomir's Ghost
image: "[[Nass Lantomir's Ghost.png]]"
---

# Nass Lantomir's Ghost

```statblock
"name": "Nass Lantomir's Ghost"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "17"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft."
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic, Orc"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost is a 6th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14). The ghost has the following wizard spells prepared:\n\n\
    Cantrips (at will): [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6\
    \ + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each non-undead creature within 60 feet of the ghost that can see it must\
    \ succeed on a DC 14 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](/rules/conditions.md#frightened) target can repeat the\
    \ saving throw at the end of each of its turns, ending the [frightened](/rules/conditions.md#frightened)\
    \ condition on itself on a success. If the target's saving throw is successful\
    \ or the effect ends for it, the target is immune to this ghost's Horrifying Visage\
    \ for the next 24 hours. The aging effect can be reversed by a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, but only if it is cast within 24 hours."
  "name": "Horrifying Visage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid that the ghost can see within 5 feet of it must succeed on\
    \ a DC 14 Charisma saving throw or be possessed by the ghost; the ghost then disappears,\
    \ and the target is [incapacitated](/rules/conditions.md#incapacitated) and loses\
    \ control of its body. The ghost now controls the body but doesn't deprive the\
    \ target of awareness. The ghost can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](/rules/conditions.md#charmed)\
    \ and [frightened](/rules/conditions.md#frightened). It otherwise uses the possessed\
    \ target's statistics, but doesn't gain access to the target's knowledge, class\
    \ features, or proficiencies. The possession lasts until the body drops to 0 hit\
    \ points, the ghost ends it as a bonus action, or the ghost is turned or forced\
    \ out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the ghost reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this ghost's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "IDRotF"
"image": "[[Nass Lantomir's Ghost.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 272*

## Description

Nass Lantomir was an apprentice of Zelenn the White, one of five archmages who oversee the Arcane Brotherhood. Nass and Zelenn's relationship started off well, but in recent years it has become painfully obvious to Zelenn that Nass has been slow to master the arcane tradition of divination. Zelenn's suggestion that Nass leave the Hosttower of the Arcane and gain experience abroad left Nass feeling unwanted. After much thought, however, Nass came around to the idea. She could put her magic to the test and carve out a name for herself.

As she was preparing to leave the Hosttower, Nass overheard her master talking to another wizard about a covert expedition to Icewind Dale being undertaken to seek out long-lost magic from a bygone empire. Rather than carry out her original plan, Nass followed her fellow wizards to Icewind Dale. She caught up to them in Bryn Shander and made her presence known, claiming she was sent by her master to aid the expedition with her divinations. Egos and frayed nerves caused the group to split up shortly thereafter, with each wizard determined to succeed alone.

One night while the others slept, Nass stole a [professor orb](/compendium/items/professor-skant-idrotf.md) (see appendix D) from one of her fellow wizards, Vellynne Harpell. Two of Vellynne's kobold companions witnessed the theft, and Nass killed them with [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md) spells before fleeing with the orb.

Nass fled Ten-Towns and headed toward the Sea of Moving Ice, hoping to find a tome called [The Codicil of White](/compendium/items/the-codicil-of-white-idrotf.md), a book of magic and lore composed by servants of Auril the Frostmaiden. The Arcane Brotherhood believes that this book tells how to reach a lost city of magic entombed in the ice. Before she could obtain the book, Nass perished. She now exists as a ghost, unable to rest until she finds the book. Characters who come upon Nass's frozen remains also find her spellbook and the orb she stole from Vellynne.

**Familiar.** Nass's magical familiar, a white arctic weasel acclimated to cold weather named Zelennor, watches over the wizard's frozen remains. It uses the [weasel](/compendium/bestiary/beast/weasel.md) stat block in the "Monster Manual" but is a fey instead of a beast. If Zelennor is reduced to 0 hit points, Nass's ghost is unable to cast the [find familiar](/compendium/spells/find-familiar.md) spell in order to get it back.

**Spellcasting.** As a ghost, Nass can cast the spells she prepared prior to her death—except that the ghost can't cast spells that require material components, which limits its options. Its list of prepared spells shows only those spells it can cast. Although it has no 2nd-level spells available, the ghost can use its 2nd-level spell slots to cast upgraded versions of the [thunderwave](/compendium/spells/thunderwave.md) spell.

**Spellbook.** The wooden covers of Nass's spellbook are bound in nothic hide, and silver clasps hold the book shut. Nass's personal sigil is inscribed on the spine, which also bears the title Lantomir's Traveling Libram. The tome contains the following spells: [clairvoyance](/compendium/spells/clairvoyance.md), [cloud of daggers](/compendium/spells/cloud-of-daggers.md), [counterspell](/compendium/spells/counterspell.md), [detect magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md), [find familiar](/compendium/spells/find-familiar.md), [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [Tenser's floating disk](/compendium/spells/tensers-floating-disk.md), and [thunderwave](/compendium/spells/thunderwave.md).
---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/large
- monster/type/fey
aliases: ["Nintra Siotta"]
statblock: true
"name": "Nintra Siotta"
"size": "Large"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "306"
"hit_dice": "36d10 + 108"
"stats":
- !!int "16"
- !!int "24"
- !!int "16"
- !!int "17"
- !!int "15"
- !!int "24"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "12"
  "Wisdom": !!int "7"
  "Strength": !!int "8"
"skillsaves":
  "Deception": !!int "12"
  "Insight": !!int "7"
  "Perception": !!int "7"
"condition_immunities": "charmed, exhaustion, stunned"
"senses": "truesight 60 ft., passive Perception 17"
"languages": "Common, Elvish, Sylvan"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra casts one of the following spells, using Charisma as the spellcasting\
    \ ability (save DC 20) and requiring no material components:\n\n3/day each:\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [mirror image](/compendium/spells/mirror-image.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nintra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12 (2d4\
    \ + 7) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 10 (1d6\
    \ + 7) necrotic damage, and if the target is a creature, it must succeed on a\
    \ DC 20 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Shard of Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra targets a point she can see within 60 feet of her and creates a\
    \ 20-foot-radius sphere of swirling glass shards centered on that point. Each\
    \ creature in the sphere must make a DC 20 Dexterity saving throw, taking 28 (8d6)\
    \ slashing damage on a failed save, or half as much damage on a successful save.\
    \ If Nintra is in the sphere, the shards deal no damage to her."
  "name": "Storm of Shattered Glass (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra teleports to an unoccupied space she can see within 30 feet of her."
  "name": "Fey Step"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Provided she is in bright or dim light, Nintra causes her shadow to attack\
    \ a creature within 10 feet of her. Her shadow makes two claw attacks, each attack\
    \ identical to Nintra's claw attack except that it deals psychic damage instead\
    \ of piercing damage."
  "name": "Shadow Strikes (Costs 2 Actions)"
"source":
- "CM"
name: Nintra Siotta
image: "[[Nintra Siotta.png]]"
---

# Nintra Siotta

```statblock
"name": "Nintra Siotta"
"size": "Large"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "306"
"hit_dice": "36d10 + 108"
"stats":
- !!int "16"
- !!int "24"
- !!int "16"
- !!int "17"
- !!int "15"
- !!int "24"
"speed": "walk 40 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "12"
  "Wisdom": !!int "7"
  "Strength": !!int "8"
"skillsaves":
  "Deception": !!int "12"
  "Insight": !!int "7"
  "Perception": !!int "7"
"condition_immunities": "charmed, exhaustion, stunned"
"senses": "truesight 60 ft., passive Perception 17"
"languages": "Common, Elvish, Sylvan"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra casts one of the following spells, using Charisma as the spellcasting\
    \ ability (save DC 20) and requiring no material components:\n\n3/day each:\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [mirror image](/compendium/spells/mirror-image.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Nintra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12 (2d4\
    \ + 7) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 10 (1d6\
    \ + 7) necrotic damage, and if the target is a creature, it must succeed on a\
    \ DC 20 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ until the end of its next turn."
  "name": "Shard of Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra targets a point she can see within 60 feet of her and creates a\
    \ 20-foot-radius sphere of swirling glass shards centered on that point. Each\
    \ creature in the sphere must make a DC 20 Dexterity saving throw, taking 28 (8d6)\
    \ slashing damage on a failed save, or half as much damage on a successful save.\
    \ If Nintra is in the sphere, the shards deal no damage to her."
  "name": "Storm of Shattered Glass (Recharge 6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra makes one attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nintra teleports to an unoccupied space she can see within 30 feet of her."
  "name": "Fey Step"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Provided she is in bright or dim light, Nintra causes her shadow to attack\
    \ a creature within 10 feet of her. Her shadow makes two claw attacks, each attack\
    \ identical to Nintra's claw attack except that it deals psychic damage instead\
    \ of piercing damage."
  "name": "Shadow Strikes (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Nintra Siotta.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 197*

## Description

Nintra Siotta, a chaotic evil archfey who was exiled from the Gloaming Court by the Queen of Air and Darkness long ago, is known in Faerûn by three titles: Princess of the Shadow Glass, Lady of Dread Omens, and Seeker of the Three Crowns. She appears as a 9-foot-tall humanoid made of smoky gray glass, wrapped in a cloak-like darkness that appears to devour the light.

Nintra's eyes burn with green fire, and she speaks in a high, musical voice. Deception comes naturally to her, but imprisonment in _The Scrivener's Tale_has made her impatient and prone to telepathic outbursts that betray her cruel nature.
---
cssclass: json5e-monster
tags:
- compendium/src/vd
- monster/size/medium
- monster/type/undead/wizard
aliases: ["Vecna the Archlich"]
statblock: true
"name": "Vecna the Archlich"
"size": "Medium"
"type": "undead"
"subtype": "Wizard"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "272"
"hit_dice": "32d8 + 128"
"stats":
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "22"
- !!int "24"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "15"
  "Intelligence": !!int "14"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "15"
  "Perception": !!int "15"
  "History": !!int "14"
  "Arcana": !!int "22"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [animate dead](/compendium/spells/animate-dead.md) (as an action), [detect\
    \ magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n2/day each:\
    \ [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [scrying](/compendium/spells/scrying.md) (as an action)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vecna fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna carries a magic dagger named Afterthought. In the hands of anyone\
    \ other than Vecna, Afterthought is a +2 dagger."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vecna is slain, his soul refuses to accept its fate and lives on as\
    \ a disembodied spirit that fashions a new body for itself after 1d100 years.\
    \ Vecna's soul can fashion a new body even if its old body was burned to ash or\
    \ otherwise obliterated. When the new body is complete, Vecna regains all his\
    \ hit points and becomes active again. Vecna's new body appears anywhere within\
    \ 100 miles of where Vecna was slain."
  "name": "Undying"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna uses Flight of the Damned (if available), Rotten Fate, or Spellcasting.\
    \ He then makes two attacks with _Afterthought_."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage, plus 9 (2d8) necrotic damage. If the target is a creature,\
    \ it is afflicted by entropic magic, taking 9 (2d8) necrotic damage at the start\
    \ of each of its turns. Immediately after taking this damage on its turn, the\
    \ target can make a DC 20 Constitution saving throw, ending the effect on itself\
    \ on a success. Until it succeeds on this save, the afflicted target can't regain\
    \ hit points."
  "name": "Afterthought"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna conjures a torrent of flying, spectral entities that fill a 120-foot\
    \ cone and pass through all creatures in that area before dissipating. Each creature\
    \ in that area must make a DC 22 Constitution saving throw. On a failed save,\
    \ the creature takes 36 (8d8) necrotic damage and is [frightened](/rules/conditions.md#frightened)\
    \ of Vecna for 1 minute. On a failed save, the creature takes half as much damage\
    \ and isn't [frightened](/rules/conditions.md#frightened). A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Flight of the Damned (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna causes necrotic magic to engulf one creature he can see within 120\
    \ feet of himself. The target must make a DC 22 Constitution saving throw, taking\
    \ 96 (8d8 + 60) necrotic damage on a failed save, or half as much damage on a\
    \ successful one. A Humanoid killed by this magic rises as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ at the start of Vecna's next turn and acts immediately after Vecna in the initiative\
    \ order. The [zombie](/compendium/bestiary/undead/zombie.md) is under Vecna's\
    \ control."
  "name": "Rotten Fate"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna teleports, along with any equipment he is wearing or carrying, up\
    \ to 30 feet to an unoccupied space he can see. He can cause each creature of\
    \ his choice within 15 feet of his destination space to take 10 (3d6) psychic\
    \ damage. If at least one creature takes this damage, Vecna regains 80 hit points."
  "name": "Vile Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna utters a dread word to interrupt a creature he can see that is casting\
    \ a spell. If the spell is 4th level or lower, it fails and has no effect. If\
    \ the spell is 5th level or higher, Vecna makes an Intelligence check (DC 10 +\
    \ the spell's level). On a success, the spell fails and has no effect. Whatever\
    \ the spell's level, the caster takes 10 (3d6) psychic damage if the spell fails."
  "name": "Dread Counterspell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by an attack, Vecna utters a fell word, dealing\
    \ 10 (3d6) necrotic damage to the attacker, and Vecna teleports, along with any\
    \ equipment he is wearing or carrying, up to 30 feet to an unoccupied space he\
    \ can see."
  "name": "Fell Rebuke"
"source":
- "VD"
name: Vecna the Archlich
image: "[[Vecna the Archlich.png]]"
---

# Vecna the Archlich

```statblock
"name": "Vecna the Archlich"
"size": "Medium"
"type": "undead"
"subtype": "Wizard"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "272"
"hit_dice": "32d8 + 128"
"stats":
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "22"
- !!int "24"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "15"
  "Intelligence": !!int "14"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "15"
  "Perception": !!int "15"
  "History": !!int "14"
  "Arcana": !!int "22"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [animate dead](/compendium/spells/animate-dead.md) (as an action), [detect\
    \ magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [dominate monster](/compendium/spells/dominate-monster.md),\
    \ [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n2/day each:\
    \ [dimension door](/compendium/spells/dimension-door.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [scrying](/compendium/spells/scrying.md) (as an action)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vecna fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna carries a magic dagger named Afterthought. In the hands of anyone\
    \ other than Vecna, Afterthought is a +2 dagger."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Vecna is slain, his soul refuses to accept its fate and lives on as\
    \ a disembodied spirit that fashions a new body for itself after 1d100 years.\
    \ Vecna's soul can fashion a new body even if its old body was burned to ash or\
    \ otherwise obliterated. When the new body is complete, Vecna regains all his\
    \ hit points and becomes active again. Vecna's new body appears anywhere within\
    \ 100 miles of where Vecna was slain."
  "name": "Undying"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna uses Flight of the Damned (if available), Rotten Fate, or Spellcasting.\
    \ He then makes two attacks with _Afterthought_."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage, plus 9 (2d8) necrotic damage. If the target is a creature,\
    \ it is afflicted by entropic magic, taking 9 (2d8) necrotic damage at the start\
    \ of each of its turns. Immediately after taking this damage on its turn, the\
    \ target can make a DC 20 Constitution saving throw, ending the effect on itself\
    \ on a success. Until it succeeds on this save, the afflicted target can't regain\
    \ hit points."
  "name": "Afterthought"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna conjures a torrent of flying, spectral entities that fill a 120-foot\
    \ cone and pass through all creatures in that area before dissipating. Each creature\
    \ in that area must make a DC 22 Constitution saving throw. On a failed save,\
    \ the creature takes 36 (8d8) necrotic damage and is [frightened](/rules/conditions.md#frightened)\
    \ of Vecna for 1 minute. On a failed save, the creature takes half as much damage\
    \ and isn't [frightened](/rules/conditions.md#frightened). A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Flight of the Damned (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna causes necrotic magic to engulf one creature he can see within 120\
    \ feet of himself. The target must make a DC 22 Constitution saving throw, taking\
    \ 96 (8d8 + 60) necrotic damage on a failed save, or half as much damage on a\
    \ successful one. A Humanoid killed by this magic rises as a [zombie](/compendium/bestiary/undead/zombie.md)\
    \ at the start of Vecna's next turn and acts immediately after Vecna in the initiative\
    \ order. The [zombie](/compendium/bestiary/undead/zombie.md) is under Vecna's\
    \ control."
  "name": "Rotten Fate"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna teleports, along with any equipment he is wearing or carrying, up\
    \ to 30 feet to an unoccupied space he can see. He can cause each creature of\
    \ his choice within 15 feet of his destination space to take 10 (3d6) psychic\
    \ damage. If at least one creature takes this damage, Vecna regains 80 hit points."
  "name": "Vile Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Vecna utters a dread word to interrupt a creature he can see that is casting\
    \ a spell. If the spell is 4th level or lower, it fails and has no effect. If\
    \ the spell is 5th level or higher, Vecna makes an Intelligence check (DC 10 +\
    \ the spell's level). On a success, the spell fails and has no effect. Whatever\
    \ the spell's level, the caster takes 10 (3d6) psychic damage if the spell fails."
  "name": "Dread Counterspell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by an attack, Vecna utters a fell word, dealing\
    \ 10 (3d6) necrotic damage to the attacker, and Vecna teleports, along with any\
    \ equipment he is wearing or carrying, up to 30 feet to an unoccupied space he\
    \ can see."
  "name": "Fell Rebuke"
"source":
- "VD"
"image": "[[Vecna the Archlich.png]]"
```
^statblock

*Source: Vecna Dossier*

## Description

On countless worlds, his name evokes tales of terror and cruelty. Vecna the Undying King. Vecna the Whispered One. Vecna the Lord of the Rotted Tower. Over more than a hundred thousand years, incandescent hatred carried him from the humblest of origins to a conqueror's throne, then to the realms that lie beyond life and death, and finally to godhood. Many have suffered his terrible wrath, but few can recount how a lowly scribe left an aeon-deep scar on the multiverse before ascending beyond the material altogether. Only a few fragments of Vecna's story have ever been unearthed.

It is said that Vecna was born into a lowly caste on the world of Oerth, son of a hedge witch and a father he never knew. An order of wizards exiled Vecna's mother into the wastes for practicing the forbidden art of necromancy. The order bound her orphaned son into servitude and employed him as first a bootblack, then a scribe. Vecna spent the better part of his childhood secretly educating himself in his masters' arts, stealing into their library of magical treatises each night after midnight. It was during these intense study sessions that he first heard a soothing voice in his head, a whisper from another world that promised him revenge if he would only yield to the hatred that was festering in his heart. Once Vecna learned all he could from his masters and their books, he massacred them. On that very night, the voice urged him to record his every foul thought and dream, and he started to pen his [Book of Vile Darkness](/compendium/items/book-of-vile-darkness.md).

According to legend, Vecna went on to forge a kingdom in the world of Greyhawk. He ruled for several centuries from an obsidian tower that rose from the bottom of the black waters of the Nyr Dyv to stretch far above its surface. During this era, at the urging of the voice, Vecna conquered vast realms and swept great cities beneath earth and rock. Generations later, when his physical form finally started to succumb to the ravages of time, Vecna's festering hatred would not permit him to perish. He called upon the forbidden arts of necromancy to transform himself into a [lich](/compendium/bestiary/undead/lich.md), a frightful being beyond the reach of death.

At some point, Vecna grew bored with his kingdom on Oerth and started visiting his evil on other worlds, still driven by the mysterious voice and his unquenchable hatred for all things true and pure. For a time, he is said to have inhabited a palace known as the Citadel of Cavitius, located in a vast field of ash somewhere near the border between the Planes of Earth and Fire.

Eventually, a fallen paladin known as Kas the Bloody-Handed rose through the ranks of Vecna's vile minions to become the archlich's personal guard and regent over many of the kingdoms and cults Vecna established across the multiverse. As a symbol of Kas's authority, Vecna forged him a terrifying weapon, the blade now known as the [Sword of Kas](/compendium/items/sword-of-kas.md). Later, Kas turned on Vecna and used the sword to sever the archlich's hand and put out his eye. No one knows why Kas betrayed Vecna. Some believe the mysterious voice that spoke to Vecna for eons grew to fear the archlich and began whispering to Kas instead.

After their clash, Kas and Vecna disappeared for ages. The former later emerged as the ruler of the wasteland domain of Tovag in the Shadowfell. The latter spent several centuries hopping from world to world, questing for his [severed hand](/compendium/items/hand-of-vecna.md) and [eye](/compendium/items/eye-of-vecna.md). More recently, Vecna decamped to the Outer Planes, where he grew so powerful that he became a god. He has many ardent worshipers, all hungry for a taste of his immense power.

The accompanying stat block depicts Vecna in his archlich form prior to Kas's betrayal. Because Vecna is said to have mastered magic allowing him to travel through time, he can appear in this form even on worlds where his [severed hand](/compendium/items/hand-of-vecna.md) and [eye](/compendium/items/eye-of-vecna.md) are already known artifacts.

> [!quote] The Book of Vile Darkness
> 
> While Vecna always carries the [Book of Vile Darkness](/compendium/items/book-of-vile-darkness.md) on his person—in fact, he fashioned his lich form to encompass the Book—he typically has no need to call upon its foul magic in battle. If the DM wishes to run a more challenging (and more complex) encounter, Vecna may call upon any of the book's abilities as appropriate.
> 
^the-book-of-vile-darkness
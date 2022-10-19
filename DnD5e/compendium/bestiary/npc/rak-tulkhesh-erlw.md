---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/huge
- monster/type/fiend
aliases: ["Rak Tulkhesh"]
statblock: true
"name": "Rak Tulkhesh"
"size": "Huge"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "23"
"hp": !!int "478"
"hit_dice": "33d12 + 264"
"stats":
- !!int "29"
- !!int "19"
- !!int "27"
- !!int "21"
- !!int "22"
- !!int "26"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "16"
  "Wisdom": !!int "14"
  "Strength": !!int "17"
  "Constitution": !!int "16"
"skillsaves":
  "Intimidation": !!int "16"
  "Athletics": !!int "17"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "28"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh's spellcasting ability is Charisma (spell save DC 24). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n1/day each: [banishing smite](/compendium/spells/banishing-smite.md), [blinding\
    \ smite](/compendium/spells/blinding-smite.md), [staggering smite](/compendium/spells/staggering-smite.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh scores a critical hit on a roll of 19 or 20 and rolls the\
    \ damage dice three times, instead of twice."
  "name": "Deadly Critical"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rak Tulkhesh fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical aura of weapons surrounds Rak Tulkhesh in a 10 foot radius. At\
    \ the start of each of his turns, any other creature in the aura takes 14 (4d6)\
    \ force damage."
  "name": "Whirlwind of Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh makes four weapon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28 (3d12\
    \ + 9) force damage."
  "name": "Spawned Melee Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 150/600 ft., one target. Hit:\
    \ 17 (3d8 + 4) force damage."
  "name": "Spawned Ranged Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh magically polymorphs into a humanoid, beast, or giant that\
    \ has a challenge rating no higher than his own, or back into his true form. He\
    \ reverts to his true form if he dies. Any equipment he is wearing or carrying\
    \ is absorbed or borne by the new form (his choice).\n\nIn a new form, Rak Tulkhesh\
    \ retains his alignment, hit points, Hit Dice, ability to speak, proficiencies,\
    \ Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well\
    \ as this action. His statistics and capabilities are otherwise replaced by those\
    \ of the new form, except any class features or legendary actions of that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh casts [dispel magic](/compendium/spells/dispel-magic.md)."
  "name": "End Magic (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of Rak Tulkhesh must succeed on a DC 24 Wisdom\
    \ saving throw or use its reaction to make a melee weapon attack against a random\
    \ creature within reach. If no creatures are within reach, it makes a ranged weapon\
    \ attack against a random creature within range, throwing its weapon if necessary.\
    \ This attack is made with advantage and gains a +4 bonus to the damage roll."
  "name": "Provoke Rage (Costs 3 Actions)"
"source":
- "ERLW"
name: Rak Tulkhesh
image: "[[Rak Tulkhesh.png]]"
---

# Rak Tulkhesh

```statblock
"name": "Rak Tulkhesh"
"size": "Huge"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "23"
"hp": !!int "478"
"hit_dice": "33d12 + 264"
"stats":
- !!int "29"
- !!int "19"
- !!int "27"
- !!int "21"
- !!int "22"
- !!int "26"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "16"
  "Wisdom": !!int "14"
  "Strength": !!int "17"
  "Constitution": !!int "16"
"skillsaves":
  "Intimidation": !!int "16"
  "Athletics": !!int "17"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "28"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh's spellcasting ability is Charisma (spell save DC 24). He\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n1/day each: [banishing smite](/compendium/spells/banishing-smite.md), [blinding\
    \ smite](/compendium/spells/blinding-smite.md), [staggering smite](/compendium/spells/staggering-smite.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh scores a critical hit on a roll of 19 or 20 and rolls the\
    \ damage dice three times, instead of twice."
  "name": "Deadly Critical"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rak Tulkhesh fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A magical aura of weapons surrounds Rak Tulkhesh in a 10 foot radius. At\
    \ the start of each of his turns, any other creature in the aura takes 14 (4d6)\
    \ force damage."
  "name": "Whirlwind of Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh makes four weapon attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28 (3d12\
    \ + 9) force damage."
  "name": "Spawned Melee Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 150/600 ft., one target. Hit:\
    \ 17 (3d8 + 4) force damage."
  "name": "Spawned Ranged Weapon"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh magically polymorphs into a humanoid, beast, or giant that\
    \ has a challenge rating no higher than his own, or back into his true form. He\
    \ reverts to his true form if he dies. Any equipment he is wearing or carrying\
    \ is absorbed or borne by the new form (his choice).\n\nIn a new form, Rak Tulkhesh\
    \ retains his alignment, hit points, Hit Dice, ability to speak, proficiencies,\
    \ Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well\
    \ as this action. His statistics and capabilities are otherwise replaced by those\
    \ of the new form, except any class features or legendary actions of that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rak Tulkhesh casts [dispel magic](/compendium/spells/dispel-magic.md)."
  "name": "End Magic (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 60 feet of Rak Tulkhesh must succeed on a DC 24 Wisdom\
    \ saving throw or use its reaction to make a melee weapon attack against a random\
    \ creature within reach. If no creatures are within reach, it makes a ranged weapon\
    \ attack against a random creature within range, throwing its weapon if necessary.\
    \ This attack is made with advantage and gains a +4 bonus to the damage roll."
  "name": "Provoke Rage (Costs 3 Actions)"
"source":
- "ERLW"
"image": "[[Rak Tulkhesh.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 303*

## Description

Called the Rage of War, Rak Tulkhesh is the incarnation of impulses that drives many mortals to battle. Fear, greed, hatred—these are seeds that the Rage of War sows in the hopes of producing a bloody harvest.

Rak Tulkhesh typically takes the form of a vaguely draconic creature twisted by demonic rage. Covered in iron spikes protruding from his bleeding flesh, this overlord looms fifteen feet high at the shoulders, and his wings span over forty feet. While in combat, Rak Tulkhesh roars in rage as new weapons are spawned from his body, called forth by the Rage of War to slaughter all who dare stand before him.

**Khyber Shards.** Rak Tulkhesh's soul is divided among a group of Khyber shards spread through the underworld and is confined to those shards by the light of the Silver Flame. While shattered and bound, the Rage of War can't bring his full power to bear on the world. But he can influence events in the vicinity of any of his shards, drawing power from acts of violence.

The Last War was a boon that allowed Rak Tulkhesh to darken the hearts of soldiers and civilians alike, whose actions then weakened the overlord's bonds to give him even greater sway over the regions surrounding his shards. The violence seen in Thaliost and other occupied cities, the hatred against warforged and Cyran refugees, the calls for a return to war—all these things bear the mark of Rak Tulkhesh's malign influence.

**Minions of Rak Tulkhesh.** Any organization that fosters hatred unwittingly serves Rak Tulkhesh, and countless soldiers in the Five Nations are devoted to the Rage of War. Many of the Carrion Tribes of the Demon Wastes likewise serve Rak Tulkhesh and yearn to carry his bloody banner into the soft lands of the south. The minotaurs of Droaam revere Rak Tulkhesh as the Horned Prince. But the most powerful of the overlord's follower's is the rakshasa Mordakhesh the Shadowsword—Rak Tulkhesh's exarch among the Lords of Dust, who commands a host of fiends exerting the overlord's will across Khorvaire.

**Immortal Nature.** An overlord doesn't require air, food, drink or sleep. It also can't die permanently. Upon its death, it reforms elsewhere in the multiverse and becomes active again at a time set by the DM.

In the first days of the world, the children of Khyber rose from the darkness to reign over Eberron. The greatest among them were the overlords, who held dominion over a world of fear, war, and death until the children of Eberron and Siberys rose up against them. Armies of dragons fought against the fiends of Khyber. And though the overlords couldn't be destroyed, the couatl sacrificed their lives to build a prison of celestial light: a silver flame that bound the overlords in Khyber once more. These bonds have held for countless generations, but the overlords still yearn to break free and reclaim the world above.

As long as the overlords are bound by the Silver Flame, they can't physically manifest in the world. But each overlord embodies a particular aspect of evil, which grows in strength as their servants—the fiends known as the Lords of Dust—scheme to unleash their ancient masters. The overlords gain strength when mortals embrace the dark paths laid down for them. And as they grow stronger, they gain more influence.

Some thirty overlords are bound in Khyber. Two are described here: Rak Tulkhesh and Sul Khatesh, both of whom remain imprisoned and can't take physical form. The stat blocks provided here reflect the powers they would wield if they were ever unleashed upon the world.
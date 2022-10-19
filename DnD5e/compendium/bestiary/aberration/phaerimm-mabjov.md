---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/large
- monster/type/aberration
aliases: ["Phaerimm"]
statblock: true
"name": "Phaerimm"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"stats":
- !!int "20"
- !!int "13"
- !!int "16"
- !!int "19"
- !!int "20"
- !!int "23"
"speed": "walk 15 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Intelligence": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Arcana": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "petrified"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "Undercommon, understands Common, telepathy 100 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm is a 15th-level spellcaster. It's innate spellcasting ability\
    \ is Charisma (spell save DC 19, +11 to hit with spell attacks). It can innately\
    \ cast the following spells, requiring no material components:\n\nCantrips (at\
    \ will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [dissonant whispers](/compendium/spells/dissonant-whispers.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [phantasmal force](/compendium/spells/phantasmal-force.md)\n\
    \n3rd level (3 3rd-level slots): [fireball](/compendium/spells/fireball.md),\
    \ [fear](/compendium/spells/fear.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md), [phantasmal\
    \ killer](/compendium/spells/phantasmal-killer.md)\n\n5th level (2 5th-level\
    \ slots): [dominate person](/compendium/spells/dominate-person.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [mass suggestion](/compendium/spells/mass-suggestion.md)\n\
    \n7th level (1 7th-level slots): [prismatic spray](/compendium/spells/prismatic-spray.md),\
    \ [reverse gravity](/compendium/spells/reverse-gravity.md)\n\n8th level (1 8th-level\
    \ slots): [dominate monster](/compendium/spells/dominate-monster.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm discerns the location of all magical auras within sight and\
    \ knows which creatures within 60 feet are spellcasters."
  "name": "Arcane Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm can concentrate on two different spells at the same time.\
    \ If concentration is broken, then both spells fade immediately."
  "name": "Extended Concentration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm makes four attacks with its claws and a bite or stinger attack.\
    \ Alternatively, it attacks with two claws and casts one spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target fails a DC 18 Constitution saving throw,\
    \ they will be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The phaerimm's\
    \ poison forces the [paralyzed](/rules/conditions.md#paralyzed) target to float\
    \ five feet above the ground. The target may repeat the saving throw at the end\
    \ of each of it's turns."
  "name": "Stinger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm uses an action to do a stinger attack against a [paralyzed](/rules/conditions.md#paralyzed)\
    \ target. If the stinger hits, an egg is implanted in the target. This egg can\
    \ only be removed by spells that cure disease, such as lesser restoration. If\
    \ the egg is not removed within 90 days, the larva emerges, and the host is killed.\
    \ A phaerimm has a single egg so may only use this ability once."
  "name": "Implant"
"source":
- "MaBJoV"
name: Phaerimm
image: "[[Phaerimm.png]]"
---

# Phaerimm

```statblock
"name": "Phaerimm"
"size": "Large"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"stats":
- !!int "20"
- !!int "13"
- !!int "16"
- !!int "19"
- !!int "20"
- !!int "23"
"speed": "walk 15 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Intelligence": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Arcana": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "petrified"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "Undercommon, understands Common, telepathy 100 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm is a 15th-level spellcaster. It's innate spellcasting ability\
    \ is Charisma (spell save DC 19, +11 to hit with spell attacks). It can innately\
    \ cast the following spells, requiring no material components:\n\nCantrips (at\
    \ will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level (4 1st-level slots): [dissonant whispers](/compendium/spells/dissonant-whispers.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level (3 2nd-level slots): [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [phantasmal force](/compendium/spells/phantasmal-force.md)\n\
    \n3rd level (3 3rd-level slots): [fireball](/compendium/spells/fireball.md),\
    \ [fear](/compendium/spells/fear.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md), [phantasmal\
    \ killer](/compendium/spells/phantasmal-killer.md)\n\n5th level (2 5th-level\
    \ slots): [dominate person](/compendium/spells/dominate-person.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [mass suggestion](/compendium/spells/mass-suggestion.md)\n\
    \n7th level (1 7th-level slots): [prismatic spray](/compendium/spells/prismatic-spray.md),\
    \ [reverse gravity](/compendium/spells/reverse-gravity.md)\n\n8th level (1 8th-level\
    \ slots): [dominate monster](/compendium/spells/dominate-monster.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm discerns the location of all magical auras within sight and\
    \ knows which creatures within 60 feet are spellcasters."
  "name": "Arcane Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm can concentrate on two different spells at the same time.\
    \ If concentration is broken, then both spells fade immediately."
  "name": "Extended Concentration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm makes four attacks with its claws and a bite or stinger attack.\
    \ Alternatively, it attacks with two claws and casts one spell."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage. If the target fails a DC 18 Constitution saving throw,\
    \ they will be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The phaerimm's\
    \ poison forces the [paralyzed](/rules/conditions.md#paralyzed) target to float\
    \ five feet above the ground. The target may repeat the saving throw at the end\
    \ of each of it's turns."
  "name": "Stinger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phaerimm uses an action to do a stinger attack against a [paralyzed](/rules/conditions.md#paralyzed)\
    \ target. If the stinger hits, an egg is implanted in the target. This egg can\
    \ only be removed by spells that cure disease, such as lesser restoration. If\
    \ the egg is not removed within 90 days, the larva emerges, and the host is killed.\
    \ A phaerimm has a single egg so may only use this ability once."
  "name": "Implant"
"source":
- "MaBJoV"
"image": "[[Phaerimm.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 147*

## Description

Highly intelligent, phaerimms are malevolent aberrations that dwell deep beneath the surface of the world. Natural spellcasters, they delight in bringing pain and suffering to others. It is said phaerimms would willingly wipe every other being from existence, save for the fact they would then lack slaves to torture for sport.

**Monstrous Horrors.** Phaerimms are hideous looking creatures—bulbous bodies with spindly arms and legs, topped by a gaping maw filled with row upon row of razor-sharp teeth. Their evil magic drains life and moisture from the natural world, and the Anauroch Desert was created through extensive use of their powers.

**Mental Enslavement.** A phaerimm's mind-controlling abilities rival those of any mind flayer or beholder. Extremely solitary beings, they surround themselves with a retinue of mentally dominated creatures that serve as bodyguards, soldiers, and hunters. When these thralls cease to be useful, they are slaughtered and devoured by their phaerimm master. The phaerimm language is incomprehensible to humanoids, even with the use of magical assistance. However, a phaerimm can use telepathic magic to communicate with other beings through its slaves, though due to their solitary existence they seldom have need to communicate at all. The only real exception occurs on those rare occasions when several phaerimm will work together to defeat an enemy that is too strong for them to face individually.

**An Endangered Species.** Phaerimms were pushed to the edge of extinction thousands of years ago by the ancient Netherese wizards. Only a few isolated pockets still exist, typically sealed away in deep chambers by their enemies. Phaerimms still have a particular hatred for tomb tappers, a Netherese construct that is immune to their mind control. Their population has been slow to recover from this purge, as a phaerimm is only capable of producing a single egg every century. This egg must be injected into a host through a stinger on the phaerimm's tail, which paralyzes the victim. The larva then consumes the host—still alive—from the inside.
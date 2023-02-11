---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Androsphinx"]
statblock: true
"name": "Androsphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"stats":
- !!int "22"
- !!int "10"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "23"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Constitution": !!int "11"
"skillsaves":
  "Religion": !!int "15"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common, Sphinx"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). It requires no material components\
    \ to cast its spells. The sphinx has the following cleric spells prepared:\n\n\
    Cantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md), [spare\
    \ the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md)\n\n2nd level (3 2nd-level slots):\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\
    \n5th level (2 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [greater restoration](/compendium/spells/greater-restoration.md)\n\n6th level\
    \ (1 6th-level slots): [heroes' feast](/compendium/spells/heroes-feast.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as any divination spell that it refuses. Wisdom (Insight)\
    \ checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx emits a magical roar. Each time it roars before finishing a\
    \ long rest, the roar is louder and the effect is different, as detailed below.\
    \ Each creature within 500 feet of the sphinx and able to hear the roar must make\
    \ a saving throw.\n\n- First Roar. Each creature that fails a DC 18 Wisdom\
    \ saving throw is [frightened](/rules/conditions.md#frightened) for 1 minute.\
    \ A [frightened](/rules/conditions.md#frightened) creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\n\
    - Second Roar. Each creature that fails a DC 18 Wisdom saving throw is [deafened](/rules/conditions.md#deafened)\
    \ and [frightened](/rules/conditions.md#frightened) for 1 minute. A [frightened](/rules/conditions.md#frightened)\
    \ creature is [paralyzed](/rules/conditions.md#paralyzed) and can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\n\
    - Third Roar. Each creature makes a DC 18 Constitution saving throw. On a\
    \ failed save, a creature takes 44 (8d10) thunder damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, the creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Roar (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx makes one claw attack."
  "name": "Claw Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx casts a spell from its list of prepared spells, using a spell\
    \ slot as normal."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "MM"
- "EGW"
- "MOT"
- "CM"
name: Androsphinx
image: "[[Androsphinx.png]]"
---

# Androsphinx

```statblock
"name": "Androsphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"stats":
- !!int "22"
- !!int "10"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "23"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Constitution": !!int "11"
"skillsaves":
  "Religion": !!int "15"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common, Sphinx"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 18, +10 to hit with spell attacks). It requires no material components\
    \ to cast its spells. The sphinx has the following cleric spells prepared:\n\n\
    Cantrips (at will): [sacred flame](/compendium/spells/sacred-flame.md), [spare\
    \ the dying](/compendium/spells/spare-the-dying.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [detect\
    \ magic](/compendium/spells/detect-magic.md)\n\n2nd level (3 2nd-level slots):\
    \ [lesser restoration](/compendium/spells/lesser-restoration.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\
    \n5th level (2 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [greater restoration](/compendium/spells/greater-restoration.md)\n\n6th level\
    \ (1 6th-level slots): [heroes' feast](/compendium/spells/heroes-feast.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as any divination spell that it refuses. Wisdom (Insight)\
    \ checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx emits a magical roar. Each time it roars before finishing a\
    \ long rest, the roar is louder and the effect is different, as detailed below.\
    \ Each creature within 500 feet of the sphinx and able to hear the roar must make\
    \ a saving throw.\n\n- First Roar. Each creature that fails a DC 18 Wisdom\
    \ saving throw is [frightened](/rules/conditions.md#frightened) for 1 minute.\
    \ A [frightened](/rules/conditions.md#frightened) creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\n\
    - Second Roar. Each creature that fails a DC 18 Wisdom saving throw is [deafened](/rules/conditions.md#deafened)\
    \ and [frightened](/rules/conditions.md#frightened) for 1 minute. A [frightened](/rules/conditions.md#frightened)\
    \ creature is [paralyzed](/rules/conditions.md#paralyzed) and can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\n\
    - Third Roar. Each creature makes a DC 18 Constitution saving throw. On a\
    \ failed save, a creature takes 44 (8d10) thunder damage and is knocked [prone](/rules/conditions.md#prone).\
    \ On a successful save, the creature takes half as much damage and isn't knocked\
    \ [prone](/rules/conditions.md#prone)."
  "name": "Roar (3/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx makes one claw attack."
  "name": "Claw Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx casts a spell from its list of prepared spells, using a spell\
    \ slot as normal."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "MM"
- "EGW"
- "MOT"
- "CM"
"image": "[[Androsphinx.png]]"
```
^statblock

*Source: Monster Manual p. 281, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries*

## Description

An androsphinx bears the head of a humanoid male on its lion's body. Outwardly gruff and downcast, it often begins conversations with insults or negative observations. Beneath this gruff exterior, however, an androsphinx has a noble heart. It has no wish to lie or deceive, but it doesn't give away information readily, choosing its words as wisely as it guards its secrets.

An androsphinx tests the courage and valor of supplicants, not only by forcing them to complete quests but also with its terrible roar, which echoes for miles as it terrifies and deafens nearby creatures. Those who pass its tests may be rewarded with a heroes' feast.

**Sphinxes.** In sacred isolation, a sphinx guards the secrets and treasures of the gods. As it calmly regards each new party that comes before it, the bones of supplicants and quest seekers that failed to pass its tests lie scattered around its lair. Its great wings sweep along its flanks, its tawny leonine body rippling with muscle and possessed of forepaws powerful enough to tear a humanoid in half.

**Divine Guardians.** Sphinxes test the worth of those who seek the treasures of the gods, whether forgotten secrets or mighty spells, artifacts or magical gateways. Creatures that choose to face a sphinx's test are bound to that test unto death, and only those worthy will survive it. The rest the sphinx destroys.

Some sphinxes are high priests of the gods that create them, but most are simply embodied spirits, brought into the mortal realm by devout prayer or direct intervention. A sphinx maintains its vigil tirelessly, not needing to sleep or eat. It rarely engages with others of its kind, knowing no other life except its sacred mission.

**Magical Tests.**  The secrets and treasures a sphinx guards remain under divine protection, so that when a creature fails a sphinx's test, the path to the object or knowledge it guards vanishes. Even if a sphinx is attacked and defeated, a quester will still fail to gain the secret it sought-and will make an enemy of the god that placed the sphinx as a guardian.

Benign deities sometimes grant a sphinx the power to remove supplicants that fail their tests, transporting them away and ensuring that they never encounter the sphinx again. However, those who fail a sphinx's test typically meet a gruesome end beneath its claws.

**Extraplanar Beings.**  Mortals that encounter sphinxes do so most often in ancient tombs and ruins, but some sphinxes can access extraplanar realms. A conversation with a sphinx that begins between tumbled stone walls might suddenly shift to an alien locale, such as a life-sized game board or a daunting cliff that must be climbed in a howling storm. Sometimes a sphinx must be summoned from such an extradimensional space, with supplicants calling it from its empty lair. Only those the sphinx deems worthy gain admittance to its realm.

**Fallen Sphinxes.**  Whether through the weariness of the ages, regret at the slaughter of innocents, or dreams of worship by supplicants that attempt to bargain their way to knowledge, some sphinxes break free of their divine command. However, even if a sphinx's alignment and loyalties drift in this way, it never leaves the place it guards or grants its secrets to any except creatures it deems worthy.

**A Sphinx's Lair.** A sphinx presides over an ancient temple, sepulcher, or vault, within which are hidden divine secrets and treasures beyond the reach of mortals.

## Environment

desert
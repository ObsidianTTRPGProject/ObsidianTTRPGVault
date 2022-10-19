---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Gynosphinx"]
statblock: true
"name": "Gynosphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "18"
"speed": "walk 40 ft., fly 60 ft."
"skillsaves":
  "Religion": !!int "8"
  "Perception": !!int "8"
  "History": !!int "12"
  "Arcana": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Sphinx"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). It requires no material components\
    \ to cast its spells. The sphinx has the following wizard spells prepared:\n\n\
    Cantrips (at will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [locate object](/compendium/spells/locate-object.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [remove curse](/compendium/spells/remove-curse.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md)\n\
    \n5th level (1 5th-level slots): [legend lore](/compendium/spells/legend-lore.md)"
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claw"
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
- "TftYP"
- "IMR"
- "MOT"
- "JttRC"
name: Gynosphinx
image: "[[Gynosphinx.png]]"
---

# Gynosphinx

```statblock
"name": "Gynosphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "18"
"speed": "walk 40 ft., fly 60 ft."
"skillsaves":
  "Religion": !!int "8"
  "Perception": !!int "8"
  "History": !!int "12"
  "Arcana": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Sphinx"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). It requires no material components\
    \ to cast its spells. The sphinx has the following wizard spells prepared:\n\n\
    Cantrips (at will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [identify](/compendium/spells/identify.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [locate object](/compendium/spells/locate-object.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [remove curse](/compendium/spells/remove-curse.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md)\n\
    \n5th level (1 5th-level slots): [legend lore](/compendium/spells/legend-lore.md)"
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claw"
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
- "TftYP"
- "IMR"
- "MOT"
- "JttRC"
"image": "[[Gynosphinx.png]]"
```
^statblock

*Source: Monster Manual p. 282, Tales from the Yawning Portal, Infernal Machine Rebuild, Mythic Odysseys of Theros, Journeys through the Radiant Citadel*

## Description

A gynosphinx bears the head of a humanoid female. Many have the regal countenances of worldly queens, but some are marked with wild, leonine features. A gynosphinx's eyes see beyond the present time and place, and penetrate veils of invisibility and magic.

Supplicants who look deep into those eyes might find themselves magically displaced, banished to some far flung plane where a difficult trial awaits them.

Gynosphinxes are virtual libraries of knowledge and lore. They ask riddles and present puzzles to test the wit of supplicants that come to learn their secrets. Some are willing to bargain with such supplicants for treasure or service.

**Sphinxes.** In sacred isolation, a sphinx guards the secrets and treasures of the gods. As it calmly regards each new party that comes before it, the bones of supplicants and quest seekers that failed to pass its tests lie scattered around its lair. Its great wings sweep along its flanks, its tawny leonine body rippling with muscle and possessed of forepaws powerful enough to tear a humanoid in half. Divine Guardians. Sphinxes test the worth of those who seek the treasures of the gods, whether forgotten secrets or mighty spells, artifacts or magical gateways. Creatures that choose to face a sphinx's test are bound to that test unto death, and only those worthy will survive it. The rest the sphinx destroys.

Some sphinxes are high priests of the gods that create them, but most are simply embodied spirits, brought into the mortal realm by devout prayer or direct intervention. A sphinx maintains its vigil tirelessly, not needing to sleep or eat. It rarely engages with others of its kind, knowing no other life except its sacred mission.

**Magical Tests.**  The secrets and treasures a sphinx guards remain under divine protection, so that when a creature fails a sphinx's test, the path to the object or knowledge it guards vanishes. Even if a sphinx is attacked and defeated, a quester will still fail to gain the secret it sought-and will make an enemy of the god that placed the sphinx as a guardian.

Benign deities sometimes grant a sphinx the power to remove supplicants that fail their tests, transporting them away and ensuring that they never encounter the sphinx again. However, those who fail a sphinx's test typically meet a gruesome end beneath its claws.

**Extraplanar Beings.**  Mortals that encounter sphinxes do so most often in ancient tombs and ruins, but some sphinxes can access extraplanar realms. A conversation with a sphinx that begins between tumbled stone walls might suddenly shift to an alien locale, such as a life-sized game board or a daunting cliff that must be climbed in a howling storm. Sometimes a sphinx must be summoned from such an extradimensional space, with supplicants calling it from its empty lair. Only those the sphinx deems worthy gain admittance to its realm.

**Fallen Sphinxes.**  Whether through the weariness of the ages, regret at the slaughter of innocents, or dreams of worship by supplicants that attempt to bargain their way to knowledge, some sphinxes break free of their divine command. However, even if a sphinx's alignment and loyalties drift in this way, it never leaves the place it guards or grants its secrets to any except creatures it deems worthy.

**A Sphinx's Lair.** A sphinx presides over an ancient temple, sepulcher, or vault, within which are hidden divine secrets and treasures beyond the reach of mortals.

## Environment

desert
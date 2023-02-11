---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Sphinx (Type 1)"]
statblock: true
"name": "Sphinx (Type 1)"
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
- "PSZ"
name: Sphinx (Type 1)
image: "[[Sphinx (Type 1).png]]"
---

# Sphinx (Type 1)

```statblock
"name": "Sphinx (Type 1)"
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
- "PSZ"
"image": "[[Sphinx (Type 1).png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 24*

## Environment

desert
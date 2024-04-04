---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Androsphinx"]
---
# [Androsphinx](3-Mechanics\CLI\bestiary\monstrosity/androsphinx.md)
*Source: Monster Manual p. 281. Available in the SRD.*  

```statblock
"name": "Androsphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"stats":
- !!int "22"
- !!int "10"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "23"
"speed": "40 ft., fly 60 ft."
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
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common, Sphinx"
"cr": "17"
"traits":
- "desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 18, dice: d20+10 (+10) to hit with spell attacks). It requires\
    \ no material components to cast its spells. The sphinx has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [sacred flame](/3-Mechanics/CLI/spells/sacred-flame.md),\
    \ [spare the dying](/3-Mechanics/CLI/spells/spare-the-dying.md), [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [command](/3-Mechanics/CLI/spells/command.md), [detect\
    \ evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md)\n\
    \n2nd level (3 slots): [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [zone of truth](/3-Mechanics/CLI/spells/zone-of-truth.md)\n\n3rd level (3\
    \ slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), [tongues](/3-Mechanics/CLI/spells/tongues.md)\n\
    \n4th level (3 slots): [banishment](/3-Mechanics/CLI/spells/banishment.md),\
    \ [freedom of movement](/3-Mechanics/CLI/spells/freedom-of-movement.md)\n\n5th\
    \ level (2 slots): [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md)\n\n6th\
    \ level (1 slots): [heroes' feast](/3-Mechanics/CLI/spells/heroes-feast.md)"
  "name": "spells"
- "desc": "The sphinx is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as any divination spell that it refuses. Wisdom ([Insight](/3-Mechanics/CLI/rules/skills.md#Insight))\
    \ checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- "desc": "The sphinx's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The sphinx makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d10 + 6|text(17) (2d10 + 6) slashing damage."
  "name": "Claw"
- "desc": "The sphinx emits a magical roar. Each time it roars before finishing a\
    \ long rest, the roar is louder and the effect is different, as detailed below.\
    \ Each creature within 500 feet of the sphinx and able to hear the roar must make\
    \ a saving throw.\n\n- First Roar. Each creature that fails a DC 18 Wisdom\
    \ saving throw is [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ for 1 minute. A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  \n- Second Roar. Each creature that\
    \ fails a DC 18 Wisdom saving throw is [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)\
    \ and [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) for 1 minute.\
    \ A [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened) creature is\
    \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed) and can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success.  \n- Third Roar. Each creature makes a DC 18 Constitution saving\
    \ throw. On a failed save, a creature takes dice:8d10|text(44) (8d10) thunder\
    \ damage and is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone). On\
    \ a successful save, the creature takes half as much damage and isn't knocked\
    \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone).  "
  "name": "Roar (3/Day)"
"legendary_actions":
- "desc": "The sphinx makes one claw attack."
  "name": "Claw Attack"
- "desc": "The sphinx magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport (Costs 2 Actions)"
- "desc": "The sphinx casts a spell from its list of prepared spells, using a spell\
    \ slot as normal."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "MM"
- "EGW"
- "MOT"
- "CM"
- "SatO"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/androsphinx.webp"
```
^statblock

## Environment

desert
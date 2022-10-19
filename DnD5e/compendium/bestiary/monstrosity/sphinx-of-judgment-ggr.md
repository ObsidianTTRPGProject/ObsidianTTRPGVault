---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Sphinx of Judgment"]
statblock: true
"name": "Sphinx of Judgment"
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
    Cantrips (at will): [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1st level (4 1st-level slots):\
    \ [command](/compendium/spells/command.md), [ensnaring strike](/compendium/spells/ensnaring-strike.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [calm emotions](/compendium/spells/calm-emotions.md), [hold person](/compendium/spells/hold-person.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [divination](/compendium/spells/divination.md)\n\
    \n5th level (1 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
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
- "GGR"
name: Sphinx of Judgment
image: "[[Sphinx of Judgment.png]]"
---

# Sphinx of Judgment

```statblock
"name": "Sphinx of Judgment"
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
    Cantrips (at will): [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [message](/compendium/spells/message.md)\n\n1st level (4 1st-level slots):\
    \ [command](/compendium/spells/command.md), [ensnaring strike](/compendium/spells/ensnaring-strike.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [calm emotions](/compendium/spells/calm-emotions.md), [hold person](/compendium/spells/hold-person.md),\
    \ [suggestion](/compendium/spells/suggestion.md)\n\n3rd level (3 3rd-level slots):\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n4th level (3 4th-level\
    \ slots): [banishment](/compendium/spells/banishment.md), [divination](/compendium/spells/divination.md)\n\
    \n5th level (1 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
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
- "GGR"
"image": "[[Sphinx of Judgment.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 183*

## Environment

desert
---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/gargantuan
- monster/type/monstrosity
aliases: ["Isperia"]
statblock: true
"name": "Isperia"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "261"
"hit_dice": "18d20 + 72"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "23"
- !!int "26"
- !!int "20"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "15"
  "Intelligence": !!int "13"
  "Constitution": !!int "11"
"skillsaves":
  "Insight": !!int "15"
  "Perception": !!int "15"
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "Common, Sphinx"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia's innate spellcasting ability is Wisdom (spell save DC 23). Isperia\
    \ can innately cast [imprisonment](/compendium/spells/imprisonment.md) twice per\
    \ day, requiring no material components.\n\n2/day: [imprisonment](/compendium/spells/imprisonment.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia is a 15th-level Azorius spellcaster. Her spellcasting ability is\
    \ Wisdom (spell save DC 23, +14 to hit with spell attacks). Isperia has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [resistance](/compendium/spells/resistance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [ensnaring\
    \ strike](/compendium/spells/ensnaring-strike.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [arcane lock](/compendium/spells/arcane-lock.md), [augury](/compendium/spells/augury.md),\
    \ [calm emotions](/compendium/spells/calm-emotions.md), [hold person](/compendium/spells/hold-person.md),\
    \ [silence](/compendium/spells/silence.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n3rd level (3 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [tongues](/compendium/spells/tongues.md)\n\
    \n4th level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [locate creature](/compendium/spells/locate-creature.md)\n\n5th level (2 5th-level\
    \ slots): [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [word of recall](/compendium/spells/word-of-recall.md)\n\n7th level (1 7th-level\
    \ slots): [divine word](/compendium/spells/divine-word.md)\n\n8th level (1\
    \ 8th-level slots): [antimagic field](/compendium/spells/antimagic-field.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia is immune to any effect that would sense her emotions or read her\
    \ thoughts, as well as any divination spell that she refuses. Wisdom (Insight)\
    \ checks made to ascertain her intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Isperia fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia makes two claw attacks. She can cast a spell with a casting time\
    \ of 1 action in place of one claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) slashing damage. If the target is a creature, it must succeed on a DC 23\
    \ Wisdom saving throw or take 14 (4d6) psychic damage after each attack it makes\
    \ against Isperia before the start of her next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia chooses up to three creatures she can see within 90 feet of her.\
    \ Each target must succeed on a DC 23 Intelligence saving throw or Isperia chooses\
    \ an action for that target: Attack, Cast a Spell, Dash, Disengage, Dodge, Help,\
    \ Hide, Ready, Search, or Use an Object. The affected target can't take that action\
    \ for 1 minute. At the end of each of the target's turns, it can end the effect\
    \ on itself with a successful DC 23 Intelligence saving throw. A target that succeeds\
    \ on the saving throw becomes immune to Isperia's Supreme Legal Authority for\
    \ 24 hours."
  "name": "Supreme Legal Authority"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia makes one claw attack."
  "name": "Claw Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia casts a spell of 3rd level or lower from her list of prepared spells,\
    \ using a spell slot as normal."
  "name": "Cast a Spell (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia uses Supreme Legal Authority."
  "name": "Supreme Legal Authority (Costs 3 Actions)"
"source":
- "GGR"
name: Isperia
image: "[[Isperia.png]]"
---

# Isperia

```statblock
"name": "Isperia"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "261"
"hit_dice": "18d20 + 72"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "23"
- !!int "26"
- !!int "20"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "15"
  "Intelligence": !!int "13"
  "Constitution": !!int "11"
"skillsaves":
  "Insight": !!int "15"
  "Perception": !!int "15"
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "Common, Sphinx"
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia's innate spellcasting ability is Wisdom (spell save DC 23). Isperia\
    \ can innately cast [imprisonment](/compendium/spells/imprisonment.md) twice per\
    \ day, requiring no material components.\n\n2/day: [imprisonment](/compendium/spells/imprisonment.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia is a 15th-level Azorius spellcaster. Her spellcasting ability is\
    \ Wisdom (spell save DC 23, +14 to hit with spell attacks). Isperia has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [resistance](/compendium/spells/resistance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [ensnaring\
    \ strike](/compendium/spells/ensnaring-strike.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [arcane lock](/compendium/spells/arcane-lock.md), [augury](/compendium/spells/augury.md),\
    \ [calm emotions](/compendium/spells/calm-emotions.md), [hold person](/compendium/spells/hold-person.md),\
    \ [silence](/compendium/spells/silence.md), [zone of truth](/compendium/spells/zone-of-truth.md)\n\
    \n3rd level (3 3rd-level slots): [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [counterspell](/compendium/spells/counterspell.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [tongues](/compendium/spells/tongues.md)\n\
    \n4th level (3 4th-level slots): [divination](/compendium/spells/divination.md),\
    \ [locate creature](/compendium/spells/locate-creature.md)\n\n5th level (2 5th-level\
    \ slots): [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [scrying](/compendium/spells/scrying.md)\n\n6th level (1 6th-level slots):\
    \ [word of recall](/compendium/spells/word-of-recall.md)\n\n7th level (1 7th-level\
    \ slots): [divine word](/compendium/spells/divine-word.md)\n\n8th level (1\
    \ 8th-level slots): [antimagic field](/compendium/spells/antimagic-field.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia is immune to any effect that would sense her emotions or read her\
    \ thoughts, as well as any divination spell that she refuses. Wisdom (Insight)\
    \ checks made to ascertain her intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Isperia fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia makes two claw attacks. She can cast a spell with a casting time\
    \ of 1 action in place of one claw attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) slashing damage. If the target is a creature, it must succeed on a DC 23\
    \ Wisdom saving throw or take 14 (4d6) psychic damage after each attack it makes\
    \ against Isperia before the start of her next turn."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia chooses up to three creatures she can see within 90 feet of her.\
    \ Each target must succeed on a DC 23 Intelligence saving throw or Isperia chooses\
    \ an action for that target: Attack, Cast a Spell, Dash, Disengage, Dodge, Help,\
    \ Hide, Ready, Search, or Use an Object. The affected target can't take that action\
    \ for 1 minute. At the end of each of the target's turns, it can end the effect\
    \ on itself with a successful DC 23 Intelligence saving throw. A target that succeeds\
    \ on the saving throw becomes immune to Isperia's Supreme Legal Authority for\
    \ 24 hours."
  "name": "Supreme Legal Authority"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia makes one claw attack."
  "name": "Claw Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia casts a spell of 3rd level or lower from her list of prepared spells,\
    \ using a spell slot as normal."
  "name": "Cast a Spell (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Isperia uses Supreme Legal Authority."
  "name": "Supreme Legal Authority (Costs 3 Actions)"
"source":
- "GGR"
"image": "[[Isperia.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 227*

## Description

Isperia is the current guildmaster of the Azorius Senate. As a sphinx, she is aloof and values solitude above all. However, she has been forced to give up her privacy to deal with the increased crime and chaos on Ravnica.

Isperia is devoted to her guild's belief that law is the ultimate bulwark against chaos, and it is her steady hand that guides the Azorius through these uncertain times. As guildmaster, Isperia serves as the supreme judge, a role that takes advantage of her encyclopedic knowledge of Ravnica's labyrinthine legal system.

If an encounter turns violent, Isperia refrains from using lethal force if possible, preferring to subdue a wrongdoing so that the legal system can mete out justice.
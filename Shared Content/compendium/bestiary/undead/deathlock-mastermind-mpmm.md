---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/undead/warlock
- monster/environment/urban
aliases: ["Deathlock Mastermind"]
statblock: true
"name": "Deathlock Mastermind"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"stats":
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "History": !!int "5"
  "Arcana": !!int "5"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the deathlock's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6\
    \ + 3 necrotic damage)."
  "name": "Deathly Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 13 (3d8)\
    \ necrotic damage. If the target is Large or smaller, it must succeed on a DC\
    \ 16 Strength saving throw or become [restrained](/rules/conditions.md#restrained)\
    \ as shadowy tendrils wrap around it for 1 minute. A [restrained](/rules/conditions.md#restrained)\
    \ target can use its action to repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Grave Bolt"
"source":
- "MPMM"
- "MTF"
name: Deathlock Mastermind
image: "[[Deathlock Mastermind.png]]"
---

# Deathlock Mastermind

```statblock
"name": "Deathlock Mastermind"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"stats":
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "History": !!int "5"
  "Arcana": !!int "5"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the deathlock's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6\
    \ + 3 necrotic damage)."
  "name": "Deathly Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 13 (3d8)\
    \ necrotic damage. If the target is Large or smaller, it must succeed on a DC\
    \ 16 Strength saving throw or become [restrained](/rules/conditions.md#restrained)\
    \ as shadowy tendrils wrap around it for 1 minute. A [restrained](/rules/conditions.md#restrained)\
    \ target can use its action to repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Grave Bolt"
"source":
- "MPMM"
- "MTF"
"image": "[[Deathlock Mastermind.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87, Mordenkainen's Tome of Foes p. 129*

## Description

Though deathlocks exist to serve their patrons, they retain some freedom when it comes to devising tactics and carrying out plans. Powerful deathlocks recruit lesser creatures to help them carry out their missions, becoming the masterminds behind vast conspiracies and intrigues that culminate in the accomplishment of great acts of evil.

**Deathlocks.** The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

## Environment

urban
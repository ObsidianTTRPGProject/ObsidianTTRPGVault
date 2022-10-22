---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Istrid Horn"]
statblock: true
"name": "Istrid Horn"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 25 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Religion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Dwarvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid is a 9th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks) She has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1st level (4 1st-level slots): [divine favor](/compendium/spells/divine-favor.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [healing word](/compendium/spells/healing-word.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [magic\
    \ weapon](/compendium/spells/magic-weapon.md), [hold person](/compendium/spells/hold-person.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [revivify](/compendium/spells/revivify.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (1 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned)."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) bludgeoning damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid magically pinpoints precious metals and stones, such as coins and\
    \ gems, within 60 feet of her."
  "name": "Treasure Sense (3/Day)"
"source":
- "WDH"
name: Istrid Horn
image: "[[Istrid Horn.png]]"
---

# Istrid Horn

```statblock
"name": "Istrid Horn"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 25 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
  "Religion": !!int "3"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Dwarvish"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid is a 9th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 14, +6 to hit with spell attacks) She has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md)\n\
    \n1st level (4 1st-level slots): [divine favor](/compendium/spells/divine-favor.md),\
    \ [guiding bolt](/compendium/spells/guiding-bolt.md), [healing word](/compendium/spells/healing-word.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [lesser restoration](/compendium/spells/lesser-restoration.md), [magic\
    \ weapon](/compendium/spells/magic-weapon.md), [hold person](/compendium/spells/hold-person.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [revivify](/compendium/spells/revivify.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (1 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid has advantage on saving throws against being [poisoned](/rules/conditions.md#poisoned)."
  "name": "Dwarven Resilience"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) bludgeoning damage."
  "name": "Maul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Istrid magically pinpoints precious metals and stones, such as coins and\
    \ gems, within 60 feet of her."
  "name": "Treasure Sense (3/Day)"
"source":
- "WDH"
"image": "[[Istrid Horn.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 199*

## Description

Istrid is regarded as the Black Network's Master of Trade and Coin in Waterdeep. The shield dwarf operates an illegal lending operation out of a heavily guarded warehouse in the Dock Ward, offering loans to those in need of coin. Her interest rates are comparable to those of her competitors (including noble families of bankers such as the Cassalanters and the Irlingstars), but the penalties for not paying back Istrid's loans are severe.

Istrid worships Vergadain, the dwarven god of wealth and luck. She likes having others indebted to her, and she employs thugs and enforcers to collect on her loans. If those resources prove inadequate, Istrid can call on her old adventuring companions for assistance.

**The Doom Raiders.** The Doom Raiders were five unscrupulous adventurers who liked to plunder lich lairs (called "dooms" by some). They gave up adventuring to join the Black Network and came to Waterdeep three years ago with plans to establish a Zhentarim foothold in the city. In that time, they have forged alliances with various nobles and guilds and run afoul of others, all the while fending off Harper spies.